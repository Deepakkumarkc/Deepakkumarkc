import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  glow = false,
  hoverEffect = true,
}) => {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 transition-all duration-300",
        hoverEffect && "hover:border-azure-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-azure-500/5 hover:-translate-y-1",
        glow && "before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-r before:from-azure-500/20 before:to-emerald-500/20 before:blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
};
