import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  "Education",
  "Technology",
  "AI",
  "Digital Marketing",
  "Beverage",
  "Fashion / Apparel",
  "Consumer Brands",
  "Web3",
  "Healthcare",
  "Business Development",
  "Partnerships",
  "Investor Relations",
  "Software / Web Apps"
];

function IndustriesGrid() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">Industries & Sectors</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Operating across diverse verticals with a unified focus on strategic growth.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 bg-secondary border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all shadow-sm cursor-default"
            >
              {ind}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesGrid;