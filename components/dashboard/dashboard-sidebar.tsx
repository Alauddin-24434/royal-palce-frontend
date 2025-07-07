'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Crown,
  CreditCard,
  Bed,
  Calendar,
  Users,
  Building,
  User,
  ChevronDown,
  LogOut,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useLogout } from '@/hooks/useLogout';

interface JwtPayload {
  role: 'admin' | 'receptionist' | 'guest';
}

const adminMenuItems = [
  { title: 'Dashboard', url: '/dashboard/admin', icon: Crown },
  {
    title: 'Payments Management',
    url: '/dashboard/admin/payments',
    icon: CreditCard,
  },
  { title: 'Rooms Management', url: '/dashboard/admin/rooms', icon: Bed },
  {
    title: 'Bookings Management',
    url: '/dashboard/admin/bookings',
    icon: Calendar,
  },
  { title: 'Users Management', url: '/dashboard/admin/users', icon: Users },
  {
    title: 'Service Management',
    url: '/dashboard/admin/services',
    icon: Building,
  },
];

const receptionistMenuItems = [
  { title: 'Dashboard', url: '/dashboard/receptionist', icon: Crown },
  {
    title: 'Payments Management',
    url: '/dashboard/receptionist/payments',
    icon: CreditCard,
  },
  {
    title: 'Bookings Management',
    url: '/dashboard/receptionist/bookings',
    icon: Calendar,
  },
  { title: 'Check-In', url: '/dashboard/receptionist/checkin', icon: Users },
  {
    title: 'Reservations',
    url: '/dashboard/receptionist/reservations',
    icon: Calendar,
  },
];

const guestMenuItems = [
  { title: 'My Dashboard', url: '/dashboard/user', icon: Crown },
  { title: 'Booked Room', url: '/dashboard/user/bookings', icon: Bed },
  { title: 'Payments', url: '/dashboard/user/payments', icon: CreditCard },
  { title: 'Profile', url: '/dashboard/user/profile', icon: User },
  { title: 'Support', url: '/dashboard/user/support', icon: User },
];

export function AppSidebar() {
  const pathname = usePathname();
  const user = useSelector(selectCurrentUser);
  const logout = useLogout();

  const [role, setRole] = useState<JwtPayload['role'] | null>(null);

  // ✅ Get user role from /api/me
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

  let menuToRender: { title: string; url: string; icon: React.ElementType }[] =
    [];

  switch (currentRole) {
    case 'admin':
      menuToRender = adminMenuItems;
      break;
    case 'receptionist':
      menuToRender = receptionistMenuItems;
      break;
    case 'guest':
      menuToRender = guestMenuItems;
      break;
    default:
      menuToRender = [];
  }

  return (
    <Sidebar className="border-r bg-main">
      <SidebarHeader className="border-b p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Crown className="h-8 w-8 text-[#bf9310]" />
          <div className="text-2xl font-bold text-yellow-500">ROYAL PALACE</div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground text-xs uppercase tracking-wider">
            {currentRole.toUpperCase()} Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuToRender.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`hover:bg-slate-700/50 rounded-none ${isActive ? 'bg-[#2a2d38] text-white font-semibold' : ''}`}
                    >
                      <Link
                        href={item.url}
                        className="flex items-center space-x-3 text-foreground hover:text-foreground"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-slate-700 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start h-12 bg-main"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">
                    {user?.name}
                  </p>
                  <p className="text-xs text-foreground">{user?.email}</p>
                </div>
              </div>
              <ChevronDown className="h-4 w-4 text-foreground ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-main" align="end">
            <Link href="/dashboard/user/profile">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4 text-foreground" />
                <span className="text-foreground">Profile</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={logout}
              className="text-red-400 cursor-pointer"
            >
              <LogOut className="mr-2 h-4 w-4 text-foreground" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
