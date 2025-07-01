"use client"

import AdminDashboard from "@/components/dashboardUi/Admin/AdminDashboard"
import GuestDashboard from "@/components/dashboardUi/Guest/GuestDashboard"
import ReceptionistDashboard from "@/components/dashboardUi/Receptionist/ReceptionistDashboard"
import { selectCurrentUser } from "@/redux/features/auth/authSlice"
import { useGetDashboardDataQuery } from "@/redux/features/dashboard/dashboardApi"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

// ... your other imports and state

export default function DashboardPage() {
  const user = useSelector(selectCurrentUser)
  const { data: dashboardData, error: dashboardError , isLoading} = useGetDashboardDataQuery(undefined)
  console.log("Dashboard Data:", dashboardData) 
 
  const [recentBookings, setRecentBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

 

  if (isLoading) return <div className="text-white text-center mt-10">Loading dashboard...</div>
  if (dashboardError) return <div className="text-red-500 text-center mt-10">Error: {error}</div>

  if (!user) return <div className="text-white text-center mt-10">User not found</div>

  // Role-based dashboard rendering
  if (user.role === "admin") {
    return <AdminDashboard stats={dashboardData?.stats} bookings={dashboardData?.recentBookings} />
  }

  if (user.role === "receptionist") {
    return <ReceptionistDashboard stats={dashboardData?.stats} bookings={dashboardData?.recentBookings} />
  }

  if (user.role === "guest") {
    return <GuestDashboard stats={dashboardData?.stats} bookings={dashboardData?.recentBookings} />
  }

  return <div className="text-white text-center mt-10">Invalid role</div>
}
