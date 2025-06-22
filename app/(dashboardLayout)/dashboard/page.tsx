"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Bed, Calendar, DollarSign, UserCheck } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Bookings",
      value: "1,234",
      change: "+12%",
      icon: Calendar,
      color: "text-amber-400",
    },
    {
      title: "Available Rooms",
      value: "45",
      change: "-5%",
      icon: Bed,
      color: "text-emerald-400",
    },
    {
      title: "Revenue",
      value: "$125,430",
      change: "+18%",
      icon: DollarSign,
      color: "text-blue-400",
    },
    {
      title: "Guests",
      value: "892",
      change: "+8%",
      icon: Users,
      color: "text-purple-400",
    },
  ]

  const recentBookings = [
    { id: "BK001", guest: "John Smith", room: "Deluxe Suite", status: "Confirmed", amount: "$450" },
    { id: "BK002", guest: "Sarah Johnson", room: "Ocean View", status: "Pending", amount: "$320" },
    { id: "BK003", guest: "Mike Davis", room: "Presidential", status: "Confirmed", amount: "$850" },
    { id: "BK004", guest: "Emma Wilson", room: "Standard Room", status: "Check-in", amount: "$180" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-slate-400">Welcome to your hotel management system</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-slate-400">
                <span className={stat.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}>{stat.change}</span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Bookings */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-slate-900" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{booking.guest}</p>
                    <p className="text-sm text-slate-400">{booking.room}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge
                    variant={
                      booking.status === "Confirmed"
                        ? "default"
                        : booking.status === "Pending"
                          ? "secondary"
                          : "outline"
                    }
                    className={
                      booking.status === "Confirmed"
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : booking.status === "Pending"
                          ? "bg-amber-600 hover:bg-amber-700"
                          : "bg-blue-600 hover:bg-blue-700"
                    }
                  >
                    {booking.status}
                  </Badge>
                  <span className="font-semibold text-amber-400">{booking.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
