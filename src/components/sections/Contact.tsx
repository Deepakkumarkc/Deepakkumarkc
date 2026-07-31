"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try sending an email directly.");
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Connect & Discuss Opportunities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Open for Senior Azure Data Engineering, Databricks ETL, and Cloud Architecture roles across U.S., Canada, and international deployments.
          </p>
        </div>

        {/* 2 Columns: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-slate-900/90 border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                Contact Information
              </h3>

              <div className="space-y-4 text-xs">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-azure-500/40 text-slate-300 hover:text-azure-400 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-azure-500/10 flex items-center justify-center text-azure-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase">Direct Email</span>
                    <span className="font-semibold text-white">{profileData.email}</span>
                  </div>
                </a>

                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-azure-500/40 text-slate-300 hover:text-azure-400 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase">LinkedIn Profile</span>
                    <span className="font-semibold text-white">Deepak Kumar KC</span>
                  </div>
                </a>

                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-azure-500/40 text-slate-300 hover:text-azure-400 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-200 shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase">GitHub Account</span>
                    <span className="font-semibold text-white">@Deepakkumarkc</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase">Location</span>
                    <span className="font-semibold text-white">{profileData.location}</span>
                  </div>
                </div>
              </div>

            </Card>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Card className="bg-slate-900/90 border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                Send a Direct Message
              </h3>

              {status === "success" ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. I will review your message and respond to your email promptly.
                  </p>
                  <Button onClick={() => setStatus("idle")} variant="outline" size="sm">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block font-mono text-slate-300">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins (Recruiter / Hiring Lead)"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-azure-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block font-mono text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah.jenkins@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-azure-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block font-mono text-slate-300">
                      Message / Project Scope *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Deepak, we would love to discuss a Senior Data Engineering role for our Azure cloud team..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-azure-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Submitting Message..." : "Send Message"} <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
