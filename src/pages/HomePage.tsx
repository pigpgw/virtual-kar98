import Text from "@/components/common/Text";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table/Table";
import { Modal } from "@/components/Modal/index";
import { MESSAGE } from "@/constants/description";
import { useEffect, useState } from "react";
import useModal from "@/hooks/useModal";
import useUserStore from "@/store/userStore/users";
import { useNavigate } from "react-router-dom";
import { getTotalPost } from "@/api/post/post";
import { postDeleteAccount } from "@/api/user";
import { Post } from "@/api/post/dto";

const limit = MESSAGE.TABLE_PLAGE_LIMIT_NUMBER; // 페이지당 게시물 수를 상수로 설정

const HomePage = () => {
    // const posts = new Posts([]);
    // const numPages = posts.numPages;
    const { userId, resetUserId, resetUserName } = useUserStore();
    const [dummyData, setDummyData] = useState<Post[]>([]);
    const { isOpen, openModal, closeModal } = useModal();

    const [page, setPage] = useState(1);
    const numPages = Math.ceil(dummyData.length / limit);
    const currentPosts = dummyData.slice((page - 1) * limit, page * limit);

    const navigate = useNavigate();

    useEffect(() => {
        fetchTotalPost();
    }, []);

    const fetchTotalPost = async () => {
        try {
            const response = await getTotalPost();
            setDummyData(response);
        } catch (e) {
            alert(e);
        }
    };

    const addNewPost = (newpost: Omit<Post, "id">) => {
        setDummyData((prevData) => {
            const updateData = [{ id: prevData.length + 1, ...newpost }, ...prevData];
            return updateData.sort((a, b) => b.id - a.id);
        });
    };

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
                                    writePost: addNewPost,
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
