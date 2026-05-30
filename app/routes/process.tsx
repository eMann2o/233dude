import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getProcess } from "~/data/data";

export function meta() {
  return [
    { title: "Process | Emmanuel Opoku" },
  ];
}

const PRINCIPLES = getProcess();

export default function Process() {
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
              Philosophy & <br />
              <span className="text-gray-300">Process.</span>
            </h1>
          </motion.div>

          <div className="divider-clean mb-40" />

          {/* Principles */}
          <div className="space-y-40 mb-40">
            {PRINCIPLES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-12 gap-12"
              >
                 <div className="lg:col-span-5">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">Principle 0{idx + 1}</span>
                    <h2 className="text-4xl md:text-6xl font-plus font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h2>
                 </div>
                 <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
                    <p className="text-3xl font-plus font-bold text-gray-300 leading-tight">
                      "{item.statement}"
                    </p>
                    <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                 </div>
              </motion.div>
            ))}
          </div>

          {/* Architecture block */}
          <section className="py-40 border-t border-black/[0.06]">
            <div className="grid lg:grid-cols-2 gap-20">
               <div>
                  <h2 className="text-jumbo text-gray-900 mb-8">Architecture is the first deliverable.</h2>
                  <p className="text-2xl text-gray-500 font-medium leading-relaxed">
                    I don't just write and run scripts; I design systems that handle data flows efficiently and survive the complexities of production environments.
                  </p>
               </div>
               <div className="flex flex-col justify-center gap-12">
                  <p className="text-3xl font-bold text-gray-400">Systems designed for scale.</p>
                  <p className="text-3xl font-bold text-gray-400">Traceable data lineage.</p>
                  <p className="text-3xl font-bold text-gray-400">Layered separation of logic.</p>
               </div>
            </div>
            
            <div className="mt-24">
               <Link to="/contact" className="btn-primary text-lg px-12 py-6">
                 Start a Conversation <ArrowRight size={20} />
               </Link>
            </div>
          </section>

        </div>
      </div>
  );
}
