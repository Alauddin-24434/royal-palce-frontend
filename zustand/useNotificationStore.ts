import { create } from 'zustand';

//==== === Notification Type === ===//
type Notification = {
  id: string;
  message: string;
  time: string;
  isRead?: boolean;
};

//==== === Notification Store Interface === ===//
interface NotificationStore {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (noti: Notification) => void;
  removeNotification: (id: string) => void;
  markAsRead: (id: string) => void;
  clearAllNotifications: () => void;
}

//==== === Zustand Notification Store === ===//
export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  unreadCount: 0,

  //==== === Add Notification === ===//
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

  //==== === Remove Notification by ID === ===//
  removeNotification: (id) =>
    set((state) => {
      const newNotifications = state.notifications.filter((n) => n.id !== id);
      return {
        notifications: newNotifications,
        unreadCount: newNotifications.filter((n) => !n.isRead).length,
      };
    }),

  //==== === Mark Notification as Read === ===//
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

  //==== === Clear All Notifications === ===//
  clearAllNotifications: () => set({ notifications: [], unreadCount: 0 }),
}));
