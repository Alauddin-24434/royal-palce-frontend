import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <div>
             {/* Footer */}
      <footer className="bg-gray-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">L</span>
                </div>
                <span className="text-2xl font-bold">LUXE RESORT</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Experience luxury like never before at our world-class resort
                destination where every moment becomes a treasured memory.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer group">
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-black" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer group">
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer group">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors cursor-pointer group">
                  <Youtube className="w-5 h-5 text-gray-400 group-hover:text-black" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Amenities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Special Offers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Resort Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Spa & Wellness
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Fine Dining
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Event Planning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Concierge Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Water Sports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Airport Transfer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-lg">Contact Information</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 text-amber-400 flex-shrink-0" />
                  <span>123 Paradise Island, Luxury Bay, Maldives 20026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>reservations@luxeresort.com</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-3">Resort Hours</h4>
                <div className="text-gray-400 text-sm">
                  <div>Check-in: 3:00 PM</div>
                  <div>Check-out: 12:00 PM</div>
                  <div>Front Desk: 24/7</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p>&copy; 2024 Luxe Resort. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
    );
};

export default Footer;