import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Nitish Pandey",
      role: "Head of Strategy & Finance",
      description: "Nitish leads our strategic vision, ensuring our solutions are innovative and aligned with market needs. His expertise in enterprise architecture drives our success.",
      image: "/images/nitish.png",
      specialties: ["Strategic Planning", "Enterprise Architecture", "Financial Management", "Market Analysis"],
      in:"https://www.linkedin.com/in/nitishnitish/",
      mailto: "nitish.pandey@workflowcatalyst.com"
    },
    {
      name: "Siddharth Chaturvedi",
      role: "Head of Business",
      description: "Sid oversees all development cycles, ensuring high-quality code and efficient delivery of our web-based applications.",
      image: "images/sid.png",
      specialties: ["Business Development", "Project Management", "Client Relations", "Process Optimization"],
      in:"https://www.linkedin.com/in/siddharthchaturvedi/",
      mailto: "siddharth@workflowcatalyst.com"
    },
    {
      name: "Sunil Kunwar",
      role: "Chief Architect & Engineer",
      description: "Sunil works to design tailored, robust solutions based on the size, budget and vision of the client. Be it ETL, workflow, and CRM solutions.",
      image: "images/sunil.png",
      specialties: ["System Architecture", "ETL Solutions", "CRM Development", "Technical Leadership"],
      in:"https://www.linkedin.com/in/kunwarsunilsingh/",
      mailto: "sunil.kunwar@workflowcatalyst.com"
    },
    {
      name: "Brijesh Kannaujia",
      role: "Head of Projects & Quality",
      description: "Brijesh works to deliver high performant solutions to the client and to get a sign off.",
      image: "images/brijesh.png",
      specialties: ["Quality Assurance", "Project Delivery", "Performance Optimization", "Client Success"],
      in:"https://www.linkedin.com/in/brijesh-kannaujia/",
      mailto: "brijesh.kannaujia@workflowcatalyst.com"
    },
    {
      name: "Rahul Ragtah",
      role: "Design and Marketing Head",
      description: "With over 12 years of experience, Rahul leads UX strategy and product design to deliver seamless, user-centered experiences. He specializes in usability testing and ensures every interface is intuitive, efficient, and aligned with user needs.",
      image: "images/rahul.png",
      specialties: ["UX/UI Design", "Product Design", "Usability Analyst", "Brand Strategy"],
      in:"https://in.linkedin.com/in/rahulragtah",
      mailto: "rahul.ragtah@workflowcatalyst.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Meet Our Team</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Experts Behind Your Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of seasoned professionals brings decades of combined experience 
            in technology, business strategy, and digital transformation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                
                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <Button size="sm" variant="outline" className="p-2">
                    <a href={member.in} target="_blank"><Linkedin className="h-4 w-4" /></a>
                  </Button>
                
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Team Values
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in collaboration, innovation, and delivering exceptional results 
              that exceed our clients' expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Collaboration</h4>
              <p className="text-muted-foreground text-sm">
                Working together with our clients as true partners in their digital journey.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Innovation</h4>
              <p className="text-muted-foreground text-sm">
                Continuously exploring new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Excellence</h4>
              <p className="text-muted-foreground text-sm">
                Committed to delivering high-quality solutions that drive measurable business results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;