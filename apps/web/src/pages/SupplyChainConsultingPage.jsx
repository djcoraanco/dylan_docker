import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ConsultingFAQItem from '@/components/ConsultingFAQItem';

function SupplyChainConsultingPage() {
  const coveragePoints = [
    "Sourcing strategy: where to manufacture based on your product, volumes, and quality bar",
    "Supplier vetting: how to evaluate factories, request samples, and structure trial orders before committing",
    "Negotiation: pricing, MOQs, payment terms, and the leverage points most first-time importers miss",
    "Landed cost analysis: the true per-unit cost including freight, duties, and defects, so pricing is built on reality",
    "Logistics: freight forwarding, customs, and choosing between air and sea by cash flow stage",
    "DTC fulfillment: 3PL selection, warehouse strategy, and shipping cost control",
    "Quality control: inspection protocols and defect management that protect your review scores",
    "Supply chain risk: single-supplier exposure, tariff shifts, and building a backup bench"
  ];

  const targetAudiences = [
    {
      title: "First-time overseas sourcers",
      desc: "E-commerce founders sourcing overseas for the first time."
    },
    {
      title: "Established product brands",
      desc: "Established product brands whose margins eroded and who have not renegotiated in years."
    },
    {
      title: "Scaling brand operators",
      desc: "Brands scaling past the point where the founder can personally manage every shipment."
    }
  ];

  const faqs = [
    {
      question: "Do you only work with brands sourcing from China?",
      answer: "No. The right sourcing country depends on your product category, volumes, and margin structure. Engagements have covered multiple regions, and the diagnostic addresses country selection directly."
    },
    {
      question: "Can you introduce me to suppliers directly?",
      answer: "Where our existing network fits your category, yes. Where it does not, the sprint teaches you the vetting process itself, which is more valuable than any single introduction."
    },
    {
      question: "My volumes are small. Will factories take me seriously?",
      answer: "Small volumes need a different playbook: trial-order structures, trading companies versus factories, and MOQ negotiation tactics. That playbook is part of this service."
    },
    {
      question: "Do you handle ongoing supply chain management?",
      answer: "The sprint installs the system and trains you or your team on it. Ongoing oversight is available under the advisory retainer."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://dylanmazzei.com/#website",
        "url": "https://dylanmazzei.com",
        "name": "Dylan Mazzei",
        "publisher": {"@id": "https://dylanmazzei.com/#dylan"}
      },
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
        ]
      },
      {
        "@type": "Service",
        "@id": "https://dylanmazzei.com/consulting/supply-chain/#service",
        "name": "Supply Chain Consulting",
        "description": "Sourcing, supplier vetting, negotiation, logistics, landed cost analysis, and DTC fulfillment.",
        "provider": {"@id": "https://dylanmazzei.com/consulting/#service"},
        "url": "https://dylanmazzei.com/consulting/supply-chain"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "Do you only work with brands sourcing from China?", "acceptedAnswer": {"@type": "Answer", "text": "No. The right sourcing country depends on your product category, volumes, and margin structure. Engagements have covered multiple regions, and the diagnostic addresses country selection directly."}},
          {"@type": "Question", "name": "Can you introduce me to suppliers directly?", "acceptedAnswer": {"@type": "Answer", "text": "Where our existing network fits your category, yes. Where it does not, the sprint teaches you the vetting process itself, which is more valuable than any single introduction."}},
          {"@type": "Question", "name": "My volumes are small. Will factories take me seriously?", "acceptedAnswer": {"@type": "Answer", "text": "Small volumes need a different playbook: trial-order structures, trading companies versus factories, and MOQ negotiation tactics. That playbook is part of this service."}},
          {"@type": "Question", "name": "Do you handle ongoing supply chain management?", "acceptedAnswer": {"@type": "Answer", "text": "The sprint installs the system and trains you or your team on it. Ongoing oversight is available under the advisory retainer."}}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dylanmazzei.com/"},
          {"@type": "ListItem", "position": 2, "name": "Consulting", "item": "https://dylanmazzei.com/consulting"},
          {"@type": "ListItem", "position": 3, "name": "Supply Chain", "item": "https://dylanmazzei.com/consulting/supply-chain"}
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Supply Chain Consulting: Sourcing to Fulfillment | Dylan Mazzei</title>
        <meta name="description" content="Supply chain consulting for product brands: sourcing, supplier vetting, logistics, landed cost analysis, and DTC fulfillment from a founder who sources globally." />
        <meta property="og:title" content="Supply Chain Consulting: Sourcing to Fulfillment | Dylan Mazzei" />
        <meta property="og:description" content="Supply chain consulting for product brands: sourcing, supplier vetting, logistics, landed cost analysis, and DTC fulfillment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dylanmazzei.com/consulting/supply-chain" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Supply Chain Consulting: Sourcing to Fulfillment | Dylan Mazzei" />
        <meta name="twitter:description" content="Supply chain consulting for product brands: sourcing, supplier vetting, logistics, landed cost analysis, and DTC fulfillment." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <link rel="canonical" href="https://dylanmazzei.com/consulting/supply-chain" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a" 
            alt="Logistics and global supply chain"
            className="w-full h-full object-cover object-center mix-blend-luminosity opacity-20"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold uppercase mb-6">
              Specialized Service Line
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
              Supply Chain Consulting
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              Margins are made before the product ships. My teams and I source and manufacture for my own product brands across multiple countries, and we bring that supplier network and negotiation experience to yours.
            </p>
            <Button asChild size="lg" className="h-14 px-8 shadow-[0_4px_20px_hsl(var(--primary)/0.3)]">
              <a href="https://calendly.com/dylanmazzei/60min" target="_blank" rel="noopener noreferrer">
                Book Your Diagnostic
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What This Covers */}
      <section className="py-24 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-foreground">What This Covers</h2>
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive coverage for sourcing, logistics, and margins.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {coveragePoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-6 bg-card border border-secondary rounded-xl hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground font-medium text-lg leading-relaxed">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <h2 className="text-foreground">Who This Is For</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {targetAudiences.map((aud, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-card border border-secondary rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary group-hover:w-full group-hover:opacity-5 transition-all duration-500"></div>
                <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">{aud.title}</h3>
                <p className="text-muted-foreground relative z-10">{aud.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Delivery Works */}
      <section className="py-24 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-foreground mb-8">How Delivery Works</h2>
            <div className="p-8 md:p-12 bg-card border border-primary/20 rounded-3xl shadow-xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                The <strong className="text-foreground">Business Diagnostic</strong> includes a landed cost and supplier risk review: what you actually pay per unit delivered, where the margin leaks, and how exposed you are.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The 90-Day Supply Chain Sprint then executes: new supplier candidates identified and vetted, negotiations run or coached, logistics restructured, and QC protocols installed. This is the same process my teams use for our physical product brands.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-foreground">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ConsultingFAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="mb-6 text-foreground font-bold leading-tight">Every engagement starts with the Business Diagnostic.</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              Book yours and get a scored roadmap before you commit to anything bigger.
            </p>
            <Button asChild size="lg" className="px-10 h-16 text-lg shadow-[0_4px_20px_hsl(var(--primary)/0.3)]">
              <a href="https://calendly.com/dylanmazzei/60min" target="_blank" rel="noopener noreferrer">Book Your Diagnostic</a>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default SupplyChainConsultingPage;