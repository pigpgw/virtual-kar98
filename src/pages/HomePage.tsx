import Text from "@/components/common/Text";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table/Table";
import { Modal } from "@/components/Modal/index";
import { MESSAGE } from "@/constants/description";
import { useState } from "react";
import useModal from "@/hooks/useModal";
import useUserStore from "@/store/userStore/users";
import { useNavigate } from "react-router-dom";
import { postDeleteAccount } from "@/api/user/user";
import { useGetAllPostsQuery } from "@/hooks/react-query/usePostQuery";

const limit = MESSAGE.TABLE_PLAGE_LIMIT_NUMBER;

const HomePage = () => {
    const { data } = useGetAllPostsQuery();
    const { userId, resetUserId, resetUserName } = useUserStore();
    const { isOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();

    const handleLogout = () => {
        alert(MESSAGE.LOGIN_SUCCESS);
        resetUserId();
        resetUserName();
        navigate("/");
    };

    const handleDeleteAccount = () => {
        alert(MESSAGE.USER_DELETE_SUCCESS);
        postDeleteAccount(`${userId}`);
        navigate("/");
    };
    const [page, setPage] = useState(1);
    if (!data) return null;
    const posts = data.map(({ date, ...post }) => ({
        date: date.toLocaleString(),
        ...post,
    }));
    const numPages = Math.ceil(posts.length / limit);
    const currentPosts = posts.slice((page - 1) * limit, page * limit);

    return (
        <>
            <div className="w-screen h-screen bg-black flex flex-col p-10">
                <Text size="h4" className="text-white">
                    {MESSAGE.MAIN_LOGO}
                </Text>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="absolute top-10 right-10">
                        <Button
                            type="my"
                            className="bg-black text-white"
                            onClick={() => {
                                openModal("mypage");
                            }}
                        >
                            {MESSAGE.MY_BUTTON}
                        </Button>
                        {isOpen("mypage") && <Modal type="mypage" />}
                    </div>
                    <div className="flex flex-col w-full max-w-[1070px] pb-5">
                        <Text size="h5" className="text-white">
                            {MESSAGE.WELCOME_TITLE}
                        </Text>
                        <Text size="h6" className="text-gray-700">
                            {MESSAGE.NOTIFICATION_SUBTITLE}
                        </Text>
                    </div>
                    <Table posts={currentPosts} />
                    <div className="w-[1100px] h-[90px]] flex items-center justify-center">
                        {Array.from({ length: numPages }, (_, i) => (
                            <Button
                                key={i + 1}
                                onClick={() => setPage(i + 1)}
                                aria-current={page === i + 1 ? "page" : undefined}
                                type="my"
                                className="text-white px-2"
                            >
                                {i + 1}
                            </Button>
                        ))}
                    </div>
                    <div className="absolute bottom-10 right-10">
                        <Button type="write1" onClick={() => openModal("write")}>
                            {MESSAGE.WRITE_BUTTON}
                        </Button>
                        {isOpen("write") && (
                            <Modal
                                type="write"
                                modalProps={{
                                    closeModal: () => closeModal("write"),
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
            {isOpen("logout") && (
                <Modal
                    type="alert"
                    modalProps={{
                        text: `${MESSAGE.LOGOUT_CONFIRM}`,
                        confirmButtonString: `${MESSAGE.YES}`,
                        btn2: `${MESSAGE.NO}`,
                        onConfirm: handleLogout,
                        onCancle: () => closeModal("logout"),
                    }}
                />
            )}
            {isOpen("deletAccount") && (
                <Modal
                    type="alert"
                    modalProps={{
                        text: `${MESSAGE.DELETE_ACCOUNT_CONFIRM}`,
                        confirmButtonString: `${MESSAGE.YES}`,
                        btn2: `${MESSAGE.NO}`,
                        onConfirm: handleDeleteAccount,
                        onCancle: () => closeModal("deletAccount"),
                    }}
                />
            )}
        </>
    );
};

export default HomePage;
