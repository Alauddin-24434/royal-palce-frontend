
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/Hero-Banner.webp"
        alt="Luxury Resort"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-gray-100">
          Discover The Perfect
          <br />
          <span className="">Blend of Luxury Resort</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
          Experience unparalleled luxury and comfort in our world-class resort
          where every moment becomes a cherished memory.
        </p>
      </div>

      {/* Booking Form at Bottom */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/your-hotel-image.jpg')" }}
      >
        {/* <HeroDateRange /> */}
      </div>

    </section>
  );
};

export default HeroSection;