import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AppState = {
  darkMode: boolean;
  hasHydrated: boolean;
};

type AppActions = {
  toggleDarkMode: () => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      darkMode: false,
      hasHydrated: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setHasHydrated: (hasHydrated: boolean) => set({ hasHydrated })
    }),
    {
      name: 'app',
      partialize: (state) => ({ darkMode: state.darkMode }),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true)
    }
  )
);
