import {
  Crown,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-main shadow-2xl sticky top-0 z-50 py-12 border-t border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Crown className="h-8 w-8 text-[#bf9310]" />
              <span className="text-2xl font-bold text-foreground">
                ROYAL PLACE
              </span>
            </div>
            <p className="text-foreground mb-6 leading-relaxed">
              Experience luxury like never before at our world-class resort
              destination where every moment becomes a treasured memory.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a
                href="#"
                className="w-10 h-10 border border-bg-main rounded-full flex items-center justify-center transition-colors cursor-pointer group shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground group-hover:text-[#bf9310]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-bg-main rounded-full flex items-center justify-center transition-colors cursor-pointer group shadow-md"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-foreground group-hover:text-[#bf9310]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-bg-main rounded-full flex items-center justify-center transition-colors cursor-pointer group shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground group-hover:text-[#bf9310]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-bg-main rounded-full flex items-center justify-center transition-colors cursor-pointer group shadow-md"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-foreground group-hover:text-[#bf9310]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3 text-foreground">
              {[
                'About Us',
                'Rooms & Suites',
                'Amenities',
                'Gallery',
                'Special Offers',
                'Contact Us',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-[#bf9310] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resort Services */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-foreground">
              Resort Services
            </h3>
            <ul className="space-y-3 text-foreground">
              {[
                'Spa & Wellness',
                'Fine Dining',
                'Event Planning',
                'Concierge Services',
                'Water Sports',
                'Airport Transfer',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-[#bf9310] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-foreground">
              Contact Information
            </h3>
            <div className="space-y-4 text-foreground">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>123 Paradise Island, Luxury Bay, Maldives 20026</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>reservations@luxeresort.com</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-3 text-foreground">
                Resort Hours
              </h4>
              <div className="text-foreground text-sm space-y-1">
                <div>Check-in: 3:00 PM</div>
                <div>Check-out: 12:00 PM</div>
                <div>Front Desk: 24/7</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-foreground space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              &copy; 2025 Royal Palace. All rights reserved.{' '}
              <span className="block md:inline">Last updated: 04-07-2025</span>
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(
                (policy) => (
                  <a
                    key={policy}
                    href="#"
                    className="hover:text-[#bf9310] transition-colors text-sm"
                  >
                    {policy}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
