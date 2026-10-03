import Header from "@/components/Header";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TeamPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="bg-[#071827] pb-16 pt-32 text-white lg:pb-20 lg:pt-36">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 border-white/20 bg-white/5 text-cyan-200">Our Team</Badge>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">People who connect business workflows with engineering.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">Our team brings experience across financial applications, product and solution architecture, delivery management, data and user-facing systems.</p>
          <div className="mt-8"><Link to="/contact"><Button size="lg" className="bg-white text-[#071827] hover:bg-slate-100">Work with our team <ArrowRight className="ml-2 h-5 w-5" /></Button></Link></div>
        </div>
      </section>
      <Team />
    </main>
    <Footer />
  </div>
);

export default TeamPage;
