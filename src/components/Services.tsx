import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Landmark,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    icon: <Landmark className="h-7 w-7" />,
    title: "Fintech Engineering",
    description:
      "Engineering financial applications and workflows with an emphasis on security, reliability, auditability and controlled change.",
    services: [
      "Financial application architecture",
      "Payment and transaction workflows",
      "Financial APIs and integrations",
      "Secure application engineering",
    ],
  },
  {
    icon: <Workflow className="h-7 w-7" />,
    title: "Lending Platforms",
    description:
      "End-to-end lending platforms covering origination, data integrations, credit workflows, loan management and servicing.",
    services: [
      "Loan origination systems",
      "Loan management systems",
      "CIBIL and Perfios integrations",
      "Credit and underwriting workflows",
    ],
  },
  {
    icon: <Cloud className="h-7 w-7" />,
    title: "Cloud Infrastructure",
    description:
      "Cloud infrastructure designed for secure production workloads, repeatable environments and operational resilience.",
    services: [
      "AWS infrastructure architecture",
      "Network and workload design",
      "Environment automation",
      "Production infrastructure",
    ],
  },
  {
    icon: <GitBranch className="h-7 w-7" />,
    title: "DevSecOps & CI/CD",
    description:
      "Controlled software delivery using source control, automated pipelines, approval stages and infrastructure as code.",
    services: [
      "Jenkins CI/CD pipelines",
      "Infrastructure as Code with Terraform",
      "Approval and change-control workflows",
      "Automated build and deployment",
    ],
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Secure Financial Integrations",
    description:
      "Secure integration of financial data providers and external services into applications and business workflows.",
    services: [
      "Financial data provider integrations",
      "API security and access controls",
      "Authentication and authorization",
      "OWASP-aligned application security practices",
    ],
  },
  {
    icon: <Database className="h-7 w-7" />,
    title: "Reliability, BCP & DR",
    description:
      "Resilient production architectures and operational practices designed around continuity, recovery and controlled failure.",
    services: [
      "Active-passive architectures",
      "Business continuity planning",
      "Disaster recovery design",
      "Operational runbooks and recovery procedures",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceCategories.map((category) => (
            <Card
              key={category.title}
              className="group h-full border-border/60 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <CardHeader>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 transition-transform duration-300 group-hover:scale-105">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
                <p className="text-sm leading-6 text-muted-foreground pt-1">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-primary/15 bg-primary/5 p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                Engineering engagements
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                From architecture and infrastructure to production delivery
              </h3>
              <p className="text-muted-foreground leading-7">
                We can engage around a complete financial platform, a specific engineering capability,
                or the cloud and delivery infrastructure required to operate it reliably. Bespoke workflow automation—including n8n-based orchestration and API integrations—can support these systems without becoming a separate headline offering.
              </p>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button variant="hero" size="lg">
                Discuss Your Requirements
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
