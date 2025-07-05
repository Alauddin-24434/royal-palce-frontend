// hooks/useSocket.ts
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { io, Socket } from 'socket.io-client';

export const useSocket = () => {
  const user = useSelector(selectCurrentUser);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (user && !socketRef.current) {
      const socket = io(process.env.NEXT_PUBLIC_API_BASE_URL, {
        withCredentials: true,
        transports: ['websocket'],
        query: {
          userId: user._id,
          role: user.role,
        },
      });

      socket.on('connect', () => {
        console.log('✅ Socket connected:', socket.id);
      });

      socket.on('connect_error', (err) => {
        console.error('❌ Socket connection error:', err);
      });

      socketRef.current = socket;
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [user]);

  return socketRef.current;
};
