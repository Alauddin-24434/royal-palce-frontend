import HeroSection from '@/components/sections/homepage/hero-section';
import AboutUsSection from '@/components/sections/homepage/about-us-section';
import RoomAndSuites from '@/components/sections/homepage/room-and-suites';

import TestimonialsSection from '@/components/sections/homepage/testimonials-section';

import TeamSection from '@/components/sections/homepage/team-section';
import AmenitiesSection from '@/components/sections/homepage/amineties-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== Hero Section ===== */}
      <HeroSection />

      {/* ===== About Us Section ===== */}
      <AboutUsSection />

      {/* ===== Rooms & Suites Section ===== */}
      <RoomAndSuites />

      {/* ===== Amenities Section ===== */}
      <AmenitiesSection />

      {/* ===== Team Member Section ===== */}
      <TeamSection />

      {/* ===== Testimonials Section ===== */}
      <TestimonialsSection />

      {/* ===== Sponsors Section (commented out) ===== */}
      {/* <SpoonserSection /> */}

      {/* ===== Blogs Section (commented out) ===== */}
      {/* <BlogsSection /> */}
    </div>
  );
}
