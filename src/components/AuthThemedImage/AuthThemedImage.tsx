'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import authDarkImg from '../../../public/images/auth-dark.png';
import authLightImg from '../../../public/images/auth-light.png';
import { useAppStore } from '@/lib/stores/useAppStore';

export const AuthThemedImage = () => {
  const isDarkMode = useAppStore((state) => state.darkMode);

  return (
    <Box
      sx={{
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        zIndex: -1
      }}
    >
      <Image
        alt="Background"
        src={isDarkMode ? authDarkImg : authLightImg}
        placeholder="blur"
        layout="fill"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover'
        }}
      />
    </Box>
  );
};
