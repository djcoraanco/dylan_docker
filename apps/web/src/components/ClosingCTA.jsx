import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function ClosingCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-6 text-foreground font-bold">Ready to Explore Growth Opportunities?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Let's discuss how we can build something meaningful together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto px-8 h-14 text-base shadow-[0_4px_20px_hsl(var(--primary)/0.3)]">
              <Link to="/contact">Contact Dylan for Strategic Growth</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto px-8 h-14 text-base">
              <Link to="/portfolio">Explore Strategic Venture Portfolio</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ClosingCTA;