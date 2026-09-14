import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Send, Phone, Calendar } from 'lucide-react';

function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load Calendly script asynchronously on component mount
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await fetch("https://formsubmit.co/ajax/dylan@dylanmazzei.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Form: "General Inquiry - DylanMazzei.com",
          ...data
        })
      });
      
      toast({
        title: "Inquiry Received",
        description: "Thank you for reaching out. A team member will respond shortly.",
      });
      e.target.reset();
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem sending your inquiry. Please email dylan@dylanmazzei.com directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneNumbers = [
    { region: "Texas", number: "832-350-0465", link: "8323500465" },
    { region: "Florida", number: "954-235-4974", link: "9542354974" },
    { region: "New York", number: "713-289-4577", link: "7132894577" },
    { region: "UAE", number: "+971 55 647 0342", link: "+971556470342" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://dylanmazzei.com/#dylan",
        "name": "Dylan Mazzei",
        "url": "https://dylanmazzei.com",
        "email": "dylan@dylanmazzei.com",
        "jobTitle": "Founder & Operator",
        "description": "Multi-venture founder and operator running companies in marketing and AI search, AI software, e-commerce, education technology, and cybersecurity across the US and UAE.",
        "sameAs": [
          "https://www.instagram.com/caposins",
          "https://www.linkedin.com/in/dylanmazzei/",
          "https://www.wikidata.org/wiki/Q140756776"
        ],
        "knowsAbout": ["SEO", "AI search optimization", "LLMO", "business formation", "supply chain management", "cybersecurity", "education technology", "AI implementation"]
      },
      {
        "@type": "ContactPage",
        "@id": "https://dylanmazzei.com/contact/#webpage",
        "url": "https://dylanmazzei.com/contact",
        "name": "Contact Dylan Mazzei | Strategic Partnerships & Consulting"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <Helmet>
        <title>Contact Dylan Mazzei | Strategic Partnerships & Consulting</title>
        <meta name="description" content="Get in touch with Dylan Mazzei for strategic consulting, board advisory, partnerships, and business inquiries across global operations." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Let's <span className="text-primary">Connect.</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Exploring new ventures, strategic partnerships, and consulting opportunities globally.
          </p>
        </motion.div>

        {/* Quick Contact Info Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="flex items-center bg-card p-6 rounded-2xl border border-secondary group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-secondary text-primary rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary/10">
              <Mail size={22} />
            </div>
            <div className="ml-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">Direct Email</h2>
              <a href="mailto:dylan@dylanmazzei.com" className="text-lg md:text-xl font-medium text-foreground hover:text-primary transition-colors">dylan@dylanmazzei.com</a>
            </div>
          </div>

          <div className="flex items-center bg-card p-6 rounded-2xl border border-secondary group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 bg-secondary text-primary rounded-xl flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary/10">
              <MapPin size={22} />
            </div>
            <div className="ml-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">Global Presence</h2>
              <p className="text-lg md:text-xl font-medium text-foreground">Texas • Florida • New York • Dubai</p>
            </div>
          </div>
        </motion.div>

        {/* Main Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Contact Form & Phone Numbers */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            {/* Contact Form */}
            <div className="bg-card p-8 md:p-10 rounded-[2rem] border border-secondary shadow-xl relative overflow-hidden flex-grow">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              
              <h2 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
                <Send className="text-primary" size={24} />
                Send an Inquiry
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <input type="hidden" name="_subject" value="New Inquiry via DylanMazzei.com" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-muted-foreground uppercase text-xs tracking-wider font-bold">First Name</Label>
                    <Input id="firstName" name="firstName" required className="h-12 border-secondary bg-input focus-visible:ring-primary focus-visible:border-primary text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-muted-foreground uppercase text-xs tracking-wider font-bold">Last Name</Label>
                    <Input id="lastName" name="lastName" required className="h-12 border-secondary bg-input focus-visible:ring-primary focus-visible:border-primary text-foreground" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-muted-foreground uppercase text-xs tracking-wider font-bold">Email Address</Label>
                  <Input id="email" name="email" type="email" required className="h-12 border-secondary bg-input focus-visible:ring-primary focus-visible:border-primary text-foreground" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-muted-foreground uppercase text-xs tracking-wider font-bold">Message</Label>
                  <Textarea id="message" name="message" required className="min-h-[120px] border-secondary bg-input focus-visible:ring-primary focus-visible:border-primary text-foreground resize-none" />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-primary hover:bg-accent text-primary-foreground rounded-xl text-lg font-semibold flex items-center justify-center gap-2 group shadow-[0_0_20px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)] transition-all">
                  {isSubmitting ? 'Sending...' : 'Submit Details'}
                  {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </Button>
              </form>
            </div>

            {/* Phone Numbers Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {phoneNumbers.map((phone, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <a href={`tel:${phone.link}`} className="block h-full group">
                    <Card className="h-full bg-card border-secondary hover:bg-secondary hover:border-primary/50 transition-all duration-300 shadow-none">
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shrink-0">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-foreground/80 transition-colors">
                            {phone.region}
                          </p>
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {phone.number}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Calendly Widget */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col h-full"
          >
            <div className="bg-card p-8 md:p-10 rounded-[2rem] border border-secondary shadow-xl relative overflow-hidden flex flex-col h-full min-h-[700px]">
              <div className="absolute top-0 right-0 w-full h-1 bg-primary"></div>
              
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Calendar className="text-primary" size={24} />
                Schedule a Consultation
              </h2>
              
              <div className="flex-grow w-full rounded-xl overflow-hidden border border-secondary/50 bg-background/50 relative">
                {/* 
                  Calendly Inline Widget 
                  Configured with hex colors approximating the dark theme: 
                  Background: #0a0f1a (deep navy)
                  Text: #ffffff 
                  Primary: #1e7ff2 (blue) 
                */}
                <div 
                  className="calendly-inline-widget w-full h-full absolute inset-0" 
                  data-url="https://calendly.com/dylanmazzei/60min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0f1a&text_color=ffffff&primary_color=1e7ff2"
                ></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default ContactPage;