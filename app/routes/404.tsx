import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getPersonal } from "~/data/data";

export function meta() {
  return [
    { title: "404 Not Found" }
  ];
}

export default function NotFound() {
  const personal = getPersonal();
  return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        
        <div className="max-w-4xl w-full text-center">
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[clamp(5rem,12vw,12rem)] font-plus font-black text-gray-200 leading-[1] tracking-tighter mb-12">
              404
            </h1>
            <p className="text-3xl md:text-5xl font-plus font-bold text-gray-900 mb-8 tracking-tight">
              Route unresolved.
            </p>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-20 leading-relaxed font-medium">
              In my systems, every request is logged, validated, and traceable. This one… not so much.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-500 transition-colors">
              Return Home
            </Link>
            <span className="hidden sm:block text-gray-300">/</span>
            <Link to="/projects" className="text-2xl font-bold text-gray-900 hover:text-blue-500 transition-colors">
              Explore Projects
            </Link>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-32 text-sm font-bold uppercase tracking-widest text-gray-400"
          >
            Or drop me a line at <a href={`mailto:${personal.email}`} className="hover:text-gray-900 transition-colors">{personal.email}</a>
          </motion.p>

        </div>
      </div>
  );
}