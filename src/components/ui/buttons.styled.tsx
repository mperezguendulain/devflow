'use client';
import { Button, type ButtonProps, styled } from '@mui/material';

export const DFButton = styled(Button, {
  shouldForwardProp: (propName) =>
    propName !== 'active' && propName !== 'onlyIcon'
})<ButtonProps>(({ theme }) => ({
  // justifyContent: 'flex-start',
  alignItems: 'center',
  // minWidth: onlyIcon ? '0px' : undefined,
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  background: 'linear-gradient(93.22deg, #FF7000 -13.95%, #E2995F 99.54%)'
}));
