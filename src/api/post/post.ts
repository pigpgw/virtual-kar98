import axios from "axios";
import { PostDTO } from "./dto";

const HOST = import.meta.env.VITE_BASE_API_URL;

export const addPost = async (post: { title: string; content: string; author: string }) => {
    const response = await axios.post(`${HOST}/posts`, post);
    return response.data;
};

export const getTotalPost = async () => {
    const response = await axios.get(`${HOST}/posts`);
    return new PostDTO(response.data).posts;
};

export const getPostDetail = async (postId: number) => {
    const response = await axios.get(`${HOST}/posts?id=${postId}`);
    return response.data;
};

export const deletePostDetail = async (postId: number) => {
    const response = await axios.delete(`${HOST}/posts/${postId}`);
    return response.data;
};
