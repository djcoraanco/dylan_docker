import React from 'react';
import { motion } from 'framer-motion';

function ConsultingStepCard({ stepNumber, title, description, price, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative p-8 md:p-10 bg-card border border-secondary rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors"
    >
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500"></div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xl font-black text-primary border border-primary/20 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
          {stepNumber}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground m-0">{title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {price && (
        <div className="inline-flex items-center px-3 py-1 rounded bg-secondary text-foreground text-sm font-semibold font-mono tracking-tight">
          {price}
        </div>
      )}
    </motion.div>
  );
}

export default ConsultingStepCard;