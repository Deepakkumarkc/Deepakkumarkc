import { ProfileData } from "@/types/portfolio";

export const profileData: ProfileData = {
  name: "Deepak Kumar KC",
  primaryTitle: "Azure Data Engineer | PySpark & Databricks Specialist | ETL Architect",
  tagline: "Architecting Scalable Azure Lakehouses, High-Throughput ETL/ELT Pipelines & Enterprise Data Migrations (800GB+)",
  shortBio: "Results-driven Azure Data Engineer with 4+ years of hands-on experience designing, building, and optimizing end-to-end data pipelines on the Azure ecosystem. Deep expertise in Azure Databricks, Azure Data Factory (ADF), PySpark, T-SQL, and Oracle PL/SQL, with proven success migrating 800GB+ legacy datasets and pioneering AI-driven data modeling workflows.",
  location: "Chennai, Tamil Nadu, India",
  email: "parkadheananth1998@gmail.com",
  phone: "+91 8428462496",
  githubUrl: "https://github.com/Deepakkumarkc",
  linkedinUrl: "https://www.linkedin.com/in/deepak-kumar-44969123a/",
  headshotUrl: "/assets/deepak_avatar_glow.png",
  heroBannerUrl: "/assets/hero_banner_animated.gif",
  resumePdfUrl: "#contact", // Configurable resume download link
  socials: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/deepak-kumar-44969123a/",
      icon: "Linkedin"
    },
    {
      platform: "GitHub",
      url: "https://github.com/Deepakkumarkc",
      icon: "Github"
    },
    {
      platform: "Email",
      url: "mailto:parkadheananth1998@gmail.com",
      icon: "Mail"
    },
    {
      platform: "StackOverflow",
      url: "https://stackoverflow.com/users/14381274/deepak-ananth",
      icon: "Code2"
    },
    {
      platform: "Medium",
      url: "https://medium.com/@Deepakananthkc",
      icon: "BookOpen"
    }
  ],
  impactMetrics: [
    {
      label: "Experience",
      value: "4+ Years",
      subtext: "Azure Data Engineering & ETL/ELT Architectures",
      icon: "Calendar"
    },
    {
      label: "Data Migration Scale",
      value: "800 GB+",
      subtext: "Zero critical data loss in enterprise migrations",
      icon: "Database"
    },
    {
      label: "Table Schema Integrity",
      value: "100+ Tables",
      subtext: "Validated PySpark & PL/SQL multi-environment refresh",
      icon: "CheckCircle2"
    },
    {
      label: "Performance Acceleration",
      value: "40%+",
      subtext: "Query runtime reduction via PL/SQL & T-SQL tuning",
      icon: "Zap"
    }
  ]
};
