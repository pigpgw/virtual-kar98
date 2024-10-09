import axios from "axios";

const HOST = import.meta.env.VITE_BASE_API_URL;

export const getComment = async (postId: number) => {
    const response = await axios.get(`${HOST}/comments?postId=${postId}`);
    return response.data;
};

export const addComment = async (comment: {
    id: number;
    postId: number;
    author: string;
    content: string;
    createdAt: string;
}) => {
    const response = await axios.post(`${HOST}/comments`, comment);
    return response.data;
};
