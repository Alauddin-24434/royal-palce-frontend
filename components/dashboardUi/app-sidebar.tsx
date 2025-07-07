'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
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

import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Bed,
  Calendar,
  CreditCard,
  Users,
  Building,
  ChevronDown,
  LogOut,
  User,
  Crown,
} from 'lucide-react';

import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useLogout } from '@/hooks/useLogout';

const menuItems = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
    roles: ['admin', 'receptionist', 'guest'],
  },
  {
    title: 'Payments Management',
    url: '/dashboard/payments',
    icon: CreditCard,
    roles: ['admin', 'receptionist'],
  },
  {
    title: 'Rooms Management',
    url: '/dashboard/rooms',
    icon: Bed,
    roles: ['admin'],
  },

  {
    title: 'Bookings Management',
    url: '/dashboard/bookings',
    icon: Calendar,
    roles: ['admin', 'receptionist'],
  },

  {
    title: 'Users Management',
    url: '/dashboard/users',
    icon: Users,
    roles: ['admin'],
  },
  {
    title: 'Booked Room',
    url: '/dashboard/booked-user',
    icon: Bed,
    roles: ['guest'],
  },
  {
    title: 'Payments',
    url: '/dashboard/payments-user',
    icon: CreditCard,
    roles: ['guest'],
  },
  {
    title: 'Service Management',
    url: '/dashboard/services',
    icon: Building,
    roles: ['admin'],
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  const user = useSelector(selectCurrentUser);

  const role =
    user?.role === 'admin' ||
    user?.role === 'receptionist' ||
    user?.role === 'guest'
      ? user.role
      : 'guest';

  const [currentRole] = useState<'admin' | 'receptionist' | 'guest'>(role);

  const filteredMenuItems = menuItems.filter((item) =>
    item.roles.includes(currentRole),
  );

  const logout = useLogout();
  return (
    <Sidebar className="border-r bg-main">
      <SidebarHeader className="border-b  p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Crown className="h-8 w-8 text-[#bf9310]" />
          <div className="text-2xl font-bold text-yellow-500">ROYAL PALACE</div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        {/* Navigation Menu */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground text-xs uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredMenuItems.map((item) => {
                let isActive = false;

                if (item.url === '/dashboard') {
                  isActive = pathname === '/dashboard';
                } else {
                  isActive = pathname.startsWith(item.url);
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`hover:bg-slate-700/50 rounded-none ${
                        isActive ? 'bg-[#2a2d38] text-white font-semibold' : ''
                      }`}
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
              className="w-full justify-start h-12 bg-main "
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8  rounded-full flex items-center justify-center">
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
          <DropdownMenuContent className="w-56 bg-main  " align="end">
            <Link href="/dashboard/profile">
              <DropdownMenuItem className="">
                <User className="mr-2 h-4 w-4 text-foreground" />
                <span className="text-foreground">Profile</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator className="" />
            <DropdownMenuItem
              onClick={logout}
              className=" text-red-400 cursor-pointer"
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
