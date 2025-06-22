"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Controller, useForm } from "react-hook-form"
import { useSignUpUserMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import {  setUser } from "@/redux/features/auth/authSlice";
import { useRouter, useSearchParams } from "next/navigation";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: string;
}


export default function SignupPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const [signup, { isLoading, error }] = useSignUpUserMutation();

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<SignupFormData>();

  const onSubmit = async (data: SignupFormData) => {
    try {
   
      const response = await signup(data).unwrap();

     
      const { accessToken, user } = response?.data;

      dispatch(setUser({ user, token: accessToken }));
      reset();
      router.replace(redirect);
      
    } catch (err) {
      console.error("Signup failed:", err);
      
    }


  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background overlay with resort imagery */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative w-full max-w-md">
        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Join Our Resort</h1>
            <p className="text-slate-300">Create your account to experience luxury</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-200 font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Enter your full name"
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"

              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-200 font-medium">
                Email Address
              </Label>
              <Input
                id="email"

                type="email"
                {...register("email", {
                  required: "Email is required", pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  }
                })}
                placeholder="Enter your email"
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"

              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-200 font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters required" }
                })}
                placeholder="Create a strong password"
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              />
              {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-200 font-medium">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="Enter your phone number"
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-slate-200 font-medium">Account Type</Label>
              <Controller
                name="role"
                control={control}
                defaultValue="guest"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white focus:border-orange-500 focus:ring-orange-500/20">
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="guest" className="text-white hover:bg-slate-700">Guest</SelectItem>
                      <SelectItem value="admin" className="text-white hover:bg-slate-700">Admin</SelectItem>
                      <SelectItem value="receptionist" className="text-white hover:bg-slate-700">Receptionist</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-orange-500/25 disabled:opacity-50"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>

            {error && (
              <p className="text-red-500 text-center mt-4">
                {typeof error === "string" ? error : "Something went wrong!"}
              </p>
            )}
          </form>



          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-slate-300">
              Already have an account?{" "}
              <Link href="/login" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
