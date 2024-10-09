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
        <div className="w-[1072px]">
            <TableListItem
                type="header"
                list_number="번호"
                title="제목"
                writer="작성자"
                date="작성일"
            />
            {posts.length === 0 ? (
                <div>gd</div>
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
                            handleRowClick(item.id as number);
                            onDetailModal();
                        }}
                    />
                ))
            )}
            {postDetailModal && (
                <PostsDetail postId={selectedPostId as number} onClose={closeDetailModal} />
            )}
        </div>
    );
};

export default Table;
