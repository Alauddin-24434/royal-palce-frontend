'use client';

import { Crown, Star, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { useFindAllServiceQuery } from '@/redux/features/service/serviceApi';
import Image from 'next/image';
import { IAmineties } from '@/types/amineties.interface';

const AmenitiesSection = () => {
  const { data: servicesData, isLoading } = useFindAllServiceQuery(undefined);
  console.log(servicesData);

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
    <section className="relative py-24 bg-main overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-20">
          {/* Title Decoration */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 mr-6"></div>
            <div className="flex items-center">
              <Star className="w-6 h-6 text-[#bf9310] mr-3" />
              <h2 className="title text-sm font-medium tracking-[0.2em] uppercase">
                Amenities
              </h2>
              <Star className="w-6 h-6 text-[#bf9310] ml-3" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 ml-6"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-snug text-center max-w-6xl mx-auto text-foreground">
            Experience exceptional comfort with
            <br />
            <span className="block">our exclusive amenities</span>
          </h1>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {servicesData?.data?.map((amenity: IAmineties) => (
            <Card
              key={amenity?._id}
              className="group relative overflow-hidden  border-transparent  transition-all duration-500 bg-[#0b0b0d] hover:-translate-y-2 h-[300px]"
            >
              {/* Add relative container for Image */}
              <div className="absolute inset-0">
                {amenity?.image && (
                  <div className="absolute inset-0">
                    <Image
                      src={amenity.image}
                      alt={amenity.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/50 p-6 z-10 flex flex-col justify-between">
                {/* Top Badge */}
                <div className="flex justify-end">
                  {!amenity.isServiceFree && (
                    <Badge className="bg-[#bf9310] text-slate-900 text-xs font-semibold">
                      <Crown className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                </div>

                {/* Bottom Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#bf9310] transition-colors duration-300">
                    {amenity?.name}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-2 line-clamp-2">
                    {amenity?.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-600 text-xs text-slate-300">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {amenity.isServiceFree ? '24/7' : 'Only Booking'}
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
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

export default AmenitiesSection;
