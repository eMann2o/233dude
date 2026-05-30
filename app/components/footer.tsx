import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { getPersonal, getNavigation } from "~/data/data";

const personal = getPersonal();
const navigation = getNavigation();
const LINKS = navigation.footerLinks;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-40 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Giant Footer CTA */}
        <div className="mb-32">
           <Link to="/contact" className="group block w-fit">
             <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-plus font-black text-gray-900 leading-[1] tracking-tighter group-hover:text-blue-500 transition-colors duration-500">
                LET'S
             </h2>
             <div className="flex items-center gap-4 md:gap-12">
               <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-plus font-black text-gray-900 leading-[1] tracking-tighter group-hover:text-blue-500 transition-colors duration-500">
                  BUILD.
               </h2>
               <ArrowUpRight className="w-12 h-12 md:w-24 md:h-24 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500" strokeWidth={1.5} />
             </div>
           </Link>
        </div>

        <div className="divider-clean mb-12" />

        <div className="grid md:grid-cols-2 gap-12 text-gray-500">
           <div className="space-y-6">
              <h4 className="font-plus font-bold text-gray-900">Emmanuel Opoku</h4>
              <p className="max-w-sm">{navigation.footerTagline}</p>
           </div>
           
           <div className="grid grid-cols-2 gap-8 md:text-right">
              <div className="space-y-4 flex flex-col md:items-end">
                 <h4 className="font-plus font-bold text-gray-900">Connect</h4>
                 <a href={`mailto:${personal.email}`} className="hover:text-gray-900 transition-colors">{personal.email}</a>
                 <a href={personal.socialLinks.linkedin.href} target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                 <a href={personal.socialLinks.github.href} target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
              </div>
              <div className="space-y-4 flex flex-col md:items-end">
                 <h4 className="font-plus font-bold text-gray-900">Explore</h4>
                 {LINKS.map(link => (
                    <Link key={link.name} to={link.path} className="hover:text-gray-900 transition-colors">{link.name}</Link>
                 ))}
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