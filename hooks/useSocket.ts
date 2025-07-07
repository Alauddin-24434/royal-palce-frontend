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
      const socket = io(process.env.NEXT_PUBLIC_API_BASE_URL as string, {
        withCredentials: true,
        transports: ['websocket', 'polling'],
        query: {
          userId: user._id,
          role: user.role,
        },
      });

      // Optional: Add listeners here
      // socket.on("notification", (data) => {
      //   console.log("Notification received", data);
      // });

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
