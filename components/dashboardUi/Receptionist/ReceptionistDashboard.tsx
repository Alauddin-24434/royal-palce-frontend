"use client"

import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Users,
  Bed,
} from "lucide-react"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts"

// Icon mapping
const iconMap: any = {
  Calendar: <Calendar className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  Bed: <Bed className="h-6 w-6" />,
}

// Reusable pie colors
const COLORS = ["#8884d8", "#82ca9d", "#ffc658"]

type ReceptionistDashboardProps = {
  stats: any[]
  bookings: any[]
}

export default function ReceptionistDashboard({
  stats,
  bookings,
}: ReceptionistDashboardProps) {
  const statusCount: Record<string, number> = {}

  bookings.forEach((booking) => {
    const status = booking.bookingStatus || "unknown"
    statusCount[status] = (statusCount[status] || 0) + 1
  })

  const pieChartData = Object.entries(statusCount).map(([name, value]) => ({
    name,
    value,
  }))

  return (
    <div className="space-y-8 px-4 py-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-1">
          Receptionist Dashboard
        </h2>
        <p className="text-slate-400">
          Focus on guest check-ins and bookings
        </p>
      </div>

      {/* === Stat Cards === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <p className={`text-xs ${stat.color}`}>
                  {stat.change} from yesterday
                </p>
              </div>
              <div className="text-white">{iconMap[stat.icon]}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* === Pie Chart === */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Booking Status Overview</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <PieChart width={300} height={250}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </CardContent>
      </Card>

      {/* === Recent Bookings Table === */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-white">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="py-2">Guest</th>
                <th>Room</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking: any) => (
                <tr
                  key={booking._id}
                  className="border-b border-slate-700"
                >
                  <td className="py-2">{booking.userId?.name}</td>
                  <td>{booking.rooms?.[0]?.roomId}</td>
                  <td>${booking.totalAmount}</td>
                  <td>
                    <Badge className="capitalize">
                      {booking.bookingStatus}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
