import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { getPostDetail } from "@/api/post";
import { addComment, getComment } from "@/api/comment";
import Text from "@/components/common/Text";
import Input from "../common/Input";
import Button from "../common/Button";

interface Post {
    title: string;
    author: string;
    date: string;
    content: string;
}

interface Comment {
    id: number;
    postId: number;
    content: string;
    author: string;
    createdAt: string;
}

interface Props {
    postId: number;
    onClose: () => void;
}

const PostsDetail: React.FC<Props> = ({ postId, onClose }) => {
    const [post, setPost] = useState<Post | null>(null);
    const [writeComment, setWriteComment] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const commentsEndRef = useRef<HTMLDivElement>(null);

    const fetchPostAndComments = async () => {
        try {
            setIsLoading(true);
            const [postResponse, commentResponse] = await Promise.all([
                getPostDetail(postId),
                getComment(postId),
            ]);

            if (postResponse && postResponse.length > 0) {
                setPost(postResponse[0]);
            } else {
                setError("게시물을 찾을 수 없습니다.");
            }

            if (commentResponse && commentResponse.length > 0) {
                setComments(commentResponse);
            }
        } catch (e) {
            setError("데이터를 불러오는 데 실패했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPostAndComments();
    }, [postId]);

    useEffect(() => {
        if (commentsEndRef.current) {
            commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [comments]);

    const commentOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWriteComment(e.target.value);
    };

    const submitComments = async () => {
        if (!writeComment.trim()) {
            alert("댓글 내용을 입력해주세요.");
            return;
        }

        try {
            const newComment = {
                id: postId,
                postId: postId,
                author: "박건우", // 실제 사용자 정보로 대체해야 함
                content: writeComment,
                createdAt: new Date().toISOString(),
            };
            const response = await addComment(newComment);
            setComments((prevComments) => [...prevComments, response]);
            setWriteComment("");
        } catch (e) {
            alert("댓글 추가에 실패했습니다.");
        }
    };

    const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            submitComments();
        }
    };
    const modalContent = (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-[1000px] h-[594px] bg-black rounded-2xl border border-white p-8 relative text-white">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                    <div>X</div>
                </button>
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <Text size="h3" className="text-white">
                            로딩 중...
                        </Text>
                    </div>
                ) : error ? (
                    <div className="flex items-center justify-center h-full">
                        <Text size="h3" className="text-white">
                            {error}
                        </Text>
                    </div>
                ) : post ? (
                    <div className="flex h-full">
                        <div className="flex flex-col space-y-8 flex-grow">
                            <div className="space-y-4 flex flex-col">
                                <Text size="h3" className="text-white">
                                    제목: {post.title}
                                </Text>
                                <Text size="h3" className="text-white">
                                    작성자: {post.author}
                                </Text>
                                <Text size="h3" className="text-white">
                                    작성일: {post.date}
                                </Text>
                            </div>
                            <div className="space-y-4">
                                <Text size="h3" className="text-white">
                                    content
                                </Text>
                                <div className="w-full h-[213px] p-4 overflow-auto border border-white">
                                    <Text size="body">{post.content}</Text>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Input
                                    type="xlong"
                                    value={writeComment}
                                    onChange={commentOnchange}
                                    onKeyPress={activeEnter}
                                />
                                <Button type="write1" onClick={submitComments}>
                                    <Text size="body">write</Text>
                                </Button>
                            </div>
                        </div>
                        <div className="ml-4 space-y-4 w-[225px]">
                            <Text size="h3" className="text-white">
                                comment
                            </Text>
                            <div className="w-full h-[368px] border border-white p-5 overflow-y-auto">
                                {comments && comments.length > 0 ? (
                                    comments?.map((comment) => (
                                        <>
                                            <div key={comment.id} className="mb-4">
                                                <Text size="button" className="font-bold">
                                                    {comment.author}
                                                </Text>
                                                <br />
                                                <Text size="body">{comment.content}</Text>
                                            </div>
                                        </>
                                    ))
                                ) : (
                                    <div>댓글이 없습니다.</div>
                                )}
                                <div ref={commentsEndRef} />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default PostsDetail;
