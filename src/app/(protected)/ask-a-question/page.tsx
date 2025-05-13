import { QuestionForm } from '@/components/forms/QuestionForm/QuestionForm';
import { Stack, Typography } from '@mui/material';

export default function AskAQuestionPage() {
  return (
    <Stack>
      <Typography variant="h5" mb={4}>
        Ask a public quesiton
      </Typography>
      <QuestionForm />
    </Stack>
  );
}
