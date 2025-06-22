"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Calendar, Eye, Edit, Trash2 } from "lucide-react"

export default function BookingsPage() {
  const bookings = [
    {
      id: "BK001",
      guest: "John Smith",
      email: "john@email.com",
      room: "Deluxe Suite",
      checkIn: "2024-01-15",
      checkOut: "2024-01-18",
      nights: 3,
      amount: 1350,
      status: "Confirmed",
      phone: "+1 234 567 8900",
    },
    {
      id: "BK002",
      guest: "Sarah Johnson",
      email: "sarah@email.com",
      room: "Ocean View Room",
      checkIn: "2024-01-16",
      checkOut: "2024-01-19",
      nights: 3,
      amount: 960,
      status: "Pending",
      phone: "+1 234 567 8901",
    },
    {
      id: "BK003",
      guest: "Mike Davis",
      email: "mike@email.com",
      room: "Presidential Suite",
      checkIn: "2024-01-17",
      checkOut: "2024-01-20",
      nights: 3,
      amount: 2550,
      status: "Confirmed",
      phone: "+1 234 567 8902",
    },
    {
      id: "BK004",
      guest: "Emma Wilson",
      email: "emma@email.com",
      room: "Standard Room",
      checkIn: "2024-01-18",
      checkOut: "2024-01-21",
      nights: 3,
      amount: 540,
      status: "Check-in",
      phone: "+1 234 567 8903",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Booking Management</h1>
          <p className="text-slate-400">Manage hotel bookings and reservations</p>
        </div>
        <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-medium">
          <Plus className="h-4 w-4 mr-2" />
          New Booking
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search bookings..." className="pl-10 bg-slate-700/50 border-slate-600 text-white" />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48 bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="checkin">Check-in</SelectItem>
                <SelectItem value="checkout">Check-out</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Bookings Table */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700">
                  <TableHead className="text-slate-300">Booking ID</TableHead>
                  <TableHead className="text-slate-300">Guest</TableHead>
                  <TableHead className="text-slate-300">Room</TableHead>
                  <TableHead className="text-slate-300">Check-in</TableHead>
                  <TableHead className="text-slate-300">Check-out</TableHead>
                  <TableHead className="text-slate-300">Nights</TableHead>
                  <TableHead className="text-slate-300">Amount</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                  <TableHead className="text-slate-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id} className="border-slate-700">
                    <TableCell className="font-medium text-white">{booking.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-white">{booking.guest}</p>
                        <p className="text-sm text-slate-400">{booking.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-300">{booking.room}</TableCell>
                    <TableCell className="text-slate-300">{booking.checkIn}</TableCell>
                    <TableCell className="text-slate-300">{booking.checkOut}</TableCell>
                    <TableCell className="text-slate-300">{booking.nights}</TableCell>
                    <TableCell className="font-semibold text-amber-400">${booking.amount}</TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-slate-400 hover:text-white hover:bg-slate-700"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-slate-400 hover:text-white hover:bg-slate-700"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-400 hover:text-red-300 hover:bg-slate-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
