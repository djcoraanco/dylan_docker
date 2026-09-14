import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase, BookOpen, Search, Presentation, ArrowRight } from 'lucide-react';

function AboutPage() {
  const currentRoles = [
    {
      icon: Briefcase,
      text: "Run and grow the portfolio, with AI-driven operations across every company"
    },
    {
      icon: BookOpen,
      text: "Author of The Business Launch Playbook, the step-by-step guide to starting a business the right way"
    },
    {
      icon: Search,
      text: "Consulting through Dylan Mazzei Consulting: marketing, business setup, optimization, supply chain, and cybersecurity"
    },
    {
      icon: Presentation,
      text: "Content across social platforms documenting the playbooks in real time"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://dylanmazzei.com/#dylan",
        "name": "Dylan Mazzei",
        "url": "https://dylanmazzei.com",
        "email": "dylan@dylanmazzei.com",
        "image": "https://dylanmazzei.com/assets/dylan-mazzei.jpg",
        "jobTitle": "Founder & Operator",
        "description": "Multi-venture founder and operator running companies in marketing and AI search, AI software, e-commerce, education technology, and cybersecurity across the US and UAE.",
        "sameAs": [
          "https://instagram.com/caposins",
          "https://linkedin.com/in/dylanmazzei",
          "https://www.wikidata.org/wiki/Q140756776",
          "https://www.amazon.com/e/B0HCJJ1154"
        ],
        "knowsAbout": ["SEO", "AI search optimization", "LLMO", "business formation", "supply chain management", "cybersecurity", "education technology", "AI implementation"]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://dylanmazzei.com/about/#webpage",
        "url": "https://dylanmazzei.com/about",
        "name": "About Dylan Mazzei | Operator, Founder, Author"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dylanmazzei.com/"},
          {"@type": "ListItem", "position": 2, "name": "About", "item": "https://dylanmazzei.com/about"}
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 overflow-hidden">
      <Helmet>
        <title>About Dylan Mazzei | Operator, Founder, Author</title>
        <meta name="description" content="Dylan Mazzei is a multi-venture operator running companies in marketing, AI software, e-commerce, edtech, and cybersecurity across the US and UAE." />
        <meta property="og:title" content="About Dylan Mazzei | Operator, Founder, Author" />
        <meta property="og:description" content="Dylan Mazzei is a multi-venture operator running companies in marketing, AI software, e-commerce, edtech, and cybersecurity across the US and UAE." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://dylanmazzei.com/about" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dylan Mazzei | Operator, Founder, Author" />
        <meta name="twitter:description" content="Dylan Mazzei is a multi-venture operator running companies in marketing, AI software, e-commerce, edtech, and cybersecurity across the US and UAE." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <link rel="canonical" href="https://dylanmazzei.com/about" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-12 pb-24 border-b border-border text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
            <span>About</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight leading-[1.05]">
            Operator first.<br />
            <span className="text-muted-foreground">Everything else second.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I build and run companies. The content, the book, and the consulting all come from the same place: what actually works inside businesses I am accountable for.
          </p>
        </motion.div>
      </section>

      {/* The Story Section */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground text-center">The Story</h2>
            
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              <div className="w-full md:w-2/5 shrink-0">
                <img 
                  src="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/00cf6544c3e0dd7d1f9fa824226a5086.jpg" 
                  alt="Dylan Mazzei" 
                  className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5] object-center border border-border"
                />
              </div>
              <div className="w-full md:w-3/5 space-y-6 pt-2">
                <p>
                  I am Dylan Mazzei, a founder and operator based between the US and UAE. My portfolio spans marketing and AI search agencies, SaaS products, e-commerce and physical product brands, education technology, and cybersecurity. 
                </p>
                <p>
                  That mix is deliberate. Running businesses across different industries at the same time forces you to see which principles are universal and which are industry folklore. Pricing, hiring, structure, marketing, automation: the patterns repeat, and most expensive mistakes are avoidable if someone shows you the pattern early.
                </p>
                <p>
                  I am not a career consultant and I did not learn this in a classroom. I learned it by forming companies in multiple states and countries, sourcing products from factories on multiple continents, building software with AI-driven teams, and paying for every mistake along the way.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Now Section */}
      <section className="py-24 container mx-auto px-6 border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What I Do Now</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {currentRoles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-8 rounded-2xl flex items-start gap-4 group hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-card-foreground font-medium pt-1.5 leading-relaxed">
                  {role.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Where This Site Fits Section */}
      <section className="py-24 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Where This Site Fits</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-light">
              If you are deciding whether to start a business, start with the book. If you are already running one and want an operator's read on it, start with the Business Diagnostic. Either way, everything here is built to shorten the distance between where you are and a business that runs properly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground">
                <Link to="/consulting">Explore Consulting</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-border text-foreground">
                <Link to="/book">Get the Book</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="mb-10 text-4xl md:text-5xl font-bold text-foreground">Two ways to work with me.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="h-16 px-10 text-lg shadow-[0_4px_20px_hsl(var(--primary)/0.2)]">
                <a href="https://calendly.com/dylanmazzei/60min" target="_blank" rel="noopener noreferrer">
                  Book Your Diagnostic
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg border-border bg-card">
                <Link to="/book">Get the Free Chapter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;