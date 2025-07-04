"use client";

import React, { useState, useEffect } from "react";
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
  price: number;
  images: string[];
}

const roomTypes = ["all", "luxury", "suite", "deluxe", "twine"];

export default function CheckRooms() {
  const [tab, setTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  // Handle search params from URL
  const [queryParams, setQueryParams] = useState({
    checkInDate: "",
    checkOutDate: "",
    adults: 1,
    children: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setQueryParams({
        checkInDate: params.get("checkInDate") || "",
        checkOutDate: params.get("checkOutDate") || "",
        adults: Number(params.get("adults") || 1),
        children: Number(params.get("children") || 0),
      });
    }
  }, []);

  const { data, isLoading } = useFilterAllRoomsQuery(
    {
      checkInDate: queryParams.checkInDate,
      checkOutDate: queryParams.checkOutDate,
      adults: queryParams.adults,
      children: queryParams.children,
      type: tab === "all" ? undefined : tab,
      limit: 6,
      page,
    },
    {
      skip: !queryParams.checkInDate || !queryParams.checkOutDate, // Prevent early call
    }
  );

  const rooms = data?.data?.data || [];
  const totalPages = data?.meta?.totalPages || 1;

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const onTabChange = (newTab: string) => {
    setTab(newTab);
    setPage(1);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#bf9310] font-semibold text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen container mx-auto px-4 py-8 md:py-12">
      {/* Filter controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Mobile Dropdown */}
        <select
          value={tab}
          onChange={(e) => onTabChange(e.target.value)}
          className="block md:hidden w-full border rounded px-4 py-2 bg-[#191a1e] text-white text-sm"
        >
          {roomTypes.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>

        {/* Desktop Tabs */}
        <Tabs value={tab} onValueChange={onTabChange} className="hidden md:block">
          <TabsList className="flex-wrap justify-center md:justify-start">
            {roomTypes.map((t) => (
              <TabsTrigger
                key={t}
                value={t}
                className="capitalize text-sm md:text-base px-4 py-1"
              >
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Search (if you implement later) */}
        {/* <Input
          placeholder="Search rooms..."
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full md:w-80"
        /> */}
      </div>

      {/* Rooms grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {rooms.map((room: IRoom) => (
          <Card
            key={room._id}
            className="group relative p-0 bg-black rounded-none overflow-hidden hover:scale-105 transition-transform duration-500"
          >
            <div className="relative h-80 sm:h-96 overflow-hidden">
              <Image
                src={room.images[0] || "/placeholder.svg"}
                alt={room.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500" />
              <div className="absolute top-4 right-4 bg-[#bf9310] text-white px-3 py-1 text-xs md:text-sm font-semibold">
                ${room.price}/night
              </div>

              <div className="absolute bottom-6 left-6 text-white space-y-2 text-sm md:text-base">
                <div className="font-light text-lg md:text-xl">{room.title}</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#bf9310] text-[#bf9310]"
                    />
                  ))}
                </div>

                <Link href={`/rooms/${room._id}`}>
                  <Button
                    variant="outline"
                    className="mt-2 bg-transparent  text-white border-white hover:bg-[#bf9310] hover:border-[#bf9310] rounded-none cursor-pointer"
                  >
                    VIEW DETAILS <ArrowRight className="w-4 h-4 inline" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center flex-wrap gap-2 mt-10">
        <Button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="bg-[#bf9310] text-white hover:bg-[#a87e0d]"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNumber = i + 1;
          const isActive = page === pageNumber;
          return (
            <Button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={
                isActive
                  ? "bg-[#bf9310] text-white hover:bg-[#a87e0d]"
                  : "border border-[#bf9310] text-[#bf9310] bg-white hover:bg-[#fce9b9]"
              }
            >
              {pageNumber}
            </Button>
          );
        })}

        <Button
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={page === totalPages}
          className="bg-[#bf9310] text-white hover:bg-[#a87e0d]"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
