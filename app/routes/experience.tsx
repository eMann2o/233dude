import { Link } from "react-router";
import { motion } from "framer-motion";
import { Briefcase, Network, Monitor, Code2, Calendar, MapPin, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { ReactLenis } from "lenis/react";

// --- DATA: EXPERIENCE TIMELINE ---
const EXPERIENCE = [
  {
    company: "AmaliTech",
    role: "Software Engineering Intern",
    location: "Takoradi, Ghana",
    type: "Engineering",
    icon: Code2,
    takeaway: "Production Standards & React Workflows",
    points: [
      "Worked within a professional environment emphasizing structured development, collaboration, and code quality.",
      "Gained exposure to React-based full-stack workflows and clean interfaces between frontend and backend layers.",
      "Reinforced engineering practices: readable code, version control, and clear technical communication."
    ]
  },
  {
    company: "Adamus Resources Limited",
    role: "IT / Technical Intern",
    location: "Nzema, Ghana",
    type: "Corporate IT",
    icon: Building2,
    takeaway: "Reliability & Operational Continuity",
    points: [
      "Supported internal systems in a corporate environment where stability and operational continuity were critical.",
      "Assisted with setup, maintenance, and troubleshooting of hardware/software for non-technical staff.",
      "Learned that systems are only successful when they work consistently for the people who rely on them."
    ]
  },
  {
    company: "Sekondi Takoradi Chamber of Commerce and Industry",
    role: "IT / Systems Support Intern",
    location: "Takoradi, Ghana",
    type: "Systems Support",
    icon: Monitor,
    takeaway: "Data Accuracy & Institutional Process",
    points: [
      "Supported IT infrastructure and data-related workflows in an institutional environment.",
      "Assisted with document management processes, ensuring accuracy and consistency in digital records.",
      "Highlighted the need for systems that are intuitive, well-structured, and resilient to user error."
    ]
  },
  {
    company: "Ghana Ports and Harbours Authority",
    role: "IT Support & Networking Intern",
    date: "Sept 11 – Nov 24, 2023",
    location: "Takoradi, Ghana",
    type: "Infrastructure",
    icon: Network,
    takeaway: "Infrastructure Scale & Complexity",
    points: [
      "Gained hands-on experience supporting network cabling and infrastructure in a large operational environment.",
      "Diagnosed hardware and connectivity issues where downtime had significant operational impact.",
      "Reinforced the importance of disciplined processes, documentation, and adherence to standards."
    ]
  }
];

export default function Experience() {
  return (
    <ReactLenis root>
      <div className="bg-parchment min-h-screen font-sans selection:bg-almond-silk selection:text-camel-dark overflow-hidden pt-24 pb-20">

        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* --- HEADER --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center md:text-left"
          >
            <span className="text-camel font-bold tracking-widest uppercase text-xs mb-3 block">Professional History</span>
            <h1 className="font-serif text-5xl md:text-6xl text-camel-dark leading-tight mb-6">
              The Path to <br />
              <span className="text-camel italic">Engineering.</span>
            </h1>
            <p className="text-camel-dark/60 max-w-2xl text-lg leading-relaxed">
              My professional experience spans software engineering, backend-focused development, IT systems support, and institutional technology environments. These roles have shaped how I approach backend systems and data — with an emphasis on reliability, clarity, and real-world constraints.
            </p>
          </motion.div>

          {/* --- TIMELINE --- */}
          <div className="relative border-l-2 border-camel/10 ml-4 md:ml-10 space-y-16 pb-12 mb-24">
            
            {EXPERIENCE.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-parchment border-4 border-camel z-10" />

                <div className="group bg-white p-8 rounded-2xl border border-camel/10 shadow-sm hover:shadow-lg hover:shadow-camel/5 transition-all duration-300">
                  
                  {/* Job Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h2 className="font-serif text-2xl text-camel-dark mb-1">{job.role}</h2>
                      <h3 className="text-camel font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                        <Briefcase size={14} /> {job.company}
                      </h3>
                    </div>
                    
                    {/* Metadata Badge */}
                    <div className="flex flex-col items-start md:items-end text-xs font-medium text-camel-dark/50 gap-1">
                      {job.date && (
                        <span className="flex items-center gap-1 bg-azure-mist px-2 py-1 rounded">
                          <Calendar size={12} /> {job.date}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Key Takeaway Badge */}
                  <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-almond-cream/30 border border-camel/10 text-camel-dark text-xs font-bold">
                    <job.icon size={14} className="text-camel" />
                    <span>Focus: {job.takeaway}</span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-camel-dark/80 leading-relaxed text-sm md:text-base">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-camel/40 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}

          </div>

          {/* --- KEY LESSONS SECTION (New) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-azure-mist/50 p-8 md:p-12 rounded-3xl border border-camel/10 mb-20"
          >
            <h2 className="font-serif text-3xl text-camel-dark mb-8">How These Experiences Shape My Work</h2>
            <div className="grid md:grid-cols-1 gap-4">
              {[
                "Systems must be reliable before they are feature-rich.",
                "Data accuracy and integrity are non-negotiable.",
                "Clear access control and role separation matter.",
                "Documentation and clarity reduce long-term maintenance cost.",
                "Technology should support people and processes, not complicate them."
              ].map((lesson, i) => (
                <div key={i} className="flex gap-4 items-center bg-white/60 p-4 rounded-xl border border-camel/5">
                  <CheckCircle2 className="text-camel shrink-0" size={20} />
                  <span className="text-camel-dark font-medium">{lesson}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- CURRENT DIRECTION (New) --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-camel font-bold tracking-widest uppercase text-xs mb-3 block">Current Direction</span>
            <p className="text-camel-dark/80 text-lg leading-relaxed mb-8">
              I am now focused on <strong>backend engineering and backend-adjacent data roles</strong>, where system architecture, data integrity, and analytical thinking intersect.
            </p>
            
            <Link to="/contact" className="inline-flex items-center gap-2 bg-camel-dark text-parchment px-8 py-4 rounded-full font-bold hover:bg-camel transition-all shadow-lg shadow-camel/20">
              Discuss Opportunities <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>
      </div>
    </ReactLenis>
  );
}