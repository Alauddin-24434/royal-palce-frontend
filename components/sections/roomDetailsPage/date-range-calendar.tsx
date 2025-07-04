'use client';

import React, { useState } from 'react';
import { format, differenceInCalendarDays } from 'date-fns';
import { CalendarDays, Clock, Moon, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useSelector } from 'react-redux';
import { addCartItem } from '@/redux/features/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import CustomCalendar, { DateRange } from '../../shared/CustomCalendar';
import toast, { Toaster } from 'react-hot-toast';
import { useGetBookedDatesQuery } from '@/redux/features/booking/bookingApi';
import SimpleCalendar from './simpleCalendar';

// Room interface
interface Room {
  _id: string;
  name?: string;
  images?: string[];
  price?: number;
  description?: string;
  features?: string[];
}

// Props
interface DateRangeCalendarProps {
  room: Room;
}

export default function DateRangeCalendar({ room }: DateRangeCalendarProps) {
  const [mainImage] = useState(
    room?.images?.[0] || '/placeholder.svg',
  );
  const user = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [selectedRange, setSelectedRange] = useState<DateRange>({});
  const router = useRouter();

  // ✅ Load and filter booked dates
  const { data: bookingData, isLoading } = useGetBookedDatesQuery(room._id);
  const bookedDates =
    bookingData?.filter((d: any) => typeof d === 'string' && d.trim()) || [];

  // 📅 Date selection handler
  const handleSelectDate = (date: Date) => {
    if (!selectedRange.from || (selectedRange.from && selectedRange.to)) {
      setSelectedRange({ from: date, to: undefined });
    } else {
      if (date < selectedRange.from) {
        setSelectedRange({ from: date, to: undefined });
      } else {
        setSelectedRange({ from: selectedRange.from, to: date });
      }
    }
  };

  const isSameDay = () =>
    selectedRange.from &&
    selectedRange.to &&
    format(selectedRange.from, 'yyyy-MM-dd') ===
      format(selectedRange.to, 'yyyy-MM-dd');

  const numberOfNights =
    selectedRange.from && selectedRange.to
      ? differenceInCalendarDays(selectedRange.to, selectedRange.from)
      : 0;

  // ➕ Add to Cart
  const handleAddToCart = () => {
    if (!selectedRange.from || !selectedRange.to) {
      toast.error('Please select both check-in and check-out dates.');
      return;
    }
    if (isSameDay()) {
      toast.error('Check-in and check-out cannot be on the same day.');
      return;
    }

    dispatch(
      addCartItem({
        userId: user!._id,
        room: {
          roomId: room._id,
          name: room.name,
          checkInDate: format(selectedRange.from, 'yyyy-MM-dd'),
          checkOutDate: format(selectedRange.to, 'yyyy-MM-dd'),
          image: mainImage,
          price: room?.price,
        },
      }),
    );
    toast.success('Added to cart!');
  };

  // ✅ Book Now
  const handleBookNow = () => {
    if (!selectedRange.from || !selectedRange.to) {
      toast.error('Please select both check-in and check-out dates.');
      return;
    }
    if (isSameDay()) {
      toast.error('Check-in and check-out cannot be on the same day.');
      return;
    }

    dispatch(
      addCartItem({
        userId: user!._id,
        room: {
          roomId: room._id,
          name: room.name,
          checkInDate: format(selectedRange.from, 'yyyy-MM-dd'),
          checkOutDate: format(selectedRange.to, 'yyyy-MM-dd'),
          image: mainImage,
          price: room?.price,
        },
      }),
    );
    router.push('/checkout');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  md:px-6">
      {/* Calendar Selection */}
      <Card className="bg-[#191a1e] hidden sm:block">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-[#bf9310]" />
            Select Your Dates
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="h-64 flex items-center justify-center text-slate-400">
              Loading available dates...
            </div>
          ) : (
            <>
              {/* Desktop: CustomCalendar (hide on small screens) */}
              <div className="">
                <CustomCalendar
                  bookedDates={bookedDates}
                  selectedRange={selectedRange}
                  onSelectDate={handleSelectDate}
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Mobile: SimpleCalendar (show on small screens) */}
      <div className="block sm:hidden">
        <SimpleCalendar
          selectedRange={selectedRange}
          bookedDates={bookedDates}
          onSelectDate={(date) => {
            if (
              !selectedRange.from ||
              (selectedRange.from && selectedRange.to)
            ) {
              setSelectedRange({ from: date, to: undefined });
            } else {
              if (date < selectedRange.from) {
                setSelectedRange({ from: date, to: undefined });
              } else {
                setSelectedRange({ from: selectedRange.from, to: date });
              }
            }
          }}
        />

        {selectedRange.from && (
          <p className="mt-2 text-sm text-white">
            Selected date: {format(selectedRange.from, 'PPP')}
          </p>
        )}
      </div>

      {/* Booking Summary */}
      <Card className="bg-[#191a1e] flex flex-col h-full">
        <CardHeader className="flex flex-col md:flex-row items-center justify-between">
          <CardTitle className="text-white">Summary</CardTitle>
          <p className="text-sm text-center text-slate-300 flex justify-center items-center gap-2">
            <Moon className="text-[#bf9310]" />{' '}
            <span className="text-white font-semibold">
              {numberOfNights} night{numberOfNights > 1 ? 's' : ''}
            </span>
          </p>
        </CardHeader>

        <CardContent className="flex flex-col justify-between flex-grow space-y-6">
          {selectedRange.from && selectedRange.to ? (
            <>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-sm">Check-in</label>
                    <div className="p-3 bg-slate-700/30 rounded-lg text-white">
                      {format(selectedRange.from, 'MMM dd, yyyy')}
                      <div className="text-slate-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 3:00 PM
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm">Check-out</label>
                    <div className="p-3 bg-slate-700/30 rounded-lg text-white">
                      {format(selectedRange.to, 'MMM dd, yyyy')}
                      <div className="text-slate-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 11:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons always at bottom */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <Button
                  onClick={handleBookNow}
                  className="flex-1 bg-[#bf9310]  text-white hover:bg-[#a87e0d] cursor-pointer"
                >
                  Book Now
                </Button>
                <Button
                  onClick={handleAddToCart}
                  variant="outline"
                  className="flex-1 text-white border-slate-600 bg-slate-700/30 hover:bg-slate-700/50 cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8 flex-1 flex flex-col justify-center">
              <CalendarDays className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400">
                Select your check-in and check-out dates to see pricing
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
