import React from "react";
import Button from "../common/Button";
import Text from "@/components/common/Text";
import { createPortal } from "react-dom";

interface AlertModalProps {
    text: string;
    confirmButtonString: string;
    btn2: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
    text,
    confirmButtonString,
    btn2,
    onConfirm,
    onCancel,
}) => {
    const modalContent = (
        <div className="flex items-center justify-center bg-black  fixed inset-0 z-50">
            <div className="w-[394px] h-[191px] flex flex-col justify-center items-center bg-black rounded-2xl border border-white">
                <Text size="h6" className="text-white mb-5 text-center px-4">
                    {text}
                </Text>
                <div className="flex space-x-4">
                    <Button type="yes" onClick={onConfirm}>
                        {confirmButtonString}
                    </Button>
                    <Button type="no" onClick={onCancel}>
                        {btn2}
                    </Button>
                </div>
            </div>
        </div>
    );

    // createPortal을 사용하여 모달 내용을 body에 직접 렌더링합니다.
    return createPortal(modalContent, document.body);
};

export default AlertModal;
