import { Link } from "react-router";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { getPersonal, getNavigation } from "~/data/data";

const personal = getPersonal();
const navigation = getNavigation();
const LINKS = navigation.footerLinks;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-iron-grey text-white relative overflow-hidden pt-24 pb-12">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Top Section: Brand & Callout --- */}
        <div className="grid md:grid-cols-12 gap-12 border-b border-parchment/10 pb-16 mb-16">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block group">
              <h2 className="font-plus text-2xl font-bold tracking-tight text-white group-hover:text-blue-bell transition-colors">
                {personal.name}
              </h2>
              <p className="text-sm font-plus font-bold text-blue-bell uppercase tracking-widest mt-1">
                {personal.title}
              </p>
            </Link>
            <p className="text-white/60 text-lg max-w-sm leading-relaxed">
              {navigation.footerTagline}
            </p>
          </div>

          {/* Soft CTA Callout */}
          <div className="md:col-span-7 flex md:justify-end items-center">
            <Link to="/contact" className="group text-3xl md:text-4xl font-plus font-bold text-white/80 hover:text-blue-bell transition-colors flex items-center gap-4">
              {navigation.footerCta}
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300" size={32} />
            </Link>
          </div>
        </div>

        {/* --- Middle Section: Links & Contact --- */}
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          
          {/* Quick Links (2 Column Grid) */}
          <div className="md:col-span-8">
            <h4 className="font-plus font-bold text-xs uppercase tracking-widest text-blue-bell mb-8">Navigation</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-12">
              {LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-white/70 hover:text-blue-bell hover:translate-x-1 transition-all text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 md:text-right">
            <h4 className="font-plus font-bold text-xs uppercase tracking-widest text-blue-bell mb-8">Connect</h4>
            <div className="space-y-4 flex flex-col md:items-end">
              <a 
                href={`mailto:${personal.email}`} 
                className="text-lg font-plus font-medium hover:text-blue-bell transition-colors flex items-center gap-2"
              >
                <Mail size={18} className="md:hidden" />
                {personal.email}
              </a>
              
              <div className="flex gap-4 mt-2">
                <a 
                  href={personal.socialLinks.linkedin.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-parchment/60 hover:text-white transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a 
                  href={personal.socialLinks.github.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-parchment/60 hover:text-white transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="pt-8 border-t border-parchment/5 flex flex-col md:flex-row justify-between items-center text-xs text-parchment/30 font-mono">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">{personal.location}</p>
        </div>

      </div>

      {/* Decorative Watermark */}
      <div className="absolute -bottom-16 -left-10 text-[12rem] font-plus font-bold text-white/[0.02] pointer-events-none select-none">
        {personal.initials}
      </div>
    </footer>
  );
}