import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Calendar, Globe, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const timeline = [
    {
      year: "2023",
      title: "Company Founded & First Major Milestone",
      description: "Started with a vision to empower SMEs through digital transformation and Successfully delivered 5+ enterprise solutions during challenging times"
    },

    {
      year: "2024",
      title: "Cloud Specialization & Team Expansion",
      description: "Became certified partners with AWS, Azure, and Google Cloud and Grew our expert team to cover all major technology domains"
    },
    {
      year: "2025",
      title: "Innovation Focus & 40+ Projects delivered",
      description: "Expanding into AI/ML and advanced automation solutions and Reached milestone of 50+ successful project deliveries"
    }
  ];

  const achievements = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "25+",
      label: "Years Combined Experience",
      description: "Trusted Professionals"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "100+",
      label: "Projects Delivered",
      description: "Successful implementations"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "10+",
      label: "Industries Served",
      description: "Diverse sectors covered"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "95%",
      label: "Client Retention",
      description: "Long-term partnerships"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the competition.",
      icon: "💡"
    },
    {
      title: "Partnership",
      description: "We believe in building long-term relationships with our clients, acting as trusted advisors throughout their digital transformation journey.",
      icon: "🤝"
    },
    {
      title: "Excellence", 
      description: "Quality is at the core of everything we do. We maintain rigorous standards to ensure our solutions exceed expectations.",
      icon: "⭐"
    },
    {
      title: "Transparency",
      description: "We maintain open communication with clear project timelines, honest feedback, and transparent pricing throughout our engagement.",
      icon: "🔍"
    },
    {
      title: "Agility",
      description: "We adapt quickly to changing requirements and market conditions, ensuring our solutions remain relevant and effective.",
      icon: "⚡"
    },
    {
      title: "Impact",
      description: "Every solution we deliver is designed to create measurable business value and drive meaningful results for our clients.",
      icon: "🎯"
    }
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
                About Workflow Catalyst
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Empowering SMEs Through Digital Excellence
              </h1>
              
              <section id="about" className="py-16 sm:py-20 lg:py-24 bg-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
       
        <div className="md:w-1/1 text-center md:text-left">
        {/*}  <!---<p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                We are a team of experts with decades of combined experience in technology, business strategy, and digital transformation. 
                We use innovative mix of frameworks to design solutions and help you launch long term strategic digital transformation initiatives.
              </p>
              --->
           */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Workflow + Catalyst:</h3>
              
            <p className="text-gray-700 leading-relaxed mb-4">
                Our name embodies our core purpose. <i>'Workflow'</i> signifies the precise, optimized sequence of tasks that define efficient operations, from data integration (ETL) to customer relationship management (CRM) and beyond. <i>'Catalyst'</i> represents our role as the transformative agent – we don't just observe; we accelerate, initiate, and enable profound positive change. Together, **Workflow Catalyst** ensures your business achieves more than the sum of its individual parts, driving synergistic growth through intelligent design and execution.
            </p>


            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
                To be the indispensable partner for Small and Medium-sized Enterprises (SMEs) in trading and finance, pioneering intelligent, intuitive, and secure web-based solutions that unlock unprecedented operational efficiency and foster sustainable growth in a rapidly digitizing world.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
                To empower corporate teams by designing and implementing super robust, intuitive, and secure workflows and applications. We transform complex data into actionable insights, enabling information-rich environments that drive efficiency, reduce friction, and accelerate your digitalization journey.
            </p>
        </div>
    </div>
</section>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Main About Component */}
        <About />

        {/* Our Journey */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-6">
                Our Journey
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Building Excellence Since 2023
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From humble beginnings to becoming a trusted technology partner for SMEs across multiple industries.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Modern Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {timeline.map((item, index) => (
                  <Card key={item.year} className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-border/50 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                    
                    <CardContent className="p-8 relative z-10">
                      {/* Year with Modern Styling */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-6xl font-black text-primary/20 group-hover:text-primary/30 transition-colors duration-300">
                          {item.year.slice(-2)}
                        </div>
                        <div className="text-lg font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.year}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {item.description}
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className="mt-6 flex items-center space-x-2">
                        <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 group-hover:w-full" 
                            style={{ width: `${((index + 1) / timeline.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">
                          {index + 1}/{timeline.length}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Journey Continues */}
              <div className="text-center mt-16">
                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-border/50">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                  <span className="text-foreground font-medium">Journey Continues...</span>
                  <div className="w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Achievements</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Numbers That Tell Our Story
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These metrics reflect our commitment to delivering exceptional results and building lasting partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={achievement.label} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {achievement.icon}
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-2">{achievement.number}</div>
                    <div className="text-lg font-semibold text-foreground mb-1">{achievement.label}</div>
                    <div className="text-muted-foreground text-sm">{achievement.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Values</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What Drives Us Forward
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our core values guide every decision we make and every solution we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={value.title} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join the growing number of SMEs who have transformed their businesses with our expertise. 
                Let's discuss how we can help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/team">
                  <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">
                    Meet Our Team
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

export default AboutPage;