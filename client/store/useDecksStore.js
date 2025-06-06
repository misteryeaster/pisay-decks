import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const useDecksStore = create((set, get) => ({
    decks: [],
    loading: false,
    error: null,

    fetchDecks: async (subjectName) => {
        set({ loading: true });
        try {
            const response = await axios.get(`${BASE_URL}/api/decks/${subjectName}`);
            set({ decks: response.data.data, error: null });
        } catch (error) {
            if(error.status === 429) {
                set({ error: "Rate limit exceeded" });
            } else {
                set({ error: "Failed to fetch decks" });
            }
        } finally {
            set({ loading: false });
        }
    }
}));