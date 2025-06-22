"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarDays, Clock, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useSelector } from "react-redux";
import { addCartItem } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import CustomCalendar, { DateRange } from "../../shared/CustomCalendar";

interface Room {
  _id: string;
  name?: string;
  images?: string[];
  price?: number;
  description?: string;
  features?: string[];
}

interface DateRangeCalendarProps {
 
  room: Room;
}

export default function DateRangeCalendar({ room }: DateRangeCalendarProps) {
  console.log("date",room?._id )
  const [mainImage, setMainImage ] = useState(room?.images?.[0] || "/placeholder.svg?height=400&width=800");
  const user = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [bookedDates, setBookedDates] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [selectedRange, setSelectedRange] = useState<DateRange>({});

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://royal-place-server.vercel.app/api/booking-check/${room?._id}`);
        const data = await response.json();
        if (data.success && Array.isArray(data?.data?.bookedDates)) {
          const validDates = data?.data?.bookedDates.filter((d: any) => typeof d === "string" && d.trim());
          setBookedDates(validDates);
        }
      } catch (err) {
        console.error("Error loading booked dates:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookedDates();
  }, [room._id]);

  // Handle date selection: logic to create a range
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

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login first!");
      return;
    }
    if (!selectedRange.from || !selectedRange.to) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    const formattedCheckIn = format(selectedRange.from, "yyyy-MM-dd");
    const formattedCheckOut = format(selectedRange.to, "yyyy-MM-dd");

    dispatch(
      addCartItem({
        userId: user._id,
        room: {
          roomId: room._id,
          name: room.name,
          checkInDate: formattedCheckIn,
          checkOutDate: formattedCheckOut,
          image: mainImage,
          price: room?.price,
        },
      })
    );
  };

  const handleBookNow = () => {
    if (!selectedRange.from || !selectedRange.to || !user?._id) {
      alert("Please select date & login first!");
      return;
    }

    const formattedCheckIn = format(selectedRange.from, "yyyy-MM-dd");
    const formattedCheckOut = format(selectedRange.to, "yyyy-MM-dd");

    dispatch(
      addCartItem({
        userId: user._id,
        room: {
          roomId: room._id,
          name: room.name,
          checkInDate: formattedCheckIn,
          checkOutDate: formattedCheckOut,
          image: mainImage,
          price: room?.price,
        },
      })
    );

    router.push("/checkout");
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="bg-[#191a1e]">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-[#bf9310]" />
            Select Your Dates
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="h-64 flex items-center justify-center text-slate-400">
              Loading available dates...
            </div>
          ) : (
            <CustomCalendar
              bookedDates={bookedDates}
              selectedRange={selectedRange}
              onSelectDate={handleSelectDate}
            />
          )}
        </CardContent>
      </Card>

      <Card className="bg-[#191a1e]">
        <CardHeader>
          <CardTitle className="text-white">Booking Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {selectedRange.from && selectedRange.to ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-sm">Check-in</label>
                  <div className="p-3 bg-slate-700/30 rounded-lg text-white">
                    {format(selectedRange.from, "MMM dd, yyyy")}
                    <div className="text-slate-400 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 3:00 PM
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-slate-400 text-sm">Check-out</label>
                  <div className="p-3 bg-slate-700/30 rounded-lg text-white">
                    {format(selectedRange.to, "MMM dd, yyyy")}
                    <div className="text-slate-400 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 11:00 AM
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 py-12">
                <Button onClick={handleBookNow} className="w-full bg-[#bf9310]">
                  Book Now
                </Button>
                <Button
                  onClick={handleAddToCart}
                  variant="outline"
                  className="w-full text-white border-slate-600 bg-slate-700/30 hover:bg-slate-700/50"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
              <div className="text-center">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  Free cancellation until 12 hours before check-in
                </Badge>
                <p className="text-slate-400 text-xs mt-2">You won’t be charged yet</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <CalendarDays className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400">Select your check-in and check-out dates to see pricing</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
