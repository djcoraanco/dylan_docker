import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  {
    name: "AI Growth Media Service",
    role: "Chief Executive Officer & Board Member",
    summary: "AI-focused marketing and growth company centered on digital visibility, strategy, and performance.",
    category: "CEO & Board Member"
  },
  {
    name: "READTYCH",
    role: "Chief Marketing Officer, Co-Founder & Board Member",
    summary: "Education technology company focused on transforming K-12 learning through an advanced dual-screen digital device.",
    category: "Co-Founder & Board Member"
  },
  {
    name: "Growth360Partners",
    role: "Chief Executive Officer & Founder",
    summary: "Full-service digital marketing agency specializing in SEO, websites, optimization, paid media, and social growth.",
    category: "Founder & CEO"
  },
  {
    name: "Infinitus Texas",
    role: "Partner & Strategic Advisor",
    summary: "Partner focused on marketing strategy, brand positioning, and scalable growth execution.",
    category: "Partner & Advisor"
  },
  {
    name: "Skinny Spiritz",
    role: "Chief Executive Officer & Board Member",
    summary: "Beverage brand focused on awareness, placement, partnerships, and scalable brand growth.",
    category: "CEO & Board Member"
  },
  {
    name: "Techie Marketing",
    role: "Chief Web3 Officer, Co-Founder & Advisor",
    summary: "Digital marketing and branding company built for tech and Web3-focused brands.",
    category: "Co-Founder & Advisor"
  },
  {
    name: "AiGrowth360",
    role: "Chief Executive Officer & Founder",
    summary: "Performance-driven digital marketing company focused on AI-powered growth strategy and analytics.",
    category: "Founder & CEO"
  },
  {
    name: "Gangi Apparel",
    role: "Strategic Advisor & Partner",
    summary: "Clothing line focused on fashion, brand identity, and modern apparel positioning.",
    category: "Strategic Advisor"
  },
  {
    name: "meSEO",
    role: "Founder & Strategic Growth Leader",
    summary: "Web app built around AI search, SEO, and modern digital visibility.",
    category: "Founder & Leader"
  }
];

function BrandPortfolioGrid() {
  return (
    <section id="ventures" className="py-24 bg-background relative z-10 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ventures & Brands</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">Strategic leadership, board advisory, and operational excellence across diverse industries.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card flex flex-col h-full group"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {brand.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{brand.name}</h3>
                <p className="text-sm font-medium text-foreground/80 mb-4">{brand.role}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-auto group-hover:text-foreground/90 transition-colors">
                {brand.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandPortfolioGrid;