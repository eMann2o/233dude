import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  AlertTriangle, 
  Lock, 
  Database, 
  Server, 
  Users, 
  Shield,
  ArrowLeft,
  Zap,
  Cpu,
  Trophy,
  Activity,
  GitBranch,
  ShieldCheck
} from "lucide-react";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

// --- 1. DATA DEFINITION ---

interface CaseStudyProps {
  title: string;
  role: string;
  timeline: string;
  stack: string[];
  color: string;
  content: {
    problem: { text: string; constraints: string[] };
    solution: { overview: string; roles: string[]; workflow: string[] };
    architecture: { backend: string[]; schemaDetails: string; diagramPlaceholder?: string };
    auth: { strategy: string; rbac: string; reasoning: string };
    decisions: { decision: string; why: string; tradeoff: string }[];
    challenges: { challenge: string; solution: string }[];
    outcome: { result: string; future: string[] };
  };
}

const ALL_CASE_STUDIES: Record<string, CaseStudyProps> = {
  "travel-with-kb": {
    title: "Travel With KB",
    role: "Data Modeling & Backend Architecture",
    timeline: "Dec 2025 - Present",
    stack: ["Node.js", "MongoDB", "Aggregation Pipelines", "Data Modeling", "Express"],
    color: "blue-bell",
    content: {
      problem: {
        text: "The core data challenge was modeling relational-style entities — Users, Tours, Reviews, and Bookings — inside MongoDB without losing the integrity guarantees that relational databases provide by default. The data needed to support analytics without duplicating state.",
        constraints: [
          "Enforce referential integrity between Users ↔ Reviews ↔ Tours in NoSQL.",
          "Design aggregation pipelines to compute derived metrics on reads.",
          "Ensure every data write goes through server-side validation logic."
        ]
      },
      solution: {
        overview: "I designed a document schema using Parent Referencing to preserve entity boundaries, then built Mongoose-level validation and virtual computed fields to keep derived metrics accurate without data duplication.",
        roles: ["User (Browse/Book)", "Admin (Analytics Dashboard)", "Guide (Assigned to Tours)"],
        workflow: [
          "Schema designed with referential integrity constraints",
          "Mongoose pre-save hooks enforce validation before writes",
          "Aggregation pipeline computes avg ratings at query time",
          "APIFeatures class applies filtering and pagination"
        ]
      },
      architecture: {
        backend: [
          "Mongoose Schemas: Strict typing",
          "Virtual Fields: Computed averages",
          "Aggregation Layer: Logic on metrics",
          "APIFeatures: Reusable query builder"
        ],
        schemaDetails: "Tours are the primary entity. Reviews use Parent Referencing rather than embedding — keeping review documents queryable independently and avoiding unbounded array growth. A Mongoose virtual computes ratings on demand.",
        diagramPlaceholder: ""
      },
      auth: {
        strategy: "JWT via HTTP-Only Cookies",
        rbac: "Role-gated middleware: restrictTo('admin', 'lead-guide')",
        reasoning: "Access control is a data integrity concern. Using HTTP-Only cookies prevents XSS-based token theft and ensures only authorized roles can modify records."
      },
      decisions: [
        {
          decision: "Parent Referencing Over Embedding",
          why: "Embedding reviews would create unbounded array growth and make pagination impossible.",
          tradeoff: "Requires .populate() calls which add minor latency — mitigated by selective populating."
        },
        {
          decision: "Validation in the Model Layer",
          why: "Ensures data is validated before persistence regardless of the specific route trigger.",
          tradeoff: "Schema complexity increases, but data integrity is guaranteed at the source."
        }
      ],
      challenges: [
        {
          challenge: "Computing Aggregate Metrics Without Duplication",
          solution: "Built a Mongoose post-save hook that recalculates the average rating on the Tour document after any review is created."
        },
        {
          challenge: "Preventing Invalid Writes from Any Source",
          solution: "All paths go through Mongoose model validation. The HTTP layer is treated as untrusted input."
        }
      ],
      outcome: {
        result: "A clean, analytics-ready data model where every entity boundary is enforced and aggregate metrics are computed correctly.",
        future: ["Migrate metrics to dedicated analytics collection", "Add data lineage tracking for audit reporting"]
      }
    }
  },
  "careerflow": {
    title: "CareerFlow Platform",
    role: "Lead Backend Developer",
    timeline: "2024 - 2025",
    stack: ["PHP", "MySQL", "RBAC Architecture", "MVC"],
    color: "dusty-mauve",
    content: {
      problem: {
        text: "The institution required a centralized system to replace paper-based scholarship reviews. The system had to support multiple roles with strict access control and produce auditable data trails.",
        constraints: [
          "Multiple user roles with non-overlapping permissions.",
          "Document uploads must be validated server-side (size/type).",
          "Automated status transitions must be traceable and logs unmutable."
        ]
      },
      solution: {
        overview: "I designed a PHP-based workflow system where each application moves through defined states (Draft → Submitted → Under Review → Approved), with role-gated access at every transition.",
        roles: ["Applicant (Apply/Track)", "Reviewer (Evaluate/Score)", "Admin (Manager Cycles)"],
        workflow: [
          "Applicant Creates Profile & Application",
          "Uploads Required Documents (PDF validation)",
          "Submits for Review (state locked)",
          "Reviewer Scores & Decisions",
          "Admin Finalizes & Reports"
        ]
      },
      architecture: {
        backend: [
          "Session Auth with Role Flags",
          "RBAC Middleware: Gated methods",
          "File Handler: Server-side validation",
          "Audit Log: Immutable history"
        ],
        schemaDetails: "The core schema uses a normalized relational design: Applications link to Users, Documents, and Reviews. Status transitions are stored in a dedicated AuditLog table for compliance.",
        diagramPlaceholder: ""
      },
      auth: {
        strategy: "PHP Session Authentication",
        rbac: "Action-level role checks before every data mutation",
        reasoning: "Session-based auth was appropriate for a server-rendered institutional app. Each controller method validates the user role."
      },
      decisions: [
        {
          decision: "Explicit Status State Machine",
          why: "Each application's lifecycle is modeled as discrete states with defined valid transitions.",
          tradeoff: "Upfront design cost, but prevents invalid states and simplifies reporting."
        },
        {
          decision: "Server-side Doc Validation",
          why: "Client-side validation is trivial to bypass; integrity requires server verification.",
          tradeoff: "Slight latency increase during uploads, but ensures system security."
        }
      ],
      challenges: [
        {
          challenge: "Preventing Concurrent Review Conflicts",
          solution: "Implemented optimistic locking on review records so reviewers cannot overwrite each other's scores."
        },
        {
          challenge: "Generating Accurate Cycle Reports",
          solution: "Designed the AuditLog table as the source of truth for all status history transitions."
        }
      ],
      outcome: {
        result: "The platform successfully digitalized the workflow, reducing processing time and providing auditable data for compliance.",
        future: ["Email notifications on state changes", "PDF generation for approval letters"]
      }
    }
  }
};

