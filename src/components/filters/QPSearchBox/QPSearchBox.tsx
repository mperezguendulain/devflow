'use client';
import { useCallback, useMemo, useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { debounceFn } from '@/utils';

type QPSearchBoxProps = {
  label?: string;
  placeholder?: string;
  queryParamName: string;
};

export const QPSearchBox = ({
  label,
  placeholder,
  queryParamName
}: QPSearchBoxProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [textToSearch, setTextToSearch] = useState(
    searchParams.get(queryParamName) || ''
  );

  const search = useCallback(
    (newTextToSearch: string) => {
      const newQueryParams = new URLSearchParams(searchParams.toString());

      if (newTextToSearch) {
        newQueryParams.set(queryParamName, newTextToSearch);
      } else {
        newQueryParams.delete(queryParamName);
      }
      router.push(`${pathname}?${newQueryParams.toString()}`);
    },
    [router, searchParams, queryParamName, pathname]
  );

  const debounceHandleSearch = useMemo(
    () => debounceFn(search, 1000),
    [search]
  );

  const handleSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const newTextToSearch = evt.target.value;
      setTextToSearch(newTextToSearch);

      debounceHandleSearch(newTextToSearch);
    },
    [debounceHandleSearch]
  );

  return (
    <TextField
      size="small"
      label={label}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      value={textToSearch}
      onChange={handleSearch}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }
      }}
    />
  );
};
