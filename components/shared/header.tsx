'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Crown, Sun, Moon, Bell } from 'lucide-react';

import { useDispatch } from 'react-redux';
import { logout } from '@/redux/features/auth/authSlice';
import { DropdownMenuInNav } from './dropdown-menu';
import { useTheme } from 'next-themes';
import { NotificationDropdown } from './NotificationDropdown'; // নতুন কম্পোনেন্ট ইম্পোর্ট করো
import { useNotificationStore } from '@/zustand/useNotificationStore';

export function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const unreadCount = useNotificationStore((state) => state.unreadCount);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Rooms & Suites', href: '/rooms' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Checkout', href: '/checkout' },
  ];

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleNotification = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-main sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Crown className="h-5 w-5 title mr-2" />
                <span className="font-bold title text-sm lg:text-base">
                  ROYAL PALACE
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex space-x-10 mx-auto">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'title'
                      : 'text-foreground hover:title'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4 relative">
              {/* Notification Bell */}
              <button
                onClick={(e) => {
                  e.preventDefault(); // reload প্রতিরোধ
                  toggleNotification();
                }}
                aria-label="Toggle Notifications"
                className="relative p-2 rounded hover:title hover:text-foreground transition"
              >
                <Bell className="w-6 h-6" />

                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Dropdown */}
              {isNotificationOpen && (
                <NotificationDropdown
                  onClose={() => setIsNotificationOpen(false)}
                />
              )}

              {/* থিম টগল */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
                className="p-2 rounded hover:title hover:text-foreground transition"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <DropdownMenuInNav onClick={handleLogout} />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar & rest... */}
    </>
  );
}
