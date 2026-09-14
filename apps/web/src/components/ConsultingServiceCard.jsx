import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function ConsultingServiceCard({ title, description, link, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Link 
        to={link}
        className="block h-full p-8 bg-[hsl(var(--consulting-card-bg))] border border-secondary rounded-2xl transition-all duration-300 hover:border-primary/50 hover:bg-card hover:-translate-y-1 hover:shadow-[0_10px_30px_hsl(var(--primary)/0.15)] group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon size={28} className={Icon === 'svg' ? '' : 'text-primary group-hover:text-primary-foreground'} />
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors mt-auto">
            Explore Service
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ConsultingServiceCard;