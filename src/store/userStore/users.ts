import { create } from "zustand";

interface UserState {
    userId: string;
    username: string;
    setUserId: (id: string) => void;
    resetUserId: () => void;
    setUserName: (name: string) => void;
    resetUserName: () => void;
}

const useUserStore = create<UserState>()((set) => ({
    userId: "",
    username: "",
    setUserId: (id: string) => set({ userId: id }),
    resetUserId: () => set({ userId: "" }),
    setUserName: (name: string) => set({ username: name }),
    resetUserName: () => set({ username: "" }),
}));

export default useUserStore;
