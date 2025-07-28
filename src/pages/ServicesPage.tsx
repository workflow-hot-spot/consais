import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current systems, understand your business needs, and identify opportunities for improvement."
    },
    {
      step: "02", 
      title: "Strategy & Planning",
      description: "Our experts create a customized roadmap with clear milestones, timelines, and success metrics."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the plan with minimal disruption to your operations, ensuring smooth deployment."
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Ongoing support, monitoring, and optimization to ensure your solutions continue to deliver value."
    }
  ];

  const serviceFeatures = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Most projects delivered within 2-8 weeks"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost-Effective",
      description: "Competitive pricing with transparent billing"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dedicated Team",
      description: "Assigned project manager and technical team"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Assured",
      description: "Rigorous testing and quality control processes"
    }
  ];

  const industries = [
    { name: "Financial Services", icon: "🏦" },
    { name: "Healthcare", icon: "🏥" },
    { name: "E-commerce", icon: "🛒" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Education", icon: "🎓" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Logistics", icon: "🚛" },
    { name: "Retail", icon: "🏪" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                Our Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Comprehensive IT Solutions for Modern Businesses
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                From cloud infrastructure to custom development, we provide end-to-end technology solutions 
                that drive business growth and digital transformation for SMEs.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Services Component */}
        <Services />

        {/* Our Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Process</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                How We Deliver Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our proven methodology ensures successful project delivery with minimal risk and maximum value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {processSteps.map((step, index) => (
                <Card key={step.step} className="relative group hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {step.step}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-20 w-16 h-0.5 bg-border"></div>
                      )}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceFeatures.map((feature, index) => (
                <div key={feature.title} className="flex items-center space-x-3 p-4 bg-card/50 rounded-xl border border-border/50 hover:bg-card transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-muted-foreground text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Industries We Serve</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Expertise Across Multiple Sectors
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our solutions are tailored to meet the unique challenges and requirements of various industries.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <Card key={industry.name} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{industry.icon}</div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a customized solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => window.open('https://wa.me/919910815132', '_blank')}
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;