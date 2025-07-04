// components/PrivateRoute.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '@/redux/features/auth/authSlice';

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      // Login page এ redirect কর, সাথে redirect করার জন্য current path query হিসেবে পাঠাও
      router.replace(
        `/login?redirect=${pathname}${searchParams ? `?${searchParams.toString()}` : ''}`,
      );
    }
  }, [isAuthenticated, pathname, searchParams, router]);

  if (!isAuthenticated) {
    // ইউজার লগিন না থাকলে কিছু দেখাবে না বা loading spinner দিতে পারো
    return null;
  }

  return <>{children}</>;
}
