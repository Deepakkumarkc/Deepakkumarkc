import { Certification, Achievement, Education } from "@/types/portfolio";

export const certifications: Certification[] = [
  {
    id: "dp-900",
    title: "Microsoft Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft Azure",
    category: "cloud",
    credentialUrl: "https://learn.microsoft.com/en-us/credentials/"
  },
  {
    id: "az-900",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft Azure",
    category: "cloud",
    credentialUrl: "https://learn.microsoft.com/en-us/credentials/"
  },
  {
    id: "claude-code-agentic-ai",
    title: "Claude Code in Action — Agentic AI for Software Development",
    issuer: "Anthropic / Agentic AI",
    category: "ai"
  },
  {
    id: "power-bi-essential",
    title: "Power BI Essential Training",
    issuer: "National Association of State Boards of Accountancy (NASBA)",
    category: "analytics"
  }
];

export const achievements: Achievement[] = [
  {
    id: "star-award-2023",
    title: "Star Performance Award",
    date: "September 23, 2023",
    organization: "Sagitec Solutions",
    description: "Received the Star Performance Award for exceptional contributions in managing simultaneous roles within the PBAS application, leading data conversion and sync-up processes with zero downtime, and assisting QA teams."
  }
];

export const educationList: Education[] = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Sri Muthukumaran Institute of Technology, Chennai",
    period: "08/2019 – 09/2021",
    location: "Chennai, Tamil Nadu"
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Sindhi College of Arts and Science, Chennai",
    period: "07/2016 – 05/2019",
    location: "Chennai, Tamil Nadu"
  }
];
