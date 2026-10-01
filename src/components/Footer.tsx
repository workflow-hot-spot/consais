import { ArrowUp, Building2, FileText, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/images/consais-logo.png";

const Footer = () => {
  const services = [
    "Fintech Engineering",
    "Lending Platforms",
    "Cloud Infrastructure",
    "DevSecOps & CI/CD",
    "Secure Integrations",
    "Reliability, BCP & DR",
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Technologies", href: "/technologies" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Our Team", href: "/team" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <footer className="bg-[#071827] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Consais" className="h-16 w-16 object-contain" />
              <span className="text-2xl font-semibold">Consais</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Fintech engineering, cloud infrastructure and secure systems for financial and mission-critical environments.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Capabilities</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {services.map((service) => <li key={service}>{service}</li>)}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.href}><Link to={link.href} className="hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <div className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-cyan-300" /><span>+91 9910815132</span></div>
              <div className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-cyan-300" /><span>support@consais.com</span></div>
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" /><span>S1E 302, Palm Drive, Golf Course Ext Road, Gurgaon 122101</span></div>
              <div className="flex gap-3"><Building2 className="h-4 w-4 shrink-0 text-cyan-300" /><span>Ninianpa Solutions</span></div>
              <div className="flex gap-3"><FileText className="h-4 w-4 shrink-0 text-cyan-300" /><span>GSTIN: 06AFUPP6960P1ZA</span></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Consais. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="rounded-full p-2 hover:bg-white/10 hover:text-white" aria-label="Back to top">
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
