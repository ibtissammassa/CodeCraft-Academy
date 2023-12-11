import { create } from 'zustand';

const store = (set) => ({
    courses: [],
    setCourses: (courses) => set({ courses }),
    isLoading: true,
    setIsLoading: (isLoading) => set({ isLoading }),
})

export const useStore = create(store);