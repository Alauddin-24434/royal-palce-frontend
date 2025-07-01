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
          <p className="text-[#bf9310] font-semibold text-lg">Loading rooms...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen container mx-auto py-12">
      <style dangerouslySetInnerHTML={{ __html: sliderStyles }} />


      {/* Title */}
      <div className="flex items-center justify-center">
        <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 mr-6" />
        <div className="flex items-center">
          <Bed className="w-6 h-6 text-[#bf9310] mr-3" />
          <h2 className="text-[#bf9310] text-sm font-medium tracking-[0.2em] uppercase">
            Luxury Accommodations
          </h2>
          <Bed className="w-6 h-6 text-[#bf9310] ml-3" />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 ml-6" />
      </div>

      {/* FILTER SECTION */}
      <div className="px-4 space-y-6">
        <div className="flex flex-col md:flex-row lg:justify-between gap-6">
          <Tabs value={tab} onValueChange={(val) => { setTab(val); setPage(1); }}>
            <TabsList>
              {["all", "luxury", "suite", "deluxe", "twine"].map((t) => (
                <TabsTrigger key={t} value={t} className="capitalize">{t}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Input
            placeholder="Search rooms..."
            value={searchTerm} // ✅ input controlled here
            onChange={handleSearchChange}
            className="md:w-80"
          />
        </div>

        {/* ROOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayRooms.map((room: IRoom) => (
            <Card
              key={room._id}
              className="group relative w-full max-w-md overflow-hidden bg-black rounded-none p-0 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={room.images[0] || "/placeholder.svg"}
                  alt="Luxury hotel room"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/70" />
                <div className="absolute top-4 left-4 px-2">
                  <div className="text-3xl font-light text-white">{room.roomNumber}</div>
                </div>
                <div className="absolute top-4 right-4 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  <div className="relative">
                    <div className="bg-[#bf9310] text-white px-4 py-2 font-semibold text-sm">
                      ${room.price}/night
                    </div>
                    <div className="absolute right-0 top-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#bf9310]" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-white space-y-4 z-10 group-hover:translate-y-[-8px]">
                  <div>
                    <div className="text-xl font-light py-2">{room.title}</div>
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
                  <div className="flex gap-4 text-sm mt-2">
                    <div className="flex items-center gap-2"><Bed className="w-4 h-4 text-[#bf9310]" /><span>King Bed</span></div>
                    <div className="flex items-center gap-2"><Users className="w-4 h-4 text-[#bf9310]" /><span>2 Person</span></div>
                    <div className="flex items-center gap-2"><Home className="w-4 h-4 text-[#bf9310]" /><span>1500 sqft</span></div>
                  </div>
                  <Link href={`/rooms/${room._id}`}>
                    <Button
                      variant="outline"
                      className="mt-2 w-fit cursor-pointer bg-transparent text-white border-white hover:bg-[#bf9310] hover:border-[#bf9310] rounded-none transition-all duration-300 overflow-hidden relative"
                    >
                      <span className="flex items-center gap-2">VIEW DETAILS <ArrowRight className="w-4 h-4 group-hover:translate-x-1" /></span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                    </Button>
                  </Link>
                </div>
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#bf9310] opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#bf9310] opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100" />
              </div>
            </Card>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-8">
          <Button
            className="bg-[#bf9310] text-white hover:bg-[#a87e0d]  cursor-pointer"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {[...Array(totalPages)].map((_, i) => {
            const isActive = page === i + 1;
            return (
              <Button
                key={i}
                onClick={() => setPage(i + 1)}
                className={
                  isActive
                    ? "bg-[#bf9310] text-white hover:bg-[#a87e0d] "
                    : "border border-[#bf9310] text-[#bf9310] bg-white hover:bg-[#fce9b9]  cursor-pointer"
                }
              >
                {i + 1}
              </Button>
            );
          })}

          <Button
            className="bg-[#bf9310] text-white hover:bg-[#a87e0d] cursor-pointer"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPages}
          >
            <ChevronRight className="w-4 h-4 " />
          </Button>
        </div>

      </div>
    </div>
  );
}
