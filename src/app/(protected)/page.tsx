import Link from 'next/link';
import { Stack, Typography } from '@mui/material';

import { QPSearchBox } from '@/components/filters/QPSearchBox/QPSearchBox';
import { DFButton } from '@/components/ui/buttons.styled';

import { ROUTES } from '@/components/navigation/contants/routes';

export default function Home() {
  return (
    <Stack p={4} flexGrow={1}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">All Questions</Typography>
        <DFButton component={Link} href={ROUTES.ASK_QUESTION}>
          Ask a Question
        </DFButton>
      </Stack>
      <Stack my={4}>
        <QPSearchBox
          placeholder="Search anything globally..."
          queryParamName="search"
        />
      </Stack>
      HomeFilter
      <Stack>Question Card 1</Stack>
    </Stack>
  );
}
