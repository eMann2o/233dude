import { Link } from "react-router";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle, 
  AlertTriangle, 
  Layers, 
  Lock, 
  GitMerge, 
  Database, 
  Server, 
  Users, 
  Shield 
} from "lucide-react";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

// --- 1. DATA DEFINITION ---

const DATA = {
  title: "Travel With KB",
  role: "Lead Full-Stack Developer",
  timeline: "Dec 2025 - Present",
  stack: ["Node.js", "Express", "MongoDB", "React", "JWT"],
  content: {
    problem: {
      text: "The goal was to build a modern, scalable booking engine that separates the data layer from the presentation layer. I needed to move away from tightly coupled monolithic patterns to a decoupled API architecture that could support multiple client types.",
      constraints: [
        "Handle relational-style data (Users ↔ Reviews) in a NoSQL environment.",
        "Secure authentication without storing JWTs in localStorage (XSS risk).",
        "Strict REST API standards for potential mobile consumption."
      ]
    },
    solution: {
      overview: "I architected a MERN Stack application functioning as a booking platform where the backend handles all business logic (price calculation, availability) before writing to the database.",
      roles: ["User (Browse/Book)", "Admin (Manage Tours/Stats)", "Guide (Assigned to Tours)"],
      workflow: [
        "User Authenticates via HTTP-Only Cookie",
        "Browses Filtered Tours (API Query Params)",
        "Books a Tour (Stripe Integration)",
        "Leaves a Review (Linked to User & Tour)"
      ]
    },
    architecture: {
      backend: [
        "Models: Mongoose Schemas & Validation",
        "Controllers: Request/Response Logic",
        "Routes: Endpoint Definitions",
        "Utils: APIFeatures (Sort, Filter, Paginate)"
      ],
      schemaDetails: "I used Parent Referencing to manage relationships. Tours are the core entity. Reviews are child documents linked to both a Tour and a User. Users store encrypted passwords and role data.",
      // Placeholder for diagram insertion
      diagramPlaceholder: "" 
    },
    auth: {
      strategy: "JWT via HTTP-Only Cookies",
      rbac: "Middleware: restrictTo('admin', 'lead-guide')",
      reasoning: "Storing tokens in localStorage leaves them vulnerable to XSS. HTTP-Only cookies prevent client-side script access, significantly hardening the auth layer."
    },
    decisions: [
      {
        decision: "Fat Models, Thin Controllers",
        why: "Moved validation and pre-save hooks (hashing) into Mongoose Schemas.",
        tradeoff: "Models become larger, but controllers remain readable and focused purely on HTTP logic."
      },
      {
        decision: "Global Error Handling Middleware",
        why: "Replaced try/catch blocks with a centralized error controller.",
        tradeoff: "Requires custom AppError class, but ensures consistent JSON error responses across the entire API."
      }
    ],
    challenges: [
      {
        challenge: "Managing Deeply Nested Data",
        solution: "Used Mongoose .populate() to simulate SQL Joins only when necessary to keep query performance high."
      },
      {
        challenge: "Handling CORS in Dev vs Prod",
        solution: "Configured backend to explicitly whitelist the frontend origin, preventing browser security blocks."
      }
    ],
    outcome: {
      result: "The result is a robust, production-ready REST API capable of supporting high-traffic loads. The separation of concerns allows for independent scaling of the frontend and backend.",
      future: ["Add Two-Factor Authentication (2FA)", "Implement Redis caching for frequently accessed Tour data"]
    }
  }
};

// --- 2. TYPES & INTERFACES ---

