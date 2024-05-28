import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getDbConn } from './app/lib/db';

async function getUser(email: string) {
  const client = await getDbConn();

  const res = await client.query("SELECT * FROM users WHERE email = $1",
  [email,]);
  if (res.rows.length < 1) {
    return null;
  }
  if (res.rows.length > 1) {
    throw new Error("non uniq email");
  }
  return res.rows[0];
}


export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Credentials({
    async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            console.log("credentials provider authorizing " + email);
            const user = await getUser(email);
            if (!user) {
              console.log("no user by that name");
              return null;
            }
            if (user.password === password) {
              console.log("login ok");
              return user;
            } else {
              console.log("password mismatch");
              return null;
            }
          }
          
          console.log('Invalid credentials');
          console.log(parsedCredentials.error);
          return null;
      },
  })],
});
