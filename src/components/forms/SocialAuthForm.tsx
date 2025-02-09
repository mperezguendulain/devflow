import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export const SocialAuthForm = () => {
  return (
    <Stack direction="row" gap={2}>
      <Button variant="contained">
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
      <Button>
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
