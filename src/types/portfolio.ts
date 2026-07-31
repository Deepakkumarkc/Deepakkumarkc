export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  primaryTitle: string;
  tagline: string;
  shortBio: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  headshotUrl: string;
  heroBannerUrl: string;
  resumePdfUrl: string;
  socials: SocialLink[];
  impactMetrics: {
    label: string;
    value: string;
    subtext: string;
    icon: string;
  }[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    badgeUrl?: string;
    level?: string;
    isPrimary?: boolean;
  }[];
}

export interface ClientProject {
  id: string;
  title: string;
  client: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  domain: string;
}

export interface WorkExperience {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  projects: ClientProject[];
  crossProjectContributions: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  businessImpact: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialUrl?: string;
  category: 'cloud' | 'ai' | 'analytics';
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  organization: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}
