'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { CalendarDays } from 'lucide-react';

import { useRouter } from 'next/navigation'; // or "next/router" for older version

const HeroSection = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const router = useRouter();

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates.');
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    // ✅ Redirect to /rooms with query params
    router.push(
      `/check-rooms?checkInDate=${checkIn}&checkOutDate=${checkOut}&adults=${adults}&children=${children}`,
    );
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Hero-Banner.webp"
        alt="Luxury Resort"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white mb-6">
          Discover The Perfect
          <br />
          <span className="title">Blend of Luxury Resort</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12">
          Experience unparalleled luxury and comfort in our world-class resort
          where every moment becomes a cherished memory.
        </p>

        {/* Booking Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="backdrop-blur-sm border bg-background/50 p-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-foreground "
        >
          {/* Check-in */}
          <div className="flex flex-col">
            <label
              htmlFor="checkIn"
              className="mb-1 font-semibold text-foreground"
            >
              Check-in
            </label>
            <input
              type="date"
              id="checkIn"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="rounded-md bg-main text-foreground border p-2"
              required
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col">
            <label
              htmlFor="checkOut"
              className="mb-1 font-semibold text-foreground"
            >
              Check-out
            </label>
            <input
              type="date"
              id="checkOut"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="rounded-md bg-main text-foreground border p-2"
              required
            />
          </div>

          {/* Adults */}
          <div className="flex flex-col">
            <label
              htmlFor="adults"
              className="mb-1 font-semibold text-foreground"
            >
              Adults
            </label>
            <select
              id="adults"
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value))}
              className="rounded-md bg-main text-foreground border p-2"
            >
              {[...Array(4).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Children */}
          <div className="flex flex-col">
            <label
              htmlFor="children"
              className="mb-1 font-semibold text-foreground"
            >
              Children
            </label>
            <select
              id="children"
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
              className="rounded-md bg-main text-foreground border p-2"
            >
              {[...Array(4).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Submit button spans full width on small screens */}
          <button
            type="submit"
            className="sm:col-span-2 md:col-span-4 cursor-pointer
             bg-[#bf9310] text-foreground font-bold rounded-md py-3 mt-4 sm:mt-0 hover:bg-yellow-500 transition"
          >
            <CalendarDays className="inline-block mr-2 w-5 h-5" />
            Available Rooms
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
