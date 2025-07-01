"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard({ stats, bookings }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h2>
        <p className="text-slate-400">System-wide overview and statistics</p>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${stats.length} gap-6`}>
        {stats.map((stat: any, index: number) => {
          const Icon = require("lucide-react")[stat.icon] || UserCheck
          return (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-300">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                {stat.change && (
                  <p className="text-xs text-slate-400">
                    <span className={stat.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}>{stat.change}</span> from last month
                  </p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-6">
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bookings.map((booking: any) => (
                <div key={booking._id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
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
                        booking.status === "Confirmed" ? "default" : booking.status === "Pending" ? "secondary" : "outline"
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
    </div>
  )
}
