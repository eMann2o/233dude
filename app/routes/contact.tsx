import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check, Send, Globe, ShieldCheck } from "lucide-react";
import { getPersonal, getContact, getContactLinks, resolveIcon } from "~/data/data";
import { getTextColor } from "~/src/lib/utils";

export function meta() {
  return [
    { title: "Contact | Emmanuel Opoku" },
    { name: "description", content: "Contact Emmanuel Opoku" },
  ];
}

const personal = getPersonal();
const contact = getContact();
const CONTACT_LINKS = getContactLinks();

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = personal.email;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
      <div className="min-h-screen overflow-hidden pt-32 pb-20 flex flex-col justify-between relative noise-overlay">

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 space-y-6"
          >
            <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">{contact.headerLabel}</span>
            <h1 className="font-plus text-5xl md:text-7xl text-white leading-[0.9] tracking-tight font-extrabold max-w-3xl mx-auto">
              {contact.headline} <br />
              <span className="gradient-text italic">{contact.headlineAccent}</span>
            </h1>
            <p className="text-white/40 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              I am focused on roles in <strong className="text-white/70">Backend Engineering, Data Infrastructure, and Distributed Systems</strong>. Let's discuss how I can contribute to your technical mission.
            </p>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="bento-card !p-4 flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 w-full md:w-auto px-8 py-6 flex items-center gap-6">
                <div className="p-4 bg-blue-bell/10 rounded-2xl text-blue-bell">
                  <Mail size={28} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-white/25 uppercase tracking-[0.2em] mb-1">Primary Email</div>
                  <div className="text-white font-plus font-bold text-xl md:text-2xl truncate">{email}</div>
                </div>
              </div>
              
              <div className="flex w-full md:w-auto gap-4 p-2">
                <button 
                  onClick={handleCopy}
                  className="flex-1 md:flex-none p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-white/30 hover:text-blue-bell hover:border-blue-bell/30 transition-all relative"
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
                  className="flex-[2] md:flex-none px-10 py-5 glow-btn rounded-2xl font-bold flex items-center justify-center gap-3 group"
                >
                  Send Email <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Links Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {CONTACT_LINKS.map((link, idx) => {
              const LinkIcon = resolveIcon(link.icon);
              const colors = ["blue-bell", "dusty-mauve", "lavender"];
              const color = colors[idx % colors.length];
              return (
                <motion.a 
                  key={idx}
                  href={link.href}
                  target={link.label.includes("CV") ? "_self" : "_blank"}
                  download={link.label.includes("CV")}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="bento-card group flex flex-col justify-between"
                >
                  <div className={`p-4 w-fit rounded-2xl bg-white/[0.05] ${getTextColor(color)} mb-12`}>
                     <LinkIcon size={24} />
                  </div>
                  <div className="space-y-2">
                     <h3 className="text-xl font-plus font-bold text-white group-hover:text-blue-bell transition-colors">{link.label}</h3>
                     <div className="flex items-center justify-between text-white/30">
                        <span className="text-xs font-medium truncate max-w-[150px]">{link.value}</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Standards */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-white/[0.06] pt-20 grid md:grid-cols-2 gap-12 items-center"
          >
             <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.03] rounded-full border border-white/[0.06] text-white/40 text-[10px] font-bold uppercase tracking-widest">
                   <ShieldCheck size={14} className="text-blue-bell" />
                   <span>Security & Reliability First</span>
                </div>
                <h3 className="text-3xl font-plus font-extrabold text-white leading-tight">{contact.responseStandards.title.split('.')[0]}.<br />{contact.responseStandards.title.split('.').slice(1).join('.').trim()}</h3>
             </div>
             <div className="space-y-6">
                <p className="text-white/40 text-lg leading-relaxed font-medium">
                  {contact.responseStandards.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-bold text-white/15 uppercase tracking-[0.2em]">
                   <Globe size={14} /> {contact.responseStandards.availability}
                </div>
             </div>
          </motion.div>

        </div>

      </div>
  );
}