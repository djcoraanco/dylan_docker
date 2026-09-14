import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react'; 

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      label: "Companies Exited",
      value: "4",
      icon: Trophy,
      gradient: "from-primary to-accent",
      bgHover: "hover:bg-card",
      borderHover: "hover:border-primary/50",
      shadowHover: "hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]",
      iconBg: "bg-primary text-primary-foreground"
    }
  ];

  return (
    <div className="grid md:grid-cols-1 gap-6 mb-16 max-w-2xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className={`group relative overflow-hidden rounded-[2rem] p-8 bg-secondary border border-border transition-all duration-500 hover:-translate-y-1 ${stat.borderHover} ${stat.shadowHover} ${stat.bgHover}`}
        >
            <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${stat.gradient} opacity-10 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-500`}></div>

            <div className="relative z-10 flex items-center justify-between">
                <div>
                    <h4 className="text-6xl font-bold text-foreground mb-2 tracking-tighter drop-shadow-lg">{stat.value}</h4>
                    <p className="text-lg text-muted-foreground font-medium uppercase tracking-wide group-hover:text-primary transition-colors duration-300">{stat.label}</p>
                </div>
                <div className={`p-4 rounded-2xl ${stat.iconBg} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 group-hover:bg-accent transition-all duration-300`}>
                    <stat.icon className="w-8 h-8 stroke-[2px]" />
                </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
};

export default StatsSection;