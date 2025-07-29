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
      description: "Technology adoption strategies tailored for SME growth"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Seasoned professionals across all technology domains"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Cutting-edge solutions that drive digital transformation"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "Commitment to quality and long-term partnerships"
    }
  ];

  const expertise = [
    "CRM & ERP Solutions",
    "Supply Chain Management",
    "Tele-sales Systems",
    "Loan Origination",
    "API Gateways",
    "Analytics & ETL",
    "Datamart Design",
    "Cloud AWS Adoption",
    "IT Infrastructure Setup"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Workflow Catalyst</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Empowering SMEs Through Digital Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Workflow Catalyst, we are a team of seasoned experts dedicated to empowering 
            Small and Medium-sized Enterprises (SMEs) in the trading and finance space.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Your Trusted Technology Partner
            </h3>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Our collective experience spans critical domains including CRM, ERP, SCM, Tele-sales, 
                Loan Origination, API Gateways, Analytics, ETL, Datamart Design, Cloud AWS Adoption, 
                IT Infrastructure Setup, and much more.
              </p>
              <p className="text-lg leading-relaxed">
                We are committed to helping SMEs initiate or evolve their digitalization journey. 
                Our support most often takes the form of strategic advisory for technology adoption, 
                expert guidance in team building, and facilitating effective partnerships with 
                leading solution providers.
              </p>
              <p className="text-lg leading-relaxed">
                We believe in building long-term partnerships, providing continuous support and 
                adapting to the evolving technological landscape to keep you ahead.
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

        {/* Expertise Section */}
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

        {/* Stats Section */}
       
      </div>
    </section>
  );
};

export default About;