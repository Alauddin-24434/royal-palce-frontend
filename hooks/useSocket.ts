// hooks/useSocket.ts
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { io, Socket } from 'socket.io-client';

//==== === Custom hook to manage socket.io connection based on authenticated user === ===//
export const useSocket = () => {
  //==== === Get current logged-in user from Redux store === ===//
  const user = useSelector(selectCurrentUser);
  //==== === Ref to hold socket instance === ===//
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    //==== === Initialize socket connection only if user exists and socket not yet created === ===//
    if (user && !socketRef.current) {
      const socket = io(process.env.NEXT_PUBLIC_API_BASE_URL as string, {
        withCredentials: true,
        transports: ['websocket', 'polling'],
        query: {
          userId: user._id,
          role: user.role,
        },
      });

      //==== === Optional: Setup socket event listeners here === ===//
      // socket.on("notification", (data) => {
      //   console.log("Notification received", data);
      // });

      socketRef.current = socket;
    }

    //==== === Cleanup: disconnect socket on unmount or user change === ===//
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [user]);

  //==== === Return current socket instance === ===//
  return socketRef.current;
};
