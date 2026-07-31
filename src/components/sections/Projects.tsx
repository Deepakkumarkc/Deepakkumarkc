"use client";

import React, { useState } from "react";
import { featuredProjects } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Github, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(featuredProjects.map((p) => p.category)))];

  const filteredProjects = selectedCategory === "All"
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-14 sm:py-16 relative bg-slate-950/60 border-y border-slate-900">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-azure-400 uppercase tracking-widest bg-azure-500/10 px-3 py-1 rounded-full border border-azure-500/20">
            Engineering Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Data Architecture & AI Projects
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Highlighted data engineering solutions solving real-world enterprise dataset scale, migration, and automation challenges.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${
                selectedCategory === cat
                  ? "bg-azure-500/20 text-azure-400 border-azure-500/40"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} hoverEffect className="space-y-6 bg-slate-900/90 border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <Badge variant="emerald" className="text-xs py-1 px-3">
                    {project.category}
                  </Badge>
                  <span className="text-xs font-mono text-slate-500">ENGINEERING CASE STUDY</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>

                {/* Problem & Solution Blocks */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="block font-mono text-rose-400 font-semibold uppercase text-xs">
                      Challenge / Problem:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="block font-mono text-azure-400 font-semibold uppercase text-xs">
                      Technical Solution:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Business Impact Box */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl">
                  <span className="block font-mono text-emerald-400 font-semibold uppercase text-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> Measurable Outcome & Business Impact:
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-300 mt-1 leading-relaxed font-medium">
                    {project.businessImpact}
                  </p>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-2 pt-1">
                  <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Architectural Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {project.architectureHighlights.map((arch, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-azure-400 shrink-0 mt-0.5" />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Technologies & Links Footer */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Button href="https://github.com/Deepakkumarkc" target="_blank" rel="noreferrer" variant="outline" size="sm">
                    <Github className="w-4 h-4" /> GitHub Repo
                  </Button>
                  <Button href="#contact" variant="ghost" size="sm">
                    Contact for Details <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
