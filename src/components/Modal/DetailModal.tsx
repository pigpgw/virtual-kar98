import Text from "@/components/common/Text";
import Input from "../common/Input";
import Button from "../common/Button";
import { useEffect, useState, useRef } from "react";
import useUserStore from "@/store/userStore/users";
import { deletePostDetail } from "@/api/post/post";
import { addComment } from "@/api/comment";
import { MESSAGE } from "@/constants/description";
import { useGetPostQuery } from "@/hooks/react-query/usePostQuery";

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

const PostsDetail = ({ postId, onClose }: Props) => {
    // const [post, setPost] = useState<Post | null>(null);
    const { data: post, isError, isLoading } = useGetPostQuery(postId);
    const [comments, setComments] = useState<Comment[]>([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

    const [writeComment, setWriteComment] = useState("");
    const commentsEndRef = useRef<HTMLDivElement>(null);
    const [mine] = useState(false);

    const { username } = useUserStore();

    const fetchDeletePost = async () => {
        try {
            await deletePostDetail(postId);
            alert(MESSAGE.POST_DELETE_SUCCESS);
            onClose();
        } catch (e) {
            alert(e);
        }
    };

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
            alert(MESSAGE.INPUT_COMMENT_EMPTY_CONTENT);
            return;
        }

        try {
            const newComment = {
                id: postId,
                postId: postId,
                author: username as string, // 실제 사용자 정보로 대체해야 함
                content: writeComment,
                createdAt: new Date().toISOString(),
            };
            const response = await addComment(newComment);
            setComments((prevComments) => [...prevComments, response]);
            setWriteComment("");
        } catch (e) {
            alert(MESSAGE.COMMENT_CREATE_FAIL);
        }
    };

    const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.key === "Enter") {
            submitComments();
        }
    };

    if (!post || isLoading)
        return (
            <div className="flex items-center justify-center h-full">
                <Text size="h3" className="text-white">
                    로딩 중...
                </Text>
            </div>
        );
    if (isError)
        return (
            <div className="flex items-center justify-center h-full">
                <Text size="h3" className="text-white">
                    에러
                </Text>
            </div>
        );

    return (
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
            <div className="ml-4 space-y-4 w-[225px] flex flex-col justify-between">
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
                {mine && (
                    <div className="">
                        <Button
                            type="my"
                            className="flex w-full justify-end pr-2"
                            onClick={fetchDeletePost}
                        >
                            <Text size="body" className="text-white">
                                글 삭제하기
                            </Text>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostsDetail;
