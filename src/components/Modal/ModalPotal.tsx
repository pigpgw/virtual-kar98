import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: ReactNode;
}

const ModalPortal = ({ children }: Props) => {
    const ModalComponent = (
        <div className=" flex items-center justify-center bg-black  bg-opacity-50 fixed inset-0">
            {children}
        </div>
    );
    return createPortal(ModalComponent, document.body);
};

export default ModalPortal;
