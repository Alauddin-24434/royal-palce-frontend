"use client";

import type React from "react";
import { useState, useCallback } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bed,
  Star,
  Users,
  ChevronLeft,
  ChevronRight,
  Home,
  ArrowRight,
} from "lucide-react";
import { useFilterAllRoomsQuery } from "@/redux/features/room/room.api";
import Image from "next/image";
import Link from "next/link";

interface IRoom {
  _id: string;
  title: string;
  type: string;
  roomNumber: string;
  price: number;
  status: "Available" | "Occupied" | "Maintenance";
  images: string[];
  features: string[];
  rating?: number;
  maxGuests?: number;
}

const sliderStyles = `
  .slider-thumb::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: linear-gradient(45deg, #f59e0b, #eab308);
    cursor: pointer;
    border: 2px solid #1e293b;
    box-shadow: 0 4px 8px rgba(245, 158, 11, 0.3);
  }
  .slider-thumb::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: linear-gradient(45deg, #f59e0b, #eab308);
    cursor: pointer;
    border: 2px solid #1e293b;
    box-shadow: 0 4px 8px rgba(245, 158, 11, 0.3);
  }
`;

function debounce<F extends (...args: any[]) => void>(func: F, delay: number): F {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  } as F;
}

export default function RoomsPage() {
  const [tab, setTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // ✅ for input value
  const [debouncedSearch, setDebouncedSearch] = useState(""); // ✅ used in query
  const [page, setPage] = useState(1);

  const debouncedSetSearch = useCallback(
    debounce((value: string) => {
      setDebouncedSearch(value);
      setPage(1);
    }, 500),
    []
  );

  const { data, isLoading } = useFilterAllRoomsQuery({
    searchTerm: debouncedSearch,
    type: tab === "all" ? undefined : tab,
    limit: 6,
    page,
  });

  const displayRooms = data?.data?.data || [];
  const totalPages = data?.meta?.totalPages || 5;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);           // update input instantly
    debouncedSetSearch(value);      // debounce the query
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#bf9310] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#bf9310] font-semibold text-lg">Loading </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen container mx-auto px-4 py-8 md:py-12">
      <style dangerouslySetInnerHTML={{ __html: sliderStyles }} />

      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center space-y-3 mb-10">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-[#bf9310] to-transparent" />
          <div className="flex items-center space-x-2">
            <Bed className="w-5 h-5 md:w-6 md:h-6 text-[#bf9310]" />
            <h2 className="text-[#bf9310] text-sm md:text-base lg:text-lg font-medium tracking-widest uppercase">
              Luxury Accommodations
            </h2>
            <Bed className="w-5 h-5 md:w-6 md:h-6 text-[#bf9310]" />
          </div>
          <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-[#bf9310] to-transparent" />
        </div>
      </div>

      {/* FILTER SECTION */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-8">
        {/* Show Select only on small screens */}
        <div className="w-full block md:hidden"> 
          <select
            value={tab}
            onChange={(e) => {
              setTab(e.target.value);
              setPage(1);
            }}
             className="appearance-none w-full border border-[#191a1e] rounded px-4 py-2 bg-[#191a1e] text-white text-sm focus:outline-none focus:ring-0 focus:border-[#191a1e]"
          >

            {["all", "luxury", "suite", "deluxe", "twine"].map((t) => (
              <option key={t} value={t}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Show Tabs only on medium and above */}
        <div className="hidden md:block">
          <Tabs value={tab} onValueChange={(val) => { setTab(val); setPage(1); }}>
            <TabsList className="flex-wrap justify-center md:justify-start">
              {["all", "luxury", "suite", "deluxe", "twine"].map((t) => (
                <TabsTrigger key={t} value={t} className="capitalize text-sm md:text-base px-4 py-1">
                  {t}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Search input field */}
        <div className="w-full md:w-80">
          <Input
            placeholder="Search rooms..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full"
          />
        </div>
      </div>


      {/* ROOM GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayRooms.map((room: IRoom) => (
          <Card
            key={room._id}
            className="group relative w-full overflow-hidden bg-black rounded-none p-0 transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
          >
            <div className="relative h-80 sm:h-96 overflow-hidden">
              <Image
                src={room.images[0] || "/placeholder.svg"}
                alt="Luxury hotel room"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500" />

              {/* Price Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-[#bf9310] text-white px-3 py-1 text-xs md:text-sm font-semibold">
                  ${room.price}/night
                </div>
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-t-[#bf9310] border-l-transparent border-r-transparent mx-auto" />
              </div>

              {/* Room Info */}
              <div className="absolute bottom-6 left-6 text-white space-y-2 text-sm md:text-base">
                <div className="font-light text-lg md:text-xl">{room.title}</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#bf9310] text-[#bf9310] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 text-xs md:text-sm mt-2">
                  <span className="flex items-center gap-1"><Bed className="w-4 h-4 text-[#bf9310]" /> King Bed</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4 text-[#bf9310]" /> 2 Person</span>
                  <span className="flex items-center gap-1"><Home className="w-4 h-4 text-[#bf9310]" /> 1500 sqft</span>
                </div>

                <Link href={`/rooms/${room._id}`}>
                  <Button
                    variant="outline"
                    className="mt-2 text-white border-white hover:bg-[#bf9310] hover:border-[#bf9310] rounded-none cursor-pointer transition duration-300 relative"
                  >
                    <span className="flex items-center gap-2 text-xs md:text-sm">
                      VIEW DETAILS <ArrowRight className="w-4 h-4" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center flex-wrap gap-2 mt-10">
        <Button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="bg-[#bf9310] text-white hover:bg-[#a87e0d]"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {[...Array(totalPages)].map((_, i) => {
          const isActive = page === i + 1
          return (
            <Button
              key={i}
              onClick={() => setPage(i + 1)}
              className={
                isActive
                  ? "bg-[#bf9310] text-white hover:bg-[#a87e0d]"
                  : "border border-[#bf9310] text-[#bf9310] bg-white hover:bg-[#fce9b9]"
              }
            >
              {i + 1}
            </Button>
          )
        })}

        <Button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalPages}
          className="bg-[#bf9310] text-white hover:bg-[#a87e0d]"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )

}
