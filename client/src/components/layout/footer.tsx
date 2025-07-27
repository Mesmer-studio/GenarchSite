import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Github, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--genarch-footer))] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Genarch Technologies</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-lg">
              Empowering businesses with innovative technology solutions since 2015. 
              Your trusted partner for digital transformation and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-[hsl(var(--genarch-primary))] p-3 rounded-lg transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-[hsl(var(--genarch-primary))] p-3 rounded-lg transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-[hsl(var(--genarch-primary))] p-3 rounded-lg transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-[hsl(var(--genarch-primary))] p-3 rounded-lg transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-[hsl(var(--genarch-primary))] p-3 rounded-lg transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><Link href="/complaints" className="text-gray-300 hover:text-white transition-colors duration-200">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-[hsl(var(--genarch-primary))] mr-3 mt-1 flex-shrink-0 w-4 h-4" />
                <span className="text-gray-300 text-sm">
                  123 Innovation Drive<br />
                  Tech Hub, CA 94025
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="text-[hsl(var(--genarch-primary))] mr-3 flex-shrink-0 w-4 h-4" />
                <a href="tel:+1-800-GENARCH" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  +1 (800) GENARCH
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-[hsl(var(--genarch-primary))] mr-3 flex-shrink-0 w-4 h-4" />
                <a href="mailto:info@genarch.com" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  info@genarch.com
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="text-[hsl(var(--genarch-primary))] mr-3 mt-1 flex-shrink-0 w-4 h-4" />
                <span className="text-gray-300 text-sm">
                  Mon-Fri: 9AM-6PM PST<br />
                  24/7 Emergency Support
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Genarch Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
