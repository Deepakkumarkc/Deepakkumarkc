import React from "react";
import { certifications, achievements, educationList } from "@/data/certifications";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Award, GraduationCap, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-14 sm:py-16 relative bg-slate-950/60 border-y border-slate-900">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Credentials & Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications, Awards & Education
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Verified Microsoft Azure certifications, technical honors, and computer science degrees.
          </p>
        </div>

        {/* 2 Columns: Certifications & Star Award */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-3">
              <ShieldCheck className="w-6 h-6 text-azure-400" /> Professional Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.id} hoverEffect className="space-y-4 bg-slate-900/90 border-slate-800 p-6">
                  <div className="flex items-center justify-between">
                    <Badge variant={cert.category === "cloud" ? "primary" : cert.category === "ai" ? "emerald" : "gold"}>
                      {cert.category.toUpperCase()}
                    </Badge>
                    <Award className="w-5 h-5 text-amber-400" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white leading-snug">{cert.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{cert.issuer}</p>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-azure-400 hover:underline pt-1"
                    >
                      Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Star Performance Award Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-3">
              <Award className="w-6 h-6 text-amber-400" /> Major Industry Achievement
            </h3>

            {achievements.map((ach) => (
              <Card key={ach.id} glow className="bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border-amber-500/30 space-y-4 p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                  <div>
                    <span className="text-xs font-mono text-amber-400 font-semibold">{ach.organization}</span>
                    <h4 className="text-xl font-bold text-white mt-1">{ach.title}</h4>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {ach.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {ach.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-mono text-amber-400">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Awarded for Multitasking & Conversion Sync Leadership
                </div>
              </Card>
            ))}
          </div>

        </div>

        {/* Education Timeline */}
        <div className="space-y-6 pt-4 border-t border-slate-900">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <GraduationCap className="w-6 h-6 text-azure-400" /> Academic Qualifications & Degrees
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => (
              <Card key={idx} hoverEffect className="bg-slate-900/80 border-slate-800 space-y-2 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-azure-400 font-semibold">{edu.period}</span>
                  <span className="text-xs text-slate-400">{edu.location}</span>
                </div>
                <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                <p className="text-xs sm:text-sm text-slate-300">{edu.institution}</p>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
