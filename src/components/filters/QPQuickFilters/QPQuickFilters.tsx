'use client';
import { useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Stack } from '@mui/material';
import { quickFilters } from './constants/quickFilter.constant';
import { DFToggleButton } from '@/components/ui/buttons.styled';

export const QPQuickFilters = () => {
  const queryParamName = 'filter';
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activeFilter, setActiveFilter] = useState<string>(
    searchParams.get(queryParamName) ?? ''
  );

  const addFilter = useCallback(
    (filter: string) => {
      const newQueryParams = new URLSearchParams(searchParams.toString());

      if (activeFilter === filter) {
        setActiveFilter('');
        newQueryParams.delete(queryParamName);
      } else {
        setActiveFilter(filter);
        newQueryParams.set(queryParamName, filter);
      }

      router.push(`${pathname}?${newQueryParams.toString()}`);
    },
    [activeFilter, pathname, searchParams, router]
  );

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        width: '100%',
        overflowX: 'auto'
      }}
    >
      {quickFilters.map(({ id, name }) => (
        <DFToggleButton
          key={id}
          active={activeFilter === name}
          variant="contained"
          onClick={() => addFilter(name)}
        >
          {name}
        </DFToggleButton>
      ))}
    </Stack>
  );
};
