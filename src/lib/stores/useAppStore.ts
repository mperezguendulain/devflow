import { create } from 'zustand';

type AppState = {
  darkMode: boolean;
};

type AppActions = {
  toggleDarkMode: () => void;
};

export const useAppStore = create<AppState & AppActions>()((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode }))
}));
