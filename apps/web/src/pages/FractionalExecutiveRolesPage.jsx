import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Shield, Settings, TrendingUp, Cpu } from 'lucide-react';
import ConsultingFAQItem from '@/components/ConsultingFAQItem';

function FractionalExecutiveRolesPage() {
  const roles = [
    {
      title: "Fractional CMO",
      icon: TrendingUp,
      price: "Monthly seat, terms at application",
      points: [
        "Go-to-market strategy and execution oversight",
        "Paid media and SEO channel budget allocation",
        "Marketing team leadership and vendor management",
        "Funnel optimization and conversion rate improvements",
        "Social media strategy, content calendar, and community management",
        "Backed by Dylan's agency teams for SEO, AI search, paid media, and content execution"
      ]
    },
    {
      title: "Fractional COO",
      icon: Settings,
      price: "Monthly seat, terms at application",
      points: [
        "Daily operations management and KPI tracking",
        "Process documentation and SOP creation",
        "Team structure, hiring plans, and performance reviews",
        "Cost structure optimization and vendor negotiation",
        "Backed by Dylan's operations and automation teams for systems build-out"
      ]
    },
    {
      title: "Fractional CISO",
      icon: Shield,
      price: "Monthly seat, terms at application",
      points: [
        "Security posture oversight and risk management",
        "Compliance readiness (SOC 2, ISO 27001, HIPAA)",
        "IT vendor security review and access control strategy",
        "Incident response planning and employee training",
        "Backed by Dylan's security team and assessment platform for testing and monitoring"
      ]
    },
    {
      title: "Fractional Chief AI Officer",
      icon: Cpu,
      price: "Monthly seat, terms at application",
      points: [
        "AI governance, policy, and responsible AI implementation across the organization",
        "AI workflow automation across departments",
        "Tool selection and integration (reducing software bloat)",
        "Internal team training on practical AI leverage",
        "Backed by Dylan's AI operations teams that run automation across his own portfolio"
      ]
    }
  ];

  const engagementSteps = [
    "Prerequisite: Every engagement begins with the Business Diagnostic to establish baselines and 90-day objectives.",
    "Cadence: Weekly executive meetings, direct Slack/Teams access, and bi-weekly department reviews.",
    "Deliverables: Strategic roadmaps translated into quarterly OKRs for your internal team to execute, heavily supported by our specialists.",
    "Terms: Minimum 3-month commitment with a 30-day notice period to ensure stability.",
    "Availability: Seats are strictly capped at 3 concurrent clients across all roles."
  ];

  const targetAudiences = [
    "Post-revenue businesses ($1M-$10M ARR) needing senior leadership but not ready to absorb a high full-time base salary.",
    "Founders stuck in the day-to-day who need to step back to focus on product, fundraising, or high-level sales.",
    "Companies with capable junior teams (doers) that lack senior strategic direction and specialist execution (planners and enablers)."
  ];

  const faqs = [
    {
      question: "What is a fractional executive?",
      answer: "A fractional executive is an experienced, senior professional who serves in a leadership role on a part-time or contract basis. They provide C-suite level strategy and operational oversight without the cost of a full-time hire."
    },
    {
      question: "How does fractional leadership work?",
      answer: "We plug an experienced operator directly into your C-suite on a monthly retainer. We manage your existing team, build systems, own KPIs, run weekly meetings, and steer the department alongside my backing specialist teams."
    },
    {
      question: "What roles are available?",
      answer: "Currently, I offer fractional seats as a Chief Marketing Officer (CMO), Chief Operating Officer (COO), Chief Information Security Officer (CISO), and Chief AI Officer."
    },
    {
      question: "How do I get started?",
      answer: "Every engagement begins with a Business Diagnostic to establish baselines. You can start by booking an introductory call via Calendly to see if a fractional setup is the right fit for your current growth stage."
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
        "jobTitle": "Founder & Operator"
      },
      {
        "@type": "Service",
        "@id": "https://dylanmazzei.com/consulting/fractional/#service",
        "name": "Fractional Executive Leadership",
        "description": "Fractional executive roles including CMO, COO, CISO, and Chief AI Officer",
        "provider": {"@id": "https://dylanmazzei.com/#dylan"},
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Fractional Executive Roles",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fractional CMO",
                "description": "Go-to-market strategy, execution oversight, paid media, and SEO channel management."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fractional COO",
                "description": "Daily operations management, KPI tracking, and process documentation."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fractional CISO",
                "description": "Security posture oversight, compliance readiness (SOC 2, HIPAA), and risk management."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fractional Chief AI Officer",
                "description": "AI governance, workflow automation across departments, and internal team training."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
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
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dylanmazzei.com/"},
          {"@type": "ListItem", "position": 2, "name": "Consulting", "item": "https://dylanmazzei.com/consulting"},
          {"@type": "ListItem", "position": 3, "name": "Fractional Executive Roles", "item": "https://dylanmazzei.com/consulting/fractional"}
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fractional CMO, COO, CISO & Chief AI Officer | Dylan Mazzei</title>
        <meta name="description" content="Fractional executive leadership for growing businesses. Access senior CMO, COO, CISO, and CAIO expertise without the full-time overhead." />
        <meta property="og:title" content="Fractional CMO, COO, CISO & Chief AI Officer | Dylan Mazzei" />
        <meta property="og:description" content="Fractional executive leadership for growing businesses. Access senior CMO, COO, CISO, and CAIO expertise without the full-time overhead." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dylanmazzei.com/consulting/fractional" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fractional CMO, COO, CISO & Chief AI Officer | Dylan Mazzei" />
        <meta name="twitter:description" content="Fractional executive leadership for growing businesses. Access senior CMO, COO, CISO, and CAIO expertise without the full-time overhead." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <link rel="canonical" href="https://dylanmazzei.com/consulting/fractional" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
            alt="Executive team leadership meeting"
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
              Fractional Leadership
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight">
              Fractional Executive Leadership
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
              Get the senior strategic leadership and specialist teams your business needs to scale, without the risk, equity dilution, or high salary of a full-time executive hire. 
            </p>
            <Button asChild size="lg" className="h-14 px-8 shadow-[0_4px_20px_hsl(var(--primary)/0.3)]">
              <a href="https://calendly.com/dylanmazzei/60min" target="_blank" rel="noopener noreferrer">
                Apply for a Fractional Seat
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* When Fractional Makes Sense */}
      <section className="py-24 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-foreground mb-8">When Fractional Makes Sense</h2>
            <div className="p-8 md:p-12 bg-card border border-primary/20 rounded-3xl shadow-xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                A bad executive hire is the most expensive mistake a growing company can make—costing not just their salary, but the momentum lost while they figure things out. 
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Fractional leadership solves this. You plug an experienced operator and their backing teams directly into your C-suite. We manage your existing junior team, build the systems, own the KPIs, and steer the ship for a fraction of the cost, until you are large enough to bring the role in-house permanently.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles Offered */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-foreground">Roles Offered</h2>
            <p className="mt-4 text-lg text-muted-foreground font-medium">Every seat is Dylan Mazzei in the executive chair, backed by the specialist teams across his operating companies. You hire the executive. You get the operating group behind him.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col p-8 bg-card border border-secondary rounded-xl hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{role.title}</h3>
                      <p className="text-primary font-mono text-sm mt-1">{role.price}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mt-auto">
                    {role.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How the Engagement Works */}
      <section className="py-24 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-foreground">How the Engagement Works</h2>
          </motion.div>

          <div className="space-y-6">
            {engagementSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 p-6 bg-card border border-secondary rounded-xl"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0 shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
                  {i + 1}
                </div>
                <p className="text-lg text-foreground pt-1.5 leading-relaxed">{step}</p>
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
            className="mb-16 text-center"
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
                <div className="text-3xl font-black text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">0{i+1}</div>
                <p className="text-foreground relative z-10 leading-relaxed font-medium">{aud}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/30 border-b border-border">
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
            <h2 className="mb-6 text-foreground font-bold leading-tight">Leadership now. Headcount when you are ready.</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              Stop settling for execution without strategy. Plug a multi-venture operator and our specialist teams into your C-suite today.
            </p>
            <Button asChild size="lg" className="px-10 h-16 text-lg shadow-[0_4px_20px_hsl(var(--primary)/0.3)]">
              <a href="https://calendly.com/dylanmazzei/60min" target="_blank" rel="noopener noreferrer">Apply for a Fractional Seat</a>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default FractionalExecutiveRolesPage;