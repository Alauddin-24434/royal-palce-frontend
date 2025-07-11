'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useGetDashboardDataQuery } from '@/redux/features/dashboard/dashboardApi';

function AdminDashboard() {
  const { data: dashboardData, isLoading } = useGetDashboardDataQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    },
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

  const stats = dashboardData?.stats ?? [];
  const bookings = dashboardData?.bookings ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Admin Dashboard
        </h2>
        <p className="text-foreground">System-wide overview and statistics</p>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${stats.length} gap-6`}
      >
        {stats.map((stat: any, index: number) => {
          const Icon = require('lucide-react')[stat.icon] || UserCheck;
          return (
            <Card key={index} className="bg-main">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                {stat.change && (
                  <p className="text-xs text-foreground">
                    <span
                      className={
                        stat.change.startsWith('+')
                          ? 'text-emerald-400'
                          : 'text-red-400'
                      }
                    >
                      {stat.change}
                    </span>{' '}
                    from last month
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-6">
        <Card className="bg-main">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bookings.map((booking: any) => (
                <div
                  key={booking._id}
                  className="flex items-center justify-between p-4 bg-main rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-main rounded-full flex items-center justify-center">
                      <UserCheck className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {booking.guest}
                      </p>
                      <p className="text-sm text-foreground">{booking.room}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge
                      variant={
                        booking.status === 'Confirmed'
                          ? 'default'
                          : booking.status === 'Pending'
                            ? 'secondary'
                            : 'outline'
                      }
                      className={
                        booking.status === 'Confirmed'
                          ? 'bg-emerald-600 hover:bg-emerald-700'
                          : booking.status === 'Pending'
                            ? 'bg-amber-600 hover:bg-amber-700'
                            : 'bg-blue-600 hover:bg-blue-700'
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
      </div>
    </div>
  );
}

export default AdminDashboard;
