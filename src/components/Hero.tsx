import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "/images/hero-bg.jpg";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    // {
    //   badge: "🚀 Driving Digital Excellence",
    //   title: "Innovate. Transform.",
    //   titleHighlight: "Achieve.",
    //   subtitle: "Driving digital excellence with cutting-edge solutions tailored for your business success.",
    //   stats: [
    //      { value: "5⭐", label: " Performance" },
    //     { value: "10+", label: "Industries Served" },
    //     { value: "4", label: "ML Projects" },
    //     { value: "5⭐", label: "Security" },
    //    ]
    // },
    {
      badge: "⚡ Transformational Intelligence",
      title: "AI Enabled",
      titleHighlight: "Bespoke Solutions",
      subtitle: "Specialized app development powered by workflow frameworks, advanced AI technology, generative frameworks, and modern solutions.",
      stats: [
         { value: "5⭐", label: " Performance" },
        { value: "10+", label: "Industries Served" },
        { value: "4", label: "ML Projects" },
        { value: "5⭐", label: "Security" },
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const HeroSlide = ({ slide }: { slide: typeof heroSlides[0] }) => (
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary-foreground border border-primary/20 backdrop-blur-sm mb-6">
          <span className="text-sm font-medium">{slide.badge}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          {slide.title}{" "}
          <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
            {slide.titleHighlight}
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          {slide.subtitle}
        </p>
        <div className="flex justify-center mb-12">
          <Link to="/contact">
            <Button 
              variant="gradient" 
              size="xl" 
              className="group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {slide.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Tech Background" className="w-full h-full object-cover animate-pulse-glow" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90 animate-fade-in"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>

      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className={index === currentSlide ? "block" : "hidden"}>
              <HeroSlide slide={slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 bg-background/20 border-primary-foreground/20 text-primary-foreground hover:bg-primary/20" />
        <CarouselNext className="right-8 bg-background/20 border-primary-foreground/20 text-primary-foreground hover:bg-primary/20" />
      </Carousel>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
