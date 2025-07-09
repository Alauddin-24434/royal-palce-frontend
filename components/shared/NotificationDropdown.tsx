'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { useNotificationStore } from '@/zustand/useNotificationStore';

interface NotificationDropdownProps {
  onClose: () => void;
}

// ==== === NotificationDropdown Component: Shows notification list with links, remove buttons, clear all, and close === === //
export function NotificationDropdown({ onClose }: NotificationDropdownProps) {
  const { notifications, removeNotification, clearAllNotifications } =
    useNotificationStore();

  return (
    <div className="absolute right-0 mt-12 w-80 bg-white dark:bg-gray-800 shadow-lg rounded p-4 z-50 max-h-96 overflow-auto">
      {/*================ Header: Title + Clear All button============================== */}
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold text-gray-900 dark:text-gray-100">
          Notifications
        </h4>
        {notifications.length > 0 && (
          <button
            onClick={clearAllNotifications}
            className="text-xs text-red-600 hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      {/*============= Notification list or empty message====================== */}
      {notifications.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No new notifications</p>
      ) : (
        <ul>
          {notifications.map((noti) => (
            <li
              key={noti.id}
              className="mb-2 border-b border-gray-300 dark:border-gray-700 pb-2 text-gray-800 dark:text-gray-200 relative"
            >
              {/* ========================Notification message link ==========================*/}
              <Link
                href={`/service/${noti.id}`}
                className="hover:underline text-blue-600 dark:text-blue-400"
                onClick={onClose}
              >
                {noti.message}
              </Link>

              {/* ==================Remove single notification button ========================*/}
              <button
                onClick={() => removeNotification(noti.id)}
                className="absolute top-0 right-0 text-red-500 hover:text-red-700"
                aria-label="Remove notification"
              >
                <X className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* ====================Close dropdown manually ================================*/}
      <button
        onClick={onClose}
        className="mt-2 w-full text-center text-sm text-gray-600 dark:text-gray-300 hover:underline"
        aria-label="Close notifications"
      >
        Close
      </button>
    </div>
  );
}
