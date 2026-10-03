import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Nitish Pandey",
      role: "Founder and Sales Head",
      description: "A postgraduate in computer science from IIT Bombay, Nitish brings long-running software industry experience and process orientation from his service in the Indian Navy. His experience includes technology and product leadership at digital businesses and fintech company Bizfunds.com. At Consais, he shapes engineering strategy and solution design.",
      image: "/images/nitish.png",
      specialties: ["Strategic Planning", "Product Innovation", "Financial Management", "Software Development"],
      in:"https://www.linkedin.com/in/nitishnitish/",
     
    },
    {
      name: "Nishant Pandey",
      role: "SVP Business Development",
      description: "Nishant brings experience in product management, analytics and data-led product strategy. He has worked across Naukri, Jeevansathi and Shiksha at Info Edge, and previously at Schlumberger. An alumnus of IIT Delhi and ISB Hyderabad, he helps connect business objectives with product and solution priorities.",
      image: "/images/nishant.jpg",
      specialties: ["Product Management", "Analytics", "Data-Driven Strategy", "Growth"],
      in:"https://www.linkedin.com/in/nishant-pandey/",
      
    },
    {
      name: "Siddharth Chaturvedi",
      role: "SVP Solutions & Partnerships",
      description: "With over 18 years of experience in product management and solution building, Siddharth has led digital initiatives across B2B/B2C commerce, fintech and classifieds. His experience includes roles at Naukri.com, Reliance Entertainment, Askme and Power2SME, bringing business requirements and engineering delivery together.",
      image: "/images/sid.png",
      specialties: ["Customer Success", "Business Analysis", "Partnership Synergy", "Process Optimization"],
      in:"https://www.linkedin.com/in/siddharthchaturvedi/",
     
    },
    {
      name: "Sunil Kunwar",
      role: "VP of Engineering",
      description: "Experienced Technology Consultant and Solution Architect with a strong background in database design, corporate action automation, and document management solutions for institutional clients. Played a key role at Calance, Information Mosaic, and Citigroup, delivering critical systems for global clients like UBS and ADIA. At Power2SME, built the entire B2B tech stack and NBFC loan management platform, covering end-to-end processes from lead generation to loan disbursement and multi-cycle utilization. Proven track record of designing and delivering robust, business-critical applications.",
      image: "/images/sunil.png",
      specialties: ["System Architecture", "Financial Platforms", "Database Design", "Technical Leadership"],
      in:"https://www.linkedin.com/in/kunwarsunilsingh/",
    
    },
    {
      name: "Brijesh Kannaujia",
      role: "VP Projects & Quality",
      description: "Brijesh brings over 18 years of experience in software quality and project delivery across product and service organizations. His work has included delivery and quality initiatives for Power2SME, MakeMyTrip, Sopra Banking Services, GlobalLogic and CitiXsys. He brings a structured approach to delivery readiness, release quality and coordination across teams.",
      image: "/images/brijesh.png",
      specialties: ["Delivery Governance", "Release Readiness", "Project Management", "Quality Engineering"],
      in:"https://www.linkedin.com/in/brijesh-kannaujia/",
     
    },
    {
      name: "Rahul Ragtah",
      role: "Director Design & Marketing",
      description: "Rahul brings over 12 years of experience designing web and mobile products across finance, travel, healthcare and enterprise environments. His experience includes work with Power2SME, Axis Max Life, Kissht, PNB MetLife and CarDekho. He connects user experience and product design with practical implementation needs.",
      image: "/images/rahul.png",
      specialties: ["UX/UI Design", "Product Design", "Usability Analyst", "Brand Strategy"],
      in:"https://in.linkedin.com/in/rahulragtah",
    
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Meet Our Team</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Experts Behind Your Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of seasoned professionals brings decades of combined experience 
            in web technology, workflow system design, and digital transformation.
          </p>
        </div> */}

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
                Working with stakeholders to understand requirements, dependencies and operating constraints.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Innovation</h4>
              <p className="text-muted-foreground text-sm">
                Using appropriate tools and patterns to solve the engineering problem without unnecessary complexity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Excellence</h4>
              <p className="text-muted-foreground text-sm">
                Paying attention to architecture, change control, documentation and production readiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;