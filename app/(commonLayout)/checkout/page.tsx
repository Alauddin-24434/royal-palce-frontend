"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { differenceInDays } from "date-fns";
import { Crown, Check, Award, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  clearCart,
  makeSelectCartItemsByUser,
  removeCartItem,
} from "@/redux/features/cart/cartSlice";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useBookingInitiateMutation } from "@/redux/features/booking/bookingApi";
import toast, { Toaster } from "react-hot-toast";
import PrivateRoute from "@/components/PrivateRoute";

export default function RoyalCheckoutPage() {
  const [bookingInitiate] = useBookingInitiateMutation();
  const user = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const selectCartByUser = useMemo(() => makeSelectCartItemsByUser(user?._id || ""), [user?._id]);
  const cartItems = useAppSelector(selectCartByUser);

  const cartSummary = cartItems.map((item) => {
    const nights = differenceInDays(new Date(item.room.checkOutDate), new Date(item.room.checkInDate));
    const price = item?.room?.price ?? 0;
    const subtotal = price * nights;
    return { ...item, nights, subtotal };
  });

  const totalAmount = cartSummary.reduce((sum, item) => sum + item.subtotal, 0);

  const bookingData = {
    userId: user?._id,
    rooms: cartItems?.map((item) => item.room),
    totalAmount,
    name,
    email,
    phone,
    address,
    city,
  };

  const handleRemove = (roomId: string) => {
    dispatch(removeCartItem(roomId));
  };

  const handleClearCart = () => {
    toast(
      (t) => (
        <div className="flex flex-col gap-2">
          <p>Are you sure you want to clear the cart?</p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                dispatch(clearCart());
                toast.dismiss(t.id);
                toast.success("Cart cleared!");
              }}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Confirm
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-500 text-white px-3 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: 8000,
        style: {
          minWidth: "250px",
        },
      }
    );
  };

  const handleSubmit = async () => {
    if (!name || !email || !phone || !address || !city) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    try {
      const response = await bookingInitiate(bookingData).unwrap();

      if (response?.success && response?.payment_url) {
        window.location.href = response.payment_url;
      } else {
        toast.error("Payment initiation failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
      toast.error("Unexpected error during payment.");
    }
  };

  return (
    <PrivateRoute>
      <div className="min-h-screen text-white bg-black">
        {/* ====================== Title Section ====================== */}
        <div className="flex items-center justify-center py-6 sm:py-10 px-4 text-center flex-wrap">
          <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-24 sm:w-32 mr-4" />
          <div className="flex items-center justify-center">
            <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-[#bf9310] mr-2" />
            <h2 className="text-[#bf9310] text-sm sm:text-base font-medium tracking-[0.2em] uppercase">
              Hotel Checkout Page
            </h2>
            <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-[#bf9310] ml-2" />
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-24 sm:w-32 ml-4" />
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="mb-6 flex justify-end">
            <Button variant="destructive" onClick={handleClearCart} size="sm">
              Clear Cart
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-8">
              {cartSummary?.map((cart, index) => (
                <Card key={index} className="bg-[#191a1e]">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative w-full sm:w-28 h-28 rounded-xl overflow-hidden border-2 border-yellow-400/30 flex-shrink-0">
                        <Image src={cart?.room.image} alt="Room" fill className="object-cover" />
                        <div className="absolute top-2 right-2">
                          <Crown className="w-4 h-4 text-yellow-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-yellow-400">{cart?.room?.name}</h3>
                        <p className="text-sm text-purple-200">
                          ${cart.room.price} × {cart.nights} nights ={" "}
                          <span className="text-yellow-400 font-bold">${cart.subtotal.toFixed(2)}</span>
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                      <div>
                        <span className="text-purple-300">Check-in</span>
                        <p className="font-semibold text-yellow-400">{cart?.room?.checkInDate}</p>
                      </div>
                      <div>
                        <span className="text-purple-300">Check-out</span>
                        <p className="font-semibold text-yellow-400">{cart?.room?.checkOutDate}</p>
                      </div>
                      <Button
                        onClick={() => handleRemove(cart?.room.roomId)}
                        variant="destructive"
                        className="col-span-1 sm:col-span-2"
                        size="sm"
                      >
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Guest Info */}
              <Card className="bg-[#191a1e]">
                <CardHeader>
                  <CardTitle className="text-yellow-400 flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    Distinguished Guest Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-purple-200">
                        Royal First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-purple-800/50 text-white w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-purple-200">
                        Royal City <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="bg-purple-800/50 text-white w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-purple-200">
                      Royal Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-purple-800/50 text-white w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-purple-200">
                      Royal Contact Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-purple-800/50 text-white w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-purple-200">
                      Royal Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="bg-purple-800/50 text-white w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-1">
              <Card
                className="bg-[#191a1e] sticky top-24 lg:top-24 md:top-20 sm:static sm:mt-8"
              >
                <CardHeader>
                  <CardTitle className="text-yellow-400 flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    Royal Booking Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-200">Room Charges</span>
                      <span className="font-semibold">${totalAmount.toFixed(2)}</span>
                    </div>
              
                    <Separator className="bg-purple-700/50" />
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-yellow-400">${totalAmount.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-purple-700/50">
                    <h4 className="font-semibold text-yellow-400 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Royal Inclusions
                    </h4>
                    <div className="space-y-2 text-green-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Royal breakfast for 2 guests
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Private butler service
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Palace spa access
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Limousine transfer
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Free cancellation (24h)
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-[#bf9310]  cursor-pointer text-black hover:bg-[#a87e0d] font-bold py-4 text-xs md:text-lg rounded-lg shadow-lg hover:scale-105 transition-transform"
                    size="lg"
                  >
                  
                    Confirm Booking
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </PrivateRoute>
  );
}
