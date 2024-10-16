import { getPostDetail, getTotalPost } from "@/api/post/post";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetAllPostsQuery = () => {
    return useSuspenseQuery({
        queryKey: ["posts"],
        queryFn: getTotalPost,
    });
};

export const useGetPostQuery = (postId: number) => {
    return useSuspenseQuery({
        queryKey: ["post", postId],
        queryFn: () => {
            return getPostDetail(postId);
        },
    });
};
