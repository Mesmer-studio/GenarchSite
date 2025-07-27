import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "/complaints", label: "Support" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location === href;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-[hsl(var(--genarch-primary))] cursor-pointer">
                Genarch Technologies
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
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
              ))}
              <Button className="bg-[hsl(var(--genarch-primary))] text-white hover:bg-blue-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                Contact
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
              ))}
              <Button className="block bg-[hsl(var(--genarch-primary))] text-white hover:bg-blue-800 px-3 py-2 rounded-lg text-sm font-medium mt-2 w-full">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
