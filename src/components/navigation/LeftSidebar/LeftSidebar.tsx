'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

// Material UI
import { Paper, Stack, useMediaQuery, useTheme } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';

// Styled Components
import {
  AuthButton,
  NavigationButton
} from '../Navbar/components/NavigationPanel/NavigationPanel.styled';

// Constants
import { sidebarLinks } from '../contants';
import { ROUTES } from '../contants/routes';

export const LeftSidebar = () => {
  const { status } = useSession();
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const displaySmallSidebar = useMediaQuery(theme.breakpoints.down('md'));

  const pathName = usePathname();

  const handleLogout = () => {
    signOut({
      redirectTo: ROUTES.SIGN_IN
    });
  };

  if (isMobileDevice) {
    return null;
  }

  return (
    <Paper
      component={Stack}
      p={2}
      sx={{
        height: '100%',
        width: displaySmallSidebar ? undefined : '250px',
        overflow: 'auto'
      }}
      justifyContent="space-between"
      alignItems="center"
    >
      {sidebarLinks.map((sbLink) => (
        <NavigationButton
          key={sbLink.route}
          active={pathName === sbLink.route}
          component={Link}
          href={sbLink.route}
          startIcon={<sbLink.IconComponent />}
          onlyIcon={displaySmallSidebar}
          fullWidth
        >
          {!displaySmallSidebar && sbLink.label}
        </NavigationButton>
      ))}

      <Stack pt={2} gap={1} width="100%">
        {status === 'loading' ? null : status === 'authenticated' ? (
          <AuthButton
            variant="contained"
            authType="logout"
            startIcon={<LogoutIcon />}
            onlyIcon={displaySmallSidebar}
            onClick={handleLogout}
          >
            {!displaySmallSidebar && 'Log out'}
          </AuthButton>
        ) : (
          <>
            <AuthButton
              variant="contained"
              authType="login"
              startIcon={<PersonIcon />}
              onlyIcon={displaySmallSidebar}
            >
              {!displaySmallSidebar && 'Log in'}
            </AuthButton>
            <AuthButton
              variant="contained"
              authType="signUp"
              startIcon={<PersonAddIcon />}
              onlyIcon={displaySmallSidebar}
            >
              {!displaySmallSidebar && 'Sign Up'}
            </AuthButton>
          </>
        )}
      </Stack>
    </Paper>
  );
};
