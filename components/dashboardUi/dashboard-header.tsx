'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function DashboardHeader() {
  const { theme, setTheme } = useTheme();

  // থিম টগল ফাংশন
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <header className="sticky top-0 z-40 border-b  bg-sidebar">
      <div className="flex h-16  justify-between items-center  gap-4 px-6">
        <SidebarTrigger className="text-foreground hover:text-white" />
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded hover:bg-yellow-500 hover:text-black transition"
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
