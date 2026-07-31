import React from "react";
import { profileData } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { Calendar, Database, CheckCircle2, Zap, Cloud, Server, Cpu } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-16 relative">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        
        {/* Title */}
        <div className="text-center space-y-2 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-azure-400 uppercase tracking-widest bg-azure-500/10 px-3 py-1 rounded-full border border-azure-500/20">
            Professional Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering High-Performance Cloud Data Architectures
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Specializing in Azure Data Factory, Azure Databricks, PySpark, T-SQL, and Oracle PL/SQL for U.S. and Canadian public sector domains.
          </p>
        </div>

        {/* 4 Impact Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.impactMetrics.map((metric, idx) => (
            <Card key={idx} hoverEffect className="space-y-3 bg-slate-900/80 border-slate-800 p-6">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-azure-500/10 border border-azure-500/30 flex items-center justify-center text-azure-400">
                  {idx === 0 && <Calendar className="w-5 h-5" />}
                  {idx === 1 && <Database className="w-5 h-5" />}
                  {idx === 2 && <CheckCircle2 className="w-5 h-5" />}
                  {idx === 3 && <Zap className="w-5 h-5" />}
                </div>
                <span className="text-xs font-mono text-slate-500">METRIC #0{idx + 1}</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white font-mono">{metric.value}</span>
                <span className="block text-xs font-semibold text-azure-400 mt-1">{metric.label}</span>
                <p className="text-xs text-slate-400 mt-1 leading-normal">{metric.subtext}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* 3 Core Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <Card className="space-y-4 p-6">
            <div className="w-12 h-12 rounded-xl bg-azure-500/10 border border-azure-500/30 flex items-center justify-center text-azure-400">
              <Cloud className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Azure Cloud Ecosystem</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Expert in designing end-to-end data pipelines using Azure Data Factory (ADF), Azure Databricks, ADLS Gen2, and Azure SQL Database with CI/CD deployment via Azure DevOps.
            </p>
          </Card>

          <Card className="space-y-4 p-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">800GB+ Data Migration</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Proven track record migrating legacy datasets (800GB+) across 100+ tables with generic-table Oracle PL/SQL and PySpark validation frameworks ensuring zero critical data loss.
            </p>
          </Card>

          <Card className="space-y-4 p-6">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">AI R&D & Automation</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Pioneering Python automation scripts and AI-assisted data pipelines leveraging legacy data mapping documents to accelerate U.S. and Canadian pension workflow development.
            </p>
          </Card>
        </div>

      </div>
    </section>
  );
};
