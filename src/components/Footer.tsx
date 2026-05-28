import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUp
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/images/consais-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    "Loan Origination Systems",
    "Digital Transformation", 
    "Custom App Development",
    "Platform Solutions",
    "Software Testing",
     
 
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Technologies", href: "/technologies" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" }
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6">
            <img src={logo} alt="Consais" className="h-24 w-24 object-contain" />
                <span className="text-2xl font-bold bg-gradient-logo bg-clip-text text-transparent">Consais</span>
              </Link>
              <p className="text-background/80 mb-6 leading-relaxed">
                Empowering SMEs using AI enabled digital solutions with cutting-edge 
                technology and expert consulting services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      to="/services"
                      className="text-background/80 hover:text-primary-glow transition-colors duration-300 text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <a 
                        href={link.href}
                        className="text-background/80 hover:text-primary-glow transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.href}
                        className="text-background/80 hover:text-primary-glow transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-glow" />
                  <span className="text-background/90 text-sm">+91 9910815132</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-glow" />
                  <span className="text-background/90 text-sm">support@consais.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                  <span className="text-background/90 text-sm">S1E 302, Palm Drive, Golf Course Ext Road, Gurgaon 122101</span>
                </div>
              </div>
            </div>

            {/* Newsletter & Social */}
            {/* <div>
              <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
              <p className="text-background/80 mb-6 text-sm">
                Follow us for the latest updates on technology trends and digital transformation insights.
              </p>
              
              
              <div className="flex space-x-4 mb-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-background/10 border-background/20 text-background hover:bg-primary-glow hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-background/10 border-background/20 text-background hover:bg-primary-glow hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-background/10 border-background/20 text-background hover:bg-primary-glow hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>

              <Button 
                variant="outline"
                className="bg-primary-glow/20 border-primary-glow text-background hover:bg-primary-glow hover:text-foreground w-full"
                onClick={() => window.open('https://wa.me/919910815132', '_blank')}
              >
                Start Your Project
              </Button>
            </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-background/80 text-sm mb-4 md:mb-0">
              <p>&copy; 2026 Consais. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
          
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="text-background/80 hover:text-primary-glow hover:bg-background/10"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;