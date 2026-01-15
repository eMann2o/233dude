import { Link } from "react-router";
import { motion } from "framer-motion";
import { AlertTriangle, Home, ArrowRight, Terminal } from "lucide-react";
import { ReactLenis } from "lenis/react";

export default function NotFound() {
  return (
    <ReactLenis root>
      <div className="bg-parchment min-h-screen font-sans selection:bg-almond-silk selection:text-camel-dark flex items-center justify-center p-6">
        
        <div className="max-w-2xl w-full text-center">
          
          {/* --- Icon Visual --- */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-6 bg-almond-cream/50 rounded-full mb-8 border border-camel/10"
          >
            <AlertTriangle size={48} className="text-camel" strokeWidth={1.5} />
          </motion.div>

          {/* --- Headlines --- */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl text-camel-dark mb-6">
              404 – Page Not Found
            </h1>
            <p className="text-camel-dark/70 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
              Well… this route didn’t exist. Unlike my backend systems, which are <strong className="text-camel-dark">secure, validated, and audit-ready</strong>, this page got lost somewhere.
            </p>
          </motion.div>

          {/* --- "Pro Tip" Terminal Block --- */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-left bg-camel-dark text-parchment p-6 rounded-xl font-mono text-sm mb-10 max-w-lg mx-auto shadow-xl shadow-camel/10 relative overflow-hidden"
          >
            {/* Decor dots */}
            <div className="flex gap-2 mb-4 opacity-50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            
            <div className="flex gap-3">
              <Terminal size={16} className="mt-1 shrink-0 text-almond-silk" />
              <p className="opacity-90 leading-relaxed">
                <span className="text-almond-silk font-bold">Pro tip:</span> In my systems, every request is logged, validated, and traceable. This one… not so much.
              </p>
            </div>
          </motion.div>

          {/* --- Actions --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/" 
              className="flex items-center gap-2 bg-camel text-parchment px-8 py-3 rounded-lg hover:bg-camel-dark transition-colors font-bold"
            >
              <Home size={18} /> Return Home
            </Link>
            <Link 
              to="/projects" 
              className="flex items-center gap-2 border border-camel/30 text-camel-dark px-8 py-3 rounded-lg hover:bg-white transition-colors font-medium"
            >
              Explore Projects <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* --- Email Link --- */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-sm text-camel-dark/40"
          >
            Or drop me a line at <a href="mailto:papa16annan@gmail.com" className="text-camel hover:underline">papa16annan@gmail.com</a>
          </motion.p>

        </div>
      </div>
    </ReactLenis>
  );
}