"use client"

import { useSelector } from "react-redux"
import { useState } from "react"
import {
  Pencil, User, Mail, Phone, Shield, Camera, Save, X
} from "lucide-react"
import { selectCurrentUser } from "@/redux/features/auth/authSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const ProfilePage = () => {
  const user = useSelector(selectCurrentUser)
  const [isEditing, setIsEditing] = useState(false)
  const [profileImage, setProfileImage] = useState<File | null>(null)

  const [editedUser, setEditedUser] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  })

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <p className="text-center text-red-400 text-xl">User not found</p>
      </div>
    )
  }

  const handleInfoUpdate = async () => {
    try {
      console.log("🔄 Updating user info:", editedUser)
      // TODO: Dispatch Redux or API call here
      setIsEditing(false)
    } catch (error) {
      console.error("❌ Failed to update user info", error)
    }
  }

  const handleImageUpdate = async () => {
    if (!profileImage) return

    const formData = new FormData()
    formData.append("image", profileImage)

    try {
      console.log("📤 Uploading profile image:", profileImage)
      // TODO: Dispatch Redux or API call here
      setProfileImage(null)
    } catch (error) {
      console.error("❌ Failed to upload image", error)
    }
  }

  const handleCancel = () => {
    setEditedUser({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
    })
    setIsEditing(false)
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      case "receptionist":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      default:
        return "bg-green-500/20 text-green-300 border-green-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-slate-300">Manage your account information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <Avatar className="w-32 h-32 border-4 border-orange-500/30">
                      <AvatarImage
                        src="/placeholder.svg?height=128&width=128"
                        alt={user.name}
                      />
                      <AvatarFallback className="bg-slate-700 text-white text-2xl">
                        {user.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <label htmlFor="image-upload">
                      <Button
                        asChild
                        size="sm"
                        className="absolute bottom-0 right-0 rounded-full w-10 h-10 bg-orange-500 hover:bg-orange-600 cursor-pointer"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) setProfileImage(file)
                      }}
                    />
                  </div>

                  {profileImage && (
                    <Button
                      onClick={handleImageUpdate}
                      size="sm"
                      className="mt-2 w-full bg-orange-500 hover:bg-orange-600"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Upload Image
                    </Button>
                  )}

                  <h2 className="text-2xl font-bold text-white mb-2">
                    {user.name}
                  </h2>
                  <Badge className={`mb-4 ${getRoleBadgeColor(user.role)}`}>
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </Badge>

                  <div className="space-y-2 text-slate-300">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                    {user.phone && (
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{user.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Info */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-white">Profile Information</CardTitle>
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                    size="sm"
                    className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700"
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      onClick={handleInfoUpdate}
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      size="sm"
                      className="bg-slate-700/50 border-slate-600 text-white hover:bg-slate-700"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label className="text-slate-200 font-medium">Full Name</Label>
                  {isEditing ? (
                    <Input
                      value={editedUser.name}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, name: e.target.value })
                      }
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
                    />
                  ) : (
                    <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                      <User className="w-5 h-5 text-slate-400" />
                      <span className="text-white">{user.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label className="text-slate-200 font-medium">Email Address</Label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={editedUser.email}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, email: e.target.value })
                      }
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
                    />
                  ) : (
                    <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                      <Mail className="w-5 h-5 text-slate-400" />
                      <span className="text-white">{user.email}</span>
                    </div>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label className="text-slate-200 font-medium">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      type="tel"
                      value={editedUser.phone}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, phone: e.target.value })
                      }
                      placeholder="Enter phone number"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
                    />
                  ) : (
                    <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                      <Phone className="w-5 h-5 text-slate-400" />
                      <span className="text-white">{user.phone || "Not provided"}</span>
                    </div>
                  )}
                </div>

                {/* Role Field */}
                <div className="space-y-2">
                  <Label className="text-slate-200 font-medium">Account Role</Label>
                  <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                    <Shield className="w-5 h-5 text-slate-400" />
                    <span className="text-white capitalize">{user.role}</span>
                    <Badge className={`ml-auto ${getRoleBadgeColor(user.role)}`}>
                      {user.role === "admin"
                        ? "Administrator"
                        : user.role === "receptionist"
                          ? "Receptionist"
                          : "Guest"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
