import { CompanyCustomization } from "@/types/portfolio";

export const companyProfilesRegistry: Record<string, CompanyCustomization> = {
  tcs: {
    companySlug: "tcs",
    companyName: "Tata Consultancy Services (TCS)",
    targetRole: "Lead Azure Data Engineer | Databricks & Cloud ETL Architect",
    customGreeting: "Tailored Portfolio for TCS Talent Acquisition & Data Practice Leads",
    customSummary: "Experienced Azure Data Engineer with 4+ years architecting high-throughput Databricks PySpark pipelines, Medallion Lakehouses, and 800GB+ legacy database migrations. Customized to match TCS enterprise client requirements across public sector and banking data domains.",
    tailoredHighlights: [
      "Expert in Azure Databricks PySpark DataFrame optimization & Medallion Lakehouses (Bronze/Silver/Gold)",
      "Proven track record migrating 800GB+ legacy relational schemas with zero critical data loss",
      "Enterprise Data Processing Framework standardizing logging & debugging across multi-region deployments",
      "Azure DP-900 & AZ-900 Certified with Agentic AI workflow automation expertise"
    ],
    focusedSkills: ["Azure Databricks", "PySpark", "Azure Data Factory (ADF)", "T-SQL", "Medallion Architecture", "Azure DevOps"],
    customResumePdfUrl: "/resumes/Deepak_Kumar_KC_TCS.pdf",
    welcomeNote: "Welcome TCS Hiring Team! This dedicated page presents my technical experience tailored to TCS Azure Data Engineering and Cloud Modernization practices."
  },
  infosys: {
    companySlug: "infosys",
    companyName: "Infosys",
    targetRole: "Senior Data Engineer | Azure & Big Data Migration Specialist",
    customGreeting: "Tailored Portfolio for Infosys Engineering Managers & Recruiters",
    customSummary: "Azure Data Engineer specializing in Azure Data Factory orchestration, PySpark ETL pipelines, and multi-region database migration. Engineered solution frameworks for large-scale public pension systems with 40%+ query performance acceleration.",
    tailoredHighlights: [
      "Led full-scale multi-region data migrations using Oracle PL/SQL & PySpark generic validation scripts",
      "Designed SSIS delta packages and T-SQL stored procedures for state pension data marts",
      "Winner of Star Performance Award (2023) for conversion leadership & sync-up operations",
      "Pioneering AI R&D leveraging legacy mapping documents for automated workflow generation"
    ],
    focusedSkills: ["Azure Data Factory", "Oracle PL/SQL", "PySpark", "SSIS / SSRS", "Power BI", "Data Migration"],
    customResumePdfUrl: "/resumes/Deepak_Kumar_KC_Infosys.pdf",
    welcomeNote: "Welcome Infosys Hiring Team! Explore my specialized experience in cloud migration, ETL pipeline stability, and data warehouse modernization."
  },
  accenture: {
    companySlug: "accenture",
    companyName: "Accenture",
    targetRole: "Azure Cloud Data Architect | Medallion & AI Pipeline Engineer",
    customGreeting: "Tailored Portfolio for Accenture Technology Leadership",
    customSummary: "Cloud Data Architect specializing in Azure Databricks, PySpark ETL frameworks, and Agentic AI data automation. Deep expertise in U.S. and Canadian pension benefits domain architectures.",
    tailoredHighlights: [
      "Architected enterprise logging framework across 5+ parallel client migration projects",
      "PySpark & Databricks delta lake processing for 100+ complex relational table schemas",
      "Azure DevOps CI/CD deployment pipelines for auditable database delivery",
      "DP-900 & AZ-900 Certified with strong client-facing requirement elicitation background"
    ],
    focusedSkills: ["Azure Databricks", "PySpark", "Agentic AI Automation", "Azure Data Factory", "CI/CD Pipelines"],
    customResumePdfUrl: "/resumes/Deepak_Kumar_KC_Accenture.pdf",
    welcomeNote: "Welcome Accenture Talent Team! This page highlights my enterprise data architecture, PySpark scalability, and AI-driven pipeline automation."
  },
  wipro: {
    companySlug: "wipro",
    companyName: "Wipro",
    targetRole: "Senior Azure Data Engineer | ETL & Database Performance Lead",
    customGreeting: "Tailored Portfolio for Wipro Data & Analytics Hiring Team",
    customSummary: "Azure Data Engineer with 4+ years of expertise in SQL Server query optimization, Oracle PL/SQL performance tuning, and hybrid cloud data synchronization using ADF and C#.",
    tailoredHighlights: [
      "Optimized T-SQL stored procedures and Oracle views for 800GB+ datasets achieving 40%+ speedups",
      "Engineered custom C# Process Hold-Back module for complex application file-upload ingestion",
      "100% data integrity certification across 100+ tables in public-sector client cut-overs",
      "Azure DP-900, AZ-900 & Power BI Essential Training (NASBA) Certified"
    ],
    focusedSkills: ["T-SQL", "Oracle PL/SQL", "Azure Data Factory", "C# Ingestion", "Performance Tuning"],
    customResumePdfUrl: "/resumes/Deepak_Kumar_KC_Wipro.pdf",
    welcomeNote: "Welcome Wipro Hiring Team! Discover my track record in database performance tuning, ETL reliability, and cloud synchronization."
  }
};

/**
 * Returns a company profile by slug, or dynamically generates a custom profile for ANY company name!
 */
export function getCompanyProfile(slug: string): CompanyCustomization {
  const normalizedSlug = slug.toLowerCase().trim();

  if (companyProfilesRegistry[normalizedSlug]) {
    return companyProfilesRegistry[normalizedSlug];
  }

  // Capitalize company name cleanly for instant dynamic fallback pages (e.g. "cognizant" -> "Cognizant")
  const formattedCompanyName = normalizedSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    companySlug: normalizedSlug,
    companyName: formattedCompanyName,
    targetRole: `Senior Azure Data Engineer | Databricks & Cloud Architecture Specialist`,
    customGreeting: `Tailored Portfolio for ${formattedCompanyName} Technical Hiring Manager`,
    customSummary: `Results-driven Azure Data Engineer with 4+ years of experience designing scalable Databricks PySpark pipelines, Medallion Lakehouses, and 800GB+ database migrations. Tailored specifically for ${formattedCompanyName}'s cloud engineering requirements.`,
    tailoredHighlights: [
      `Architected end-to-end Azure Databricks & Data Factory pipelines tailored for enterprise clients like ${formattedCompanyName}`,
      "Migrated 800GB+ legacy datasets with zero critical data loss across 100+ tables",
      "Designed reusable enterprise data framework standardizing logging & error handling across 5+ projects",
      "Microsoft Azure DP-900, AZ-900 & Agentic AI Certified"
    ],
    focusedSkills: ["Azure Databricks", "PySpark", "Azure Data Factory", "SQL Server / PL/SQL", "Medallion Architecture"],
    customResumePdfUrl: `/resumes/Deepak_Kumar_KC_${formattedCompanyName.replace(/\s+/g, "_")}.pdf`,
    welcomeNote: `Welcome ${formattedCompanyName} Hiring Team! This portfolio is customized to demonstrate my exact alignment with ${formattedCompanyName}'s data engineering requirements.`
  };
}
