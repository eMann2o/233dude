import { Link } from "react-router";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Github, 
  Server, 
  Database, 
  Shield, 
  FileJson, 
  Layout, 
  Users, 
  FileText, 
  type LucideIcon 
} from "lucide-react";
import { ReactLenis } from "lenis/react";

// --- TYPES ---
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
  capabilities: Capability[];
  stack: string[];
  links: ProjectLinks;
  highlight: boolean;
}

// --- DATA: CURATED PROJECTS ---
const PROJECTS: Project[] = [
  {
    id: "travel-with-kb",
    title: "Travel With KB",
    subtitle: "MERN Stack • Full-Stack Booking System",
    description: "A decoupled travel booking platform featuring a REST API, secure JWT authentication, and a normalized MongoDB schema designed for data integrity.",
    capabilities: [
      { icon: Server, text: "API-First Architecture" },
      { icon: Shield, text: "Secure Auth (HTTP-Only cookies)" },
      { icon: Database, text: "Advanced Mongoose Modeling" },
      { icon: Users, text: "Middleware-level RBAC" },
      { icon: FileJson, text: "Global Error Handling" }
    ],
    stack: ["Node.js", "Express", "MongoDB", "React"],
    links: { caseStudy: "/case-studies/travel-with-kb", github: "#" },
    highlight: true // Flagship
  },
  {
    id: "scholarship-platform",
    title: "Scholarship Application Platform",
    subtitle: "Node.js & PHP • Institutional Workflow System",
    description: "A multi-role scholarship management system handling applications, secure document uploads, reviews, and automated status transitions for accurate reporting.",
    capabilities: [
      { icon: Users, text: "Applicant Onboarding & Tracking" },
      { icon: FileText, text: "Secure Document Uploads (PDF)" },
      { icon: Layout, text: "Admin Review Workflows" },
      { icon: Database, text: "Audit-Ready Data Transitions" }
    ],
    stack: ["Node.js", "Express", "MySQL", "PHP"],
    links: { caseStudy: "/case-studies/scholarship-platform", github: "#" },
    highlight: false
  },
  {
    id: "lms",
    title: "Learning Management System",
    subtitle: "PHP & MySQL • Educational Platform",
    description: "A comprehensive LMS focused on structured educational workflows, module architecture, and real-time communication without compromising data consistency.",
    capabilities: [
      { icon: Layout, text: "Modules & Courses Architecture" },
      { icon: Users, text: "Role-Based Access (Admin/Student)" },
      { icon: FileText, text: "Auto-Graded Quizzes & Reports" },
      { icon: Database, text: "Activity Tracking" }
    ],
    stack: ["PHP", "MySQL", "JavaScript", "AJAX"],
    links: { caseStudy: "/case-studies/lms", github: "#" },
    highlight: false
  }
];

export default function Projects() {
  return (
    <ReactLenis root>
      <div className="bg-parchment min-h-screen font-sans selection:bg-almond-silk selection:text-camel-dark overflow-hidden pt-24 pb-20">

        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* --- HEADER --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center md:text-left"
          >
            <span className="text-camel font-bold tracking-widest uppercase text-xs mb-3 block">Curated Signal</span>
            <h1 className="font-serif text-5xl md:text-6xl text-camel-dark leading-tight mb-6">
              What is worth <br />
              <span className="text-camel italic">reviewing.</span>
            </h1>
            <p className="text-camel-dark/60 max-w-lg text-lg">
              Selected works that demonstrate system architecture, security patterns, and database design.
            </p>
          </motion.div>

          {/* --- PROJECTS LIST --- */}
          <div className="space-y-16">
            {PROJECTS.map((project, index) => (
              <motion.article 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group rounded-3xl overflow-hidden border transition-all duration-500
                  ${project.highlight 
                    ? "bg-white border-camel/20 shadow-xl shadow-camel/10" 
                    : "bg-parchment border-camel/10 hover:bg-white hover:border-camel/20 hover:shadow-lg hover:shadow-camel/5"
                  }`}
              >
                {/* Flagship Label */}
                {project.highlight && (
                  <div className="absolute top-0 right-0 bg-camel text-parchment text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl z-10">
                    Flagship System
                  </div>
                )}

                <div className="grid md:grid-cols-12 gap-0">
                  
                  {/* Left: Content & Logic */}
                  <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-between h-full">
                    <div>
                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-full bg-azure-mist text-camel-dark text-xs font-bold uppercase tracking-wider border border-camel/5">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h2 className="font-serif text-3xl md:text-4xl text-camel-dark mb-2">{project.title}</h2>
                      <p className="text-camel font-medium text-sm mb-6">{project.subtitle}</p>
                      
                      <p className="text-camel-dark/80 text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-auto pt-8 border-t border-camel/10">
                      <Link 
                        to={project.links.caseStudy} 
                        className="inline-flex items-center gap-2 bg-camel-dark text-parchment px-6 py-3 rounded-lg hover:bg-camel transition-all font-medium"
                      >
                        Read Case Study <ArrowRight size={16} />
                      </Link>
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 text-camel-dark hover:text-camel transition-colors font-medium"
                      >
                        <Github size={18} /> Source Code
                      </a>
                    </div>
                  </div>

                  {/* Right: Key Capabilities (Visual List) */}
                  <div className={`md:col-span-5 p-8 md:p-12 border-t md:border-t-0 md:border-l border-camel/10 
                    ${project.highlight ? "bg-almond-cream/20" : "bg-azure-mist/30"}`}>
                    
                    <h3 className="text-xs font-bold text-camel uppercase tracking-widest mb-6 flex items-center gap-2">
                      <Server size={14} /> Key Capabilities
                    </h3>
                    
                    <ul className="space-y-4">
                      {project.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-3 text-camel-dark/90">
                          <div className={`mt-1 p-1.5 rounded-md ${project.highlight ? "bg-white text-camel shadow-sm" : "bg-white/50 text-camel-dark/60"}`}>
                            <cap.icon size={14} />
                          </div>
                          <span className="text-sm font-medium leading-relaxed">{cap.text}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Decorative abstract diagram hint */}
                    <div className="mt-12 opacity-30">
                      <div className="h-px w-full bg-camel/30 mb-2" />
                      <div className="h-px w-2/3 bg-camel/30 mb-2" />
                      <div className="h-px w-1/3 bg-camel/30" />
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <p className="text-camel-dark/50 text-sm">
              Additional archived projects available upon request.
            </p>
          </div>

        </div>
      </div>
    </ReactLenis>
  );
}