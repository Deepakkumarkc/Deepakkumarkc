import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Scripting",
    icon: "Code",
    skills: [
      { name: "Python", isPrimary: true },
      { name: "PySpark", isPrimary: true },
      { name: "SQL (T-SQL, PL/SQL)", isPrimary: true },
      { name: "C#", isPrimary: true },
      { name: "Shell Scripting", isPrimary: false },
      { name: "PHP", isPrimary: false }
    ]
  },
  {
    title: "Azure & Cloud Ecosystem",
    icon: "Cloud",
    skills: [
      { name: "Azure Databricks", isPrimary: true },
      { name: "Azure Data Factory (ADF)", isPrimary: true },
      { name: "Azure Data Lake Storage Gen2 (ADLS Gen2)", isPrimary: true },
      { name: "Azure Blob Storage", isPrimary: true },
      { name: "Azure SQL Database", isPrimary: true },
      { name: "Azure Synapse Analytics", isPrimary: true },
      { name: "Microsoft Fabric / OneLake", isPrimary: true },
      { name: "Azure DevOps", isPrimary: true }
    ]
  },
  {
    title: "Data Engineering Architecture",
    icon: "Workflow",
    skills: [
      { name: "ETL / ELT Pipeline Design", isPrimary: true },
      { name: "Medallion Architecture (Bronze/Silver/Gold)", isPrimary: true },
      { name: "Delta Lake", isPrimary: true },
      { name: "Batch & Incremental Processing", isPrimary: true },
      { name: "Large-Scale Data Migration (800GB+)", isPrimary: true },
      { name: "Data Modeling", isPrimary: true },
      { name: "Data Warehouse & Data Mart Design", isPrimary: true },
      { name: "SSIS", isPrimary: false }
    ]
  },
  {
    title: "Databases & Query Optimization",
    icon: "Database",
    skills: [
      { name: "Microsoft SQL Server", isPrimary: true },
      { name: "Oracle PL/SQL", isPrimary: true },
      { name: "Azure SQL Database", isPrimary: true },
      { name: "Stored Procedures", isPrimary: true },
      { name: "Query Optimization", isPrimary: true },
      { name: "Performance Tuning", isPrimary: true }
    ]
  },
  {
    title: "DevOps, Automation & Tools",
    icon: "Cpu",
    skills: [
      { name: "Azure DevOps", isPrimary: true },
      { name: "CI/CD Pipelines", isPrimary: true },
      { name: "Git", isPrimary: true },
      { name: "Docker", isPrimary: false },
      { name: "Build & Release Management", isPrimary: true },
      { name: "Agentic AI Automation", isPrimary: true }
    ]
  },
  {
    title: "BI & Reporting",
    icon: "BarChart3",
    skills: [
      { name: "Power BI", isPrimary: true },
      { name: "SSRS", isPrimary: true },
      { name: "Data Mart Development", isPrimary: true }
    ]
  }
];
