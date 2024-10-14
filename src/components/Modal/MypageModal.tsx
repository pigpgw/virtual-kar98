import Text from "@/components/common/Text";
import Button from "../common/Button";
import { MESSAGE } from "@/constants/description";
import { useEffect } from "react";
import useUserStore from "@/store/userStore/users";
import { useNavigate } from "react-router-dom";
import useModal from "@/hooks/useModal";

const MyPageModal = () => {
    const { userId, username } = useUserStore();
    const { openModal, closeModal } = useModal();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            alert(MESSAGE.UNAUTHORIZED_ACCESS);
            navigate("/");
        }
    }, [userId, navigate]);

    return (
        <div className="w-[436px] h-[336px] flex items-center justify-center flex-col rounded-e-2xl bg-black border border-white rounded-3xl text-white p-5">
            <div className="w-full flex justify-end relative right-5 bottom-2">
                <Button type="my" onClick={() => closeModal("mypage")} className="text-white flex">
                    {MESSAGE.CLOSE}
                </Button>
            </div>
            <Text size="h3" className="text-white">
                {MESSAGE.MY_PAGE}
            </Text>
            <div className="h-1/2 flex flex-col items-start justify-around">
                <Text size="h6" className="text-white">
                    {MESSAGE.ID} : {userId}
                </Text>
                <Text size="h6" className="text-white">
                    {MESSAGE.USERNAME} : {username}
                </Text>
            </div>
            <div className="pt-5 flex flex-col">
                <Button type="logout" onClick={() => openModal("logout")}>
                    <Text size="body">{MESSAGE.LOGOUT}</Text>
                </Button>
                <Button type="delete" onClick={() => openModal("deletAccount")}>
                    {MESSAGE.DELETE_ACCOUNT}
                </Button>
            </div>
        </div>
    );
};

export default MyPageModal;
