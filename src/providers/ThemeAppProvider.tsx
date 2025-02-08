'use client';
// Material UI
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { useAppStore } from '@/lib/stores/useAppStore';
import { lightTheme, darkTheme } from '@/theme';

export const ThemeAppProvider = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { darkMode } = useAppStore();
  console.log({ darkMode });
  const theme = darkMode ? darkTheme : lightTheme;
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
