import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink, ArrowRight, Phone, Globe } from 'lucide-react';
import DylanMazzeiLogo from '@/components/DylanMazzeiLogo';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background text-foreground border-t border-border pt-12 pb-0 relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Consulting Services */}
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-foreground mb-4">Consulting Services</span>
            <ul className="space-y-2">
              {[
                { name: 'Marketing Consulting', path: '/consulting/marketing' },
                { name: 'Business Setup', path: '/consulting/business-setup' },
                { name: 'Business Optimization', path: '/consulting/business-optimization' },
                { name: 'Supply Chain', path: '/consulting/supply-chain' },
                { name: 'Cybersecurity', path: '/consulting/cybersecurity' },
                { name: 'Education', path: '/consulting/education' },
                { name: 'Fractional Executive Roles', path: '/consulting/fractional' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group text-sm font-medium">
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-foreground mb-4">Company</span>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Book', path: '/book' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Press', path: '/press' },
                { name: 'Contact', path: '/contact' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group text-sm font-medium">
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-foreground mb-4">Social Links</span>
            <ul className="space-y-2">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/caposins' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dylanmazzei/' },
                { name: 'Wikidata', url: 'https://www.wikidata.org/wiki/Q140756776' }
              ].map(social => (
                <li key={social.name}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group text-sm font-medium">
                    <ExternalLink size={14} className="mr-2 opacity-50 group-hover:opacity-100 transition-opacity text-primary" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Section */}
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider text-foreground mb-4">Contact</span>
            <div className="space-y-6">
              {/* Email Subsection */}
              <ul className="space-y-2">
                <li>
                  <a href="mailto:dylan@dylanmazzei.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors group text-sm font-medium">
                    <Mail size={16} className="mr-3 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                    <span>dylan@dylanmazzei.com</span>
                  </a>
                </li>
              </ul>

              {/* UAE Support Subsection */}
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-3 flex items-center">
                  <Globe size={12} className="mr-2 text-primary/60" />
                  UAE Support
                </span>
                <ul className="space-y-2">
                  <li>
                    <a href="tel:+971556470342" className="flex items-center text-muted-foreground hover:text-primary transition-colors group text-sm font-medium">
                      <Phone size={14} className="mr-3 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                      <span>+971 55 647 0342</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* USA Support Subsection */}
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-3 flex items-center">
                  <Globe size={12} className="mr-2 text-primary/60" />
                  USA Support
                </span>
                <ul className="space-y-3">
                  <li>
                    <a href="tel:8323500465" className="flex flex-col text-muted-foreground hover:text-primary transition-colors group text-sm font-medium">
                      <span className="text-[10px] font-semibold uppercase opacity-60 group-hover:text-primary transition-colors">Texas</span>
                      <div className="flex items-center mt-1">
                        <Phone size={12} className="mr-2 shrink-0 text-primary/70 group-hover:scale-110 transition-transform" />
                        <span>832-350-0465</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="tel:9542354974" className="flex flex-col text-muted-foreground hover:text-primary transition-colors group text-sm font-medium">
                      <span className="text-[10px] font-semibold uppercase opacity-60 group-hover:text-primary transition-colors">Florida</span>
                      <div className="flex items-center mt-1">
                        <Phone size={12} className="mr-2 shrink-0 text-primary/70 group-hover:scale-110 transition-transform" />
                        <span>954-235-4974</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="tel:7132894577" className="flex flex-col text-muted-foreground hover:text-primary transition-colors group text-sm font-medium">
                      <span className="text-[10px] font-semibold uppercase opacity-60 group-hover:text-primary transition-colors">New York</span>
                      <div className="flex items-center mt-1">
                        <Phone size={12} className="mr-2 shrink-0 text-primary/70 group-hover:scale-110 transition-transform" />
                        <span>713-289-4577</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Banner - Theme Aware */}
      <div className="bg-secondary/50 border-t border-border py-1 relative z-20 transition-colors duration-300">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Logo Container */}
          <div className="flex justify-center md:justify-start -my-2">
            <DylanMazzeiLogo imgStyle={{ height: '140px' }} />
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-1">
            <p className="text-[10px] text-muted-foreground font-semibold text-center md:text-left m-0 uppercase tracking-widest opacity-80">
              &copy; {currentYear} Dylan Mazzei
            </p>
            <div className="flex space-x-4 text-[10px] text-muted-foreground font-semibold uppercase tracking-widest opacity-80">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;