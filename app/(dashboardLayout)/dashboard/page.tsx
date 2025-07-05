'use client';

// === Component Imports ===
import AdminDashboard from '@/components/dashboardUi/Admin/AdminDashboard';
import GuestDashboard from '@/components/dashboardUi/Guest/GuestDashboard';
import ReceptionistDashboard from '@/components/dashboardUi/Receptionist/ReceptionistDashboard';

// === Redux and Hooks ===
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useGetDashboardDataQuery } from '@/redux/features/dashboard/dashboardApi';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function DashboardPage() {
  // === Get logged-in user from Redux store ===
  const user = useSelector(selectCurrentUser);

  // === Fetch dashboard data conditionally based on user presence ===
  const {
    data: dashboardData,
    isLoading,
    refetch,
  } = useGetDashboardDataQuery(undefined, {
    skip: !user, // === যদি user না থাকে তাহলে query skip করো ===
    refetchOnMountOrArgChange: true,
  });

  // ===  Re-fetch data whenever user changes ===
  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  // === ⏳ Loading Spinner ===
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

  // ===  User not found ===
  if (!user)
    return <div className="text-white text-center mt-10">User not found</div>;

  // === ✅ Render appropriate dashboard based on user role ===
  switch (user?.role) {
    case 'admin':
      // ===  Admin dashboard ===
      return (
        <AdminDashboard
          stats={dashboardData?.stats}
          bookings={dashboardData?.recentBookings}
        />
      );

    case 'receptionist':
      // ===  Receptionist dashboard ===
      return (
        <ReceptionistDashboard
          stats={dashboardData?.stats}
          bookings={dashboardData?.recentBookings}
        />
      );

    case 'guest':
      // ===  Guest dashboard ===
      return (
        <GuestDashboard
          stats={dashboardData?.stats}
          bookings={dashboardData?.recentBookings}
        />
      );

    default:
      // ===  Unrecognized role ===
      return (
        <div className="text-white text-center mt-10">Invalid user role</div>
      );
  }
}
