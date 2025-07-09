// ====================================================
// 🧾  User Bookings Page Component
// ====================================================

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
  // ===== 🔹 Redux state: Get current logged-in user info =====
  const user = useSelector(selectCurrentUser);

  // ===== 🔹 RTK Query: Fetch bookings for current user =====
  const { data: bookingData, isLoading } = useGetBookingsByUserIdQuery(
    user?._id ?? '',
  );

  // ===== 🔹 RTK Mutation: Cancel booking API call =====
  const [cancelBooking] = useCancelBookingMutation();

  // ========== 🔁 Handler: Cancel booking by booking ID ========== //
  const cancelBookingHandeller = async (bookingId: string) => {
    try {
      await cancelBooking(bookingId);
      toast.success('Booking cancelled successfully'); // ✅ Booking cancelled successfully
    } catch (error) {
      console.error(error);
      toast.error('Error cancelling booking'); // ❌ Error cancelling booking
    }
  };

  // ===== 🔹 Loading UI while fetching bookings =====
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
    <>
      {/* ===== 🔹 Page Header ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-foreground">Booked Rooms</h1>
      </div>

      {/* ===== 🔹 Bookings Table ===== */}
      <Card className="bg-main border border-slate-700 shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#2a2d38] text-white">
                <TableRow>
                  <TableHead>Room Title</TableHead>
                  <TableHead>Room Count</TableHead>
                  <TableHead>Check-in</TableHead>
                  <TableHead>Check-out</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookingData?.data.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center p-4 text-foreground"
                    >
                      No bookings found.
                    </TableCell>
                  </TableRow>
                )}
                {bookingData?.data.map((booking: IBooking) => (
                  <TableRow
                    key={booking._id}
                    className="border hover:bg-slate-800/40 transition text-foreground"
                  >
                    {/* ===== 🔹 Comma separated room titles ===== */}
                    <TableCell>
                      {booking.rooms
                        ?.map((r) =>
                          r.roomId && 'title' in r.roomId
                            ? r.roomId.title
                            : 'Untitled Room',
                        )
                        .join(', ')}
                    </TableCell>

                    {/* ===== 🔹 Number of rooms in booking ===== */}
                    <TableCell>{booking.rooms.length}</TableCell>

                    {/* ===== 🔹 Check-in date (first room) ===== */}
                    <TableCell>{booking.rooms[0]?.checkInDate}</TableCell>

                    {/* ===== 🔹 Check-out date (first room) ===== */}
                    <TableCell>{booking.rooms[0]?.checkOutDate}</TableCell>

                    {/* ===== 🔹 Total amount ===== */}
                    <TableCell className="font-semibold">
                      ${booking.totalAmount}
                    </TableCell>

                    {/* ===== 🔹 Booking status badge ===== */}
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

                    {/* ===== 🔁 Cancel Booking Button ===== */}
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
    </>
  );
}
