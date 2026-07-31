import React from "react";
import Metadata from "next";
import { getCompanyProfile } from "@/data/companyProfiles";
import { profileData } from "@/data/profile";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Building2, FileText, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Download } from "lucide-react";

interface CompanyPageProps {
  params: {
    company: string;
  };
}

export function generateMetadata({ params }: CompanyPageProps) {
  const companyProfile = getCompanyProfile(params.company);
  return {
    title: `${profileData.name} - ${companyProfile.targetRole}`,
    description: companyProfile.customSummary,
  };
}

export default function CompanyTailoredPage({ params }: CompanyPageProps) {
  const companyProfile = getCompanyProfile(params.company);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-azure-500/30 selection:text-azure-300">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* Executive Profile Brief Banner */}
        <section className="relative bg-gradient-to-b from-azure-950/50 via-slate-950 to-background border-b border-slate-800/80 py-10 sm:py-14">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
            <Card glow className="bg-slate-900/90 border-azure-500/40 p-6 sm:p-10 space-y-6">
              
              {/* Header Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-azure-500/10 border border-azure-500/30 flex items-center justify-center text-azure-400">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 font-semibold">
                      <Sparkles className="w-3.5 h-3.5" /> Executive Engineering Brief
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-0.5">
                      {companyProfile.customGreeting}
                    </h1>
                  </div>
                </div>

                <Badge variant="primary" className="self-start sm:self-auto text-xs px-3.5 py-1.5">
                  <ShieldCheck className="w-4 h-4 mr-1.5" /> {companyProfile.companyName} Application
                </Badge>
              </div>

              {/* Target Role & Welcome Note */}
              <div className="space-y-3">
                <p className="text-lg sm:text-xl font-mono text-azure-400 font-bold">
                  Target Position: {companyProfile.targetRole}
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 italic">
                  &ldquo;{companyProfile.welcomeNote}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {companyProfile.customSummary}
                </p>
              </div>

              {/* Key Competency Alignment */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Key Experience Alignment & Core Competencies:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                  {companyProfile.tailoredHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80">
                <Button
                  href={companyProfile.customResumePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  size="md"
                >
                  <Download className="w-4 h-4" /> Download Resume (PDF)
                </Button>
                
                <Button href="#experience" variant="outline" size="md">
                  View Client Experience & Case Studies <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

            </Card>
          </div>
        </section>

        {/* Core Portfolio Sections */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
