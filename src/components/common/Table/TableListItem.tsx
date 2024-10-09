import Text from "@/components/common/Text";

const typeStyles = {
    default: "border-b border-zinc-700",
    header: "border border-white",
};

type TableListItemType = keyof typeof typeStyles;

interface TableListItemProps {
    type?: TableListItemType;
    list_number: number | string;
    title: string;
    writer: string;
    date: string;
    onDetailModal?(): void;
}

const TableListItem = ({
    type = "default",
    list_number,
    title,
    writer,
    date,
    onDetailModal,
}: TableListItemProps) => {
    const baseStyles = `w-full max-w-[1065px] h-[44px]`;
    const tableStyles = `${baseStyles} ${typeStyles[type]}`;

    return (
        <div className={tableStyles} onClick={onDetailModal}>
            <div className="h-full flex items-center text-white">
                <Text size="body" className="w-[100px] pl-5">
                    {list_number}
                </Text>
                <Text size="body" className="w-[610px]">
                    {title}
                </Text>
                <Text size="body" className="w-[180px] text-center">
                    {writer}
                </Text>
                <Text size="body" className="w-[175px] text-center">
                    {date}
                </Text>
            </div>
        </div>
    );
};

export default TableListItem;
