import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", type: "route" },
    { href: "#services", label: "Services", type: "scroll" },
    { href: "#about", label: "About", type: "scroll" },
    { href: "/complaints", label: "Support", type: "route" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location === href;
  };

  const handleNavClick = (item: any) => {
    if (item.type === "scroll") {
      // If we're not on the home page, navigate to home first
      if (location !== "/") {
        window.location.href = "/" + item.href;
      } else {
        // Scroll to the section
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl lg:text-3xl font-bold font-mono bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent cursor-pointer tracking-wide">
                GenArch Labs
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-10">
              {navItems.map((item) => (
                item.type === "route" ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link font-semibold tracking-wide transition-colors duration-300 ${
                      isActive(item.href)
                        ? "text-green-400 font-bold"
                        : "text-green-400 hover:text-green-300"
                    }`}
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
                    className="nav-link font-semibold tracking-wide transition-colors duration-300 text-green-400 hover:text-green-300 cursor-pointer bg-transparent hover:bg-transparent"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <button
                className="nav-link font-semibold tracking-wide transition-colors duration-300 text-green-400 hover:text-green-300 cursor-pointer bg-transparent hover:bg-transparent"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                Contact
              </button>
              <button
                className="nav-link font-semibold tracking-wide transition-colors duration-300 text-green-400 hover:text-green-300 cursor-pointer bg-transparent hover:bg-transparent"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                Login
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-green-400 hover:text-green-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-3">
              {navItems.map((item) => (
                item.type === "route" ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 font-semibold tracking-wide transition-colors duration-300 ${
                      isActive(item.href)
                        ? "text-green-400 font-bold"
                        : "text-green-400 hover:text-green-300"
                    }`}
                    style={{ fontFamily: 'Orbitron, monospace' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-3 py-2 font-semibold tracking-wide transition-colors duration-300 text-green-400 hover:text-green-300 cursor-pointer bg-transparent hover:bg-transparent"
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    {item.label}
                  </button>
                )
              ))}
              <button
                className="block w-full text-left px-3 py-2 font-semibold tracking-wide transition-colors duration-300 text-green-400 hover:text-green-300 cursor-pointer bg-transparent hover:bg-transparent mt-2"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                Contact
              </button>
              <button
                className="block w-full text-left px-3 py-2 font-semibold tracking-wide transition-colors duration-300 text-green-400 hover:text-green-300 cursor-pointer bg-transparent hover:bg-transparent"
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
