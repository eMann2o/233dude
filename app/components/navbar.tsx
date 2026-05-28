import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { getPersonal, getNavigation } from '~/data/data';

// --- CONFIGURATION ---
const TRANSITION = { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const };

const personal = getPersonal();
const navigation = getNavigation();
const NAV_ITEMS = navigation.items;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for backdrop changes
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={TRANSITION}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm shadow-iron-grey/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        {/* --- 1. BRAND & LOGO --- */}
        <Link to="/" className="flex items-center gap-2 z-50 group">
          <div className="flex flex-col">
            <span className={`font-plus text-2xl font-bold tracking-tight leading-none transition-colors duration-300 ${isOpen ? 'text-white' : 'text-iron-grey'}`}>
              {personal.initials}
            </span>
          </div>
        </Link>

        {/* --- 2. DESKTOP NAVIGATION (The "Reveal" Effect) --- */}
        <div className="hidden md:flex gap-8 items-center z-50">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path} className="group relative overflow-hidden">
                <div className="relative overflow-hidden p-1">
                  {/* 1. Normal Text (Slides Up) */}
                  <span className={`block font-plus text-[11px] font-bold uppercase tracking-[0.15em] transition-transform duration-500 group-hover:-translate-y-full ${isActive ? 'text-blue-bell' : 'text-iron-grey/60'}`}>
                    {item.name}
                  </span>
                  
                  {/* 2. Hover Text (Slides In from bottom, colored Blue Bell) */}
                  <span className="absolute top-1 left-1 block font-plus text-[11px] font-bold uppercase tracking-[0.15em] translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-blue-bell">
                    {item.name}
                  </span>
                </div>
                {/* Active underline indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-blue-bell rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* --- 3. MOBILE MENU TOGGLE --- */}
        <button 
          className={`md:hidden z-50 transition-colors duration-300 ${isOpen ? 'text-parchment' : 'text-camel-dark'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* --- 4. FULL SCREEN MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-iron-grey text-pearl-beige flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-6 text-center">
              <Link to="/" className="font-plus text-3xl mb-4 text-blue-bell italic">Home</Link>
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    className="font-plus text-4xl hover:text-lavender transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile Footer Decor */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="absolute bottom-12 text-[10px] uppercase tracking-[0.2em] opacity-40 font-sans"
            >
              {personal.name} — {personal.graduationYear}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}