"use client";
import { Bed } from "lucide-react";
import RoomImageGallery from "@/components/RoomImageGallery";
import DateRangeCalendar from "@/components/sections/roomDetailsPage/date-range-calendar";
import RoomReviewsSection from "@/components/sections/roomDetailsPage/room-reviews-section";
import { useFindSingleRoomQuery } from "@/redux/features/room/room.api";
import { useParams } from "next/navigation";

interface Room {
  _id: string;
  name?: string;
  images?: string[];
  pricePerNight?: number;
  description?: string;
  features: string[];
}


export default function RoomDetailsPage() {
  const params = useParams();
  const id = params?.id;
  const { data, isLoading } = useFindSingleRoomQuery(id)
  const room = data?.data;
  console.log(room)
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#bf9310] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#bf9310] font-semibold text-lg">Loading rooms...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      {/* Title */}
      <div className="flex items-center justify-center py-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 mr-6" />
        <div className="flex items-center">
          <Bed className="w-6 h-6 text-[#bf9310] mr-3" />
          <h2 className="text-[#bf9310] text-sm font-medium tracking-[0.2em] uppercase">
            Hotel Room Details
          </h2>
          <Bed className="w-6 h-6 text-[#bf9310] ml-3" />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 ml-6" />
      </div>

      {/* Content */}
      <div className="container mx-auto space-y-12">
        <RoomImageGallery room={room} />

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#bf9310]">
              About {room?.name || "The Royal Room"}
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4 text-lg">
              {room?.description ||
                "Every Signature Room is luxurious, with panoramic views, stunning original architecture and 24-hour personal concierge service."}
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              Each room is individually designed with a private marble bathroom, luxury amenities, flat-screen TV, free Wi-Fi, and more.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#bf9310]">Room Features</h3>
            <div className="grid gap-3">
              {room?.features?.length ? (
                room.features.map((feature: [string], index:number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#bf9310] rounded-full" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#bf9310] rounded-full" />
                    <span className="text-slate-300">Free Wi-Fi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#bf9310] rounded-full" />
                    <span className="text-slate-300">Air Conditioning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#bf9310] rounded-full" />
                    <span className="text-slate-300">Room Service</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Booking Calendar & Reviews */}
        <DateRangeCalendar  room={room} />
        <RoomReviewsSection roomId={id as string} />
      </div>
    </div>
  );
}
