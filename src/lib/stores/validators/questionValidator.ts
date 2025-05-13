import { z } from 'zod';

export const askQuestionSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is a required field' })
    .max(100, { message: 'Title cannot exceed 100 characters' }),
  description: z
    .string()
    .min(1, { message: 'Description is a required field' }),
  tags: z.array(
    z
      .string()
      .min(1, { message: 'Tag is required' })
      .max(30, { message: 'Tag cannot exceed 30 characters' })
  )
  // .min(1, { message: 'Tags is a required field' })
});
