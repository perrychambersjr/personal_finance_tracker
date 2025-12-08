import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserSlice, createUserSlice } from './userSlice';

export const useUserStore = create<UserSlice>()(
  persist(
    (set, get, store) => ({
      ...createUserSlice(set, get, store),
    }),
    {
      name: 'user-storage', // name of the item in the storage
    }
  )
);