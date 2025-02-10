import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

// Material UI
import { Box } from '@mui/material';
import { Navbar } from '@/components/navigation/Navbar/Navbar';

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Box height="100vh" sx={{ backgroundColor: 'background.default' }}>
        <Navbar />
        {children}
      </Box>
    </SessionProvider>
  );
}
