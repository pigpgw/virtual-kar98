import Button from "../common/Button";
import Text from "@/components/common/Text";

interface AlertModalProps {
    text: string;
    btn1: string;
    btn2: string;
    onConfirm(): void;
    onCancle(): void;
}

const AlertModal = ({ text, btn1, btn2, onConfirm, onCancle }: AlertModalProps) => {
    return (
        <div className="w-[394px] h-[191px] flex justify-center items-center flex-col bg-black rounded-2xl">
            <Text size="h6" className="text-white">
                {text}
            </Text>
            <div className="pt-5">
                <Button type="yes" onClick={onConfirm}>
                    {btn1}
                </Button>
                <Button type="no" onClick={onCancle}>
                    {btn2}
                </Button>
            </div>
        </div>
    );
};

export default AlertModal;
