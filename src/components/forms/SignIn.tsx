'use client';
import { signInSchema } from '@/lib/stores/validators/authValidator';
import { AuthForm } from './AuthForm';

export const SignIn = () => {
  const login = ({ email, password }: { email: string; password: string }) => {
    console.log({ email, password });
  };

  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: '',
        password: ''
      }}
      onSubmit={login}
    />
  );
};
