'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Material UI
import { Menu } from '@mui/icons-material';
import {
  Box,
  Drawer,
  IconButton,
  Paper,
  Stack,
  Typography
} from '@mui/material';

// Styled Components
import { AuthButton, NavigationButton } from './NavigationPanel.styled';

// Constants
import { sidebarLinks } from '../../../contants';
import { usePathname } from 'next/navigation';

export const NavigationPanel = () => {
  const [navigationPanelOpened, setNavigationPanelOpened] = useState(false);

  const toggleNavigationPanel = (newOpenState: boolean) => {
    console.log('opening:', newOpenState);
    setNavigationPanelOpened(newOpenState);
  };

  const pathName = usePathname();

  return (
    <Box>
      <IconButton onClick={() => toggleNavigationPanel(true)}>
        <Menu />
      </IconButton>
      <Drawer
        open={navigationPanelOpened}
        onClose={() => toggleNavigationPanel(false)}
      >
        <Stack
          component={Paper}
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => toggleNavigationPanel(false)}
          flexGrow={1}
          justifyContent="space-between"
        >
          <Stack gap={1} p={2}>
            <Stack direction="row" alignItems="center" gap={1} mb={2}>
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
            </Stack>

            {sidebarLinks.map((sbLink) => (
              <NavigationButton
                key={sbLink.route}
                active={pathName === sbLink.route}
                component={Link}
                href={sbLink.route}
                startIcon={<sbLink.IconComponent />}
              >
                {sbLink.label}
              </NavigationButton>
            ))}
          </Stack>

          <Stack p={2} gap={1}>
            <AuthButton variant="contained" authType="login">
              Log in
            </AuthButton>
            <AuthButton variant="contained" authType="signUp">
              Sign Up
            </AuthButton>
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
};
