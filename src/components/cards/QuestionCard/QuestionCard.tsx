import Link from 'next/link';
import { Card, Stack, Typography } from '@mui/material';

// Custom Components
import { QuestionData } from './components/QuestionData/QuestionData';
import { DFToggleButton } from '@/components/ui/buttons.styled';

// Utils
import { getElapsedTime } from '@/utils/dates';

// Constants
import { ROUTES } from '@/components/navigation/contants/routes';

// Types
import type { Question } from '@/types/globals';

type QuestionCardProp = {
  question: Question;
};

export const QuestionCard = ({ question }: QuestionCardProp) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <Stack py={2} px={4}>
        <Typography
          sx={{
            mx: 1,
            display: {
              sm: 'none'
            }
          }}
          variant="caption"
        >
          {getElapsedTime(question.createdAt)}
        </Typography>
        <Link
          href={`${ROUTES.QUESTIONS}/${question.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Typography variant="h6">{question.title}</Typography>
        </Link>
        <Stack direction="row">
          {question.tags.map((tag) => (
            <DFToggleButton
              key={tag.id}
              size="small"
              sx={{
                mr: 1
              }}
              variant="contained"
              LinkComponent={Link}
              href={`${ROUTES.TAGS}/${tag.id}`}
            >
              {tag.name}
            </DFToggleButton>
          ))}
        </Stack>
        <QuestionData question={question} />
      </Stack>
    </Card>
  );
};