interface CaseStudyProps {
  title: string;
  role: string;
  timeline: string;
  stack: string[];
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

// --- 3. HELPER COMPONENTS ---

function Section({ number, title, children }: { number: string, title: string, children: ReactNode }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex items-baseline gap-4 mb-8 border-b border-camel/10 pb-4">
        <span className="font-serif text-5xl text-camel/20 font-bold">{number}</span>
        <h2 className="font-serif text-3xl text-camel-dark">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

// --- 4. LAYOUT COMPONENT ---

function CaseStudyLayout({ data }: { data: CaseStudyProps }) {
  return (
    <ReactLenis root>
      <div className="bg-parchment min-h-screen font-sans text-camel-dark selection:bg-almond-silk selection:text-camel-dark">

        <div className="container mx-auto px-6 max-w-4xl pt-32 pb-24">
          
          {/* Header */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 border-b border-camel/10 pb-12"
          >
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-camel mb-4">
              <span>{data.role}</span>
              <span>•</span>
              <span>{data.timeline}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-camel-dark mb-8 leading-tight">
              🧠 Case Study: <br />
              <span className="text-camel italic">{data.title}</span>
            </h1>
            <div className="flex flex-wrap gap-3">
              {data.stack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-camel-dark text-parchment text-xs font-bold uppercase tracking-wider rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.header>

          <main className="space-y-24">

            {/* 1. Problem */}
            <Section number="1" title="The Problem">
              <p className="text-lg leading-relaxed mb-8">{data.content.problem.text}</p>
              <div className="bg-almond-cream/30 p-6 rounded-xl border-l-4 border-camel">
                <h4 className="font-bold text-sm uppercase tracking-widest text-camel mb-4">Core Constraints</h4>
                <ul className="space-y-3">
                  {data.content.problem.constraints.map((c, i) => (
                    <li key={i} className="flex gap-3 text-sm font-medium opacity-80">
                      <AlertTriangle size={16} className="shrink-0 text-camel" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Section>

            {/* 2. Solution */}
            <Section number="2" title="Solution Overview">
              <p className="text-lg mb-8">{data.content.solution.overview}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl mb-4 text-camel">User Roles</h4>
                  <ul className="space-y-2">
                    {data.content.solution.roles.map((r, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm bg-white/50 p-2 rounded border border-camel/10">
                        <Users className="w-4 h-4 text-camel" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-4 text-camel">Core Workflow</h4>
                  <div className="space-y-0 relative border-l border-camel/20 ml-2">
                    {data.content.solution.workflow.map((step, i) => (
                      <div key={i} className="pl-6 pb-6 relative">
                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-camel" />
                        <span className="text-sm font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {/* 3. Architecture */}
            <Section number="3" title="Architecture">
              <div className="bg-azure-mist/50 p-8 rounded-2xl border border-camel/10 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="text-camel" />
                  <h4 className="font-bold uppercase tracking-widest text-xs">Backend Structure</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                  {data.content.architecture.backend.map((item, i) => (
                    <div key={i} className="bg-white p-3 rounded border border-camel/10 text-camel-dark/80">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <Database className="text-camel" />
                  <h4 className="font-bold uppercase tracking-widest text-xs">Data Layer</h4>
                </div>
                <p className="text-base leading-relaxed">{data.content.architecture.schemaDetails}</p>
                
                {/* Visual Diagram Placeholder */}
                <div className="w-full h-64 bg-camel-dark/5 rounded-xl flex items-center justify-center border-2 border-dashed border-camel/20 text-camel/50 text-sm font-medium p-6 text-center">
                  {data.content.architecture.diagramPlaceholder || "[ Insert ERD / Schema Diagram Here ]"}
                </div>
              </div>
            </Section>

            {/* 4. Auth */}
            <Section number="4" title="Authentication & Auth">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Strategy", val: data.content.auth.strategy, icon: Lock },
                  { title: "Enforcement", val: data.content.auth.rbac, icon: Shield },
                  { title: "Reasoning", val: data.content.auth.reasoning, icon: CheckCircle }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm shadow-camel/5 border border-camel/10">
                    <item.icon className="text-camel mb-3" size={24} />
                    <h4 className="font-bold text-xs uppercase tracking-wider opacity-50 mb-2">{item.title}</h4>
                    <p className="text-sm font-medium leading-relaxed">{item.val}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 5. Key Decisions */}
            <Section number="5" title="Key Design Decisions">
              <div className="space-y-6">
                {data.content.decisions.map((d, i) => (
                  <div key={i} className="relative pl-6 md:pl-0">
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-camel/10" />
                    <div className="md:ml-6">
                      <h4 className="text-lg font-serif font-bold text-camel mb-2">{d.decision}</h4>
                      <p className="mb-2"><strong className="text-xs uppercase tracking-wide opacity-50">Why:</strong> {d.why}</p>
                      <p className="text-sm opacity-70 italic"><strong className="not-italic text-xs uppercase tracking-wide opacity-50">Tradeoff:</strong> {d.tradeoff}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* 6. Challenges */}
            <Section number="6" title="Challenges & Lessons">
              <div className="grid gap-6">
                {data.content.challenges.map((c, i) => (
                  <div key={i} className="bg-camel-dark text-parchment p-6 rounded-xl">
                    <div className="flex gap-3 mb-3 text-almond-silk">
                      <AlertTriangle size={18} />
                      <h4 className="font-bold text-sm uppercase tracking-wider">Challenge: {c.challenge}</h4>
                    </div>
                    <p className="text-white/80 leading-relaxed text-sm pl-8 border-l border-white/20">
                      <span className="text-almond-silk font-bold">Solution: </span>
                      {c.solution}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 7. Outcome */}
            <Section number="7" title="Outcome">
              <div className="bg-azure-mist p-8 rounded-2xl border border-camel/10 text-center mb-8">
                <p className="text-xl md:text-2xl font-serif text-camel-dark leading-relaxed">
                  "{data.content.outcome.result}"
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="font-bold text-xs uppercase tracking-widest text-camel mb-4">Future Improvements</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {data.content.outcome.future.map((f, i) => (
                    <span key={i} className="px-4 py-2 border border-camel/30 rounded-full text-sm hover:bg-white transition-colors cursor-default">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Section>

          </main>
        </div>
      </div>
    </ReactLenis>
  );
}

// --- 5. MAIN EXPORT ---

export default function TravelWithKB() {
  return <CaseStudyLayout data={DATA} />;
}