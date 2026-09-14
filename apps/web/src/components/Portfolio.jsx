import React from 'react';
import { motion } from 'framer-motion';
import BusinessCard from './BusinessCard';

function Portfolio() {
  const businesses = [
    {
      name: "Ai Growth Media Service",
      url: "aigrowthmediaservice.com",
      image: "https://images.unsplash.com/photo-1603985585179-3d71c35a537c",
      description: "Cutting-edge AI-powered digital marketing solutions that drive measurable growth and ROI for businesses of all sizes."
    },
    {
      name: "READTYCH",
      url: "readtych.com",
      image: "https://images.unsplash.com/photo-1624388611710-bdf95023d1c2",
      description: "Revolutionary education technology platform transforming how students learn and educators teach in the digital age."
    },
    {
      name: "Growth360Partners",
      url: "growth360partners.com",
      image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d",
      description: "Comprehensive business growth strategies and consulting services helping companies scale to new heights."
    },
    {
      name: "Skinny Spiritz",
      url: "skinnyspiritz.com",
      image: "https://images.unsplash.com/photo-1597967055533-b849be7bb260",
      description: "Premium hospitality and beverage consulting, delivering exceptional experiences and innovative solutions."
    },
    {
      name: "Gangi Apparel",
      url: "gangi.store",
      image: "https://images.unsplash.com/photo-1694864255284-3ad9f0573a05",
      description: "Contemporary fashion brand offering distinctive apparel that combines style, quality, and sustainability."
    },
    {
      name: "Vision Wave",
      url: "onevisionwave.com",
      image: "https://images.unsplash.com/photo-1690778216343-97d0b91158b0",
      description: "Innovative tech startup building next-generation solutions for modern business challenges."
    },
    {
      name: "Techie Marketing",
      url: "techiemarketing.io",
      image: "https://images.unsplash.com/photo-1603985585179-3d71c35a537c",
      description: "Technology-focused marketing agency specializing in digital transformation and brand elevation."
    },
    {
      name: "AiGrowth360",
      url: "aidigitalpartners.com",
      image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d",
      description: "AI-driven business growth platform providing intelligent insights and automated marketing strategies."
    },
    {
      name: "Infinitus Texas",
      url: "infinitustx.com",
      image: "https://images.unsplash.com/photo-1690778216343-97d0b91158b0",
      description: "Leading Texas-based technology firm delivering innovative solutions and strategic partnerships."
    }
  ];

  return (
    <section className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Current Business <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-8 rounded-full shadow-[0_0_15px_hsl(var(--primary))]"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            A diverse portfolio of successful ventures spanning multiple industries, each driving innovation and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <BusinessCard 
              key={index}
              name={business.name}
              url={business.url}
              image={business.image}
              description={business.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;