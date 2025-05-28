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
  Bed,
  LuggageIcon,
  BedDouble,
  Lock,
  ArrowRight,
  Play,
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
{/* about us */}

   <section className="bg-black text-white py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
    
        <div className=" mb-16">
          <div className="flex items-center  mb-6">
            <div className="h-px bg-yellow-500 w-16 mr-4"></div>
            <h2 className="text-yellow-500 text-sm font-medium tracking-wider uppercase">About Us</h2>
            <div className="h-px bg-yellow-500 w-16 ml-4"></div>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-5xl font-light leading-tight ">
            We're Dedicated To Create Moments <br /> Of Joy & Delight For Every Guest
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
                <div className="text-3xl md:text-4xl font-light text-yellow-500 mb-2">290+</div>
                <div className="text-gray-400 text-sm">Luxury Rooms</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-yellow-500 mb-2">4.8+</div>
                <div className="text-gray-400 text-sm">Guest Rating</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-yellow-500 mb-2">128K+</div>
                <div className="text-gray-400 text-sm">Clients Happy</div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-300 leading-relaxed">
                All our Standard rooms have big windows to help you take a broad view of the cityscape and nature. We
                offer bigger bed and every bathroom has bathtub and shower, which brings relaxation to you after a long
                day.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Fast WiFi connection, satellite TV and international standard electric socket are standard throughout
                Hotel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
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
    

      {/* Best Offers */}
 

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
