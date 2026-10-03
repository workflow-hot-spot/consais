import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Landmark, Workflow, ShieldCheck, Cloud, GitBranch, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const experience = [
  { title: "Core banking", text: "Senior members of our team have worked on core banking systems at Citibank." },
  { title: "Lending platforms", text: "Our teams built complete loan origination and loan management systems for Giraaf and Power2SME, including integrations with providers such as CIBIL and Perfios." },
  { title: "Regulated environments", text: "Experience includes systems, processes, documentation and change records reviewed in the context of requirements applicable to NBFCs." },
  { title: "Reliability engineering", text: "Our team also has experience working on reliability applications for DRDO." },
];

const focusAreas = [
  { icon: Landmark, title: "Financial systems", text: "Lending workflows, financial applications, APIs and external data-provider integrations." },
  { icon: Cloud, title: "Cloud infrastructure", text: "AWS environments, infrastructure automation and production workload design." },
  { icon: GitBranch, title: "Controlled delivery", text: "Jenkins CI/CD, approval stages, version control and Infrastructure as Code with Terraform." },
  { icon: ShieldCheck, title: "Secure application engineering", text: "Security-aware design, access controls, integration patterns and OWASP-aligned practices." },
  { icon: Activity, title: "Reliability & recovery", text: "Active-passive architecture, business continuity planning, disaster recovery and runbooks." },
  { icon: Workflow, title: "Workflow automation", text: "Bespoke workflows and system integrations, including automation using tools such as n8n." },
];

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="bg-[#071827] pb-16 pt-32 text-white lg:pb-20 lg:pt-36">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-6 border-white/20 bg-white/5 text-cyan-200">About Consais</Badge>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Fintech engineering, cloud infrastructure and secure systems.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">Consais focuses on the engineering behind financial and mission-critical systems—from application architecture and integrations to infrastructure, controlled deployment and recovery.</p>
          <div className="mt-8"><Link to="/contact"><Button size="lg" className="bg-white text-[#071827] hover:bg-slate-100">Discuss a project <ArrowRight className="ml-2 h-5 w-5" /></Button></Link></div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary">OUR FOCUS</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A specialist engineering approach.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Production systems need more than application code. Architecture, security, cloud infrastructure, release controls, documentation and operational resilience need to work together.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((item) => { const Icon = item.icon; return <Card key={item.title} className="h-full border-border/60"><CardContent className="p-6"><div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary"><Icon className="h-6 w-6" /></div><h3 className="text-lg font-semibold text-foreground">{item.title}</h3><p className="mt-2 leading-7 text-muted-foreground">{item.text}</p></CardContent></Card>; })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold tracking-[0.18em] text-primary">ENGINEERING EXPERIENCE</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Experience grounded in real systems.</h2><p className="mt-4 text-lg leading-8 text-muted-foreground">These examples describe team members’ prior experience and Consais delivery work; they do not imply that every named organization is a Consais client.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {experience.map((item) => <div key={item.title} className="rounded-2xl border border-border bg-background p-6"><h3 className="text-lg font-semibold text-foreground">{item.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{item.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-16"><div className="container mx-auto px-4 text-center sm:px-6 lg:px-8"><h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Have a system to build, integrate or modernize?</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">Tell us about the workflow, operating environment and constraints. We can discuss a practical architecture and delivery approach.</p><div className="mt-7"><Link to="/contact"><Button size="lg">Talk to Consais <ArrowRight className="ml-2 h-5 w-5" /></Button></Link></div></div></section>
    </main>
    <Footer />
  </div>
);

export default AboutPage;
