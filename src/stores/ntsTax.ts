import { create } from "zustand";

interface NtsTaxState {
  totalCnt: number | null;
  setTotalCnt: (count: number) => void;
}

export const useNtsTaxStore = create<NtsTaxState>((set) => ({
  totalCnt: null, // 기본값
  setTotalCnt: (count) => set({ totalCnt: count }),
}));
