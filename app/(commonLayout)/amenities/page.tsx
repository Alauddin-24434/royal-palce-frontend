'use client';

import Image from 'next/image';
import { Crown, Star, Clock } from 'lucide-react';
import { useFindAllServiceQuery } from '@/redux/features/service/serviceApi';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IAmineties } from '@/types/amineties.interface';

const Amenities = () => {
  const { data: servicesData, isLoading } = useFindAllServiceQuery(undefined);

  // === Loading state ===
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#bf9310] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#bf9310] font-semibold text-lg">
            Loading rooms...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative py-12 px-4 overflow-hidden bg-main">
      <div className="container mx-auto relative z-10">
        {/* === Section Header === */}
        <div className="mb-20">
          {/* Decorative Title Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 mr-6" />
            <div className="flex items-center">
              <Star className="w-6 h-6 text-[#bf9310] mr-3" />
              <h2 className="text-[#bf9310] text-sm font-medium tracking-widest uppercase">
                Amenities
              </h2>
              <Star className="w-6 h-6 text-[#bf9310] ml-3" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 ml-6" />
          </div>

          {/* Title Text */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-snug text-center text-foreground max-w-6xl mx-auto">
            Experience exceptional comfort with
            <br />
            <span className="block">our exclusive amenities</span>
          </h1>
        </div>

        {/* === Amenities Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData?.data?.map((amenity: IAmineties) => (
            <Card
              key={amenity._id}
              className="group relative overflow-hidden border-transparent transition-transform duration-500 hover:-translate-y-2 h-[300px] rounded-none bg-[#0b0b0d]"
            >
              {/* === Background Image === */}
              <div className="absolute inset-0">
                {amenity.image && (
                  <Image
                    src={amenity.image}
                    alt={amenity.name || 'Amenity image'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />
              </div>

              {/* === Foreground Content === */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
                {/* Top-right badge */}
                <div className="flex justify-end">
                  {!amenity.isServiceFree && (
                    <Badge className="bg-[#bf9310] text-slate-900 text-xs font-semibold flex items-center">
                      <Crown className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                </div>

                {/* Bottom Text Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#bf9310] transition-colors duration-300">
                    {amenity.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                    {amenity.description}
                  </p>

                  {/* Bottom Info Row */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-600 text-xs text-slate-300">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>
                        {amenity.isServiceFree ? '24/7' : 'Only Booking'}
                      </span>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
