'use client';
import { signUpSchema } from '@/lib/stores/validators/authValidator';
import { AuthForm } from './AuthForm';

export const SignUp = () => {
  const signUp = ({
    name,
    username,
    email,
    password
  }: { name: string; username: string; email: string; password: string }) => {
    console.log({ name, username, email, password });
  };

  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        name: '',
        username: '',
        email: '',
        password: ''
      }}
      onSubmit={signUp}
    />
  );
};
