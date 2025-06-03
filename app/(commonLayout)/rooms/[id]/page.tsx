import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Star,
  MapPin,
  Waves,
  Utensils,
  Users,
  Car,
  Dumbbell,
  Wifi,
  Shield,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"

export default function HotelRoomDetails() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
  

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Living Sustainability A Day In The Life At Royal Hotel.
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">The Best Scenic Stays Around The World</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Booking Form Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="bg-gray-800 border-gray-700 sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Check availability</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2 font-medium">Check In</label>
                    <Input type="date" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 font-medium">Check Out</label>
                    <Input type="date" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 font-medium">Adult</label>
                    <Select>
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue placeholder="Select adults" />
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
                    <label className="block text-sm mb-2 font-medium">Children</label>
                    <Select>
                      <SelectTrigger className="bg-gray-700 border-gray-600">
                        <SelectValue placeholder="Select children" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0 Children</SelectItem>
                        <SelectItem value="1">1 Child</SelectItem>
                        <SelectItem value="2">2 Children</SelectItem>
                        <SelectItem value="3">3 Children</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold mb-4 text-yellow-400">Extra Services</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Spa Services
                      </span>
                      <span className="text-green-400 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Gym
                      </span>
                      <span className="text-yellow-400 font-medium">$30</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Car Parking
                      </span>
                      <span className="text-yellow-400 font-medium">$15</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Laundry Service
                      </span>
                      <span className="text-green-400 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Breakfast
                      </span>
                      <span className="text-green-400 font-medium">Free</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Price</span>
                    <span className="text-yellow-400">$790</span>
                  </div>
                  <Button className="w-full mt-4 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
                    BOOK NOW
                  </Button>
                </div>
              </CardContent>
            </Card>

           
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Room Images */}
            <div className="mb-8">
              <div className="relative">
                <Image
                  src="/room1.jpg"
                  alt="Luxury Hotel Room"
                  width={800}
                  height={400}
                  unoptimized
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-lg">
                  $300.00/night
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2 mt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src="/placeholder.svg?height=100&width=150"
                    alt={`Room view ${i}`}
                    width={150}
                    height={100}
                    className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-yellow-400"
                  />
                ))}
              </div>
            </div>

            {/* Room Description */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">About The Royal Room</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Every Signature Room is luxurious, with panoramic views, stunning original architecture and the 24 hour
                personal concierge service provided by our dedicated team. Each room is individually designed and
                furnished to the highest standard, with beautiful fabrics, original artwork and antique furniture
                creating a unique and memorable experience.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Each room has a 55" flat screen television, Nespresso machine, complimentary WiFi, air conditioning and
                heating, plus, our maximum occupancy per room is 2 adults and 1 child. Each room has a private bathroom
                with luxury amenities, bathrobes and slippers provided. All our rooms are non-smoking and we provide a
                24-hour room service menu for your convenience.
              </p>
            </div>

            {/* Room Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Room Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Complimentary Breakfast</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Air Conditioning/Heating</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Flat Screen TV</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Coffee and Tea Station</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Room Service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Mini Bar</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Housekeeping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Free and Strong Wi-Fi</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Blackout Curtains</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Soundproofing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Bathrobes and slippers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Luxury amenities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Amenities */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Hotel Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Waves className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm">Swimming Pool</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Utensils className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm">Free Breakfast</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Users className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm">Animals & Pets Care</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Car className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm">Valet/Car Parking</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Dumbbell className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm">Free High-Speed WiFi</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Wifi className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm">Wellness & Spa</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm">WiFi Complimentary Rooms</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Car className="w-6 h-6 text-yellow-400" />
                  <span className="text-sm">Car Parking</span>
                </div>
              </div>
            </div>

            {/* Hotel Location */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Hotel Location</h3>
              <div className="bg-gray-800 rounded-lg p-8 h-64 flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">Interactive Map Would Be Here</p>
                  <p className="text-gray-500 text-sm mt-2">123 Royal Palace Street, Luxury District</p>
                </div>
              </div>
            </div>

            {/* Awesome Gallery */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Awesome Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="relative group">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt={`Gallery image ${i}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white hover:bg-white hover:text-black"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Rooms */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400">Related Rooms & Suits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Deluxe King Bed", price: "$300.00/night", rating: 4.5, reviews: 124 },
              { name: "Executive Deluxe", price: "$350.00/night", rating: 4.8, reviews: 89 },
              { name: "Family Executive", price: "$450.00/night", rating: 4.7, reviews: 156 },
            ].map((room, i) => (
              <Card
                key={i}
                className="bg-gray-800 border-gray-700 overflow-hidden hover:border-yellow-400 transition-colors"
              >
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt={room.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-lg text-sm font-bold">
                    {room.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-3">{room.name}</h4>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-4 h-4 ${j < Math.floor(room.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-400">
                      ({room.rating}) • {room.reviews} reviews
                    </span>
                  </div>
                  <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
                    VIEW DETAILS
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
