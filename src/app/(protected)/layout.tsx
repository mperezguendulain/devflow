import type { ReactNode } from 'react';

// Material UI
import { Box } from '@mui/material';
import { Navbar } from '@/components/navigation/Navbar/Navbar';

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <Box height="100vh">
      <Navbar />
      {children}
    </Box>
  );
}
