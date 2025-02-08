'use client';
// Material UI
import { IconButton } from '@mui/material';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

import { useAppStore } from '@/lib/stores/useAppStore';

export const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useAppStore();

  return (
    <IconButton onClick={toggleDarkMode}>
      {darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
    </IconButton>
  );
};
