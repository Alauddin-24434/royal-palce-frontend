"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
    Star,
    MessageCircle,
    Calendar,
    Crown,
    Sparkles,
    Filter,
} from "lucide-react"
import {
    useCreateTestimonialMutation,
    useFindTestimonialsByRoomIdQuery,
} from "@/redux/features/testimonial/testimonialApi"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "@/redux/features/auth/authSlice"

interface Review {
    _id: string
    userId: string
    userName: string
    userImage: string
    roomId: string
    rating: number
    reviewText: string
    reviewDate: string

}

interface RoomReviewsSectionProps {
    roomId?: string
}

const RoomReviewsSection = ({ roomId }: RoomReviewsSectionProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const user = useSelector(selectCurrentUser);
    const [selectedRating, setSelectedRating] = useState<number | null>(null)
    const [showWriteReview, setShowWriteReview] = useState(false)
    const [newReview, setNewReview] = useState({
        rating: 5,
        text: "",
       
    })

    const { data, refetch } = useFindTestimonialsByRoomIdQuery(roomId)
    const reviewsData: Review[] = data?.data || []

    const [createTestimonial, { isLoading: isSubmitting }] =
        useCreateTestimonialMutation()

    const submitReviewHandler = async () => {
        if ( !newReview.text || !newReview.rating || !roomId) {
            alert("Please fill in all fields.")
            return
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
            }

            console.log(payload)

            await createTestimonial(payload).unwrap()
            setNewReview({ rating: 5, text: "" })
            setShowWriteReview(false)
            refetch()
        } catch (error) {
            console.error("Review submission failed:", error)
            alert("Something went wrong. Please try again.")
        }
    }

    return (
        <section className="relative py-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-32 h-32 border border-amber-400 rotate-45"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border border-amber-400 rotate-12"></div>
                <Sparkles className="absolute top-16 right-16 w-12 h-12 text-amber-400/20 animate-pulse" />
                <Crown className="absolute bottom-32 left-32 w-16 h-16 text-amber-400/15 animate-float" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 mr-6"></div>
                        <div className="flex items-center">
                            <MessageCircle className="w-6 h-6 text-[#bf9310] mr-3" />
                            <h2 className="text-[#bf9310] text-sm font-medium tracking-[0.2em] uppercase">
                                Guest Reviews
                            </h2>
                            <MessageCircle className="w-6 h-6 text-[#bf9310] ml-3" />
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 ml-6"></div>
                    </div>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <Filter className="w-5 h-5 text-amber-400" />
                        <span className="text-slate-400">Filter by rating:</span>
                        <div className="flex gap-2">
                            <Button
                                variant={selectedRating === null ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedRating(null)}
                                className={
                                    selectedRating === null
                                        ? "bg-amber-400 text-slate-900"
                                        : "border-slate-600 text-slate-400"
                                }
                            >
                                All
                            </Button>
                            {[5, 4, 3, 2, 1].map((rating) => (
                                <Button
                                    key={rating}
                                    variant={selectedRating === rating ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedRating(rating)}
                                    className={
                                        selectedRating === rating
                                            ? "bg-amber-400 text-slate-900"
                                            : "border-slate-600 text-slate-400"
                                    }
                                >
                                    {rating} ⭐
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Button
                        onClick={() => setShowWriteReview(!showWriteReview)}
                        className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 hover:from-amber-500 hover:to-amber-700"
                    >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Write Review
                    </Button>
                </div>

                {/* Write Review Form */}
                {showWriteReview && (
                    <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 mb-8">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">
                                Share Your Experience
                            </h3>
                          
                                <div>
                                    <label className="block text-slate-400 mb-2">Rating</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((rating) => (
                                            <button
                                                key={rating}
                                                onClick={() =>
                                                    setNewReview({ ...newReview, rating })
                                                }
                                                className="p-1"
                                            >
                                                <Star
                                                    className={`w-8 h-8 ${rating <= newReview.rating
                                                            ? "text-amber-400 fill-amber-400"
                                                            : "text-slate-600"
                                                        }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-slate-400 mb-2">
                                        Your Review
                                    </label>
                                    <Textarea
                                        value={newReview.text}
                                        onChange={(e) =>
                                            setNewReview({ ...newReview, text: e.target.value })
                                        }
                                        placeholder="Share your experience with this room..."
                                        rows={4}
                                        className="bg-slate-700/50 border-slate-600 text-white"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <Button
                                        onClick={submitReviewHandler}
                                        disabled={isSubmitting}
                                        className="bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900"
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit Review"}
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => setShowWriteReview(false)}
                                        className="border-slate-600 text-slate-400"
                                    >
                                        Cancel
                                    </Button>
                                
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Review Cards */}
                <div className="space-y-6">
                    {reviewsData
                        .filter((review) =>
                            selectedRating ? review.rating === selectedRating : true
                        )
                        .map((review) => (
                            <Card
                                key={review._id}
                                className="bg-slate-800/40 border border-slate-700 backdrop-blur-md"
                            >
                                <CardContent className="p-6">
                                    <div className="flex gap-4 items-start">
                                        <Image
                                            src={review.userImage || "/placeholder.svg"}
                                            alt={review.userName}
                                            width={60}
                                            height={60}
                                            className="rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                            <h4 className="text-white text-lg font-semibold">
                                                {review.userName}
                                            </h4>
                                            <div className="flex items-center gap-1 mt-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star
                                                        key={star}
                                                        className={`w-4 h-4 ${star <= review.rating
                                                                ? "text-amber-400 fill-amber-400"
                                                                : "text-slate-600"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-slate-300 mt-2 leading-relaxed">
                                                {review.reviewText}
                                            </p>
                                            <p className="text-sm text-slate-500 mt-2">
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
    )
}

export default RoomReviewsSection
