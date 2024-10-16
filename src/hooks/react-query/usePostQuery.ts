import { getPostDetail, getTotalPost } from "@/api/post/post";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ReactQueryKey } from "./queries";

export const useGetAllPostsQuery = () => {
    return useSuspenseQuery({
        queryKey: ReactQueryKey.getAllPost(),
        queryFn: getTotalPost,
    });
};

export const useGetPostQuery = (postId: number) => {
    return useSuspenseQuery({
        queryKey: ReactQueryKey.getPost(postId),
        queryFn: () => {
            return getPostDetail(postId);
        },
    });
};
