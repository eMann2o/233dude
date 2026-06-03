import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { getPersonal, getNavigation } from "~/data/data";

const personal = getPersonal();
const navigation = getNavigation();
const LINKS = navigation.footerLinks;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-40 pb-12 bg-page-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Giant Footer CTA */}
        <div className="mb-32">
           <Link to="/contact" className="group block w-fit">
             <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-plus font-black text-white leading-[1] tracking-tighter group-hover:text-blue-500 transition-colors duration-500">
                LET'S
             </h2>
             <div className="flex items-center gap-4 md:gap-12">
               <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-plus font-black text-white leading-[1] tracking-tighter group-hover:text-blue-500 transition-colors duration-500">
                  BUILD.
               </h2>
               <ArrowUpRight className="w-12 h-12 md:w-24 md:h-24 text-gray-700 group-hover:text-blue-500 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500" strokeWidth={1.5} />
             </div>
           </Link>
        </div>

        <div className="divider-clean mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 text-gray-500">
           {/* Logo and Tagline */}
           <div className="lg:col-span-4 space-y-6">
              <Link to="/" className="inline-block">
                <span className="font-plus text-2xl font-bold tracking-tight text-white">
                  {personal.initials}
                </span>
              </Link>
              <p className="max-w-sm text-base leading-relaxed text-gray-500">
                {navigation.footerTagline}
              </p>
           </div>
           
           {/* Link Groups */}
           <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
             {/* Product Column */}
             <div className="space-y-5">
               <h4 className="font-plus text-xs font-bold uppercase tracking-[0.15em] text-white">
                 Product
               </h4>
               <ul className="space-y-3 flex flex-col text-sm">
                 <li>
                   <Link to="/projects" className="hover:text-white transition-colors duration-300">
                     Projects
                   </Link>
                 </li>
                 <li>
                   <Link to="/skills" className="hover:text-white transition-colors duration-300">
                     Tech Stack
                   </Link>
                 </li>
                 <li>
                   <Link to="/projects" className="hover:text-white transition-colors duration-300">
                     Case Studies
                   </Link>
                 </li>
                 <li>
                   <Link to="/process" className="hover:text-white transition-colors duration-300">
                     Architecture
                   </Link>
                 </li>
               </ul>
             </div>

             {/* Company Column */}
             <div className="space-y-5">
               <h4 className="font-plus text-xs font-bold uppercase tracking-[0.15em] text-white">
                 Company
               </h4>
               <ul className="space-y-3 flex flex-col text-sm">
                 <li>
                   <Link to="/about" className="hover:text-white transition-colors duration-300">
                     About Me
                   </Link>
                 </li>
                 <li>
                   <Link to="/experience" className="hover:text-white transition-colors duration-300">
                     Experience
                   </Link>
                 </li>
                 <li>
                   <Link to="/process" className="hover:text-white transition-colors duration-300">
                     Philosophy
                   </Link>
                 </li>
                 <li>
                   <Link to="/contact" className="hover:text-white transition-colors duration-300">
                     Contact
                   </Link>
                 </li>
               </ul>
             </div>

             {/* Resources Column */}
             <div className="space-y-5">
               <h4 className="font-plus text-xs font-bold uppercase tracking-[0.15em] text-white">
                 Links
               </h4>
               <ul className="space-y-3 flex flex-col text-sm">
                 <li>
                   <a href={personal.socialLinks.github.href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
                     GitHub
                   </a>
                 </li>
                 <li>
                   <a href={personal.socialLinks.linkedin.href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
                     LinkedIn
                   </a>
                 </li>
                 <li>
                   <Link to="mailto:papa16annan@gmail.com" className="hover:text-white transition-colors duration-300">
                     Mail
                   </Link>
                 </li>
               </ul>
             </div>
           </div>
        </div>

        <div className="mt-24 text-xs font-bold uppercase tracking-widest text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} {personal.name}</p>
          <p>{personal.location}</p>
        </div>

      </div>
    </footer>
  );
}