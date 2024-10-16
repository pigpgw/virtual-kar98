import { getPostDetail, getTotalPost } from "@/api/post/post";
import { useQuery } from "@tanstack/react-query";

export const useGetAllPostsQuery = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: getTotalPost,
    });
};

export const useGetPostQuery = (postId: number) => {
    return useQuery({
        queryKey: ["post", postId],
        queryFn: () => {
            return getPostDetail(postId);
        },
    });
};
