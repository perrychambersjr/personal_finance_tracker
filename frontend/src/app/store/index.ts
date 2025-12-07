import { create } from 'zustand';
import { UserSlice, createUserSlice } from './userSlice';

export const useUserStore = create<UserSlice>((set, get, store) => ({
    ...createUserSlice(set, get, store),
}));