import { Link } from "react-router";
import { motion } from "framer-motion";
import { 
  Database, 
  Shield, 
  AlertTriangle, 
  FileText, 
  Layers, 
  Scale, 
  GitMerge, 
  ArrowRight,
  type LucideIcon 
} from "lucide-react";
import { ReactLenis } from "lenis/react";

// --- TYPES ---
interface PrincipleItem {
  title: string;
  icon: LucideIcon;
  statement: string;
  desc: string;
}

// --- DATA ---
const PRINCIPLES: PrincipleItem[] = [
  {
    title: "Database-First Design",
    icon: Database,
    statement: "Data outlives code.",
    desc: `I don't start with API endpoints; I start with the Entity Relationship Diagram (ERD).

[Image of database entity relationship diagram]
If the schema is normalized and constraints are strict, the application logic becomes simple and predictable. The database is the foundation; everything else follows from it.`
  },
  {
    title: "Security Before Convenience",
    icon: Shield,
    statement: "Trust nothing. Validate everything.",
    desc: `I prioritize rigid input validation and strict Role-Based Access Control (RBAC) over development speed. A system is only as useful as it is secure. Every request and operation is checked before it is trusted.`
  },
  {
    title: "Failure Handling as a Feature",
    icon: AlertTriangle,
    statement: "Errors should be structured, not swallowed.",
    desc: `I build global error handling mechanisms that sanitize feedback for users while logging distinct operational details for developers. Silent failures are the enemy of maintainability.`
  },
  {
    title: "Separation of Concerns",
    icon: Layers,
    statement: "Decoupling logic from transport.",
    desc: `My controllers don't know about business rules; they only handle HTTP. My services don't know about Express; they only handle logic.

[Image of software layered architecture diagram]
This modularity ensures the system can evolve without breaking and allows teams to work on separate layers safely.`
  },
  {
    title: "Maintainability Over Shortcuts",
    icon: Scale,
    statement: "Write for the developer who comes next.",
    desc: `Clever one-liners are technical debt. I prefer verbose, explicit code that clearly communicates intent. Reliability scales; clever hacks don't. Every line of code should be easy to understand for the next developer.`
  },
  {
    title: "Documentation Over Assumptions",
    icon: FileText,
    statement: "If it isn't written down, it doesn't exist.",
    desc: `From API documentation (Postman/Swagger) to inline comments explaining 'why' (not just 'what'), I believe clarity is a core deliverable. Systems without documentation are systems that break silently.`
  }
];

export default function Process() {
  return (
    <ReactLenis root>
      <div className="bg-parchment min-h-screen font-sans selection:bg-almond-silk selection:text-camel-dark overflow-hidden pt-24 pb-20">

        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* --- HERO SECTION --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24 max-w-3xl mx-auto"
          >
            <span className="text-camel font-bold tracking-widest uppercase text-xs mb-4 block">The Philosophy</span>
            <h1 className="font-serif text-5xl md:text-6xl text-camel-dark leading-tight mb-8">
              Reliable systems scale. <br />
              <span className="text-camel italic decoration-camel/30 underline underline-offset-8">Clever hacks don’t.</span>
            </h1>
            <p className="text-camel-dark/70 text-lg leading-relaxed">
              I approach software development with a system-first mindset. My code is a byproduct of architectural decisions, not the starting point.
            </p>
          </motion.div>

          {/* --- PRINCIPLES GRID --- */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {PRINCIPLES.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div className="bg-white p-8 md:p-10 rounded-2xl border border-camel/10 shadow-sm hover:shadow-xl hover:shadow-camel/10 transition-all duration-300 h-full relative overflow-hidden flex flex-col">
                  
                  {/* Hover Accent (Background Blob) */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-almond-cream/40 rounded-full blur-2xl group-hover:bg-almond-silk/30 transition-colors" />

                  <div className="relative z-10 flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-azure-mist rounded-xl text-camel">
                        <item.icon size={28} strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-camel/40 group-hover:text-camel transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h2 className="font-serif text-2xl text-camel-dark mb-2 group-hover:text-camel transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs font-bold text-camel uppercase tracking-wider mb-6 opacity-80">
                      "{item.statement}"
                    </p>
                    <p className="text-camel-dark/80 leading-relaxed text-sm md:text-base whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- FINAL CALL TO ACTION --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-almond-cream/30 rounded-full border border-camel/10 text-camel-dark/60 text-sm font-medium mb-8">
              <GitMerge size={16} />
              <span>Ready to implement these standards?</span>
            </div>
            
            <br />
            
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-3 bg-camel-dark text-parchment px-8 py-4 rounded-full text-lg font-bold hover:bg-camel transition-all shadow-lg shadow-camel/20"
            >
              Start a Conversation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </ReactLenis>
  );
}
