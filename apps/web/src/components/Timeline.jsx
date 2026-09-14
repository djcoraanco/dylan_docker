import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Award, Building2, Globe2, GlassWater, Lightbulb } from 'lucide-react';

function Timeline() {
  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      desc: "Began entrepreneurial journey focusing on digital marketing and business optimization.",
      icon: Lightbulb
    },
    {
      year: "2021",
      title: "Marketing Started",
      desc: "Launched marketing agency scaling operations and serving enterprise clients.",
      icon: Rocket
    },
    {
      year: "2023",
      title: "Business Sold (Marketing)",
      desc: "Successfully exited the marketing business after driving exponential growth.",
      icon: Award
    },
    {
      year: "2023",
      title: "Co-founder of EdTech",
      desc: "Established innovative educational technology platform to disrupt traditional learning.",
      icon: Building2
    },
    {
      year: "2024",
      title: "Home Health Care Acquired",
      desc: "Founded and scaled a home health care company that was successfully acquired following a strategic growth phase.",
      icon: TrendingUp
    },
    {
      year: "2025",
      title: "Spirit Company Launches",
      desc: "Introducing a new premium spirits brand to the market.",
      icon: GlassWater
    },
    {
      year: "2025",
      title: "Global Operations for Marketing",
      desc: "Expanded marketing operations internationally, establishing strong presence in the UAE.",
      icon: Globe2
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key <span className="text-primary">Milestones</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-[0_0_10px_hsl(var(--primary))]"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const Icon = milestone.icon;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row relative items-start md:items-center gap-8 md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-card border-4 border-secondary rounded-full flex items-center justify-center transform -translate-x-1/2 shadow-[0_0_20px_hsl(var(--primary)/0.3)] z-10 group-hover:border-primary transition-colors duration-500">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className={`bg-card border border-secondary p-8 rounded-3xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group relative overflow-hidden ${isEven ? 'md:text-right' : 'text-left'}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 border border-primary/20">
                          {milestone.year}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;