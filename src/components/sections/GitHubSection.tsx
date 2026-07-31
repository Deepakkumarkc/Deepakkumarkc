"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Github, Star, GitFork, BookOpen, Code2, ExternalLink, Activity, RefreshCw } from "lucide-react";
import { GitHubStatsData } from "@/lib/github";

export const GitHubSection: React.FC = () => {
  const [stats, setStats] = useState<GitHubStatsData | null>(null);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-azure-400 uppercase tracking-widest bg-azure-500/10 px-3 py-1 rounded-full border border-azure-500/20">
            Open Source & Repositories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Live GitHub Engineering Activity
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-time contribution heatmaps, public repositories, and code statistics dynamically synced with GitHub.
          </p>
        </div>

        {/* Live SVG Contribution Grid Banner */}
        <Card className="bg-slate-900/90 border-slate-800 space-y-4 p-4 sm:p-6 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base font-bold text-white">Live Contribution Heatmap Grid</h3>
            </div>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-azure-400 animate-spin" /> Auto-Updated via GitHub Actions
            </span>
          </div>

          <div className="w-full overflow-x-auto flex justify-center py-2">
            <Image
              src="https://raw.githubusercontent.com/Deepakkumarkc/Deepakkumarkc/main/assets/github_contribution_snake.svg"
              alt="Live GitHub Contribution Grid Heatmap"
              width={880}
              height={192}
              unoptimized
              className="w-full max-w-4xl h-auto"
            />
          </div>

          <p className="text-xs text-slate-400 text-center font-mono">
            Consistent contributions across personal data engineering projects, pipeline architecture R&D, and open source development.
          </p>
        </Card>

        {/* Dynamic Activity Graph & Live Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Activity Graph Column */}
          <div className="lg:col-span-8">
            <Card className="bg-slate-900/90 border-slate-800 space-y-4 h-full p-4 sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-azure-400" /> Activity Curve Graph
                </h3>
                <span className="text-xs font-mono text-slate-400">Live API</span>
              </div>
              
              <div className="w-full overflow-x-auto">
                <Image
                  src="https://github-readme-activity-graph.vercel.app/graph?username=Deepakkumarkc&theme=react-dark&area=true&hide_border=true"
                  alt="Activity Wave Graph"
                  width={750}
                  height={260}
                  unoptimized
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </Card>
          </div>

          {/* Quick Metrics Column */}
          <div className="lg:col-span-4 space-y-4">
            <Card className="bg-slate-900/90 border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800/80 pb-3">
                <Code2 className="w-4 h-4 text-azure-400" /> Live GitHub Metrics
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                  <span className="text-xs text-slate-300">Public Repositories</span>
                  <span className="font-mono font-bold text-azure-400">{stats ? stats.publicRepos : "11+"}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                  <span className="text-xs text-slate-300">Followers</span>
                  <span className="font-mono font-bold text-emerald-400">{stats ? stats.followers : "5"}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                  <span className="text-xs text-slate-300">Repository Stars</span>
                  <span className="font-mono font-bold text-amber-400">{stats ? stats.stars : "12"}</span>
                </div>
              </div>

              <Button
                href="https://github.com/Deepakkumarkc"
                target="_blank"
                rel="noreferrer"
                variant="primary"
                className="w-full"
                size="sm"
              >
                <Github className="w-4 h-4" /> Visit @Deepakkumarkc on GitHub <ExternalLink className="w-3.5 h-3.5 ml-auto" />
              </Button>
            </Card>
          </div>

        </div>

        {/* Public Featured Repositories Grid */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Github className="w-5 h-5 text-azure-400" /> Public Code Repositories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats && stats.repos.length > 0 ? (
              stats.repos.map((repo) => (
                <Card key={repo.id} hoverEffect className="space-y-4 bg-slate-900/90 border-slate-800 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-azure-400 hover:underline flex items-center gap-1.5 text-base truncate"
                      >
                        {repo.name} <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {repo.description || "Azure Data Engineering & Analytics repository."}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-azure-400"></span>
                        {repo.language || "Python"}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stargazers_count}</span>
                        <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5 text-slate-400" /> {repo.forks_count}</span>
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-500 font-mono">Updated: {repo.updated_at}</p>
                  </div>
                </Card>
              ))
            ) : (
              <p className="text-xs text-slate-400 col-span-full">Loading repositories from GitHub...</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
