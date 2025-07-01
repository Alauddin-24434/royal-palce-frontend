"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { differenceInDays } from "date-fns";
import {
  Crown,
  Check,
  Award,
  
} from "lucide-react";
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
import { useBookingInitiateMutation } from "@/redux/features/booking/paymentApi";

export default function RoyalCheckoutPage() {
  const  [bookingInitiate]=useBookingInitiateMutation();
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
    const confirm = window.confirm("Are you sure you want to clear the cart?");
    if (confirm) {
      dispatch(clearCart());
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await bookingInitiate(bookingData).unwrap();

   
      if (response?.success && response?.payment_url) {
        window.location.href = response.payment_url;
      } else {
        alert("Payment initiation failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
      alert("Unexpected error during payment.");
    }
  };

  return (
    <div className="min-h-screen text-white bg-black">
      <div className="container mx-auto px-4 py-24">
        <div className="mb-6 flex justify-end">
          <Button variant="destructive" onClick={handleClearCart}>
            Clear Cart
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cart Items */}
            {cartSummary?.map((cart, index) => (
              <Card key={index} className="bg-[#191a1e]">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="relative w-28 h-28 rounded-xl overflow-hidden border-2 border-yellow-400/30">
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
                  <div className="grid grid-cols-2 gap-6 text-sm">
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
                      className="col-span-2"
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-purple-200">Royal First Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Majesty"
                      className="bg-purple-800/50 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-purple-200">Royal City</Label>
                    <Input
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Palace City"
                      className="bg-purple-800/50 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-purple-200">Royal Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="royalty@palace.com"
                    className="bg-purple-800/50 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-purple-200">Royal Contact Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) ROYAL-1"
                    className="bg-purple-800/50 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="text-purple-200">Royal Address</Label>
                  <Input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Palace Street, Kingdom"
                    className="bg-purple-800/50 text-white"
                  />
                </div>
              </CardContent>
            </Card>

           
          </div>

          {/* RIGHT SIDE - Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-[#191a1e] sticky top-24">
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
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Royal Amenities</span>
                    <span className="text-green-400">Complimentary</span>
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
                    <div className="flex items-center gap-2"><Check className="w-4 h-4" />Royal breakfast for 2 guests</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4" />Private butler service</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4" />Palace spa access</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4" />Limousine transfer</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4" />Free cancellation (24h)</div>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-4 text-lg rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Confirm Royal Booking
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
