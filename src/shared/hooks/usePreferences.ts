import { noop } from "@techmely/utils";
import { create } from "zustand";

type PreferencesStore = {
  isOpenSidebar: boolean;
  toggleOpenSidebar: (v: boolean) => void;
};

const initPreferencesState: PreferencesStore = {
  isOpenSidebar: true,
  toggleOpenSidebar: noop,
};

export const usePreferencesState = create<PreferencesStore>((set) => ({
  ...initPreferencesState,
  toggleOpenSidebar: (isOpenSidebar) => set({ isOpenSidebar }),
}));
