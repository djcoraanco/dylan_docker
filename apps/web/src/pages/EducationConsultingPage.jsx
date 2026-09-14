import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ConsultingFAQItem from '@/components/ConsultingFAQItem';

function EducationConsultingPage() {
  const coveragePoints = [
    "EdTech product strategy: hardware, software, and the decisions that separate a pilot from a product",
    "Selling into education: procurement cycles, decision makers, and why school sales timelines break most startups",
    "Institutional technology adoption: helping schools and training organizations evaluate, select, and roll out technology that teachers actually use",
    "Education hardware manufacturing: sourcing, R&D partnerships, and device management at classroom scale",
    "Exam integrity and proctoring strategy for institutions and certification programs",
    "AI in education: where AI genuinely improves learning outcomes and operations, and where it creates risk",
    "Student data privacy and compliance readiness: FERPA, COPPA, and the requirements procurement teams will ask about",
    "Education market entry for companies expanding into or out of the US"
  ];

  const targetAudiences = [
    {
      title: "EdTech founders",
      desc: "EdTech founders building a product and preparing to sell into schools, districts, or training providers."
    },
    {
      title: "Educational institutions",
      desc: "Schools and educational institutions evaluating major technology purchases or rollouts."
    },
    {
      title: "Market entrants",
      desc: "Companies outside education entering the market and underestimating how different it is."
    }
  ];

  const faqs = [
    {
      question: "Do you work with both edtech companies and schools?",
      answer: "Yes, and that is the advantage. Having built for the classroom and sold into institutions, we know what each side gets wrong about the other. Founders learn how buyers actually decide. Institutions learn how to evaluate vendors past the demo."
    },
    {
      question: "Can you help with education hardware, not just software?",
      answer: "Yes. Hardware is where most edtech advice falls apart. I have personally taken education devices through manufacturing and R&D partnerships, and the sprint covers sourcing, device management, and the unit economics of hardware in classrooms."
    },
    {
      question: "We are pre-product. Is it too early?",
      answer: "Pre-product is the best time. Education punishes products designed without the procurement path in mind. The diagnostic will pressure-test your concept against how the market buys before you build the wrong thing."
    },
    {
      question: "Do you cover higher education and corporate training, or just K-12?",
      answer: "All three. The buying dynamics differ, and the diagnostic identifies which segment fits your product and margin structure best before you commit go-to-market resources."
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
        "@id": "https://dylanmazzei.com/consulting/education/#service",
        "name": "Education Consulting",
        "description": "EdTech product strategy, institutional technology adoption, education hardware manufacturing, and market entry.",
        "provider": {"@id": "https://dylanmazzei.com/consulting/#service"},
        "url": "https://dylanmazzei.com/consulting/education"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "Do you work with both edtech companies and schools?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, and that is the advantage. Having built for the classroom and sold into institutions, we know what each side gets wrong about the other. Founders learn how buyers actually decide. Institutions learn how to evaluate vendors past the demo."}},
          {"@type": "Question", "name": "Can you help with education hardware, not just software?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Hardware is where most edtech advice falls apart. I have personally taken education devices through manufacturing and R&D partnerships, and the sprint covers sourcing, device management, and the unit economics of hardware in classrooms."}},
          {"@type": "Question", "name": "We are pre-product. Is it too early?", "acceptedAnswer": {"@type": "Answer", "text": "Pre-product is the best time. Education punishes products designed without the procurement path in mind. The diagnostic will pressure-test your concept against how the market buys before you build the wrong thing."}},
          {"@type": "Question", "name": "Do you cover higher education and corporate training, or just K-12?", "acceptedAnswer": {"@type": "Answer", "text": "All three. The buying dynamics differ, and the diagnostic identifies which segment fits your product and margin structure best before you commit go-to-market resources."}}
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dylanmazzei.com/"},
          {"@type": "ListItem", "position": 2, "name": "Consulting", "item": "https://dylanmazzei.com/consulting"},
          {"@type": "ListItem", "position": 3, "name": "Education", "item": "https://dylanmazzei.com/consulting/education"}
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Education & EdTech Consulting | Dylan Mazzei</title>
        <meta name="description" content="Education consulting from an edtech founder: product strategy, school technology adoption, education market entry, hardware manufacturing, and AI in the classroom." />
        <meta property="og:title" content="Education & EdTech Consulting | Dylan Mazzei" />
        <meta property="og:description" content="Education consulting from an edtech founder: product strategy, school technology adoption, education market entry, hardware manufacturing, and AI in the classroom." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dylanmazzei.com/consulting/education" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Education & EdTech Consulting | Dylan Mazzei" />
        <meta name="twitter:description" content="Education consulting from an edtech founder: product strategy, school technology adoption, education market entry, hardware manufacturing, and AI in the classroom." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <link rel="canonical" href="https://dylanmazzei.com/consulting/education" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b" 
            alt="Education technology and strategy"
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
              Education Consulting
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              As the co-founder of READTYCH and through partnerships like Infinitus Texas, I understand education from both sides of the procurement table. EdTech is an industry where great products die because they misunderstand the sales cycle, and schools struggle because they buy features instead of adoption. My teams and I bridge that gap.
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
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive strategy for education markets.</p>
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
                The <strong className="text-foreground">Business Diagnostic</strong> evaluates your product or procurement strategy against the reality of the education market. 
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                For EdTech companies, the 90-Day Education Sprint refines the product strategy, aligns the sales cycle, or restructures the manufacturing pipeline. For schools and institutions, our teams build the vendor evaluation framework and adoption roadmap so your investment actually gets used.
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

export default EducationConsultingPage;