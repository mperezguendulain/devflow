import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

// Material UI
import { Stack } from '@mui/material';

// Custom Components
import { Navbar } from '@/components/navigation/Navbar/Navbar';
import { Sidebar } from '@/components/navigation/Sidebar/Sidebar';

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Stack height="100vh" sx={{ backgroundColor: 'background.default' }}>
        <Navbar />
        <Stack direction="row" flexGrow={1}>
          <Sidebar />
          {children}
        </Stack>
      </Stack>
    </SessionProvider>
  );
}
