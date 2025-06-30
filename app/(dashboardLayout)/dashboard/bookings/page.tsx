"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Search, Calendar, Eye, Edit, Trash2 } from "lucide-react"
import React, { useEffect, useState } from "react"

interface Booking {
  _id: string
  guest: string
  email: string
  room: string
  checkIn: string
  checkOut: string
  nights: number
  amount: number
  status: string
  phone: string
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/filter-bookings") // Replace with your API
        const json = await res.json()

        const adapted = json?.data?.map((item: any) => ({
          _id: item._id,
          guest: item.userId?.name || "Unknown",
          email: item.userId?.email || "N/A",
          room: item.rooms[0]?.roomId?.name || "Room",
          checkIn: item.rooms[0]?.checkInDate?.slice(0, 10),
          checkOut: item.rooms[0]?.checkOutDate?.slice(0, 10),
          nights:
            Math.ceil(
              (new Date(item.rooms[0]?.checkOutDate).getTime() -
                new Date(item.rooms[0]?.checkInDate).getTime()) /
                (1000 * 60 * 60 * 24)
            ) || 1,
          amount: item.totalAmount,
          status: item.bookingStatus,
          phone: item.phone,
        }))

        setBookings(adapted)
        setFilteredBookings(adapted)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching bookings:", err)
        setLoading(false)
      }
    }

    fetchBookings()
  }, [])

  useEffect(() => {
    const filtered = bookings.filter((booking) => {
      const matchStatus =
        statusFilter === "all"
          ? true
          : booking.status.toLowerCase() === statusFilter.toLowerCase()

      const matchSearch = searchTerm
        ? booking.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking._id.toLowerCase().includes(searchTerm.toLowerCase())
        : true

      return matchStatus && matchSearch
    })

    setFilteredBookings(filtered)
  }, [searchTerm, statusFilter, bookings])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Booking Management</h1>
          <p className="text-slate-400">Manage hotel bookings and reservations</p>
        </div>
      </div>

      {/* Filters */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search bookings..."
                className="pl-10 bg-slate-700/50 border-slate-600 text-white"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select onValueChange={(value) => setStatusFilter(value)} defaultValue="all">
              <SelectTrigger className="w-full sm:w-48 bg-slate-700/50 border-slate-600 text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="booked">Booked</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
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
                  {filteredBookings.map((booking) => (
                    <TableRow key={booking._id} className="border-slate-700">
                      <TableCell className="font-medium text-white">{booking._id}</TableCell>
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
                            booking.status.toLowerCase() === "booked"
                              ? "default"
                              : booking.status.toLowerCase() === "pending"
                              ? "secondary"
                              : "outline"
                          }
                          className={
                            booking.status.toLowerCase() === "booked"
                              ? "bg-emerald-600 hover:bg-emerald-700"
                              : booking.status.toLowerCase() === "pending"
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
          )}
        </CardContent>
      </Card>
    </div>
  )
}
