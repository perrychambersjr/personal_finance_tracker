import { StateCreator } from 'zustand';
import { Goal } from '../../../types/Goal';

export interface GoalSlice {
    goals: Goal[];
    activeGoal: Goal | null;

    // setters
    setGoals: (goals: Goal[]) => void;
    setActiveGoal: (goal: Goal | null) => void;

    fetchGoals: () => Promise<void>;
    createGoal: (goalData: Partial<Goal>) => Promise<void>;
}


export const createGoalSlice: StateCreator<GoalSlice> = (set, get) => ({
  goals: [],
  activeGoal: null,

  setGoals: (goals) => set({ goals }),
  setActiveGoal: (goal) => set({ activeGoal: goal }),

  fetchGoals: async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const res = await fetch("http://localhost:5000/api/goals", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch goals");
      return;
    }

    const data: Goal[] = await res.json();
    set({ goals: data });
  },

  createGoal: async (goalData) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const res = await fetch("http://localhost:5000/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(goalData),
    });

    const newGoal = await res.json();

    set({ goals: [...get().goals, newGoal] });
  }
});