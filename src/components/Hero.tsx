import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Tech Background" 
          className="w-full h-full object-cover animate-pulse-glow"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90 animate-fade-in"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
        
        {/* Animated Background Overlays */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-slide-bg"></div>
          <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-transparent via-accent/40 to-transparent animate-slide-bg" style={{ animationDelay: '10s' }}></div>
          <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-glow/30 to-transparent animate-slide-bg" style={{ animationDelay: '5s' }}></div>
          <div className="absolute bottom-1/4 right-0 w-full h-1 bg-gradient-to-l from-transparent via-accent/30 to-transparent animate-slide-bg" style={{ animationDelay: '15s' }}></div>
        </div>
        
        {/* Moving Gradient Mesh */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full animate-drift blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-bl from-accent/30 to-transparent rounded-full animate-float blur-3xl" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-primary-glow/30 to-transparent rounded-full animate-pulse-glow blur-3xl" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-drift blur-xl"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary-glow/20 rounded-full animate-pulse-glow blur-xl"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-20 w-18 h-18 bg-accent/15 rounded-full animate-drift blur-xl" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-20 right-1/3 w-14 h-14 bg-primary/15 rounded-full animate-pulse-glow blur-xl" style={{ animationDelay: '5s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary-foreground border border-primary/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium">🚀 Driving Digital Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Innovate. Transform.{" "}
            <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Achieve.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Driving digital excellence with cutting-edge solutions tailored for your business success.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12">
            <Button 
              variant="gradient" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/80 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">5+</div>
              <div className="text-primary-foreground/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">100%</div>
              <div className="text-primary-foreground/80 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;