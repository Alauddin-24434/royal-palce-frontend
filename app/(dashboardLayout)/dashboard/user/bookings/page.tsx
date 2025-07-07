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
import {
  useCancelBookingMutation,
  useGetBookingsByUserIdQuery,
} from '@/redux/features/booking/bookingApi';
import { IBooking } from '@/types/booking.interface';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

export default function UserBookings() {
  // ===== Get current user from Redux store =====
  const user = useSelector(selectCurrentUser);

  // ===== Fetch bookings by userId via RTK Query =====
  const { data: bookingData, isLoading } = useGetBookingsByUserIdQuery(
    user?._id ?? '',
  );

  //===== Camcel booking req by RoomId via RTK Query============

  const [cnacelBooking] = useCancelBookingMutation();

  //=============booking cancelel =================

  const cancelBookingHandeller = async (roomId: string) => {
    try {
      await cnacelBooking(roomId);
    } catch (error) {
      console.log(error);
      toast.error('Error cancel booking');
    }
  };

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
              <TableHeader className="bg-[#2a2d38] text-white">
                <TableRow>
                  <TableHead className="text-white">Room Title</TableHead>
                  <TableHead className="text-white">Room Count</TableHead>
                  <TableHead className="text-white">Check-in</TableHead>
                  <TableHead className="text-white">Check-out</TableHead>
                  <TableHead className="text-white">Amount</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookingData.data.map((booking: IBooking) => (
                  <TableRow
                    key={booking._id}
                    className="border hover:bg-slate-800/40 transition text-foreground"
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
                    {/* ==== cancel button============= */}
                    <TableCell>
                      <Button
                        variant="outline"
                        onClick={() => cancelBookingHandeller(booking._id)}
                        disabled={
                          booking.bookingStatus === 'cancelled' ||
                          booking.bookingStatus === 'pending' ||
                          booking.bookingStatus === 'failed'
                        }
                      >
                        Cancel
                      </Button>
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
