import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import BreadcrumbNav from '@/components/SEO/BreadcrumbNav';
import SearchBar from '@/components/Search/SearchBar';
import DisclaimerBanner from '@/components/Legal/DisclaimerBanner';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home", active: location.pathname === "/" },
    { href: "/best-bonuses", label: "Best Bonuses", active: location.pathname === "/best-bonuses" },
    { href: "/vip-comparison", label: "VIP Programs", active: location.pathname === "/vip-comparison" },
    { href: "/bonus-calendar", label: "Calendar", active: location.pathname === "/bonus-calendar" },
    { href: "/responsible-gambling", label: "Help", active: location.pathname === "/responsible-gambling" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Degen Rewards
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile for space */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  link.active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden z-50">
              <nav className="flex flex-col p-4 space-y-3">
                {/* Mobile Search */}
                <div className="mb-4 lg:hidden">
                  <SearchBar />
                </div>
                
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      link.active ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
      
      <BreadcrumbNav />
      <DisclaimerBanner />
    </>
  );
};

export default Header;