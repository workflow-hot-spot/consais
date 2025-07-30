import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Users, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Optimal Solution Design",
      description: "Solutioning that starts with a clear understanding of your business needs and objectives."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Rigourous Testing",
      description: "It ain't done till it is tested. Be it for functionality, performance or security."
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Engineering & Documentation Excellence",
      description: "An approach that engenders trust and business continuity."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Evolution Support",
      description: "Operational and engineering  support to keep your business running"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Improve efficiency with automated workflows",
    "Scale your business with cloud infrastructure", 
    "Enhance security with enterprise-grade solutions",
    "Get real-time insights with advanced analytics",
    "Integrate seamlessly with existing systems"
  ];

  const testimonials = [
    {
      quote: "I have been involved with software development in e-commerce, data mining, business anlaytics, GIS, supply chain, fintech, imagery processing domains. In fact been at this craft since the dot com boom. I've have had the opportunity to work with captive and outsourced development teams. A key issue that ails the out-sourcing model is lack of sense of ownership.  At workflow catalyst we think differently, all of us have spent a decade and more in product companies. Each one of us says \"What gets built here is a reflection about me, it better be good.\". Every project calls upon our ability to infuse a blend of science and art. A personal calling. Monetary success is a byproduct of our passion for technology and our commitment to our clients.",
      author: "Nitish Pandey",
      role: "Founder & Head of Strategy",
     
    },
    {
      quote: "Poor service and support. They delivered our e-commerce platform .",
      author: "Vijay Sales", 
      role: "BD, Bizfund",
      rating: 5
    },
    {
      quote: "The team's expertise in cloud migration saved us months of downtime. Highly recommended for any SME.",
      author: "Sanjay Mohan",
      role: "CTO, MMT",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Why Choose Workflow Catalyst</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Driving Digital Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver 
                solutions that transform businesses and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={feature.title} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-card/50 rounded-xl border border-border/50">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Services Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Comprehensive IT Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                From cloud infrastructure to custom development, we provide end-to-end 
                technology solutions for your business needs.
              </p>
              <Link to="/services">
                <Button variant="hero" size="lg">
                  Explore All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Platform Solutions</h3>
                  <p className="text-muted-foreground mb-4">Cloud infrastructure, migration, and optimization services</p>
                  <Link to="/services">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Digital Transformation</h3>
                  <p className="text-muted-foreground mb-4">CRM, ERP, and business automation solutions</p>
                  <Link to="/services">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Custom Development</h3>
                  <p className="text-muted-foreground mb-4">Web applications, APIs, and e-commerce platforms</p>
                  <Link to="/services">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Value Statements</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What Our Founding Team Says
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                It is just not another coding project for us. There's a journey that has brought us to this point, and we are committed to making a difference in the SME sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Core Technologies</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We leverage a diverse and robust set of technologies to build scalable, 
                efficient, and innovative web-based solutions for our clients.
              </p>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link to="/technologies">
                    Explore Our Technologies
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { name: "MongoDB", color: "bg-green-600", icon: "🍃" },
                { name: "Nginx", color: "bg-green-700", icon: "⚡" },
                { name: "Camunda", color: "bg-orange-600", icon: "⚙️" },
                { name: "Java", color: "bg-blue-600", icon: "☕" },
                { name: "Python", color: "bg-blue-500", icon: "🐍" },
                { name: "FastAPI", color: "bg-cyan-600", icon: "🚀" },
                { name: "PHP", color: "bg-purple-600", icon: "🔧" },
                { name: "MySQL", color: "bg-orange-500", icon: "🗃️" },
                { name: "PostgreSQL", color: "bg-blue-700", icon: "🐘" }
              ].map((tech, index) => (
                <Card key={tech.name} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-3 text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {tech.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{tech.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Trusted Partners</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Engines At These Brands Have <br />A Little Bit Of Workflow Catalyst
              </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto mb-12">
              The  team has multi-decade experience defining and building robust  solutions for leading organizations across various sectors, helping them achieve their digitalization goals.
            They are now available to streamline your operations with low cost yet intuitive and secure customer facing or internal facing use cases.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { name: "Citi Bank", industry: "Banking & Finance", logo: "/images/Citibank-Logo.png" },
                { name: "Power2SME", industry: "B2B Marketplace", logo: "/images/p2s.png" },
                { name: "MakeMyTrip", industry: "Travel & Tourism", logo: "/images/mmt.png" },
                { name: "BizFunds", industry: "Financial Services", logo: "/images/bizfunds.png" },
                { name: "Snapdeal", industry: "E-commerce", logo: "/images/sd.png" },
                { name: "InfoEdge", industry: "Information Services", logo: "/images/infoedge.png" },
                { name: "Gaana", industry: "Music Streaming", logo: "/images/gaana.png" },
                { name: "Axis Max Life", industry: "Insurance", logo: "/images/axis.png" }
              ].map((brand, index) => (
                <Card key={brand.name} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-40 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 p-2 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{brand.name}</h3>
                    <p className="text-sm text-muted-foreground">{brand.industry}</p>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can drive your next big success. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;