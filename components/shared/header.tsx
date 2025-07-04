'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Crown,  X, Sun, Moon } from 'lucide-react'; // আইকন আমদানি করো
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, logout } from '@/redux/features/auth/authSlice';
import { DropdownMenuInNav } from './dropdown-menu';
import { useTheme } from 'next-themes';

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useSelector(selectCurrentUser);
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

  // থিম টগল ফাংশন
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* Header */}
      <header className="bg-main sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Crown className="h-5 w-5 title mr-2" />
                <span className="font-bold title text-sm lg:text-base">
                  ROYAL PALACE
                </span>
              </Link>
            </div>

            {/* Center Nav (desktop) */}
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

            {/* থিম টগল বাটন + DropdownMenuInNav */}
            <div className="flex items-center space-x-4">
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

      {/* Sidebar Overlay (তোমার আগের মতো থাকবে) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <div className="w-64 bg-[#191a1e] text-white p-4 shadow-lg space-y-4">
            {/* Close button */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white hover:title mb-4"
            >
              <X />
            </button>

            {/* Nav links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`block px-4 py-2 rounded font-medium ${
                  pathname === item.href
                    ? 'bg-yellow-600 text-black'
                    : 'hover:bg-yellow-700'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="border-t border-gray-700 pt-4">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="flex items-center space-x-2"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-yellow-500">
                      <Image
                        src={user?.image || '/default-avatar.png'}
                        alt="Profile"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white">Dashboard</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsSidebarOpen(false);
                    }}
                    className="mt-3 w-full text-left text-white border border-yellow-600 px-3 py-2 rounded hover:bg-yellow-600 hover:text-black"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login">
                  <Button
                    onClick={() => setIsSidebarOpen(false)}
                    className="w-full bg-[#bf9310] hover:bg-yellow-600 text-black font-semibold mt-2"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Background overlay */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
      )}
    </>
  );
}
