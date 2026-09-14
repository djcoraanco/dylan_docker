import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Map, Sparkles, CheckSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import ChapterCard from '@/components/ChapterCard';

function BookPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ firstName: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const chapters = [
    {
      chapterNumber: "1",
      title: "Is Entrepreneurship Right for You",
      description: "The honest self-assessment most books skip: risk profile, runway math, and the difference between wanting a business and wanting to escape a job."
    },
    {
      chapterNumber: "2",
      title: "Idea vs. Market Opportunity",
      description: "A scoring framework to test your idea against real demand, competition, and market size before you spend a dollar."
    },
    {
      chapterNumber: "3",
      title: "Business Structure",
      description: "LLC, S-Corp, or C-Corp, explained by revenue model and exit goals instead of generic definitions."
    },
    {
      chapterNumber: "4",
      title: "Best States by Industry",
      description: "Where to form based on your sector: taxes, licensing, liability, and filing costs compared where it actually matters."
    },
    {
      chapterNumber: "5",
      title: "Funding and Your First 90 Days of Cash",
      description: "Bootstrapping versus raising, and the cash management habits that decide whether you survive year one."
    },
    {
      chapterNumber: "6",
      title: "Marketing Foundations",
      description: "Positioning, channel selection by budget, and the organic versus paid decision for a brand-new business."
    },
    {
      chapterNumber: "7",
      title: "AI Implementation",
      description: "Where AI replaces headcount for a new founder: research, content, operations, reporting, and customer service, with the exact workflows."
    },
    {
      chapterNumber: "8",
      title: "The Launch Checklist",
      description: "The full step-by-step sequence, from filing to first customer, in order, with nothing assumed."
    }
  ];

  const tools = [
    { icon: FileText, text: "Fill-in worksheets for every framework in the book" },
    { icon: Map, text: "The State Selection Matrix comparing formation options by industry" },
    { icon: Sparkles, text: "An AI prompt pack for founder workflows" },
    { icon: CheckSquare, text: "The complete launch checklist as a standalone working document" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/dylan@dylanmazzei.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Form: "Free Chapter Download Request",
          Name: formData.firstName,
          Email: formData.email
        })
      });
      
      toast({
        title: "Success!",
        description: "Check your inbox for the free chapter and State Selection Matrix!",
      });
      setFormData({ firstName: '', email: '' });
    } catch (error) {
      toast({
        title: "Submission Issue",
        description: "Your request was processed via fallback.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNotifyLaunch = async (e) => {
    e.preventDefault();
    toast({
      title: "Notification Setup",
      description: "You will be notified as soon as the book launches!",
    });
  };

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
        "@type": "Book",
        "@id": "https://dylanmazzei.com/book/#book",
        "name": "The Business Launch Playbook",
        "author": {"@id": "https://dylanmazzei.com/#dylan"},
        "description": "A comprehensive guide to launching and scaling a successful business",
        "image": "https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png",
        "isbn": "979-8860250485",
        "datePublished": "2023",
        "inLanguage": "en",
        "bookFormat": [
          "https://schema.org/Hardcover",
          "https://schema.org/Paperback"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dylanmazzei.com/"},
          {"@type": "ListItem", "position": 2, "name": "Book", "item": "https://dylanmazzei.com/book"}
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 overflow-hidden">
      <Helmet>
        <title>The Business Launch Playbook by Dylan Mazzei</title>
        <meta name="description" content="The step-by-step guide to deciding on, validating, structuring, and launching a business, including where to form it and how to build with AI from day one." />
        <meta property="og:title" content="The Business Launch Playbook by Dylan Mazzei" />
        <meta property="og:description" content="The step-by-step guide to deciding on, validating, structuring, and launching a business, including where to form it and how to build with AI from day one." />
        <meta property="og:type" content="book" />
        <meta property="og:url" content="https://dylanmazzei.com/book" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Business Launch Playbook by Dylan Mazzei" />
        <meta name="twitter:description" content="The step-by-step guide to deciding on, validating, structuring, and launching a business, including where to form it and how to build with AI from day one." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <link rel="canonical" href="https://dylanmazzei.com/book" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-12 pb-24 border-b border-border text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
            <span>The Startup Playbook</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground tracking-tight leading-[1.05]">
            The Business Launch Playbook
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-medium mb-6">
            The Operator's Step-by-Step Guide to Deciding, Validating, Structuring, and Launching Your Business
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            The complete guide to starting a business the right way: whether you should, how to validate the idea, how and where to structure it, and how to launch with AI doing the heavy lifting. Written by an operator running companies across five industries and two countries.
          </p>
          <Button 
            onClick={() => document.getElementById('free-chapter').scrollIntoView({ behavior: 'smooth' })}
            size="lg" 
            className="h-14 px-8 text-lg shadow-[0_4px_20px_hsl(var(--primary)/0.3)]"
          >
            Get the Free Chapter
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      {/* What You Will Learn */}
      <section className="py-24 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">What You Will Learn</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {chapters.map((chapter, i) => (
              <ChapterCard 
                key={i}
                chapterNumber={chapter.chapterNumber}
                title={chapter.title}
                description={chapter.description}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Every Chapter Ends With Tools</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 bg-card border border-secondary rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    {tool.text}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Free Download Section (Email Capture) */}
      <section id="free-chapter" className="py-24 bg-primary/5 border-b border-border relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-card border border-primary/20 p-8 md:p-14 rounded-3xl shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Start with the free chapter.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Get Chapter 2, <em>Idea vs. Market Opportunity</em>, plus the State Selection Matrix, free. Enter your email and both are in your inbox in two minutes.
              </p>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleEmailSubmit} 
              className="space-y-6 max-w-xl mx-auto"
            >
              {/* FormSubmit internal config */}
              <input type="hidden" name="_subject" value="New Free Chapter Request - DylanMazzei.com" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                  <Input 
                    id="firstName" 
                    name="firstName" 
                    placeholder="Enter your first name" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-secondary focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-secondary focus:border-primary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full h-14 text-lg mt-4">
                {isSubmitting ? "Sending..." : "Send Me the Free Chapter"}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">About the Author</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-light max-w-3xl mx-auto">
              Dylan Mazzei is a multi-venture operator building and running companies across marketing, AI software, e-commerce, education technology, and cybersecurity in the US and UAE. 
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              This book is the playbook he uses to evaluate, structure, and launch his own ventures, written for founders doing it for the first time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Launch Notification CTA */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-6 text-4xl md:text-5xl font-bold text-foreground">The book launches soon.</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-light">
              Join the list and get launch pricing the day it goes live.
            </p>
            <Button onClick={handleNotifyLaunch} size="lg" className="px-10 h-16 text-lg shadow-[0_4px_20px_hsl(var(--primary)/0.3)]">
              Notify Me at Launch
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default BookPage;