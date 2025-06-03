import Image from "next/image"
import { Calendar, Check, ChevronDown, Phone, Star,} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Rooms() {

  const rooms= [
    {
      id: 1,
      roomNumber: "101",
      name: "Deluxe King Bed",
      price: "$190.00/night",
      image: "/room1.jpg",
      description: "A luxurious room with a king-sized bed and modern amenities.",
    },
    {
      id: 2,
      roomNumber: "102",
      name: "Executive Suite",
      price: "$250.00/night",
      image: "/room2.jpg",
      description: "An elegant suite with a separate living area and stunning views.",
    },
    {
      id: 3,
      roomNumber: "103",
      name: "Family Room",
      price: "$220.00/night",
      image: "/room3.jpg",
      description: "Spacious room perfect for families, with multiple beds and amenities.",
    },
    {
      id: 4,
      roomNumber: "104",
      name: "Luxury Suite",
      price: "$300.00/night",
      image: "/room1.jpg",
      description: "A lavish suite with premium furnishings and exclusive services.",
    },
    {
      id: 5,
      roomNumber: "105",
      name: "Standard Room",
      price: "$150.00/night",
      image: "/room2.jpg",
      description: "A comfortable room with essential amenities for a pleasant stay.",
    },
    {
      id: 6,
      roomNumber: "106",
      name: "Presidential Suite",
      price: "$500.00/night",
      image: "/room3.jpg",
      description: "The epitome of luxury with top-notch services and breathtaking views.",
    },
  ]
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
  
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-2">Royal Rooms & Suites</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <a href="#" className="hover:text-amber-500">
              HOME
            </a>
            <span>〉</span>
            <span className="text-amber-500">ROOMS & SUITES</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto fill-black">
            <path d="M0,96L1440,192L1440,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Room Categories */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="luxury" className="w-full max-w-2xl mx-auto">
            <TabsList className="grid grid-cols-4 bg-transparent">
              <TabsTrigger
                value="luxury"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black rounded-none border border-amber-500 text-white"
              >
                Luxury Room
              </TabsTrigger>
              <TabsTrigger
                value="suite"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black rounded-none border border-amber-500 text-white"
              >
                Suite Room
              </TabsTrigger>
              <TabsTrigger
                value="deluxe"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black rounded-none border border-amber-500 text-white"
              >
                Deluxe Room
              </TabsTrigger>
              <TabsTrigger
                value="twine"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-black rounded-none border border-amber-500 text-white"
              >
                Twine Rooms
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Room Listings */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Room  */}
          
          {
            rooms?.map((room)=>
                <div key={room.id} className="relative group overflow-hidden rounded-lg">
              <div className="absolute top-4 right-0 bg-amber-500 text-black font-bold py-1 px-4 z-10">
              {room?.price}
              </div>
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={room?.image}
                  alt="Deluxe King Bed"
                  width={480}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="text-amber-500 font-bold mb-1">{room?.roomNumber}</div>
                  <h3 className="text-xl font-serif mb-4">{room?.name}</h3>
                  <Button variant="outline" className="border-white text-white hover:bg-white bg-transparent hover:text-black">
                    VIEW DETAILS
                  </Button>
                </div>
              </div>
            </div>

            )
          }
           
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            <Button className="rounded-full w-8 h-8 p-0 bg-amber-500 text-black hover:bg-amber-600">1</Button>
            <Button variant="outline" className="rounded-full w-8 h-8 p-0 border-gray-700 text-white hover:bg-gray-800">
              2
            </Button>
            <Button variant="outline" className="rounded-full w-8 h-8 p-0 border-gray-700 text-white hover:bg-gray-800">
              3
            </Button>
            <Button variant="outline" className="rounded-full w-8 h-8 p-0 border-gray-700 text-white hover:bg-gray-800">
              4
            </Button>
            <Button variant="outline" className="rounded-full w-8 h-8 p-0 border-gray-700 text-white hover:bg-gray-800">
              5
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Form */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="uppercase text-amber-500 text-sm font-medium mb-2">ROOMS RESERVATION</div>
              <h2 className="text-3xl font-serif mb-6">Check Availability</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">CHECK - IN</label>
                  <div className="relative">
                    <Input type="text" placeholder="19 Dec 2024" className="bg-gray-800 border-gray-700 text-white" />
                    <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1">CHECK - OUT</label>
                  <div className="relative">
                    <Input type="text" placeholder="21 Dec 2024" className="bg-gray-800 border-gray-700 text-white" />
                    <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1">ADULT</label>
                  <div className="relative">
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white appearance-none">
                      <option>Adult (1)</option>
                      <option>Adult (2)</option>
                      <option>Adult (3)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1">CHILDREN</label>
                  <div className="relative">
                    <select className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white appearance-none">
                      <option>Children (0)</option>
                      <option>Children (1)</option>
                      <option>Children (2)</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium">
                  CHECK AVAILABILITY
                </Button>
              </div>
            </div>

            {/* Excellence Section */}
            <div className="flex flex-col justify-center">
              <div className="uppercase text-amber-500 text-sm font-medium mb-2">BOOKING ROOM</div>
              <h2 className="text-3xl font-serif mb-6">
                Excellence In Every
                <br />
                Moment Of Your Stay
              </h2>

              <div className="flex space-x-4 mb-8">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Award"
                  width={80}
                  height={80}
                  className="h-16 w-16"
                />
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Award"
                  width={80}
                  height={80}
                  className="h-16 w-16"
                />
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Award"
                  width={80}
                  height={80}
                  className="h-16 w-16"
                />
              </div>

              <div className="flex items-center mb-4">
                <div className="bg-amber-500 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="text-sm text-amber-500">Booking Now</div>
                  <div className="text-xl font-medium">+00123 456 789</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  )
}

