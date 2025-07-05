'use client';

import { useEffect } from 'react';

import { useNotificationStore } from '@/zustand/useNotificationStore';
import { useSocket } from '@/hooks/useSocket';

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
    getMessage: (data) => `Payment initiated for booking ${data.bookingId}`,
  },
];

const SocketNotificationListener = () => {
  const socket = useSocket();
  const addNotification = useNotificationStore(
    (state) => state.addNotification,
  );

  useEffect(() => {
    if (!socket) return;

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

    return () => {
      handlers.forEach(({ event, handler }) => {
        socket.off(event, handler);
      });
    };
  }, [socket, addNotification]);

  return null;
};

export default SocketNotificationListener;
