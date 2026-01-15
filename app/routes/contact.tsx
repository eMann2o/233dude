import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";
import { ReactLenis } from "lenis/react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "papa16annan@gmail.com"; // Replace with your actual email

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const CONTACT_LINKS = [
    {
      label: "GitHub",
      value: "github.com/emmanuelopoku",
      href: "https://github.com",
      icon: Github,
      action: "View Code"
    },
    {
      label: "LinkedIn",
      value: "in/emmanuel-opoku",
      href: "https://linkedin.com",
      icon: Linkedin,
      action: "Connect"
    },
    {
      label: "Curriculum Vitae",
      value: "Structured Overview (PDF)",
      href: "/resume.pdf", 
      icon: FileText,
      action: "Download"
    }
  ];

  return (
    <ReactLenis root>
      <div className="bg-parchment min-h-screen font-sans selection:bg-almond-silk selection:text-camel-dark overflow-hidden pt-24 pb-12 flex flex-col justify-between">

        <div className="container mx-auto px-6 max-w-2xl relative z-10">
          
          {/* --- HEADER --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-camel font-bold tracking-widest uppercase text-xs mb-4 block">Connection</span>
            <h1 className="font-serif text-4xl md:text-5xl text-camel-dark leading-tight mb-6">
              Backend systems & <br />
              <span className="text-camel italic">data opportunities.</span>
            </h1>
            <p className="text-camel-dark/70 text-lg leading-relaxed max-w-xl mx-auto">
              I am open to conversations around backend engineering roles, internships, and collaborative technical work where <strong className="text-camel-dark font-medium">system design, data integrity, and maintainability</strong> matter.
            </p>
          </motion.div>

          {/* --- PRIMARY ACTION: EMAIL --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="bg-white rounded-2xl border border-camel/10 shadow-xl shadow-camel/5 p-2 flex flex-col sm:flex-row items-center gap-2">
              <div className="flex-1 w-full sm:w-auto px-6 py-4 flex items-center gap-4">
                <div className="p-3 bg-azure-mist rounded-full text-camel">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-camel uppercase tracking-wider mb-1">Direct Email</div>
                  <div className="text-camel-dark font-medium text-lg md:text-xl truncate">{email}</div>
                </div>
              </div>
              
              <div className="flex w-full sm:w-auto gap-2">
                <button 
                  onClick={handleCopy}
                  className="flex-1 sm:flex-none p-4 rounded-xl hover:bg-parchment text-camel-dark/60 hover:text-camel transition-colors relative"
                  title="Copy to clipboard"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Check size={20} />
                      </motion.div>
                    ) : (
                      <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Copy size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                
                <a 
                  href={`mailto:${email}`}
                  className="flex-1 sm:flex-none px-8 py-4 bg-camel text-parchment rounded-xl font-bold hover:bg-camel-dark transition-colors flex items-center justify-center gap-2"
                >
                  Write Me <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* --- SECONDARY LINKS GRID --- */}
          <div className="grid gap-4 mb-16">
            {CONTACT_LINKS.map((link, idx) => (
              <motion.a 
                key={idx}
                href={link.href}
                target={link.label.includes("Curriculum") ? "_self" : "_blank"}
                download={link.label.includes("Curriculum")}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="group flex items-center justify-between p-6 bg-white/50 border border-camel/10 rounded-xl hover:bg-white hover:border-camel/30 hover:shadow-md hover:shadow-camel/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <link.icon className="text-camel-dark/40 group-hover:text-camel transition-colors" size={24} />
                  <div>
                    <h3 className="font-bold text-camel-dark group-hover:text-camel transition-colors">{link.label}</h3>
                    <p className="text-sm text-camel-dark/50">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="text-camel-dark/20 group-hover:text-camel group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
              </motion.a>
            ))}
          </div>

          {/* --- COMMUNICATION STANDARDS --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="border-t border-camel/10 pt-12 text-center"
          >
             <div className="inline-flex items-center justify-center p-3 bg-almond-cream/30 text-camel rounded-full mb-6">
                <MessageSquare size={20} />
             </div>
             <h3 className="text-camel-dark font-serif text-2xl mb-4">Communication Standards</h3>
             <p className="text-camel-dark/70 text-sm leading-relaxed max-w-lg mx-auto mb-6">
                I value clear, direct communication. If you are reaching out about a role or project, including a brief description of the problem or system you are working on is appreciated.
             </p>
             <p className="text-camel-dark/50 text-xs italic">
                This portfolio is intended to provide enough context for a meaningful technical conversation.
             </p>
          </motion.div>

        </div>

      </div>
    </ReactLenis>
  );
}