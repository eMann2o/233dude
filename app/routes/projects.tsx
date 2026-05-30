import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getDetailedProjects } from "~/data/data";

export function meta() {
  return [
    { title: "Projects | Emmanuel Opoku" },
  ];
}

const PROJECTS = getDetailedProjects();

export default function Projects() {
  return (
      <div className="min-h-screen bg-white pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-32"
          >
            <h1 className="text-massive text-gray-900 tracking-tight">
              Engineering <br />
              <span className="text-gray-300">Portfolio.</span>
            </h1>
          </motion.div>

          <div className="divider-clean" />

          {/* List View */}
          <div className="space-y-0">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group border-b border-black/[0.06] py-16 lg:py-24"
              >
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                  
                  <div className="lg:col-span-8">
                     <div className="flex items-center gap-4 mb-8">
                        {project.highlight && (
                          <span className="px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                            Flagship System
                          </span>
                        )}
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                          {project.role}
                        </span>
                     </div>
                     <Link to={project.links.caseStudy} className="block w-fit">
                       <h2 className="text-5xl md:text-7xl font-plus font-bold text-gray-900 tracking-tighter mb-4 group-hover:text-blue-500 transition-colors duration-500">
                         {project.title}
                       </h2>
                     </Link>
                     <p className="text-2xl text-gray-400 font-medium tracking-tight mb-8">
                        {project.subtitle}
                     </p>
                     <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                        {project.description}
                     </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-12">
                     <div className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                          <span key={tech} className="text-sm font-bold text-gray-900 border border-gray-200 px-4 py-2 rounded-full">
                            {tech}
                          </span>
                        ))}
                     </div>
                     
                     <Link
                       to={project.links.caseStudy}
                       className="inline-flex items-center gap-4 text-xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors"
                     >
                       Read Architecture Study <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                     </Link>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
  );
}