'use client';

import { signOut } from '@/auth';
import { signoutAction } from '@/app/lib/actions';

export default function LogoutButton() {

    return (<form
    action={signoutAction}
    ><button>sign out</button></form>
          );

}