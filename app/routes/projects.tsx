import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Server,
  Database,
  BarChart3,
  FileText,
  GitMerge,
  Users,
  Layout,
  Code2,
  Cpu,
  Shield,
  type LucideIcon
} from "lucide-react";
import { ReactLenis } from "lenis/react";

interface Capability {
  icon: LucideIcon;
  text: string;
}

interface ProjectLinks {
  caseStudy: string;
  github: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  dataAngle: string;
  capabilities: Capability[];
  stack: string[];
  links: ProjectLinks;
  highlight: boolean;
  color: string;
}

const PROJECTS: Project[] = [
  {
    id: "travel-with-kb",
    title: "Travel With KB",
    subtitle: "MERN Architecture • Secure Booking Data Flow",
    description: "A comprehensive booking engine with a data-modeled schema (parent referencing, aggregation pipelines) and a secure, role-gated Express API.",
    dataAngle: "Parent referencing, aggregation pipelines, secure API design.",
    capabilities: [
      { icon: GitMerge, text: "Parent Referencing Schema Design" },
      { icon: BarChart3, text: "Aggregation Pipelines for Analytics" },
      { icon: Server, text: "Role-Gated Express API Security" },
      { icon: Database, text: "Document-Based Data Modeling" }
    ],
    stack: ["Node.js", "MongoDB", "Express", "JWT"],
    links: { caseStudy: "/projects/travel-with-kb", github: "#" },
    highlight: true,
    color: "blue-bell"
  },
  {
    id: "scholarship-platform",
    title: "Scholarship MIS",
    subtitle: "Relational Architecture • Secure Workflows",
    description: "A multi-role workflow engine with a normalized MySQL schema, managing thousands of applicant records with secure state-machine status transitions.",
    dataAngle: "normalized SQL modeling, RBAC, state machine transitions.",
    capabilities: [
      { icon: Database, text: "Normalized 3NF Relational Design" },
      { icon: Users, text: "Complex RBAC (Admin/Applicant)" },
      { icon: FileText, text: "Audit Logging & Action History" },
      { icon: Shield, text: "SQL Injection Prevention & Validation" }
    ],
    stack: ["PostgreSQL", "Express", "TypeScript", "Node.js"],
    links: { caseStudy: "/projects/scholarship-platform", github: "#" },
    highlight: false,
    color: "dusty-mauve"
  },
  {
    id: "lms",
    title: "Learning Management System",
    subtitle: "Event Tracking • Modular System Design",
    description: "Full LMS with modular architecture, auto-graded quiz pipelines, and a behavioral analytics tracking layer for aggregated reporting.",
    dataAngle: "Event tracking schema, analytics pipelines, modular logic.",
    capabilities: [
      { icon: Server, text: "Modular Service Architecture" },
      { icon: Database, text: "Behavioral Event Tracking Layer" },
      { icon: Cpu, text: "Auto-Grading Pipeline Logic" },
      { icon: GitMerge, text: "Scalable Educational Infrastructure" }
    ],
    stack: ["Node.js", "Express", "MySQL", "Analytics"],
    links: { caseStudy: "/projects/lms", github: "#" },
    highlight: false,
    color: "lavender"
  }
];

export default function Projects() {
  return (
    <ReactLenis root>
      <div className="bg-white min-h-screen font-sans selection:bg-blue-bell/20 selection:text-iron-grey overflow-hidden pt-32 pb-20">

        <div className="container mx-auto px-6 max-w-6xl">

          {/* --- HEADER --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 space-y-6"
          >
            <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Engineering Portfolio</span>
            <h1 className="font-plus text-5xl md:text-7xl text-iron-grey leading-[0.9] tracking-tight font-extrabold max-w-4xl">
              Systems designed for <br />
              <span className="gradient-text italic">performance & trust.</span>
            </h1>
            <p className="text-iron-grey/60 max-w-2xl text-lg leading-relaxed">
              Documenting architectural decisions, data foundations, and the engineering principles behind every system built for scale.
            </p>
          </motion.div>

          {/* --- PROJECTS GRID --- */}
          <div className="grid gap-12">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bento-card group h-full !p-0 overflow-hidden flex flex-col md:flex-row
                  ${project.highlight ? "ring-2 ring-blue-bell/20" : ""}`}
              >
                {/* Left: Content */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-lg bg-card-bg text-iron-grey/60 text-[10px] font-bold uppercase tracking-wider border border-iron-grey/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.highlight && (
                        <span className="px-3 py-1 bg-blue-bell/10 text-blue-bell text-[10px] font-bold uppercase tracking-widest rounded-full">
                          Flagship
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-plus font-bold text-iron-grey mb-2 group-hover:text-blue-bell transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-blue-bell/60 font-medium text-sm mb-6">{project.subtitle}</p>
                    <p className="text-iron-grey/70 text-lg leading-relaxed mb-6">{project.description}</p>
                    
                    <div className="flex items-center gap-2 text-xs font-bold text-iron-grey/40 uppercase tracking-widest mb-8 bg-card-bg p-3 rounded-xl border border-iron-grey/5">
                      <Code2 size={14} className="text-blue-bell" />
                      {project.dataAngle}
                    </div>
                  </div>

                  <Link
                    to={project.links.caseStudy}
                    className="inline-flex items-center gap-3 bg-iron-grey text-white px-8 py-4 rounded-full hover:bg-blue-bell hover:shadow-xl hover:shadow-blue-bell/20 transition-all font-bold w-fit"
                  >
                    Read Engineering Study <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Right: Capabilities (Visual Bento Layer) */}
                <div className={`md:w-[40%] p-8 md:p-12 border-t md:border-t-0 md:border-l border-iron-grey/5
                    ${project.color === 'blue-bell' ? 'bg-blue-bell/[0.03]' : 
                      project.color === 'dusty-mauve' ? 'bg-dusty-mauve/[0.03]' : 'bg-lavender/[0.03]'}`}>

                  <h3 className="text-xs font-bold text-iron-grey/40 uppercase tracking-widest mb-8">
                    Core Engineering
                  </h3>

                  <div className="space-y-6">
                    {project.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-xl shadow-sm text-blue-bell">
                          <cap.icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-iron-grey">
                            {cap.text.split(' ')[0]}
                          </p>
                          <p className="text-xs text-iron-grey/50 leading-relaxed">
                            {cap.text.split(' ').slice(1).join(' ')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Accents */}
                  <div className="mt-16 opacity-10">
                    <Database size={100} strokeWidth={1} className="text-iron-grey ml-auto" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-32 text-center py-12 border-t border-iron-grey/5">
            <p className="text-iron-grey/40 text-sm font-medium">
              Architectural explorations and distributed systems research available upon request.
            </p>
          </div>

        </div>
      </div>
    </ReactLenis>
  );
}