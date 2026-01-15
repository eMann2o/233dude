import { Link } from "react-router";
import { motion } from "framer-motion";
import { 
  Server, 
  Database, 
  Layout, 
  Terminal, 
  CheckCircle2, 
  type LucideIcon 
} from "lucide-react";
import { ReactLenis } from "lenis/react";

// --- TYPES ---
interface SkillSection {
  category: string;
  icon: LucideIcon;
  desc: string;
  items: string[];
}

interface SkillData {
  primary: SkillSection[];
  supporting: SkillSection[];
}

// --- DATA ---
const SKILLS: SkillData = {
  primary: [
{
  category: "Backend & Systems",
  icon: Server,
  desc: "The core logic layer where I spend 70% of my development time. I design and implement backend systems that are secure, modular, and maintainable.",
  items: [
        "Node.js Runtime Environment",
        "Express.js Framework",
        "RESTful API Architecture",
        "Middleware Design Patterns",
        "Auth & Security (JWT, RBAC, HTTP-Only Cookies)",
        "Centralized Error Handling & Validation"
      ]
    },
    {
      category: "Databases & Data Modeling",
      icon: Database,
      desc: "Designing structures that ensure data integrity and query efficiency. I build relational and NoSQL database schemas that are normalized and analytics-ready.",
      items: [
        "Relational SQL (MySQL, PostgreSQL)",
        "NoSQL Documents (MongoDB, Mongoose)",
        "Schema Normalization & Relationships",
        "ACID Transactions & Data Integrity",
        "Complex Query Optimization (Foundational)",
        "Database-First Design Methodology"
      ]
    }
  ],
  supporting: [
    {
      category: "Frontend Interface",
      icon: Layout,
      desc: "Building clean, data-driven interfaces to consume my APIs.",
      items: [
        "React.js", 
        "JavaScript (ES6+)", 
        "HTML5 & Semantic Markup", 
        "CSS3 / Tailwind CSS", 
        "Admin Dashboards"
      ]
    },
    {
      category: "Tools & Practices",
      icon: Terminal,
      desc: "The workflows and standards that keep code production-ready.",
      items: [
        "Git Version Control & GitHub", 
        "MVC Layered Architecture", 
        "Environment Configuration (.env)", 
        "SweetAlert2 UX Handling", 
        "Debugging & Troubleshooting"
      ]
    }
  ]
};

export default function Skills() {
  return (
    <ReactLenis root>
      <div className="bg-parchment min-h-screen font-sans selection:bg-almond-silk selection:text-camel-dark overflow-hidden pt-24 pb-20">

        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* --- HEADER --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <span className="text-camel font-bold tracking-widest uppercase text-xs mb-3 block">Capability Matrix</span>
            <h1 className="font-serif text-5xl md:text-6xl text-camel-dark leading-tight mb-6">
              The Engine Room.
            </h1>
            <p className="text-camel-dark/60 max-w-2xl text-lg leading-relaxed">
              I don't just "know" these tools; I use them to solve specific architectural and data problems.
              My expertise is weighted heavily towards server-side logic, database design, and system reliability.
            </p>
          </motion.div>

          {/* --- PRIMARY SKILLS (The "Senior" Signal) --- */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 rounded-full bg-camel animate-pulse" />
              <h2 className="font-serif text-2xl text-camel-dark">Primary Focus Areas</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {SKILLS.primary.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 md:p-10 rounded-2xl border border-camel/10 shadow-lg shadow-camel/5 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-camel">
                    <skill.icon size={120} strokeWidth={1} />
                  </div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-azure-mist rounded-xl flex items-center justify-center text-camel mb-6">
                      <skill.icon size={24} />
                    </div>
                    
                    <h3 className="font-serif text-2xl text-camel-dark mb-3">{skill.category}</h3>
                    <p className="text-camel-dark/60 text-sm mb-8 min-h-[40px] leading-relaxed">
                      {skill.desc}
                    </p>
                    
                    <ul className="space-y-4">
                      {skill.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-camel mt-0.5 shrink-0" />
                          <span className="text-camel-dark/90 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- SUPPORTING SKILLS (The "Full Stack" Helper) --- */}
          <div>
            <h2 className="font-serif text-2xl text-camel-dark mb-8 opacity-80">Supporting Capabilities</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {SKILLS.supporting.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-parchment border border-camel/10 rounded-xl p-8 hover:bg-white hover:border-camel/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-almond-cream/40 rounded-lg text-camel-dark">
                      <skill.icon size={20} />
                    </div>
                    <h3 className="font-bold text-camel-dark text-lg">{skill.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white border border-camel/5 rounded-md text-sm text-camel-dark/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </ReactLenis>
  );
}