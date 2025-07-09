import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/features/auth/authSlice';

//==== === Custom hook to handle user logout functionality === ===//
export function useLogout() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  //==== === Function to log out user by calling API and updating state === ===//
  const logoutUser = async () => {
    try {
      //==== === Call backend logout endpoint with credentials === ===//
      await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
      });

      //==== === Dispatch logout action to clear auth state === ===//
      dispatch(logout());

      //==== === Redirect user to login page after logout === ===//
      router.push('/login');
    } catch (error) {
      //==== === Log error if logout fails === ===//
      console.error('Logout failed', error);
    }
  };

  return logoutUser;
}
