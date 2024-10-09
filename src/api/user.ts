import axios from "axios";

const HOST = import.meta.env.VITE_BASE_API_URL;

export const postSignIn = async (username: string, password: string) => {
    const response = await axios.get(`${HOST}/users?username=${username}&password=${password}`);
    return response.data;
};

export const postSignUp = async (user: { username: string; password: string }) => {
    const response = await axios.post(`${HOST}/users`, user);
    return response.data;
};

export const addPost = async (post: {
    title: string;
    author: string;
    content: string;
    date: string;
}) => {
    const response = await axios.post(`${HOST}/users`, post);
    return response.data;
};

export const postDeleteAccount = async (username: string) => {
    // 먼저 해당 username을 가진 사용자를 찾습니다.
    const getUserResponse = await axios.get(`${HOST}/users?username=${username}`);
    const users = getUserResponse.data;

    if (users.length === 0) {
        throw new Error("User not found");
    }

    // 찾은 사용자의 ID를 사용하여 삭제 요청을 보냅니다.
    const userId = users[0].id;
    const deleteResponse = await axios.delete(`${HOST}/users/${userId}`);
    return deleteResponse.data;
};
