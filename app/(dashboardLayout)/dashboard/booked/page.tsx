'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useGetBookingsByUserIdQuery } from '@/redux/features/booking/bookingApi';
import { IBooking } from '@/types/booking.interface';

export default function BookedRooms() {
  // ===== Get current user from Redux store =====
  const user = useSelector(selectCurrentUser);

  // ===== Fetch bookings by userId via RTK Query =====
  const { data: bookingData, isLoading } = useGetBookingsByUserIdQuery(
    user?._id ?? '',
  );

  // ===== Loading state UI =====
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

  // ===== Handle fetch error or unsuccessful response =====
  if (!bookingData.success) return <div>Error loading bookings</div>;

  return (
    <div className="space-y-6">
      {/* ===== Page Title ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Booked Rooms</h1>
        </div>
      </div>

      {/* ===== Bookings Table ===== */}
      <Card className="bg-main border border-slate-700 shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#2a2d38] text-foreground">
                  <TableHead>Room Title</TableHead>
                  <TableHead>Room Count</TableHead>
                  <TableHead>Check-in</TableHead>
                  <TableHead>Check-out</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookingData.data.map((booking: IBooking) => (
                  <TableRow
                    key={booking._id}
                    className="border-slate-700  text-foreground"
                  >
                    {/* ===== Comma separated room titles ===== */}
                    <TableCell>
                      {booking.rooms
                        ?.map((r) =>
                          r.roomId && 'title' in r.roomId
                            ? r.roomId.title
                            : 'Untitled Room',
                        )
                        .join(', ')}
                    </TableCell>

                    {/* ===== Number of rooms in booking ===== */}
                    <TableCell>{booking.rooms.length}</TableCell>

                    {/* ===== Check-in date from first room ===== */}
                    <TableCell>{booking.rooms[0]?.checkInDate}</TableCell>

                    {/* ===== Check-out date from first room ===== */}
                    <TableCell>{booking.rooms[0]?.checkOutDate}</TableCell>

                    {/* ===== Total amount ===== */}
                    <TableCell className="font-semibold ">
                      ${booking.totalAmount}
                    </TableCell>

                    {/* ===== Booking status with colored badge ===== */}
                    <TableCell>
                      <Badge
                        variant={
                          booking.bookingStatus === 'booked'
                            ? 'default'
                            : booking.bookingStatus === 'pending'
                              ? 'secondary'
                              : 'outline'
                        }
                        className={
                          booking.bookingStatus === 'booked'
                            ? 'bg-emerald-600 hover:bg-emerald-700'
                            : booking.bookingStatus === 'pending'
                              ? 'bg-amber-600 hover:bg-amber-700'
                              : 'bg-blue-600 hover:bg-blue-700'
                        }
                      >
                        {booking.bookingStatus}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
