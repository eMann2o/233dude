import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check, Send, Globe, ShieldCheck } from "lucide-react";
import { ReactLenis } from "lenis/react";
import { getPersonal, getContact, getContactLinks, resolveIcon } from "~/data/data";

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
    <ReactLenis root>
      <div className="bg-white min-h-screen font-sans selection:bg-blue-bell/20 selection:text-iron-grey overflow-hidden pt-32 pb-20 flex flex-col justify-between">

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          
          {/* --- HEADER --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 space-y-6"
          >
            <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">{contact.headerLabel}</span>
            <h1 className="font-plus text-5xl md:text-7xl text-iron-grey leading-[0.9] tracking-tight font-extrabold max-w-3xl mx-auto">
              {contact.headline} <br />
              <span className="gradient-text italic">{contact.headlineAccent}</span>
            </h1>
            <p className="text-iron-grey/60 text-xl leading-relaxed max-w-2xl mx-auto font-medium" dangerouslySetInnerHTML={{ __html: contact.description }} />
          </motion.div>

          {/* --- PRIMARY ACTION: EMAIL --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-card-bg border border-iron-grey/5 rounded-[2.5rem] p-4 flex flex-col md:flex-row items-center gap-4 hover:border-blue-bell/10 transition-all shadow-xl shadow-iron-grey/5">
              <div className="flex-1 w-full md:w-auto px-8 py-6 flex items-center gap-6">
                <div className="p-4 bg-white rounded-2xl text-blue-bell shadow-sm">
                  <Mail size={28} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-iron-grey/30 uppercase tracking-[0.2em] mb-1">Inbound Channel</div>
                  <div className="text-iron-grey font-plus font-bold text-xl md:text-2xl truncate">{email}</div>
                </div>
              </div>
              
              <div className="flex w-full md:w-auto gap-4 p-2">
                <button 
                  onClick={handleCopy}
                  className="flex-1 md:flex-none p-5 rounded-2xl bg-white border border-iron-grey/5 text-iron-grey/40 hover:text-blue-bell hover:border-blue-bell/20 transition-all relative group"
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
                  className="flex-[2] md:flex-none px-10 py-5 bg-iron-grey text-white rounded-2xl font-bold hover:bg-blue-bell transition-all flex items-center justify-center gap-3 shadow-lg shadow-iron-grey/20 group"
                >
                  Channel Outbound <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* --- SECONDARY LINKS GRID --- */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {CONTACT_LINKS.map((link, idx) => {
              const LinkIcon = resolveIcon(link.icon);
              // Determine color based on position (matching original order: blue-bell, dusty-mauve, lavender)
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
                  className="bento-card group flex flex-col justify-between hover:border-blue-bell/10"
                >
                  <div className={`p-4 w-fit rounded-2xl bg-white shadow-sm text-${color} mb-12`}>
                     <LinkIcon size={24} />
                  </div>
                  <div className="space-y-2">
                     <h3 className="text-xl font-plus font-bold text-iron-grey group-hover:text-blue-bell transition-colors">{link.label}</h3>
                     <div className="flex items-center justify-between text-iron-grey/40">
                        <span className="text-xs font-medium truncate max-w-[150px]">{link.value}</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* --- STANDARDS --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-iron-grey/5 pt-20 grid md:grid-cols-2 gap-12 items-center"
          >
             <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-card-bg rounded-full border border-iron-grey/5 text-iron-grey/60 text-[10px] font-bold uppercase tracking-widest">
                   <ShieldCheck size={14} className="text-blue-bell" />
                   <span>Security & Reliability First</span>
                </div>
                <h3 className="text-3xl font-plus font-extrabold text-iron-grey leading-tight">{contact.responseStandards.title.split('.')[0]}.<br />{contact.responseStandards.title.split('.').slice(1).join('.').trim()}</h3>
             </div>
             <div className="space-y-6">
                <p className="text-iron-grey/60 text-lg leading-relaxed font-medium">
                  {contact.responseStandards.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-bold text-iron-grey/20 uppercase tracking-[0.2em]">
                   <Globe size={14} /> {contact.responseStandards.availability}
                </div>
             </div>
          </motion.div>

        </div>

      </div>
    </ReactLenis>
  );
}