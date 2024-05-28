'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

export async function signoutAction () {
    await signOut();
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    console.log("authenticate action")
    try {
      console.log("awaiting signIn");
      await signIn('credentials', formData);
      console.log("signIn returned");
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            console.log("invalid credentials");
            return 'Invalid credentials.';
          default:
            console.log("unspecified auth error");
            return 'Something went wrong.';
        }
      }
      throw error;
    }

  }
