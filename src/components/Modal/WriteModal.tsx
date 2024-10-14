import Text from "@/components/common/Text";
import Input from "../common/Input";
import Button from "../common/Button";
import { MESSAGE } from "@/constants/description";
import { useState } from "react";
import useUserStore from "../../store/userStore/users";
import { addPost, getTotalPost } from "@/api/post";
interface WriteModalProps {
    closeModal: () => void;
    writePost: (newPost: {
        id: string;
        title: string;
        content: string;
        author: string;
        date: string;
    }) => void;
}

const WriteModal = ({ closeModal, writePost }: WriteModalProps) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date] = useState(() => new Date().toLocaleDateString("ko-KR"));
    const { username } = useUserStore();

    const handleSubmit = async () => {
        if (!title.trim()) alert(MESSAGE.INPUT_EMPTY_TITLE);
        if (!content.trim()) alert(MESSAGE.INPUT_EMPTY_CONTENT);
        try {
            const totalPosts = await getTotalPost();

            const newPost = {
                id: String(totalPosts.length + 1),
                title,
                author: username,
                content,
                date,
            };
            await addPost(newPost);
            writePost(newPost);
            closeModal();
        } catch (e) {
            alert(e);
        }
    };

    const handleEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSubmit();
    };

    return (
        <div className="w-[800px] bg-black flex flex-col relative border border-white justify-center items-center rounded-xl pt-10 px-4">
            <Text size="h4" className="text-white mb-4">
                {MESSAGE.WRITE_BOARD}
            </Text>
            <Button type="my" className="absolute top-4 right-4 text-white" onClick={closeModal}>
                {MESSAGE.CLOSE}
            </Button>
            <div className="w-4/5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                    <div className="flex items-center">
                        <Text size="h6" className="text-white w-1/5">
                            {MESSAGE.TITLE}
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
                            {MESSAGE.WRITER}
                        </Text>
                        <div className="flex-1">
                            <Input type="large" value={username} disabled />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Text size="h6" className="text-white w-1/5">
                            {MESSAGE.DATE}
                        </Text>
                        <div className="flex-1">
                            <Input type="large" value={date} disabled />
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Text size="h6" className="text-white w-1/5 pt-2">
                            {MESSAGE.CONTENT}
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
                        <Text size="h6">{MESSAGE.WRITE_BUTTON}</Text>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default WriteModal;
