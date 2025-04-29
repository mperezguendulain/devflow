import Link from 'next/link';
import { Stack, Typography } from '@mui/material';

// Custom Components
import { QPSearchBox } from '@/components/filters/QPSearchBox/QPSearchBox';
import { QuestionCard } from '@/components/cards/QuestionCard/QuestionCard';
import { QPQuickFilters } from '@/components/filters/QPQuickFilters/QPQuickFilters';
import { DFMainButton } from '@/components/ui/buttons.styled';

// Constants
import { ROUTES } from '@/components/navigation/contants/routes';

// Types
import type { Question } from '@/types/globals';

const questions: Question[] = [
  {
    id: '1',
    title: 'How to learn React?',
    description: 'I want to learn React, can anyone help me?',
    tags: [
      { id: '1', name: 'React' },
      { id: '2', name: 'JavaScript' }
    ],
    author: {
      id: '1',
      name: 'John Doe',
      image:
        'https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date()
  },
  {
    id: '2',
    title: 'How to learn JavaScript?',
    description: 'I want to learn JavaScript, can anyone help me?',
    tags: [
      { id: '1', name: 'JavaScript' },
      { id: '2', name: 'JavaScript' }
    ],
    author: {
      id: '1',
      name: 'John Doe',
      image:
        'https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date('2021-09-01')
  }
];

export default function Home() {
  const filteredQuestions = questions;

  return (
    <Stack p={3} sx={{ width: '100%', minWidth: 0 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5">All Questions</Typography>
        <DFMainButton component={Link} href={ROUTES.ASK_QUESTION}>
          Ask a Question
        </DFMainButton>
      </Stack>
      <Stack my={3}>
        <QPSearchBox
          placeholder="Search anything globally..."
          queryParamName="search"
        />
      </Stack>

      <Stack mb={3}>
        <QPQuickFilters />
      </Stack>

      <Stack flexGrow={1} sx={{ overflowY: 'auto' }}>
        {filteredQuestions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </Stack>
    </Stack>
  );
}
