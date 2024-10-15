import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useRedirect() {
    const { data: session } = useSession();
    const router = useRouter();

    if (session) {
        router.push('/home');
    }

    return session;
}
