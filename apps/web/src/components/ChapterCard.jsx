import React from 'react';
import { motion } from 'framer-motion';

function ChapterCard({ chapterNumber, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-secondary rounded-2xl p-8 transition-all duration-500 hover:bg-card/80 hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full group"
    >
      <div className="text-primary/60 font-mono text-sm font-semibold tracking-wider mb-3 group-hover:text-primary transition-colors">
        CHAPTER {chapterNumber}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary/90 transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mt-auto">
        {description}
      </p>
    </motion.div>
  );
}

export default ChapterCard;