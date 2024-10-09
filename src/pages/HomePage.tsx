import Button from "@/components/common/Button";
import Table from "@/components/common/Table/Table";
import Text from "@/components/common/Text";
import AlertModal from "@/components/Modal/AlertModal";
import MyPageModal from "@/components/Modal/MypageModal";
import WriteModal from "@/components/Modal/WriteModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTotalPost } from "@/api/post";
import { postDeleteAccount } from "@/api/user";

interface postProps {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
}
const HomePage = () => {
    const [dummyData, setDummyData] = useState<postProps[]>([]);
    const [myPageModal, setMyPageModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const [deleteAccountModal, setDeleteAccountModal] = useState(false);
    const [writeModal, setWriteModal] = useState(false);

    const [page, setPage] = useState(1);
    const limit = 10; // 페이지당 게시물 수를 상수로 설정

    const numPages = Math.ceil(dummyData.length / limit);

    useEffect(() => {
        getd();
    }, []);

    const getd = async () => {
        try {
            const response = await getTotalPost();
            setDummyData(response);
        } catch (e) {
            alert(e);
        }
    };

    const addNewPost = (newpost: Omit<postProps, "id">) => {
        setDummyData((prevData) => {
            const updateData = [{ id: prevData.length + 1, ...newpost }, ...prevData];
            return updateData.sort((a, b) => a.id - b.id);
        });
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        alert("로그아웃 성공");
        localStorage.removeItem("userId");
        navigate("/");
    };
    const userId = localStorage.getItem("userId");
    const handleDeleteAccount = () => {
        alert("계정 삭제 성공");
        postDeleteAccount(userId as string);
        navigate("/");
    };

    // 현재 페이지의 게시물 계산
    const currentPosts = dummyData.slice((page - 1) * limit, page * limit);

    return (
        <>
            <div className="w-screen h-screen bg-black flex flex-col p-10">
                <Text size="h4" className="text-white">
                    Jungle Board
                </Text>
                <Button
                    type="my"
                    className="bg-black text-white"
                    onClick={() => setMyPageModal(true)}
                >
                    My
                </Button>
                <Text size="h5" className="text-white">
                    welcome!
                </Text>
                <Text size="h6" className="text-gray-700">
                    Here is a list of Jungle notifications for this season
                </Text>
                <Table posts={currentPosts} />
                <div className="w-full flex items-center justify-center">
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
                <Button type="write1" onClick={() => setWriteModal(true)}>
                    글쓰기
                </Button>
            </div>
            {myPageModal && (
                <MyPageModal
                    title="내 페이지"
                    btn1="로그아웃"
                    btn2="계정 삭제"
                    onConfirm={() => setLogoutModal(true)}
                    onCancle={() => setDeleteAccountModal(true)}
                    closeModal={() => setMyPageModal(false)}
                />
            )}
            {logoutModal && (
                <AlertModal
                    text="정말 로그아웃하시겠습니까?"
                    btn1="예"
                    btn2="아니오"
                    onConfirm={handleLogout}
                    onCancel={() => setLogoutModal(false)}
                />
            )}
            {deleteAccountModal && (
                <AlertModal
                    text="정말로 계정을 삭제하시겠습니까?"
                    btn1="예"
                    btn2="아니오"
                    onConfirm={handleDeleteAccount}
                    onCancel={() => setDeleteAccountModal(false)}
                />
            )}
            {writeModal && (
                <WriteModal closeModal={() => setWriteModal(false)} writePost={addNewPost} />
            )}
        </>
    );
};

export default HomePage;
