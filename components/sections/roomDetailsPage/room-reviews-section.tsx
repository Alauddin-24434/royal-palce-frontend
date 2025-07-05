'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Star,
  MessageCircle,
  Calendar,
  Crown,
  Sparkles,
  Filter,
  Trash,
} from 'lucide-react';
import {
  useCreateTestimonialMutation,
  useDeleteTestimonialMutation,
  useFindTestimonialsByRoomIdQuery,
} from '@/redux/features/testimonial/testimonialApi';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import toast from 'react-hot-toast';

interface Review {
  _id: string;
  userId: string;
  userName: string;
  userImage: string;
  roomId: string;
  rating: number;
  reviewText: string;
  reviewDate: string;
}

interface RoomReviewsSectionProps {
  roomId?: string;
}

const RoomReviewsSection = ({ roomId }: RoomReviewsSectionProps) => {
  const user = useSelector(selectCurrentUser);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, text: '' });

  const { data, refetch } = useFindTestimonialsByRoomIdQuery(roomId);
  const reviewsData: Review[] = data?.data || [];
  const [deleteTestimonial] = useDeleteTestimonialMutation();
  const [createTestimonial, { isLoading: isSubmitting }] =
    useCreateTestimonialMutation();

  const submitReviewHandler = async () => {
    if (!newReview.text || !newReview.rating || !roomId) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      const payload = {
        userName: user?.name,
        userId: user?._id,
        userImage: user?.image,
        roomId,
        rating: newReview.rating,
        reviewText: newReview.text,
        reviewDate: new Date().toISOString(),
      };

      await createTestimonial(payload).unwrap();
      setNewReview({ rating: 5, text: '' });
      setShowWriteReview(false);
      refetch();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleDeleteReview = async (id: string) => {
    try {
      await deleteTestimonial(id).unwrap();
      toast.success('Review deleted successfully!');
      refetch();
    } catch (error) {
      toast.error('Failed to delete review. Please try again.');
    }
  };

  return (
    <section className="relative py-20 overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-amber-400 rotate-45" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-amber-400 rotate-12" />
        <Sparkles className="absolute top-16 right-16 w-12 h-12 text-amber-400/20 animate-pulse" />
        <Crown className="absolute bottom-32 left-32 w-16 h-16 text-amber-400/15 animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8 flex-wrap gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-24 sm:w-32" />
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 text-[#bf9310] mr-2" />
              <h2 className="text-[#bf9310] text-sm font-medium tracking-[0.2em] uppercase">
                Guest Reviews
              </h2>
              <MessageCircle className="w-5 h-5 text-[#bf9310] ml-2" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-24 sm:w-32" />
          </div>
        </div>

        {/* Filter Section */}
        {/* Filter Section */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4 rounded-lg px-4 py-4 shadow-sm">
          {/* Left - Filter by rating */}
          <div className="flex items-center gap-4 flex-wrap">
            <Filter className="w-5 h-5 text-amber-400" />
            <span className="text-foreground">Filter by rating:</span>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedRating === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedRating(null)}
                className={
                  selectedRating === null
                    ? 'bg-amber-400 text-foreground'
                    : ' text-foreground'
                }
              >
                All
              </Button>
              {[5, 4, 3, 2, 1].map((rating) => {
                const bgColors: Record<number, string> = {
                  5: 'bg-green-500',
                  4: 'bg-emerald-500',
                  3: 'bg-yellow-500',
                  2: 'bg-orange-500',
                  1: 'bg-red-500',
                };

                return (
                  <Button
                    key={rating}
                    size="sm"
                    onClick={() => setSelectedRating(rating)}
                    className={`${
                      selectedRating === rating
                        ? `${bgColors[rating]} text-white`
                        : 'border border-slate-600 text-foreground bg-transparent'
                    }`}
                  >
                    {rating} ⭐
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Right - Write Review Button */}
          <Button
            onClick={() => setShowWriteReview(!showWriteReview)}
            className="cursor-pointer bg-[#bf9310] hover:bg-amber-500 text-foreground"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Write Review
          </Button>
        </div>

        {/* Write Review Form */}
        {showWriteReview && (
          <Card className="bg-main backdrop-blur-sm border mb-8">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">
                Share Your Experience
              </h3>
              <div>
                <label className="block text-foreground mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setNewReview({ ...newReview, rating })}
                      className="p-1"
                    >
                      <Star
                        className={`w-7 h-7 sm:w-8 sm:h-8 ${
                          rating <= newReview.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-foreground'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-foreground mb-2">
                  Your Review
                </label>
                <Textarea
                  value={newReview.text}
                  onChange={(e) =>
                    setNewReview({ ...newReview, text: e.target.value })
                  }
                  placeholder="Share your experience with this room..."
                  rows={4}
                  className="bg-main my-4 border text-foreground"
                />
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={submitReviewHandler}
                  disabled={isSubmitting}
                  className="bg-[#bf9310] hover:bg-amber-400 text-foreground"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Review'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowWriteReview(false)}
                  className="border-slate-600 text-foreground"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Review List */}
        <div className="space-y-6">
          {reviewsData
            .filter((review) =>
              selectedRating ? review.rating === selectedRating : true,
            )
            .map((review) => (
              <Card
                key={review._id}
                className="bg-main border backdrop-blur-md"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <Image
                      src={review.userImage || '/placeholder.svg'}
                      alt={review.userName}
                      width={60}
                      height={60}
                      className="rounded-full object-cover w-12 h-12 sm:w-14 sm:h-14"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="text-foreground text-base sm:text-lg font-semibold">
                          {review.userName}
                        </h4>
                        {user?._id === review.userId && (
                          <button
                            onClick={() => handleDeleteReview(review._id)}
                            className="text-red-500 hover:text-red-600"
                            title="Delete review"
                          >
                            <Trash className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-foreground mt-2 leading-relaxed">
                        {review.reviewText}
                      </p>
                      <p className="text-sm text-foreground mt-2 flex items-center">
                        <Calendar className="inline w-4 h-4 mr-1" />
                        {new Date(review.reviewDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RoomReviewsSection;
