import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight,CheckCircle, Users, Target, Settings, Award, TrendingUp } from "lucide-react";

const HowWeWorkPage = () => {
  const workflowSteps = [
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Analysis & Discovery",
      description: "We begin with comprehensive analysis of your business requirements, market research, and technical feasibility assessment."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Planning & Strategy",
      description: "Our team develops detailed project roadmaps, resource allocation, and strategic implementation plans tailored to your goals."
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Design & Development",
      description: "We create innovative solutions using cutting-edge technologies, following best practices and agile methodologies."
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Testing & Optimization",
      description: "Rigorous quality assurance, performance testing, and optimization ensure your solution meets the highest standards."
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Deployment & Launch",
      description: "Seamless deployment with minimal downtime, comprehensive documentation, and knowledge transfer to your team."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Support & Maintenance",
      description: "Ongoing support, regular updates, performance monitoring, and continuous improvement to ensure long-term success."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                Our Approch
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
                How we work
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Our proven methodology combines extensive experience, local knowledge, and innovative approaches to deliver exceptional results for your business.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
   

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* We Create Next-big For You */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              We Create Next-big For You
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We aim to solve different problems and paint a bright future for businesses taking the best route. 
              We shape the best system addressing emerging business drivers, using extensive experience, local knowledge, 
              and a great approach - the most crucial aspects of all projects. We work differently, and this is what helps 
              us build the best solution for you and for you.
            </p>
          </div>

          {/* Workflow Steps - Stepper Format */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
              Comprehensive Analysis of Our Functioning
            </h3>
            
            <div className="max-w-4xl mx-auto">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  {/* Step Number and Icon */}
                  <div className="flex flex-col items-center mr-6 flex-shrink-0">
                    <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mb-2 shadow-lg">
                      {index + 1}
                    </div>
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {step.icon}
                      </div>
                    </div>
                    {/* Connecting Line */}
                    {index < workflowSteps.length - 1 && (
                      <div className="w-0.5 h-20 bg-gradient-to-b from-primary/60 to-primary/20 mt-4"></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <Card className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20 bg-gradient-to-r from-background to-background/80">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Our Unique Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Agile Methodology:</strong> Flexible and iterative development process
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Client-Centric:</strong> Regular communication and feedback integration
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Quality Focused:</strong> Rigorous testing and quality assurance
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Scalable Solutions:</strong> Built for future growth and expansion
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Latest Technologies:</strong> Cutting-edge tools and frameworks
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">24/7 Support:</strong> Continuous monitoring and maintenance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowWeWorkPage;