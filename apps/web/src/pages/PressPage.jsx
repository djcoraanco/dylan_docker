import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

function PressPage() {
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
        "@type": "CollectionPage",
        "@id": "https://dylanmazzei.com/press/#webpage",
        "url": "https://dylanmazzei.com/press",
        "name": "Press & Media Insights | Dylan Mazzei"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dylanmazzei.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Press",
            "item": "https://dylanmazzei.com/press"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <Helmet>
        <title>Press & Media Insights | Dylan Mazzei</title>
        <meta name="description" content="Latest news, interviews, and thought leadership from Dylan Mazzei on brand building, market trends, digital transformation, and strategic growth." />
        <meta property="og:title" content="Press & Media Insights | Dylan Mazzei" />
        <meta property="og:description" content="Latest news, interviews, and thought leadership from Dylan Mazzei on brand building, market trends, digital transformation, and strategic growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dylanmazzei.com/press" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Press & Media Insights | Dylan Mazzei" />
        <meta name="twitter:description" content="Latest news, interviews, and thought leadership from Dylan Mazzei on brand building, market trends, digital transformation, and strategic growth." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <link rel="canonical" href="https://dylanmazzei.com/press" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-b border-border pb-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Press & <span className="text-primary">Insights</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Thoughts on leadership, market trends, and scaling businesses, featured across top industry publications.
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.a
            href="https://gulfmagazine.co/inside-dylan-mazzeis-high-stakes/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group block p-8 md:p-14 bg-card border border-secondary hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 rounded-[2.5rem] relative overflow-hidden"
          >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                  <span className="text-primary group-hover:text-accent transition-colors duration-300">Gulf Magazine</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
                  <span>Feature Article</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 drop-shadow-sm mb-8 leading-tight">
                  Inside Dylan Mazzei's High-Stakes
                </h2>
                
                <div className="inline-flex items-center font-semibold text-primary group-hover:text-accent transition-colors text-lg">
                  Read Full Article <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
              
              <div className="hidden md:flex shrink-0">
                <div className="w-24 h-24 rounded-full border border-secondary flex items-center justify-center bg-secondary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 shadow-xl">
                  <ArrowRight size={36} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-card border border-secondary rounded-[2rem] text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Media Inquiries</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                For interview requests, speaking engagements, or press materials, please contact the PR team.
              </p>
              <a href="mailto:press@dylanmazzei.com" className="inline-flex items-center font-semibold text-primary hover:text-accent transition-colors text-lg">
                press@dylanmazzei.com <ExternalLink size={18} className="ml-2" />
              </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PressPage;