import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { getPersonal, getContact, getContactLinks } from "~/data/data";

export function meta() {
  return [
    { title: "Contact | Emmanuel Opoku" },
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
      <div className="min-h-screen bg-white pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-40"
          >
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-plus font-black text-gray-900 leading-[1] tracking-tighter mb-12">
              {contact.headline} <br />
              <span className="text-gray-300">{contact.headlineAccent}</span>
            </h1>
            <p className="text-2xl text-gray-500 font-medium max-w-3xl leading-relaxed">
              I am focused on roles in <strong className="text-gray-900">Backend Engineering, Data Infrastructure, and Distributed Systems</strong>. Let's discuss how I can contribute to your technical mission.
            </p>
          </motion.div>

          <div className="divider-clean mb-32" />

          {/* Massive Email Button */}
          <div className="mb-40">
             <div className="flex flex-col md:flex-row items-center gap-8">
                <a 
                  href={`mailto:${email}`}
                  className="w-full group"
                >
                  <h2 className="text-[clamp(1.5rem,5vw,4.5rem)] font-plus font-black text-gray-900 tracking-tighter group-hover:text-blue-500 transition-colors duration-500 break-all">
                    {email}
                  </h2>
                </a>
                
                <button 
                  onClick={handleCopy}
                  className="shrink-0 p-6 rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all"
                  title="Copy to clipboard"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Check size={32} />
                      </motion.div>
                    ) : (
                      <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Copy size={32} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
             </div>
          </div>

          {/* Links Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-40">
            {CONTACT_LINKS.map((link, idx) => (
              <a 
                key={idx}
                href={link.href}
                target={link.label.includes("CV") ? "_self" : "_blank"}
                download={link.label.includes("CV")}
                rel="noreferrer"
                className="group border-t border-black/[0.06] pt-8 flex justify-between items-start"
              >
                <div>
                   <h3 className="text-3xl font-plus font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">{link.label}</h3>
                   <span className="text-sm font-medium text-gray-400 block truncate max-w-[200px]">{link.value}</span>
                </div>
                <ArrowUpRight className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={32} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Standards */}
          <section className="bg-gray-50 -mx-6 px-6 lg:px-20 py-32 text-center">
             <h2 className="text-jumbo text-gray-900 mb-12 max-w-4xl mx-auto">
                {contact.responseStandards.title}
             </h2>
             <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                {contact.responseStandards.description}
             </p>
             <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Availability: {contact.responseStandards.availability}
             </span>
          </section>

        </div>
      </div>
  );
}