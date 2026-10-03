import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Blocks, ClipboardCheck, CloudCog, GitBranch, ShieldCheck, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { icon: Blocks, title: "Understand the system", description: "Clarify business workflows, users, integrations, operating constraints and the outcomes the system must support." },
  { icon: CloudCog, title: "Design architecture and infrastructure", description: "Define application boundaries, network and workload layout, data flows, environments and infrastructure requirements." },
  { icon: ShieldCheck, title: "Build security into the design", description: "Address identity and access, secrets, API boundaries, data protection and relevant application security practices." },
  { icon: GitBranch, title: "Automate delivery and change control", description: "Use version control, CI/CD, infrastructure as code and approval stages appropriate to the production environment." },
  { icon: ClipboardCheck, title: "Document and hand over", description: "Keep architecture decisions, deployment instructions, runbooks and change records usable by the people operating the system." },
  { icon: Activity, title: "Plan for operations and recovery", description: "Consider monitoring, incident response, active-passive design, business continuity and disaster recovery requirements." },
];

const HowWeWorkPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="bg-[#071827] pb-16 pt-32 text-white lg:pb-20 lg:pt-36"><div className="container mx-auto px-4 text-center sm:px-6 lg:px-8"><Badge variant="outline" className="mb-6 border-white/20 bg-white/5 text-cyan-200">How We Work</Badge><h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Engineering with production in mind.</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">We treat architecture, application security, infrastructure, deployment controls and operational readiness as connected parts of the same system.</p><div className="mt-8"><Link to="/contact"><Button size="lg" className="bg-white text-[#071827] hover:bg-slate-100">Discuss your requirements <ArrowRight className="ml-2 h-5 w-5" /></Button></Link></div></div></section>
      <section className="py-16 lg:py-20"><div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-3xl"><p className="text-sm font-semibold tracking-[0.18em] text-primary">DELIVERY MODEL</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">From requirements to reliable operations.</h2><p className="mt-4 text-lg leading-8 text-muted-foreground">The exact scope varies by engagement, but our approach aims to make design choices, changes and operational responsibilities clear.</p></div><div className="space-y-5">{steps.map((step, index) => { const Icon = step.icon; return <div key={step.title} className="flex gap-5 rounded-2xl border border-border/70 bg-card p-5 sm:p-7"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></div><div><p className="text-xs font-semibold tracking-[0.16em] text-primary">STEP {index + 1}</p><h3 className="mt-1 text-xl font-semibold text-foreground">{step.title}</h3><p className="mt-2 leading-7 text-muted-foreground">{step.description}</p></div></div>; })}</div></div></section>
      <section className="bg-slate-50 py-16"><div className="container mx-auto px-4 text-center sm:px-6 lg:px-8"><h2 className="text-3xl font-semibold tracking-tight text-foreground">A delivery process shaped around your environment.</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">We align the level of documentation, approval controls, automation and recovery planning to the system’s risks and operating requirements.</p><div className="mt-7"><Link to="/services"><Button variant="outline" size="lg">Explore capabilities <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div></div></section>
    </main>
    <Footer />
  </div>
);

export default HowWeWorkPage;
