"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

export default function Payments() {
  const payments = [
    {
      id: "TXN001",
      guest: "John Smith",
      email: "john@email.com",
      amount: 1350,
      method: "Credit Card",
      date: "2024-01-15",
      status: "Paid",
    },
    {
      id: "TXN002",
      guest: "Sarah Johnson",
      email: "sarah@email.com",
      amount: 960,
      method: "PayPal",
      date: "2024-01-16",
      status: "Pending",
    },
    {
      id: "TXN003",
      guest: "Mike Davis",
      email: "mike@email.com",
      amount: 2550,
      method: "Bank Transfer",
      date: "2024-01-17",
      status: "Failed",
    },
    {
      id: "TXN004",
      guest: "Emma Wilson",
      email: "emma@email.com",
      amount: 540,
      method: "Credit Card",
      date: "2024-01-18",
      status: "Paid",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Payments</h1>
      </div>

      {/* Payments Table */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700">
                  <TableHead className="text-slate-300">Transaction ID</TableHead>
                  <TableHead className="text-slate-300">Guest</TableHead>
                  <TableHead className="text-slate-300">Email</TableHead>
                  <TableHead className="text-slate-300">Amount</TableHead>
                  <TableHead className="text-slate-300">Method</TableHead>
                  <TableHead className="text-slate-300">Date</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                  <TableHead className="text-slate-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id} className="border-slate-700">
                    <TableCell className="text-slate-300">{payment.id}</TableCell>
                    <TableCell className="text-slate-300">{payment.guest}</TableCell>
                    <TableCell className="text-slate-300">{payment.email}</TableCell>
                    <TableCell className="font-semibold text-amber-400">${payment.amount}</TableCell>
                    <TableCell className="text-slate-300">{payment.method}</TableCell>
                    <TableCell className="text-slate-300">{payment.date}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          payment.status === "Paid"
                            ? "bg-emerald-600 hover:bg-emerald-700"
                            : payment.status === "Pending"
                            ? "bg-amber-600 hover:bg-amber-700"
                            : "bg-red-600 hover:bg-red-700"
                        }
                      >
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        className="bg-transparent hover:bg-red-400 text-white border cursor-pointer"
                      >
                        Refund
                      </Button>
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
