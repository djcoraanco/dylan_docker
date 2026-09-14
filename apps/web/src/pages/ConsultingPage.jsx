import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, Search, Landmark, BarChart, 
  Package, Shield, GraduationCap 
} from 'lucide-react';
import ConsultingServiceCard from '@/components/ConsultingServiceCard';
import ConsultingPricingTier from '@/components/ConsultingPricingTier';
import ConsultingStepCard from '@/components/ConsultingStepCard';
import ConsultingFAQItem from '@/components/ConsultingFAQItem';

function ConsultingPage() {
  const steps = [
    {
      title: "Business Diagnostic",
      description: "A deep-dive audit into your current operations, financials, tech stack, and marketing footprint to identify bottlenecks.",
      price: ""
    },
    {
      title: "Roadmap Delivery",
      description: "You receive a documented, prioritized execution playbook detailing exact next steps to scale or optimize.",
      price: ""
    },
    {
      title: "Execution Sprint or Advisory",
      description: "We either move into a 90-day implementation sprint where my team builds the systems, or an advisory retainer to guide yours.",
      price: ""
    }
  ];

  const tiers = [
    {
      tierName: "Business Diagnostic",
      price: "Fixed fee, quoted at booking",
      description: "The mandatory starting point for all engagements.",
      features: [
        "Comprehensive operational audit",
        "Marketing & visibility analysis",
        "Cost structure review",
        "Strategic playbook delivery",
        "45-minute strategy debrief call"
      ],
      buttonText: "Book Diagnostic"
    },
    {
      tierName: "90-Day Sprint",
      price: "Fixed scope, fixed fee",
      description: "Hands-on execution of the diagnostic playbook.",
      features: [
        "Everything in Diagnostic",
        "Execution by Dylan's specialist teams",
        "System setup & automation",
        "Vendor & talent vetting",
        "Weekly progress check-ins"
      ],
      buttonText: "Apply for Sprint",
      isPopular: true
    },
    {
      tierName: "Advisory Retainer",
      price: "Monthly engagement",
      description: "Ongoing guidance for founders and internal teams.",
      features: [
        "Monthly strategic roadmapping",
        "Bi-weekly advisory calls",
        "Direct access for urgent blocks",
        "Quarterly P&L reviews",
        "Priority access to Dylan's operating teams"
      ],
      buttonText: "Request Advisory"
    }
  ];

  const serviceLines = [
    {
      icon: Search,
      title: "Marketing & AI Search",
      description: "SEO, AI search visibility (LLMO/GEO), paid media, and funnel strategy built on real metrics.",
      link: "/consulting/marketing"
    },
    {
      icon: Landmark,
      title: "Business Setup",
      description: "Entity selection, state selection, licensing, and banking architecture for solid foundations.",
      link: "/consulting/business-setup"
    },
    {
      icon: BarChart,
      title: "Business Optimization",
      description: "Ops audits, pricing strategy, cost structure review, team design, and AI automation.",
      link: "/consulting/business-optimization"
    },
    {
      icon: Package,
      title: "Supply Chain",
      description: "Sourcing, supplier vetting, logistics planning, and landed cost analysis for product businesses.",
      link: "/consulting/supply-chain"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security posture assessments, vulnerability reviews, and compliance readiness (SOC2/HIPAA).",
      link: "/consulting/cybersecurity"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "EdTech product strategy, institutional technology adoption, and education market entry.",
      link: "/consulting/education"
    }
  ];

  const faqs = [
    {
      question: "What services does Dylan Mazzei offer?",
      answer: "I offer consulting in Marketing & AI Search, Business Setup, Business Optimization, Supply Chain, Cybersecurity, Education, and Fractional Executive Roles."
    },
    {
      question: "How do I book a consultation?",
      answer: "Every engagement begins with a Business Diagnostic. You can book an introductory call via the Calendly link on this page to start the process."
    },
    {
      question: "What is the pricing structure?",
      answer: "Pricing depends on the tier of engagement: The initial Business Diagnostic is a fixed fee. Executions are either fixed-fee 90-Day Sprints or ongoing monthly Advisory Retainers."
    },
    {
      question: "What happens after the diagnostic?",
      answer: "You own the playbook. You can execute it internally, hire an agency, or hire my team for a 90-Day Sprint or Advisory Retainer to ensure it gets implemented correctly."
    },
    {
      question: "Do you work with businesses outside the US?",
      answer: "Yes, I advise companies globally, particularly those in the US and UAE markets, though certain business setup or compliance advice will be localized."
    },
    {
      question: "What does the diagnostic cover?",
      answer: "We review your P&L structure, marketing analytics, operational bottlenecks, team hierarchy, and technical architecture to find the highest-leverage areas for immediate improvement."
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
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://dylanmazzei.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Person",
        "@id": "https://dylanmazzei.com/#dylan",
        "name": "Dylan Mazzei",
        "url": "https://dylanmazzei.com",
        "jobTitle": "Founder & Operator",
        "image": "https://dylanmazzei.com/assets/dylan-mazzei.jpg",
        "knowsAbout": [
          "Business Strategy",
          "Marketing",
          "Supply Chain",
          "Cybersecurity",
          "Education",
          "Fractional Executive Roles"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://dylanmazzei.com/consulting/#service",
        "name": "Dylan Mazzei Consulting",
        "description": "Diagnostic-first consulting in marketing, business setup, optimization, supply chain, cybersecurity, and education, plus fractional executive roles.",
        "url": "https://dylanmazzei.com/consulting",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Consulting Services",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Service Types",
              "itemListElement": [
                { "@type": "Offer", "name": "Marketing Consulting" },
                { "@type": "Offer", "name": "Business Setup Consulting" },
                { "@type": "Offer", "name": "Business Optimization Consulting" },
                { "@type": "Offer", "name": "Supply Chain Consulting" },
                { "@type": "Offer", "name": "Cybersecurity Consulting" },
                { "@type": "Offer", "name": "Education Consulting" },
                { "@type": "Offer", "name": "Fractional Executive Roles" }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Engagement Tiers",
              "itemListElement": [
                { "@type": "Offer", "name": "Discovery Call" },
                { "@type": "Offer", "name": "Strategy Session" },
                { "@type": "Offer", "name": "Ongoing Consulting" },
                { "@type": "Offer", "name": "Full-Time Fractional Role" }
              ]
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dylanmazzei.com/consulting/#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dylanmazzei.com/consulting/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dylanmazzei.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Consulting",
            "item": "https://dylanmazzei.com/consulting"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Business Consulting by an Operator | Dylan Mazzei</title>
        <meta name="description" content="Diagnostic-first consulting in marketing, business setup, optimization, supply chain, cybersecurity, and education, plus fractional executive roles, from a four-exit founder." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-28 pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2" 
            alt="Strategic business consulting background"
            className="w-full h-full object-cover object-center mix-blend-luminosity opacity-10 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-widest uppercase mb-8 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
              Operator-Led Consulting
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
              Dylan Mazzei Consulting
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-light">
              Advice from an operator who runs the playbook, not just writes it. I have built companies in six industries, sold four of them, and operate today across the US and Dubai. When you hire this practice, you get my judgment and the operating teams behind my companies.
            </p>
            
            <Button asChild size="lg" className="h-16 px-10 text-lg shadow-[0_4px_20px_hsl(var(--primary)/0.2)]">
              <a href="https://calendly.com/dylanmazzei/60min" target="_blank" rel="noopener noreferrer">
                Book Your Diagnostic
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-foreground">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">A systematic approach to diagnosing and solving business friction.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((step, i) => (
              <ConsultingStepCard 
                key={i}
                stepNumber={i + 1}
                title={step.title}
                description={step.description}
                price={step.price}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Tiers */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center max-w-2xl mx-auto"
            >
            <h2 className="text-foreground">Engagement Tiers</h2>
            <p className="mt-4 text-lg text-muted-foreground">Transparent structures based on the level of execution required.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {tiers.map((tier, i) => (
              <ConsultingPricingTier 
                key={i}
                tierName={tier.tierName}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                buttonText={tier.buttonText}
                isPopular={tier.isPopular}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fractional Leadership Callout */}
      <section className="py-20 bg-primary/5 border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-card border border-primary/20 rounded-3xl shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">Need the executive, not the project?</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                For growing companies that need dedicated C-suite leadership but aren't ready to absorb a high full-time base salary. I take a fractional seat on your team as CMO, COO, CISO, or Chief AI Officer—backed by my operating teams—to manage your staff and own the KPIs directly.
              </p>
              <Button asChild size="lg" className="h-14 px-8 text-lg shadow-[0_4px_20px_hsl(var(--primary)/0.2)]">
                <Link to="/consulting/fractional">
                  Explore Fractional Roles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Lines Grid */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <h2 className="text-foreground">Service Lines</h2>
            <p className="mt-4 text-lg text-muted-foreground">Specialized consulting areas where my teams and I bring direct operational experience.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {serviceLines.map((service, i) => (
              <ConsultingServiceCard 
                key={i}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Dylan */}
      <section className="py-24 bg-background border-b border-border relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="mb-8 text-foreground">Why Learn From a Theorist When You Can Work With an Operator?</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light mb-8">
              I don't just sell advice. My teams and I actively run a portfolio of companies spanning marketing, technology, and e-commerce. The playbooks we build for clients are the exact systems we implement on our own P&L.
            </p>
            <p className="text-lg text-muted-foreground">
              When we engage, you are getting tested strategies executed by specialists that survive in the current market—not outdated theories from a textbook.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="mb-6 text-foreground font-bold">Get the roadmap before you spend another dollar guessing.</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              Start with a deep-dive diagnostic to uncover the true leverage points in your business.
            </p>
            <Button asChild size="lg" className="px-10 h-16 text-lg shadow-[0_4px_20px_hsl(var(--primary)/0.2)]">
              <a href="https://calendly.com/dylanmazzei/60min" target="_blank" rel="noopener noreferrer">
                Book Your Diagnostic
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default ConsultingPage;