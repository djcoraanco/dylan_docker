import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function ConsultingFAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-secondary rounded-xl bg-card overflow-hidden transition-colors hover:border-primary/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left outline-none"
      >
        <h4 className="text-lg font-semibold text-foreground pr-8">{question}</h4>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary' : ''}`} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-secondary/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ConsultingFAQItem;