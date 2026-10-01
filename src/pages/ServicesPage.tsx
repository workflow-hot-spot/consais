import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const deliveryPrinciples = [
  "Architecture before implementation",
  "Security considered throughout the lifecycle",
  "Infrastructure defined as code where appropriate",
  "Controlled CI/CD with approvals and change management",
  "Operational resilience and recovery planned from the outset",
  "Clear documentation for production systems",
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-24 pb-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge
                variant="outline"
                className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20"
              >
                Capabilities
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Engineering for financial and mission-critical systems
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto mb-8">
                Consais brings together fintech engineering, cloud infrastructure, secure application
                development and controlled software delivery to build systems that are designed for production.
              </p>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Discuss Your Requirements
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background border-b border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
              <div>
                <p className="text-2xl font-bold text-foreground">Financial Systems</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Lending, financial workflows and secure integrations.
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Cloud & Delivery</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  AWS, Infrastructure as Code and controlled CI/CD.
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Resilience</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Security, BCP, disaster recovery and operational controls.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Services />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge variant="outline" className="mb-4">
                  Engineering approach
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-5">
                  Built around controlled delivery, not just development
                </h2>
                <p className="text-lg text-muted-foreground leading-8">
                  Financial and mission-critical systems need more than application code. Architecture,
                  infrastructure, security, deployment controls, documentation and recovery all form part
                  of the engineering solution.
                </p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-card/50 p-6 lg:p-8">
                <div className="space-y-4">
                  {deliveryPrinciples.map((principle) => (
                    <div key={principle} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm lg:text-base text-muted-foreground leading-6">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                Experience matters
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-5">
                Experience spanning financial and reliability-focused systems
              </h2>
              <p className="text-lg text-muted-foreground leading-8 mb-8">
                Senior members of our team have worked on core banking systems at Citibank and reliability
                applications for DRDO. Our teams have also built complete loan origination and loan management
                platforms for financial businesses operating in regulated environments.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Explore Our Experience
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-primary rounded-3xl p-10 lg:p-12 text-center text-primary-foreground">
              <h2 className="text-3xl lg:text-4xl font-bold mb-5">Have a system to build or modernize?</h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-7">
                Tell us what you are building, the environment it needs to operate in, and the engineering
                constraints that matter. We can discuss the architecture, infrastructure and delivery model.
              </p>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Talk to Consais
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
