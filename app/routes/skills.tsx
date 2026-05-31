import { motion } from "framer-motion";
import { getSkills } from "~/data/data";

export function meta() {
  return [
    { title: "Skills | Emmanuel Opoku" },
  ];
}

const skillsData = getSkills();

export default function Skills() {
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
              Capability <br />
              <span className="text-gray-300">Matrix.</span>
            </h1>
          </motion.div>

          {/* Primary Skills as Huge Text Blocks */}
          <div className="space-y-32 mb-40">
            {skillsData.primary.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-12 gap-12"
              >
                <div className="lg:col-span-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">
                    Domain 0{idx + 1}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-plus font-bold text-gray-900 leading-tight">
                    {skill.category}
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-2xl text-gray-500 mb-12 font-medium leading-relaxed max-w-2xl">
                    {skill.desc}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {skill.items.map((item, i) => (
                      <span key={i} className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-blue-500 transition-colors cursor-default">
                        {item}{i < skill.items.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="divider-clean mb-40" />

          {/* Supporting Domains */}
          <div className="mb-40">
             <h2 className="text-huge text-gray-300 mb-20">Supporting Domains</h2>
             <div className="grid md:grid-cols-2 gap-20">
                {skillsData.supporting.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{skill.category}</h3>
                    <div className="flex flex-wrap gap-3">
                      {skill.items.map((item, i) => (
                        <span key={i} className="px-5 py-3 border border-gray-200 rounded-full text-sm font-bold text-gray-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Actively Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-32"
          >
             <h2 className="text-4xl md:text-6xl font-plus font-bold text-gray-900 tracking-tight mb-12">
               Actively exploring the edges of <br />
               <span className="text-gray-300">distributed systems.</span>
             </h2>
             <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
               {skillsData.learning.map((item, i) => (
                 <span key={i} className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400">
                   {item}{i < skillsData.learning.length - 1 ? ',' : ''}
                 </span>
               ))}
             </div>
          </motion.div>

        </div>
      </div>
  );
}