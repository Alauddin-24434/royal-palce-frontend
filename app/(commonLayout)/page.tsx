
import HeroSection from "@/components/sections/homepage/hero-section";
import AboutUsSection from "@/components/sections/homepage/about-us-section";
import RoomAndSuites from "@/components/sections/homepage/room-and-suites";

import TestimonialsSection from "@/components/sections/homepage/testimonials-section";

import TeamSection from "@/components/sections/homepage/team-section";
import AmenitiesSection from "@/components/sections/homepage/amineties-section";

export default function Home() {

  return (
    <div className="min-h-screen  text-white">
      {/*  Hero Section */}
      <HeroSection />
      {/* about us */}
      <AboutUsSection />
      {/* Rooms & Suites */}
      <RoomAndSuites />


      {/*. Amenities Section */}
      <AmenitiesSection />
    {/*team  member section */}
     

      <TeamSection/>


      {/* testimonials  */}
      <TestimonialsSection />
  


      {/* spoonser */}
      {/* <SpoonserSection /> */}
      {/*  blogs */}
      {/* <BlogsSection /> */}

    </div>
  );
}
