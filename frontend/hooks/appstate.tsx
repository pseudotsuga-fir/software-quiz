import create from "zustand";
import { User } from "@/types";

interface UserState {
  user?: User;
  setUser: (user: User) => void;
  removeUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user: user })),
  removeUser: () => set(() => ({ user: undefined })),
}));
