import type { RootState } from "../store";
import type { Category } from "./types";

export const getCategories = () => (state: RootState): Category[] => Object.values(state.categories.items);
export const getCategoryById = (id: number) => (state: RootState): Category => state.categories.items[id];
export const getSelectedCategory = () => (state: RootState): Category | null => {
    if (!state.categories.selectedCategoryId) return null;
    return state.categories.items[state.categories.selectedCategoryId];
}