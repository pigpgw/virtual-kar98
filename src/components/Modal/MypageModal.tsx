import Text from "@/components/common/Text";
import Button from "../common/Button";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import useUserStore from "@/store/userStore/users";
import { getUserInfo } from "@/api/user";

interface MyPageModalProps {
    title: string;
    btn1: string;
    btn2: string;
    onConfirm(): void;
    onCancle(): void;
    closeModal(): void;
}
interface UserInfo {
    id: string;
    username: string;
    password: string;
}

const MyPageModal = ({ title, btn1, btn2, onConfirm, onCancle, closeModal }: MyPageModalProps) => {
    const [user, setUser] = useState<UserInfo | null>();
    const { userId } = useUserStore();
    const fetchUserInfo = async (userId: string) => {
        try {
            const response = await getUserInfo(userId);
            setUser(response);
        } catch (e) {
            alert(e);
        }
    };
    useEffect(() => {
        fetchUserInfo(userId);
    }, [userId]);

    const modalContent = (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70">
            <div
                className="w-[409px] h-[475px] flex-col  bg-black rounded-2xl
             flex items-center justify-center border border-white"
            >
                {user && (
                    <>
                        <div className="w-full flex justify-end relative right-5 bottom-2">
                            <Button type="my" onClick={closeModal} className="text-white flex">
                                X
                            </Button>
                        </div>
                        <Text size="h3" className="text-white">
                            {title}
                        </Text>
                        <div className="h-1/2 flex flex-col items-start justify-around">
                            <Text size="h6" className="text-white">
                                id :{user.id}
                            </Text>
                            <Text size="h6" className="text-white">
                                username : {user.username}
                            </Text>
                            <Text size="h6" className="text-white">
                                password : {user.password}
                            </Text>
                        </div>
                        <div className="pt-5 flex flex-col">
                            <Button type="logout" onClick={onConfirm}>
                                {btn1}
                            </Button>
                            <Button type="delete" onClick={onCancle}>
                                {btn2}
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
    return createPortal(modalContent, document.body);
};

export default MyPageModal;
