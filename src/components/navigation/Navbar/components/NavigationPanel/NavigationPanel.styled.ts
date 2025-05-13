'use client';
import { Button, styled } from '@mui/material';

type NavigationButton = {
  active?: boolean;
  onlyIcon?: boolean;
  component?: React.ElementType;
};

type AuthButton = {
  authType: 'login' | 'signUp' | 'logout';
  onlyIcon?: boolean;
};

export const NavigationButton = styled(Button, {
  shouldForwardProp: (propName) =>
    propName !== 'active' && propName !== 'onlyIcon'
})<NavigationButton>(({ theme, active, onlyIcon }) => ({
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '16px',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  ...(active && {
    background: 'linear-gradient(93.22deg, #FF7000 -13.95%, #E2995F 99.54%)'
  }),
  minWidth: onlyIcon ? '0px' : undefined,
  ...(onlyIcon && {
    '& span': {
      marginRight: '0px',
      marginLeft: '0px'
    }
  })
}));

export const AuthButton = styled(Button, {
  shouldForwardProp: (propName) =>
    propName !== 'authType' && propName !== 'onlyIcon'
})<AuthButton>(({ theme, authType, onlyIcon }) => ({
  ...(authType === 'login' && {
    background: theme.palette.mode === 'dark' ? '#212734' : '#F4F6F8',
    color: '#FF7000'
  }),
  ...((authType === 'signUp' || authType === 'logout') && {
    background: theme.palette.mode === 'dark' ? '#151821' : '#DCE3F1',
    color: theme.palette.mode === 'dark' ? 'white' : '#212734'
  }),
  minWidth: onlyIcon ? '0px' : undefined,
  ...(onlyIcon && {
    '& span': {
      marginRight: '0px',
      marginLeft: '0px'
    }
  })
}));
