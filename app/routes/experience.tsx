import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getExperience } from "~/data/data";

export function meta() {
  return [
    { title: "Experience | Emmanuel Opoku" },
  ];
}

const experienceData = getExperience();
const EXPERIENCE = experienceData.jobs;
const LESSONS = experienceData.lessons;

export default function Experience() {
  return (
      <div className="min-h-screen bg-white pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-40"
          >
            <h1 className="text-massive text-gray-900 tracking-tight">
              Engineered <br />
              <span className="text-gray-300">Impact.</span>
            </h1>
          </motion.div>

          <div className="divider-clean" />

          {/* Timeline */}
          <div className="py-20 space-y-0 mb-20">
            {EXPERIENCE.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-12 gap-12 py-20 border-b border-black/[0.06] last:border-0"
              >
                <div className="lg:col-span-4 flex flex-col justify-between">
                   <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">{job.type}</span>
                      <h2 className="text-4xl md:text-5xl font-plus font-bold text-gray-900 leading-tight mb-2">{job.role}</h2>
                      <p className="text-xl text-gray-500 font-medium">{job.company}</p>
                   </div>
                   <div className="hidden lg:block mt-12">
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{job.location}</p>
                   </div>
                </div>

                <div className="lg:col-span-8 space-y-12">
                   <p className="text-2xl text-gray-900 font-medium leading-relaxed">
                     <span className="text-gray-400">Key Takeaway:</span> {job.takeaway}
                   </p>
                   
                   <ul className="space-y-6">
                     {job.points.map((point, i) => (
                       <li key={i} className="text-xl text-gray-500 leading-relaxed font-medium">
                         — {point}
                       </li>
                     ))}
                   </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lessons */}
          <section className="py-40 bg-gray-50 -mx-6 px-6 lg:px-20 text-center">
             <h2 className="text-huge text-gray-900 mb-24">Universal Lessons</h2>
             <div className="grid md:grid-cols-3 gap-12 text-left max-w-6xl mx-auto">
               {LESSONS.map((lesson, i) => (
                 <div key={i} className="border-t-2 border-gray-200 pt-8">
                    <span className="text-gray-300 font-plus font-bold text-4xl block mb-6">0{i+1}</span>
                    <p className="text-xl text-gray-900 font-bold leading-relaxed">{lesson}</p>
                 </div>
               ))}
             </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-40"
          >
             <h2 className="text-jumbo text-gray-900 mb-12">Focusing on high-stakes challenges.</h2>
             <Link to="/contact" className="btn-primary text-lg">
                Discuss Opportunities <ArrowRight size={20} />
             </Link>
          </motion.div>

        </div>
      </div>
  );
}