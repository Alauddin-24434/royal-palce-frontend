'use client';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
  Pencil,
  User,
  Mail,
  Phone,
  Shield,
  Camera,
  Save,
  X,
} from 'lucide-react';
import { selectCurrentUser, setUser } from '@/redux/features/auth/authSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useUpdateUserMutation } from '@/redux/features/auth/authApi';

import { useAppDispatch } from '@/redux/hooks';

const ProfilePage = () => {
  const userInfo = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [updateUser] = useUpdateUserMutation();

  const [editedUser, setEditedUser] = useState({
    name: userInfo?.name || '',
    phone: userInfo?.phone || '',
  });

  if (!userInfo) {
    return (
      <div className="min-h-screen bg-[#1e1f25] border border-slate-700 shadow-md flex items-center justify-center">
        <p className="text-center text-red-400 text-xl">User not found</p>
      </div>
    );
  }

  const handleInfoUpdate = async () => {
    try {
      const result = await updateUser({
        id: userInfo._id,
        body: editedUser,
      }).unwrap();
      const { accessToken, user } = result?.data;
      if ('data' in result) {
        dispatch(setUser({ user, token: accessToken }));
      }

      setIsEditing(false);
    } catch (error) {
      // console.error("❌ Failed to update user info", error);
    }
  };

  const handleImageUpdate = async () => {
    if (!profileImage) return;

    const formData = new FormData();
    formData.append('image', profileImage);

    try {
      const result = await updateUser({
        id: userInfo._id,
        body: formData,
      }).unwrap();
      const { accessToken, user } = result?.data;
      if ('data' in result) {
        dispatch(setUser({ user, token: accessToken }));
      }

      setProfileImage(null);
    } catch (error) {
      console.error('❌ Failed to upload image', error);
    }
  };

  const handleCancel = () => {
    setEditedUser({
      name: userInfo.name || '',
      phone: userInfo.phone || '',
    });
    setIsEditing(false);
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'receptionist':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default:
        return 'bg-main text-foreground border-text-foreground';
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            My Profile
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="bg-main border shadow-md">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <Avatar className="w-32 h-32 border-4 border-orange-500/30">
                      <AvatarImage
                        src={
                          userInfo.image ||
                          '/placeholder.svg?height=128&width=128'
                        }
                        alt={userInfo.name}
                      />
                      <AvatarFallback className="bg-main text-foreground  text-2xl">
                        {userInfo.name?.charAt(0).toUpperCase()}
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
                        const file = e.target.files?.[0];
                        if (file) setProfileImage(file);
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

                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {userInfo.name}
                  </h2>
                  <Badge className={`mb-4 ${getRoleBadgeColor(userInfo.role)}`}>
                    {userInfo.role.charAt(0).toUpperCase() +
                      userInfo.role.slice(1)}
                  </Badge>

                  <div className="space-y-2 text-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{userInfo.email}</span>
                    </div>
                    {userInfo.phone && (
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{userInfo.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-main border shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-foreground">
                  Profile Information
                </CardTitle>
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                    size="sm"
                    className="bg-slate-700/50 border-slate-600 text-foreground hover:bg-slate-700"
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
                      className="bg-slate-700/50 border-slate-600 text-foreground hover:bg-slate-700"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Full Name
                  </Label>
                  {isEditing ? (
                    <Input
                      value={editedUser.name}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, name: e.target.value })
                      }
                      className="bg-slate-700/50 border-slate-600 text-foreground placeholder:text-foreground focus:border-orange-500 focus:ring-orange-500/20"
                    />
                  ) : (
                    <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                      <User className="w-5 h-5 text-foreground" />
                      <span className="text-foreground">{userInfo.name}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Phone Number
                  </Label>
                  {isEditing ? (
                    <Input
                      type="tel"
                      value={editedUser.phone}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, phone: e.target.value })
                      }
                      placeholder="Enter phone number"
                      className="bg-slate-700/50 border-slate-600 text-foreground placeholder:text-foreground focus:border-orange-500 focus:ring-orange-500/20"
                    />
                  ) : (
                    <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                      <Phone className="w-5 h-5 text-foreground" />
                      <span className="text-foreground">
                        {userInfo.phone || 'Not provided'}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    Account Role
                  </Label>
                  <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                    <Shield className="w-5 h-5 text-foreground" />
                    <span className="text-foreground capitalize">
                      {userInfo.role}
                    </span>
                    <Badge
                      className={`ml-auto ${getRoleBadgeColor(userInfo.role)}`}
                    >
                      {userInfo.role === 'admin'
                        ? 'Administrator'
                        : userInfo.role === 'receptionist'
                          ? 'Receptionist'
                          : 'Guest'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
