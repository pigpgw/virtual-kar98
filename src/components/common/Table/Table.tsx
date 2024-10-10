import { useState } from "react";
import TableListItem from "./TableListItem";
import PostsDetail from "@/components/Modal/DetailModal";
interface TableItemProps {
    id: string | number;
    title: string;
    author: string;
    date: string;
}

interface TableProps {
    posts: TableItemProps[];
}

const Table = ({ posts }: TableProps) => {
    const [postDetailModal, setPostDetailModal] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

    const handleRowClick = (id: number) => {
        setSelectedPostId(id);
        setPostDetailModal(true);
    };

    const closeDetailModal = () => {
        setPostDetailModal(false);
        setSelectedPostId(null);
    };

    const onDetailModal = () => {
        setPostDetailModal(true);
    };

    return (
        <div className="max-w-[1072px] min-h-[490px]">
            <TableListItem
                type="header"
                list_number="번호"
                title="제목"
                writer="작성자"
                date="작성일"
            />
            {posts.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center text-white">
                    게시글이 없습니다.
                </div>
            ) : (
                posts.map((item) => (
                    <TableListItem
                        type="default"
                        key={item.id}
                        list_number={item.id}
                        title={item.title}
                        writer={item.author}
                        date={item.date}
                        onDetailModal={() => {
                            handleRowClick(+item.id);
                            onDetailModal();
                        }}
                    />
                ))
            )}
            {postDetailModal && (
                <PostsDetail postId={Number(selectedPostId)} onClose={closeDetailModal} />
            )}
        </div>
    );
};

export default Table;
