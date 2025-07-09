// ====================================================
// 🧾 Header Component - Site header with logo, nav, theme toggle, notifications, user menu, and mobile menu
// ====================================================

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Crown, Sun, Moon, Bell } from 'lucide-react';
import { DropdownMenuInNav } from './dropdown-menu';
import { useTheme } from 'next-themes';
import { NotificationDropdown } from './NotificationDropdown';
import { useNotificationStore } from '@/zustand/useNotificationStore';

import { motion, AnimatePresence } from 'framer-motion';
import { useLogout } from '@/hooks/useLogout';

export function Header() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const unreadCount = useNotificationStore((state) => state.unreadCount);

  const logout = useLogout();
  const router = useRouter();
  const pathname = usePathname();

  // Navigation links
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Rooms & Suites', href: '/rooms' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Checkout', href: '/checkout' },
    { name: 'Cart', href: '/cart' },
  ];

  const { theme, setTheme } = useTheme();

  // Toggle light/dark theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Toggle notification dropdown visibility
  const toggleNotification = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  return (
    <header className="bg-main sticky top-0 z-50 shadow-lg border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <Crown className="h-5 w-5 title mr-2" />
            <span className="font-bold title text-sm lg:text-base hidden md:block">
              ROYAL PALACE
            </span>
          </Link>

          {/* Center: Desktop nav links */}
          <nav className="hidden md:flex space-x-10">
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

          {/* Right: Icons, user menu, mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleNotification();
              }}
              aria-label="Toggle Notifications"
              className="relative p-2 rounded hover:title hover:text-foreground transition"
            >
              <Bell className="w-5 h-5" />
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

            {/* Theme toggle (desktop only) */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded hover:title hover:text-foreground transition hidden md:block"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* User dropdown menu */}
            <div>
              <DropdownMenuInNav onClick={logout} />
            </div>

            {/* Hamburger menu (mobile only) */}
            <button
              className="md:hidden p-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-title transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-background px-4 py-3 space-y-2 shadow-lg overflow-hidden"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'title'
                    : 'text-foreground hover:title'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
