'use client';


import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';


export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);
   
    return (
      <form action={dispatch}>
        <div>
        <label>email</label>
        <input type="email" name="email" />
        </div>
        <div>
        <label>password</label>
        <input type="password" name="password" />
        </div>
        <button>login</button>
        <div className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
            >
        {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        </form>
    );
}