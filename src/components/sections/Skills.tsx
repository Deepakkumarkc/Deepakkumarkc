import React from "react";
import { skillCategories } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Cloud, Database, Workflow, Code, BarChart3, Cpu, CheckCircle } from "lucide-react";

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cloud": return <Cloud className="w-5 h-5 text-azure-400" />;
      case "Database": return <Database className="w-5 h-5 text-azure-400" />;
      case "Workflow": return <Workflow className="w-5 h-5 text-emerald-400" />;
      case "Code": return <Code className="w-5 h-5 text-amber-400" />;
      case "BarChart3": return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-purple-400" />;
      default: return <CheckCircle className="w-5 h-5 text-azure-400" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-16 relative bg-slate-950/60 border-y border-slate-900">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Core Competencies & Technologies
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Categorized skills and frameworks sourced directly from real-world enterprise client deployments.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <Card key={idx} hoverEffect className="space-y-4 bg-slate-900/90 border-slate-800 p-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                  {getIcon(cat.icon)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <Badge
                    key={sIdx}
                    variant={skill.isPrimary ? "primary" : "secondary"}
                    className="text-xs py-1 px-3"
                  >
                    {skill.isPrimary && <span className="w-1.5 h-1.5 rounded-full bg-azure-400 mr-1.5 animate-pulse" />}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
