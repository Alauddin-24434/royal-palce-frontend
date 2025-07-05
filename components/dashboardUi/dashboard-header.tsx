'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { NotificationDropdown } from '../shared/NotificationDropdown';
import { useNotificationStore } from '@/zustand/useNotificationStore';
import { useState } from 'react';

export function DashboardHeader() {
  const { theme, setTheme } = useTheme();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const unreadCount = useNotificationStore((state) => state.unreadCount);

  // থিম টগল ফাংশন
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleNotification = () => {
    setIsNotificationOpen((prev) => !prev);
  };
  return (
    <header className="sticky top-0 z-40 border-b  bg-sidebar">
      <div className="flex h-16  justify-between items-center  gap-4 px-6">
        <SidebarTrigger className="text-foreground hover:text-white" />
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
        </div>
      </div>
    </header>
  );
}
