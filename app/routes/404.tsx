import { Link } from "react-router";
import { motion } from "framer-motion";
import { AlertTriangle, Home, ArrowRight, Terminal } from "lucide-react";
import { getPersonal } from "~/data/data";

export function meta() {
  return [
    { title: "404 Not Found" }
  ];
}

export default function NotFound() {
  const personal = getPersonal();
  return (
      <div className="min-h-screen flex items-center justify-center p-6 relative">
        
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-bell/5 rounded-full blur-[150px]" />
        
        <div className="max-w-2xl w-full text-center relative z-10">
          
          {/* Icon */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-6 bg-gray-50 rounded-full mb-8 border border-gray-200"
          >
            <AlertTriangle size={48} className="text-dusty-mauve" strokeWidth={1.5} />
          </motion.div>

          {/* Headlines */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-plus font-bold tracking-tight text-5xl md:text-6xl text-gray-900 mb-6">
              404 – Page Not Found
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
              Well… this route didn't exist. Unlike my backend systems, which are <strong className="text-blue-bell">secure, validated, and audit-ready</strong>, this page got lost somewhere.
            </p>
          </motion.div>

          {/* Terminal Block */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-left p-6 rounded-xl font-mono text-sm mb-10 max-w-lg mx-auto border border-gray-200 bg-gray-50"
            style={{ boxShadow: '0 4px 24px -6px rgba(57, 160, 237, 0.06)' }}
          >
            <div className="flex gap-2 mb-4 opacity-70">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            
            <div className="flex gap-3">
              <Terminal size={16} className="mt-1 shrink-0 text-blue-bell" />
              <p className="opacity-70 leading-relaxed text-gray-600">
                <span className="text-blue-bell font-bold">Pro tip:</span> In my systems, every request is logged, validated, and traceable. This one… not so much.
              </p>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/" 
              className="flex items-center gap-2 glow-btn px-8 py-3 rounded-full font-bold"
            >
              <Home size={18} /> Return Home
            </Link>
            <Link 
              to="/projects" 
              className="flex items-center gap-2 border border-gray-200 text-gray-500 px-8 py-3 rounded-full hover:border-gray-400 hover:text-gray-900 transition-all font-medium bg-white"
            >
              Explore Projects <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Email Link */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-sm text-gray-300"
          >
            Or drop me a line at <a href={`mailto:${personal.email}`} className="text-blue-bell hover:underline">{personal.email}</a>
          </motion.p>

        </div>
      </div>
  );
}