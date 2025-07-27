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
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="bg-gradient-to-r from-[hsl(var(--genarch-primary))] to-green-400 px-4 py-2 rounded-lg">
                <h1 className="text-xl font-bold text-white cursor-pointer">
                  GenArch Labs
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.type === "route" ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-[hsl(var(--genarch-primary))] font-semibold"
                        : "text-[hsl(var(--genarch-charcoal))] hover:text-[hsl(var(--genarch-primary))]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
                    className="nav-link px-3 py-2 text-sm font-medium transition-colors duration-200 text-[hsl(var(--genarch-charcoal))] hover:text-[hsl(var(--genarch-primary))] cursor-pointer bg-transparent hover:bg-transparent"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <Button className="bg-[hsl(var(--genarch-primary))] text-white hover:bg-blue-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 mr-4">
                Contact
              </Button>
              <Button className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                Login
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[hsl(var(--genarch-charcoal))] hover:text-[hsl(var(--genarch-primary))]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                item.type === "route" ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-sm font-medium ${
                      isActive(item.href)
                        ? "text-[hsl(var(--genarch-primary))] font-semibold"
                        : "text-[hsl(var(--genarch-charcoal))] hover:text-[hsl(var(--genarch-primary))]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-[hsl(var(--genarch-charcoal))] hover:text-[hsl(var(--genarch-primary))] cursor-pointer bg-transparent hover:bg-transparent"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <Button className="block bg-[hsl(var(--genarch-primary))] text-white hover:bg-blue-800 px-3 py-2 rounded-lg text-sm font-medium mt-2 w-full mb-2">
                Contact
              </Button>
              <Button className="block bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 px-3 py-2 rounded-lg text-sm font-medium w-full">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
