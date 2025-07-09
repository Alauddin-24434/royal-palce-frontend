// ====================================================
// 🧾 SocketNotificationListener Component - Listen to socket events and add notifications to store
// ====================================================

'use client';

import { useEffect } from 'react';
import { useNotificationStore } from '@/zustand/useNotificationStore';
import { useSocket } from '@/hooks/useSocket';

// ===== Define socket events and corresponding message format =====
const EVENTS: { event: string; getMessage: (payload: any) => string }[] = [
  {
    event: 'booking-created',
    getMessage: (data) => `New booking for room ${data.room}`,
  },
  {
    event: 'room-created',
    getMessage: (data) => `New room created: ${data.name}`,
  },
  {
    event: 'user-created',
    getMessage: (data) => `New user registered: ${data.name || data.email}`,
  },
  {
    event: 'service-added',
    getMessage: (data) => `New service added: ${data.name}`,
  },
  {
    event: 'payment-initiated',
    getMessage: (data) => `Payment initiated for booking ${data.bookingId}`,
  },
  {
    event: 'booking-cancelled',
    getMessage: (data) => `Booking cancelled for booking ${data.bookingId}`,
  },
];

const SocketNotificationListener = () => {
  const socket = useSocket();
  const addNotification = useNotificationStore(
    (state) => state.addNotification,
  );

  useEffect(() => {
    if (!socket) return;

    // ===== Register event handlers for each socket event =====
    const handlers = EVENTS.map(({ event, getMessage }) => {
      const handler = (payload: any) => {
        addNotification({
          id: payload.id || payload._id || `${event}-${Date.now()}`,
          message: getMessage(payload),
          time: new Date().toISOString(),
          isRead: false,
        });
      };
      socket.on(event, handler);
      return { event, handler };
    });

    // ===== Cleanup: Remove all event handlers on unmount or socket change =====
    return () => {
      handlers.forEach(({ event, handler }) => {
        socket.off(event, handler);
      });
    };
  }, [socket, addNotification]);

  return null;
};

export default SocketNotificationListener;
