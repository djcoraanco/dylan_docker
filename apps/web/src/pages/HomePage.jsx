import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "WebSite",
      "@id": "https://dylanmazzei.com/#website",
      "url": "https://dylanmazzei.com",
      "name": "Dylan Mazzei",
      "publisher": {
        "@id": "https://dylanmazzei.com/#dylan"
      }
    }, {
      "@type": "Person",
      "@id": "https://dylanmazzei.com/#dylan",
      "name": "Dylan Mazzei",
      "url": "https://dylanmazzei.com",
      "email": "dylan@dylanmazzei.com",
      "image": "https://dylanmazzei.com/assets/dylan-mazzei.jpg",
      "jobTitle": "Founder & Operator",
      "description": "Multi-venture founder and operator running companies in marketing and AI search, AI software, e-commerce, education technology, and cybersecurity across the US and UAE.",
      "sameAs": ["https://instagram.com/caposins", "https://linkedin.com/in/dylanmazzei", "https://www.wikidata.org/wiki/Q140756776", "https://www.amazon.com/e/B0HCJJ1154"],
      "knowsAbout": ["SEO", "AI search optimization", "LLMO", "business formation", "supply chain management", "cybersecurity", "education technology", "AI implementation"]
    }]
  };
  const portfolioItems = [{
    industry: "MARKETING & AI SEARCH",
    description: "Agencies running SEO, AI search visibility, and paid media",
    link: "/portfolio"
  }, {
    industry: "AI SOFTWARE",
    description: "SaaS making search visibility measurable in the AI era",
    link: "/portfolio"
  }, {
    industry: "SPIRITS",
    description: "A consumer brand built from sourcing through distribution",
    link: "/portfolio"
  }, {
    industry: "EDUCATION TECHNOLOGY",
    description: "Co-founded edtech building student hardware and classroom software",
    link: "/portfolio"
  }, {
    industry: "CYBERSECURITY",
    description: "A security assessment platform for growing businesses",
    link: "/portfolio"
  }, {
    industry: "E-COMMERCE",
    description: "Product brands built on global supply chains",
    link: "/portfolio"
  }];
  return <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Dylan Mazzei | Multi-Venture Founder, Operator, Author</title>
        <meta name="description" content="Founder and operator of companies across marketing, AI software, spirits, edtech, and cybersecurity in the US and UAE. Four exits. Author of The Business Launch Playbook." />
        <link rel="canonical" href="https://dylanmazzei.com/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[95vh] flex items-center justify-center border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="max-w-3xl flex flex-col items-center text-center">
            <span className="text-primary small-caps mb-6 block">MULTI-VENTURE FOUNDER & OPERATOR</span>
            <h1 className="text-foreground mb-6">Dylan Mazzei</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl">
              Companies built, operated, and exited across six industries and two countries. Author of The Business Launch Playbook.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base">
                <Link to="/about">The Story</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary h-14 px-8 text-base bg-transparent">
                <Link to="/portfolio">The Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - NUMBERS BAND */}
      <section className="bg-secondary border-b border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-border">
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">8+</span>
              <span className="text-muted-foreground small-caps">Years Operating</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">4</span>
              <span className="text-muted-foreground small-caps">Exits</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">6</span>
              <span className="text-muted-foreground small-caps">Industries</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">2</span>
              <span className="text-muted-foreground small-caps">Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - THE STORY */}
      <section className="section-padding border-b border-border">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-[65ch]">
            <h2 className="text-foreground mb-8">Operator first.</h2>
            <p className="mb-6 text-left">
              Most business advice comes from people who advise. Mine comes from businesses I own. Over eight years I have built companies in marketing, AI software, spirits, e-commerce, education technology, and cybersecurity, and sold four along the way: an insurance agency, a marketing agency, a home health care business, and a clothing line.
            </p>
            <p className="mb-10 text-left">
              Running different industries at the same time shows you which principles are universal and which are folklore. That pattern recognition is the through-line in everything on this site.
            </p>
            <Link to="/about" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">Read the full story<ArrowRight className="ml-2 h-4 w-4" /></Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - THE PORTFOLIO */}
      <section className="section-padding bg-muted/50 border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mb-16">
            <h2 className="text-foreground text-center">What I operate today</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => <Link key={index} to={item.link} className="group block p-8 border border-border rounded-lg hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 bg-card shadow-sm hover:shadow-md">
                <div className="text-primary small-caps mb-4">{item.industry}</div>
                <p className="text-card-foreground/90 leading-relaxed m-0">{item.description}</p>
              </Link>)}
          </div>
        </div>
      </section>

      {/* SECTION 5 - WORK WITH ME */}
      <section className="py-32 md:py-40 flex items-center justify-center border-b border-border bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl text-foreground font-light leading-relaxed mb-10">
              When founders want an operator's read on their business, it starts with a diagnostic.
            </p>
            <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary h-14 px-10 text-base bg-transparent">
              <Link to="/consulting">Explore Consulting</Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>;
}
export default HomePage;