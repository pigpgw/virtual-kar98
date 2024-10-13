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
import useUserStore from "@/store/userStore/users";

interface postProps {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
}
const limit = 10; // 페이지당 게시물 수를 상수로 설정

// 객체 지향 프로그래밍도 같이 할 수 있음.(데이터를 다룰 때)
export class Posts {
    props: postProps[];
    constructor(props: postProps[]) {
        this.props = props;
    }

    get numPages() {
        return Math.ceil(this.props.length / limit);
    }
}

const HomePage = () => {
    // const posts = new Posts([]);
    const [dummyData, setDummyData] = useState<postProps[]>([]);
    const [myPageModal, setMyPageModal] = useState(false);
    // const [myPageModal, setMyPageModal] = useReducer((prev) => !prev, false);
    const [logoutModal, setLogoutModal] = useState(false);
    const [deleteAccountModal, setDeleteAccountModal] = useState(false);
    const [writeModal, setWriteModal] = useState(false);
    // const numPages = posts.numPages;

    const [page, setPage] = useState(1);
    const numPages = Math.ceil(dummyData.length / limit);

    // 현재 페이지의 게시물 계산
    const currentPosts = dummyData.slice((page - 1) * limit, page * limit);

    const navigate = useNavigate();
    const { userId, resetUserId, resetUserName } = useUserStore();

    useEffect(() => {
        fetchTotalPost();
    }, [dummyData]);

    const fetchTotalPost = async () => {
        try {
            const response = await getTotalPost();
            setDummyData(response.sort((a: postProps, b: postProps) => b.id - a.id));
        } catch (e) {
            alert(e);
        }
    };

    const addNewPost = (newpost: Omit<postProps, "id">) => {
        setDummyData((prevData) => {
            const updateData = [{ id: prevData.length + 1, ...newpost }, ...prevData];
            return updateData.sort((a, b) => b.id - a.id);
        });
    };

    const handleLogout = () => {
        alert("로그아웃 성공");
        resetUserId();
        resetUserName();
        navigate("/");
    };

    const handleDeleteAccount = () => {
        alert("계정 삭제 성공");
        postDeleteAccount(`${userId}`);
        navigate("/");
    };

    return (
        <>
            <div className="w-screen h-screen bg-black flex flex-col p-10">
                <Text size="h4" className="text-white">
                    Jungle Board
                </Text>
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="absolute top-10 right-10">
                        <Button
                            type="my"
                            className="bg-black text-white"
                            onClick={() => {
                                console.log("Opening MyPageModal");
                                setMyPageModal(true);
                            }}
                        >
                            My
                        </Button>
                    </div>
                    <div className="flex flex-col w-full max-w-[1070px] pb-5">
                        <Text size="h5" className="text-white">
                            welcome!
                        </Text>
                        <Text size="h6" className="text-gray-700">
                            Here is a list of Jungle notifications for this season
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
                        <Button type="write1" onClick={() => setWriteModal(true)}>
                            글쓰기
                        </Button>
                    </div>
                </div>
            </div>
            {myPageModal && (
                <MyPageModal
                    title="MY PAGE"
                    btn1="LOGOUT"
                    btn2="DELETE ACCOUNT"
                    onConfirm={() => setLogoutModal(true)}
                    onCancle={() => setDeleteAccountModal(true)}
                    closeModal={() => setMyPageModal(false)}
                />
            )}
            {logoutModal && (
                <AlertModal
                    text="정말 로그아웃하시겠습니까?"
                    confirmButtonString="예"
                    btn2="아니오"
                    onConfirm={handleLogout}
                    onCancel={() => setLogoutModal(false)}
                />
            )}
            {deleteAccountModal && (
                <AlertModal
                    text="정말로 계정을 삭제하시겠습니까?"
                    confirmButtonString="예"
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
