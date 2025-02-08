'use client';
// Material UI
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { useAppStore } from '@/lib/stores/useAppStore';
import { lightTheme, darkTheme } from '@/theme';
import { useEffect, useState } from 'react';

export const ThemeAppProvider = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { darkMode, hasHydrated } = useAppStore();
  const [canBeMounted, setCanBeMounted] = useState(false);

  useEffect(() => {
    if (hasHydrated) {
      setCanBeMounted(true);
    }
  }, [hasHydrated]);

  if (!canBeMounted) {
    return null;
  }

  const theme = darkMode ? darkTheme : lightTheme;
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
