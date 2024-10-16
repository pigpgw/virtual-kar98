import { Post } from "@/api/post/dto";
import { addPost } from "@/api/user/user";
import { useMutation } from "@tanstack/react-query";

type newPostType = Omit<Post, "id">;

export const useCreatePostMutate = () => {
    return useMutation({
        mutationFn: (newPost: newPostType) => addPost(newPost),
        onSuccess: (data) => {
            console.log("success", data);
        },
        onError: (error) => {
            console.log("error", error);
        },
    });
};
