import { ChevronLeft, ChevronRight, MessageCircle, Quote, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
const testimonials = [
  {
    id: 1,
    name: "Marshell Jack",
    role: "Guest",
    rating: 4.8,
    image: "/manager.png",
    testimonial:
      "Perfect place for a business trip! The location was convenient, and the Wi-Fi was reliable. I had everything I needed, from a quiet workspace in the room to a great breakfast in the morning.",
  },
  {
    id: 2,
    name: "Michel Doe",
    role: "Guest",
    rating: 4.8,
    image: "/manager.png",
    testimonial:
      "The spa was amazing! After a long day exploring the city, it was a dream to relax in the sauna and get a massage. Five stars just for the spa experience alone! a quiet workspace in the room to a great breakfast in the morning.",
  },
];
const TestimonialsSection = () => {
  return (
    <section className="relative bg-[#191a1e] min-h-screen my-12">
      {/* Background Image */}
      <div className="absolute h-[70vh] inset-0">
        <Image
          src="/08d793fa28a68cda.jpg"
          alt="Luxury resort sunset view"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4 md:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto w-full">
          {/* Header */}
          <div className="mb-20">
      {/* Title Decoration */}
      <div className="flex items-center justify-center mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 mr-6"></div>
        <div className="flex items-center">
          <MessageCircle className="w-6 h-6 text-[#bf9310] mr-3" />
          <h2 className="text-[#bf9310] text-sm font-medium tracking-[0.2em] uppercase">
            Testimonials
          </h2>
          <MessageCircle className="w-6 h-6 text-[#bf9310] ml-3" />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 ml-6"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-snug text-center max-w-6xl mx-auto text-white">
        Hear from our valued
        <br />
        <span className="block">guests and their experiences</span>
      </h1>
    </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8"
              >
                {/* Profile and Rating */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-black">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-yellow-500 mb-6" />

                {/* Testimonial Text */}
                <p className="text-white text-lg leading-relaxed mb-6">
                  "{testimonial.testimonial}"
                </p>

                {/* Name and Role */}
                <div>
                  <h4 className="text-white font-medium text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <button className="w-12 h-12 rounded-full border border-gray-600 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 h-px bg-gray-600 max-w-md">
              <div className="h-full bg-yellow-500 w-2/3"></div>
            </div>

            <button className="w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-600 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile View All Button */}
          {/* <div className="flex justify-center mt-8 md:hidden">
              <Button
                variant="outline"
                className="border-white bg-tra text-white hover:bg-white hover:text-black"
              >
                VIEW ALL
              </Button>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
