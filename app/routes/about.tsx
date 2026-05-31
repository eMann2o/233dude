import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getPersonal, getAbout } from "~/data/data";

export function meta() {
  return [
    { title: "About | Emmanuel Opoku" },
    { name: "description", content: "About Emmanuel Opoku" },
  ];
}

const personal = getPersonal();
const about = getAbout();

export default function About() {
  return (
      <div className="min-h-screen bg-white pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-40"
          >
            <h1 className="text-massive text-gray-900 tracking-tight">
              Persona & <br />
              <span className="text-gray-300">Perspective.</span>
            </h1>
          </motion.div>

          {/* Core Mission */}
          <section className="grid lg:grid-cols-2 gap-24 mb-40">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={personal.profileImage} 
                alt={personal.name} 
                className="w-full aspect-[4/5] object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-full aspect-[4/5] bg-gray-100 flex items-center justify-center text-gray-400 font-bold tracking-widest uppercase">Image Pending</div>';
                }}
              />
            </motion.div>
            
            <div className="flex flex-col justify-center space-y-12">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                 <p className="text-3xl md:text-4xl font-plus font-bold text-gray-900 tracking-tight leading-tight">
                   Undergraduate IT student at {about.mission.university}, obsessed with the bridge between raw data and system intelligence.
                 </p>
               </motion.div>
               <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 className="text-xl text-gray-500 font-medium leading-relaxed"
               >
                 {about.mission.description}
               </motion.p>
            </div>
          </section>

          <div className="divider-clean mb-40" />

          {/* Exposure List */}
          <section className="mb-40">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-huge text-gray-900 mb-20"
             >
               Real-World <span className="text-gray-300">Exposure</span>
             </motion.h2>

             <div className="space-y-0">
               {about.exposure.map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="grid md:grid-cols-12 gap-8 py-16 border-t border-black/[0.06] group"
                 >
                    <div className="md:col-span-2 text-5xl font-plus font-bold text-gray-300 group-hover:text-gray-900 transition-colors">
                       0{i + 1}
                    </div>
                    <div className="md:col-span-4">
                       <h3 className="text-3xl font-bold text-gray-900">{item.title}</h3>
                       <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mt-2">{item.org}</p>
                    </div>
                    <div className="md:col-span-6">
                       <p className="text-xl text-gray-500 leading-relaxed font-medium">
                          {item.desc}
                       </p>
                    </div>
                 </motion.div>
               ))}
             </div>
          </section>

          {/* Quote Block */}
          <motion.section 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-center max-w-4xl mx-auto py-20"
          >
             <h2 className="text-4xl md:text-6xl font-plus font-bold text-gray-900 tracking-tight leading-tight mb-12">
               "{about.quote}"
             </h2>
             <Link to="/process" className="btn-outline">
               Explore Engineering Process <ArrowRight size={18} />
             </Link>
          </motion.section>

        </div>
      </div>
  );
}