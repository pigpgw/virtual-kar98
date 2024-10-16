import { postSignIn } from "@/api/user/user";
import { useMutation } from "@tanstack/react-query";

export const useUserSigninMutate = () => {
    return useMutation({
        mutationFn: ({ username, password }: { username: string; password: string }) =>
            postSignIn(username, password),
    });
};
