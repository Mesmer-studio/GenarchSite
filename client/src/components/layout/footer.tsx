import { Link } from "wouter";
import { MapPin, Phone, Mail, Twitter, Facebook, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-cyan-400 mr-3 mt-1 flex-shrink-0 w-4 h-4" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  123 Innovation Drive<br />
                  Tech Hub, CA 94025
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="text-cyan-400 mr-3 flex-shrink-0 w-4 h-4" />
                <a 
                  href="tel:+1-800-GENARCH" 
                  className="text-slate-400 hover:text-white hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 text-sm"
                >
                  +1 (800) GENARCH
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-cyan-400 mr-3 flex-shrink-0 w-4 h-4" />
                <a 
                  href="mailto:info@genarchlabs.com" 
                  className="text-slate-400 hover:text-white hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 text-sm"
                >
                  info@genarchlabs.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-slate-400 hover:text-white hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 hover:scale-110 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-slate-400 hover:text-white hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 hover:scale-110 inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 hover:scale-110 inline-block"
                >
                  Plans
                </a>
              </li>
              <li>
                <Link 
                  href="/complaints" 
                  className="text-slate-400 hover:text-white hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 hover:scale-110 inline-block"
                >
                  Support
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 hover:scale-110 inline-block"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 hover:scale-110 inline-block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 hover:scale-110 inline-block"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 hover:scale-110 inline-block"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-slate-400 hover:text-white hover:shadow-[0_0_10px_#00FFFF] transition-all duration-300 hover:scale-110 inline-block"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Social Media</h4>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="text-slate-400 hover:text-cyan-400 hover:shadow-[0_0_15px_#00FFFF] transition-all duration-300 hover:scale-110 p-2 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-cyan-400 hover:shadow-[0_0_15px_#00FFFF] transition-all duration-300 hover:scale-110 p-2 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-cyan-400 hover:shadow-[0_0_15px_#00FFFF] transition-all duration-300 hover:scale-110 p-2 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-cyan-400 hover:shadow-[0_0_15px_#00FFFF] transition-all duration-300 hover:scale-110 p-2 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-cyan-400 hover:shadow-[0_0_15px_#00FFFF] transition-all duration-300 hover:scale-110 p-2 rounded-lg"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-400 mt-6 text-sm">
            © 2025 GenArch Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
