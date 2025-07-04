'use client';

import AdminDashboard from '@/components/dashboardUi/Admin/AdminDashboard';
import GuestDashboard from '@/components/dashboardUi/Guest/GuestDashboard';
import ReceptionistDashboard from '@/components/dashboardUi/Receptionist/ReceptionistDashboard';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useGetDashboardDataQuery } from '@/redux/features/dashboard/dashboardApi';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// ... your other imports and state

export default function DashboardPage() {
  const user = useSelector(selectCurrentUser);

  const {
    data: dashboardData,
    isLoading,
    refetch,
  } = useGetDashboardDataQuery(undefined, {
    skip: !user,
    refetchOnMountOrArgChange: true,
  });

  // ✅ Ensure refetch when user changes
  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#bf9310] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#bf9310] font-semibold text-lg">Loading ...</p>
        </div>
      </div>
    );
  }

  if (!user)
    return <div className="text-white text-center mt-10">User not found</div>;

  // Role-based dashboard rendering
  if (user.role === 'admin') {
    return (
      <AdminDashboard
        stats={dashboardData?.stats}
        bookings={dashboardData?.recentBookings}
      />
    );
  }

  if (user.role === 'receptionist') {
    return (
      <ReceptionistDashboard
        stats={dashboardData?.stats}
        bookings={dashboardData?.recentBookings}
      />
    );
  }

  if (user.role === 'guest') {
    return (
      <GuestDashboard
        stats={dashboardData?.stats}
        bookings={dashboardData?.recentBookings}
      />
    );
  }

  return <div className="text-white text-center mt-10">Invalid role</div>;
}
