import { WorkExperience } from "@/types/portfolio";

export const workExperiences: WorkExperience[] = [
  {
    company: "Sagitec Solutions",
    title: "Engineer - Data (Azure Data Engineering Function)",
    period: "05/2022 – Present",
    location: "Chennai, Tamil Nadu, India",
    summary: "Sagitec Solutions develops pension, benefits and unemployment insurance systems for public-sector clients throughout the U.S. and Canada. Lead data engineer on 5 client projects involving pipeline development, data migration and Azure cloud integration.",
    projects: [
      {
        id: "pbas-ai-rd",
        title: "Prudent Benefits Administration Services (PBAS) & AI R&D",
        client: "PBAS (U.S. & Canadian Pension Systems)",
        period: "04/2026 – Present",
        location: "Chennai",
        domain: "Pension Administration & AI Automation",
        summary: "Working on legacy data conversion, pension prior-service processing, prior-service screen development, and contributing to an AI R&D initiative for automated workflow development.",
        highlights: [
          "Working on legacy data conversion, pension prior-service processing, and prior-service screen development.",
          "Contributing to an AI R&D initiative that uses legacy data-mapping documents and data-modelling artefacts to speed up U.S. and Canadian pension workflow development.",
          "Writing Python automation scripts and AI-assisted data pipelines to cut manual engineering effort and shorten delivery timelines."
        ],
        techStack: ["Python", "Azure Databricks", "Agentic AI", "PySpark", "SQL Server"]
      },
      {
        id: "askdrb",
        title: "Alaska Division of Retirement and Benefits (ASKDRB)",
        client: "State of Alaska (Public Sector)",
        period: "01/2025 – 03/2026",
        location: "Canada (On-Site)",
        domain: "Public Sector Retirement Systems",
        summary: "Worked on-site in Canada engaging directly with client stakeholders to turn business logic into scalable data conversion rules, transforming 100+ tables across an 800 GB+ dataset using Azure Databricks & PySpark.",
        highlights: [
          "Worked on-site in Canada, engaging directly with client stakeholders to turn business logic into scalable data conversion rules for a data migration project.",
          "Wrote and tuned PySpark scripts in Azure Databricks to transform and load pension datasets, keeping data integrity across 100+ tables.",
          "Built manual SQL data pipelines and on-prem SQL Server routines to keep multi-environment refresh cycles in sync.",
          "Worked with technical architects to resolve data discrepancies, tune SQL jobs, and keep pipelines stable across an 800 GB+ dataset.",
          "Designed batch workflows integrating Azure Databricks with on-prem SQL Server, using incremental loads to cut processing time."
        ],
        techStack: ["Azure Databricks", "PySpark", "SQL Server", "Azure Blob Storage", "T-SQL"]
      },
      {
        id: "urs",
        title: "Utah Retirement Systems (URS)",
        client: "Utah Retirement Systems",
        period: "06/2024 – 01/2025",
        location: "Chennai",
        domain: "State Data Warehouse & BI Reporting",
        summary: "Built ELT processes, dimensional data models, SSIS packages for delta loads, and optimized T-SQL stored procedures feeding data marts and SSRS reports.",
        highlights: [
          "Built ELT processes and dimensional data models for the data warehouse, validating data flow from multiple source systems into the target schema.",
          "Designed SSIS packages for delta loads and snapshot captures supporting historical tracking and audit requirements.",
          "Optimised T-SQL stored procedures feeding data marts, reducing execution time for downstream BI reports.",
          "Built SSRS reports surfacing pension data metrics and pipeline health KPIs for business stakeholders."
        ],
        techStack: ["T-SQL", "SSIS", "SSRS", "Dimensional Data Modeling", "Data Marts", "Power BI"]
      },
      {
        id: "pbas",
        title: "Prudent Benefits Administration Services (PBAS)",
        client: "PBAS Client Systems",
        period: "11/2022 – 01/2024",
        location: "Chennai",
        domain: "Cloud Data Synchronization",
        summary: "Built a hybrid sync pipeline in Azure Data Factory and SQL to align legacy and cloud apps, and engineered a C# Process Hold-Back module for file uploads.",
        highlights: [
          "Built a hybrid sync pipeline in Azure Data Factory and SQL to keep a legacy system and a newly deployed cloud app aligned.",
          "Designed ADF pipelines to orchestrate SQL execution and trigger Power BI refreshes, giving stakeholders real-time visibility into conversion progress.",
          "Built a 'Process Hold Back' module in C# for complex file-upload logic, improving data ingestion reliability.",
          "Reviewed conversion reports with QA to flag anomalies and certify completeness of migrated datasets."
        ],
        techStack: ["Azure Data Factory (ADF)", "SQL", "C#", "Power BI", "Azure SQL DB"]
      },
      {
        id: "heb",
        title: "Healthcare Employees' Pension & Benefits Plans (HEB)",
        client: "HEB Healthcare Pension",
        period: "05/2022 – 06/2024",
        location: "Chennai",
        domain: "Multi-Region Data Migration",
        summary: "Wrote Oracle PL/SQL scripts for generic-table validation across hundreds of tables, achieving multi-region data migration with zero critical data loss.",
        highlights: [
          "Wrote Oracle PL/SQL scripts to validate business rules and generic tables across hundreds of tables ahead of cutover.",
          "Produced validation reports for client review and ran multi-region data migration with zero critical data loss.",
          "Wrote PL/SQL data-fix scripts to remediate issues found during migration rehearsals while preserving referential integrity.",
          "Managed CI/CD build and deployment pipelines in Azure DevOps for database script releases across regions."
        ],
        techStack: ["Oracle PL/SQL", "Azure DevOps", "Data Migration", "CI/CD", "T-SQL"]
      }
    ],
    crossProjectContributions: [
      "Designed and maintained a reusable data-processing framework standardising logging, error handling, and debugging across 5 client projects (PBAS, HEB, ASKDRB, TCRS, MainePRS); documented it and mentored junior developers.",
      "Tuned PL/SQL and T-SQL stored procedures, functions, and views for data volumes up to 800 GB, cutting execution time on critical reports.",
      "Automated SQL script and SSIS package deployment across Dev/QA/Prod through Azure DevOps pipelines, reducing release risk.",
      "Led design of batch and incremental pipelines integrating on-prem SQL Server with ADF, Databricks, and Blob Storage."
    ]
  },
  {
    company: "Selfmade Ninja Academy",
    title: "Software Developer Intern",
    period: "12/2020 – 08/2021",
    location: "Bangalore, India",
    summary: "Built components of a Virtual Lab platform in PHP, Python, and MongoDB; containerised services with Docker for consistent deployment; worked across full SDLC.",
    projects: [
      {
        id: "virtual-lab",
        title: "Virtual Lab Platform Containerization",
        client: "Selfmade Ninja Academy",
        period: "12/2020 – 08/2021",
        location: "Bangalore",
        domain: "EdTech & Cloud Lab Infrastructure",
        summary: "Built components of a Virtual Lab platform in PHP, Python, and MongoDB; containerised services with Docker for consistent deployment.",
        highlights: [
          "Built components of a Virtual Lab platform in PHP, Python, and MongoDB; containerised services with Docker for consistent deployment.",
          "Worked across the full SDLC – requirements, development, code review, testing, and documentation."
        ],
        techStack: ["PHP", "Python", "MongoDB", "Docker", "Git"]
      }
    ],
    crossProjectContributions: [
      "Containerized PHP & Python micro-components using Docker for deployment consistency.",
      "Worked across full SDLC: requirements, development, code reviews, testing, and technical documentation."
    ]
  }
];
