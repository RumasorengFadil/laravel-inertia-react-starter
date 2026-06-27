import ApplicationLogo from '@/components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="flex w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    {children}
                </div>
            </div>
        </div>
    );
}
