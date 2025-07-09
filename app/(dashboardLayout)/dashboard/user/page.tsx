// ====================================================
// 🧾  Guest Dashboard Component
// ====================================================

'use client';

import React, { JSX } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bed, Calendar, DollarSign } from 'lucide-react';
import { useGetDashboardDataQuery } from '@/redux/features/dashboard/dashboardApi';
import { IBooking } from '@/types/booking.interface';

// ===== 🔹 Icon Mapping for Stat Cards =====
export interface IStat {
  title: string;
  value: number;
  icon: string;
}

const iconMap: Record<string, JSX.Element> = {
  Bed: <Bed className="h-8 w-8 text-foreground" />,
  Calendar: <Calendar className="h-8 w-8 text-foreground" />,
  DollarSign: <DollarSign className="h-8 w-8 text-foreground" />,
};

export default function GuestDashboard() {
  // ===== 🔹 Fetch dashboard data via RTK Query =====
  const { data: dashboardData, isLoading } = useGetDashboardDataQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    },
  );

  // ===== 🔁 Loading state UI =====
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

  // ===== 🔹 Extract stats and bookings data =====
  const stats = dashboardData?.stats ?? [];
  const bookings = dashboardData?.bookings ?? [];
  const pastBookings = dashboardData?.pastBookings ?? [];

  return (
    <div className="space-y-8 px-4 py-6">
      {/* ===== 🔹 Header Section ===== */}
      <h2 className="text-3xl font-bold text-foreground mb-1">
        Guest Dashboard
      </h2>

      {/* ===== 🔹 Stats Cards Section ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat: IStat, index: number) => {
          let bgColor = '';
          if (stat.title === 'Upcoming Booking Room') bgColor = 'bg-green-500';
          else if (stat.title === 'Past Booking') bgColor = 'bg-red-500';
          else if (stat.title === 'Total Paid Bookings')
            bgColor = 'bg-blue-500';
          else if (stat.title === 'Total Paid') bgColor = 'bg-[#bf9310]';

          return (
            <Card key={index} className={`${bgColor} shadow-md`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-foreground/80">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div className="text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div>{iconMap[stat.icon]}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* ===== 🔹 Recent Bookings Section ===== */}
      <Card className="bg-main border border-slate-700 shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">
            Your Recent Bookings
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {bookings.length === 0 ? (
            <p className="text-foreground italic">
              You have no recent bookings.
            </p>
          ) : (
            <table className="min-w-full text-sm text-left">
              <thead className="bg-[#2a2d38] text-white">
                <tr>
                  <th className="p-3 font-medium">Room</th>
                  <th className="p-3 font-medium">Check-in</th>
                  <th className="p-3 font-medium">Check-out</th>
                  <th className="p-3 font-medium">Status</th>
                  <th className="p-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking: IBooking) => (
                  <tr
                    key={booking._id}
                    className="border hover:bg-slate-800/40 transition"
                  >
                    <td className="p-3">
                      {booking.rooms?.[0]?.roomId?.title || 'N/A'}
                    </td>
                    <td className="p-3">
                      {booking.rooms?.[0]?.checkInDate
                        ? new Date(
                            booking.rooms[0].checkInDate,
                          ).toLocaleDateString()
                        : '-'}
                    </td>
                    <td className="p-3">
                      {booking.rooms?.[0]?.checkOutDate
                        ? new Date(
                            booking.rooms[0].checkOutDate,
                          ).toLocaleDateString()
                        : '-'}
                    </td>
                    <td className="p-3">
                      <Badge
                        className={`capitalize ${
                          booking.bookingStatus === 'Booked'
                            ? 'bg-emerald-600'
                            : booking.bookingStatus === 'Cancelled'
                              ? 'bg-red-500'
                              : 'bg-yellow-500'
                        }`}
                      >
                        {booking.bookingStatus}
                      </Badge>
                    </td>
                    <td className="p-3 text-green-400 font-semibold">
                      ${booking.totalAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>

      {/* ===== 🔹 Past Bookings Section ===== */}
      <Card className="bg-main border border-slate-700 shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Your Past Bookings</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {pastBookings.length === 0 ? (
            <p className="text-foreground italic">No past bookings found.</p>
          ) : (
            <table className="min-w-full text-sm text-left">
              <thead className="bg-[#2a2d38] text-slate-300">
                <tr>
                  <th className="p-3 font-medium">Room</th>
                  <th className="p-3 font-medium">Check-out Date</th>
                  <th className="p-3 font-medium">Status</th>
                  <th className="p-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {pastBookings.map((booking: IBooking) => (
                  <tr
                    key={booking._id}
                    className="border-b border-slate-700 hover:bg-slate-800/40 transition"
                  >
                    <td className="p-3">
                      {booking.rooms?.[0]?.roomId?.title || 'N/A'}
                    </td>
                    <td className="p-3">
                      {booking.rooms?.[0]?.checkOutDate
                        ? new Date(
                            booking.rooms[0].checkOutDate,
                          ).toLocaleDateString()
                        : '-'}
                    </td>
                    <td className="p-3">
                      <Badge className="capitalize bg-red-600 text-foreground">
                        {booking.bookingStatus}
                      </Badge>
                    </td>
                    <td className="p-3 text-green-400 font-semibold">
                      ${booking.totalAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
