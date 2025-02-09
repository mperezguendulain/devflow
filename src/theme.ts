'use client';
// Material UI
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-inter)'
  },
  palette: {
    primary: {
      main: '#49657e',
      light: '#88a6c0',
      dark: '#1e2f3d',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#656e41',
      light: '#8a9465',
      dark: '#4a522e',
      contrastText: '#ffffff'
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828'
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100'
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b'
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20'
    },
    background: {
      default: '#e5e3e1',
      paper: '#ffffff'
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
      disabled: '#888888'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none'
        },
        outlined: {
          textTransform: 'none'
        },
        text: {
          textTransform: 'none'
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-inter)'
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#88a6c0',
      light: '#b3d1e8',
      dark: '#49657e',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#8a9465',
      light: '#b3bf8a',
      dark: '#656e41',
      contrastText: '#ffffff'
    },
    error: {
      main: '#ef5350',
      light: '#ff867c',
      dark: '#d32f2f'
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#ed6c02'
    },
    info: {
      main: '#03a9f4',
      light: '#4fc3f7',
      dark: '#0288d1'
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#2e7d32'
    },
    background: {
      default: '#1e1e1e',
      paper: '#2d2d2d'
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      disabled: '#888888'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none'
        },
        outlined: {
          textTransform: 'none'
        },
        text: {
          textTransform: 'none'
        }
      }
    }
  }
});
