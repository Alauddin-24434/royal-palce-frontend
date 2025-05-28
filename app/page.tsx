"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Star,
  Users,
  Utensils,
  Waves,
  Dumbbell,
  SpadeIcon as Spa,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Wifi,
  Car,
  Coffee,
  Shield,
} from "lucide-react"

export default function LuxuryResortWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

  const testimonials = [
    {
      text: "The resort exceeded all our expectations. The service was impeccable and the views were breathtaking. Every detail was perfect.",
      author: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "A perfect blend of luxury and comfort. We had an amazing time and will definitely return. The staff made us feel like royalty.",
      author: "Michael Chen",
      location: "London, UK",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      text: "Outstanding facilities and world-class hospitality. This place is truly a paradise on earth. Unforgettable experience.",
      author: "Emma Rodriguez",
      location: "Barcelona, Spain",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

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
            <a href="#" className="hover:text-amber-400 transition-colors font-medium">
              Home
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors font-medium">
              Rooms
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors font-medium">
              Amenities
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors font-medium">
              Gallery
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors font-medium">
              Contact
            </a>
          </nav>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">Book Now</Button>
        </div>
      </header>


{/* Hero Section */}
<section className="relative h-screen flex items-center justify-center">
  {/* Background Image */}
  <Image src="/Hero-Banner.webp" alt="Luxury Resort" fill className="object-cover" priority />
  <div className="absolute inset-0 bg-black/70" />

  {/* Hero Content */}
  <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
  <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
      Discover The Perfect
      <br />
      <span className="">Blend of Luxury Resort</span>
    </h1>
    <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
      Experience unparalleled luxury and comfort in our world-class resort where every moment becomes a cherished memory.
    </p>
  </div>

  {/* Booking Form at Bottom */}
  <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-6">
    <Card className="bg-black/80 backdrop-blur-sm border-gray-800 max-w-5xl mx-auto">
      <CardContent className="px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Check In */}
          <div>
            <Label htmlFor="checkin" className="text-white text-sm font-medium mb-2 block">
              Check In
            </Label>
            <Input id="checkin" type="date" className="bg-gray-800 border-gray-700 text-white h-12" />
          </div>

          {/* Check Out */}
          <div>
            <Label htmlFor="checkout" className="text-white text-sm font-medium mb-2 block">
              Check Out
            </Label>
            <Input id="checkout" type="date" className="bg-gray-800 border-gray-700 text-white h-12" />
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

      {/* About Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                We're Dedicated To Create Memories,
                <br />
                <span className="text-amber-400">Of Joy & Delight For Every Guest</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Our luxury resort offers an unparalleled experience where every detail is crafted to perfection. From
                our world-class amenities to our exceptional service, we ensure that every moment of your stay is
                memorable and extraordinary. Discover the perfect blend of comfort, elegance, and natural beauty.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-2">250+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Luxury Rooms</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-2">15+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Happy Guests</div>
                </div>
              </div>
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/reception.avif"
                alt="Luxury Interior"
                width={700}
                height={600}
                unoptimized
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">5★</div>
                  <div className="text-xs text-black font-medium">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Suites */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Hotel Rooms & Suites</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our selection of luxury accommodations designed for ultimate comfort and elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Deluxe Ocean View",
                price: "$299",
                originalPrice: "$399",
                image: "/room1.jpg",
                features: ["Ocean View", "King Bed", "Private Balcony", "Mini Bar", "Free WiFi"],
                badge: "Popular",
                badgeColor: "bg-blue-500",
              },
              {
                title: "Presidential Suite",
                price: "$599",
                originalPrice: "$799",
                image: "/room2.jpg",
                features: ["2 Bedrooms", "Living Room", "Full Kitchen", "Butler Service", "Private Pool"],
                badge: "Luxury",
                badgeColor: "bg-purple-500",
              },
              {
                title: "Garden Villa",
                price: "$399",
                originalPrice: "$549",
                image: "/room3.jpg",
                features: ["Private Garden", "Outdoor Shower", "Terrace", "Pool Access", "Spa Services"],
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
                  <Badge className={`absolute top-4 left-4 ${room.badgeColor} text-white font-medium`}>
                    {room.badge}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-300">{room.title}</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-3xl font-bold text-amber-400">{room.price}</div>
                    <div className="text-lg text-gray-400 line-through">{room.originalPrice}</div>
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

      {/* Resort Amenities */}
      <section className="py-32 relative">
        <Image src="/resortHero.jpg" alt="Resort Amenities" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Resort Amenities & Views</h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in luxury with our world-class amenities and breathtaking views that create unforgettable
            moments
          </p>
        </div>
      </section>

      {/* Hotel Facilities */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Hotel Facilities</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience our premium facilities and services designed to exceed your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Spa,
                title: "Luxury Spa",
                description: "Rejuvenate your body and soul",
                image: "/spa.webp",
              },
              {
                icon: Utensils,
                title: "Fine Dining",
                description: "World-class culinary experiences",
                image: "/dining.webp",
              },
              {
                icon: Waves,
                title: "Infinity Pool",
                description: "Stunning ocean views",
                image: "/placeholder.svg?height=250&width=350",
              },
              {
                icon: Dumbbell,
                title: "Fitness Center",
                description: "State-of-the-art equipment",
                image: "/placeholder.svg?height=250&width=350",
              },
            ].map((facility, index) => (
              <Card
                key={index}
                className="bg-black border-gray-800 overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-300 p-0 rounded-none"
              >
                <div className="relative">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    width={350}
                    height={250}
                    unoptimized
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <facility.icon className="w-16 h-16 text-amber-400" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">{facility.title}</h3>
                  <p className="text-gray-400 text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Guests Say</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Read authentic reviews from our satisfied guests who experienced luxury at its finest
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400 mx-1" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl italic mb-8 leading-relaxed text-gray-200">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg">{testimonials[currentTestimonial].author}</div>
                    <div className="text-gray-400">{testimonials[currentTestimonial].location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-amber-400" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Check Availability */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Check Availability</h2>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Plan your perfect getaway with us. Check our availability and book your dream vacation today with our
                easy-to-use booking system and flexible options.
              </p>

              <Card className="bg-black border-gray-800">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="checkin2" className="text-white text-sm font-medium mb-2 block">
                        Check In
                      </Label>
                      <Input id="checkin2" type="date" className="bg-gray-800 border-gray-700 text-white h-12" />
                    </div>
                    <div>
                      <Label htmlFor="checkout2" className="text-white text-sm font-medium mb-2 block">
                        Check Out
                      </Label>
                      <Input id="checkout2" type="date" className="bg-gray-800 border-gray-700 text-white h-12" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <Label htmlFor="guests2" className="text-white text-sm font-medium mb-2 block">
                        Guests
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white h-12">
                          <SelectValue placeholder="2 Adults" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Adult</SelectItem>
                          <SelectItem value="2">2 Adults</SelectItem>
                          <SelectItem value="3">3 Adults</SelectItem>
                          <SelectItem value="4">4 Adults</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="rooms2" className="text-white text-sm font-medium mb-2 block">
                        Rooms
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white h-12">
                          <SelectValue placeholder="1 Room" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Room</SelectItem>
                          <SelectItem value="2">2 Rooms</SelectItem>
                          <SelectItem value="3">3 Rooms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold h-12 text-lg">
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-10 h-10 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Flexible Booking</h3>
                  <p className="text-gray-400">
                    Free cancellation up to 24 hours before check-in with full refund guarantee
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-10 h-10 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Group Bookings</h3>
                  <p className="text-gray-400">Special rates and exclusive packages for groups of 10 or more guests</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-10 h-10 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Best Rate Guarantee</h3>
                  <p className="text-gray-400">We guarantee the best rates when you book directly with us</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-10 h-10 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Secure Booking</h3>
                  <p className="text-gray-400">Your personal and payment information is always protected and secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Offers */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Best Offers at Our Resort</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Take advantage of our exclusive deals and packages designed to make your stay even more memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="bg-gray-900 border-gray-800 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=350&width=600"
                  alt="Summer Package"
                  width={600}
                  height={350}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-6 left-6 bg-red-500 text-white font-medium px-4 py-2">
                  Limited Time
                </Badge>
                <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-amber-400 font-bold">30% OFF</span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Summer Escape Package</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Enjoy 3 nights with daily breakfast, $100 spa credit, complimentary airport transfer, and exclusive
                  beach access.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold text-amber-400">From $899</div>
                  <div className="text-lg text-gray-400 line-through">$1,299</div>
                  <div className="text-sm text-gray-400">per person</div>
                </div>
                <ul className="space-y-2 mb-8 text-gray-300">
                  <li className="flex items-center">
                    <Wifi className="w-4 h-4 mr-2 text-amber-400" /> Free WiFi
                  </li>
                  <li className="flex items-center">
                    <Car className="w-4 h-4 mr-2 text-amber-400" /> Airport Transfer
                  </li>
                  <li className="flex items-center">
                    <Coffee className="w-4 h-4 mr-2 text-amber-400" /> Daily Breakfast
                  </li>
                </ul>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3">
                  Book Package
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=350&width=600"
                  alt="Romantic Getaway"
                  width={600}
                  height={350}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-6 left-6 bg-pink-500 text-white font-medium px-4 py-2">
                  Most Popular
                </Badge>
                <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-amber-400 font-bold">25% OFF</span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Romantic Getaway</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Perfect for couples with champagne welcome, couples massage, candlelit dinner, and rose petal turndown
                  service.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold text-amber-400">From $1,199</div>
                  <div className="text-lg text-gray-400 line-through">$1,599</div>
                  <div className="text-sm text-gray-400">per couple</div>
                </div>
                <ul className="space-y-2 mb-8 text-gray-300">
                  <li className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-amber-400" /> Champagne Welcome
                  </li>
                  <li className="flex items-center">
                    <Spa className="w-4 h-4 mr-2 text-amber-400" /> Couples Massage
                  </li>
                  <li className="flex items-center">
                    <Utensils className="w-4 h-4 mr-2 text-amber-400" /> Candlelit Dinner
                  </li>
                </ul>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3">
                  Book Package
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore More Stories From Our Guests</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover why guests from around the world choose our resort for their perfect vacation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                text: "The attention to detail was incredible. From the moment we arrived until we left, every staff member went above and beyond to make our stay perfect.",
                author: "James Wilson",
                location: "Sydney, Australia",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                text: "This resort redefined luxury for us. The spa treatments were divine, the food was exceptional, and the views were absolutely breathtaking.",
                author: "Maria Garcia",
                location: "Madrid, Spain",
                rating: 5,
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-black border-gray-800 p-8">
                <CardContent className="p-0">
                  <div className="flex justify-start mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic mb-6 text-gray-200 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-bold text-lg">{testimonial.author}</div>
                      <div className="text-gray-400">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Resort Gallery</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our beautiful resort through stunning images that capture the essence of luxury and natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
                onClick={() => setCurrentGalleryIndex(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-2xl">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated with Luxe Resort</h2>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, resort updates, and insider tips for the perfect luxury
            vacation
          </p>

          <div className="max-w-lg mx-auto">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-800 border-gray-700 text-white h-14 text-lg flex-1"
              />
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 h-14">Subscribe</Button>
            </div>
            <p className="text-gray-500 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
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
                Experience luxury like never before at our world-class resort destination where every moment becomes a
                treasured memory.
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
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Special Offers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Resort Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Spa & Wellness
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Fine Dining
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Event Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Concierge Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Water Sports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
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
                <a href="#" className="hover:text-amber-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-amber-400 transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-amber-400 transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
