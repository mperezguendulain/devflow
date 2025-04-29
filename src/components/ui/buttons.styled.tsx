'use client';
import { Button, type ButtonProps, styled } from '@mui/material';

export const DFMainButton = styled(Button, {
  shouldForwardProp: (propName) =>
    propName !== 'active' && propName !== 'onlyIcon'
})<ButtonProps>(({ theme }) => ({
  // justifyContent: 'flex-start',
  alignItems: 'center',
  // minWidth: onlyIcon ? '0px' : undefined,
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  background: 'linear-gradient(93.22deg, #FF7000 -13.95%, #E2995F 99.54%)'
}));

type DFToggleButtonProps = {
  active?: boolean;
};

export const DFToggleButton = styled(Button, {
  shouldForwardProp: (propName) => propName !== 'active'
})<DFToggleButtonProps>(({ theme, active }) => ({
  // justifyContent: 'flex-start',
  minWidth: 'fit-content',
  alignItems: 'center',
  color: active ? '#FF7000' : '#7b8ec8',
  background:
    theme.palette.mode === 'dark'
      ? active
        ? '#212734'
        : '#151821'
      : active
        ? '#fff1e6'
        : '#f4f6f8',
  boxShadow: 'none'
}));
