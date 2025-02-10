'use client';
import { useSnackbar } from 'notistack';
import Image from 'next/image';

// Material UI
import { Button, Stack, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';

// Constants
import { ROUTES } from '@/constants/routes';

export const SocialAuthForm = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSignIn = (provider: 'github' | 'google') => {
    console.log({ provider });
    try {
      signIn(provider, {
        redirectTo: ROUTES.HOME
      });
    } catch (error) {
      console.log({ error });
      enqueueSnackbar(
        error instanceof Error
          ? error.message
          : 'An error occured during sign-in',
        { variant: 'error' }
      );
    }
  };

  return (
    <Stack direction="row" gap={2}>
      <Button variant="contained" onClick={() => handleSignIn('github')}>
        <Image
          alt="Github Logo"
          src="icons/github.svg"
          width={20}
          height={20}
        />
        <Typography variant="body2" ml={1}>
          Log in with Github
        </Typography>
      </Button>
      <Button variant="contained" onClick={() => handleSignIn('google')}>
        <Image
          alt="Google Logo"
          src="icons/google.svg"
          width={20}
          height={20}
        />
        <Typography variant="body2" ml={1}>
          Log in with Google
        </Typography>
      </Button>
    </Stack>
  );
};
