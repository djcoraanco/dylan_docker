import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ConsultingFAQItem from '@/components/ConsultingFAQItem';

function CybersecurityConsultingPage() {
  const coveragePoints = [
    "Security posture assessment: a structured review of your domains, email, cloud accounts, and access controls",
    "Vulnerability review: externally visible weaknesses an attacker would find in the first hour",
    "Email and payment fraud defenses: the controls that stop the most common attack on SMBs, wire and invoice fraud",
    "Access and identity hygiene: MFA coverage, password practices, offboarding gaps, and admin sprawl",
    "Compliance readiness: gap review against frameworks your clients or insurers ask about, such as SOC 2 or ISO 27001 preparation",
    "Employee risk: phishing exposure and a training approach people actually retain",
    "Vendor and tool review: what your current IT or MSP setup covers and what it quietly does not",
    "Incident response basics: who does what in the first 24 hours if something goes wrong"
  ];

  const targetAudiences = [
    {
      title: "Founders needing a baseline",
      desc: "Founders who have never had a security review and know it."
    },
    {
      title: "Compliance-driven businesses",
      desc: "Companies whose enterprise clients or insurers are starting to ask security questionnaires."
    },
    {
      title: "Post-incident reality checks",
      desc: "Businesses that recently had a close call and want to know how exposed they really are."
    }
  ];

  const faqs = [
    {
      question: "We are small. Are we really a target?",
      answer: "Small businesses are the primary target precisely because attacks are automated and defenses are usually absent. Wire fraud and ransomware operators do not check your headcount first."
    },
    {
      question: "Is this a penetration test?",
      answer: "The core service is a posture assessment and vulnerability review, which is what most SMBs need first. Where formal penetration testing is required for compliance, our teams scope it with qualified testers."
    },
    {
      question: "Will this disrupt our systems?",
      answer: "No. Assessment work is non-destructive, scheduled with you, and performed only against systems you authorize in writing."
    },
    {
      question: "We already have an IT provider. Why do we need this?",
      answer: "IT keeps systems running. Security asks how they break. Most MSP agreements quietly exclude the security review layer, and this engagement often becomes the checklist you hand your IT provider."
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
        "@id": "https://dylanmazzei.com/consulting/cybersecurity/#service",
        "name": "Cybersecurity Consulting",
        "description": "Security posture assessments, vulnerability review, compliance readiness, and employee risk training.",
        "provider": {"@id": "https://dylanmazzei.com/consulting/#service"},
        "url": "https://dylanmazzei.com/consulting/cybersecurity"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "We are small. Are we really a target?", "acceptedAnswer": {"@type": "Answer", "text": "Small businesses are the primary target precisely because attacks are automated and defenses are usually absent. Wire fraud and ransomware operators do not check your headcount first."}},
          {"@type": "Question", "name": "Is this a penetration test?", "acceptedAnswer": {"@type": "Answer", "text": "The core service is a posture assessment and vulnerability review, which is what most SMBs need first. Where formal penetration testing is required for compliance, our teams scope it with qualified testers."}},
          {"@type": "Question", "name": "Will this disrupt our systems?", "acceptedAnswer": {"@type": "Answer", "text": "No. Assessment work is non-destructive, scheduled with you, and performed only against systems you authorize in writing."}},
          {"@type": "Question", "name": "We already have an IT provider. Why do we need this?", "acceptedAnswer": {"@type": "Answer", "text": "IT keeps systems running. Security asks how they break. Most MSP agreements quietly exclude the security review layer, and this engagement often becomes the checklist you hand your IT provider."}}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dylanmazzei.com/"},
          {"@type": "ListItem", "position": 2, "name": "Consulting", "item": "https://dylanmazzei.com/consulting"},
          {"@type": "ListItem", "position": 3, "name": "Cybersecurity", "item": "https://dylanmazzei.com/consulting/cybersecurity"}
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cybersecurity Consulting for Growing Businesses | Dylan Mazzei</title>
        <meta name="description" content="Cybersecurity consulting: security posture assessments, vulnerability review, compliance readiness, and employee risk training for small and mid-sized companies." />
        <meta property="og:title" content="Cybersecurity Consulting for Growing Businesses | Dylan Mazzei" />
        <meta property="og:description" content="Cybersecurity consulting: security posture assessments, vulnerability review, compliance readiness, and employee risk training." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dylanmazzei.com/consulting/cybersecurity" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybersecurity Consulting for Growing Businesses | Dylan Mazzei" />
        <meta name="twitter:description" content="Cybersecurity consulting: security posture assessments, vulnerability review, compliance readiness, and employee risk training." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <link rel="canonical" href="https://dylanmazzei.com/consulting/cybersecurity" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" 
            alt="Cybersecurity and digital protection"
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
              Cybersecurity Consulting
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              Attackers automated years ago. Most small and mid-sized businesses have no idea what their exposure looks like until the invoice fraud email lands or the ransomware note appears. My security team and I find out before they do.
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
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive coverage for digital security and risk mitigation.</p>
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
                The <strong className="text-foreground">Business Diagnostic</strong> includes a baseline security posture check. 
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Where deeper review is warranted, the cybersecurity sprint runs a full assessment using the same assessment platform my own security company operates, and delivers a scored report with fixes ranked by risk and cost. All assessment work is performed by my teams only on systems you own and authorize in writing.
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

export default CybersecurityConsultingPage;