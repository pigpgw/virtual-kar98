import axios from "axios";
import { Post, PostDTO } from "./dto";

const HOST = import.meta.env.VITE_BASE_API_URL;

export const addPost = async (post: { title: string; content: string; author: string }) => {
    const response = await axios.post(`${HOST}/posts`, post);
    return response.data;
};

export const getTotalPost = async (): Promise<Array<PostDTO>> => {
    const response = await axios.get(`${HOST}/posts`);
    return response.data.map((post: Post) => new PostDTO(post));
};

export const getPostDetail = async (postId: number): Promise<Post> => {
    const response = await axios.get(`${HOST}/posts?id=${postId}`);
    return response.data;
};
export const deletePostDetail = async (postId: number) => {
    const response = await axios.delete(`${HOST}/posts/${postId}`);
    return response.data;
};
