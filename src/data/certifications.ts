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
    title: "Agentic AI for Software Development (Claude Code in Action)",
    issuer: "Anthropic / Claude",
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
    description: "Received the Star Performance Award for exceptional contributions in managing simultaneous roles within the PBAS application. Successfully led the data conversion and sync-up process while providing valuable assistance to the testing team, showcasing strong multitasking abilities and dedication to achieving project goals."
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
