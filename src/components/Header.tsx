import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/workflow-catalyst-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: "Services", href: "/services" },
    { label: "Technologies", href: "/technologies" },
    { label: "Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  const aboutItems = [
    { label: "Company Overview", href: "/about" },
    { label: "How We Work", href: "/how-we-work" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  const isAboutActive = () => {
    return location.pathname === "/about" || location.pathname === "/how-we-work";
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Workflow Catalyst" className="h-8 w-8" />
            <span className="text-xl font-bold text-primary">Workflow Catalyst</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 transition-colors duration-300 font-medium ${
                isAboutActive() 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-foreground hover:text-primary"
              }`}>
                <span>About Us</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                {aboutItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link
                      to={item.href}
                      className={`w-full px-4 py-2 transition-colors duration-300 ${
                        isActive(item.href) 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Other Navigation Items */}
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`transition-colors duration-300 font-medium ${
                  isActive(item.href) 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91 9910815132</span>
              </div>
            </div>
            {/* <Link to="/contact">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {/* About Section in Mobile */}
              <div className="px-4">
                <div className="font-medium text-foreground mb-2">About Us</div>
                {aboutItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`block transition-colors duration-300 font-medium px-4 py-2 rounded ml-4 ${
                      isActive(item.href) 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              {/* Other Navigation Items */}
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`transition-colors duration-300 font-medium px-4 py-2 rounded ${
                    isActive(item.href) 
                      ? "text-primary bg-primary/10" 
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* <div className="px-4 pt-4 border-t border-border">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" size="sm" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;