import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Users, 
  Lightbulb, 
  Award,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategic Focus",
      description: "Engineering choices shaped around financial workflows and production requirements"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Hands-on experience across financial platforms, cloud and reliability-focused systems"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Practical automation and integration that support real operating workflows"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "Commitment to quality and long-term partnerships"
    }
  ];

  const expertise = [
    "Fintech Engineering",
    "Loan Origination & Management",
    "Financial API Integrations",
    "AWS Cloud Infrastructure",
    "Terraform Infrastructure as Code",
    "Jenkins CI/CD",
    "Secure Application Engineering",
    "Workflow Automation with n8n",
    "BCP & Disaster Recovery"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
       

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Engineering for Financial and Mission-Critical Systems
            </h3>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Our focus brings together fintech engineering, lending platforms, AWS cloud infrastructure, controlled CI/CD, secure integrations and operational resilience. We build and integrate systems with attention to architecture, change control, documentation and recovery.
              </p>
              <p className="text-lg leading-relaxed">
                Senior team members have worked on core banking systems at Citibank and reliability applications for DRDO. Consais teams have also built loan origination and loan management systems for Giraaf and Power2SME, including integrations with financial data providers.
              </p>
              <p className="text-lg leading-relaxed">
                We approach each engagement as an engineering system: application code, cloud infrastructure, security practices, delivery controls and operational readiness need to fit together.
              </p>
            </div>

            {/* <div className="mt-8">
              <Button variant="hero" size="lg">
                Learn More About Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div> */}
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{value.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expertise Section 
        <div className="bg-gradient-section rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Our Areas of Expertise
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We translate complex technological landscapes into clear, actionable strategies 
              for your business growth across these key domains:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={item} 
                className="flex items-center space-x-3 p-4 bg-card/50 rounded-xl border border-border/50 hover:bg-card transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
*/}
        {/* Stats Section */}
       
      </div>
    </section>
  );
};

export default About;