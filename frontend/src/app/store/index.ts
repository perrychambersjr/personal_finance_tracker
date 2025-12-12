import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GoalSlice, createGoalSlice } from '../(dashboard)/goals/store/goalSlice';
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

export const useGoalStore = create<GoalSlice>()(
  persist(
    (set, get, store) => ({
      ...createGoalSlice(set, get, store),
    }),
    {
      name: 'goal-storage', // name of the item in the storage
    }
  )
);