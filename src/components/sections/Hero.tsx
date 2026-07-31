"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, FileText, Mail, Database, ShieldCheck, Zap } from "lucide-react";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-azure-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                Available for Senior Data Engineering & Architecture Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Hi, I&apos;m <span className="bg-gradient-to-r from-azure-400 via-azure-500 to-cyan-300 bg-clip-text text-transparent">{profileData.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-azure-400 font-mono">
                Azure Data Engineer | Databricks (PySpark) & ADF Specialist
              </p>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {profileData.shortBio}
            </p>

            {/* Quick Core Strengths Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="primary" className="text-xs">
                <Database className="w-3.5 h-3.5 mr-1 text-azure-400" /> Medallion Architecture
              </Badge>
              <Badge variant="emerald" className="text-xs">
                <Zap className="w-3.5 h-3.5 mr-1 text-emerald-400" /> 800GB+ Data Migration
              </Badge>
              <Badge variant="gold" className="text-xs">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-amber-400" /> Star Award 2023 Winner
              </Badge>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="#projects" variant="primary" size="lg">
                View Featured Projects <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                <Mail className="w-4 h-4" /> Contact Me
              </Button>
              <Button href={profileData.linkedinUrl} target="_blank" rel="noreferrer" variant="ghost" size="lg">
                <FileText className="w-4 h-4" /> LinkedIn Profile
              </Button>
            </div>
          </div>

          {/* Right Column: Headshot Photo Card & Live Metrics */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-azure-500 via-cyan-400 to-emerald-500 opacity-30 blur-lg transition duration-500 animate-pulse-slow"></div>

              {/* Glassmorphic Photo Box */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 backdrop-blur-xl shadow-2xl space-y-6">
                
                {/* Photo & Status */}
                <div className="relative w-44 h-44 mx-auto rounded-full p-1 bg-gradient-to-tr from-azure-500 via-cyan-400 to-emerald-400 shadow-xl">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
                    <Image
                      src={profileData.headshotUrl}
                      alt={profileData.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Name Card Details */}
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">{profileData.name}</h3>
                  <p className="text-xs text-azure-400 font-mono">Senior Data Engineering Function</p>
                  <p className="text-xs text-slate-400">Chennai, Tamil Nadu, India</p>
                </div>

                {/* Micro Metric Counters */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80 text-center">
                  <div className="bg-slate-950/60 rounded-xl p-2.5 border border-slate-800/60">
                    <span className="block text-lg font-bold text-azure-400 font-mono">4+ Yrs</span>
                    <span className="text-[10px] text-slate-400">Data Engineering</span>
                  </div>
                  <div className="bg-slate-950/60 rounded-xl p-2.5 border border-slate-800/60">
                    <span className="block text-lg font-bold text-emerald-400 font-mono">800GB+</span>
                    <span className="text-[10px] text-slate-400">Dataset Migration</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
