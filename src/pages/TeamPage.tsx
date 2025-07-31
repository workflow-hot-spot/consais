import Header from "@/components/Header";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, GraduationCap, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const TeamPage = () => {
  const teamStats = [
    {
      icon: <Users className="h-6 w-6" />,
      number: "90+",
      label: "Combined Years",
      description: "Of industry experience"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      number: "40+",
      label: "Projects Led",
      description: "Successful deliveries"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      number: "15+",
      label: "Certifications",
      description: "Professional credentials"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      number: "5+",
      label: "Countries",
      description: "International experience"
    }
  ];

  // const departments = [
  //   {
  //     name: "Strategy & Leadership",
  //     description: "Visionary leaders who drive our strategic direction and ensure alignment with market needs.",
  //     icon: "🎯",
  //     count: 2
  //   },
  //   {
  //     name: "Engineering & Architecture",
  //     description: "Technical experts who design and build robust, scalable solutions for our clients.",
  //     icon: "⚙️",
  //     count: 2
  //   },
  //   {
  //     name: "Quality & Project Management",
  //     description: "Professionals who ensure timely delivery and maintain the highest quality standards.",
  //     icon: "✅",
  //     count: 1
  //   },
  //   {
  //     name: "Design & Marketing",
  //     description: "Creative minds who craft exceptional user experiences and drive market engagement.",
  //     icon: "🎨",
  //     count: 1
  //   }
  // ];



  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
                Meet Our Team
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Meet the Experts Behind Your Success
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Our diverse team of seasoned professionals brings decades of combined experience 
                in technology, business strategy, and digital transformation.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  Work With Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

      

        {/* Main Team Component */}
        <Team />

        

        {/* Departments Overview */}
        {/* <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Departments</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Specialized Expertise Across Domains
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our team is organized into specialized departments, each bringing deep expertise 
                in their respective domains to deliver comprehensive solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <Card key={dept.name} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-4xl">{dept.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{dept.name}</h3>
                        <p className="text-sm text-muted-foreground">{dept.count} Team Member{dept.count > 1 ? 's' : ''}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{dept.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Company Culture */}
   
        {/* Join Our Team CTA */}
        {/* <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground">
              <h2 className="text-4xl font-bold mb-6">Want to Join Our Team?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for technology 
                and helping businesses succeed. Join us in shaping the future of digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  onClick={() => window.open('mailto:careers@workflowcatalyst.com', '_blank')}
                >
                  Send Your CV
                </Button>
              </div>
            </div>
          </div>
        </section> */}
      </main>
        {/* Team Stats */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {teamStats.map((stat, index) => (
                <Card key={stat.label} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                    <div className="text-muted-foreground text-sm">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default TeamPage;