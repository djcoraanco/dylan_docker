import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/50 via-background to-background"></div>

        {/* Dynamic Glow Accents */}
        <motion.div
            className="absolute -top-[20%] -left-[20%] w-[70%] h-[70%] rounded-full mix-blend-screen opacity-10 dark:opacity-20 blur-[100px] bg-primary"
            animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute -bottom-[20%] -right-[20%] w-[70%] h-[70%] rounded-full mix-blend-screen opacity-10 dark:opacity-20 blur-[100px] bg-accent"
            animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

         {/* Pattern */}
         <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
                 backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 0, transparent 50%)', 
                 backgroundSize: '30px 30px' 
             }}>
         </div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-card/60 backdrop-blur-3xl border border-border rounded-[3rem] p-8 md:p-20 shadow-2xl shadow-primary/5 overflow-hidden"
        >
            <div className="absolute inset-0 rounded-[3rem] p-[1px] bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none mask-image-source"></div>
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col items-center text-center relative z-10">
                
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background/80 border border-primary/30 backdrop-blur-md shadow-[0_0_15px_hsl(var(--primary)/0.1)] hover:bg-background transition-all cursor-default">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_hsl(var(--accent))]"></span>
                    <span className="text-sm font-semibold tracking-widest uppercase text-accent">Visionary Entrepreneur</span>
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-8xl font-black text-foreground mb-6 tracking-tight leading-tight drop-shadow-sm"
                >
                  Dylan Mazzei
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground mb-8 leading-snug">
                       8+ Years of <strong className="font-bold text-primary">Entrepreneurial Excellence</strong>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light">
                      Driving innovation and accelerating business growth through strategic vision, creating a legacy of digital transformation and success.
                    </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-5 w-full justify-center"
                >
                  <a 
                    href="https://linkedin.com/in/dylanmazzei" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      size="lg" 
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-lg font-medium shadow-[0_4px_20px_hsl(var(--primary)/0.2)] hover:-translate-y-1 transition-all duration-300 border-none group"
                    >
                      <Linkedin className="mr-3 h-5 w-5" />
                      Connect on LinkedIn
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Button>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/caposins/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full h-14 rounded-full px-8 text-lg font-medium shadow-sm hover:shadow-[0_4px_20px_hsl(var(--primary)/0.1)] hover:-translate-y-1 transition-all duration-300 group bg-card border-border hover:border-primary text-foreground"
                    >
                      <Instagram className="mr-3 h-5 w-5 text-primary" />
                      Follow on Instagram
                      <ArrowRight className="ml-2 h-4 w-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Button>
                  </a>
                </motion.div>
            </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  );
}

export default Hero;