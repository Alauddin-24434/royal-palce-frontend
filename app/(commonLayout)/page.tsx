"use client";


import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Star,
  Utensils,
  SpadeIcon as Spa,
  Phone,
  Mail,
  Car,
  Bed,
  LuggageIcon,
  ArrowRight,
  Play,
  Quote,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Calendar,
  Tag,
} from "lucide-react";

export default function LuxuryResortWebsite() {
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

  const blogPosts = [
    {
      id: 1,
      date: "22 DEC, 2024",
      category: "HOTEL ROOM",
      title: "Renovation of bathrooms throughout the resort",
      image: "/room1.jpg",
      description:
        "Ready to book your vacation? Our hotel booking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful and unforgettable experience without breaking the bank.",
      featured: false,
    },
    {
      id: 2,
      date: "22 DEC, 2024",
      category: "HOTEL ROOM",
      title: "Renovation of bathrooms throughout the resort",
      image: "/room2.jpg",
      description:
        "Ready to book your vacation? Our hotel booking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful and unforgettable experience without breaking the bank.",
      featured: true,
    },
  ];

  const featuresData = [
    {
      icon: <Bed />,
      title: "Serenity and Bliss",
      subtitle: "Your comfort zone away from home",
    },
    {
      icon: <LuggageIcon />,
      title: "Store Luggage",
      subtitle: "Hospitality Meets Home",
    },
    {
      icon: <Utensils />,
      title: "Room Services",
      subtitle: "Hospitality meets home",
    },
    {
      icon: <Car />,
      title: "Pick up & Drop",
      subtitle: "Experience elegance stay distinctive",
    },
  ];
  return (
    <div className="min-h-screen bg-black text-white">
    

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/Hero-Banner.webp"
          alt="Luxury Resort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
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
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-6">
          <Card className="bg-black/80 backdrop-blur-sm border-gray-800 max-w-5xl mx-auto">
            <CardContent className="px-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Check In */}
                <div>
                  <Label
                    htmlFor="checkin"
                    className="text-white text-sm font-medium mb-2 block"
                  >
                    Check In
                  </Label>
                  <Input
                    id="checkin"
                    type="date"
                    className="bg-gray-800 border-gray-700 text-white h-12"
                  />
                </div>

                {/* Check Out */}
                <div>
                  <Label
                    htmlFor="checkout"
                    className="text-white text-sm font-medium mb-2 block"
                  >
                    Check Out
                  </Label>
                  <Input
                    id="checkout"
                    type="date"
                    className="bg-gray-800 border-gray-700 text-white h-12"
                  />
                </div>

                {/* Button */}
                <div className="flex flex-col justify-end">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold text-lg h-12">
                    Check Availability
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* about us */}

      <section className="bg-black text-white py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className=" mb-16">
            <div className="flex items-center  mb-6">
              <div className="h-px bg-yellow-500 w-16 mr-4"></div>
              <h2 className="text-yellow-500 text-sm font-medium tracking-wider uppercase">
                About Us
              </h2>
              <div className="h-px bg-yellow-500 w-16 ml-4"></div>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-5xl font-light leading-tight ">
              We're Dedicated To Create Moments <br /> Of Joy & Delight For
              Every Guest
            </h1>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {featuresData?.map((data) => (
              <div key={data?.title} className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full border-2 border-yellow-500 flex items-center justify-center">
                  <span className="w-8 h-8 text-yellow-500">{data?.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{data?.title}</h3>
                  <p className="text-gray-400">{data?.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video/Image Section */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/reception.avif"
                  alt="Luxury bathroom interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />

                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div>
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl md:text-4xl font-light text-yellow-500 mb-2">
                    290+
                  </div>
                  <div className="text-gray-400 text-sm">Luxury Rooms</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-light text-yellow-500 mb-2">
                    4.8+
                  </div>
                  <div className="text-gray-400 text-sm">Guest Rating</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-light text-yellow-500 mb-2">
                    128K+
                  </div>
                  <div className="text-gray-400 text-sm">Clients Happy</div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-8">
                <p className="text-gray-300 leading-relaxed">
                  All our Standard rooms have big windows to help you take a
                  broad view of the cityscape and nature. We offer bigger bed
                  and every bathroom has bathtub and shower, which brings
                  relaxation to you after a long day.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Fast WiFi connection, satellite TV and international standard
                  electric socket are standard throughout Hotel. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <Button className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium">
                LEARN MORE
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Rooms & Suites */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hotel Rooms & Suites
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our selection of luxury accommodations designed for
              ultimate comfort and elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Deluxe Ocean View",
                price: "$299",
                originalPrice: "$399",
                image: "/room1.jpg",
                features: [
                  "Ocean View",
                  "King Bed",
                  "Private Balcony",
                  "Mini Bar",
                  "Free WiFi",
                ],
                badge: "Popular",
                badgeColor: "bg-blue-500",
              },
              {
                title: "Presidential Suite",
                price: "$599",
                originalPrice: "$799",
                image: "/room2.jpg",
                features: [
                  "2 Bedrooms",
                  "Living Room",
                  "Full Kitchen",
                  "Butler Service",
                  "Private Pool",
                ],
                badge: "Luxury",
                badgeColor: "bg-purple-500",
              },
              {
                title: "Garden Villa",
                price: "$399",
                originalPrice: "$549",
                image: "/room3.jpg",
                features: [
                  "Private Garden",
                  "Outdoor Shower",
                  "Terrace",
                  "Pool Access",
                  "Spa Services",
                ],
                badge: "Featured",
                badgeColor: "bg-amber-500",
              },
            ].map((room, index) => (
              <Card
                key={index}
                className="bg-gray-900  border-gray-800 p-0 rounded-none"
              >
                <div className="relative">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.title}
                    width={450}
                    height={350}
                    className="w-full h-72 "
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${room.badgeColor} text-white font-medium`}
                  >
                    {room.badge}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-300">
                    {room.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-3xl font-bold text-amber-400">
                      {room.price}
                    </div>
                    <div className="text-lg text-gray-400 line-through">
                      {room.originalPrice}
                    </div>
                    <div className="text-sm text-gray-400">/night</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3">
                    See Deatils
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className="relative min-h-screen ">
        {/* Hero Video Section */}
        <div className="relative h-[70vh] flex items-center justify-center">
          <Image
            src="/resortHero.jpg"
            alt="Luxury resort with ocean view"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 text-center text-white">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1"
                />
              ))}
            </div>
            <p className="text-sm font-medium mb-4 tracking-wider">
              Best Royal Resort
            </p>
            <h1 className="text-4xl md:text-5xl font-light mb-8">
              Resort Promotional Video
            </h1>

            <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300">
              <Play className="w-8 h-8 text-white ml-1" />
            </button>
          </div>
        </div>

        {/* Featured Amenities Section */}
        <div className="relative -mt-32 z-20 bg-gray-900 py-16 px-4 md:px-6 lg:px-8 container mx-auto rounded-lg shadow-lg">
          <div>
            <div className="flex items-center mb-8">
              <div className="h-px bg-yellow-500 w-16 mr-4"></div>
              <h2 className="text-yellow-500 text-sm font-medium tracking-wider uppercase">
                Featured Amenities
              </h2>
            </div>

            <h3 className="text-white text-3xl md:text-4xl font-light mb-12">
              Hotel Facilities
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { src: "/room1.jpg", title: "Wellness & Spa" },
                { src: "/room2.jpg", title: "Fitness Center" },
                { src: "/room3.jpg", title: "Infinity Pool" },
                { src: "/room1.jpg", title: "Gastronomy" },
              ].map(({ src, title }, idx) => (
                <div className="group cursor-pointer" key={idx}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                    <Image
                      src={src}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <h4 className="text-lg font-medium">{title}</h4>
                    <ArrowRight className="w-5 h-5 text-yellow-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Manager Section */}
        <div className="bg-black py-16 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="h-px bg-yellow-500 w-16 mr-4"></div>
                  <span className="text-yellow-500 text-sm font-medium tracking-wider uppercase">
                    Manager
                  </span>
                </div>

                <h2 className="text-white text-3xl md:text-4xl font-light mb-6">
                  The Royal In The Heart Of Switzerland
                </h2>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  Hotels & Resorts is a modern, upscale hospitality company that
                  is passionate about 'making moments' recognising that small
                  gestures make a big difference to our guests. We do ordinary
                  things in an extraordinary way - A philosophy that has defined
                  our brand's success.
                </p>

                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                >
                  EXPLORE MORE
                </Button>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/room1.jpg"
                    alt="Luxury hotel room interior"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute -bottom-8 -right-8 bg-black p-6 rounded-lg border border-gray-800">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/manager.png"
                        alt="Andrew Karlex"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Andrew Karlex</h4>
                      <p className="text-gray-400 text-sm">Manager</p>
                      <div className="text-yellow-500 text-lg font-script mt-1">
                        Andrew
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials  */}
      <section className="relative min-h-screen">
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
            <div className="flex items-center justify-between mb-16">
              <div>
                <div className="flex items-center mb-6">
                  <div className="h-px bg-yellow-500 w-16 mr-4"></div>
                  <h2 className="text-yellow-500 text-sm font-medium tracking-wider uppercase">
                    Testimonials
                  </h2>
                </div>
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-2xl">
                  Explore More, Worry Less
                  <br />
                  Book A Resort Now
                </h1>
              </div>

              <Button
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-yellow-400 hover:text-white hidden md:block rounded-none"
              >
                VIEW ALL
              </Button>
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

      {/* spoonser */}

      <div className="bg-gray-900">
        <div className="container mx-auto flex flex-wrap justify-around gap-8 py-12">
          <a
            className="flex items-center justify-center text-gray-400 hover:text-gray-200"
            href="https://ploi.io"
            target="_blank"
            title="Ploi"
          >
            <svg className="w-auto h-6 fill-current" viewBox="0 0 253 93.3">
              <path d="M25.7 66a11.4 11.4 0 01-9.5-4.7q-3.6-4.7-3.7-12.6T16.2 36a11.4 11.4 0 019.5-4.7 11.4 11.4 0 019.6 4.7Q39 40.7 39 48.7t-3.6 12.6a11.5 11.5 0 01-9.6 4.7zm3.8-45.1a18.9 18.9 0 00-10.2 2.7 18 18 0 00-6.7 7.5h-.3v-9.3H0v71.5h12.6V66.5h.3a17 17 0 006.6 7.2 19.4 19.4 0 0010.2 2.6q10.2 0 16.1-7.4t6-20.3q0-12.9-6-20.4T29.5 21zM59.2 75.5h12.6V2.5H59.2v73.1zM105.3 66.6a11.5 11.5 0 01-9.6-4.7Q92 57.2 92 48.7t3.6-13.3a12.1 12.1 0 0119.2 0q3.6 4.7 3.6 13.3t-3.6 13.2a11.5 11.5 0 01-9.6 4.7zm0 10q11.8 0 19-7.4t7-20.6q0-13-7.1-20.4t-19-7.5q-11.7 0-18.8 7.5t-7.1 20.4q0 13.2 7 20.6t19 7.4zM145 13.7a6.7 6.7 0 004.9-2 6.6 6.6 0 002-4.8 6.6 6.6 0 00-2-4.9 6.8 6.8 0 00-5-2 6.7 6.7 0 00-4.8 2 6.5 6.5 0 00-2 4.9 6.5 6.5 0 002 4.8 6.6 6.6 0 004.8 2zm-6.3 61.9h12.6V21.8h-12.7v53.8zM168.8 76a5.7 5.7 0 10-4.1-1.6 5.6 5.6 0 004 1.7zM191.5 13.4a5.3 5.3 0 004-1.6A5.3 5.3 0 00197 8a5.5 5.5 0 10-11 0 5.3 5.3 0 001.5 4 5.3 5.3 0 004 1.5zm-4.4 62.1h8.8V22.8H187v52.8zM228.6 68.7a13.8 13.8 0 01-11.2-5q-4.3-5.2-4.3-14.5t4.3-14.4a14.9 14.9 0 0122.4 0q4.2 5 4.2 14.4t-4.2 14.4a13.8 13.8 0 01-11.2 5.1zm0 7.8q10.9 0 17.6-7.4t6.8-20q0-12.5-6.8-19.9T228.7 22q-11 0-17.7 7.3t-6.7 20q0 12.6 6.7 20t17.7 7.3z"></path>
            </svg>
          </a>

          <a
            className="flex items-center justify-center text-gray-400 hover:text-gray-200"
            href="https://www.agiledrop.com/laravel?utm_source=filament"
            target="_blank"
            title="Agiledrop"
          >
            <svg className="w-auto h-9 mt-2 fill-current" viewBox="0 0 480 141">
              <path d="M125.517 73.6046C122.465 73.6046 119.514 73.039 116.739 71.9222C113.966 70.8074 111.492 69.2224 109.384 67.2063C107.22 65.1364 105.547 62.7432 104.412 60.091C103.275 57.443 102.698 54.6437 102.698 51.7802C102.698 48.8628 103.272 46.0387 104.412 43.3865C105.547 40.7344 107.22 38.3391 109.384 36.2713C111.494 34.2552 113.966 32.6701 116.739 31.5554C119.512 30.4427 122.467 29.875 125.517 29.875C128.565 29.875 131.518 30.4407 134.291 31.5554C137.062 32.6701 139.536 34.2552 141.646 36.2713C143.808 38.3391 145.485 40.7323 146.622 43.3865C147.76 46.0428 148.342 48.8649 148.342 51.7802V73.153C148.342 73.4099 148.123 73.6171 147.853 73.6171H142.309C142.04 73.6171 141.821 73.4099 141.821 73.153V67.7782C141.821 67.3493 141.269 67.1483 140.972 67.4694C140.27 68.2257 139.553 68.9012 138.767 69.4751C137.432 70.4614 136.033 71.2674 134.557 71.8828C133.084 72.4878 131.563 72.9354 130.006 73.2006C128.459 73.4679 126.953 73.6046 125.517 73.6046ZM125.517 36.0185C123.266 36.0185 121.121 36.4329 119.137 37.2534C117.15 38.0739 115.398 39.2052 113.925 40.6163C112.449 42.0273 111.266 43.716 110.411 45.6388C109.555 47.5616 109.12 49.6274 109.12 51.7823C109.12 53.9351 109.555 55.9885 110.411 57.8823C111.269 59.7802 112.449 61.4586 113.925 62.8634C115.4 64.2765 117.153 65.4078 119.137 66.2304C121.117 67.0488 123.264 67.4632 125.517 67.4632C127.768 67.4632 129.915 67.0488 131.893 66.2304C133.877 65.4078 135.632 64.2765 137.107 62.8634C138.583 61.4565 139.763 59.7802 140.623 57.8823C141.481 55.9843 141.915 53.931 141.915 51.7823C141.915 49.6295 141.481 47.5637 140.621 45.6388C139.761 43.7139 138.583 42.0252 137.107 40.6163C135.632 39.2073 133.877 38.0739 131.893 37.2534C129.911 36.4329 127.764 36.0185 125.517 36.0185Z"></path>
              <path d="M176.841 90.7336C173.799 90.7336 170.863 90.1716 168.119 89.081C162.53 86.5301 159.011 82.4102 158.003 81.1253C157.834 80.9101 157.886 80.6072 158.113 80.4547L162.532 77.4566C162.755 77.3041 163.053 77.3522 163.214 77.5674C163.908 78.4824 165.895 80.8704 168.933 82.6337C171.265 83.9374 173.946 84.5432 176.839 84.5432C179.087 84.5432 181.23 84.1233 183.212 83.296C185.194 82.4666 186.946 81.33 188.418 79.9052C189.889 78.4804 191.053 76.7923 191.912 74.8807C192.769 72.9649 193.183 70.8945 193.183 68.728V68.3038C193.183 67.886 192.672 67.6729 192.354 67.9591C190.281 69.8122 187.981 71.2308 185.674 72.1939C182.846 73.3702 179.877 73.9677 176.833 73.9677C173.786 73.9677 170.839 73.3973 168.071 72.2712C165.299 71.1472 162.831 69.549 160.727 67.5162C158.563 65.4291 156.895 63.0161 155.761 60.3419C154.625 57.6719 154.05 54.8494 154.05 51.9621C154.05 49.0205 154.625 46.1729 155.761 43.4987C156.895 40.8245 158.568 38.4094 160.727 36.3244C162.833 34.2916 165.304 32.6933 168.073 31.5693C170.843 30.4474 173.795 29.875 176.839 29.875C178.334 29.875 179.91 30.038 181.513 30.3576C183.114 30.6773 184.683 31.1411 186.178 31.726C187.68 32.3173 189.099 33.0924 190.406 34.0304C191.233 34.6259 191.995 35.2568 192.683 35.9441C192.964 36.2241 193.453 36.0862 193.525 35.6997L194.187 30.3806C194.23 30.1529 194.433 29.9857 194.671 29.9857H199.2C199.473 29.9857 199.694 30.2009 199.694 30.4642V68.7238C199.694 71.6591 199.086 74.5067 197.95 77.1851C196.814 79.8592 195.126 82.2493 192.964 84.2821C190.861 86.3608 188.381 87.9779 185.609 89.0768C182.842 90.1715 179.886 90.7336 176.841 90.7336ZM176.841 36.0695C174.595 36.0695 172.451 36.4873 170.471 37.3147C168.487 38.142 166.736 39.2827 165.263 40.7054C163.791 42.1282 162.608 43.8309 161.753 45.7697C160.896 47.7105 160.463 49.7914 160.463 51.9642C160.463 54.1349 160.896 56.2053 161.753 58.1148C162.61 60.0285 163.791 61.7208 165.263 63.1372C166.736 64.5621 168.487 65.7028 170.471 66.5322C172.449 67.3574 174.593 67.7753 176.841 67.7753C179.09 67.7753 181.234 67.3574 183.214 66.5322C185.196 65.7028 186.949 64.5621 188.42 63.1372C189.891 61.7187 191.073 60.0285 191.93 58.1148C192.787 56.2011 193.222 54.1307 193.222 51.9642C193.222 49.7935 192.787 47.7105 191.93 45.7697C191.073 43.8288 189.894 42.1261 188.42 40.7054C186.946 39.2827 185.194 38.142 183.214 37.3147C181.232 36.4873 179.09 36.0695 176.841 36.0695Z"></path>
              <path d="M211.896 73.1467V30.8021C211.896 30.5431 212.176 30.3314 212.512 30.3314H219.374C219.715 30.3314 219.99 30.5431 219.99 30.8021V73.1467C219.99 73.4036 219.715 73.6174 219.374 73.6174H212.512C212.173 73.6174 211.896 73.4036 211.896 73.1467ZM215.803 23.8241C214.468 23.8241 213.341 23.4788 212.45 22.7964C211.554 22.114 211.102 21.2528 211.102 20.2313C211.102 19.216 211.551 18.3445 212.442 17.6354C213.338 16.9222 214.471 16.5625 215.806 16.5625C217.137 16.5625 218.284 16.9201 219.215 17.6292C220.14 18.3404 220.611 19.216 220.611 20.2313C220.611 21.2528 220.14 22.1161 219.209 22.8005C218.276 23.4788 217.135 23.8241 215.803 23.8241Z"></path>
              <path d="M233.925 73.1507V17.0251C233.925 16.7701 234.183 16.5625 234.494 16.5625H240.966C241.28 16.5625 241.533 16.7701 241.533 17.0251V73.1528C241.533 73.4077 241.28 73.6174 240.966 73.6174H234.494C234.183 73.6153 233.925 73.4056 233.925 73.1507Z"></path>
              <path d="M272.947 73.6171C270.015 73.6171 267.182 73.0533 264.52 71.934C261.854 70.8188 259.481 69.2331 257.46 67.2142C255.38 65.1477 253.777 62.766 252.685 60.1398C251.595 57.5136 251.04 54.7049 251.04 51.7865C251.04 48.868 251.595 46.0428 252.685 43.3896C253.777 40.7364 255.382 38.3693 257.462 36.3483C259.481 34.2818 261.856 32.6691 264.52 31.554C267.18 30.4409 270.015 29.875 272.947 29.875C275.876 29.875 278.696 30.4388 281.333 31.554C283.97 32.6691 286.353 34.2818 288.433 36.3504C290.502 38.3651 292.076 40.7613 293.172 43.4704C294.262 46.1775 294.782 49.0276 294.782 51.944V52.2756H257.693C257.422 52.2756 257.208 52.5036 257.221 52.7752C257.321 54.5122 257.743 56.3922 258.477 58.009C259.327 59.8848 260.48 61.5327 261.892 62.9153C263.312 64.302 264.982 65.4213 266.864 66.24C268.74 67.0588 270.782 67.4713 272.947 67.4713C275.88 67.4713 278.592 66.7313 281.008 65.27C283.427 63.8086 285.33 61.7732 286.669 59.3625L286.761 59.1304H293.572L293.405 59.6278C292.288 62.4385 290.614 65.0046 288.433 67.179C286.353 69.1958 283.97 70.8002 281.333 71.9133C278.696 73.0326 275.876 73.6171 272.947 73.6171ZM286.879 46.0407C287.224 46.0407 287.451 45.6842 287.308 45.3712C286.141 42.8424 284.379 40.6245 282.052 38.9144C279.403 36.966 276.339 35.996 272.947 35.996C271.25 35.996 269.605 36.2654 268.06 36.7774C266.513 37.2914 265.078 38.0252 263.795 38.9455C262.507 39.87 261.359 40.9561 260.384 42.2371C259.646 43.1989 259.024 44.3099 258.518 45.3712C258.373 45.6821 258.602 46.0407 258.947 46.0407H286.879V46.0407Z"></path>
              <path d="M323.389 73.6174C320.328 73.6174 317.364 73.0559 314.579 71.9475C311.794 70.839 309.313 69.2678 307.198 67.2668C305.023 65.2123 303.347 62.8369 302.208 60.2046C301.069 57.5763 300.486 54.7732 300.486 51.8755C300.486 49.0334 301.069 46.257 302.208 43.6247C303.347 40.9923 305.028 38.6149 307.198 36.5625C309.313 34.5614 311.798 32.9882 314.579 31.8817C317.362 30.7774 320.328 30.2139 323.389 30.2139C326.448 30.2139 329.414 30.7753 332.197 31.8817C334.289 32.7126 337.598 35.0427 339.111 36.1799C339.435 36.4247 339.916 36.2067 339.916 35.8139V17.0273C339.916 16.7702 340.133 16.5625 340.405 16.5625H345.636C345.908 16.5625 346.13 16.7702 346.13 17.0273V51.8776C346.13 54.7732 345.632 57.5742 344.488 60.2066C343.351 62.8369 341.71 65.2184 339.542 67.2688C337.424 69.2719 334.963 70.8431 332.182 71.9495C329.392 73.0559 326.448 73.6174 323.389 73.6174ZM323.389 36.3116C321.132 36.3116 318.978 36.7229 316.986 37.5373C314.995 38.3517 313.233 39.4745 311.757 40.875C310.276 42.2756 309.089 43.9393 308.228 45.8231C307.367 47.7028 306.935 49.7408 306.935 51.8776C306.935 54.0164 307.367 56.0668 308.228 57.9753C309.089 59.8858 310.276 61.5619 311.757 62.9583C313.236 64.3609 314.995 65.4837 316.986 66.3002C318.973 67.1125 321.128 67.5238 323.389 67.5238C325.646 67.5238 327.803 67.1125 329.788 66.3002C331.78 65.4837 333.545 64.3609 335.024 62.9583C336.5 61.5619 337.685 59.8858 338.55 57.9753C339.409 56.0627 339.846 54.0143 339.846 51.8776C339.846 49.7449 339.409 47.7048 338.55 45.8231C337.685 43.9393 336.504 42.2756 335.024 40.875C333.543 39.4745 331.78 38.3517 329.788 37.5373C327.799 36.7229 325.646 36.3116 323.389 36.3116Z"></path>
              <path d="M355.644 73.1503V30.5999C355.644 30.3417 355.841 30.129 356.083 30.129H360.041C360.234 30.129 360.402 30.2591 360.46 30.4533L361.345 33.3797C361.437 33.6833 361.787 33.8031 362.025 33.609C363.354 32.5206 364.806 31.6614 366.365 31.0253C368.252 30.255 370.265 29.875 372.346 29.875C373.037 29.875 373.702 29.9184 374.325 29.9989C374.928 30.0774 375.618 30.1724 376.263 30.2777L376.564 30.319V36.7378L376.132 36.6139C374.891 36.2071 373.607 36.0005 372.371 36.0005C370.852 36.0005 369.394 36.3103 368.065 36.9175C366.734 37.5268 365.544 38.3776 364.549 39.4413C363.554 40.509 362.822 41.7729 362.254 43.1938C361.683 44.6147 361.457 46.1595 361.457 47.7849V73.1482C361.457 73.4064 361.26 73.6171 361.018 73.6171H356.083C355.841 73.6191 355.644 73.4085 355.644 73.1503Z"></path>
              <path d="M404.099 73.6171C401.178 73.6171 398.368 73.0512 395.743 71.9341C393.109 70.8189 390.738 69.2333 388.669 67.2208C386.653 65.1481 385.063 62.752 383.95 60.099C382.837 57.4501 382.267 54.6499 382.267 51.7854C382.267 48.8671 382.837 46.042 383.95 43.3889C385.063 40.7359 386.655 38.3399 388.665 36.2755C390.738 34.2546 393.117 32.6711 395.743 31.556C398.37 30.4429 401.178 29.875 404.099 29.875C407.017 29.875 409.84 30.4408 412.497 31.556C415.146 32.6711 417.542 34.2567 419.608 36.2713C421.631 38.344 423.215 40.7359 424.328 43.3889C425.443 46.042 426.009 48.8691 426.009 51.7875C426.009 54.652 425.445 57.4501 424.328 60.1031C423.215 62.752 421.629 65.1481 419.613 67.2166C417.546 69.2375 415.152 70.821 412.497 71.9361C409.842 73.0512 407.019 73.6171 404.099 73.6171ZM404.099 36.0185C401.951 36.0185 399.895 36.433 397.997 37.2538C396.098 38.0746 394.413 39.2063 393.008 40.6178C391.596 42.0293 390.464 43.7185 389.65 45.642C388.829 47.5675 388.41 49.6319 388.41 51.7875C388.41 53.941 388.827 55.9951 389.65 57.8895C390.466 59.7881 391.596 61.467 393.008 62.8722C394.423 64.2858 396.098 65.4175 397.997 66.2404C399.887 67.0591 401.947 67.4736 404.099 67.4736C406.254 67.4736 408.304 67.0591 410.196 66.2404C412.101 65.4175 413.795 64.2858 415.229 62.8722C416.667 61.4607 417.811 59.7839 418.632 57.8895C419.453 55.9909 419.868 53.9369 419.868 51.7875C419.868 49.634 419.453 47.5675 418.632 45.642C417.811 43.7206 416.669 42.0293 415.229 40.6178C413.797 39.2063 412.101 38.0746 410.196 37.2517C408.306 36.433 406.252 36.0185 404.099 36.0185Z"></path>
              <path d="M435.983 88.8296C435.727 88.8296 435.52 88.62 435.52 88.3647V51.8164C435.52 48.8942 436.066 46.0654 437.148 43.4089C438.241 40.7523 439.843 38.3531 441.918 36.2818C443.941 34.2625 446.311 32.6748 448.966 31.5582C451.625 30.4437 454.459 29.875 457.384 29.875C460.308 29.875 463.138 30.4416 465.795 31.5582C468.454 32.6748 470.83 34.2625 472.849 36.2818C474.922 38.3531 476.524 40.7502 477.617 43.4089C478.707 46.0696 479.262 48.8963 479.262 51.8164C479.262 54.6847 478.707 57.4824 477.617 60.141C476.528 62.7955 474.922 65.1988 472.849 67.268C470.828 69.2895 468.454 70.8751 465.795 71.9917C463.138 73.1083 460.304 73.6769 457.384 73.6769C454.455 73.6769 451.627 73.1103 448.966 71.9917C445.9 70.5866 443.648 68.7976 442.543 67.7931C442.244 67.5191 441.764 67.7308 441.764 68.1335V88.3668C441.764 88.6221 441.563 88.8317 441.305 88.8317H435.983V88.8296ZM457.384 36.0266C455.225 36.0266 453.169 36.4417 451.264 37.2635C449.361 38.0854 447.678 39.2186 446.268 40.6319C444.853 42.0453 443.719 43.7368 442.9 45.6628C442.076 47.5909 441.658 49.658 441.658 51.8164C441.658 53.9728 442.074 56.0296 442.9 57.9265C443.721 59.8276 444.853 61.5087 446.268 62.9158C447.685 64.3313 449.361 65.4645 451.264 66.2884C453.16 67.1082 455.221 67.5233 457.384 67.5233C459.542 67.5233 461.596 67.1082 463.497 66.2884C465.402 65.4645 467.083 64.3313 468.495 62.9158C469.906 61.5066 471.044 59.8276 471.867 57.9265C472.685 56.0254 473.109 53.9687 473.109 51.8164C473.109 49.6601 472.685 47.5909 471.867 45.6628C471.044 43.7347 469.906 42.0432 468.495 40.6319C467.08 39.2186 465.402 38.0854 463.497 37.2635C461.596 36.4417 459.538 36.0266 457.384 36.0266Z"></path>
              <path d="M73.8474 74.4609C73.6519 74.4609 73.4731 74.5557 73.3617 74.7062C71.9633 76.6477 70.3798 78.513 68.6134 80.2133C66.1278 82.6062 63.3815 84.7002 60.4081 86.4109C59.8823 86.7139 60.101 87.5012 60.7109 87.5012H81.5944C81.9245 87.5012 82.1916 87.2374 82.1916 86.9158V75.0504C82.1916 74.7248 81.9245 74.4609 81.5944 74.4609H73.8474Z"></path>
              <path d="M76.336 52.1238C76.336 43.857 71.5835 33.4631 60.6655 20.3466C53.1225 11.2842 45.6784 4.33438 45.3672 4.04171L41.1972 0.160761C40.968 -0.0535872 40.6063 -0.0535872 40.375 0.160761L36.205 4.04171C35.8917 4.33438 28.4496 11.2842 20.9046 20.3466C9.9886 33.4631 4.73144 44.9473 4.73144 53.2141C4.73144 58.7851 6.06045 64.9188 8.41986 69.7952C8.5187 69.9951 8.72898 70.1229 8.9624 70.1229H23.388C23.9011 70.1229 24.1745 69.5355 23.8381 69.1604C20.2064 65.0631 18.0342 58.9562 18.0342 53.2141C18.0342 50.9243 19.2896 43.5128 31.1518 29.2359C34.4428 25.2746 37.7569 21.4534 40.3623 18.7411C40.5958 18.4938 40.9932 18.4938 41.2287 18.737C43.8363 21.4101 47.1546 24.8665 50.4477 28.8278C62.3099 43.1067 63.5948 49.9061 63.5948 52.1939C63.5948 64.4571 52.1931 74.4264 39.8577 74.5068C39.8072 74.5068 0.59511 74.4738 0.59511 74.4738C0.264961 74.4738 0 74.7376 0 75.0612V86.9266C0 87.2523 0.264961 87.512 0.59511 87.512C10.6699 87.512 39.8093 87.512 39.8619 87.512C59.5846 87.4151 76.336 71.576 76.336 52.1238Z"></path>
              <path d="M121.644 104.8L118.004 123H115.404L117.016 114.94H106.564L104.952 123H102.352L105.992 104.8H108.592L107.032 112.6H117.484L119.044 104.8H121.644ZM125.532 116.89V117.046C125.532 118.329 125.896 119.308 126.624 119.984C127.352 120.643 128.444 120.972 129.9 120.972C130.749 120.972 131.546 120.833 132.292 120.556C133.037 120.261 133.661 119.871 134.164 119.386L135.23 121.18C134.554 121.804 133.73 122.289 132.76 122.636C131.789 122.983 130.766 123.156 129.692 123.156C128.34 123.156 127.17 122.913 126.182 122.428C125.194 121.943 124.431 121.249 123.894 120.348C123.356 119.447 123.088 118.389 123.088 117.176C123.088 115.633 123.417 114.247 124.076 113.016C124.752 111.785 125.679 110.823 126.858 110.13C128.054 109.437 129.388 109.09 130.862 109.09C132.734 109.09 134.224 109.627 135.334 110.702C136.46 111.759 137.024 113.207 137.024 115.044C137.024 115.599 136.963 116.214 136.842 116.89H125.532ZM130.758 111.17C129.527 111.17 128.47 111.517 127.586 112.21C126.702 112.903 126.104 113.857 125.792 115.07H134.684C134.753 113.839 134.424 112.886 133.696 112.21C132.985 111.517 132.006 111.17 130.758 111.17ZM142.856 103.708H145.352L141.504 123H139.008L142.856 103.708ZM155.916 109.09C157.095 109.09 158.143 109.333 159.062 109.818C159.981 110.286 160.7 110.971 161.22 111.872C161.74 112.756 162 113.805 162 115.018C162 116.578 161.662 117.973 160.986 119.204C160.31 120.435 159.374 121.405 158.178 122.116C156.999 122.809 155.673 123.156 154.2 123.156C153.021 123.156 152.007 122.948 151.158 122.532C150.309 122.099 149.659 121.475 149.208 120.66L147.752 128.044H145.256L149 109.22H151.392L151.054 110.936C152.337 109.705 153.957 109.09 155.916 109.09ZM154.096 120.972C155.119 120.972 156.037 120.729 156.852 120.244C157.667 119.741 158.308 119.048 158.776 118.164C159.244 117.28 159.478 116.275 159.478 115.148C159.478 113.917 159.123 112.964 158.412 112.288C157.701 111.612 156.687 111.274 155.37 111.274C154.347 111.274 153.42 111.525 152.588 112.028C151.773 112.513 151.132 113.198 150.664 114.082C150.213 114.966 149.988 115.971 149.988 117.098C149.988 118.311 150.343 119.265 151.054 119.958C151.782 120.634 152.796 120.972 154.096 120.972ZM166.723 109.22H169.219L166.489 123H163.993L166.723 109.22ZM168.699 106.568C168.248 106.568 167.875 106.421 167.581 106.126C167.286 105.831 167.139 105.476 167.139 105.06C167.139 104.575 167.303 104.167 167.633 103.838C167.979 103.491 168.413 103.318 168.933 103.318C169.383 103.318 169.756 103.465 170.051 103.76C170.363 104.037 170.519 104.375 170.519 104.774C170.519 105.311 170.345 105.745 169.999 106.074C169.669 106.403 169.236 106.568 168.699 106.568ZM181.03 109.09C182.608 109.09 183.83 109.489 184.696 110.286C185.58 111.083 186.022 112.21 186.022 113.666C186.022 114.169 185.97 114.706 185.866 115.278L184.332 123H181.836L183.37 115.278C183.457 114.81 183.5 114.429 183.5 114.134C183.5 113.233 183.232 112.539 182.694 112.054C182.157 111.569 181.36 111.326 180.302 111.326C178.95 111.326 177.832 111.699 176.948 112.444C176.082 113.172 175.501 114.264 175.206 115.72L173.75 123H171.254L173.984 109.22H176.376L176.038 110.988C177.286 109.723 178.95 109.09 181.03 109.09ZM204.94 109.22L202.574 121.128C202.088 123.589 201.17 125.383 199.818 126.51C198.483 127.637 196.654 128.2 194.332 128.2C193.032 128.2 191.844 128.027 190.77 127.68C189.695 127.351 188.785 126.874 188.04 126.25L189.418 124.326C189.972 124.829 190.692 125.227 191.576 125.522C192.477 125.834 193.456 125.99 194.514 125.99C196.108 125.99 197.339 125.626 198.206 124.898C199.09 124.17 199.688 123.043 200 121.518L200.208 120.53C198.89 121.795 197.226 122.428 195.216 122.428C194.002 122.428 192.928 122.203 191.992 121.752C191.073 121.301 190.354 120.651 189.834 119.802C189.331 118.953 189.08 117.956 189.08 116.812C189.08 115.373 189.409 114.065 190.068 112.886C190.744 111.707 191.68 110.78 192.876 110.104C194.072 109.428 195.424 109.09 196.932 109.09C198.11 109.09 199.15 109.315 200.052 109.766C200.97 110.199 201.646 110.858 202.08 111.742L202.574 109.22H204.94ZM195.71 120.244C196.75 120.244 197.677 120.019 198.492 119.568C199.324 119.1 199.965 118.459 200.416 117.644C200.884 116.812 201.118 115.876 201.118 114.836C201.118 113.727 200.754 112.86 200.026 112.236C199.315 111.595 198.31 111.274 197.01 111.274C195.97 111.274 195.034 111.508 194.202 111.976C193.387 112.427 192.746 113.068 192.278 113.9C191.827 114.715 191.602 115.633 191.602 116.656C191.602 117.783 191.966 118.667 192.694 119.308C193.422 119.932 194.427 120.244 195.71 120.244ZM223.607 109.09C224.786 109.09 225.835 109.333 226.753 109.818C227.672 110.286 228.391 110.971 228.911 111.872C229.431 112.756 229.691 113.805 229.691 115.018C229.691 116.578 229.353 117.973 228.677 119.204C228.001 120.435 227.065 121.405 225.869 122.116C224.691 122.809 223.365 123.156 221.891 123.156C220.678 123.156 219.638 122.931 218.771 122.48C217.922 122.029 217.281 121.371 216.847 120.504L216.327 123H213.961L217.809 103.708H220.305L218.875 110.806C220.158 109.662 221.735 109.09 223.607 109.09ZM221.787 120.972C222.81 120.972 223.729 120.729 224.543 120.244C225.358 119.741 225.999 119.048 226.467 118.164C226.935 117.28 227.169 116.275 227.169 115.148C227.169 113.917 226.814 112.964 226.103 112.288C225.393 111.612 224.379 111.274 223.061 111.274C222.039 111.274 221.111 111.525 220.279 112.028C219.465 112.513 218.823 113.198 218.355 114.082C217.905 114.966 217.679 115.971 217.679 117.098C217.679 118.311 218.035 119.265 218.745 119.958C219.473 120.634 220.487 120.972 221.787 120.972ZM247.258 109.22L244.528 123H242.136L242.474 121.232C241.85 121.873 241.113 122.359 240.264 122.688C239.432 123 238.522 123.156 237.534 123.156C236.009 123.156 234.804 122.749 233.92 121.934C233.036 121.119 232.594 119.984 232.594 118.528C232.594 118.043 232.646 117.514 232.75 116.942L234.284 109.22H236.78L235.246 116.968C235.159 117.436 235.116 117.826 235.116 118.138C235.116 119.039 235.376 119.733 235.896 120.218C236.433 120.686 237.222 120.92 238.262 120.92C239.579 120.92 240.671 120.547 241.538 119.802C242.422 119.057 243.011 117.965 243.306 116.526L244.762 109.22H247.258ZM253.622 123.156C252.478 123.156 251.386 123.009 250.346 122.714C249.323 122.419 248.526 122.038 247.954 121.57L249.072 119.594C249.609 120.027 250.302 120.374 251.152 120.634C252.018 120.877 252.92 120.998 253.856 120.998C255.034 120.998 255.927 120.825 256.534 120.478C257.158 120.114 257.47 119.611 257.47 118.97C257.47 118.45 257.218 118.077 256.716 117.852C256.23 117.627 255.468 117.401 254.428 117.176C253.457 116.968 252.66 116.76 252.036 116.552C251.429 116.327 250.909 115.98 250.476 115.512C250.042 115.027 249.826 114.377 249.826 113.562C249.826 112.661 250.077 111.872 250.58 111.196C251.1 110.52 251.828 110 252.764 109.636C253.717 109.272 254.818 109.09 256.066 109.09C256.984 109.09 257.877 109.203 258.744 109.428C259.61 109.653 260.321 109.957 260.876 110.338L259.888 112.314C259.35 111.95 258.726 111.681 258.016 111.508C257.305 111.317 256.577 111.222 255.832 111.222C254.705 111.222 253.838 111.413 253.232 111.794C252.625 112.158 252.322 112.652 252.322 113.276C252.322 113.831 252.573 114.229 253.076 114.472C253.578 114.697 254.358 114.923 255.416 115.148C256.369 115.356 257.149 115.564 257.756 115.772C258.362 115.98 258.874 116.318 259.29 116.786C259.723 117.254 259.94 117.887 259.94 118.684C259.94 120.088 259.359 121.189 258.198 121.986C257.054 122.766 255.528 123.156 253.622 123.156ZM276.975 109.22L267.199 124.508C266.315 125.895 265.474 126.857 264.677 127.394C263.88 127.931 262.935 128.2 261.843 128.2C261.167 128.2 260.508 128.087 259.867 127.862C259.226 127.654 258.732 127.359 258.385 126.978L259.685 125.132C260.309 125.756 261.089 126.068 262.025 126.068C262.614 126.068 263.134 125.912 263.585 125.6C264.036 125.288 264.504 124.759 264.989 124.014L265.691 122.922L262.363 109.22H264.859L267.511 120.244L274.453 109.22H276.975ZM287.535 104.8H290.135L286.937 120.738H296.817L296.375 123H283.895L287.535 104.8ZM314.521 109.22L311.791 123H309.399L309.737 121.31C309.113 121.899 308.385 122.359 307.553 122.688C306.738 123 305.845 123.156 304.875 123.156C303.696 123.156 302.647 122.922 301.729 122.454C300.81 121.969 300.091 121.275 299.571 120.374C299.051 119.473 298.791 118.415 298.791 117.202C298.791 115.642 299.129 114.247 299.805 113.016C300.481 111.785 301.408 110.823 302.587 110.13C303.783 109.437 305.117 109.09 306.591 109.09C307.769 109.09 308.775 109.298 309.607 109.714C310.456 110.13 311.106 110.745 311.557 111.56L312.025 109.22H314.521ZM305.421 120.972C306.443 120.972 307.362 120.729 308.177 120.244C309.009 119.741 309.65 119.048 310.101 118.164C310.569 117.28 310.803 116.275 310.803 115.148C310.803 113.917 310.447 112.964 309.737 112.288C309.026 111.612 308.012 111.274 306.695 111.274C305.672 111.274 304.753 111.525 303.939 112.028C303.124 112.513 302.483 113.198 302.015 114.082C301.547 114.966 301.313 115.971 301.313 117.098C301.313 118.311 301.668 119.265 302.379 119.958C303.107 120.634 304.121 120.972 305.421 120.972ZM321.271 111.274C321.878 110.511 322.623 109.957 323.507 109.61C324.391 109.263 325.466 109.09 326.731 109.09L326.263 111.508C326.107 111.491 325.891 111.482 325.613 111.482C322.753 111.482 321.02 113.025 320.413 116.11L319.035 123H316.539L319.269 109.22H321.661L321.271 111.274ZM342.603 109.22L339.873 123H337.481L337.819 121.31C337.195 121.899 336.467 122.359 335.635 122.688C334.82 123 333.927 123.156 332.957 123.156C331.778 123.156 330.729 122.922 329.811 122.454C328.892 121.969 328.173 121.275 327.653 120.374C327.133 119.473 326.873 118.415 326.873 117.202C326.873 115.642 327.211 114.247 327.887 113.016C328.563 111.785 329.49 110.823 330.669 110.13C331.865 109.437 333.199 109.09 334.673 109.09C335.851 109.09 336.857 109.298 337.689 109.714C338.538 110.13 339.188 110.745 339.639 111.56L340.107 109.22H342.603ZM333.503 120.972C334.525 120.972 335.444 120.729 336.259 120.244C337.091 119.741 337.732 119.048 338.183 118.164C338.651 117.28 338.885 116.275 338.885 115.148C338.885 113.917 338.529 112.964 337.819 112.288C337.108 111.612 336.094 111.274 334.777 111.274C333.754 111.274 332.835 111.525 332.021 112.028C331.206 112.513 330.565 113.198 330.097 114.082C329.629 114.966 329.395 115.971 329.395 117.098C329.395 118.311 329.75 119.265 330.461 119.958C331.189 120.634 332.203 120.972 333.503 120.972ZM359.545 109.22L350.783 123H348.235L344.933 109.22H347.429L350.003 120.27L357.023 109.22H359.545ZM361.182 116.89V117.046C361.182 118.329 361.546 119.308 362.274 119.984C363.002 120.643 364.094 120.972 365.55 120.972C366.399 120.972 367.197 120.833 367.942 120.556C368.687 120.261 369.311 119.871 369.814 119.386L370.88 121.18C370.204 121.804 369.381 122.289 368.41 122.636C367.439 122.983 366.417 123.156 365.342 123.156C363.99 123.156 362.82 122.913 361.832 122.428C360.844 121.943 360.081 121.249 359.544 120.348C359.007 119.447 358.738 118.389 358.738 117.176C358.738 115.633 359.067 114.247 359.726 113.016C360.402 111.785 361.329 110.823 362.508 110.13C363.704 109.437 365.039 109.09 366.512 109.09C368.384 109.09 369.875 109.627 370.984 110.702C372.111 111.759 372.674 113.207 372.674 115.044C372.674 115.599 372.613 116.214 372.492 116.89H361.182ZM366.408 111.17C365.177 111.17 364.12 111.517 363.236 112.21C362.352 112.903 361.754 113.857 361.442 115.07H370.334C370.403 113.839 370.074 112.886 369.346 112.21C368.635 111.517 367.656 111.17 366.408 111.17ZM378.507 103.708H381.003L377.155 123H374.659L378.507 103.708ZM392.595 118.606C392.543 118.866 392.517 119.109 392.517 119.334C392.517 119.889 392.664 120.313 392.959 120.608C393.271 120.903 393.73 121.05 394.337 121.05C395.065 121.05 395.723 120.833 396.313 120.4L396.833 122.298C396.001 122.87 394.935 123.156 393.635 123.156C392.543 123.156 391.659 122.853 390.983 122.246C390.324 121.622 389.995 120.773 389.995 119.698C389.995 119.334 390.029 118.987 390.099 118.658L391.581 111.274H389.241L389.631 109.22H391.997L392.595 106.204H395.091L394.493 109.22H398.445L398.029 111.274H394.077L392.595 118.606ZM401.629 116.89V117.046C401.629 118.329 401.993 119.308 402.721 119.984C403.449 120.643 404.541 120.972 405.997 120.972C406.847 120.972 407.644 120.833 408.389 120.556C409.135 120.261 409.759 119.871 410.261 119.386L411.327 121.18C410.651 121.804 409.828 122.289 408.857 122.636C407.887 122.983 406.864 123.156 405.789 123.156C404.437 123.156 403.267 122.913 402.279 122.428C401.291 121.943 400.529 121.249 399.991 120.348C399.454 119.447 399.185 118.389 399.185 117.176C399.185 115.633 399.515 114.247 400.173 113.016C400.849 111.785 401.777 110.823 402.955 110.13C404.151 109.437 405.486 109.09 406.959 109.09C408.831 109.09 410.322 109.627 411.431 110.702C412.558 111.759 413.121 113.207 413.121 115.044C413.121 115.599 413.061 116.214 412.939 116.89H401.629ZM406.855 111.17C405.625 111.17 404.567 111.517 403.683 112.21C402.799 112.903 402.201 113.857 401.889 115.07H410.781C410.851 113.839 410.521 112.886 409.793 112.21C409.083 111.517 408.103 111.17 406.855 111.17ZM430.81 109.22L428.08 123H425.688L426.026 121.31C425.402 121.899 424.674 122.359 423.842 122.688C423.027 123 422.134 123.156 421.164 123.156C419.985 123.156 418.936 122.922 418.018 122.454C417.099 121.969 416.38 121.275 415.86 120.374C415.34 119.473 415.08 118.415 415.08 117.202C415.08 115.642 415.418 114.247 416.094 113.016C416.77 111.785 417.697 110.823 418.876 110.13C420.072 109.437 421.406 109.09 422.88 109.09C424.058 109.09 425.064 109.298 425.896 109.714C426.745 110.13 427.395 110.745 427.846 111.56L428.314 109.22H430.81ZM421.71 120.972C422.732 120.972 423.651 120.729 424.466 120.244C425.298 119.741 425.939 119.048 426.39 118.164C426.858 117.28 427.092 116.275 427.092 115.148C427.092 113.917 426.736 112.964 426.026 112.288C425.315 111.612 424.301 111.274 422.984 111.274C421.961 111.274 421.042 111.525 420.228 112.028C419.413 112.513 418.772 113.198 418.304 114.082C417.836 114.966 417.602 115.971 417.602 117.098C417.602 118.311 417.957 119.265 418.668 119.958C419.396 120.634 420.41 120.972 421.71 120.972ZM452.432 109.09C453.992 109.09 455.206 109.489 456.072 110.286C456.956 111.066 457.398 112.184 457.398 113.64C457.398 114.039 457.338 114.585 457.216 115.278L455.682 123H453.186L454.72 115.278C454.807 114.793 454.85 114.394 454.85 114.082C454.85 113.181 454.599 112.496 454.096 112.028C453.594 111.56 452.831 111.326 451.808 111.326C450.526 111.326 449.468 111.69 448.636 112.418C447.822 113.129 447.267 114.203 446.972 115.642L445.49 123H442.994L444.554 115.278C444.641 114.81 444.684 114.42 444.684 114.108C444.684 113.207 444.424 112.522 443.904 112.054C443.402 111.569 442.639 111.326 441.616 111.326C440.334 111.326 439.276 111.69 438.444 112.418C437.63 113.146 437.075 114.247 436.78 115.72L435.324 123H432.828L435.558 109.22H437.95L437.612 110.936C438.826 109.705 440.42 109.09 442.396 109.09C443.471 109.09 444.39 109.298 445.152 109.714C445.915 110.13 446.47 110.737 446.816 111.534C448.22 109.905 450.092 109.09 452.432 109.09ZM464.643 123.156C463.499 123.156 462.407 123.009 461.367 122.714C460.344 122.419 459.547 122.038 458.975 121.57L460.093 119.594C460.63 120.027 461.324 120.374 462.173 120.634C463.04 120.877 463.941 120.998 464.877 120.998C466.056 120.998 466.948 120.825 467.555 120.478C468.179 120.114 468.491 119.611 468.491 118.97C468.491 118.45 468.24 118.077 467.737 117.852C467.252 117.627 466.489 117.401 465.449 117.176C464.478 116.968 463.681 116.76 463.057 116.552C462.45 116.327 461.93 115.98 461.497 115.512C461.064 115.027 460.847 114.377 460.847 113.562C460.847 112.661 461.098 111.872 461.601 111.196C462.121 110.52 462.849 110 463.785 109.636C464.738 109.272 465.839 109.09 467.087 109.09C468.006 109.09 468.898 109.203 469.765 109.428C470.632 109.653 471.342 109.957 471.897 110.338L470.909 112.314C470.372 111.95 469.748 111.681 469.037 111.508C468.326 111.317 467.598 111.222 466.853 111.222C465.726 111.222 464.86 111.413 464.253 111.794C463.646 112.158 463.343 112.652 463.343 113.276C463.343 113.831 463.594 114.229 464.097 114.472C464.6 114.697 465.38 114.923 466.437 115.148C467.39 115.356 468.17 115.564 468.777 115.772C469.384 115.98 469.895 116.318 470.311 116.786C470.744 117.254 470.961 117.887 470.961 118.684C470.961 120.088 470.38 121.189 469.219 121.986C468.075 122.766 466.55 123.156 464.643 123.156Z"></path>
            </svg>
          </a>

          <a
            className="flex items-center justify-center text-gray-400 hover:text-gray-200"
            href="https://codecourse.com"
            target="_blank"
            title="Codecourse"
          >
            <svg className="w-auto h-7 fill-current" viewBox="0 0 725 117">
              <path d="M110.276 31.3396C109.356 36.1361 106.794 40.4621 103.029 43.5732C99.2641 46.6843 94.5328 48.3859 89.6489 48.3853C88.5004 48.3788 87.3543 48.2791 86.222 48.087C87.4832 51.4287 88.1282 54.9715 88.1256 58.5433C88.1256 74.9116 74.8554 88.1806 58.4871 88.1806C54.5943 88.1857 50.7389 87.4215 47.1424 85.9318C43.5459 84.4422 40.2792 82.2565 37.5301 79.5003L17.1218 99.9075C22.5479 105.348 28.9957 109.662 36.0945 112.603C43.1934 115.543 50.8034 117.052 58.4871 117.042C90.7967 117.042 116.987 90.8505 116.987 58.5421C116.998 49.0635 114.694 39.7256 110.276 31.3396Z"></path>
              <path d="M58.4871 0.0421176C26.1787 0.0421176 -0.0128761 26.2326 -0.0128761 58.5421C-0.0229374 68.0203 2.28078 77.3576 6.69824 85.7434C7.61797 80.9468 10.1808 76.6206 13.9458 73.5095C17.7108 70.3984 22.4424 68.6969 27.3265 68.6977C28.4747 68.7046 29.6203 68.8048 30.7523 68.9972C29.4921 65.6556 28.8475 62.1134 28.8499 58.5421C28.8499 42.1738 42.1188 28.9048 58.4871 28.9048C62.3797 28.8999 66.2349 29.6642 69.8312 31.1538C73.4276 32.6434 76.694 34.8291 79.443 37.5851L99.8536 17.1756C94.4271 11.7355 87.9791 7.42131 80.8801 4.48099C73.7811 1.54066 66.171 0.0321427 58.4871 0.0421176Z"></path>
              <path d="M99.8537 17.1756C91.728 9.05814 78.9867 5.71428 69.333 5.71428C55.9635 5.71428 28.851 14.2377 28.851 58.5421C28.8499 42.1738 42.12 28.899 58.4871 28.899C62.3801 28.8949 66.2356 29.6601 69.8319 31.1507C73.4282 32.6414 76.6945 34.8281 79.443 37.5851C82.1495 40.2917 85.8203 41.8123 89.6479 41.8124C93.4756 41.8125 97.1465 40.2921 99.8531 37.5857C102.56 34.8792 104.08 31.2084 104.08 27.3808C104.081 23.5531 102.56 19.8822 99.8537 17.1756Z"></path>
              <path d="M17.1218 99.9075C25.2381 108.02 37.9829 111.365 47.6366 111.365C61.0073 111.365 88.1186 102.841 88.1186 58.5374C88.1186 74.9057 74.8484 88.1747 58.4801 88.1747C54.5873 88.1798 50.7319 87.4156 47.1354 85.926C43.5389 84.4363 40.2722 82.2506 37.5231 79.4945C34.8068 76.8346 31.1505 75.3541 27.3488 75.3746C23.5471 75.3951 19.9071 76.9149 17.2196 79.604C14.5322 82.293 13.0144 85.9339 12.996 89.7356C12.9777 93.5373 14.4604 97.1927 17.1218 99.9075Z"></path>
              <path d="M149 59.0227C149 43.8416 160.802 33.0464 175.356 33.0464C181.004 33.0031 186.52 34.7421 191.105 38.0119C191.942 38.599 192.625 39.3769 193.096 40.2801C193.567 41.1833 193.812 42.1855 193.811 43.2022C193.796 44.4078 193.443 45.5856 192.791 46.6036C192.139 47.6215 191.214 48.4395 190.12 48.9658C189.025 49.4922 187.805 49.7061 186.595 49.5836C185.385 49.4612 184.233 49.0072 183.268 48.2725C181.001 46.5452 178.216 45.6185 175.356 45.6399C168.729 45.6399 163.357 51.1998 163.357 59.0227C163.357 66.8456 168.729 72.3905 175.356 72.3905C178.218 72.4061 181.003 71.4724 183.268 69.7379C184.423 68.8811 185.827 68.4184 187.27 68.4191C188.644 68.4048 189.986 68.8244 191.104 69.6171C192.221 70.4098 193.055 71.5345 193.484 72.8282C193.913 74.1219 193.916 75.5175 193.492 76.8129C193.068 78.1083 192.239 79.2363 191.125 80.0335C186.534 83.3073 181.011 85.0465 175.356 84.999C160.802 84.999 149 74.1888 149 59.0227ZM198.291 59.0227C198.291 43.8416 210.093 33.0464 224.647 33.0464C239.201 33.0464 251.009 43.8566 251.009 59.0227C251.009 74.1888 239.206 84.999 224.647 84.999C210.088 84.999 198.291 74.1888 198.291 59.0227ZM236.651 59.0227C236.651 51.2198 231.279 45.6599 224.647 45.6599C218.015 45.6599 212.648 51.1998 212.648 59.0227C212.648 66.8456 218.02 72.3905 224.647 72.3905C231.274 72.3905 236.651 66.8106 236.651 59.0227ZM307.587 17.0111V77.4209C307.603 79.1541 306.97 80.8316 305.81 82.1283C304.65 83.4249 303.045 84.2483 301.307 84.4387C299.569 84.6291 297.822 84.1729 296.404 83.1587C294.986 82.1445 293.998 80.6445 293.633 78.9495C289.592 82.8369 284.18 85.0074 278.549 84.999C265.825 84.999 255.514 74.1888 255.514 59.0227C255.514 43.8566 265.825 33.0464 278.549 33.0464C284.091 33.0417 289.423 35.1485 293.441 38.9311V17.0111C293.441 15.1516 294.186 13.3683 295.513 12.0535C296.839 10.7387 298.638 10 300.514 10C302.39 10 304.189 10.7387 305.515 12.0535C306.842 13.3683 307.587 15.1516 307.587 17.0111ZM293.874 59.0227C293.874 51.2198 288.497 45.6599 281.87 45.6599C275.244 45.6599 269.872 51.1998 269.872 59.0227C269.872 66.8456 275.244 72.3905 281.87 72.3905C288.497 72.3905 293.874 66.8106 293.874 59.0227ZM313.589 59.3824C313.589 43.9864 324.434 33.0115 337.778 33.0115C352.136 33.0115 362.003 44.6408 362.003 59.1126C361.995 60.6522 361.371 62.1257 360.269 63.2102C359.166 64.2946 357.675 64.9013 356.122 64.8973H328.244C329.7 69.4682 333.248 72.1857 339.058 72.1857C342.636 72.1762 346.18 71.4983 349.505 70.1875C350.479 69.8124 351.529 69.6771 352.567 69.7932C353.605 69.9093 354.599 70.2732 355.464 70.8539C356.329 71.4345 357.039 72.2145 357.532 73.1269C358.026 74.0393 358.289 75.0568 358.299 76.0921C358.296 77.401 357.885 78.677 357.12 79.7443C356.356 80.8116 355.276 81.6178 354.031 82.0517C349.224 83.7628 344.165 84.6759 339.058 84.7542C323.869 84.999 313.589 74.5985 313.589 59.3824ZM347.051 53.3229C346.575 51.2224 345.408 49.3381 343.734 47.9664C342.061 46.5947 339.974 45.8132 337.803 45.7448C333.772 45.7448 329.327 48.6772 328.279 53.3229H347.051ZM366.095 59.0227C366.095 43.8416 377.897 33.0464 392.451 33.0464C398.099 33.0038 403.615 34.7428 408.2 38.0119C409.037 38.599 409.72 39.3769 410.191 40.2801C410.662 41.1833 410.907 42.1855 410.906 43.2022C410.903 44.4177 410.557 45.6082 409.905 46.6381C409.254 47.668 408.324 48.4961 407.221 49.028C406.119 49.5599 404.888 49.7744 403.668 49.647C402.449 49.5196 401.29 49.0555 400.323 48.3075C398.063 46.5837 395.288 45.6572 392.436 45.6749C385.809 45.6749 380.437 51.2348 380.437 59.0377C380.437 66.8406 385.809 72.4055 392.436 72.4055C395.288 72.4232 398.063 71.4967 400.323 69.7729C401.48 68.9167 402.885 68.4541 404.329 68.4541C405.703 68.4398 407.046 68.8594 408.163 69.6521C409.281 70.4448 410.114 71.5694 410.544 72.8631C410.973 74.1568 410.976 75.5525 410.552 76.8479C410.128 78.1433 409.299 79.2713 408.185 80.0685C403.599 83.3221 398.09 85.0486 392.451 84.999C377.897 84.999 366.095 74.1888 366.095 59.0227ZM415.386 59.0227C415.386 43.8416 427.188 33.0464 441.742 33.0464C456.296 33.0464 468.104 43.8566 468.104 59.0227C468.104 74.1888 456.301 84.999 441.742 84.999C427.183 84.999 415.386 74.1888 415.386 59.0227ZM453.746 59.0227C453.746 51.2198 448.374 45.6599 441.742 45.6599C435.11 45.6599 429.743 51.1998 429.743 59.0227C429.743 66.8456 435.115 72.3905 441.742 72.3905C448.369 72.3905 453.746 66.8106 453.746 59.0227ZM522.112 40.4796V77.5058C522.1 79.2431 521.428 80.9121 520.23 82.1802C519.032 83.4484 517.396 84.2226 515.648 84.3486C513.9 84.4746 512.168 83.9432 510.798 82.8602C509.427 81.7772 508.519 80.2221 508.253 78.5049C504.781 82.5762 499.58 84.999 492.963 84.999C481.287 84.999 473.677 77.5058 473.677 64.5177V40.4796C473.677 38.6487 474.411 36.8927 475.717 35.598C477.023 34.3033 478.795 33.576 480.642 33.576C482.489 33.576 484.261 34.3033 485.567 35.598C486.873 36.8927 487.607 38.6487 487.607 40.4796V62.1598C487.607 68.4741 492.323 72.3705 497.786 72.3705C503.572 72.3705 508.183 67.8446 508.183 61.7402V40.4796C508.183 38.6487 508.916 36.8927 510.223 35.598C511.529 34.3033 513.3 33.576 515.147 33.576C516.994 33.576 518.766 34.3033 520.072 35.598C521.378 36.8927 522.112 38.6487 522.112 40.4796ZM565.295 39.8502C565.286 41.6728 564.547 43.4173 563.241 44.7004C561.935 45.9836 560.169 46.7006 558.33 46.694C548.095 46.694 543.116 51.005 543.116 64.3728V77.5058C543.087 79.3232 542.342 81.057 541.039 82.3362C539.736 83.6153 537.98 84.338 536.147 84.3495C535.236 84.3535 534.334 84.1796 533.491 83.8378C532.648 83.496 531.881 82.993 531.234 82.3575C530.588 81.722 530.074 80.9664 529.721 80.134C529.369 79.3015 529.186 78.4085 529.182 77.5058V40.4796C529.194 38.7424 529.866 37.0734 531.064 35.8052C532.262 34.5371 533.898 33.7629 535.646 33.6368C537.394 33.5108 539.126 34.0423 540.496 35.1253C541.867 36.2083 542.775 37.7633 543.041 39.4806C546.518 35.4043 551.714 32.9865 558.33 32.9865C559.243 32.9825 560.147 33.1571 560.991 33.5001C561.835 33.8432 562.603 34.348 563.25 34.9856C563.897 35.6232 564.41 36.3811 564.761 37.2159C565.112 38.0507 565.294 38.9459 565.295 39.8502ZM588.774 84.8941C582.369 84.939 576.452 83.5603 571.408 80.6679C570.115 79.9154 569.164 78.6992 568.751 77.271C568.338 75.8427 568.495 74.3117 569.189 72.9948C569.883 71.6779 571.061 70.6759 572.48 70.1961C573.898 69.7163 575.449 69.7955 576.81 70.4173C580.338 71.9958 584.571 73.3346 588.693 73.3796C592.815 73.4245 595.537 72.2706 595.617 69.8378C595.713 62.2747 568.742 66.4459 569.054 48.7671C569.226 39.0859 577.485 32.8067 589.913 33.0215C595.612 33.1164 600.314 34.575 604.945 36.798C606.157 37.3742 607.132 38.3451 607.708 39.5485C608.284 40.7519 608.425 42.1148 608.109 43.4093C607.793 44.7037 607.038 45.8513 605.97 46.6602C604.903 47.469 603.587 47.8901 602.244 47.8529C601.44 47.8435 600.647 47.6736 599.911 47.3534C595.849 45.535 591.898 44.5359 589.167 44.5859C585.528 44.6309 583.119 46.3793 583.119 48.5822C582.883 55.9455 609.965 51.5795 609.647 69.4582C609.481 78.7147 602.088 84.7991 588.794 84.8891L588.774 84.8941ZM614.586 59.3824C614.586 43.9864 625.426 33.0115 638.775 33.0115C653.128 33.0115 663 44.6408 663 59.1126C662.992 60.6539 662.367 62.129 661.262 63.2137C660.158 64.2984 658.664 64.904 657.109 64.8973H629.261C630.722 69.4682 634.27 72.1857 640.08 72.1857C643.657 72.1762 647.199 71.4982 650.522 70.1875C651.496 69.8126 652.547 69.6775 653.585 69.7936C654.623 69.9097 655.618 70.2736 656.483 70.8541C657.348 71.4347 658.058 72.2145 658.552 73.1268C659.047 74.0391 659.311 75.0566 659.321 76.0921C659.318 77.4016 658.906 78.6781 658.14 79.7454C657.375 80.8128 656.294 81.6186 655.048 82.0517C650.243 83.7627 645.186 84.6758 640.08 84.7542C624.871 84.999 614.586 74.5985 614.586 59.3824ZM648.043 53.3229C647.568 51.2228 646.402 49.3387 644.729 47.9669C643.056 46.5951 640.971 45.8134 638.8 45.7448C634.769 45.7448 630.324 48.6772 629.271 53.3229H648.043Z"></path>
            </svg>
          </a>

          <a
            className="flex items-center justify-center text-gray-400 hover:text-gray-200"
            href="https://laradir.com"
            target="_blank"
            title="Laradir"
          >
            <svg className="w-auto h-8 fill-current" viewBox="0 0 627 227">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M369.6 33C369.6 14.7746 384.375 0 402.6 0H594C612.225 0 627 14.7746 627 33V193.05C627 211.275 612.225 226.05 594 226.05H402.6C384.375 226.05 369.6 211.275 369.6 193.05V33ZM418.717 170.61C425.247 174.676 432.639 176.708 440.893 176.708C447.3 176.708 453.09 175.353 458.264 172.643C461.346 171.029 464.057 169.065 466.396 166.751V174.86H490.42V41.2501H466.211V93.3721C463.872 91.0882 461.162 89.1758 458.08 87.6349C453.028 85.0477 447.3 83.7541 440.893 83.7541C432.516 83.7541 425.062 85.7869 418.532 89.8525C412.126 93.9181 407.013 99.4621 403.194 106.484C399.498 113.507 397.65 121.453 397.65 130.324C397.65 139.071 399.498 146.956 403.194 153.978C407.013 161 412.188 166.544 418.717 170.61ZM456.786 151.391C453.46 153.362 449.517 154.348 444.959 154.348C440.647 154.348 436.766 153.362 433.316 151.391C429.867 149.296 427.156 146.463 425.185 142.89C423.337 139.194 422.413 134.944 422.413 130.139C422.413 125.457 423.337 121.33 425.185 117.757C427.156 114.184 429.805 111.351 433.132 109.256C436.581 107.162 440.585 106.115 445.144 106.115C449.579 106.115 453.46 107.162 456.786 109.256C460.236 111.228 462.884 114.061 464.732 117.757C466.704 121.33 467.689 125.457 467.689 130.139C467.689 134.944 466.704 139.194 464.732 142.89C462.884 146.463 460.236 149.296 456.786 151.391ZM500.286 85.6021V174.86H524.68V85.6021H500.286ZM502.689 67.3069C505.276 69.8941 508.541 71.1877 512.483 71.1877C516.549 71.1877 519.813 69.8941 522.277 67.3069C524.865 64.5965 526.158 61.2701 526.158 57.3277C526.158 53.5085 524.865 50.2437 522.277 47.5333C519.813 44.8229 516.549 43.4677 512.483 43.4677C508.541 43.4677 505.276 44.8229 502.689 47.5333C500.101 50.2437 498.808 53.5085 498.808 57.3277C498.808 61.2701 500.101 64.5965 502.689 67.3069ZM534.575 174.86V85.6021H558.784V93.5848C558.845 93.5108 558.907 93.4371 558.969 93.3637C564.266 86.9573 571.905 83.7541 581.884 83.7541C586.196 83.7541 590.077 84.4933 593.526 85.9717C596.976 87.3269 600.118 89.6061 602.951 92.8093L587.798 110.18C586.443 108.702 584.779 107.593 582.808 106.854C580.96 106.115 578.804 105.745 576.34 105.745C571.166 105.745 566.915 107.408 563.589 110.735C560.386 113.938 558.784 118.866 558.784 125.519V174.86H534.575ZM0 44.5499V174.464H18.48H25.1328H84.6384V152.104H25.1328V44.5499H0ZM108.142 170.214C114.671 174.28 122.002 176.312 130.133 176.312C136.539 176.312 142.268 175.019 147.319 172.432C150.677 170.63 153.573 168.419 156.005 165.801V174.464H180.029V85.2059H156.005V93.787C153.573 91.1415 150.677 88.9587 147.319 87.2387C142.268 84.6515 136.539 83.3579 130.133 83.3579C122.002 83.3579 114.671 85.3907 108.142 89.4563C101.612 93.5219 96.4994 99.0659 92.8034 106.088C89.1074 113.111 87.2594 121.057 87.2594 129.928C87.2594 138.675 89.1074 146.56 92.8034 153.582C96.4994 160.604 101.612 166.148 108.142 170.214ZM151.015 147.299C146.827 151.734 141.344 153.952 134.568 153.952C130.133 153.952 126.191 152.966 122.741 150.995C119.415 148.9 116.766 146.067 114.795 142.494C112.947 138.798 112.023 134.548 112.023 129.743C112.023 125.061 112.947 120.934 114.795 117.361C116.766 113.665 119.415 110.832 122.741 108.86C126.191 106.766 130.133 105.719 134.568 105.719C139.127 105.719 143.069 106.766 146.395 108.86C149.845 110.832 152.494 113.665 154.342 117.361C156.313 120.934 157.299 125.061 157.299 129.743C157.299 136.888 155.204 142.74 151.015 147.299ZM189.896 174.464V85.2059H214.104V93.1887C214.166 93.1147 214.227 93.0409 214.289 92.9675C219.587 86.5611 227.225 83.3579 237.204 83.3579C241.516 83.3579 245.397 84.0971 248.847 85.5755C252.296 86.9307 255.438 89.2099 258.272 92.4131L243.118 109.784C241.763 108.306 240.1 107.197 238.128 106.458C236.28 105.719 234.124 105.349 231.66 105.349C226.486 105.349 222.236 107.012 218.909 110.339C215.706 113.542 214.104 118.47 214.104 125.123V174.464H189.896ZM272.987 170.214C279.517 174.28 286.847 176.312 294.978 176.312C301.385 176.312 307.114 175.019 312.165 172.432C315.523 170.63 318.418 168.419 320.85 165.801V174.464H344.874V85.2059H320.85V93.7871C318.418 91.1415 315.523 88.9587 312.165 87.2387C307.114 84.6515 301.385 83.3579 294.978 83.3579C286.847 83.3579 279.517 85.3907 272.987 89.4563C266.458 93.5219 261.345 99.0659 257.649 106.088C253.953 113.111 252.105 121.057 252.105 129.928C252.105 138.675 253.953 146.56 257.649 153.582C261.345 160.604 266.458 166.148 272.987 170.214ZM315.861 147.299C311.672 151.734 306.19 153.952 299.414 153.952C294.978 153.952 291.036 152.966 287.586 150.995C284.26 148.9 281.611 146.067 279.64 142.494C277.792 138.798 276.868 134.548 276.868 129.743C276.868 125.061 277.792 120.934 279.64 117.361C281.611 113.665 284.26 110.832 287.586 108.86C291.036 106.766 294.978 105.719 299.414 105.719C303.972 105.719 307.914 106.766 311.241 108.86C314.69 110.832 317.339 113.665 319.187 117.361C321.158 120.934 322.144 125.061 322.144 129.743C322.144 136.888 320.05 142.74 315.861 147.299Z"
              ></path>
            </svg>
          </a>

          <a
            className="flex items-center justify-center text-gray-400 hover:text-gray-200"
            href="https://uselocale.com"
            target="_blank"
            title="Locale"
          >
            <svg className="w-auto h-5 fill-current" viewBox="0 0 631 100">
              <path d="M139.61 7.05h-18.753v91.227h79.383V82.626h-60.63V7.05ZM253.819 99.969c26.367 0 44.415-12.831 44.415-36.519s-18.048-36.801-44.415-36.801c-26.508 0-44.697 13.113-44.697 36.801 0 23.688 18.189 36.519 44.697 36.519Zm0-14.1c-14.946 0-26.085-8.037-26.085-22.419 0-14.523 11.28-22.842 26.085-22.842 14.805 0 25.803 8.46 25.803 22.842 0 14.382-11.139 22.419-25.803 22.419ZM394.974 70.641h-16.779c-3.102 9.729-11.562 15.228-24.675 15.228-14.805 0-26.508-7.473-26.508-22.419 0-15.087 11.844-22.701 26.508-22.701 12.126 0 21.291 5.499 24.534 14.946h16.779c-1.692-18.189-16.638-29.046-41.313-29.046-26.085 0-45.12 12.831-45.12 36.801 0 23.97 19.035 36.519 45.12 36.519 24.816 0 40.044-10.857 41.454-29.328ZM442.568 99.828c18.753 0 29.046-11.421 32.853-24.111v4.512c0 8.319 1.269 18.048 1.269 18.048h17.061V28.2h-18.33v20.868c-3.807-13.254-13.677-22.419-31.866-22.419-21.855 0-38.493 14.523-38.493 36.66 0 21.855 16.638 36.519 37.506 36.519Zm5.922-14.1c-14.805 0-24.675-8.883-24.675-22.419 0-13.536 9.024-22.419 24.675-22.419 16.497 0 26.931 8.037 26.931 22.419 0 13.395-10.293 22.419-26.931 22.419ZM511.751 0v98.277h18.33V0h-18.33ZM612.493 75.012c-2.256 6.345-10.575 10.857-22.137 10.857-15.933 0-25.239-8.319-26.649-19.176h66.834c1.269-27.213-12.831-40.044-40.326-40.044-27.072 0-44.979 13.677-44.979 36.801 0 23.124 18.612 36.519 45.543 36.519 23.829 0 37.083-10.575 39.48-24.957h-17.766Zm-23.124-34.404c13.677 0 21.996 6.063 22.983 15.369h-47.658c2.397-8.601 11.139-15.369 24.675-15.369Z"></path>
              <path
                d="M50.436 68.277c5.106 0 9.246-4.093 9.246-9.141V22.988l15.419-7.397c3.211-1.54 2.101-6.314-1.468-6.314H9.247C4.14 9.277 0 13.369 0 18.417v40.719c0 5.048 4.14 9.14 9.247 9.14h41.189Z"
                opacity=".75"
              ></path>
              <path
                fillRule="evenodd"
                d="M50.436 69.277c5.648 0 10.246-4.53 10.246-10.14v-18.13h19.92c6.075 0 11 4.925 11 11v37.27c0 6.075-4.925 10.999-11 10.999h-37.27c-.619 0-1.226-.051-1.818-.149v.149h-20.16c-4.247 0-5.567-5.744-1.747-7.598l12.725-6.175V69.276h18.104Zm-18.104-1v-16.27c0-6.075 4.925-11 11-11h16.35v18.13c0 5.047-4.14 9.14-9.246 9.14H32.332Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          <a
            className="flex items-center justify-center text-gray-400 hover:text-gray-200"
            href="https://ego-trace.com"
            target="_blank"
            title="EgoTrace"
          >
            <svg
              className="w-auto h-12 -my-10 fill-current"
              viewBox="0 0 226.77165 70.86614"
            >
              <g>
                <g>
                  <polygon
                    className="d"
                    points="0 .00006 0 15.11804 7.5591 15.11804 7.5591 7.5591 15.1181 7.5591 15.1181 .00006 0 .00006"
                  ></polygon>
                  <rect
                    className="c"
                    x="15.11809"
                    y="15.11807"
                    width="7.55904"
                    height="7.55898"
                  ></rect>
                  <polygon
                    className="d"
                    points="22.67711 30.23603 22.67711 37.79497 15.1181 37.79497 15.1181 45.35392 30.23611 45.35392 30.23611 30.23603 22.67711 30.23603"
                  ></polygon>
                  <polygon
                    className="d"
                    points="22.67711 .00006 22.67711 7.5591 37.79521 7.5591 37.79521 15.11804 45.35422 15.11804 45.35422 .00006 22.67711 .00006"
                  ></polygon>
                </g>
                <g>
                  <g>
                    <polygon
                      className="b"
                      points="222.16536 13.46464 220.03936 13.46464 220.03936 15.94493 217.55907 15.94493 217.55907 18.07093 220.03936 18.07093 220.03936 20.55135 222.16536 20.55135 222.16536 18.07093 224.64565 18.07093 224.64565 15.94493 222.16536 15.94493 222.16536 13.46464"
                    ></polygon>
                    <path
                      className="c"
                      d="M215.43307,11.33864v11.33858h11.33858V11.33864h-11.33858Zm9.21258,6.73229h-2.48029v2.48042h-2.126v-2.48042h-2.48029v-2.126h2.48029v-2.48029h2.126v2.48029h2.48029v2.126Z"
                    ></path>
                  </g>
                  <g>
                    <path
                      className="d"
                      d="M74.36145,36.05141v-.0514c0-5.14282,4.0058-9.35488,9.48378-9.35488,3.25624,0,5.21997,.87835,7.10634,2.48083l-2.50668,3.02331c-1.39532-1.16281-2.63593-1.83455-4.72891-1.83455-2.89394,0-5.19402,2.55818-5.19402,5.63339v.0519c0,3.30777,2.27413,5.7367,5.47847,5.7367,1.44722,0,2.73924-.36182,3.7468-1.08546v-2.58413h-4.0053v-3.43703h7.8559v7.85621c-1.86092,1.57603-4.41901,2.8681-7.72665,2.8681-5.63317,0-9.50973-3.95356-9.50973-9.30298Z"
                    ></path>
                    <path
                      className="d"
                      d="M95.93,36.05141v-.0514c0-5.14282,4.0572-9.35488,9.63898-9.35488s9.58708,4.16067,9.58708,9.30298v.0519c0,5.14232-4.0572,9.35439-9.63898,9.35439-5.58127,0-9.58708-4.16017-9.58708-9.30298Zm15.06555,0v-.0514c0-3.10116-2.27413-5.68529-5.47847-5.68529s-5.42657,2.53223-5.42657,5.63339v.0519c0,3.10066,2.27413,5.6848,5.47847,5.6848s5.42657-2.53223,5.42657-5.63339Z"
                    ></path>
                    <path
                      className="d"
                      d="M123.59185,30.62462h-5.50392v-3.66959h14.9877v3.66959h-5.50392v14.41985h-3.97985v-14.41985Z"
                    ></path>
                    <path
                      className="d"
                      d="M137.12384,26.95503h8.26911c2.29958,0,4.08315,.64628,5.27187,1.83504,1.00706,1.0076,1.55002,2.42893,1.55002,4.13471v.0514c0,2.92-1.57597,4.75505-3.87655,5.60794l4.41951,6.46034h-4.65206l-3.87555-5.7886h-3.12699v5.7886h-3.97935V26.95503Zm8.01061,8.78646c1.93828,0,3.04914-1.03355,3.04914-2.55868v-.0514c0-1.70579-1.18872-2.58413-3.12699-2.58413h-3.9534v5.19422h4.03125Z"
                    ></path>
                    <path
                      className="d"
                      d="M163.80158,26.82578h3.66895l7.7521,18.21869h-4.16001l-1.65382-4.05736h-7.6493l-1.65382,4.05736h-4.0572l7.7531-18.21869Zm4.18596,10.64695l-2.40338-5.86595-2.40338,5.86595h4.80676Z"
                    ></path>
                    <path
                      className="d"
                      d="M177.35354,36.05141v-.0514c0-5.14282,3.87655-9.35488,9.43188-9.35488,3.41144,0,5.45252,1.13686,7.13229,2.79075l-2.53213,2.92c-1.39532-1.26612-2.81659-2.04116-4.62611-2.04116-3.04914,0-5.24492,2.53223-5.24492,5.63339v.0519c0,3.10066,2.14488,5.6848,5.24492,5.6848,2.06803,0,3.33359-.82694,4.75486-2.11901l2.53313,2.55868c-1.86142,1.98975-3.92845,3.22992-7.41675,3.22992-5.32377,0-9.27717-4.10876-9.27717-9.30298Z"
                    ></path>
                    <polygon
                      className="d"
                      points="60.6463 41.50416 60.6463 37.70529 68.45534 37.70529 68.45534 34.16501 60.6463 34.16501 60.6463 30.49536 70.33669 30.49536 70.33669 26.95495 60.57191 26.95495 56.69291 29.19466 56.69291 45.04445 66.58692 45.04445 70.46592 42.80474 70.46592 41.50416 60.6463 41.50416"
                    ></polygon>
                    <polygon
                      className="d"
                      points="202.77881 41.50416 202.77881 37.70529 210.58785 37.70529 210.58785 34.16501 202.77881 34.16501 202.77881 30.49536 212.4692 30.49536 212.4692 26.95495 202.70442 26.95495 198.82542 29.19466 198.82542 45.04445 208.71943 45.04445 212.59843 42.80474 212.59843 41.50416 202.77881 41.50416"
                    ></polygon>
                  </g>
                </g>
              </g>
              <g>
                <path
                  className="d"
                  d="M60.21693,60.05811h.73926l3.18848,7.0459h-.84961l-.81934-1.84912h-3.80762l-.83008,1.84912h-.80957l3.18848-7.0459Zm1.94922,4.47754l-1.58887-3.55811-1.59961,3.55811h3.18848Z"
                ></path>
                <path
                  className="d"
                  d="M64.80872,63.62598v-.02002c0-1.979,1.47949-3.61816,3.53809-3.61816,1.26953,0,2.0293,.44971,2.72852,1.10938l-.54004,.57959c-.58887-.55957-1.24902-.95947-2.19824-.95947-1.54883,0-2.70898,1.25977-2.70898,2.86865v.02002c0,1.61914,1.16992,2.88818,2.70898,2.88818,.95898,0,1.58887-.36963,2.25879-1.00928l.51953,.50977c-.72949,.73975-1.5293,1.22949-2.79883,1.22949-2.01855,0-3.50781-1.58936-3.50781-3.59814Z"
                ></path>
                <path
                  className="d"
                  d="M74.34779,60.8374h-2.34863v-.72949h5.49707v.72949h-2.34863v6.2666h-.7998v-6.2666Z"
                ></path>
                <path
                  className="d"
                  d="M79.04896,60.10791h.78906v6.99609h-.78906v-6.99609Z"
                ></path>
                <path
                  className="d"
                  d="M81.28822,60.10791h.87988l2.48828,6.02686,2.49902-6.02686h.84961l-3.00879,7.0459h-.69922l-3.00879-7.0459Z"
                ></path>
                <path
                  className="d"
                  d="M90.97669,60.05811h.73926l3.18848,7.0459h-.84961l-.81934-1.84912h-3.80762l-.83008,1.84912h-.80957l3.18848-7.0459Zm1.94922,4.47754l-1.58887-3.55811-1.59961,3.55811h3.18848Z"
                ></path>
                <path
                  className="d"
                  d="M97.23744,60.8374h-2.34863v-.72949h5.49707v.72949h-2.34863v6.2666h-.7998v-6.2666Z"
                ></path>
                <path
                  className="d"
                  d="M101.86829,60.10791h5.05762v.71973h-4.26855v2.38867h3.81836v.71924h-3.81836v2.44873h4.31836v.71973h-5.10742v-6.99609Z"
                ></path>
                <path
                  className="d"
                  d="M111.25892,63.62598v-.02002c0-1.979,1.47852-3.61816,3.53809-3.61816,1.26855,0,2.02832,.44971,2.72852,1.10938l-.54004,.57959c-.58984-.55957-1.24902-.95947-2.19922-.95947-1.54883,0-2.70801,1.25977-2.70801,2.86865v.02002c0,1.61914,1.16895,2.88818,2.70801,2.88818,.95996,0,1.58984-.36963,2.25879-1.00928l.52051,.50977c-.73047,.73975-1.5293,1.22949-2.79883,1.22949-2.01855,0-3.50781-1.58936-3.50781-3.59814Z"
                ></path>
                <path
                  className="d"
                  d="M118.43861,63.62598v-.02002c0-1.9292,1.44922-3.61816,3.57812-3.61816s3.55762,1.66943,3.55762,3.59814v.02002c0,1.92871-1.44922,3.61816-3.57812,3.61816s-3.55762-1.66943-3.55762-3.59814Zm6.31641,0v-.02002c0-1.58936-1.15918-2.88867-2.75879-2.88867-1.59863,0-2.73828,1.2793-2.73828,2.86865v.02002c0,1.58887,1.15918,2.88818,2.75879,2.88818,1.59863,0,2.73828-1.2793,2.73828-2.86816Z"
                ></path>
                <path
                  className="d"
                  d="M127.24818,60.10791h.73926l4.4082,5.60693v-5.60693h.76953v6.99609h-.62988l-4.51758-5.73682v5.73682h-.76953v-6.99609Z"
                ></path>
                <path
                  className="d"
                  d="M134.68861,66.08447l.48926-.57959c.72949,.65967,1.42969,.98926,2.39844,.98926,.93945,0,1.55957-.49951,1.55957-1.18896v-.02002c0-.6499-.34961-1.01953-1.81934-1.32959-1.6084-.34961-2.34863-.86914-2.34863-2.01855v-.02002c0-1.09961,.96973-1.90918,2.29883-1.90918,1.01953,0,1.74902,.29004,2.45898,.85938l-.45996,.60986c-.64941-.52979-1.29883-.75977-2.01855-.75977-.91016,0-1.48926,.5-1.48926,1.12939v.02002c0,.65967,.35938,1.02979,1.89844,1.35938,1.55957,.33984,2.2793,.90967,2.2793,1.979v.02002c0,1.19922-1,1.979-2.38867,1.979-1.10938,0-2.01953-.37012-2.8584-1.11963Z"
                ></path>
                <path
                  className="d"
                  d="M141.43763,64.17578v-4.06787h.79004v4.01758c0,1.50928,.80957,2.35889,2.13867,2.35889,1.28906,0,2.1084-.77979,2.1084-2.30859v-4.06787h.79004v4.00781c0,2.03857-1.16895,3.09814-2.91797,3.09814-1.72949,0-2.90918-1.05957-2.90918-3.03809Z"
                ></path>
                <path
                  className="d"
                  d="M149.13783,60.10791h.7998l2.54785,3.81787,2.54883-3.81787h.7998v6.99609h-.79004v-5.66699l-2.54785,3.74805h-.04004l-2.54883-3.73779v5.65674h-.76953v-6.99609Z"
                ></path>
                <path
                  className="d"
                  d="M157.81751,60.10791h5.05762v.71973h-4.26758v2.38867h3.81738v.71924h-3.81738v2.44873h4.31738v.71973h-5.10742v-6.99609Z"
                ></path>
                <path
                  className="d"
                  d="M164.51771,60.10791h3.00879c.85938,0,1.54883,.25977,1.98926,.69971,.33984,.33984,.53906,.82959,.53906,1.37891v.02002c0,1.15967-.79883,1.83936-1.89844,2.03906l2.14844,2.8584h-.96973l-2.02832-2.71826h-1.99902v2.71826h-.79004v-6.99609Zm2.93848,3.56787c1.0498,0,1.7998-.53955,1.7998-1.43896v-.02002c0-.85986-.66016-1.37939-1.78906-1.37939h-2.15918v2.83838h2.14844Z"
                ></path>
                <path
                  className="d"
                  d="M176.59681,60.8374h-2.34863v-.72949h5.49707v.72949h-2.34863v6.2666h-.7998v-6.2666Z"
                ></path>
                <path
                  className="d"
                  d="M181.22767,60.10791h3.00879c.85938,0,1.54883,.25977,1.98926,.69971,.33984,.33984,.53906,.82959,.53906,1.37891v.02002c0,1.15967-.79883,1.83936-1.89844,2.03906l2.14844,2.8584h-.96973l-2.02832-2.71826h-1.99902v2.71826h-.79004v-6.99609Zm2.93848,3.56787c1.0498,0,1.7998-.53955,1.7998-1.43896v-.02002c0-.85986-.66016-1.37939-1.78906-1.37939h-2.15918v2.83838h2.14844Z"
                ></path>
                <path
                  className="d"
                  d="M188.34779,64.17578v-4.06787h.79004v4.01758c0,1.50928,.80957,2.35889,2.13867,2.35889,1.28906,0,2.1084-.77979,2.1084-2.30859v-4.06787h.79004v4.00781c0,2.03857-1.16895,3.09814-2.91797,3.09814-1.72949,0-2.90918-1.05957-2.90918-3.03809Z"
                ></path>
                <path
                  className="d"
                  d="M195.58802,66.08447l.49023-.57959c.72949,.65967,1.42871,.98926,2.39844,.98926,.93945,0,1.55859-.49951,1.55859-1.18896v-.02002c0-.6499-.34961-1.01953-1.81836-1.32959-1.60938-.34961-2.34863-.86914-2.34863-2.01855v-.02002c0-1.09961,.96875-1.90918,2.29883-1.90918,1.01953,0,1.74902,.29004,2.45801,.85938l-.45898,.60986c-.65039-.52979-1.2998-.75977-2.01953-.75977-.90918,0-1.48926,.5-1.48926,1.12939v.02002c0,.65967,.36035,1.02979,1.89941,1.35938,1.55859,.33984,2.27832,.90967,2.27832,1.979v.02002c0,1.19922-.99902,1.979-2.38867,1.979-1.10938,0-2.01855-.37012-2.8584-1.11963Z"
                ></path>
                <path
                  className="d"
                  d="M204.14662,60.8374h-2.34863v-.72949h5.49707v.72949h-2.34863v6.2666h-.7998v-6.2666Z"
                ></path>
              </g>
            </svg>
          </a>

          <a
            className="flex items-center justify-center text-gray-400 hover:text-gray-200"
            href="https://flareapp.io"
            target="_blank"
            title="Flare"
          >
            <svg
              className="w-auto h-20 fill-current -my-2 lg:-my-12"
              viewBox="0 0 2599.5 1482.4"
            >
              <polygon points="641.4,740.9 427.6,617.5 427.6,370.6 642.7,494.5 	"></polygon>
              <polygon points="641.4,1235.2 427.6,1111.8 427.6,864.9 640.9,988.3 	"></polygon>
              <path d="M641.4,287.6l357.8,206.3l-144.2,83L497.6,370.6L641.4,287.6 M641.4,247.2L427.6,370.6L855,617.3l214.3-123.4L641.4,247.2z"></path>
              <path d="M641.4,781.9l143.7,83L640.9,948l-143.4-83L641.4,781.9 M641.4,741.5L427.6,864.9l213.3,123.4l214.3-123.4L641.4,741.5z"></path>
              <path d="M1172.8,551.7h200.9v47.6h-144.1v85.1h130.3V732h-130.3v133.2h-56.8V551.7z"></path>
              <path d="M1478.2,865.2h-55.4V551.7h55.4V865.2z"></path>
              <path d="M1524.2,799.2c0-53,43.6-66.6,89.3-71.5c41.5-4.4,58.2-5.2,58.2-21.1v-0.9c0-23.1-14.1-36.3-39.8-36.3c-27.1,0-42.7,13.8-48.2,29.9l-51.7-7.3c12.2-42.9,50.2-64.9,99.7-64.9c44.9,0,95.5,18.7,95.5,80.8v157.4h-53.3v-32.3h-1.8c-10.1,19.7-32.1,37-69,37C1558,869.9,1524.2,845.5,1524.2,799.2z M1671.7,780.8v-27.7c-7.2,5.8-36.3,9.5-50.8,11.5c-24.8,3.5-43.3,12.4-43.3,33.7c0,20.4,16.5,30.9,39.7,30.9C1650.6,829.2,1671.7,807,1671.7,780.8z"></path>
              <path d="M1782.9,630.1h53.7v39.2h2.4c8.6-27.2,31.1-42.6,58-42.6c6.1,0,14.8,0.6,19.9,1.5v51c-4.7-1.5-16.4-3.2-25.7-3.2c-30.5,0-53,21.1-53,51v138.2h-55.4V630.1z"></path>
              <path d="M1934,749c0-72.6,43.9-122,111.3-122c57.9,0,107.5,36.3,107.5,118.8v17h-163.8c0.5,40.3,24.2,63.8,60,63.8c23.9,0,42.3-10.4,49.8-30.3l51.7,5.8c-9.8,40.9-47.5,67.7-102.3,67.7C1977.3,869.8,1934,822.8,1934,749z M2099.6,725.4c-0.3-32-21.7-55.3-53.6-55.3c-33.1,0-55.3,25.3-56.9,55.3H2099.6z"></path>
            </svg>
          </a>

          <a
            className="flex items-center justify-center text-gray-400 hover:text-gray-200"
            href="https://ohdear.app"
            target="_blank"
            title="Oh Dear"
          >
            <svg className="w-auto h-10 fill-current" viewBox="0 0 237 142">
              <path d="m73.5402 65.5644h-10.9694v-65.5446856h10.9694v23.9173856c3.3822-3.9254 9.4154-7.2117 17.7338-7.2117 13.346 0 20.842 9.3114 20.842 22.7307v26.1083h-10.97v-24.2826c0-8.4897-4.3873-14.5147-13.2542-14.5147-9.324 0-14.3516 5.8424-14.3516 14.6973z"></path>
              <path d="m.136719 41.647c0-14.8799 12.157781-24.9216 27.423481-24.9216 15.1743 0 27.3321 10.0417 27.3321 24.9216s-12.1578 24.9216-27.3321 24.9216c-15.2657 0-27.423481-10.0417-27.423481-24.9216zm10.512281 0c "></path>
            </svg>
          </a>
        </div>
      </div>

      {/*  blogs */}

      <section className="bg-black py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Blog Section */}
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="h-px bg-yellow-500 w-16 mr-4"></div>
                  <h2 className="text-yellow-500 text-sm font-medium tracking-wider uppercase">
                    Blog & News
                  </h2>
                </div>
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-2xl">
                  Room Refresh Service Morning
                  <br />
                  Wake-Up Call Tour
                </h1>
              </div>

              <Button className="bg-yellow-500 text-black hover:bg-yellow-600 hidden md:block">
                VIEW ALL
              </Button>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="border border-gray-800  overflow-hidden transition-colors p-6"
                >
                  {/* Meta */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2 text-yellow-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-yellow-500 text-sm">
                      <Tag className="w-4 h-4" />
                      <span>{post.category}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl font-medium mb-4 leading-tight">
                    {post.title}
                  </h3>

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {post.description}
                    </p>

                    {/* Read More Button */}
                    <Button
                      variant={post.featured ? "default" : "outline"}
                      className={
                        post.featured
                          ? "bg-yellow-500 text-black hover:bg-yellow-600 rounded-none"
                          : "border-gray-600 bg-transparent text-white hover:bg-white rounded-none hover:text-black"
                      }
                    >
                      READ MORE
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile View All Button */}
            <div className="flex justify-center mt-8 md:hidden">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
                VIEW ALL
              </Button>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
