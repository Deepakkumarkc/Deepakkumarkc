import { WorkExperience } from "@/types/portfolio";

export const workExperiences: WorkExperience[] = [
  {
    company: "Sagitec Solutions",
    title: "Engineer - Data (Azure Data Engineering Function)",
    period: "05/2022 – Present",
    location: "Chennai, Tamil Nadu, India",
    summary: "Functioned as Lead Data Engineer responsible for data pipeline development, large-scale data migration (800GB+), and cloud integration on the Azure stack for major U.S. and Canadian public sector pension systems.",
    projects: [
      {
        id: "pbas-ai-rd",
        title: "Prudent Benefits Administration Services (PBAS) & AI R&D",
        client: "PBAS (U.S. Pension & Benefits)",
        period: "04/2026 – Present",
        location: "Chennai",
        domain: "Pension Administration & AI Automation",
        summary: "Pioneering AI-driven data modeling and Python automation scripts to accelerate U.S. and Canadian pension workflow development.",
        highlights: [
          "Worked on legacy data conversion, pension prior service processing, and development of prior service screens within the application.",
          "Contributing to an AI R&D initiative leveraging legacy data mapping documents and data-modelling artefacts to accelerate development of pension workflows.",
          "Developing Python automation scripts and AI-assisted data pipelines to reduce manual engineering effort and shorten delivery timelines."
        ],
        techStack: ["Python", "Azure Databricks", "Agentic AI", "PySpark", "SQL Server"]
      },
      {
        id: "askdrb",
        title: "Alaska Division of Retirement and Benefits (ASKDRB)",
        client: "State of Alaska (Public Sector)",
        period: "01/2025 – 03/2026",
        location: "Canada / Remote",
        domain: "Public Sector Retirement Systems",
        summary: "Architected PySpark data transformation scripts and batch workflows on Azure Databricks to migrate 100+ tables for 800GB+ pension environments.",
        highlights: [
          "Collaborated directly with client stakeholders to elicit requirements and codify complex business logic into scalable data conversion rules.",
          "Developed and optimized PySpark scripts within Azure Databricks to transform and load large-scale pension datasets, ensuring data integrity across 100+ tables.",
          "Engineered manual SQL data pipelines and on-premises SQL Server management routines to synchronize multi-environment refresh cycles.",
          "Coordinated with Technical Architects to resolve data discrepancies, tune SQL jobs, and maintain pipeline stability for an 800 GB+ dataset environment.",
          "Designed batch data workflows integrating Azure Databricks and on-premises SQL Server, applying incremental load strategies to minimize processing time."
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
        summary: "Designed ELT processes, SSIS delta packages, and optimized T-SQL stored procedures for state pension data warehouse data marts.",
        highlights: [
          "Contributed to designing and developing ELT processes and dimensional data models for the data warehouse, ensuring accurate data flow from heterogeneous source systems.",
          "Designed and maintained SSIS packages for delta (incremental) loads and snapshot captures to support historical data tracking and audit requirements.",
          "Developed and optimized T-SQL stored procedures to populate Data Marts consumed by downstream BI reporting tools, improving query performance significantly.",
          "Built and deployed SSRS reports to surface pension data metrics and pipeline health KPIs for business stakeholders."
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
        summary: "Engineered hybrid ADF + SQL data synchronization pipelines and a custom C# Process Hold-Back ingestion module.",
        highlights: [
          "Implemented a hybrid data synchronization pipeline using Azure Data Factory and SQL to maintain alignment between legacy systems and a newly deployed cloud application.",
          "Designed ADF pipelines to orchestrate SQL script execution and trigger Power BI refresh cycles, providing real-time progress tracking for data conversion tasks.",
          "Engineered a 'Process Hold Back' module using C# to handle complex file-upload business logic, improving data ingestion reliability for the application layer.",
          "Analyzed conversion reports alongside QA teams to identify data anomalies, validate fixes, and certify completeness of migrated datasets."
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
        summary: "Executed full-scale multi-region data migration with zero critical data loss using Oracle PL/SQL generic-table validation frameworks.",
        highlights: [
          "Played a key role in a full-scale data migration project; developed Oracle PL/SQL scripts for business-rule and generic-table validation across hundreds of tables prior to cut-over.",
          "Produced and managed comprehensive validation reports for client review; executed multi-region data migration from source to target with zero critical data loss.",
          "Wrote data-fix scripts in Oracle PL/SQL to remediate data quality issues uncovered during migration rehearsals, maintaining referential integrity across the entire schema.",
          "Reverse-engineered legacy databases using Visio to create detailed ER diagrams, enabling the team to visualize complex data relationships and accelerate schema mapping.",
          "Managed CI/CD build and deployment pipelines via Azure DevOps for smooth, auditable delivery of database scripts across multiple geographic regions."
        ],
        techStack: ["Oracle PL/SQL", "Azure DevOps", "Data Migration", "Visio ERD", "CI/CD"]
      }
    ],
    crossProjectContributions: [
      "Enterprise Data Framework: Designed and maintained a reusable data-processing framework standardizing logging, error handling, and debugging across 5+ client projects (PBAS, HEB, ASKDRB, TCRS, MainePRS).",
      "Mentored junior developers, improving team productivity and code consistency.",
      "Performance Tuning: Optimized stored procedures, functions, and views in PL/SQL and T-SQL for data volumes up to 800GB.",
      "CI/CD Implementation: Automated deployment of SQL scripts and SSIS packages across Dev, QA, and Prod using Azure DevOps."
    ]
  },
  {
    company: "Selfmade Ninja Academy",
    title: "Software Developer Intern",
    period: "12/2020 – 08/2021",
    location: "Bangalore, India",
    summary: "Contributed to the full SDLC of a Virtual Lab platform using PHP, Python, MongoDB, and Docker containerization.",
    projects: [
      {
        id: "virtual-lab",
        title: "Virtual Lab Platform Containerization",
        client: "Selfmade Ninja Academy",
        period: "12/2020 – 08/2021",
        location: "Bangalore",
        domain: "EdTech & Cloud Lab Infrastructure",
        summary: "Built and containerized core application components for a cloud virtual lab environment.",
        highlights: [
          "Contributed to the development of a Virtual Lab platform using PHP, Python, and MongoDB.",
          "Containerized application components using Docker for consistent multi-environment deployment.",
          "Participated in full SDLC: requirements, development, code reviews, testing, and technical documentation."
        ],
        techStack: ["PHP", "Python", "MongoDB", "Docker", "Git"]
      }
    ],
    crossProjectContributions: [
      "Containerized PHP & Python micro-components using Docker.",
      "Maintained SDLC technical documentation and code review standards."
    ]
  }
];
