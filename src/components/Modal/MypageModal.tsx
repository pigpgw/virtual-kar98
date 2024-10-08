import Button from "../common/Button";
import Text from "@/components/common/Text";

interface MyPageModalProps {
    title: string;
    username: string;
    nickname: string;
    email: string;
    btn1: string;
    btn2: string;
    onConfirm(): void;
    onCancle(): void;
}

const MyPageModal = ({
    title,
    username,
    nickname,
    email,
    btn1,
    btn2,
    onConfirm,
    onCancle,
}: MyPageModalProps) => {
    return (
        <div className="w-[409px] h-[475px] flex justify-center flex-col items-center bg-black rounded-2xl">
            <Text size="h3" className="text-white">
                {title}
            </Text>
            <div className="h-1/2 flex flex-col items-start justify-around">
                <Text size="h6" className="text-white">
                    username : {username}
                </Text>
                <Text size="h6" className="text-white">
                    nickname : {nickname}
                </Text>
                <Text size="h6" className="text-white">
                    email : {email}
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
