export const ReactQueryKey = {
    getAllPost: () => ["posts"],
    getPost: (postId: number) => ["post", postId],
    getUser: (username: string) => ["users", username],
};
