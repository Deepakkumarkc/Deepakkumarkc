import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud & Data Platforms",
    icon: "Cloud",
    skills: [
      { name: "Azure Databricks", isPrimary: true },
      { name: "Azure Data Factory (ADF)", isPrimary: true },
      { name: "Azure ADLS Gen2 / Blob Storage", isPrimary: true },
      { name: "Azure SQL Database", isPrimary: true },
      { name: "Azure Synapse Analytics", isPrimary: true },
      { name: "Microsoft Fabric / OneLake", isPrimary: true },
      { name: "Azure DevOps", isPrimary: true }
    ]
  },
  {
    title: "Big Data & Pipeline Processing",
    icon: "Workflow",
    skills: [
      { name: "PySpark", isPrimary: true },
      { name: "Apache Spark", isPrimary: false },
      { name: "Delta Lake", isPrimary: true },
      { name: "ETL / ELT Pipeline Design", isPrimary: true },
      { name: "Medallion Architecture (Bronze/Silver/Gold)", isPrimary: true },
      { name: "Batch & Incremental Processing", isPrimary: true },
      { name: "SSIS Package Development", isPrimary: false }
    ]
  },
  {
    title: "Databases & SQL Performance",
    icon: "Database",
    skills: [
      { name: "Microsoft SQL Server (T-SQL)", isPrimary: true },
      { name: "Oracle PL/SQL", isPrimary: true },
      { name: "Stored Procedures & Query Optimization", isPrimary: true },
      { name: "Performance Tuning", isPrimary: true },
      { name: "Azure SQL Database", isPrimary: false }
    ]
  },
  {
    title: "Data Engineering & Modeling",
    icon: "BarChart3",
    skills: [
      { name: "Data Warehouse & Data Mart Design", isPrimary: true },
      { name: "Data Migration & Conversion", isPrimary: true },
      { name: "Dimensional Data Modeling", isPrimary: true },
      { name: "Data Quality & Validation Frameworks", isPrimary: true },
      { name: "Schema Mapping & Referential Integrity", isPrimary: false }
    ]
  },
  {
    title: "Programming & Scripting",
    icon: "Code",
    skills: [
      { name: "Python", isPrimary: true },
      { name: "PySpark", isPrimary: true },
      { name: "SQL (T-SQL & PL/SQL)", isPrimary: true },
      { name: "C#", isPrimary: false },
      { name: "Shell Scripting (Bash)", isPrimary: false },
      { name: "PHP", isPrimary: false }
    ]
  },
  {
    title: "BI, DevOps & AI",
    icon: "Cpu",
    skills: [
      { name: "Power BI", isPrimary: true },
      { name: "SSRS Reports", isPrimary: false },
      { name: "Azure DevOps CI/CD Pipelines", isPrimary: true },
      { name: "Git", isPrimary: true },
      { name: "Docker", isPrimary: false },
      { name: "Agentic AI & LLM Automation", isPrimary: true }
    ]
  }
];
