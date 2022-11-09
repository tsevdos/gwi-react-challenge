import create from "zustand";
import { Cat, CatsAPIOptions } from "../types/cats";
import { Status } from "../types/general";

type UnitState = {
  apiOptions: CatsAPIOptions;
  cats: {
    status: Status;
    entries: Cat[];
  };
  selectedCat: {
    status: Status;
    entry: Cat | null;
  };
  changePage: (num: number) => void;
  loadMoreCats: (data: Cat[]) => void;
  setStatus: (status: Status) => void;
  getSelectedCat: (data: Cat) => void;
  setSelectedCatStatus: (status: Status) => void;
  removeSelectedCat: () => void;
};

const useCatsStore = create<UnitState>((set, get) => ({
  apiOptions: {
    page: 1,
    limit: 10,
    order: "RAND",
  },
  cats: {
    status: "loading",
    entries: [],
  },
  selectedCat: {
    status: "loading",
    entry: null,
  },
  changePage: (page): void => set((state) => ({ ...state, apiOptions: { ...get().apiOptions, page } })),
  loadMoreCats: (data): void =>
    set((state) => ({
      ...state,
      cats: { ...get().cats, entries: [...get().cats.entries, ...data] },
    })),
  setStatus: (status): void =>
    set((state) => ({
      ...state,
      cats: { ...get().cats, status },
    })),
  getSelectedCat: (data): void =>
    set((state) => ({
      ...state,
      selectedCat: { ...get().selectedCat, entry: data },
    })),
  setSelectedCatStatus: (status): void =>
    set((state) => ({
      ...state,
      selectedCat: { ...get().selectedCat, status },
    })),
  removeSelectedCat: (): void =>
    set((state) => ({
      ...state,
      selectedCat: { status: "loading", entry: null },
    })),
}));

export default useCatsStore;
