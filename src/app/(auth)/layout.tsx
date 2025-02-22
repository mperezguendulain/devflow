import Image from 'next/image';
import type { ReactNode } from 'react';

// Material UI
import { Modal, Stack, Typography } from '@mui/material';

// Custom Components
import { AuthThemedImage } from '@/components/AuthThemedImage/AuthThemedImage';
import { SocialAuthForm } from '@/components/forms/SocialAuthForm';

// Styles
import { modalContentStyle } from '@/styles/modal';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Stack height="100vh" justifyContent="center" alignItems="center">
      <AuthThemedImage />
      <Modal
        open
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Stack sx={{ ...modalContentStyle }} gap={2}>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography variant="h6">Join DevFlow</Typography>
              <Typography variant="body2">
                To get your questions answered
              </Typography>
            </Stack>
            <Image
              src="images/site-logo.svg"
              alt="DevFlow Logo"
              width={50}
              height={50}
            />
          </Stack>
          {children}
          <SocialAuthForm />
        </Stack>
      </Modal>
    </Stack>
  );
}
