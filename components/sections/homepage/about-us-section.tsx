import { Button } from "../../ui/button"
import { ArrowRight, Crown, Shield, Sparkles, Play, Star, Award, Users } from "lucide-react"
import Image from "next/image"

const featuresData = [
  {
    icon: <Crown />,
    title: "Royal Suites",
    subtitle: "Palatial accommodations fit for royalty",
  },
  {
    icon: <Shield />,
    title: "Butler Service",
    subtitle: "Personal attendants at your service",
  },
  {
    icon: <Sparkles />,
    title: "Fine Dining",
    subtitle: "Michelin-starred culinary experiences",
  },
  {
    icon: <Star />,
    title: "Royal Treatment",
    subtitle: "Exclusive spa and wellness services",
  },
]

const AboutUsSection = () => {
  return (
    <section className="bg-[#191a1e] text-white py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
    
      <div className="container mx-auto relative z-10">
  <div className="mb-20">
  {/* Title Decoration */}
  <div className="flex items-center justify-center mb-8">
    <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 mr-6"></div>
    <div className="flex items-center">
      <Crown className="w-6 h-6 text-[#bf9310] mr-3" />
      <h2 className="text-[#bf9310] text-sm font-medium tracking-[0.2em] uppercase">
        About Our Palace
      </h2>
      <Crown className="w-6 h-6 text-[#bf9310] ml-3" />
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 ml-6"></div>
  </div>

  {/* Main Heading with one consistent color and smaller size */}
  <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-snug text-center max-w-6xl mx-auto text-white">
    Where Royal Heritage Meets
    <br />
    Modern Luxury & Elegance
  </h1>
</div>


        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video/Image Section */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/reception.avif"
                alt="Royal Palace Hotel Grand Lobby"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />


            
            </div>

            {/* Floating Award Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#bf9310] p-4 rounded-2xl shadow-2xl">
              <Award className="w-8 h-8 text-slate-900" />
              <div className="text-slate-900 font-bold text-sm mt-1">5-Star</div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            {/* Royal Statistics */}
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light text-[#bf9310] mb-2">
                  150+
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wide">Royal Suites</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light text-[#bf9310] mb-2">
                  5.0
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wide">Royal Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light text-[#bf9310] mb-2">
                  200K+
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wide">Distinguished Guests</div>
              </div>
            </div>

            {/* Royal Description */}
            <div className="space-y-6 mb-10">
              <p className="text-slate-300 leading-relaxed text-lg">
                Nestled in the heart of the city, our Royal Palace Hotel stands as a testament to timeless elegance and
                unparalleled luxury. Each suite is meticulously designed with hand-selected furnishings, marble
                bathrooms, and panoramic views that capture the essence of royal living.
              </p>

              <p className="text-slate-300 leading-relaxed">
                From our award-winning spa treatments to our Michelin-starred dining experiences, every moment at our
                palace is crafted to exceed the expectations of the most discerning guests. Our dedicated concierge team
                ensures that your every wish is anticipated and fulfilled with the grace befitting royalty.
              </p>
            </div>

            {/* Royal Features */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                <Users className="w-4 h-4 text-[#bf9310] mr-2" />
                <span className="text-sm text-slate-300">24/7 Butler Service</span>
              </div>
              <div className="flex items-center bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                <Star className="w-4 h-4 text-[#bf9310] mr-2" />
                <span className="text-sm text-slate-300">Michelin Dining</span>
              </div>
              <div className="flex items-center bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                <Crown className="w-4 h-4 text-[#bf9310] mr-2" />
                <span className="text-sm text-slate-300">Royal Heritage</span>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
