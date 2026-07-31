import { FeaturedProject } from "@/types/portfolio";

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ai-pension-workflow",
    title: "AI-Assisted Pension Workflow & Data Modeling R&D",
    category: "AI & Data Pipeline Automation",
    problem: "Manual pension workflow creation and legacy data mapping were labor-intensive, creating long development cycles across U.S. and Canadian public sector client projects.",
    solution: "Developed Python automation scripts and AI-assisted data pipelines leveraging legacy data mapping documents and data-modeling artifacts to accelerate workflow generation.",
    businessImpact: "Dramatically reduced manual engineering effort, streamlined data processing workflows, and shortened client delivery timelines.",
    technologies: ["Python", "Azure Databricks", "PySpark", "Agentic AI", "Data Modeling"],
    architectureHighlights: [
      "Automated extraction and codification of legacy pension business rules",
      "AI-driven schema mapping artifact parser",
      "Integrated with Azure Data Factory for automated pipeline triggering"
    ]
  },
  {
    id: "askdrb-migration-engine",
    title: "Alaska Retirement & Benefits (ASKDRB) Databricks ETL Engine",
    category: "Cloud Data Migration & Big Data",
    problem: "Migrating 800GB+ legacy pension data across 100+ complex relational tables while maintaining 100% data integrity and minimizing cutover downtime.",
    solution: "Engineered scalable PySpark transformation scripts in Azure Databricks with incremental batch processing and multi-environment SQL Server sync routines.",
    businessImpact: "Achieved 100% data integrity across 100+ tables for 800GB+ datasets with zero critical data loss.",
    technologies: ["Azure Databricks", "PySpark", "SQL Server", "T-SQL", "Azure ADLS Gen2"],
    architectureHighlights: [
      "Optimized partition and memory strategies for PySpark DataFrame operations",
      "Incremental load routines minimizing batch execution windows",
      "Automated multi-environment refresh routines between cloud and on-premise SQL"
    ]
  },
  {
    id: "enterprise-logging-framework",
    title: "Multi-Client Enterprise Data Processing & Logging Framework",
    category: "Data Engineering Architecture",
    problem: "Inconsistent error handling, logging, and debugging across multiple parallel pension migration projects (PBAS, HEB, ASKDRB, TCRS, MainePRS).",
    solution: "Architected a reusable, standardized data-processing framework codifying error handling, logging, and debugging protocols.",
    businessImpact: "Standardized delivery across 5+ enterprise client projects, accelerated developer onboarding, and improved code consistency.",
    technologies: ["Azure Data Factory", "Python", "T-SQL", "Oracle PL/SQL", "Azure DevOps"],
    architectureHighlights: [
      "Centralized exception handling & audit logging module",
      "Reusable SSIS & ADF orchestration templates",
      "Integrated automated email & slack alert webhooks for pipeline failures"
    ]
  },
  {
    id: "heb-multi-region-migration",
    title: "Healthcare Pension (HEB) Multi-Region Oracle Migration",
    category: "Enterprise Database Migration",
    problem: "Migrating complex healthcare pension schemas across hundreds of tables with strict referential integrity and multi-region deployment demands.",
    solution: "Developed generic-table Oracle PL/SQL validation scripts, automated data-fix routines during rehearsals, and Visio ER diagram reverse-engineering.",
    businessImpact: "Successful cut-over of multi-region data migration with zero data loss and automated CI/CD script deployment via Azure DevOps.",
    technologies: ["Oracle PL/SQL", "Azure DevOps", "Visio ERD", "CI/CD", "Data Quality"],
    architectureHighlights: [
      "Automated generic-table validation framework across hundreds of Oracle tables",
      "Data-fix script suite for automated referential integrity remediation",
      "Azure DevOps release pipelines for audited multi-region deployment"
    ]
  }
];
