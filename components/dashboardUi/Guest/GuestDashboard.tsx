"use client"

import React, { JSX } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Calendar } from "lucide-react"

type GuestDashboardProps = {
  stats: any[]
  bookings: any[]
}

const iconMap: Record<string, JSX.Element> = {
  Bed: <Bed className="h-8 w-8 text-white" />,
  Calendar: <Calendar className="h-8 w-8 text-white" />,
}

export default function GuestDashboard({ stats, bookings }: GuestDashboardProps) {
  return (
    <div className="space-y-8 px-4 py-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-1">Guest Dashboard</h2>
        <p className="text-slate-400">Welcome! View your upcoming stays and recent bookings.</p>
      </div>

      {/* === Stat Cards === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-[#bf9310]/70 to-[#292c35] border-0 shadow-lg"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white/80">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div>{iconMap[stat.icon]}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* === Booking Table === */}
      <Card className="bg-[#1e1f25] border border-slate-700 shadow-md">
        <CardHeader>
          <CardTitle className="text-white">Your Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {bookings.length === 0 ? (
            <p className="text-slate-400 italic">You have no recent bookings.</p>
          ) : (
            <table className="min-w-full text-sm text-left">
              <thead className="bg-[#2a2d38] text-slate-300">
                <tr>
                  <th className="p-3 font-medium">Room</th>
                  <th className="p-3 font-medium">Check-in</th>
                  <th className="p-3 font-medium">Check-out</th>
                  <th className="p-3 font-medium">Status</th>
                  <th className="p-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking: any) => (
                  <tr key={booking._id} className="border-b border-slate-700 hover:bg-slate-800/40 transition">
                    <td className="p-3">{booking.rooms?.[0]?.roomId?.title || "N/A"}</td>
                    <td className="p-3">{booking.rooms?.[0]?.checkInDate || "-"}</td>
                    <td className="p-3">{booking.rooms?.[0]?.checkOutDate || "-"}</td>
                    <td className="p-3">
                      <Badge
                        className={`capitalize ${
                          booking.bookingStatus === "Booked"
                            ? "bg-emerald-600"
                            : booking.bookingStatus === "Cancelled"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                        }`}
                      >
                        {booking.bookingStatus}
                      </Badge>
                    </td>
                    <td className="p-3 text-green-400 font-semibold">${booking.totalAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
