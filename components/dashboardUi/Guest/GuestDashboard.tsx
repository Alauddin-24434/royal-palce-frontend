"use client"

import React from "react"
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

const iconMap: any = {
  Bed: <Bed className="h-6 w-6" />,
  Calendar: <Calendar className="h-6 w-6" />,
}

export default function GuestDashboard({
  stats,
  bookings,
}: GuestDashboardProps) {
  return (
    <div className="space-y-8 px-4 py-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-1">Guest Dashboard</h2>
        <p className="text-slate-400">Welcome! View your upcoming stays and profile info.</p>
      </div>

      {/* === Stat Card === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-slate-800/50 border-slate-700 backdrop-blur-sm"
          >
            <CardHeader>
              <CardTitle className="text-sm font-medium text-slate-300">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-2xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-white">{iconMap[stat.icon]}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* === Booking List or Empty State === */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Your Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {bookings.length === 0 ? (
            <p className="text-slate-400 italic">You have no recent bookings.</p>
          ) : (
            <table className="min-w-full text-sm text-left text-white">
              <thead>
                <tr className="border-b border-slate-600">
                  <th>Room</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking: any) => (
                  <tr key={booking._id} className="border-b border-slate-700">
                    <td>{booking.rooms?.[0]?.roomId}</td>
                    <td>{booking.rooms?.[0]?.checkInDate}</td>
                    <td>{booking.rooms?.[0]?.checkOutDate}</td>
                    <td>
                      <Badge className="capitalize">{booking.bookingStatus}</Badge>
                    </td>
                    <td>${booking.totalAmount}</td>
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
