import Text from "@/components/common/Text";
import Button from "@/components/common/Button";

interface AlertModalProps {
    text: string;
    confirmButtonString: string;
    btn2: string;
    onConfirm: () => void;
    onCancle: () => void;
}

const AlertModal = ({ text, confirmButtonString, btn2, onConfirm, onCancle }: AlertModalProps) => {
    return (
        <div className="w-[394px] h-491px] flex flex-col justify-center items-center bg-black rounded-2xl border border-white">
            <Text size="h6" className="text-white mb-5 text-center px-4">
                {text}
            </Text>
            <div className="flex space-x-4">
                <Button type="yes" onClick={onConfirm}>
                    {confirmButtonString}
                </Button>
                <Button type="no" onClick={onCancle}>
                    {btn2}
                </Button>
            </div>
        </div>
    );
};

export default AlertModal;
