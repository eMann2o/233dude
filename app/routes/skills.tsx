import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  Terminal,
  GitMerge,
  CheckCircle2,
  Cpu,
  Shield,
  Zap,
  type LucideIcon
} from "lucide-react";
import { ReactLenis } from "lenis/react";

interface SkillSection {
  category: string;
  icon: LucideIcon;
  desc: string;
  items: string[];
  color: string;
}

interface SkillData {
  primary: SkillSection[];
  supporting: SkillSection[];
}

const SKILLS: SkillData = {
  primary: [
    {
      category: "Backend Architecture",
      icon: Terminal,
      desc: "Designing secure, scalable, and maintainable server-side logic. Focused on high-performance APIs and distributed systems.",
      items: [
        "Node.js & Express.js Mastery",
        "RESTful API Design & Security",
        "Authentication (JWT) & RBAC",
        "Real-Time Systems (WebSockets)",
        "Logic Layer Separation",
        "Performance Optimization"
      ],
      color: "blue-bell"
    },
    {
      category: "Data Engineering",
      icon: Database,
      desc: "Architecting schemas that produce trusted data. Building pipelines that ensure integrity and downstream reliability.",
      items: [
        "Relational Modeling (PostgreSQL)",
        "Advanced SQL & CTEs",
        "Data Normalization (3NF)",
        "NoSQL Patterns (MongoDB)",
        "ACID Transactions",
        "ETL/ELT Logic Design"
      ],
      color: "dusty-mauve"
    }
  ],
  supporting: [
    {
      category: "Engineering Concepts",
      icon: GitMerge,
      desc: "Guided by architectural principles that ensure systems are audit-ready and scalable.",
      items: [
        "System Design & Scale",
        "Clean Architecture",
        "OOP & SOLID Principles",
        "Data Flow Mapping"
      ],
      color: "lavender"
    },
    {
      category: "Frontend & Tools",
      icon: BarChart3,
      desc: "Supporting technologies for building end-to-end, production-grade engineers solutions.",
      items: [
        "React & TypeScript",
        "Modern CSS / Tailwind",
        "Git & CI/CD Tooling",
        "Vite Ecosystem"
      ],
      color: "iron-grey"
    }
  ]
};

const LEARNING: string[] = [
  "dbt (data build tool)",
  "Apache Airflow",
  "Apache Spark",
  "Snowflake Patterns",
  "Data Observability"
];

export default function Skills() {
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
            <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Technical Depth</span>
            <h1 className="font-plus text-5xl md:text-7xl text-iron-grey leading-[0.9] tracking-tight font-extrabold max-w-4xl">
              The Engineering <br />
              <span className="gradient-text italic">Capability Matrix.</span>
            </h1>
            <p className="text-iron-grey/60 max-w-2xl text-lg leading-relaxed">
              Weighted toward core disciplines of data engineering and backend systems, with a focus on where data is produced and how it serves the enterprise.
            </p>
          </motion.div>

          {/* --- PRIMARY SKILLS --- */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-2 h-2 rounded-full bg-blue-bell animate-pulse" />
              <h2 className="text-2xl font-plus font-bold text-iron-grey">Core Specializations</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {SKILLS.primary.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bento-card group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-4 rounded-2xl bg-${skill.color}/10 text-${skill.color}`}>
                      <skill.icon size={28} />
                    </div>
                    <span className="text-[10px] font-bold text-iron-grey/20 uppercase tracking-[0.2em]">Primary 0{idx + 1}</span>
                  </div>

                  <h3 className="text-3xl font-plus font-bold text-iron-grey mb-4 group-hover:text-blue-bell transition-colors">{skill.category}</h3>
                  <p className="text-iron-grey/60 text-base mb-8 leading-relaxed">
                    {skill.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    {skill.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className={`text-blue-bell opacity-40`} />
                        <span className="text-sm font-bold text-iron-grey/80 tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- SUPPORTING SKILLS --- */}
          <div className="mb-24">
            <h2 className="text-2xl font-plus font-bold text-iron-grey mb-12 opacity-60">Supporting Domains</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {SKILLS.supporting.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-card-bg border border-iron-grey/5 rounded-[2rem] p-8 hover:bg-white hover:border-blue-bell/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-iron-grey">
                      <skill.icon size={20} />
                    </div>
                    <h3 className="font-bold text-iron-grey text-xl">{skill.category}</h3>
                  </div>
                  <p className="text-iron-grey/50 text-sm mb-6 leading-relaxed">{skill.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-4 py-2 bg-white border border-iron-grey/5 rounded-xl text-xs font-bold text-iron-grey/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- ACTIVELY LEARNING --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-iron-grey text-white rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden"
          >
             {/* Background Pattern */}
             <div className="absolute top-0 right-0 p-12 opacity-10 text-white">
                <Cpu size={200} strokeWidth={1} />
              </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-bell animate-pulse" />
                <h2 className="text-3xl font-plus font-bold">Actively Building Toward</h2>
              </div>
              <p className="text-white/60 text-lg mb-12 max-w-xl leading-relaxed">
                The modern engineering ecosystem. Currently deepening proficiency in distributed high-frequency data processing and transformation layers.
              </p>
              <div className="flex flex-wrap gap-4">
                {LEARNING.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm font-bold hover:bg-white/10 transition-colors">
                    <Zap size={14} className="text-blue-bell" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </ReactLenis>
  );
}