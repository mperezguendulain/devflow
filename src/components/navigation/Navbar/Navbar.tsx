'use client';
import Link from 'next/link';
import Image from 'next/image';

// Material UI
import { Stack, Typography } from '@mui/material';

import { ThemeSwitcher } from './components/ThemeSwitcher';

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: 'primary' }}
    >
      <Link
        href="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none'
        }}
      >
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow logo"
        />
        <Typography
          fontFamily="var(--font-grotesk)"
          color="text.primary"
          variant="h5"
          fontWeight="bold"
          sx={(theme) => ({
            [theme.breakpoints.down('sm')]: {
              display: 'none'
            }
          })}
        >
          Dev<span style={{ color: 'orange' }}>Flow</span>
        </Typography>
      </Link>

      <Typography variant="body2">Global search</Typography>

      <ThemeSwitcher />
    </Stack>
  );
};
