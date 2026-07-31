import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gold" | "emerald";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className,
}) => {
  const variants = {
    primary: "bg-azure-500/10 text-azure-400 border-azure-500/30",
    secondary: "bg-slate-800/80 text-slate-300 border-slate-700",
    outline: "bg-transparent text-slate-300 border-slate-700",
    gold: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