// --- 2. COMPONENTS ---

function SectionHeader({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex items-center gap-6 mb-12">
        <span className="text-4xl font-plus font-extrabold text-blue-bell/20">{number}</span>
        <h2 className="text-3xl font-plus font-extrabold text-iron-grey">{title}</h2>
        <div className="flex-1 h-px bg-iron-grey/5" />
    </div>
  );
}

function CaseStudyLayout({ data }: { data: CaseStudyProps }) {
  return (
    <ReactLenis root>
      <div className="bg-white min-h-screen font-sans text-iron-grey selection:bg-blue-bell/20 pt-32 pb-24">

        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 space-y-8"
          >
            <Link to="/projects" className="inline-flex items-center gap-2 text-blue-bell font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
               <ArrowLeft size={14} /> Back to Projects
            </Link>

            <div className="space-y-4">
                <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.2em] text-iron-grey/40">
                    <span className="text-blue-bell">{data.role}</span>
                    <span>•</span>
                    <span>{data.timeline}</span>
                </div>
                <h1 className="font-plus text-5xl md:text-7xl text-iron-grey leading-[0.9] tracking-tight font-extrabold">
                  {data.title}<span className="text-blue-bell">.</span>
                </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              {data.stack.map(tech => (
                <span key={tech} className="px-4 py-2 bg-card-bg border border-iron-grey/5 text-iron-grey/60 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:border-blue-bell/20 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.header>

          <main className="space-y-32">

            {/* 1. Problem */}
            <section>
              <SectionHeader number="01" title="The Challenge" />
              <div className="grid md:grid-cols-5 gap-12 items-start">
                  <div className="md:col-span-3 space-y-6">
                    <p className="text-xl md:text-2xl text-iron-grey/70 leading-relaxed font-medium">
                        {data.content.problem.text}
                    </p>
                  </div>
                  <div className="md:col-span-2 bento-card bg-card-bg/50">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle size={18} className="text-blue-bell" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-iron-grey/40">Technical Constraints</h4>
                    </div>
                    <ul className="space-y-4">
                      {data.content.problem.constraints.map((c, i) => (
                        <li key={i} className="flex gap-4 text-xs font-bold text-iron-grey/60 leading-snug">
                          <CheckCircle size={14} className="shrink-0 text-blue-bell/40" /> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
            </section>

            {/* 2. Solution & Architecture */}
            <section>
              <SectionHeader number="02" title="Architecture" />
              <div className="grid lg:grid-cols-3 gap-6 mb-12">
                 <div className="lg:col-span-2 bento-card h-full">
                    <div className="flex items-center gap-3 mb-8">
                        <Server size={20} className="text-blue-bell" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-iron-grey/40">Backend Services</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 h-full">
                        {data.content.architecture.backend.map((item, i) => (
                          <div key={i} className="p-6 rounded-[2rem] bg-white border border-iron-grey/5 flex flex-col justify-between group hover:border-blue-bell/10 transition-all">
                             <div className="text-blue-bell/20 mb-4"><Zap size={20} /></div>
                             <span className="text-sm font-bold text-iron-grey/80">{item}</span>
                          </div>
                        ))}
                    </div>
                 </div>
                 <div className="bento-card border-none bg-iron-grey text-white">
                    <div className="flex items-center gap-3 mb-8">
                        <Database size={20} className="text-blue-bell" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Data Layer</h4>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed font-medium mb-12">
                        {data.content.architecture.schemaDetails}
                    </p>
                    <div className="w-full aspect-square bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center p-8 text-center">
                        <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
                            {data.content.architecture.diagramPlaceholder || "Engineering Diagram Loading..."}
                        </span>
                    </div>
                 </div>
              </div>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="bento-card">
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-iron-grey/40 mb-8">Lifecycle Workflow</h4>
                     <div className="space-y-8 relative border-l border-iron-grey/5 ml-4">
                        {data.content.solution.workflow.map((step, i) => (
                          <div key={i} className="pl-12 relative">
                            <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-blue-bell z-10" />
                             <span className="text-sm font-bold text-iron-grey/70">{step}</span>
                          </div>
                        ))}
                      </div>
                  </div>
                  <div className="bento-card">
                     <h4 className="text-[10px] font-bold uppercase tracking-widest text-iron-grey/40 mb-8">Access Control (RBAC)</h4>
                     <div className="space-y-6">
                        {[
                          { title: "Identity Strategy", val: data.content.auth.strategy, icon: Lock },
                          { title: "Enforcement", val: data.content.auth.rbac, icon: ShieldCheck },
                          { title: "Engineering Rationale", val: data.content.auth.reasoning, icon: Shield }
                        ].map((item, i) => (
                          <div key={i} className="flex gap-4 p-4 rounded-2xl bg-card-bg/50 border border-iron-grey/5">
                             <item.icon className="text-blue-bell shrink-0" size={18} />
                             <div>
                                <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-iron-grey/30 mb-1">{item.title}</h5>
                                <p className="text-sm font-bold text-iron-grey/80 leading-snug">{item.val}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* 3. Engineering Decisions */}
            <section>
               <SectionHeader number="03" title="Engineering Decisions" />
               <div className="grid md:grid-cols-2 gap-6">
                 {data.content.decisions.map((d, i) => (
                   <div key={i} className="bento-card group hover:border-blue-bell/10">
                      <div className="p-3 w-fit rounded-xl bg-white shadow-sm text-blue-bell mb-8 group-hover:bg-blue-bell group-hover:text-white transition-all">
                        <GitBranch size={20} />
                      </div>
                      <h4 className="text-2xl font-plus font-bold text-iron-grey mb-4">{d.decision}</h4>
                      <div className="space-y-4">
                         <p className="text-sm font-medium text-iron-grey/60"><strong className="text-[10px] uppercase tracking-widest text-blue-bell block mb-1">Context:</strong> {d.why}</p>
                         <p className="text-sm font-medium text-iron-grey/40 italic"><strong className="text-[10px] uppercase tracking-widest text-iron-grey/20 not-italic block mb-1">Tradeoff:</strong> {d.tradeoff}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </section>

            {/* 4. Challenges & Retrospective */}
            <section>
               <SectionHeader number="04" title="Retrospective" />
               <div className="space-y-6 mb-12">
                 {data.content.challenges.map((c, i) => (
                    <div key={i} className="p-10 rounded-[2.5rem] bg-card-bg border border-iron-grey/5 flex flex-col md:flex-row gap-8">
                       <div className="shrink-0 p-4 w-fit h-fit rounded-[1.5rem] bg-white text-blue-bell shadow-sm">
                          <Activity size={24} />
                       </div>
                       <div className="space-y-4">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-iron-grey/30">Challenge: {c.challenge}</h4>
                          <p className="text-lg font-bold text-iron-grey/70 leading-relaxed italic">
                             " {c.solution} "
                          </p>
                       </div>
                    </div>
                 ))}
               </div>

               <div className="bg-iron-grey text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-5 text-white">
                        <Trophy size={300} strokeWidth={1} />
                    </div>
                   <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
                        <h4 className="text-blue-bell font-bold tracking-widest uppercase text-xs">Conclusion</h4>
                        <p className="text-2xl md:text-3xl font-plus font-extrabold leading-tight">
                            {data.content.outcome.result}
                        </p>
                        <div className="pt-8 flex flex-wrap justify-center gap-3">
                            {data.content.outcome.future.map((f, i) => (
                                <span key={i} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/40 uppercase tracking-widest">
                                    {f}
                                </span>
                            ))}
                        </div>
                   </div>
               </div>
            </section>

            {/* Final Navigation */}
            <div className="pt-20 flex justify-between items-center">
               <Link to="/projects" className="group inline-flex items-center gap-3 text-iron-grey/40 font-bold text-xs uppercase tracking-widest hover:text-blue-bell transition-colors">
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> All Projects
               </Link>
               <Link to="/contact" className="inline-flex items-center gap-4 bg-blue-bell text-white px-8 py-4 rounded-full font-bold hover:bg-iron-grey transition-all shadow-lg shadow-blue-bell/20">
                  Discuss the Build <Activity size={18} />
               </Link>
            </div>

          </main>
        </div>
      </div>
    </ReactLenis>
  );
}

// --- 3. MAIN EXPORT ---

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? ALL_CASE_STUDIES[slug] : null;

  if (!data) {
    return (
      <div className="bg-white min-h-screen font-plus text-iron-grey flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-extrabold">Case study not found.</h1>
        <Link to="/projects" className="inline-flex items-center gap-2 bg-blue-bell text-white px-8 py-4 rounded-full font-bold hover:bg-iron-grey transition-all">
          <ArrowLeft size={18} /> Back to Projects
        </Link>
      </div>
    );
  }

  return <CaseStudyLayout data={data} />;
}