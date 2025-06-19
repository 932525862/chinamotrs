import { create } from "zustand";
import { axiosInstance } from "@/lib/axiosIntance";

export const useCategoryStore = create((set) => ({
    categories: [],
    selectedCategory: null,
    loading: false,
    error: null, 

    // Get all categories
    fetchCategories: async () => {
        set({ loading: true, error: null });
        try {
            const res = await axiosInstance.get("/api/categories");
            set({ categories: res.data.data });
        } catch (err) {
            set({ error: err.message });
        } finally {
            set({ loading: false });
        }
    },

    // Get one category by ID
    getCategoryById: async (id) => {
        set({ loading: true, error: null });
        try {
            const res = await axiosInstance.get(`/api/categories/${id}`);
            set({
                selectedCategory: res.data.data,
            });
        } catch (err) {
            set({ error: err.message });
        } finally {
            set({ loading: false });
        }
    },
}));
