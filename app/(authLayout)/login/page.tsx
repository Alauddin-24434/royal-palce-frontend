"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter, useSearchParams } from "next/navigation";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL থেকে redirect প্যারামিটার নিন, না থাকলে ডিফল্ট "/" পেজে যাবে
  const redirect = searchParams.get("redirect") || "/";

  const [login, { isLoading, error }] = useLoginUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Login API কল
      const response = await login(data).unwrap();

      const { accessToken, user } = response?.data;

      // Redux স্টোরে user & token সেট করুন
      dispatch(setUser({ user, token: accessToken }));

      // ফর্ম রিসেট করুন
      reset();

      // সফল লগিনের পরে redirect পেজে নেভিগেট করুন
      router.replace(redirect);
    } catch (err) {
      console.error("Login failed:", err);
      // এখানে তোমার মতো এরর হ্যান্ডলিং যোগ করতে পারো
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative w-full max-w-md">
        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-slate-300">Sign in to your resort account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-200 font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-200 font-medium">
                  Password
                </Label>
              </div>
              <Input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is Required",
                  minLength: { value: 6, message: "Minimum 6 characters required" },
                })}
                placeholder="Enter your password"
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              />
              {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-orange-500/25 disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Sign In"}
            </Button>

            {error && (
              <p className="text-red-500 text-center mt-4">
                {typeof error === "string" ? error : "Something went wrong!"}
              </p>
            )}
          </form>

          {/* Signup Link */}
          <div className="text-center mt-6">
            <p className="text-slate-300">
              Don't have an account?{" "}
              <Link href="/signup" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
