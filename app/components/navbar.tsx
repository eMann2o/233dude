import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { getPersonal, getNavigation } from '~/data/data';

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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-500 ${
          scrolled 
            ? 'py-4 bg-page-bg/80 backdrop-blur-md border-b border-white/[0.06]' 
            : 'py-8 bg-transparent'
        }`}
      >
        <Link to="/" className="flex items-center gap-2 z-50 group mix-blend-difference">
          <span className="font-plus text-xl font-bold tracking-tight text-white">
            {personal.initials}
          </span>
        </Link>

        <div className="hidden md:flex gap-10 items-center z-50 mix-blend-difference">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path} className="group relative py-2">
                <span className={`font-plus text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`}>
                  {item.name}
                </span>
                {isActive && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <button 
          className={`md:hidden z-50 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-page-bg flex flex-col justify-center items-center"
          >
            <div className="relative z-10 flex flex-col gap-8 text-center w-full px-6">
              <Link to="/" className="text-gray-500 font-plus text-2xl font-bold hover:text-white transition-colors">Home</Link>
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    to={item.path} 
                    className="font-plus text-5xl md:text-6xl font-bold text-white hover:text-blue-500 transition-colors tracking-tight"
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
               className="absolute bottom-12 text-xs font-bold uppercase tracking-widest text-gray-400 font-sans"
            >
              {personal.name}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}