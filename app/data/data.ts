/**
 * Central data access layer.
 * All portfolio content is read from portfolio-data.json.
 * Icons are stored as string names in JSON and resolved here via iconMap.
 */

import {
  Database,
  Server,
  Shield,
  Terminal,
  Cpu,
  Workflow,
  Layers,
  Code2,
  Globe,
  Zap,
  BarChart3,
  FileText,
  GitMerge,
  Users,
  GraduationCap,
  FlaskConical,
  AlertTriangle,
  Building2,
  Monitor,
  Network,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";

import portfolioData from "./portfolio-data.json";

// ---------------------------------------------------------------------------
// Icon Resolution
// ---------------------------------------------------------------------------

/** Map from icon name strings (used in JSON) → Lucide icon components */
export const iconMap: Record<string, LucideIcon> = {
  Database,
  Server,
  Shield,
  Terminal,
  Cpu,
  Workflow,
  Layers,
  Code2,
  Globe,
  Zap,
  BarChart3,
  FileText,
  GitMerge,
  Users,
  GraduationCap,
  FlaskConical,
  AlertTriangle,
  Building2,
  Monitor,
  Network,
  Github,
  Linkedin,
  Mail,
};

/** Safely resolve an icon name to a Lucide component. Falls back to Code2. */
export function resolveIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}

// ---------------------------------------------------------------------------
// Type Definitions
// ---------------------------------------------------------------------------

export interface SocialLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  email: string;
  location: string;
  university: string;
  graduationYear: string;
  profileImage: string;
  resumePath: string;
  statusBadge: string;
  socialLinks: Record<string, SocialLink>;
}

export interface HeroSignal {
  icon: string;
  label: string;
}

export interface HeroData {
  headline: string;
  headlineAccent: string;
  subheadline: string;
  signals: HeroSignal[];
}

export interface BentoCard {
  number: string;
  icon: string;
  title: string;
  description: string;
  color: string;
  highlight: boolean;
}

export interface RadarStat {
  value: string;
  label: string;
  color: string;
}

export interface RadarSection {
  badge: string;
  headline: string;
  headlineAccent: string;
  description: string;
  stats: RadarStat[];
}

export interface HomeSections {
  bentoCards: BentoCard[];
  radarSection: RadarSection;
  cta: { headline: string };
}

export interface SkillRadarPoint {
  subject: string;
  A: number;
  fullMark: number;
}

export interface SkillSection {
  category: string;
  icon: string;
  desc: string;
  items: string[];
  color: string;
}

export interface SkillsData {
  radarChart: SkillRadarPoint[];
  primary: SkillSection[];
  supporting: SkillSection[];
  learning: string[];
}

export interface FeaturedProject {
  title: string;
  role: string;
  desc: string;
  tech: string[];
  color: string;
  link: string;
}

export interface ProjectCapability {
  icon: string;
  text: string;
}

export interface DetailedProject {
  id: string;
  title: string;
  subtitle: string;
  role?: string;
  description: string;
  dataAngle: string;
  capabilities: ProjectCapability[];
  stack: string[];
  links: { caseStudy: string; github: string };
  highlight: boolean;
  color: string;
}

export interface CaseStudyData {
  title: string;
  role: string;
  timeline: string;
  stack: string[];
  color: string;
  content: {
    problem: { text: string; constraints: string[] };
    solution: { overview: string; roles: string[]; workflow: string[] };
    architecture: {
      backend: string[];
      schemaDetails: string;
      diagramPlaceholder?: string;
    };
    auth: { strategy: string; rbac: string; reasoning: string };
    decisions: { decision: string; why: string; tradeoff: string }[];
    challenges: { challenge: string; solution: string }[];
    outcome: { result: string; future: string[] };
  };
}

export interface ExperienceJob {
  company: string;
  role: string;
  location: string;
  type: string;
  icon: string;
  takeaway: string;
  color: string;
  points: string[];
}

export interface ExperienceData {
  jobs: ExperienceJob[];
  lessons: string[];
}

export interface AboutFocus {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface AboutDnaCard {
  icon: string;
  text: string;
  sub: string;
  color: string;
}

export interface AboutExposure {
  title: string;
  org: string;
  desc: string;
}

export interface AboutPrinciple {
  icon: string;
  title: string;
  desc: string;
}

export interface AboutData {
  mission: {
    university: string;
    universityYear: string;
    intro: string;
    description: string;
  };
  focuses: AboutFocus[];
  dnaCards: AboutDnaCard[];
  exposure: AboutExposure[];
  principles: AboutPrinciple[];
  quote: string;
}

export interface ProcessPrinciple {
  title: string;
  icon: string;
  statement: string;
  desc: string;
  color: string;
}

export interface NavItem {
  name: string;
  path: string;
}

export interface NavigationData {
  items: NavItem[];
  footerLinks: NavItem[];
  footerTagline: string;
  footerCta: string;
}

export interface ContactData {
  headerLabel: string;
  headline: string;
  headlineAccent: string;
  description: string;
  responseStandards: {
    title: string;
    description: string;
    availability: string;
  };
}

// ---------------------------------------------------------------------------
// Data Accessors
// ---------------------------------------------------------------------------

export function getPersonal(): PersonalInfo {
  return portfolioData.personal as PersonalInfo;
}

export function getHero(): HeroData {
  return portfolioData.hero as HeroData;
}

export function getHomeSections(): HomeSections {
  return portfolioData.homeSections as HomeSections;
}

export function getSkills(): SkillsData {
  return portfolioData.skills as SkillsData;
}

export function getFeaturedProjects(): FeaturedProject[] {
  return portfolioData.projects.featured as FeaturedProject[];
}

export function getDetailedProjects(): DetailedProject[] {
  return portfolioData.projects.detailed as DetailedProject[];
}

export function getCaseStudy(slug: string): CaseStudyData | null {
  const studies = portfolioData.caseStudies as Record<string, CaseStudyData>;
  return studies[slug] ?? null;
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(portfolioData.caseStudies);
}

export function getExperience(): ExperienceData {
  return portfolioData.experience as ExperienceData;
}

export function getAbout(): AboutData {
  return portfolioData.about as AboutData;
}

export function getProcess(): ProcessPrinciple[] {
  return portfolioData.process.principles as ProcessPrinciple[];
}

export function getNavigation(): NavigationData {
  return portfolioData.navigation as NavigationData;
}

export function getContact(): ContactData {
  return portfolioData.contact as ContactData;
}

export function getContactLinks(): SocialLink[] {
  const personal = getPersonal();
  return Object.values(personal.socialLinks);
}
