"use client"

import React, { useState } from "react"
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
import { Search, Eye, Edit, Trash2, X } from "lucide-react"
import { useGetAllBookingsQuery } from "@/redux/features/booking/bookingApi"

interface Room {
  _id: string
  roomId: {
    title: string
  }
  checkInDate: string
  checkOutDate: string
}

interface Booking {
  _id: string
  name: string
  guest: string
  email: string
  rooms: Room[]
  totalAmount: number
  bookingStatus: string
  status: string
}

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedRooms, setSelectedRooms] = useState<Room[]>([])

  const { data: bookingData, isLoading: bookingLoading } = useGetAllBookingsQuery({
    searchTerm,
    status: statusFilter === "all" ? "" : statusFilter,
  })

  // Modal open handler
  const openRoomsModal = (rooms: Room[]) => {
    setSelectedRooms(rooms)
    setModalOpen(true)
  }

  // Modal close handler
  const closeModal = () => {
    setModalOpen(false)
    setSelectedRooms([])
  }

  return (
    <div className="space-y-6 p-4 min-h-screen bg-gray-900">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Booking Management</h1>
          <p className="text-slate-400">Manage hotel bookings and reservations</p>
        </div>
      </div>

      {/* Filters */}
      <Card className="bg-slate-800/50 border border-slate-700 rounded-md">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search bookings..."
                className="pl-10 bg-slate-700/60 border border-slate-600 text-white rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select
              onValueChange={(value) => setStatusFilter(value)}
              defaultValue="all"
            >
              <SelectTrigger className="w-full sm:w-48 bg-slate-700/60 border border-slate-600 text-white rounded-md">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border border-slate-700">
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
      <Card className="bg-slate-800/50 border border-slate-700 rounded-md">
        <CardHeader>
          <CardTitle className="text-white">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {bookingLoading ? (
            <p className="text-white p-6">Loading...</p>
          ) : bookingData?.data?.length === 0 ? (
            <p className="text-white p-6">No bookings found.</p>
          ) : (
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="border-b border-slate-700">
                    <TableHead className="text-slate-300">Name</TableHead>
                    <TableHead className="text-slate-300">Guest</TableHead>
                    <TableHead className="text-slate-300">Rooms</TableHead>
                    <TableHead className="text-slate-300">Amount</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-slate-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookingData?.data?.map((booking: Booking) => (
                    <TableRow key={booking._id} className="border-b border-slate-700 hover:bg-slate-700 transition">
                      <TableCell className="font-medium text-white">{booking.name}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-white">{booking.guest}</p>
                          <p className="text-sm text-slate-400 truncate max-w-xs">{booking.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-white border-slate-600 hover:bg-slate-700"
                          onClick={() => openRoomsModal(booking.rooms)}
                        >
                          {booking.rooms.length} Room{booking.rooms.length > 1 ? "s" : ""}
                        </Button>
                      </TableCell>
                      <TableCell className="font-semibold text-amber-400">${booking.totalAmount.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            booking.bookingStatus.toLowerCase() === "booked"
                              ? "default"
                              : booking.bookingStatus.toLowerCase() === "pending"
                              ? "secondary"
                              : "outline"
                          }
                          className={
                            booking.bookingStatus.toLowerCase() === "booked"
                              ? "bg-emerald-600 hover:bg-emerald-700"
                              : booking.bookingStatus.toLowerCase() === "pending"
                              ? "bg-amber-600 hover:bg-amber-700"
                              : "bg-blue-600 hover:bg-blue-700"
                          }
                        >
                          {booking.bookingStatus.charAt(0).toUpperCase() + booking.bookingStatus.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-slate-400 hover:text-white hover:bg-slate-700"
                            title="View"
                          >
                            <Eye className="h-5 w-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-slate-400 hover:text-white hover:bg-slate-700"
                            title="Edit"
                          >
                            <Edit className="h-5 w-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-400 hover:text-red-300 hover:bg-slate-700"
                            title="Delete"
                          >
                            <Trash2 className="h-5 w-5" />
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

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50">
          <div className="bg-slate-800 rounded-md max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-lg relative">
            <div className="flex justify-between items-center p-4 border-b border-slate-700">
              <h3 className="text-xl font-semibold text-white">Room Details</h3>
              <button
                className="text-slate-400 hover:text-white"
                onClick={closeModal}
                aria-label="Close Modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {selectedRooms.length === 0 ? (
                <p className="text-white">No rooms available</p>
              ) : (
                selectedRooms.map((room) => (
                  <div key={room._id} className="border border-slate-700 rounded-md p-3">
                    <h4 className="font-semibold text-lg text-white">{room.roomId.title}</h4>
                    <p className="text-slate-400 text-sm">
                      Check-in: <span className="font-medium">{room.checkInDate}</span>
                    </p>
                    <p className="text-slate-400 text-sm">
                      Check-out: <span className="font-medium">{room.checkOutDate}</span>
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
