'use client';
import Link from 'next/link';
import Image from 'next/image';

// Material UI
import {
  Box,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';

// Custom Components
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { NavigationPanel } from './components/NavigationPanel/NavigationPanel';
import { QPSearchBox } from '@/components/filters/QPSearchBox/QPSearchBox';

export const Navbar = () => {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            margin: '16px'
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

        <Box width="50%">
          <QPSearchBox
            placeholder="Search anything globally..."
            queryParamName="global"
          />
        </Box>

        <Stack direction="row">
          <ThemeSwitcher />
          {isMobileDevice && <NavigationPanel />}
        </Stack>
      </Stack>
    </Paper>
  );
};
