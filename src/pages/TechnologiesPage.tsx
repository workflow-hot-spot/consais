import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import {
  Cloud, Code2, Container, Database, GitBranch, LockKeyhole, Server, Workflow,
} from "lucide-react";

const technologyGroups = [
  {
    title: "Financial & Application Engineering",
    description: "Application services and APIs that support financial workflows, integrations and operational systems.",
    items: [
      { name: "Java / Spring Boot", detail: "Enterprise application services", icon: Code2, color: "bg-[#6DB33F]" },
      { name: "Python", detail: "Services, automation and integration", icon: Code2, color: "bg-[#3776AB]" },
      { name: "PostgreSQL", detail: "Relational data and persistence", icon: Database, color: "bg-[#4169E1]" },
    ],
  },
  {
    title: "Cloud & Infrastructure as Code",
    description: "Repeatable infrastructure patterns for cloud workloads, environments and deployment configuration.",
    items: [
      { name: "AWS", detail: "Cloud infrastructure and workloads", icon: Cloud, color: "bg-[#232F3E]" },
      { name: "Terraform", detail: "Infrastructure as Code", icon: Server, color: "bg-[#623CE4]" },
      { name: "Docker", detail: "Containerized applications", icon: Container, color: "bg-[#2496ED]" },
      { name: "Kubernetes", detail: "Container orchestration where appropriate", icon: Container, color: "bg-[#326CE5]" },
    ],
  },
  {
    title: "Delivery & Workflow Automation",
    description: "Controlled software delivery and bespoke workflows that connect applications, APIs and business processes.",
    items: [
      { name: "Jenkins", detail: "CI/CD pipelines and release stages", icon: Workflow, color: "bg-[#D24939]" },
      { name: "Git", detail: "Version control and change history", icon: GitBranch, color: "bg-[#F05032]" },
      { name: "n8n", detail: "Bespoke workflow automation and integrations", icon: Workflow, color: "bg-[#EA4B71]" },
    ],
  },
];

const principles = [
  { title: "Security by design", text: "Authentication, authorization, secrets handling and OWASP-aligned application security practices are considered throughout engineering.", icon: LockKeyhole },
  { title: "Controlled change", text: "Version control, pipeline approvals, deployment records and documentation help make production change reviewable.", icon: Workflow },
  { title: "Operational resilience", text: "Infrastructure and deployment choices account for monitoring, recovery, business continuity and disaster recovery needs.", icon: Cloud },
  { title: "Fit-for-purpose architecture", text: "We select tools based on workload, team capability, operational requirements and the complexity the system actually needs.", icon: Database },
];

const TechnologiesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-[#071827] text-white lg:pt-36 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 border-white/20 bg-white/5 text-cyan-200">Engineering Technology</Badge>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">A practical stack for systems that matter.</h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                Our technology choices support financial application engineering, cloud infrastructure, controlled delivery, secure integrations and operational resilience—not technology for its own sake.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-slate-200">
                {["AWS", "Spring Boot", "Terraform", "Jenkins", "Docker", "Kubernetes", "n8n"].map((name) => <span key={name} className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{name}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary">TECHNOLOGY AREAS</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Tools connected to the engineering problem.</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">The stack varies by engagement. We use the tools that suit the system’s architecture, deployment model and operating constraints.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {technologyGroups.map((group) => (
                <Card key={group.title} className="h-full border-border/60 bg-card/60">
                  <div className="p-6 pb-2">
                    <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{group.description}</p>
                  </div>
                  <CardContent className="space-y-3 p-6 pt-4">
                    {group.items.map((tech) => {
                      const Icon = tech.icon;
                      return <div key={tech.name} className="flex items-center gap-3 rounded-xl border border-border/60 p-3">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white ${tech.color}`}><Icon className="h-6 w-6" /></div>
                        <div><h4 className="font-semibold text-foreground">{tech.name}</h4><p className="text-sm text-muted-foreground">{tech.detail}</p></div>
                      </div>;
                    })}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary">ENGINEERING PRINCIPLES</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">The operating model matters as much as the stack.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return <div key={principle.title} className="rounded-2xl border border-border bg-background p-6">
                  <div className="flex items-start gap-4"><div className="rounded-xl bg-primary/10 p-3 text-primary"><Icon className="h-6 w-6" /></div><div><h3 className="text-lg font-semibold text-foreground">{principle.title}</h3><p className="mt-2 leading-7 text-muted-foreground">{principle.text}</p></div></div>
                </div>;
              })}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">Specific tools and deployment patterns are selected for each engagement; not every technology is used in every solution.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TechnologiesPage;
