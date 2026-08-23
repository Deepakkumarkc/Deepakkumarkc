"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Github, Star, GitFork, BookOpen, Code2, ExternalLink, Activity, RefreshCw } from "lucide-react";
import { GitHubStatsData } from "@/lib/github";

export const GitHubSection: React.FC = () => {
  const [stats, setStats] = useState<GitHubStatsData | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (e) {
        console.warn("Failed to fetch client-side GitHub stats:", e);
      }
    }
    loadData();
  }, []);

  return (
    <section id="github" className="py-14 sm:py-16 relative">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-azure-400 uppercase tracking-widest bg-azure-500/10 px-3 py-1 rounded-full border border-azure-500/20">
            Open Source & Repositories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Live GitHub Engineering Activity
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real-time contribution heatmaps, commit activity, and code statistics dynamically synced with GitHub.
          </p>
        </div>

        {/* Live SVG Contribution Grid Banner */}
        <Card className="bg-slate-900/90 border-slate-800 space-y-4 p-6 sm:p-8 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2.5">
              <Activity className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Live Contribution Heatmap Grid</h3>
            </div>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-azure-400 animate-spin" /> Auto-Updated via GitHub Actions
            </span>
          </div>

          <div className="w-full overflow-x-auto flex justify-center py-4">
            <Image
              src="https://raw.githubusercontent.com/Deepakkumarkc/Deepakkumarkc/main/assets/github_contribution_snake.svg"
              alt="Live GitHub Contribution Grid Heatmap"
              width={1000}
              height={220}
              unoptimized
              className="w-full max-w-5xl h-auto"
            />
          </div>

          <p className="text-xs sm:text-sm text-slate-400 text-center font-mono">
            Consistent contributions across personal data engineering projects, pipeline architecture R&D, and open source development.
          </p>
        </Card>

        {/* Dynamic Activity Graph & Live Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Activity Graph Column */}
          <div className="lg:col-span-8">
            <Card className="bg-slate-900/90 border-slate-800 space-y-4 h-full p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-azure-400" /> Activity Curve Graph
                </h3>
                <span className="text-xs font-mono text-slate-400">Live API</span>
              </div>
              
              <div className="w-full overflow-x-auto">
                <Image
                  src="https://github-readme-activity-graph.vercel.app/graph?username=Deepakkumarkc&theme=react-dark&area=true&hide_border=true"
                  alt="Activity Wave Graph"
                  width={900}
                  height={300}
                  unoptimized
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </Card>
          </div>

          {/* Quick Metrics Column */}
          <div className="lg:col-span-4 space-y-4">
            <Card className="bg-slate-900/90 border-slate-800 space-y-5 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5 border-b border-slate-800/80 pb-3">
                <Code2 className="w-5 h-5 text-azure-400" /> Live GitHub Metrics
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/70 border border-slate-800/70">
                  <span className="text-xs sm:text-sm text-slate-300">Followers</span>
                  <span className="font-mono text-lg font-bold text-emerald-400">{stats ? stats.followers : "5"}</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/70 border border-slate-800/70">
                  <span className="text-xs sm:text-sm text-slate-300">Repository Stars</span>
                  <span className="font-mono text-lg font-bold text-amber-400">{stats ? stats.stars : "12"}</span>
                </div>
              </div>

              <Button
                href="https://github.com/Deepakkumarkc"
                target="_blank"
                rel="noreferrer"
                variant="primary"
                className="w-full"
                size="md"
              >
                <Github className="w-4 h-4" /> Visit @Deepakkumarkc on GitHub <ExternalLink className="w-4 h-4 ml-auto" />
              </Button>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
