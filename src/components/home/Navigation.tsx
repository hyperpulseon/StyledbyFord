import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../ThemeContext';
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "The Process", href: "#process" },
    { name: "The Style Menu", href: "#style-menu" },
    { name: "The Investment", href: "#investment" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${isScrolled
        ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-neutral-200 dark:border-neutral-900 py-4 shadow-sm dark:shadow-none'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl md:text-3xl font-bold tracking-tighter uppercase z-50 relative text-black dark:text-white transition-colors"
        >
          Styledby<span className="font-light">FORD</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-12 mr-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full opacity-50"></span>
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center space-y-8 text-black dark:text-white"
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-xl font-light tracking-[0.2em] uppercase hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}