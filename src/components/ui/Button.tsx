import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-azure-500/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-gradient-to-r from-azure-600 to-azure-500 hover:from-azure-500 hover:to-azure-400 text-white shadow-lg shadow-azure-500/20 hover:shadow-azure-500/35 border border-azure-400/30",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 shadow-md",
    outline: "bg-transparent hover:bg-azure-500/10 text-azure-400 hover:text-white border border-azure-500/40 hover:border-azure-400",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
