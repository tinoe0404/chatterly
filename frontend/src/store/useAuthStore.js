import { create } from 'zustand';

export const useAuthStore = create((set, get) => ({
    authUser: {name: 'John', _id: '123', age: 25},
    isLoading: false,
    isLoggedIn: false,

    login: () => {
        console.log('Logging in...');
        set({ isLoggedIn: true, isLoading: true });
    }
}));