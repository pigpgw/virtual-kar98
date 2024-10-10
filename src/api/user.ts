import { https } from "@/functions/https";

export const postSignIn = async (username: string, password: string) => {
    console.log(username, password);
    const response = await https.get(`/users?username=${username}&password=${password}`);
    console.log(response.data);
    return response.data;
};

export const postSignUp = async (user: { username: string; password: string }) => {
    const response = await https.post(`/users`, user);
    return response.data;
};

export const addPost = async (post: {
    title: string;
    author: string;
    content: string;
    date: string;
}) => {
    const response = await https.post(`/users`, post);
    return response.data;
};

export const postDeleteAccount = async (userId: string) => {
    const deleteResponse = await https.delete(`/users/${userId}`);
    return deleteResponse.data;
};

export const getUserInfo = async (userId: string) => {
    const response = await https.get(`/users/${userId}`);
    return response.data;
};
