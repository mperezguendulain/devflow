import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

// Material UI
import { Stack } from '@mui/material';

// Custom Components
import { Navbar } from '@/components/navigation/Navbar/Navbar';
import { LeftSidebar } from '@/components/navigation/LeftSidebar/LeftSidebar';
import { RightSidebar } from '@/components/navigation/RightSidebar/RightSidebar';

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Stack height="100vh" sx={{ backgroundColor: 'background.default' }}>
        <Navbar />
        <Stack direction="row" flexGrow={1} overflow="hidden">
          <LeftSidebar />
          <Stack flex={1}>{children}</Stack>
          <RightSidebar />
        </Stack>
      </Stack>
    </SessionProvider>
  );
}
