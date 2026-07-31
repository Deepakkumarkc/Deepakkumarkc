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
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-azure-400 uppercase tracking-widest bg-azure-500/10 px-3 py-1 rounded-full border border-azure-500/20">
            Professional History
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience & Key Client Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Lead Data Engineer driving enterprise data pipelines, multi-region migrations, and cloud solutions across U.S. and Canadian pension platforms.
          </p>
        </div>

        {/* Company / Role Navigation Tabs */}
        <div className="flex justify-center border-b border-slate-800 gap-4">
          {workExperiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedExpIdx(idx);
                setSelectedProjectIdx(0);
              }}
              className={`pb-4 px-4 text-sm font-semibold transition-all border-b-2 flex items-center gap-2 ${
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
        <Card className="bg-slate-900/90 border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{activeExperience.title}</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-azure-500/10 text-azure-400 border border-azure-500/20 font-mono">
                  {activeExperience.company}
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-4 mt-1">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-azure-400" /> {activeExperience.period}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> {activeExperience.location}</span>
              </p>
            </div>

            <Badge variant="emerald" className="self-start md:self-auto text-xs">
              <Sparkles className="w-3 h-3 mr-1" /> 800GB+ Data Migration Lead
            </Badge>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {activeExperience.summary}
          </p>

          {/* Cross Project Technical Contributions */}
          {activeExperience.crossProjectContributions.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase text-azure-400 tracking-wider mb-2 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Enterprise Contributions & Frameworks
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeExperience.crossProjectContributions.map((contrib, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
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
          <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
            Select Key Client Deployment Project:
          </h4>

          {/* Project Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {activeExperience.projects.map((proj, pIdx) => (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectIdx(pIdx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all border flex items-center gap-2 ${
                  selectedProjectIdx === pIdx
                    ? "bg-azure-500/20 text-azure-400 border-azure-500/40 shadow-lg shadow-azure-500/10"
                    : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <span>{proj.title}</span>
                <span className="text-[10px] opacity-70">({proj.period})</span>
              </button>
            ))}
          </div>

          {/* Selected Project Detail Card */}
          {activeProject && (
            <Card className="bg-slate-900/70 border-azure-500/30 space-y-6 pt-6">
              
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-white">{activeProject.title}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                      {activeProject.domain}
                    </span>
                  </div>
                  <p className="text-xs text-azure-400 mt-1">
                    Client System: <span className="font-semibold text-slate-200">{activeProject.client}</span> ({activeProject.period})
                  </p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {activeProject.summary}
              </p>

              {/* Responsibilities & Achievements Bullet Points */}
              <div className="space-y-2">
                <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Key Technical Responsibilities & Achievements:
                </h5>
                <ul className="space-y-2">
                  {activeProject.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-azure-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2">
                <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                  Technologies Deployed:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="secondary" className="text-xs">
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
