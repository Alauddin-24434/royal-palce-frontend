// src/redux/features/notification/notificationSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Notification = {
  id: string;
  message: string;
  time: string;
  isRead?: boolean;
};

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
}

const initialState: NotificationState = {
  notifications: [],
  unreadCount: 0,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      const newNotification = { ...action.payload, isRead: false };
      state.notifications.unshift(newNotification);
      state.unreadCount = state.notifications.filter((n) => !n.isRead).length;
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload,
      );
      state.unreadCount = state.notifications.filter((n) => !n.isRead).length;
    },
    markAsRead: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.map((n) =>
        n.id === action.payload ? { ...n, isRead: true } : n,
      );
      state.unreadCount = state.notifications.filter((n) => !n.isRead).length;
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
      state.unreadCount = 0;
    },
  },
});

export const {
  addNotification,
  removeNotification,
  markAsRead,
  clearAllNotifications,
} = notificationSlice.actions;

export default notificationSlice.reducer;
