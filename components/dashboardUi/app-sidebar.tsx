"use client"

import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Bed,
  Calendar,
  CreditCard,
  Star,
  Users,
  Building,
  ChevronDown,
  LogOut,
  User,
  Crown,
  UserCheck,
} from "lucide-react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    roles: ["admin", "receptionist","guest"],
  },
  {
    title: "Rooms Management",
    url: "/dashboard/rooms",
    icon: Bed,
    roles: ["admin", "receptionist"],
  },
  {
    title: "Booked Room",
    url: "/dashboard/booked",
    icon: Bed,
    roles: ["guest"],
  },
  {
    title: "Payment",
    url: "/dashboard/payment",
    icon: Bed,
    roles: ["guest"],
  },
  {
    title: "Bookings Management",
    url: "/dashboard/bookings",
    icon: Calendar,
    roles: ["admin", "receptionist"],
  },
  {
    title: "Payments Management",
    url: "/dashboard/payments",
    icon: CreditCard,
    roles: ["admin", "receptionist"],
  },
  // {
  //   title: "Testimonials",
  //   url: "/dashboard/testimonials",
  //   icon: Star,
  //   roles: ["admin", "receptionist"],
  // },
  {
    title: "Users Management",
    url: "/dashboard/users",
    icon: Users,
    roles: ["admin"],
  },
  {
    title: "Service Management",
    url: "/dashboard/services",
    icon: Building,
    roles: ["admin", "receptionist"],
  },
]

const roleIcons = {
  admin: Crown,
  receptionist: UserCheck,
  user: User,
}

const roleColors = {
  admin: "bg-gradient-to-r from-amber-400 to-amber-600",
  receptionist: "bg-gradient-to-r from-blue-400 to-blue-600",
  user: "bg-gradient-to-r from-emerald-400 to-emerald-600",
}

export function AppSidebar() {
  const dispatch = useDispatch()
  const router = useRouter()
  const handleLogout = () => {
    dispatch(logout())
    router.push("/")
  }
  const user = useSelector(selectCurrentUser);
  console.log(user)
  const role = (user?.role === "admin" || user?.role === "receptionist" || user?.role === "guest")
    ? user.role
    : "guest";

  const [currentRole, setCurrentRole] = useState<"admin" | "receptionist" | "guest">(role);


  const filteredMenuItems = menuItems.filter((item) => item.roles.includes(currentRole))



  return (
    <Sidebar className="border-r border-slate-700">
      <SidebarHeader className="border-b border-slate-700 p-4">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Crown className="h-8 w-8 text-[#bf9310] mr-2" />
            <div className="text-2xl font-bold text-yellow-500">ROYAL PALACE</div>
          </Link>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        {/* Role Switcher */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 text-xs uppercase tracking-wider">
            Current Role
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full  h-12 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600"
                > <User />
                  <div className="flex items-center justify-center space-x-3">

                    <span className="text-white capitalize font-medium">{currentRole}</span>
                  </div>

                </Button>
              </DropdownMenuTrigger>

            </DropdownMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Navigation Menu */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 text-xs uppercase tracking-wider">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-slate-700/50">
                    <Link href={item.url} className="flex items-center space-x-3 text-slate-300 hover:text-white">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-slate-700 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start h-12 hover:bg-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-slate-300" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white">{user?.name}</p>
                  <p className="text-xs text-slate-400">{user?.email}</p>
                </div>
              </div>
              <ChevronDown className="h-4 w-4 text-slate-400 ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-slate-800 border-slate-700" align="end">
            <Link href="/dashboard/profile">
              <DropdownMenuItem className="hover:bg-slate-700">
                <User className="mr-2 h-4 w-4 text-slate-400" />


                <span className="text-white">Profile</span>

              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator className="bg-slate-700" />
            <DropdownMenuItem className="hover:bg-slate-700 text-red-400">
              <LogOut className="mr-2 h-4 w-4" />
              <button onClick={handleLogout}>
                <span>Logout</span>
              </button>

            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
