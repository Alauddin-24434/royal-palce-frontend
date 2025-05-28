"use client";

import { useState } from "react";
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
  ]

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
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">L</span>
            </div>
            <span className="text-2xl font-bold">ROYAl PLACE</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Rooms
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Amenities
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Gallery
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
            Book Now
          </Button>
        </div>
      </header>

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
        <div className="relative -mt-32 z-20 bg-gray-900 py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto rounded-lg shadow-lg">
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
          <div className="max-w-7xl mx-auto">
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
          <div className="max-w-7xl mx-auto w-full">
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


{/*  blogs */}

<section className="bg-black py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       

        {/* Blog Section */}
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-px bg-yellow-500 w-16 mr-4"></div>
                <h2 className="text-yellow-500 text-sm font-medium tracking-wider uppercase">Blog & News</h2>
              </div>
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-2xl">
                Room Refresh Service Morning
                <br />
                Wake-Up Call Tour
              </h1>
            </div>

            <Button className="bg-yellow-500 text-black hover:bg-yellow-600 hidden md:block">VIEW ALL</Button>
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
                  <h3 className="text-white text-xl font-medium mb-4 leading-tight">{post.title}</h3>

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
                <div >
             
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">{post.description}</p>

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
            <Button className="bg-yellow-500 text-black hover:bg-yellow-600">VIEW ALL</Button>
          </div>
        </div>
      </div>
    </section>


   

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">L</span>
                </div>
                <span className="text-2xl font-bold">LUXE RESORT</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Experience luxury like never before at our world-class resort
                destination where every moment becomes a treasured memory.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer group">
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-black" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer group">
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer group">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer group">
                  <Youtube className="w-5 h-5 text-gray-400 group-hover:text-black" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Amenities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Special Offers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Resort Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Spa & Wellness
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Fine Dining
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Event Planning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Concierge Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Water Sports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Airport Transfer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Contact Information</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 text-amber-400 flex-shrink-0" />
                  <span>123 Paradise Island, Luxury Bay, Maldives 20026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>reservations@luxeresort.com</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-3">Resort Hours</h4>
                <div className="text-gray-400 text-sm">
                  <div>Check-in: 3:00 PM</div>
                  <div>Check-out: 12:00 PM</div>
                  <div>Front Desk: 24/7</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p>&copy; 2024 Luxe Resort. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
