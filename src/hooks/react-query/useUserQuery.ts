import { postSignIn } from "@/api/user/user";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ReactQueryKey } from "./queries";

export const useGetUserQUery = (username: string, password: string) => {
    return useSuspenseQuery({
        queryKey: ReactQueryKey.getUser(username),
        queryFn: () => {
            return postSignIn(username, password);
        },
    });
};
