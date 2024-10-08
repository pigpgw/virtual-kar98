import TableListItem from "./TableListItem";

interface TableItemProps {
    list_number: string | number;
    title: string;
    writer: string;
    date: string;
}

interface TableProps {
    posts: TableItemProps[];
}

const Table = ({ posts }: TableProps) => {
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
                        key={item.list_number}
                        list_number={item.list_number}
                        title={item.title}
                        writer={item.writer}
                        date={item.date}
                    />
                ))
            )}
        </div>
    );
};

export default Table;
