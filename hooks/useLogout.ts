import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/features/auth/authSlice';

export function useLogout() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logoutUser = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
      });
      dispatch(logout());
      router.push('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return logoutUser;
}
