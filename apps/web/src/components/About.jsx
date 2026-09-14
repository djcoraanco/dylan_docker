import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import StatsSection from './StatsSection';

function About() {
  const responsibilities = [
    "Establishes Clear Strategic Direction & Vision - Creates comprehensive long-term roadmaps that position companies for scalability and acquisition readiness. Develops compelling brand narratives and market positioning strategies that attract investors and acquirers while maintaining operational excellence.",
    "Makes Critical Strategic Decisions - Evaluates market opportunities and makes high-impact decisions that drive profitability and growth. Determines optimal timing for scaling operations, entering new markets, or positioning companies for successful exits and acquisitions.",
    "Develops Winning Growth & Exit Strategies - Crafts detailed business strategies focused on revenue acceleration, market expansion, and building enterprise value. Specializes in creating acquisition-ready business models that appeal to strategic buyers and private equity firms.",
    "Manages Finances & Builds High-Performance Teams - Optimizes financial structures to maximize profitability and investor appeal. Recruits, develops, and leads talented teams that execute on growth initiatives and maintain operational excellence during scaling phases and transitions.",
    "Optimizes Operations for Scale & Profitability - Streamlines processes, eliminates inefficiencies, and implements systems that support rapid growth. Focuses on operational metrics that matter to acquirers: unit economics, customer retention, and sustainable competitive advantages.",
    "Develops Innovative Products & Services - Creates and launches new revenue streams that diversify income and increase enterprise value. Identifies market gaps and builds solutions that solve real problems, making companies more attractive to potential acquirers and investors."
  ];

  const industries = [
    "Marketing",
    "Education Technology",
    "Home Health Care",
    "Insurance",
    "Hospitality Consulting",
    "Board Member",
    "Spirits",
    "Education",
    "Logistics",
    "Clothing"
  ];

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-5 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1681835659509-58ed863f07cc" 
          alt="Abstract background texture representing premium luxury brand aesthetic and strategic business growth"
          className="w-full h-full object-cover mask-image-gradient"
          style={{ maskImage: 'linear-gradient(to left, black, transparent)' }}
        />
      </div>
      
      {/* Glow Orbs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight drop-shadow-lg">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Expertise</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </motion.div>

        {/* Stats Section */}
        <StatsSection />

        <div className="grid lg:grid-cols-2 gap-12">
            {/* Key Responsibilities */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary/40 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10 flex items-center relative z-10">
                <span className="w-2 h-8 bg-primary mr-4 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                Key Responsibilities
              </h3>
              <div className="space-y-6 relative z-10">
                {responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 p-1 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-primary drop-shadow-md" />
                    </div>
                    <span className="text-muted-foreground text-lg group-hover:text-foreground transition-colors duration-300">{responsibility}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-secondary/40 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-accent/20 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative background pulse */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl animate-pulse pointer-events-none"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-10 flex items-center relative z-10">
                <span className="w-2 h-8 bg-accent mr-4 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                Industries
              </h3>
              <div className="flex flex-wrap gap-4 relative z-10">
                {industries.map((industry, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="px-6 py-3 bg-background/50 backdrop-blur-md border border-white/10 rounded-full text-muted-foreground font-medium hover:bg-primary/20 hover:border-primary/50 hover:text-foreground hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {industry}
                  </motion.span>
                ))}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;