'use client';
import type { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Controller,
  type DefaultValues,
  type FieldValues,
  type Path,
  useForm
} from 'react-hook-form';

// Material UI
import { Button, Stack, TextField, Typography } from '@mui/material';

// Utils
import { capitalize } from '@/utils/strings';
import Link from 'next/link';

export type AuthType = 'SIGN_IN' | 'SIGN_UP';

type AuthFormProps<T extends FieldValues> = {
  type: AuthType;
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (formData: T) => void;
};

export const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit
}: AuthFormProps<T>) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
    defaultValues: defaultValues as DefaultValues<T>
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Stack gap={2}>
        {Object.keys(defaultValues).map((formField) => (
          <Controller
            key={formField}
            name={formField as Path<T>}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type={field.name === 'password' ? 'password' : 'text'}
                label={capitalize(field.name)}
                error={!!errors?.[field.name]}
                helperText={errors?.[field.name]?.message as string | undefined}
              />
            )}
          />
        ))}

        <Button type="submit" variant="contained" disabled={isSubmitting}>
          {type === 'SIGN_IN' ? 'Sign In' : 'Sign Up'}
        </Button>

        {type === 'SIGN_IN' ? (
          <Typography variant="caption">
            Don't have an account?{' '}
            <Link
              href="/sign-up"
              style={{
                color: 'orange',
                textDecoration: 'none'
              }}
            >
              Sign up
            </Link>
          </Typography>
        ) : (
          <Typography variant="caption">
            Already have an account?{' '}
            <Link
              href="/sign-in"
              style={{
                color: 'orange',
                textDecoration: 'none'
              }}
            >
              Sign in
            </Link>
          </Typography>
        )}
      </Stack>
    </form>
  );
};
