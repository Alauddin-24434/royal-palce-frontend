'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useSignUpUserMutation } from '@/redux/features/auth/authApi';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/features/auth/authSlice';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export default function SignupPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const [signup, { isLoading }] = useSignUpUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormData>();

  const onSubmit = async (data: SignupFormData) => {
    try {
      const response = await signup(data).unwrap();
      const { user } = response?.data;

      dispatch(setUser(user));
      reset();
      router.replace(redirect);
    } catch (err: any) {
      toast.error(err?.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* === Shared Background Image Overlay === */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />

      <div className="relative w-full max-w-md">
        <div className="bg-main rounded-2xl p-8 shadow-2xl">
          {/* === Heading === */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold title mb-2">Create Account</h1>
            <p className="text-foreground">
              Start your luxurious journey today
            </p>
          </div>

          {/* === Signup Form === */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* === Full Name === */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                placeholder="Enter your full name"
                className="bg-background border-slate-600 text-foreground placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              />
              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* === Email === */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Enter your email"
                className="bg-background border-slate-600 text-foreground placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* === Password === */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Minimum 6 characters required',
                  },
                })}
                placeholder="Create a strong password"
                className="bg-background border-slate-600 text-foreground placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              />
              {errors.password && (
                <p className="text-red-400 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* === Phone (optional) === */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-medium">
                Phone Number (Optional)
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="Enter your phone number"
                className="bg-background border-slate-600 text-foreground placeholder:text-slate-400 focus:border-orange-500 focus:ring-orange-500/20"
              />
            </div>

            {/* === Submit Button === */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#bf9310] cursor-pointer hover:bg-yellow-500 text-foreground font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-orange-500/25 disabled:opacity-50"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          {/* === Redirect to Login === */}
          <div className="text-center mt-6">
            <p className="text-foreground">
              Already have an account?{' '}
              <Link
                href="/login"
                className="title hover:text-yellow-500 font-medium  transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* === Toast Notification Container === */}
      <Toaster position="top-right" />
    </div>
  );
}
