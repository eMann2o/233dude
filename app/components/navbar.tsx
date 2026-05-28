import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { getPersonal, getNavigation } from '~/data/data';

const TRANSITION = { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const };

const personal = getPersonal();
const navigation = getNavigation();
const NAV_ITEMS = navigation.items;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={TRANSITION}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-500 ${
          scrolled 
            ? 'py-4 bg-page-bg/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/20' 
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 z-50 group">
          <span className="font-plus text-2xl font-bold tracking-tight leading-none text-white group-hover:text-blue-bell transition-colors duration-300">
            {personal.initials}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center z-50">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path} className="group relative py-2">
                <span className={`font-plus text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isActive ? 'text-blue-bell' : 'text-white/40 group-hover:text-white/80'
                }`}>
                  {item.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                    style={{ background: 'linear-gradient(90deg, #39A0ED, #9A7AA0)' }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 transition-colors duration-300 text-white`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ background: 'linear-gradient(180deg, #0A0A0B 0%, #141416 100%)' }}
          >
            {/* Ambient glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-bell/10 rounded-full blur-[120px]" />
            
            <div className="relative z-10 flex flex-col gap-6 text-center">
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
                    className="font-plus text-4xl text-white/80 hover:text-blue-bell transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="absolute bottom-12 text-[10px] uppercase tracking-[0.2em] text-white/20 font-sans"
            >
              {personal.name} — {personal.graduationYear}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}