import Link from 'next/link';
import { signOut } from '@/auth';


export default function DashboardNav() {
    return (<nav className="flex flex-row justify-around">
    <ul className="flex flex-row justify-between w-9/12">
    <li><Link href="/dashboard/user">user</Link></li>
    <li><Link href="/dashboard/apps">applications</Link></li>
    </ul>
    <form
    action={async () => {
            'use server';
            await signOut();
          }}
    >
    <button>sign out</button>
    </form>
    </nav>);
}


