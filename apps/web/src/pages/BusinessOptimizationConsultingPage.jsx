import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ConsultingFAQItem from '@/components/ConsultingFAQItem';

function BusinessOptimizationConsultingPage() {
  const coveragePoints = [
    "Operations audit: where time and money actually go versus where you think they go",
    "Pricing review: packaging, tiers, and price points tested against your unit economics",
    "Cost structure analysis: vendor stack, software spend, and the subscriptions nobody remembers buying",
    "Team design: roles, accountability, and what your org chart should look like at the next revenue stage",
    "AI workflow automation: where AI genuinely replaces hours today, in ops, content, research, reporting, and customer service",
    "Process documentation and SOPs so the business runs without you in every decision",
    "Reporting and KPI design: the five numbers you should look at weekly and how to get them automatically",
    "Delegation architecture for founders who have become the bottleneck"
  ];

  const targetAudiences = [
    {
      title: "Founders hitting a margin wall",
      desc: "Founders whose revenue grew but whose take-home did not."
    },
    {
      title: "Overworked owners",
      desc: "Owners working in the business full time and running it in the margins."
    },
    {
      title: "Teams scaling inefficiently",
      desc: "Teams that added headcount to solve problems that were actually process problems."
    }
  ];

  const faqs = [
    {
      question: "How is this different from hiring a fractional COO?",
      answer: "A fractional COO manages your operations over time. This engagement fixes the structure, installs the systems, and hands them back to you or your team. If you need ongoing management after, the advisory retainer covers it."
    },
    {
      question: "Will AI automation replace my staff?",
      answer: "Sometimes, but the more common result is that current staff absorb growth without new hires. The audit shows which tasks are automatable, which need people, and what the honest savings number is."
    },
    {
      question: "My business is small. Is optimization premature?",
      answer: "Small is the cheapest time to build good structure. Fixing pricing and process at six figures is far easier than untangling them at seven."
    },
    {
      question: "What do you need from me to start?",
      answer: "Access to your P&L, your software stack, and a few hours of interviews with you and key team members. The intake checklist covers it all before the diagnostic begins."
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
        "@id": "https://dylanmazzei.com/consulting/business-optimization/#service",
        "name": "Business Optimization Consulting",
        "description": "Operations audits, pricing, cost structure, team design, and AI-driven workflow automation.",
        "provider": {"@id": "https://dylanmazzei.com/consulting/#service"},
        "url": "https://dylanmazzei.com/consulting/business-optimization"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "How is this different from hiring a fractional COO?", "acceptedAnswer": {"@type": "Answer", "text": "A fractional COO manages your operations over time. This engagement fixes the structure, installs the systems, and hands them back to you or your team. If you need ongoing management after, the advisory retainer covers it."}},
          {"@type": "Question", "name": "Will AI automation replace my staff?", "acceptedAnswer": {"@type": "Answer", "text": "Sometimes, but the more common result is that current staff absorb growth without new hires. The audit shows which tasks are automatable, which need people, and what the honest savings number is."}},
          {"@type": "Question", "name": "My business is small. Is optimization premature?", "acceptedAnswer": {"@type": "Answer", "text": "Small is the cheapest time to build good structure. Fixing pricing and process at six figures is far easier than untangling them at seven."}},
          {"@type": "Question", "name": "What do you need from me to start?", "acceptedAnswer": {"@type": "Answer", "text": "Access to your P&L, your software stack, and a few hours of interviews with you and key team members. The intake checklist covers it all before the diagnostic begins."}}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dylanmazzei.com/"},
          {"@type": "ListItem", "position": 2, "name": "Consulting", "item": "https://dylanmazzei.com/consulting"},
          {"@type": "ListItem", "position": 3, "name": "Business Optimization", "item": "https://dylanmazzei.com/consulting/business-optimization"}
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Business Optimization Consulting: Ops, Pricing, AI | Dylan Mazzei</title>
        <meta name="description" content="Business optimization consulting: operations audits, pricing, cost structure, team design, and AI workflow automation from a multi-company operator." />
        <meta property="og:title" content="Business Optimization Consulting: Ops, Pricing, AI | Dylan Mazzei" />
        <meta property="og:description" content="Business optimization consulting: operations audits, pricing, cost structure, team design, and AI workflow automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dylanmazzei.com/consulting/business-optimization" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Business Optimization Consulting: Ops, Pricing, AI | Dylan Mazzei" />
        <meta name="twitter:description" content="Business optimization consulting: operations audits, pricing, cost structure, team design, and AI workflow automation." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <link rel="canonical" href="https://dylanmazzei.com/consulting/business-optimization" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
            alt="Business optimization and analytics"
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
              Business Optimization Consulting
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              Most businesses do not have a revenue problem. They have a margin problem, a process problem, or a headcount problem wearing a revenue costume. My teams and I find which one you have and fix it.
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
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive coverage for operational efficiency.</p>
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
                The <strong className="text-foreground">Business Diagnostic</strong> scores your operations across cost, process, team, and AI leverage. 
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The 90-Day Optimization Sprint then executes the roadmap: renegotiated stack, rebuilt processes, deployed automations, and a reporting layer so improvements hold. We run this same discipline across our own portfolio every quarter, which is why the recommendations are specific instead of theoretical.
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

export default BusinessOptimizationConsultingPage;