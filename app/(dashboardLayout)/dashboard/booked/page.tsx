"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetBookingsByUserIdQuery } from "@/redux/features/booking/bookingApi";

// --- Types & Interfaces ---

interface Room {
  _id: string;
  roomNumber?: string;
  floor?: number;
  title?: string;
  images?: string[];
  features?: string[];
  description?: string;
  type?: string;
  price?: number;
  adults?: number;
  children?: number;
  bed?: {
    type: string;
    count: number;
  };
  roomStatus?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  maxOccupancy?: number;
}

interface BookingRoom {
  _id: string;
  roomId: Room | {}; // populated room or empty object if not populated
  checkInDate: string;
  checkOutDate: string;
}

type BookingStatus = "pending" | "booked" | "cancelled" | string;

interface Booking {
  _id: string;
  userId: string;
  rooms: BookingRoom[];
  totalAmount: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  transactionId: string;
  bookingStatus: BookingStatus;
  createdAt: string;
  updatedAt: string;
  __v: number;
}



// --- Component ---

export default function BookedRooms() {
  const user = useSelector(selectCurrentUser);
  const { data: bookingData, isLoading } = useGetBookingsByUserIdQuery(user?._id ?? "");



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

  if (!bookingData.success) return <div>Error loading bookings</div>;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Booked Rooms</h1>
        </div>
      </div>

      {/* Bookings Table */}
      <Card className="bg-main border border-slate-700 shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#2a2d38] text-foreground">
                  <TableHead >Room Title</TableHead>
                  <TableHead >Room Count</TableHead>
                  <TableHead >Check-in</TableHead>
                  <TableHead >Check-out</TableHead>
                  <TableHead >Amount</TableHead>
                  <TableHead >Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookingData.data.map((booking: Booking) => (
                  <TableRow key={booking._id} className="border-slate-700  text-foreground">
                    {/* রুম গুলোর title comma separated দেখাবে */}
                    <TableCell >
                      {booking.rooms
                        ?.map((r) => (r.roomId && "title" in r.roomId ? r.roomId.title : "Untitled Room"))
                        .join(", ")}
                    </TableCell>
                    <TableCell >{booking.rooms.length}</TableCell>

                    <TableCell >
                      {booking.rooms[0]?.checkInDate}
                    </TableCell>

                    <TableCell >
                      {booking.rooms[0]?.checkOutDate}
                    </TableCell>

                    <TableCell className="font-semibold ">
                      ${booking.totalAmount}
                    </TableCell>

                    <TableCell>
                      <Badge
                        variant={
                          booking.bookingStatus === "booked"
                            ? "default"
                            : booking.bookingStatus === "pending"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          booking.bookingStatus === "booked"
                            ? "bg-emerald-600 hover:bg-emerald-700"
                            : booking.bookingStatus === "pending"
                              ? "bg-amber-600 hover:bg-amber-700"
                              : "bg-blue-600 hover:bg-blue-700"
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
