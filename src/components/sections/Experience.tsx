"use client";

import React, { useState } from "react";
import { workExperiences } from "@/data/experience";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers, Sparkles } from "lucide-react";

export const Experience: React.FC = () => {
  const [selectedExpIdx, setSelectedExpIdx] = useState(0);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);

  const activeExperience = workExperiences[selectedExpIdx];
  const activeProject = activeExperience.projects[selectedProjectIdx] || activeExperience.projects[0];

  return (
    <section id="experience" className="py-14 sm:py-16 relative">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-azure-400 uppercase tracking-widest bg-azure-500/10 px-3 py-1 rounded-full border border-azure-500/20">
            Professional History
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & Key Client Projects
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Lead Data Engineer driving enterprise data pipelines, multi-region migrations, and cloud solutions across U.S. and Canadian pension platforms.
          </p>
        </div>

        {/* Company / Role Navigation Tabs */}
        <div className="flex justify-center border-b border-slate-800 gap-6">
          {workExperiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedExpIdx(idx);
                setSelectedProjectIdx(0);
              }}
              className={`pb-4 px-4 text-sm sm:text-base font-semibold transition-all border-b-2 flex items-center gap-2.5 ${
                selectedExpIdx === idx
                  ? "border-azure-500 text-azure-400"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              {exp.company}
              <span className="text-xs font-normal text-slate-500">({exp.period})</span>
            </button>
          ))}
        </div>

        {/* Active Company Role Overview Header */}
        <Card className="bg-slate-900/90 border-slate-800 space-y-5 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">{activeExperience.title}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-azure-500/10 text-azure-400 border border-azure-500/20 font-mono">
                  {activeExperience.company}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-6 mt-1.5">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-azure-400" /> {activeExperience.period}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> {activeExperience.location}</span>
              </p>
            </div>

            <Badge variant="emerald" className="self-start md:self-auto text-xs px-3 py-1">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" /> 800GB+ Data Migration Lead
            </Badge>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {activeExperience.summary}
          </p>

          {/* Cross Project Technical Contributions */}
          {activeExperience.crossProjectContributions.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase text-azure-400 tracking-wider mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Enterprise Contributions & Frameworks
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                {activeExperience.crossProjectContributions.map((contrib, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5 bg-slate-950/70 p-3 rounded-xl border border-slate-800/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>

        {/* Client Project Tabs & Details Breakdown */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Select Key Client Deployment Project:
          </h4>

          {/* Project Selector Pills */}
          <div className="flex flex-wrap gap-2.5">
            {activeExperience.projects.map((proj, pIdx) => (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectIdx(pIdx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all border flex items-center gap-2 ${
                  selectedProjectIdx === pIdx
                    ? "bg-azure-500/20 text-azure-400 border-azure-500/50 shadow-lg shadow-azure-500/10"
                    : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <span>{proj.title}</span>
                <span className="text-xs opacity-70">({proj.period})</span>
              </button>
            ))}
          </div>

          {/* Selected Project Detail Card */}
          {activeProject && (
            <Card className="bg-slate-900/70 border-azure-500/30 space-y-6 p-6 sm:p-8">
              
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-xl font-bold text-white">{activeProject.title}</h4>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                      {activeProject.domain}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-azure-400 mt-1">
                    Client System: <span className="font-semibold text-slate-200">{activeProject.client}</span> ({activeProject.period})
                  </p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                {activeProject.summary}
              </p>

              {/* Responsibilities & Achievements Bullet Points */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Key Technical Responsibilities & Achievements:
                </h5>
                <ul className="space-y-2.5">
                  {activeProject.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-azure-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2">
                <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">
                  Technologies Deployed:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="secondary" className="text-xs px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

            </Card>
          )}
        </div>

      </div>
    </section>
  );
};
