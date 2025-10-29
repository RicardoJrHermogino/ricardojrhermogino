
// app/providers/ThemeProviders.tsx
"use client";

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from '../theme/theme';

// Simplified providers wrapper - no more theme context needed
export const ThemeProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};