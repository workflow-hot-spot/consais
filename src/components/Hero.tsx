import { ArrowRight, Cloud, ShieldCheck, Workflow } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#071827] pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(36,146,199,0.20),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(15,160,149,0.14),transparent_32%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div className="max-w-4xl">
            <div className="mb-7 flex flex-wrap gap-3 text-xs font-semibold tracking-[0.18em] text-cyan-200">
              <span>FINTECH ENGINEERING</span>
              <span className="text-white/30">·</span>
              <span>CLOUD INFRASTRUCTURE</span>
              <span className="text-white/30">·</span>
              <span>SECURE SYSTEMS</span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Building technology for financial systems that matter.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Consais brings hands-on engineering experience across financial platforms,
              cloud infrastructure, controlled software delivery and reliability-focused systems.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-[#071827] hover:bg-slate-100">
                  Talk to us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                  Explore capabilities
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-400">
              <span>AWS</span>
              <span>Spring Boot</span>
              <span>Jenkins</span>
              <span>Terraform</span>
              <span>CI/CD</span>
              <span>BCP / DR</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-sm">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-cyan-200">ENGINEERING STACK</p>
                  <p className="mt-1 text-sm text-slate-400">Application to production</p>
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="space-y-3">
                <StackRow icon={<Workflow className="h-5 w-5" />} title="Financial Applications" text="Lending · APIs · Integrations" />
                <StackRow icon={<Cloud className="h-5 w-5" />} title="Cloud Infrastructure" text="AWS · Networking · Databases" />
                <StackRow icon={<ShieldCheck className="h-5 w-5" />} title="Controlled Delivery" text="Jenkins · Terraform · Change Control" />
                <StackRow icon={<ShieldCheck className="h-5 w-5" />} title="Resilience" text="BCP · DR · Active-Passive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StackRow = ({ icon, title, text }: { icon: ReactNode; title: string; text: string }) => (
  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200">
      {icon}
    </div>
    <div>
      <p className="font-medium text-white">{title}</p>
      <p className="mt-1 text-sm text-slate-400">{text}</p>
    </div>
  </div>
);

export default Hero;
