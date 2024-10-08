import Button from "@/components/common/Button";
import Table from "@/components/common/Table/Table";
import Text from "@/components/common/Text";
import AlertModal from "@/components/Modal/AlertModal";
import MyPageModal from "@/components/Modal/MypageModal";
import WriteModal from "@/components/Modal/WriteModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyTableListData = [
    {
        list_number: 1,
        title: "첫 번째 게시글입니다.",
        writer: "홍길동",
        date: "2024-10-08",
    },
    {
        list_number: 2,
        title: "두 번째 게시글: 오늘의 날씨",
        writer: "김철수",
        date: "2024-10-07",
    },
    {
        list_number: 3,
        title: "React와 TypeScript 사용하기",
        writer: "이영희",
        date: "2024-10-06",
    },
    {
        list_number: 4,
        title: "효율적인 코드 작성법",
        writer: "박지성",
        date: "2024-10-05",
    },
    {
        list_number: 5,
        title: "새로운 프로젝트 아이디어",
        writer: "최민수",
        date: "2024-10-04",
    },
    {
        list_number: 6,
        title: "첫 번째 게시글입니다.",
        writer: "홍길동",
        date: "2024-10-08",
    },
    {
        list_number: 7,
        title: "두 번째 게시글: 오늘의 날씨",
        writer: "김철수",
        date: "2024-10-07",
    },
    {
        list_number: 8,
        title: "React와 TypeScript 사용하기",
        writer: "이영희",
        date: "2024-10-06",
    },
    {
        list_number: 9,
        title: "효율적인 코드 작성법",
        writer: "박지성",
        date: "2024-10-05",
    },
    {
        list_number: 10,
        title: "새로운 프로젝트 아이디어",
        writer: "최민수",
        date: "2024-10-04",
    },
    {
        list_number: 11,
        title: "첫 번째 게시글입니다.",
        writer: "홍길동",
        date: "2024-10-08",
    },
    {
        list_number: 12,
        title: "두 번째 게시글: 오늘의 날씨",
        writer: "김철수",
        date: "2024-10-07",
    },
    {
        list_number: 13,
        title: "React와 TypeScript 사용하기",
        writer: "이영희",
        date: "2024-10-06",
    },
    {
        list_number: 14,
        title: "효율적인 코드 작성법",
        writer: "박지성",
        date: "2024-10-05",
    },
    {
        list_number: 15,
        title: "새로운 프로젝트 아이디어",
        writer: "최민수",
        date: "2024-10-04",
    },
    {
        list_number: 16,
        title: "첫 번째 게시글입니다.",
        writer: "홍길동",
        date: "2024-10-08",
    },
    {
        list_number: 17,
        title: "두 번째 게시글: 오늘의 날씨",
        writer: "김철수",
        date: "2024-10-07",
    },
    {
        list_number: 18,
        title: "React와 TypeScript 사용하기",
        writer: "이영희",
        date: "2024-10-06",
    },
    {
        list_number: 19,
        title: "효율적인 코드 작성법",
        writer: "박지성",
        date: "2024-10-05",
    },
    {
        list_number: 20,
        title: "새로운 프로젝트 아이디어",
        writer: "최민수",
        date: "2024-10-04",
    },
];

interface postProps {
    list_number: number;
    title: string;
    writer: string;
    date: string;
}
const HomePage = () => {
    const [dummyData, setDummyData] = useState(
        dummyTableListData.sort((a, b) => a.list_number - b.list_number)
    );
    const [myPageModal, setMyPageModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);
    const [deleteAccountModal, setDeleteAccountModal] = useState(false);
    const [writeModal, setWriteModal] = useState(false);

    const [page, setPage] = useState(1);
    const limit = 10; // 페이지당 게시물 수를 상수로 설정

    const numPages = Math.ceil(dummyData.length / limit);

    const addNewPost = (newpost: Omit<postProps, "list_number">) => {
        setDummyData((prevData) => {
            const updateData = [{ list_number: prevData.length + 1, ...newpost }, ...prevData];
            return updateData.sort((a, b) => a.list_number - b.list_number);
        });
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        alert("로그아웃 성공");
        navigate("/");
    };

    const handleDeleteAccount = () => {
        alert("계정 삭제 성공");
        navigate("/");
    };

    // 현재 페이지의 게시물 계산
    const currentPosts = dummyData.slice((page - 1) * limit, page * limit);
    useEffect(() => {
        console.log(page);
    });

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
