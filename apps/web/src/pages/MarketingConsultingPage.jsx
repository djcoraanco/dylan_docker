import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ConsultingFAQItem from '@/components/ConsultingFAQItem';

function MarketingConsultingPage() {
  const coveragePoints = [
    "SEO strategy",
    "AI search visibility (LLMO, GEO, AEO)",
    "Schema and entity strategy",
    "Paid media",
    "Social media management",
    "Funnel strategy",
    "Local and multi-location visibility",
    "Analytics setup",
    "Marketing team and vendor evaluation"
  ];

  const targetAudiences = [
    {
      title: "Founders spending without clear ROI",
      desc: "You have budget deployed across channels but lack a cohesive strategy connecting spend to revenue."
    },
    {
      title: "Established businesses watching organic traffic flatten",
      desc: "Your historical SEO isn't holding up against AI Overviews and modern search landscape shifts."
    },
    {
      title: "Teams running paid media that converts but doesn't scale",
      desc: "You've hit a ceiling on paid channels and need multi-channel diversification."
    }
  ];

  const faqs = [
    {
      question: "What is AI search visibility (LLMO/GEO)?",
      answer: "Large Language Model Optimization (LLMO) and Generative Engine Optimization (GEO) focus on ensuring your brand is cited and recommended by AI engines like ChatGPT, Claude, and Google's AI Overviews, shifting beyond traditional 10-blue-links SEO."
    },
    {
      question: "Do you execute or advise?",
      answer: "Both. The engagement starts with advisory (The Diagnostic) to build the playbook. After that, we either advise your internal team on execution, or my team executes the 90-Day Sprint for you."
    },
    {
      question: "Do you work with existing teams?",
      answer: "Yes. Often, businesses have a junior marketing manager or content writer who just needs a senior strategist to direct their efforts. My teams and I evaluate and guide existing teams to higher performance."
    },
    {
      question: "What budget size is needed?",
      answer: "This is designed for businesses with at least $10k/mo in existing marketing spend or the capacity to deploy that once the strategy is validated. The diagnostic itself is a flat fee to establish the baseline."
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
        "@id": "https://dylanmazzei.com/consulting/marketing/#service",
        "name": "Marketing Consulting",
        "description": "SEO, AI search visibility (LLMO, GEO, AEO), paid media, and funnel strategy from an agency owner and operator.",
        "provider": {"@id": "https://dylanmazzei.com/consulting/#service"},
        "url": "https://dylanmazzei.com/consulting/marketing"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "What is AI search visibility and why does it matter?", "acceptedAnswer": {"@type": "Answer", "text": "A growing share of buying research now happens inside AI assistants instead of traditional search results. LLMO, GEO, and AEO are the practices that make your brand the answer those tools give. Most businesses have done nothing here, which makes it the biggest visibility opportunity since early SEO."}},
          {"@type": "Question", "name": "Do you execute or just advise?", "acceptedAnswer": {"@type": "Answer", "text": "Both are available. The diagnostic and roadmap are advisory. The 90-Day Sprint includes execution delivered through my agency teams."}},
          {"@type": "Question", "name": "Do you work with my existing marketing team or agency?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Many engagements are exactly that: auditing what your current team or agency produces and redirecting it against a sharper strategy."}},
          {"@type": "Question", "name": "What size budget do I need for this to make sense?", "acceptedAnswer": {"@type": "Answer", "text": "There is no minimum ad spend. Strategy matters more at small budgets, not less. The diagnostic will tell you whether your budget should even go to paid channels right now."}}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dylanmazzei.com/"},
          {"@type": "ListItem", "position": 2, "name": "Consulting", "item": "https://dylanmazzei.com/consulting"},
          {"@type": "ListItem", "position": 3, "name": "Marketing", "item": "https://dylanmazzei.com/consulting/marketing"}
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Marketing Consulting: SEO, AI Search, Paid Media | Dylan Mazzei</title>
        <meta name="description" content="Marketing consulting from an agency owner: SEO, AI search visibility (LLMO, GEO, AEO), paid media, Social media Management, and funnel strategy built on real client results." />
        <meta property="og:title" content="Marketing Consulting: SEO, AI Search, Paid Media | Dylan Mazzei" />
        <meta property="og:description" content="Marketing consulting from an agency owner: SEO, AI search visibility (LLMO, GEO, AEO), paid media, Social media Management, and funnel strategy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dylanmazzei.com/consulting/marketing" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketing Consulting: SEO, AI Search, Paid Media | Dylan Mazzei" />
        <meta name="twitter:description" content="Marketing consulting from an agency owner: SEO, AI search visibility (LLMO, GEO, AEO), paid media, Social media Management, and funnel strategy." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <link rel="canonical" href="https://dylanmazzei.com/consulting/marketing" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629787155650-9ce3697dcb38" 
            alt="Marketing strategy and analytics"
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
              Marketing Consulting
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              Search has changed. I run marketing agencies, and my teams implement these strategies daily. Get a playbook for SEO, AI search visibility, paid media, and funnel strategy built on real client results.
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
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-foreground">What This Covers</h2>
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive coverage for modern digital visibility.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coveragePoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-6 bg-card border border-secondary rounded-xl hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{point}</span>
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
            className="mb-16"
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
                className="p-8 bg-card border border-secondary rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                <h3 className="text-xl font-bold text-foreground mb-4">{aud.title}</h3>
                <p className="text-muted-foreground">{aud.desc}</p>
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
                We always begin with a <strong className="text-foreground">Diagnostic-First Approach</strong>. Before recommending tactics, our teams audit your current analytics, ad accounts, and SEO footprint to find the leaks.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Following the diagnostic, we move into a <strong className="text-foreground">90-Day Sprint</strong> to execute the highest-leverage opportunities, whether that's restructuring paid media or fixing critical search visibility errors with my agency teams.
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
            <h2 className="mb-6 text-foreground font-bold">Every engagement starts with the Business Diagnostic</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              Stop guessing on channel attribution. Get a clear playbook backed by operator experience and specialist execution.
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

export default MarketingConsultingPage;