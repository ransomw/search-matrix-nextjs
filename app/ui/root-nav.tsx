import Link from 'next/link';
import { signOut, auth } from '@/auth';
import LogoutButton from '@/app/ui/logout-button';

export default async function RootNav() {
    const session = await auth();
    return (<nav className="flex flex-row justify-between">
    <ul className="flex flex-row justify-between w-9/12">
    <li><Link href="/">home</Link></li>
    {!session?.user && (<li><Link href="/signup">signup</Link></li>)}
    {!session?.user && (<li><Link href="/login">login</Link></li>)}
    </ul>
    
    <form
        action={async () => {
                    'use server';
                    await signOut();
                  }}
    >
        {session?.user && (<button>sign out</button>)}
    </form>
        
    </nav>)
}