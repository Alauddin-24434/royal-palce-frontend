"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


export default function BookedRooms() {
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
                    <h1 className="text-3xl font-bold text-white">Booked Rooms</h1>

                </div>

            </div>



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


                                    <TableHead className="text-slate-300">Room Title</TableHead>
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
                                                    
                                                    size="sm"
                                                    className="bg-transparent hover:bg-red-400 text-white border cursor-pointer"
                                                >
                                                    Cancel
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
