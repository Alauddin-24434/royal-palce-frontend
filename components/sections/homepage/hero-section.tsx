'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation('common');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const router = useRouter();

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      alert(t('hero.alertSelectDates'));
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      alert(t('hero.alertCheckOutAfterCheckIn'));
      return;
    }

    router.push(
      `/check-rooms?checkInDate=${checkIn}&checkOutDate=${checkOut}&adults=${adults}&children=${children}`,
    );
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden p-4">
      {/* Background image with dark overlay */}
      <Image
        src="/images/Hero-Banner.webp"
        alt={t('hero.titleLine2')}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl px-4">
        <h1 className="text-base sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white mb-6">
          {t('hero.titleLine1')}
          <br />
          <span className="title">{t('hero.titleLine2')}</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12">
          {t('hero.description')}
        </p>

        {/* Booking form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="backdrop-blur-sm border bg-background/50 p-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-foreground"
        >
          {/* Check-in */}
          <div className="flex flex-col">
            <label htmlFor="checkIn" className="mb-1 font-semibold">
              {t('hero.checkIn')}
            </label>
            <input
              type="date"
              id="checkIn"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="rounded-md bg-main border p-2"
              required
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col">
            <label htmlFor="checkOut" className="mb-1 font-semibold">
              {t('hero.checkOut')}
            </label>
            <input
              type="date"
              id="checkOut"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="rounded-md bg-main border p-2"
              required
            />
          </div>

          {/* Adults */}
          <div className="flex flex-col">
            <label htmlFor="adults" className="mb-1 font-semibold">
              {t('hero.adults')}
            </label>
            <select
              id="adults"
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value))}
              className="rounded-md bg-main border p-2"
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
            <label htmlFor="children" className="mb-1 font-semibold">
              {t('hero.children')}
            </label>
            <select
              id="children"
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value))}
              className="rounded-md bg-main border p-2"
            >
              {[...Array(4).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="sm:col-span-2 md:col-span-4 cursor-pointer bg-[#bf9310] text-foreground font-bold rounded-md py-3 mt-4 sm:mt-0 hover:bg-yellow-500 transition"
          >
            <CalendarDays className="inline-block mr-2 w-5 h-5" />
            {t('hero.availableRooms')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
