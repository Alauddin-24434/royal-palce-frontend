"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MailCheck, MapPin, Phone, MessageSquare } from "lucide-react"
import { motion } from 'framer-motion'
import { toast } from "react-hot-toast"

export function ContactUs() {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      toast.success("Message sent successfully!")
      form.current?.reset()
    } catch (error) {
      console.error(error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 mr-6"></div>
            <div className="flex items-center">
              <MessageSquare className="w-6 h-6 text-[#bf9310] mr-3" />
              <h2 className="text-base md:text-sm font-medium tracking-[0.2em] uppercase">
                Contact Us
              </h2>
              <MessageSquare className="w-6 h-6 text-[#bf9310] ml-3" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#bf9310] to-transparent w-32 ml-6"></div>
          </div>

          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-medium leading-snug text-center max-w-4xl mx-auto text-foreground">
            We'd love to hear from you!
            <br />
            <span className="block text-muted-foreground text-xl lg:text-2xl mt-4">Reach out with any questions or requests</span>
          </h1>
        </motion.div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
              <p className="text-muted-foreground">Our team is here to help you 24/7. Feel free to reach out!</p>
            </div>
            <div className="space-y-3 text-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#bf9310]" />
                <span>123 Luxury Lane, Paradise City, Maldives</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#bf9310]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MailCheck className="h-5 w-5 text-[#bf9310]" />
                <span>info@royalpalace.com</span>
              </div>
            </div>
            <div className="w-full h-[280px] rounded-xl overflow-hidden border border-slate-700 shadow">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Map location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-md border p-8 mx-auto space-y-5">
            <form className="space-y-5" ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input type="email" name="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input name="subject" placeholder="Message subject" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea name="message" placeholder="Write your message..." required />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#bf9310] hover:bg-[#a87e0d] text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
