import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  "SEO Strategy",
  "LLMO / AI Search Visibility",
  "GEO / Local Expansion",
  "Website Development",
  "Website Optimization",
  "Social Media Management",
  "Paid Media",
  "Brand Development",
  "Strategic Partnerships",
  "Investor Relations",
  "Venture Growth",
  "Business Development",
  "Product Development",
  "Fashion Brand Building"
];

function CapabilitiesGrid() {
  return (
    <section className="py-24 bg-secondary border-y border-border relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Core Capabilities</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_hsl(var(--primary))]"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 bg-card border border-border rounded-full text-foreground/90 font-medium hover:border-primary hover:bg-primary/10 hover:text-accent transition-all duration-300 shadow-sm cursor-default"
            >
              {cap}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesGrid;