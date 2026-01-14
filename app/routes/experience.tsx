import { Link } from "react-router";
import { motion } from "framer-motion";
import { Briefcase, Network, Monitor, Code2, Calendar, MapPin, Building2 } from "lucide-react";
import { ReactLenis } from "lenis/react";

// --- DATA: EXPERIENCE TIMELINE ---
// Ordered reverse-chronologically (assumed based on context)
const EXPERIENCE = [
  {
    company: "AmaliTech",
    role: "Software Engineering Intern",
    location: "Takoradi, Ghana",
    type: "Engineering",
    icon: Code2,
    takeaway: "Production Standards & React Workflows",
    points: [
      "Worked with React in a structured engineering environment.",
      "Collaborated on production-style workflows and version control patterns.",
      "Gained exposure to professional code standards, code reviews, and agile teamwork."
    ]
  },
  {
    company: "Adamus Resources Limited",
    role: "IT / Technical Intern",
    location: "Nzema, Ghana",
    type: "Corporate IT",
    icon: Building2,
    takeaway: "Enterprise Constraints & User Support",
    points: [
      "Supported internal IT systems and staff in a high-compliance mining environment.",
      "Assisted with system setup, troubleshooting, and hardware lifecycle management.",
      "Worked within real corporate constraints, prioritizing uptime and security."
    ]
  },
  {
    company: "Sekondi Takoradi Chamber of Commerce and Industry",
    role: "IT / Systems Support Intern",
    location: "Takoradi, Ghana",
    type: "Systems Support",
    icon: Monitor,
    takeaway: "Data Workflows & Office Systems",
    points: [
      "Maintained office IT systems and ensured reliability for daily operations.",
      "Supported data management and document workflow digitization.",
      "Assisted non-technical staff with system usage and troubleshooting."
    ]
  },
  {
    company: "Ghana Ports and Harbours Authority",
    role: "IT Support & Networking Intern",
    date: "Sept 11 – Nov 24, 2023",
    location: "Takoradi, Ghana",
    type: "Infrastructure",
    icon: Network,
    takeaway: "Physical Infrastructure & Reliability",
    points: [
      "Provided network infrastructure support, cabling, and switch configuration.",
      "Performed hardware diagnostics and preventive system maintenance.",
      "Improved system reliability and uptime for critical port operations."
    ]
  }
];

export default function Experience() {
  return (
    <ReactLenis root>
      <div className="bg-parchment min-h-screen font-sans selection:bg-almond-silk selection:text-camel-dark overflow-hidden pt-24 pb-20">
        
        {/* --- NAVIGATION --- */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 mix-blend-multiply">
          <div className="bg-parchment/80 backdrop-blur-md border border-camel/20 rounded-full px-6 py-3 flex items-center gap-6 shadow-sm shadow-camel/5">
            <Link to="/" className="font-serif font-bold text-camel text-lg hover:text-camel-dark transition-colors">EO.</Link>
            <div className="w-px h-4 bg-camel/30" />
            <div className="flex gap-6 text-sm font-medium text-camel-dark">
              <Link to="/about" className="hover:text-camel transition-colors">About</Link>
              <span className="text-camel">History</span>
            </div>
          </div>
        </nav>

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
            <p className="text-camel-dark/60 max-w-xl text-lg leading-relaxed">
              My background in infrastructure and support provides a grounded perspective on how software actually lives in the real world.
            </p>
          </motion.div>

          {/* --- TIMELINE --- */}
          <div className="relative border-l-2 border-camel/10 ml-4 md:ml-10 space-y-16 pb-12">
            
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

          {/* --- FOOTER CTA --- */}
          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-camel text-parchment hover:scale-110 transition-transform shadow-lg shadow-camel/20">
              <Network size={24} />
            </Link>
            <p className="mt-4 text-camel-dark/50 text-sm font-medium">Ready to collaborate?</p>
          </div>

        </div>
      </div>
    </ReactLenis>
  );
}