'use client';
import { Card } from '../../ui/card';
import { Bed, Home, Star, Users, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { useFindAllRoomsQuery } from '@/redux/features/room/room.api';
import Image from 'next/image';
import type { IRoom } from '@/app/types/room.interface';
import Link from 'next/link';

const RoomAndSuites = () => {
  const { data: roomsData } = useFindAllRoomsQuery(undefined);

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          {/* Title Decoration */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 mr-6"></div>
            <div className="flex items-center">
              <Bed className="w-6 h-6 text-[#bf9310] mr-3" />
              <h2 className="title text-sm font-medium tracking-[0.2em] uppercase">
                Hotel Rooms & Suites
              </h2>
              <Bed className="w-6 h-6 text-[#bf9310] ml-3" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 ml-6"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-snug text-center max-w-6xl mx-auto text-foreground">
            Choose from our selection of
            <br />
            <span className="block">luxury accommodations</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roomsData?.data?.map((room: IRoom) => (
            <Card
              key={room?._id}
              className="group relative w-full max-w-md overflow-hidden bg-black rounded-none p-0  transform transition-all duration-500 hover:scale-105 hover:shadow-2xl "
            >
              {/* Background Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={
                    room && room.images && room.images[0]
                      ? room.images[0]
                      : '/placeholder.svg'
                  }
                  alt="Luxury hotel room"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay with hover effect */}
                <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/70" />

                {/* Room Number - top left with hover animation */}
                <div className="absolute top-4 left-4 px-2 transform transition-all duration-500 ">
                  <div className="text-3xl font-light text-white transition-colors duration-300">
                    {room?.roomNumber}
                  </div>
                </div>

                {/* Price Tag - top right with enhanced hover effect */}
                <div className="absolute top-4 right-4 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  <div className="relative">
                    <div className="bg-[#bf9310] text-white px-4 py-2 font-semibold text-sm transition-all duration-300 ">
                      ${room?.price}/night
                    </div>
                    <div className="absolute right-0 top-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#bf9310] transition-all duration-300 " />
                  </div>
                </div>

                {/* Content - bottom left with staggered animations */}
                <div className="absolute bottom-6 left-6 text-white space-y-4 z-10 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <div>
                    <div className="text-xl font-light py-2 transition-all duration-300 ">
                      {room?.title}
                    </div>

                    {/* Star Rating with individual star animations */}
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#bf9310] text-[#bf9310] transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Amenities with icon animations */}
                  <div className="flex gap-4 text-sm mt-2">
                    <div className="flex items-center gap-2 transition-all duration-300 ">
                      <Bed className="w-4 h-4 text-[#bf9310] transition-all duration-300 " />
                      <span>King Bed</span>
                    </div>
                    <div className="flex items-center gap-2 transition-all duration-300 ">
                      <Users className="w-4 h-4 text-[#bf9310] transition-all duration-300 " />
                      <span>2 Person</span>
                    </div>
                    <div className="flex items-center gap-2 transition-all duration-300 ">
                      <Home className="w-4 h-4 text-[#bf9310] transition-all duration-300 " />
                      <span>1500 sqft</span>
                    </div>
                  </div>

                  {/* Enhanced Button with arrow animation */}
                  <Link href={`/rooms/${room._id}`}>
                    <Button
                      variant="outline"
                      className="mt-2 w-fit  bg-transparent text-white border-white cursor-pointer hover:bg-[#bf9310] hover:border-[#bf9310] rounded-none transition-all duration-300  overflow-hidden relative"
                    >
                      <span className="flex items-center gap-2 transition-all duration-300">
                        VIEW DETAILS
                        <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                      </span>

                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                    </Button>
                  </Link>
                </div>

                {/* Corner decorative elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#bf9310] opacity-0 transition-all duration-500 group-hover:opacity-100 transform scale-75 group-hover:scale-100" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#bf9310] opacity-0 transition-all duration-500 group-hover:opacity-100 transform scale-75 group-hover:scale-100" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomAndSuites;
