'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';

import { useGetPaymentsByUserIdQuery } from '@/redux/features/payment/paymentApi';

export default function UserPayments() {
  const user = useSelector(selectCurrentUser);

  const { data: paymentsData, isLoading } = useGetPaymentsByUserIdQuery(
    user?._id ?? '',
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#bf9310] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#bf9310] font-semibold text-lg">Loading ...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-foreground">Payments</h1>
      </div>

      <Card className="bg-main border border-slate-700 shadow-md">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#2a2d38] ">
                <TableRow>
                  <TableHead className="text-white">Transaction ID</TableHead>
                  <TableHead className="text-white">Booking ID</TableHead>
                  <TableHead className="text-white">Amount</TableHead>
                  <TableHead className="text-white">Method</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentsData?.data?.map((payment: any) => (
                  <TableRow key={payment._id}>
                    <TableCell>{payment.transactionId}</TableCell>
                    <TableCell>{payment.bookingId}</TableCell>
                    <TableCell>{payment.amount}৳</TableCell>
                    <TableCell>{payment.paymentMethod}</TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          payment.status === 'success'
                            ? 'bg-green-600'
                            : payment.status === 'pending'
                              ? 'bg-yellow-600'
                              : 'bg-red-600'
                        } text-white`}
                      >
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(payment.createdAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
