"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Bed,
  DollarSign,
  Users,
  UserCheck,
  type LucideIcon,
} from "lucide-react"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "@/redux/features/auth/authSlice"

// Types
interface Stat {
  title: string
  value: string
  change?: string
  icon: string // From API
  color: string
}

interface Booking {
  _id: string
  guest: string
  room: string
  status: string
  amount: string
}

// Icon string → actual Lucide icon map
const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Bed,
  DollarSign,
  Users,
}

export default function DashboardPage() {
  const user = useSelector(selectCurrentUser)

  const [stats, setStats] = useState<Stat[]>([])
  const [recentBookings, setRecentBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Convert backend booking data to Booking[] type
  const transformBookings = (raw: any[]): Booking[] => {
    return raw.map((item) => ({
      _id: item._id,
      guest: item.userId?.name || "Unknown",
      room:
        item.rooms?.[0]?.roomId?.name ||
        item.rooms?.[0]?.roomId || // fallback if not populated
        "N/A",
      status:
        item.bookingStatus === "booked"
          ? "Confirmed"
          : item.bookingStatus === "pending"
          ? "Pending"
          : "Unknown",
      amount: `$${item.totalAmount || 0}`,
    }))
  }

  useEffect(() => {
    if (!user?.role) return

    setLoading(true)
    setError(null)

    fetch(
      `https://royal-place-server.vercel.app/api/dashboard?role=${user?.role}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch dashboard data")
        return res.json()
      })
      .then((data) => {
        setStats(data.stats || [])
        setRecentBookings(transformBookings(data.recentBookings || []))
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [user?.role])

  if (loading) {
    return (
      <div className="text-white text-center mt-10">Loading dashboard...</div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-10">Error: {error}</div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Dashboard Overview
        </h1>
        <p className="text-slate-400">
          Welcome to your hotel management system
        </p>
      </div>

      {/* Stats Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${stats.length} gap-6`}
      >
        {stats.map((stat, index) => {
          const Icon = iconMap[stat.icon]

          return (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-300">
                  {stat.title}
                </CardTitle>
                {Icon && <Icon className={`h-4 w-4 ${stat.color}`} />}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                {stat.change && (
                  <p className="text-xs text-slate-400">
                    <span
                      className={
                        stat.change.startsWith("+")
                          ? "text-emerald-400"
                          : "text-red-400"
                      }
                    >
                      {stat.change}
                    </span>{" "}
                    from last month
                  </p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Bookings */}
      {recentBookings.length > 0 && (
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking._id}
                  className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg"
                >
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
                    <span className="font-semibold text-amber-400">
                      {booking.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
