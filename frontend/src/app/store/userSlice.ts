import { StateCreator } from 'zustand';
import { User } from '../types/User';

export interface UserSlice {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
    updateUser: (updatedFields: Partial<User>) => void;
    updateUserAPI: (updatedFields: Partial<User>) => Promise<void>;
}


export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set, get, store) => ({
  user: null,

  setUser: (user) => set({ user }),

  clearUser: () => set({ user: null }),

  updateUser: (updatedFields: Partial<User>) => {
    const currentUser = get().user;
    if(!currentUser) return; // No user to update

    set({
      user: { ...currentUser, ...updatedFields },
    });
  },

  updateUserAPI: async (updatedFields: Partial<User>) => {
    const token = localStorage.getItem('token');
    const currentUser = get().user;

    console.log('Current user:', currentUser);

    if (!token) {
      throw new Error('No authentication token found');
    }
    if (!currentUser) {
      throw new Error('No user to update');
    }

    try {
      const response = await fetch(`http://localhost:5000/api/users?id=${currentUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFields),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to update user');
      }

      const updatedUser: User = await response.json();
      set({ user: updatedUser });
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },
});