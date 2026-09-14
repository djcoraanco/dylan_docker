import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DylanMazzeiLogo from '@/components/DylanMazzeiLogo';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileConsultingOpen, setMobileConsultingOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = storedTheme === 'dark' || !storedTheme;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newTheme;
    });
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Book', path: '/book' },
    {
      name: 'Consulting',
      path: '/consulting',
      subLinks: [
        { name: 'Consulting Overview', path: '/consulting' },
        { name: 'Marketing & AI Search', path: '/consulting/marketing' },
        { name: 'Business Setup', path: '/consulting/business-setup' },
        { name: 'Business Optimization', path: '/consulting/business-optimization' },
        { name: 'Supply Chain', path: '/consulting/supply-chain' },
        { name: 'Cybersecurity', path: '/consulting/cybersecurity' },
        { name: 'Education', path: '/consulting/education' },
        { name: 'Fractional Executive Roles', path: '/consulting/fractional' },
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Press', path: '/press' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 h-[72px] md:h-[80px] ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-background border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link 
          to="/" 
          className="z-50 outline-none flex items-center h-full w-[260px] md:w-[380px] relative shrink-0" 
          onClick={() => setIsOpen(false)}
        >
          <DylanMazzeiLogo 
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 pointer-events-none" 
            imgStyle={{ height: '208px' }} 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <nav className="flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              if (item.subLinks) {
                return (
                  <div key={item.path} className="relative group py-2">
                    <Link
                      to={item.path}
                      className={`relative flex items-center gap-1 text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
                        isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                      {isActive(item.path) && (
                        <motion.div
                          layoutId="header-active-indicator"
                          className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
                          initial={false}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="bg-background border border-border rounded-xl shadow-lg overflow-hidden flex flex-col py-2">
                        {item.subLinks.map((subLink) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            className={`px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/50 hover:text-primary ${
                              location.pathname === subLink.path ? 'text-primary bg-secondary/30' : 'text-muted-foreground'
                            }`}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary py-2 ${
                    isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="header-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 ml-4 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-full"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center space-x-4 z-50">
          <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-primary transition-colors outline-none"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={24} strokeWidth={1.5} /> : <Moon size={24} strokeWidth={1.5} />}
          </button>
          <button
            className="p-2 text-foreground hover:text-primary transition-colors outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-screen bg-background md:hidden pt-28 px-6 border-b border-border overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 pb-20">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col"
                >
                  {item.subLinks ? (
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-3xl font-bold tracking-tight transition-colors hover:text-primary ${
                            isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                          }`}
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => setMobileConsultingOpen(!mobileConsultingOpen)}
                          className="p-2 text-muted-foreground hover:text-primary"
                        >
                          <ChevronDown size={28} className={`transition-transform duration-300 ${mobileConsultingOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      
                      <AnimatePresence>
                        {mobileConsultingOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col space-y-3 overflow-hidden border-l-2 border-border pl-4 ml-2"
                          >
                            {item.subLinks.map((subLink) => (
                              <Link
                                key={subLink.path}
                                to={subLink.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-medium transition-colors hover:text-primary py-1 ${
                                  location.pathname === subLink.path ? 'text-primary' : 'text-muted-foreground'
                                }`}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-bold tracking-tight transition-colors hover:text-primary ${
                        isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;