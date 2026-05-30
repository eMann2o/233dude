import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database } from "lucide-react";
import { getDetailedProjects, resolveIcon } from "~/data/data";

export function meta() {
  return [
    { title: "Projects | Emmanuel Opoku" },
    { name: "description", content: "Engineering portfolio of Emmanuel Opoku" },
  ];
}

const PROJECTS = getDetailedProjects();

export default function Projects() {
  return (
      <div className="min-h-screen overflow-hidden pt-32 pb-20 relative">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 space-y-6"
          >
            <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Engineering Portfolio</span>
            <h1 className="font-plus text-5xl md:text-7xl text-gray-900 leading-[0.9] tracking-tight font-extrabold max-w-4xl">
              Systems designed for <br />
              <span className="gradient-text italic">performance & trust.</span>
            </h1>
            <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
              Documenting architectural decisions, data foundations, and the engineering principles behind every system built for scale.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-12">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bento-card group h-full !p-0 overflow-hidden flex flex-col md:flex-row
                  ${project.highlight ? "border-blue-bell/20 shadow-lg shadow-blue-bell/5" : ""}`}
              >
                {/* Left: Content */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                          <span key={tech} className="px-3 py-1 rounded-lg bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wider border border-gray-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.highlight && (
                        <span className="px-3 py-1 bg-blue-bell/10 text-blue-bell text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-bell/20">
                          Flagship
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-plus font-bold text-gray-900 mb-2 group-hover:text-blue-bell transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-blue-bell/50 font-medium text-sm mb-6">{project.subtitle}</p>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6">{project.description}</p>
                    
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <Code2 size={14} className="text-blue-bell" />
                      {project.dataAngle}
                    </div>
                  </div>

                  <Link
                    to={project.links.caseStudy}
                    className="inline-flex items-center gap-3 glow-btn px-8 py-4 rounded-full font-bold w-fit"
                  >
                    Read Engineering Study <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Right: Capabilities */}
                <div className={`md:w-[40%] p-8 md:p-12 border-t md:border-t-0 md:border-l border-black/[0.04]
                    ${project.color === 'blue-bell' ? 'bg-blue-bell/[0.03]' : 
                      project.color === 'dusty-mauve' ? 'bg-dusty-mauve/[0.03]' : 'bg-lavender/[0.03]'}`}>

                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
                    Core Engineering
                  </h3>

                  <div className="space-y-6">
                    {project.capabilities.map((cap, i) => {
                      const CapIcon = resolveIcon(cap.icon);
                      return (
                        <div key={i} className="flex items-start gap-4">
                          <div className="p-3 bg-gray-100 rounded-xl text-blue-bell">
                            <CapIcon size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-700">
                              {cap.text.split(' ')[0]}
                            </p>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              {cap.text.split(' ').slice(1).join(' ')}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-16 opacity-[0.04]">
                    <Database size={100} strokeWidth={1} className="text-gray-900 ml-auto" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-32 text-center py-12">
            <div className="section-divider mb-8" />
            <p className="text-gray-400 text-sm font-medium">
              Architectural explorations and distributed systems research available upon request.
            </p>
          </div>

        </div>
      </div>
  );
}