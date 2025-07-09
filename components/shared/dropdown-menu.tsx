import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import Link from 'next/link';
import { JwtPayload } from '@/types/auth.interface';

export function DropdownMenuInNav({ onClick }: { onClick?: () => void }) {
  const user = useSelector(selectCurrentUser);
  const [role, setRole] = useState<JwtPayload['role'] | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/me', {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();
        setRole(data?.user?.role);
      } catch (err) {
        console.error('Error fetching role:', err);
        setRole(null);
      }
    };

    fetchUser();
  }, []);

  const currentRole: JwtPayload['role'] =
    role ?? (user?.role as JwtPayload['role']) ?? 'guest';

  // Dashboard route switch based on role
  const dashboardRoute = (() => {
    switch (currentRole) {
      case 'admin':
        return '/dashboard/admin';
      case 'receptionist':
        return '/dashboard/receptionist';
      case 'guest':
      default:
        return '/dashboard/user';
    }
  })();

  return (
    <DropdownMenu>
      {user && (
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            <Avatar>
              <AvatarImage src={user?.image} alt="userImage" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
      )}

      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <Link href={dashboardRoute} passHref>
            <DropdownMenuItem>
              Dashboard
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onClick}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
