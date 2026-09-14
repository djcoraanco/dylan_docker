import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

function BusinessCard({ name, url, image, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 border border-secondary hover:border-primary/50 bg-card"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={`${name} - Strategic venture and brand building portfolio`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-primary/10 opacity-95 transition-opacity duration-500"></div>
      </div>

      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl ring-1 ring-inset ring-primary/40 box-border"></div>

      <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[380px]">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 drop-shadow-md">
            {name}
          </h3>
          <div className="w-12 h-1 bg-accent mb-6 group-hover:w-20 transition-all duration-300 rounded-full shadow-[0_0_10px_hsl(var(--accent))]"></div>
          <p className="text-muted-foreground text-base leading-relaxed mb-6 font-light group-hover:text-foreground/90 transition-colors duration-300">
            {description}
          </p>
        </div>

        <a 
          href={url.startsWith('http') ? url : `https://${url}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto"
        >
          <Button 
            className="w-full bg-secondary/80 backdrop-blur-md border border-border text-primary hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all duration-300 group/button shadow-lg"
          >
            <span className="font-semibold tracking-wide">Visit Website</span>
            <ExternalLink className="ml-2 h-4 w-4 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform duration-300" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
}

export default BusinessCard;