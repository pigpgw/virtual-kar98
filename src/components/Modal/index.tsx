import ModalPortal from "./ModalPotal";
import MyPageModal from "./MypageModal";
import SignUpModal from "./SignUpModal";
import WriteModal from "./WriteModal";
import PostsDetail from "./DetailModal";
import AlertModal from "./AlertModal";

type ModalType = "mypage" | "signup" | "write" | "post" | "alert";

interface ModalProps {
    type: ModalType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    modalProps?: any;
}

const modalComponents = {
    mypage: MyPageModal,
    signup: SignUpModal,
    write: WriteModal,
    post: PostsDetail,
    alert: AlertModal,
};

export const Modal = ({ type, modalProps }: ModalProps) => {
    const ModalComponent = modalComponents[type];
    return <ModalPortal>{ModalComponent && <ModalComponent {...modalProps} />}</ModalPortal>;
};
