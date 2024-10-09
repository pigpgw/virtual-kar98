import { https } from "@/functions/https";

export const postSignIn = async (username: string, password: string) => {
    const response = await https.get(
        `/users?${new URLSearchParams({ username: username, password: password }).toString()}`
    );
    return response.data;
};

export const postSignUp = async (user: { username: string; password: string }) => {
    const response = await https.post(`/users`, user);
    return response.data;
};

export class Post {
    title: string;
    auth_token: string;
    content: string;
    date: string;
    constructor(title: string, auth: string, content: string, date: string) {
        this.title = title;
        this.auth_token = auth;
        this.content = content;
        this.date = date;
    }
}

export class AddPostRequestDto {
    post: Post;
    constructor(post: Post) {
        this.post = post;
    }
}

export const addPost = async (post: Post) => {
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
