import { create } from "zustand";
import { axiosInstance } from "../lib/axiosInstance";

export const useNewsStore = create((set) => ({
    news: [],
    selectedNews: null,
    loading: false,
    error: null,

    // Get all news
    fetchNews: async () => {
        set({ loading: true, error: null });
        try {
            const res = await axiosInstance.get("/api/news");
            set({ news: res.data.data });
        } catch (err) {
            set({ error: err.message });
        } finally {
            set({ loading: false });
        }
    },

    // Get one news by ID
    getNewsById: async (id) => {
        set({ loading: true, error: null });
        try {
            const res = await axiosInstance.get(`/api/news/${id}`);
            set({
                selectedNews: res.data.data,
            });
        } catch (err) {
            set({ error: err.message });
        } finally {
            set({ loading: false });
        }
    },
}));
