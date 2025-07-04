'use client';

import { Bed } from 'lucide-react';
import RoomImageGallery from '@/components/RoomImageGallery';
import DateRangeCalendar from '@/components/sections/roomDetailsPage/date-range-calendar';
import RoomReviewsSection from '@/components/sections/roomDetailsPage/room-reviews-section';
import { useFindSingleRoomQuery } from '@/redux/features/room/room.api';
import { useParams } from 'next/navigation';
import PrivateRoute from '@/components/PrivateRoute';

export default function RoomDetailsPage() {
  // Get dynamic route param
  const params = useParams();
  const id = params?.id;

  // Fetch single room details
  const { data, isLoading } = useFindSingleRoomQuery(id);
  const room = data?.data;

  // Show loading spinner while fetching
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
    <PrivateRoute>
      <div className="min-h-screen text-white">
        {/* ====================== Title Section ====================== */}
        <div className="flex items-center justify-center py-6 sm:py-10 px-4 text-center flex-wrap">
          <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-24 sm:w-32 mr-4" />
          <div className="flex items-center justify-center">
            <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-[#bf9310] mr-2" />
            <h2 className="text-[#bf9310] text-sm sm:text-base font-medium tracking-[0.2em] uppercase">
              Hotel Room Details
            </h2>
            <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-[#bf9310] ml-2" />
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-24 sm:w-32 ml-4" />
        </div>

        {/* ====================== Main Content ====================== */}
        <div className="container mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
          {/* ========== Room Image Gallery ========== */}
          <RoomImageGallery room={room} />

          {/* ========== Room Info and Features ========== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* === Room Description === */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#bf9310]">
                About {room?.name || 'The Royal Room'}
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4 text-base sm:text-lg">
                {room?.description ||
                  'Every Signature Room is luxurious, with panoramic views, stunning original architecture and 24-hour personal concierge service.'}
              </p>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Each room is individually designed with a private marble
                bathroom, luxury amenities, flat-screen TV, free Wi-Fi, and
                more.
              </p>
            </div>

            {/* === Room Features List === */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#bf9310]">
                Room Features
              </h3>
              <div className="grid gap-3">
                {room?.features?.length ? (
                  room.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#bf9310] rounded-full" />
                      <span className="text-slate-300 text-sm sm:text-base">
                        {feature}
                      </span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#bf9310] rounded-full" />
                      <span className="text-slate-300 text-sm sm:text-base">
                        Free Wi-Fi
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#bf9310] rounded-full" />
                      <span className="text-slate-300 text-sm sm:text-base">
                        Air Conditioning
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#bf9310] rounded-full" />
                      <span className="text-slate-300 text-sm sm:text-base">
                        Room Service
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ========== Booking Calendar & Reviews Section ========== */}
          <DateRangeCalendar room={room} />
          <RoomReviewsSection roomId={id as string} />
        </div>
      </div>
    </PrivateRoute>
  );
}
