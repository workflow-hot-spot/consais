import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Cloud, Database, GitBranch, Landmark, LockKeyhole, Server, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const capabilities = [
    { icon: <Landmark className="h-6 w-6" />, title: "Fintech Engineering", description: "Financial applications, workflows and APIs built around real-world lending and banking requirements." },
    { icon: <Workflow className="h-6 w-6" />, title: "Lending Platforms", description: "Loan origination and loan management systems spanning onboarding, data integrations, decisioning and servicing." },
    { icon: <Cloud className="h-6 w-6" />, title: "Cloud Infrastructure", description: "AWS infrastructure designed for secure, repeatable and operationally controlled production environments." },
    { icon: <GitBranch className="h-6 w-6" />, title: "DevSecOps & CI/CD", description: "Source control, Jenkins pipelines, approval gates, automated delivery and infrastructure as code." },
    { icon: <LockKeyhole className="h-6 w-6" />, title: "Secure Integrations", description: "Integration of financial data providers and external systems with security and auditability in mind." },
    { icon: <ShieldCheck className="h-6 w-6" />, title: "Reliability, BCP & DR", description: "Resilient architectures and controlled recovery processes for systems where continuity matters." },
  ];

  const technologyStack = [
    [Cloud, "AWS"], [Workflow, "Spring Boot"], [GitBranch, "Jenkins"], [Server, "Terraform"], [Database, "Docker / Kubernetes"], [Workflow, "n8n Automation"], [ShieldCheck, "Secure Delivery"],
  ];

  const experience = [
    { title: "Core banking", text: "Senior members of our team have worked on core banking systems at Citibank." },
    { title: "Lending platforms", text: "Our teams have built complete loan origination and loan management systems for Giraaf and Power2SME." },
    { title: "Regulated environments", text: "Experience with systems, processes, documentation and change records subject to audits for requirements applicable to NBFCs." },
    { title: "Reliability engineering", text: "Our team also has experience working on reliability applications for DRDO." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        <section className="border-b border-border bg-background py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-primary">ENGINEERING EXPERIENCE</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Experience that comes from building real systems.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Our story is grounded in hands-on engineering across financial systems, regulated environments and reliability-focused applications.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {experience.map((item) => (
                <div key={item.title} className="border-l-2 border-primary/30 pl-5">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold tracking-[0.18em] text-primary">WHAT WE BUILD</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Focused engineering capabilities.</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  We focus our engineering work where application architecture, cloud infrastructure, secure delivery and operational resilience meet.
                </p>
              </div>
              <Link to="/services">
                <Button variant="outline" size="lg">View capabilities <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item.title} className="group rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">{item.icon}</div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-primary">LENDING PLATFORM EXPERIENCE</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">From loan origination to loan management.</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  We have built complete lending platforms integrating financial data providers such as CIBIL and Perfios, connecting origination workflows through loan management and servicing.
                </p>
                <div className="mt-7 space-y-3 text-sm text-muted-foreground">
                  {[
                    "End-to-end loan origination workflows",
                    "Financial data provider integrations",
                    "Loan management and servicing workflows",
                    "Cloud-native application and delivery infrastructure",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-slate-50 p-5 sm:p-8">
                <img src="/images/consais-lending-platform.svg" alt="Lending platform architecture from loan origination through loan management" className="h-auto w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#071827] py-20 text-white lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.18em] text-cyan-200">ENGINEERING IN REGULATED ENVIRONMENTS</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Designed for controlled change, auditability and continuity.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Our experience includes systems, processes and documentation that underwent audits against regulatory requirements applicable to NBFCs, together with controlled delivery and active-passive business continuity practices.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200"><GitBranch className="h-6 w-6" /></div>
                  <div><h3 className="font-semibold">Controlled delivery</h3><p className="text-sm text-slate-400">Source control to production</p></div>
                </div>
                <img src="/images/consais-cicd-cloud.svg" alt="Controlled CI/CD delivery into AWS cloud infrastructure" className="mt-7 w-full" />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200"><Server className="h-6 w-6" /></div>
                  <div><h3 className="font-semibold">Business continuity</h3><p className="text-sm text-slate-400">Active-passive resilience</p></div>
                </div>
                <img src="/images/consais-bcp-dr.svg" alt="Active-passive business continuity and disaster recovery architecture" className="mt-7 w-full" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold tracking-[0.18em] text-primary">TECHNOLOGY</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A practical engineering stack.</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">AWS, Spring Boot, Java, Jenkins, Terraform and modern data technologies supporting secure financial systems and production infrastructure.</p>
              </div>
              <Link to="/technologies"><Button variant="outline" size="lg">Explore technology <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {[
                [Cloud, "AWS"], [Workflow, "Spring Boot"], [GitBranch, "Jenkins"], [Server, "Terraform"], [Database, "Docker / Kubernetes"], [Workflow, "n8n Automation"], [ShieldCheck, "Secure Delivery"],
              ].map(([Icon, label]) => (
                <div key={label as string} className="flex min-h-24 flex-col items-center justify-center rounded-2xl border border-border bg-background p-4 text-center">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="mt-3 text-sm font-medium text-foreground">{label as string}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-slate-50 py-16">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Building a financial or mission-critical system?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">Let's discuss the application, infrastructure and delivery challenges you need to solve.</p>
            <Link to="/contact" className="mt-7 inline-flex"><Button size="lg">Talk to Consais <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
