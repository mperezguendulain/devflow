'use client';
import type { ReactNode } from 'react';
import { SnackbarProvider } from 'notistack';

export const NotistackProvider = ({ children }: { children: ReactNode }) => {
  return <SnackbarProvider>{children}</SnackbarProvider>;
};
