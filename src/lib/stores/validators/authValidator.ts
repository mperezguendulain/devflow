import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is a required field' })
    .email({ message: 'Please provide a valid email' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(20, { message: 'Password cannot exceed 20 characters' })
});

export const signUpSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is a required field' })
    .max(50, { message: 'Name cannot exceed 50 characters' })
    .regex(/^[a-zA-Z\s]+$/, {
      message: 'Name can only contain letters and spaces'
    }),
  username: z
    .string()
    .min(1, { message: 'Username is a required field' })
    .min(3, { message: 'Username must be at least 3 characters' })
    .max(30, { message: 'Username cannot exceed 30 characters' })
    .regex(/^[a-zA-Z\s]+$/, {
      message: 'Username can only contain letters and spaces'
    }),
  email: z
    .string()
    .min(1, { message: 'Email is a required field' })
    .email({ message: 'Please provide a valid email' }),
  password: z
    .string()
    .min(1, { message: 'Password is a required field' })
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(20, { message: 'Password cannot exceed 20 characters' })
});
