import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

function ConsultingPricingTier({ tierName, price, description, features, buttonText, delay = 0, isPopular = false }) {
  const { toast } = useToast();

  const handleBooking = (e) => {
    e.preventDefault();
    toast({
      title: "Booking Initiated",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative flex flex-col h-full p-8 md:p-10 rounded-3xl border ${
        isPopular 
          ? 'bg-card border-primary shadow-[0_0_40px_hsl(var(--primary)/0.15)]' 
          : 'bg-[hsl(var(--consulting-card-bg))] border-secondary hover:border-primary/30 transition-colors'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
          Most Common
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">{tierName}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl md:text-5xl font-bold text-foreground">{price}</span>
        </div>
      </div>

      <div className="flex-1 mb-8">
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/90 text-sm md:text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button 
        onClick={handleBooking}
        size="lg" 
        variant={isPopular ? 'default' : 'outline'}
        className="w-full h-14"
      >
        {buttonText}
      </Button>
    </motion.div>
  );
}

export default ConsultingPricingTier;