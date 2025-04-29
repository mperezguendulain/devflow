import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Stack } from '@mui/material';

// Custom Components
import { Navbar } from '@/components/navigation/Navbar/Navbar';
import { LeftSidebar } from '@/components/navigation/LeftSidebar/LeftSidebar';
import { RightSidebar } from '@/components/navigation/RightSidebar/RightSidebar';

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Stack
        height="100%"
        width="100%"
        sx={{ backgroundColor: 'background.default' }}
      >
        <Navbar />
        <Stack direction="row" flexGrow={1} width="100%">
          <LeftSidebar />
          <Stack flex={1} width="100%">
            {children}
          </Stack>
          <RightSidebar />
        </Stack>
      </Stack>
    </SessionProvider>
  );
}
