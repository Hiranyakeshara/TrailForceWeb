'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    // Forest green (close to the competitor's menu accent color)
    primary: { main: '#467E30' },
    secondary: { main: '#FFB300' },    // sunrise amber
    background: {
      default: '#0B0F0C',
      paper: 'rgba(17, 24, 19, 0.82)',
    },
    divider: 'rgba(255,255,255,0.10)',
  },
  shape: { borderRadius: 18 },
  typography: {
    fontFamily:
      'var(--font-montserrat), Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: -0.6 },
    h2: { fontWeight: 800, letterSpacing: -0.4 },
    h3: { fontWeight: 800, letterSpacing: -0.2 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,0.10)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999 },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export default theme;
