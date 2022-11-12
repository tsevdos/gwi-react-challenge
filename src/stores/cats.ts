import create from "zustand";
import { Cat, Breed } from "../types/cats";

type CatsState = {
  selectedCat: Cat | null;
  selectedBreed: Breed | null;
  selectCat: (data: Cat | null) => void;
  selectBreed: (data: Breed | null) => void;
};

const useCatsStore = create<CatsState>((set, get) => ({
  selectedCat: null,
  selectedBreed: null,
  selectCat: (selectedCat): void => set((state) => ({ ...state, selectedCat })),
  selectBreed: (selectedBreed): void => set((state) => ({ ...state, selectedBreed })),
}));

export default useCatsStore;
