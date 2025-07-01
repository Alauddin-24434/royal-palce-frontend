"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, Phone, MapPin, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentUser, logout} from "@/redux/features/auth/authSlice"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const user = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  const router = useRouter()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Amenities", href: "/amenities" },
    // { name: "Gallery", href: "/gallery" },
    // { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
  ]

  const handleLogout = () => {
    dispatch(logout())
    router.push("/")
  }

  return (
    <header className="bg-[#191a1e] sticky top-0 z-50">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between h-16">

          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Crown className="h-4 w-4  lg:h-6 lg:w-6 text-[#bf9310] hover:text-yellow-600 mr-2" />
              <span className=" text-sm  font-bold text-[#bf9310]  hover:text-yellow-600">ROYAL PALACE</span>
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <nav className="hidden md:flex space-x-10 mx-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-500 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side - Dashboard + Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {/* Dashboard Link with Avatar */}
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-2 border  rounded p-1 hover:text-yellow-500 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-yellow-500">
                    <Image
                      src={user?.image || "/default-avatar.png"}
                      alt={user?.name || "Profile"}
                      width={36}
                      height={36}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white font-medium hidden sm:inline">Dashboard</span>
                </Link>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className=" text-white bg-transparent border cursor-pointer font-semibold px-4 py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login">
                <Button className="bg-[#bf9310] hover:bg-yellow-600 text-black hidden lg:block font-semibold">
                  Login
                </Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
                   {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="bg-[#1a1a1a] border-yellow-500/20 text-white">
                <div className="flex flex-col space-y-6 mt-10 px-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-yellow-500 text-lg font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <hr className="border-yellow-500/30" />

                  {user ? (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-3 border border-yellow-500 rounded hover:bg-yellow-500/10 transition-all"
                      >
                        <Image
                          src={user.image || "/default-avatar.png"}
                          alt="Profile"
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-yellow-500 object-cover"
                        />
                        <span className="font-semibold text-white">Dashboard</span>
                      </Link>

                      <Button
                        onClick={() => {
                          handleLogout()
                          setIsOpen(false)
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded w-full"
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Link href="/login" className="w-full">
                      <Button
                        onClick={() => setIsOpen(false)}
                        className="bg-[#bf9310] hover:bg-yellow-600 text-black font-semibold w-full"
                      >
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
