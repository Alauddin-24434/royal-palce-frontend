import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { BookOpen, Calendar, Tag } from 'lucide-react';
 const blogPosts = [
    {
      id: 1,
      date: "22 DEC, 2024",
      category: "HOTEL ROOM",
      title: "Renovation of bathrooms throughout the resort",
      image: "/room1.jpg",
      description:
        "Ready to book your vacation? Our hotel booking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful and unforgettable experience without breaking the bank.",
      featured: false,
    },
    {
      id: 2,
      date: "22 DEC, 2024",
      category: "HOTEL ROOM",
      title: "Renovation of bathrooms throughout the resort",
      image: "/room2.jpg",
      description:
        "Ready to book your vacation? Our hotel booking category provides an extensive array of choices, from lavish resorts to economical lodgings, guaranteeing a delightful and unforgettable experience without breaking the bank.",
      featured: true,
    },
  ];
const BlogsSection = () => {
    return (
      <section className=" py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Blog Section */}
          <div>
            {/* Header */}
           <div className="mb-20">
      {/* Title Decoration */}
      <div className="flex items-center justify-center mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 mr-6"></div>
        <div className="flex items-center">
          <BookOpen className="w-6 h-6 text-[#bf9310] mr-3" />
          <h2 className="text-[#bf9310] text-sm font-medium tracking-[0.2em] uppercase">
            Blogs
          </h2>
          <BookOpen className="w-6 h-6 text-[#bf9310] ml-3" />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 ml-6"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-snug text-center max-w-6xl mx-auto text-white">
        Explore insights, tips, and
        <br />
        <span className="block">stories from Royal Place</span>
      </h1>
    </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="border border-gray-800  overflow-hidden transition-colors p-6"
                >
                  {/* Meta */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2 text-yellow-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-yellow-500 text-sm">
                      <Tag className="w-4 h-4" />
                      <span>{post.category}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-xl font-medium mb-4 leading-tight">
                    {post.title}
                  </h3>

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {post.description}
                    </p>

                    {/* Read More Button */}
                    <Button
                      variant={post.featured ? "default" : "outline"}
                      className={
                        post.featured
                          ? "bg-yellow-500 text-black hover:bg-yellow-600 rounded-none"
                          : "border-gray-600 bg-transparent text-white hover:bg-white rounded-none hover:text-black"
                      }
                    >
                      READ MORE
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile View All Button */}
            <div className="flex justify-center mt-8 md:hidden">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
                VIEW ALL
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BlogsSection;