import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Text from "@/components/common/Text";
import Input from "../common/Input";
import Button from "../common/Button";
import { addPost, getTotalPost } from "@/api/post";

interface WriteModalProps {
    closeModal: () => void;
    writePost: (newPost: {
        id: number;
        title: string;
        content: string;
        author: string;
        date: string;
    }) => void;
}

const WriteModal: React.FC<WriteModalProps> = ({ closeModal, writePost }) => {
    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [content, setContent] = useState("");
    const [date] = useState(() => new Date().toLocaleDateString("ko-KR"));
    const username = localStorage.getItem("username");

    useEffect(() => {
        if (username) setWriter(username);
    }, [username]);

    const handleSubmit = async () => {
        try {
            const totalPosts = await getTotalPost();

            const newPost = {
                id: totalPosts.length + 1,
                title,
                author: writer,
                content,
                date,
            };
            const response = await addPost(newPost);
            alert(response);
            writePost(newPost);
            closeModal();
        } catch (e) {
            alert(e);
        }
    };

    const handleEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSubmit();
    };

    const modalContent = (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <div className="w-[800px] bg-black flex flex-col relative border border-white justify-center items-center rounded-xl pt-10 px-4">
                <Text size="h4" className="text-white mb-4">
                    Write Board
                </Text>
                <Button
                    type="my"
                    className="absolute top-4 right-4 text-white"
                    onClick={closeModal}
                >
                    X
                </Button>
                <div className="w-4/5 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <Text size="h6" className="text-white w-1/5">
                                title
                            </Text>
                            <div className="flex-1">
                                <Input
                                    type="large"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Text size="h6" className="text-white w-1/5">
                                writer
                            </Text>
                            <div className="flex-1">
                                <Input type="large" value={writer} disabled />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Text size="h6" className="text-white w-1/5">
                                date
                            </Text>
                            <div className="flex-1">
                                <Input type="large" value={date} disabled />
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Text size="h6" className="text-white w-1/5 pt-2">
                                content
                            </Text>
                            <div className="flex-1">
                                <Input
                                    type="doubleextraLarge"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    onKeyPress={handleEnterSubmit}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center my-4">
                        <Button type="write2" onClick={handleSubmit}>
                            <Text size="h6">write</Text>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
    return createPortal(modalContent, document.body);
};

export default WriteModal;
