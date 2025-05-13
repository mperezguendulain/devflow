'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

// Custom Components
import { DFMainButton } from '@/components/ui/buttons.styled';

// Validators
import { askQuestionSchema } from '@/lib/stores/validators/questionValidator';

type QuestionFormInputs = {
  title: string;
  description: string;
  tags: Array<string>;
};

export const QuestionForm = () => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<QuestionFormInputs>({
    resolver: zodResolver(askQuestionSchema),
    mode: 'onTouched',
    defaultValues: {
      title: '',
      description: '',
      tags: []
    }
  });

  const createNewQuestion = (formData: QuestionFormInputs) => {
    console.log({ formData });
  };

  return (
    <form onSubmit={handleSubmit(createNewQuestion)} autoComplete="off">
      <Stack>
        <>
          <Typography mb={1}>
            Question Title <span style={{ color: 'red' }}>*</span>
          </Typography>
          <Controller
            key="title"
            name="title"
            control={control}
            render={({ field }) => (
              <TextField {...field} type="text" error={!!errors?.title} />
            )}
          />
          <Typography variant="caption" color="text.secondary">
            Be specific and imagine you’re asking a question to another person.
          </Typography>
        </>

        <>
          <Typography mb={1}>
            Detailed explanation of your problem?{' '}
            <span style={{ color: 'red' }}>*</span>
          </Typography>
          <Controller
            key="description"
            name="description"
            control={control}
            render={({ field }) => (
              <TextField {...field} type="text" error={!!errors?.description} />
            )}
          />
          <Typography variant="caption" color="text.secondary">
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </Typography>
        </>

        <>
          <Typography mb={1}>
            Tags <span style={{ color: 'red' }}>*</span>
          </Typography>
          {/* <Controller
            key="tags"
            name="tags"
            control={control}
            render={({ field }) => (
              <TextField {...field} type="text" error={!!errors?.tags} />
            )}
          /> */}
          <Typography variant="caption" color="text.secondary">
            Add up to 5 tags to describe what your question is about. Start
            typing to see suggestions.
          </Typography>
        </>

        <Stack direction="row" justifyContent="end" mt={6}>
          <DFMainButton
            type="submit"
            variant="contained"
            disabled={isSubmitting}
          >
            Ask a Question
          </DFMainButton>
        </Stack>
      </Stack>
    </form>
  );
};
