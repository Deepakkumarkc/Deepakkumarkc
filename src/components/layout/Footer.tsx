"use client";

import React from "react";
import { Database, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-900">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-azure-500/10 border border-azure-500/30 flex items-center justify-center text-azure-400">
                <Database className="w-5 h-5" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                {profileData.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {profileData.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-azure-500/20 hover:text-azure-400 border border-slate-800 flex items-center justify-center transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-azure-500/20 hover:text-azure-400 border border-slate-800 flex items-center justify-center transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-azure-500/20 hover:text-azure-400 border border-slate-800 flex items-center justify-center transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-azure-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-azure-400 transition-colors">Core Competencies</a></li>
              <li><a href="#experience" className="hover:text-azure-400 transition-colors">Work Experience</a></li>
              <li><a href="#projects" className="hover:text-azure-400 transition-colors">Featured Projects</a></li>
              <li><a href="#github" className="hover:text-azure-400 transition-colors">GitHub Activity</a></li>
              <li><a href="#certifications" className="hover:text-azure-400 transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Core Speciality */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">
              Specialization
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Azure Databricks & PySpark</li>
              <li>Azure Data Factory (ADF)</li>
              <li>Medallion Architecture</li>
              <li>800GB+ Data Migration</li>
              <li>PL/SQL & T-SQL Performance</li>
              <li>Agentic AI Pipeline R&D</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-azure-400 transition-colors"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
