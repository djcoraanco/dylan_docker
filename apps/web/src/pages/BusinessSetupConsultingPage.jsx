import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ConsultingFAQItem from '@/components/ConsultingFAQItem';

function BusinessSetupConsultingPage() {
  const coveragePoints = [
    "Entity selection: LLC, S-Corp, or C-Corp based on your revenue model, funding plans, and exit goals",
    "State selection by industry: tax burden, filing costs, licensing requirements, and legal climate matched to your sector",
    "Multi-state operations: nexus, foreign qualification, and when a second registration is actually required",
    "Licensing and compliance mapping for regulated industries",
    "Banking and payment infrastructure setup, including what banks actually approve for new entities",
    "US formation for international founders and UAE free zone formation for US founders",
    "Ownership and equity structure between co-founders and early partners",
    "The first-90-days admin stack: registered agent, bookkeeping, payroll, and insurance in the right order"
  ];

  const targetAudiences = [
    {
      title: "First-time founders",
      desc: "First-time founders who want the structure decision made correctly before revenue starts."
    },
    {
      title: "Existing owners",
      desc: "Existing owners who suspect their current entity or state is costing them money."
    },
    {
      title: "International & expanding founders",
      desc: "International founders entering the US market, or US founders expanding into the UAE."
    }
  ];

  const faqs = [
    {
      question: "Is Delaware always the right answer?",
      answer: "No. Delaware makes sense for venture-backed C-Corps. For most operating businesses, the right state is driven by where you operate, your industry's licensing rules, and tax treatment. The best-state-by-industry analysis is a core part of this service."
    },
    {
      question: "Can you help if my business is already formed?",
      answer: "Yes. Restructures are common. The diagnostic will tell you whether a change is worth the switching cost or whether you should leave it alone."
    },
    {
      question: "Do you handle the actual filings?",
      answer: "The sprint walks you through every filing with exact steps, and our teams coordinate with formation providers, registered agents, and your attorney or CPA where formal execution is required."
    },
    {
      question: "Are you a lawyer or accountant?",
      answer: "No. This is operator guidance built on forming and running companies in multiple states and countries. For legal opinions and tax filings, we work alongside licensed professionals, yours or referred."
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
        "@id": "https://dylanmazzei.com/consulting/business-setup/#service",
        "name": "Business Setup Consulting",
        "description": "Entity selection, state selection by industry, licensing, banking, and US and UAE company formation.",
        "provider": {"@id": "https://dylanmazzei.com/consulting/#service"},
        "url": "https://dylanmazzei.com/consulting/business-setup"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "Is Delaware always the right answer?", "acceptedAnswer": {"@type": "Answer", "text": "No. Delaware makes sense for venture-backed C-Corps. For most operating businesses, the right state is driven by where you operate, your industry's licensing rules, and tax treatment. The best-state-by-industry analysis is a core part of this service."}},
          {"@type": "Question", "name": "Can you help if my business is already formed?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Restructures are common. The diagnostic will tell you whether a change is worth the switching cost or whether you should leave it alone."}},
          {"@type": "Question", "name": "Do you handle the actual filings?", "acceptedAnswer": {"@type": "Answer", "text": "The sprint walks you through every filing with exact steps, and our teams coordinate with formation providers, registered agents, and your attorney or CPA where formal execution is required."}},
          {"@type": "Question", "name": "Are you a lawyer or accountant?", "acceptedAnswer": {"@type": "Answer", "text": "No. This is operator guidance built on forming and running companies in multiple states and countries. For legal opinions and tax filings, we work alongside licensed professionals, yours or referred."}}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dylanmazzei.com/"},
          {"@type": "ListItem", "position": 2, "name": "Consulting", "item": "https://dylanmazzei.com/consulting"},
          {"@type": "ListItem", "position": 3, "name": "Business Setup", "item": "https://dylanmazzei.com/consulting/business-setup"}
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Business Setup Consulting: Entity, State, Licensing | Dylan Mazzei</title>
        <meta name="description" content="Business formation consulting: entity selection, best state by industry, licensing, banking, and US and UAE setup from a founder who has formed companies in both." />
        <meta property="og:title" content="Business Setup Consulting: Entity, State, Licensing | Dylan Mazzei" />
        <meta property="og:description" content="Business formation consulting: entity selection, best state by industry, licensing, banking, and US and UAE setup." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dylanmazzei.com/consulting/business-setup" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Setup Consulting: Entity, State, Licensing | Dylan Mazzei" />
        <meta name="twitter:description" content="Business formation consulting: entity selection, best state by industry, licensing, banking, and US and UAE setup." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <link rel="canonical" href="https://dylanmazzei.com/consulting/business-setup" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1664575602276-faa075980031" 
            alt="Business documents and architecture"
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
              Business Setup Consulting
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              Where and how you form your company shapes your taxes, liability, and options for years. I have formed and operated companies across multiple US states and the UAE. My team and I will help you set it up right the first time.
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
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive coverage for proper business formation and setup.</p>
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
                The <strong className="text-foreground">Business Diagnostic</strong> reviews your current or planned structure against your industry, revenue model, and growth plans, and scores the gap. The roadmap covers entity type, state, licensing, and banking in sequence.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A setup sprint then executes it with you step by step. We are not a law firm or accounting firm, and where formal legal or tax opinions are needed, our teams coordinate with your counsel or refer you to ours.
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

export default BusinessSetupConsultingPage;