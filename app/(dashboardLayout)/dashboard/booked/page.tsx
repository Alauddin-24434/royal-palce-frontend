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
  const { data: bookingData } = useGetBookingsByUserIdQuery(user?._id ?? "");

  if (!bookingData) return <div>Loading...</div>;
  if (!bookingData.success) return <div>Error loading bookings</div>;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Booked Rooms</h1>
        </div>
      </div>

      {/* Bookings Table */}
      <Card className="bg-[#1e1f25] border border-slate-700 shadow-md">
        <CardHeader>
          <CardTitle className="text-white">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#2a2d38] text-slate-300">
                  <TableHead className="text-slate-300">Room Title</TableHead>
                  <TableHead className="text-slate-300">Room Count</TableHead>
                  <TableHead className="text-slate-300">Check-in</TableHead>
                  <TableHead className="text-slate-300">Check-out</TableHead>
                  <TableHead className="text-slate-300">Amount</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookingData.data.map((booking: Booking) => (
                  <TableRow key={booking._id} className="border-slate-700">
                    {/* রুম গুলোর title comma separated দেখাবে */}
                    <TableCell className="text-slate-300">
                      {booking.rooms
                        ?.map((r) => (r.roomId && "title" in r.roomId ? r.roomId.title : "Untitled Room"))
                        .join(", ")}
                    </TableCell>
                    <TableCell className="text-slate-300">{booking.rooms.length}</TableCell>

                    <TableCell className="text-slate-300">
                      {booking.rooms[0]?.checkInDate}
                    </TableCell>

                    <TableCell className="text-slate-300">
                      {booking.rooms[0]?.checkOutDate}
                    </TableCell>

                    <TableCell className="font-semibold text-amber-400">
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
