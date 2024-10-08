import Button from "../common/Button";
import Text from "@/components/common/Text";
import { createPortal } from "react-dom";

interface MyPageModalProps {
    title: string;
    btn1: string;
    btn2: string;
    onConfirm(): void;
    onCancle(): void;
    closeModal(): void;
}

const MyPageModal = ({ title, btn1, btn2, onConfirm, onCancle, closeModal }: MyPageModalProps) => {
    const modalContent = (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70">
            <div
                className="w-[409px] h-[475px] flex-col  bg-black rounded-2xl
             flex items-center justify-center border border-white"
            >
                <Button type="no" onClick={closeModal}>
                    X
                </Button>
                <Text size="h3" className="text-white">
                    {title}
                </Text>
                <div className="h-1/2 flex flex-col items-start justify-around">
                    <Text size="h6" className="text-white">
                        username : 박건우
                    </Text>
                    <Text size="h6" className="text-white">
                        nickname : pigpgw
                    </Text>
                    <Text size="h6" className="text-white">
                        email : ceh20002@naver.com
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
        </div>
    );
    return createPortal(modalContent, document.body);
};

export default MyPageModal;
