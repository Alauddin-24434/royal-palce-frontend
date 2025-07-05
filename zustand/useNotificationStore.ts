import { create } from 'zustand';

type Notification = {
  id: string;
  message: string;
  time: string;
  isRead?: boolean;
};

interface NotificationStore {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (noti: Notification) => void;
  removeNotification: (id: string) => void;
  markAsRead: (id: string) => void;
  clearAllNotifications: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  unreadCount: 0,

  addNotification: (noti) =>
    set((state) => {
      const newNotifications = [
        { ...noti, isRead: false },
        ...state.notifications,
      ];
      return {
        notifications: newNotifications,
        unreadCount: newNotifications.filter((n) => !n.isRead).length,
      };
    }),

  removeNotification: (id) =>
    set((state) => {
      const newNotifications = state.notifications.filter((n) => n.id !== id);
      return {
        notifications: newNotifications,
        unreadCount: newNotifications.filter((n) => !n.isRead).length,
      };
    }),

  markAsRead: (id) =>
    set((state) => {
      const newNotifications = state.notifications.map((n) =>
        n.id === id ? { ...n, isRead: true } : n,
      );
      return {
        notifications: newNotifications,
        unreadCount: newNotifications.filter((n) => !n.isRead).length,
      };
    }),

  clearAllNotifications: () => set({ notifications: [], unreadCount: 0 }),
}));
