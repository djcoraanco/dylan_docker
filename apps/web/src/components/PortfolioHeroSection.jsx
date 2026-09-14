import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roles = [
  "Founder / CEO",
  "Co-Founder",
  "Partner",
  "Board Member",
  "Marketing Strategy",
  "Brand Positioning",
  "Growth Execution"
];

function PortfolioHeroSection() {
  const scrollToVentures = (e) => {
    e.preventDefault();
    const element = document.getElementById('ventures');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1683893519004-addd9f9d1dde?q=80&w=2000&auto=format&fit=crop" 
          alt="Abstract background representing diverse business portfolios and strategic growth" 
          className="w-full h-full object-cover object-center grayscale opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-8 shadow-[0_0_10px_hsl(var(--primary)/0.2)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 text-foreground tracking-tight leading-[1.05]">
              Building Brands & Growth Systems
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              Dylan Mazzei is a founder, operator, partner, and board member across multiple companies, with a focus on growth strategy, digital visibility, software, and execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToVentures}
                size="lg" 
                className="group h-14 px-8 shadow-[0_4px_20px_hsl(var(--primary)/0.3)]"
              >
                Explore Active Strategic Ventures
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                asChild
                size="lg" 
                className="group h-14 px-8 bg-gradient-to-r from-[#10B981] to-[#14B8A6] hover:from-[#059669] hover:to-[#0D9488] text-white border-none shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_25px_rgba(16,185,129,0.4)] transition-all duration-300"
              >
                <Link to="/contact">
                  <Mail className="mr-2 w-4 h-4" />
                  Contact Dylan for Strategic Growth
                </Link>
              </Button>
            </div>
            
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
              Founder-led. Operator-driven. Global Scope.
            </p>
          </motion.div>

          <div className="relative w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10"></div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.2 + (i * 0.08),
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="px-6 py-3 rounded-full bg-card border border-secondary shadow-lg hover:border-primary/50 hover:bg-secondary transition-all duration-300 group cursor-default"
                >
                  <span className="text-sm md:text-base font-medium text-foreground/90 whitespace-nowrap group-hover:text-primary">
                    {role}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PortfolioHeroSection;