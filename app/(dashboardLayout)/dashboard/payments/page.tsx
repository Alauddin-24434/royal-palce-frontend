"use client"

import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useGetPaymentsQuery } from "@/redux/features/payment/paymentApi"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export interface Payment {
  _id: string
  amount: number
  paymentMethod: string
  date: string
 status: "completed" | "pending" | "failed" | "cancled" | "refunded"


  createdAt: string
}

export default function Payments() {
  const [page, setPage] = useState(1)
  const [status, setStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const { data: paymentData, isLoading, error } = useGetPaymentsQuery({
    page,
    limit: 10,
    status,
    searchTerm,
  })

  const payments = paymentData?.data || []

const chartData = [
  {
    status: "Paid",
    total: payments.filter((p: Payment) => p.status === "completed").length,
  },
  {
    status: "Pending",
    total: payments.filter((p: Payment) => p.status === "pending").length,
  },
  {
    status: "Failed",
    total: payments.filter((p: Payment) => p.status === "failed").length,
  },
  {
    status: "Cancelled",
    total: payments.filter((p: Payment) => p.status === "cancled").length,
  },
  {
    status: "Refunded",
    total: payments.filter((p: Payment) => p.status === "refunded").length,
  },
]

  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Payments</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search by guest/email"
            className="bg-slate-700 text-white border-slate-600"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select onValueChange={value => setStatus(value)} defaultValue="all">
            <SelectTrigger className="w-[150px] bg-slate-700 text-white border-slate-600">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700 text-white">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="completed">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

    <Card className="bg-slate-800/50 border-slate-700">
  <CardHeader>
    <CardTitle className="text-white">Payment Status Chart</CardTitle>
  </CardHeader>
  <CardContent>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={chartData}>
        <XAxis dataKey="status" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Bar dataKey="total">
          {chartData.map((entry, index) => {
            let color = "#facc15"; // default yellow

            switch (entry.status.toLowerCase()) {
              case "paid":
                color = "#10b981"; // green
                break;
              case "pending":
                color = "#f59e0b"; // amber
                break;
              case "failed":
                color = "#ef4444"; // red
                break;
              case "cancelled":
                color = "#6b7280"; // gray
                break;
              case "refunded":
                color = "#3b82f6"; // blue
                break;
            }

            return <Cell key={`cell-${index}`} fill={color} />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </CardContent>
</Card>


      {/* Table */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-white p-4">Loading payments...</p>
          ) : error ? (
            <p className="text-red-500 p-4">
              Error: {typeof error === "string"
                ? error
                : "status" in (error as any)
                  ? `Status: ${(error as any).status}`
                  : (error as any)?.message || "An error occurred"}
            </p>
          ) : payments.length === 0 ? (
            <p className="text-white p-4">No payments found.</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-slate-300">Transaction ID</TableHead>


                    <TableHead className="text-slate-300">Amount</TableHead>
                    <TableHead className="text-slate-300">Method</TableHead>
                    <TableHead className="text-slate-300">Date</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment: Payment) => (
                    <TableRow key={payment._id} className="border-slate-700">
                      <TableCell className="text-slate-300">{payment._id}</TableCell>

                      <TableCell className="font-semibold text-amber-400">${payment.amount}</TableCell>
                      <TableCell className="text-slate-300">{payment.paymentMethod}</TableCell>
                      <TableCell className="text-slate-300">{payment.createdAt}</TableCell>
                      <TableCell>
                      <Badge
  className={
    payment.status === "completed"
      ? "bg-emerald-600 hover:bg-emerald-700"
      : payment.status === "pending"
        ? "bg-amber-600 hover:bg-amber-700"
        : payment.status === "failed"
          ? "bg-red-600 hover:bg-red-700"
          : payment.status === "cancled"
            ? "bg-gray-500 hover:bg-gray-600"
            : "bg-blue-600 hover:bg-blue-700"
  }
>
  {payment?.status}
</Badge>

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
