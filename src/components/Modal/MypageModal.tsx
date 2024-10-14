import Text from "@/components/common/Text";
import Button from "../common/Button";
import useUserStore from "@/store/userStore/users";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface MyPageModalProps {
    title: string;
    btn1: string;
    btn2: string;
    onConfirm(): void;
    onCancle(): void;
    closeModal(): void;
}
const MyPageModal = ({ title, btn1, btn2, onConfirm, onCancle, closeModal }: MyPageModalProps) => {
    const { userId, username } = useUserStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            alert("비 정상적 접근입니다. 로그인 페이지로 이동합니다.");
            navigate("/");
        }
    }, [userId, navigate]);

    return (
        <div className="w-[436px] h-[336px] flex items-center justify-center flex-col rounded-e-2xl bg-black border border-white rounded-3xl text-white p-5">
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
                    id :{userId}
                </Text>
                <Text size="h6" className="text-white">
                    username : {username}
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
        </div>
    );
};

export default MyPageModal;
