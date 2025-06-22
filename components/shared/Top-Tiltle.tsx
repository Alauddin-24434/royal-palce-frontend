import Image from "next/image";
import React from "react";

const TopTitle = () => {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/room1.jpg"
          alt="Luxury hotel room"
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-light text-white md:text-5xl lg:text-6xl">
          Hotel Services For Our Guests
        </h1>

        <nav className="flex items-center space-x-2 text-sm uppercase tracking-wider">
          <span className="text-white/80">HOME</span>
          <span className="text-yellow-400">{">"}</span>
          <span className="text-yellow-400 font-medium">SERVICES</span>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1920 200"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C480,20 960,20 1440,100 C1680,140 1920,140 1920,100 L1920,200 L0,200 Z"
            className="fill-none stroke-yellow-400 stroke-[4]"
          />
          <path
            d="M0,100 C480,20 960,20 1440,100 C1680,140 1920,140 1920,100 L1920,200 L0,200 Z"
            className="fill-bla fill-opacity-80"
          />
        </svg>
      </div>
    </div>
  );
};

export default TopTitle;
