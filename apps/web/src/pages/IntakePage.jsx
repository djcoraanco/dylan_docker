import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import DylanMazzeiLogo from '@/components/DylanMazzeiLogo';

export default function IntakePage() {
  const { toast } = useToast();
  
  // Initial state setup
  const [formData, setFormData] = useState({
    // Your Information (Required)
    fullName: '',
    company: '',
    email: '',
    phone: '',
    intakeCallDate: '',
    
    // Section A (Required)
    a1_legalInfo: '',
    a2_whatYouSell: '',
    a3_whyCustomersPickYou: '',
    a4_teamSize: '',
    a5_revenueRange: '',
    a5_profitabilityNote: '',
    a6_whyNow: '',
    
    // Section B (Optional)
    b1_channels: '',
    b2_lastTenCustomers: '',
    b3_customerValue: '',
    b4_searchPhrases: '',
    b5_salesProcess: '',
    b6_priceRaise: '',
    b7_marketingExecution: '',
    
    // Section C (Optional)
    c1_legalEntities: '',
    c2_operationsNoRegistration: '',
    c3_partners: '',
    c4_taxReview: '',
    c5_lawsuitExposure: '',
    c6_licensesAndLegal: '',
    
    // Section D (Optional)
    d1_deliverySteps: '',
    d2_vacationTest: '',
    d3_writtenProcesses: '',
    d4_softwareStack: '',
    d5_aiUsage: '',
    d6_threeNumbers: '',
    d7_todoList: '',
    d8_teamFeedback: '',
    
    // Section E (Optional)
    e1_financialGuess: '',
    e2_revenueStop: '',
    e3_debtObligations: '',
    e4_leastProfitable: '',
    e5_acquisitionBrag: '',
    
    // Section F (Optional)
    f1_adminAccess: '',
    f2_mfaEnforced: '',
    f3_passwordStorage: '',
    f4_fridayTest: '',
    f5_offboarding: '',
    f6_ransomwarePlan: '',
    f7_securityDocRequest: '',
    
    // Section G (Optional)
    g1_competitorAttack: '',
    g2_stopDoing: '',
    g3_mostPainfulLoss: '',
    g4_personalCompensation: '',
    g5_oneFix: '',
    
    // Section H (Optional)
    h_docs_pnl: false,
    h_docs_formation: false,
    h_docs_pricing: false,
    h_docs_marketing: false,
    h_docs_orgChart: false,
    h_docs_agreements: false,
    h_docs_notes: '',
    
    // Section I (Required)
    i1_twelveMonthsWin: '',
    i2_buildGoal: '',
    i3_mondayMorning: '',
    i4_unwillingToChange: '',
    i5_missedQuestions: '',
  });

  const [progress, setProgress] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('dylanmazzei_intake_form');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved form data", e);
      }
    }
  }, []);

  // Save to localStorage on change & update progress
  useEffect(() => {
    localStorage.setItem('dylanmazzei_intake_form', JSON.stringify(formData));
    
    // Calculate progress based on sections (10 sections total)
    const sections = [
      { // Your Info
        fields: ['fullName', 'company', 'email', 'phone', 'intakeCallDate'],
        required: true
      },
      { // Section A
        fields: ['a1_legalInfo', 'a2_whatYouSell', 'a3_whyCustomersPickYou', 'a4_teamSize', 'a5_revenueRange', 'a5_profitabilityNote', 'a6_whyNow'],
        required: true
      },
      { // Section B
        fields: ['b1_channels', 'b2_lastTenCustomers', 'b3_customerValue', 'b4_searchPhrases', 'b5_salesProcess', 'b6_priceRaise', 'b7_marketingExecution']
      },
      { // Section C
        fields: ['c1_legalEntities', 'c2_operationsNoRegistration', 'c3_partners', 'c4_taxReview', 'c5_lawsuitExposure', 'c6_licensesAndLegal']
      },
      { // Section D
        fields: ['d1_deliverySteps', 'd2_vacationTest', 'd3_writtenProcesses', 'd4_softwareStack', 'd5_aiUsage', 'd6_threeNumbers', 'd7_todoList', 'd8_teamFeedback']
      },
      { // Section E
        fields: ['e1_financialGuess', 'e2_revenueStop', 'e3_debtObligations', 'e4_leastProfitable', 'e5_acquisitionBrag']
      },
      { // Section F
        fields: ['f1_adminAccess', 'f2_mfaEnforced', 'f3_passwordStorage', 'f4_fridayTest', 'f5_offboarding', 'f6_ransomwarePlan', 'f7_securityDocRequest']
      },
      { // Section G
        fields: ['g1_competitorAttack', 'g2_stopDoing', 'g3_mostPainfulLoss', 'g4_personalCompensation', 'g5_oneFix']
      },
      { // Section H
        fields: ['h_docs_pnl', 'h_docs_formation', 'h_docs_pricing', 'h_docs_marketing', 'h_docs_orgChart', 'h_docs_agreements', 'h_docs_notes']
      },
      { // Section I
        fields: ['i1_twelveMonthsWin', 'i2_buildGoal', 'i3_mondayMorning', 'i4_unwillingToChange', 'i5_missedQuestions'],
        required: true
      }
    ];

    let completedSections = 0;
    
    sections.forEach(section => {
      let isSectionComplete = true;
      let hasAnyValue = false;

      section.fields.forEach(field => {
        const val = formData[field];
        const isFilled = typeof val === 'boolean' ? val === true : val.trim() !== '';
        
        if (section.required && !isFilled) {
          isSectionComplete = false;
        }
        if (isFilled) {
          hasAnyValue = true;
        }
      });

      if (section.required) {
        if (isSectionComplete) completedSections++;
      } else {
        if (hasAnyValue) completedSections++; // Optional section counts if they interacted with it
      }
    });

    const calculatedProgress = Math.min(100, Math.round((completedSections / sections.length) * 100));
    setProgress(calculatedProgress);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Auto-expand textarea
    if (type === 'textarea') {
      e.target.style.height = 'auto';
      e.target.style.height = (e.target.scrollHeight) + 'px';
    }
  };

  const handleCheckboxChange = (name, checked) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e) => {
    // Required field validation is handled by native HTML5 "required" attributes on inputs
    // Custom logic before actual form submission
    localStorage.removeItem('dylanmazzei_intake_form');
    toast({
      title: "Received.",
      description: "Your answers are in the assessment. Reminder: email your documents from Section H to dylan@dylanmazzei.com before your call.",
    });
    // FormSubmit.co takes over the actual submission action defined on the form tag
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Helmet>
        <title>Intake Questionnaire | Dylan Mazzei</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur z-10 sticky top-0 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="inline-block transition-opacity hover:opacity-80">
          <DylanMazzeiLogo imgStyle={{ height: '40px' }} />
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12 md:py-20">
        
        {/* Intro Section */}
        <div className="mb-12">
          <span className="small-caps text-primary mb-4 block">BUSINESS DIAGNOSTIC</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Intake Questionnaire</h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Your intake call is booked. This form is the first working session of your diagnostic, not paperwork before it. It takes roughly 65 minutes. Your progress saves automatically in this browser, so you can leave and return. Where a question does not fit your business model, write N/A and move on.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-secondary/50 p-6 rounded-lg border border-border">
              <span className="block text-3xl mb-4 font-serif text-primary/40">1</span>
              <p className="text-sm font-medium text-secondary-foreground leading-relaxed">
                Answer honestly, not impressively. I am not a judge, I am an auditor, and flattering answers only degrade your roadmap.
              </p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg border border-border">
              <span className="block text-3xl mb-4 font-serif text-primary/40">2</span>
              <p className="text-sm font-medium text-secondary-foreground leading-relaxed">
                Write unknown rather than guessing. Not knowing a number is itself a finding, and a useful one.
              </p>
            </div>
            <div className="bg-secondary/50 p-6 rounded-lg border border-border">
              <span className="block text-3xl mb-4 font-serif text-primary/40">3</span>
              <p className="text-sm font-medium text-secondary-foreground leading-relaxed">
                Where a question stings, that is usually the one worth slowing down on.
              </p>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-md border border-border/50 text-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="font-medium">Questions while completing this:</span>
            <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-muted-foreground">
              <a href="mailto:dylan@dylanmazzei.com" className="hover:text-primary transition-colors">dylan@dylanmazzei.com</a>
              <a href="tel:+971556470342" className="hover:text-primary transition-colors">UAE +971 55 647 0342</a>
              <a href="tel:8323500465" className="hover:text-primary transition-colors">US 832-350-0465</a>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="sticky top-20 z-10 bg-background/95 backdrop-blur-sm py-4 border-b border-border/50 mb-12">
          <div className="flex justify-between text-xs font-semibold uppercase tracking-wider mb-2 text-muted-foreground">
            <span>Completion Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-xs text-muted-foreground mt-2 italic">Your progress is saved on this device.</p>
        </div>

        {/* Form - Uses FormSubmit.co for endpoint service */}
        <form 
          action="https://formsubmit.co/dylan@dylanmazzei.com" 
          method="POST" 
          onSubmit={handleSubmit}
          className="space-y-16"
        >
          {/* FormSubmit config */}
          <input type="hidden" name="_subject" value={`Diagnostic Intake: ${formData.company || 'Company'} (${formData.fullName || 'Name'})`} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={window.location.href} />

          {/* YOUR INFORMATION */}
          <section className="space-y-8 bg-card border border-border rounded-xl p-6 md:p-10 shadow-sm">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Your Information</h2>
              <p className="text-sm text-muted-foreground">Required to match this intake to your booked session.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Full name <span className="text-destructive">*</span></label>
                <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Company <span className="text-destructive">*</span></label>
                <input required type="text" name="company" value={formData.company} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Email <span className="text-destructive">*</span></label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Phone <span className="text-destructive">*</span></label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground" />
              </div>
              <div className="space-y-3 md:col-span-2">
                <label className="text-sm font-semibold text-foreground">Intake call date <span className="text-destructive">*</span></label>
                <input required type="date" name="intakeCallDate" value={formData.intakeCallDate} onChange={handleChange} className="flex h-10 w-full md:w-1/2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground" />
              </div>
            </div>
          </section>

          {/* SECTION A */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Section A: The Business in Plain Language</h2>
              <p className="text-sm font-medium text-muted-foreground mb-2"><span className="text-primary font-semibold">Why I ask:</span> if the fundamentals cannot be stated simply, that shows up everywhere downstream, from marketing to hiring.</p>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">Required</span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">1. Legal business name, entity type, and state or country of formation. <span className="text-destructive">*</span></label>
                <textarea required name="a1_legalInfo" value={formData.a1_legalInfo} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">2. Explain what you sell and who buys it as if to a smart friend outside your industry. Two or three sentences, no industry language. <span className="text-destructive">*</span></label>
                <textarea required name="a2_whatYouSell" value={formData.a2_whatYouSell} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">3. Why do customers pick you over the alternative they were using before you? Not why they should. Why they actually do, in their words if you know them. <span className="text-destructive">*</span></label>
                <textarea required name="a3_whyCustomersPickYou" value={formData.a3_whyCustomersPickYou} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">4. Year founded. Team size today: employees and contractors, listed separately. <span className="text-destructive">*</span></label>
                <textarea required name="a4_teamSize" value={formData.a4_teamSize} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3 bg-secondary/20 p-5 rounded-lg border border-border">
                <label className="text-sm font-semibold text-foreground">5. Trailing 12-month revenue range, and whether the business is profitable today. <span className="text-destructive">*</span></label>
                <div className="space-y-4 pt-2">
                  <select required name="a5_revenueRange" value={formData.a5_revenueRange} onChange={handleChange} className="flex h-10 w-full md:w-1/2 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground">
                    <option value="" disabled>Select range</option>
                    <option value="Pre-revenue">Pre-revenue</option>
                    <option value="Under $250K">Under $250K</option>
                    <option value="$250K to $1M">$250K to $1M</option>
                    <option value="$1M to $5M">$1M to $5M</option>
                    <option value="$5M+">$5M+</option>
                  </select>
                  <textarea required placeholder="Profitability note (e.g. Yes, 20% net margin / No, burning $10k/mo)..." name="a5_profitabilityNote" value={formData.a5_profitabilityNote} onChange={handleChange} rows={2} className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">6. What prompted you to book this diagnostic now, rather than six months ago or six months from now? <span className="text-destructive">*</span></label>
                <textarea required name="a6_whyNow" value={formData.a6_whyNow} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
            </div>
          </section>

          {/* SECTION B */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Section B: Where the Money Comes From</h2>
              <p className="text-sm font-medium text-muted-foreground mb-2"><span className="text-primary font-semibold">Why I ask:</span> most businesses do not have a revenue problem or a marketing problem. They have a visibility problem, a conversion problem, or a pricing problem, and they treat all three with the same generic "more marketing." These questions separate them.</p>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">Optional</span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">1. List every channel that produced a customer in the last 90 days, in order of volume. Beside each: roughly what it costs you per month, in money or hours.</label>
                <textarea name="b1_channels" value={formData.b1_channels} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">2. Of your last ten customers, how many could you trace to a specific source? Trace them now if you can; the exercise is the point.</label>
                <textarea name="b2_lastTenCustomers" value={formData.b2_lastTenCustomers} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">3. What is a new customer worth over 12 months, and what does it cost you to get one? If unknown, write unknown; that answer shapes the roadmap more than most.</label>
                <textarea name="b3_customerValue" value={formData.b3_customerValue} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">4. Search yourself the way a stranger with your problem would. Which three phrases did you try, and where did you appear? Now ask ChatGPT or Perplexity who they would recommend for what you do. Did you come up? Paste what it said.</label>
                <textarea name="b4_searchPhrases" value={formData.b4_searchPhrases} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">5. Walk me from first contact to money in the bank: every step, every human touch, every place a deal can stall. Where do most deals actually die?</label>
                <textarea name="b5_salesProcess" value={formData.b5_salesProcess} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">6. When did you last raise prices, and what happened? If the answer is never, what do you predict would happen?</label>
                <textarea name="b6_priceRaise" value={formData.b6_priceRaise} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">7. Who executes your marketing today: in-house, agency, freelancers, or you personally? How do you judge whether they are doing a good job?</label>
                <textarea name="b7_marketingExecution" value={formData.b7_marketingExecution} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
            </div>
          </section>

          {/* SECTION C */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Section C: The Structure Underneath</h2>
              <p className="text-sm font-medium text-muted-foreground mb-2"><span className="text-primary font-semibold">Why I ask:</span> structure failures are silent until they are expensive. Nobody notices the wrong entity type, the unsigned partner agreement, or the missing registration until a tax bill, a dispute, or a deal makes them very loud.</p>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">Optional</span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">1. List every legal entity you own or co-own, its type, its jurisdiction, and in one line, why it exists.</label>
                <textarea name="c1_legalEntities" value={formData.c1_legalEntities} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">2. Where do you actually operate, sell, hire, or store inventory that has no corresponding registration? If unsure, list where you do business and I will check.</label>
                <textarea name="c2_operationsNoRegistration" value={formData.c2_operationsNoRegistration} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">3. Any partners or co-owners? Is every ownership split written and signed? If any part of the cap table lives on a handshake, say so here rather than letting me find it.</label>
                <textarea name="c3_partners" value={formData.c3_partners} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">4. How do you pay yourself, and when did a professional last review your tax posture? Year and who.</label>
                <textarea name="c4_taxReview" value={formData.c4_taxReview} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">5. If your business were sued tomorrow by your least happy customer or ex-employee, how exposed are your personal assets? What insurance stands between you and that?</label>
                <textarea name="c5_lawsuitExposure" value={formData.c5_lawsuitExposure} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">6. Any licenses your industry requires, and their status. Any pending or threatened legal matters, however small they currently feel.</label>
                <textarea name="c6_licensesAndLegal" value={formData.c6_licensesAndLegal} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
            </div>
          </section>

          {/* SECTION D */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Section D: How the Machine Runs</h2>
              <p className="text-sm font-medium text-muted-foreground mb-2"><span className="text-primary font-semibold">Why I ask:</span> the difference between owning a business and owning a job is whether the machine runs without your hands on it. These questions measure that distance precisely.</p>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">Optional</span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">1. Walk through delivery from order to done in 5 to 10 numbered steps. Mark each step with a name: who does it. Count how many steps carry your name.</label>
                <textarea name="d1_deliverySteps" value={formData.d1_deliverySteps} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">2. The vacation test: you disappear for two weeks, phone off. What breaks in week one? What breaks in week two? What secretly runs better?</label>
                <textarea name="d2_vacationTest" value={formData.d2_vacationTest} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">3. Which processes are written down well enough that a competent new hire could follow them tomorrow? Which exist only in someone's head, and whose head?</label>
                <textarea name="d3_writtenProcesses" value={formData.d3_writtenProcesses} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">4. List your software stack with monthly cost per tool. Star the ones you would fight to keep. Cross out any you suspect nobody has opened in a month.</label>
                <textarea name="d4_softwareStack" value={formData.d4_softwareStack} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">5. Where does AI do real work in your business today? Not tools you bought; work it actually does. If the answer is nowhere, that is the single most common finding I make, and usually the largest opportunity.</label>
                <textarea name="d5_aiUsage" value={formData.d5_aiUsage} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">6. What three numbers do you check most often, and how often do you check them? Then the harder one: which number do you avoid looking at?</label>
                <textarea name="d6_threeNumbers" value={formData.d6_threeNumbers} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">7. What has been on your to-do list for more than six months? Why has it survived there?</label>
                <textarea name="d7_todoList" value={formData.d7_todoList} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">8. If I called your longest-tenured team member and asked what slows the company down, what would they say? Answer as them, not as you.</label>
                <textarea name="d8_teamFeedback" value={formData.d8_teamFeedback} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
            </div>
          </section>

          {/* SECTION E */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Section E: The Financial Mirror</h2>
              <p className="text-sm font-medium text-muted-foreground mb-2"><span className="text-primary font-semibold">Why I ask:</span> I will read your P&L directly, so this section is not about the numbers themselves. It is about the distance between the numbers and your instincts, which tells me how the business is actually steered.</p>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">Optional</span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">1. Without opening your books: your best guess at last month's revenue, your gross margin on the core offer, and your three biggest expense lines. We will compare against the real P&L; the gap is diagnostic gold either way.</label>
                <textarea name="e1_financialGuess" value={formData.e1_financialGuess} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">2. If revenue stopped today, how many months until you personally feel it? How many until the business cannot make payroll?</label>
                <textarea name="e2_revenueStop" value={formData.e2_revenueStop} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">3. What does the business owe: debt, credit lines, deferred obligations, investor terms? Anything with a personal guarantee attached?</label>
                <textarea name="e3_debtObligations" value={formData.e3_debtObligations} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">4. Which product, service, or client do you suspect makes you the least money, or loses money, once real costs are counted? What keeps it alive?</label>
                <textarea name="e4_leastProfitable" value={formData.e4_leastProfitable} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">5. If a buyer offered to acquire this company next quarter, what would you brag about in the first meeting, and what would you quietly hope they never ask about?</label>
                <textarea name="e5_acquisitionBrag" value={formData.e5_acquisitionBrag} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
            </div>
          </section>

          {/* SECTION F */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Section F: The Attack Surface</h2>
              <p className="text-sm font-medium text-muted-foreground mb-2"><span className="text-primary font-semibold">Why I ask:</span> attackers automated years ago, and small businesses are the primary target precisely because nobody is checking these things. Every question below maps to a real loss pattern I have seen or assessed.</p>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">Optional</span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">1. Who holds admin access to your domain registrar, email, banking, and core software? Is that list written anywhere, or does it live in memory?</label>
                <textarea name="f1_adminAccess" value={formData.f1_adminAccess} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">2. Is multi-factor authentication enforced, not just available, on email and banking for every person who has access?</label>
                <textarea name="f2_mfaEnforced" value={formData.f2_mfaEnforced} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">3. How does your team store and share passwords? Be specific: a password manager, a spreadsheet, a group chat, or memory.</label>
                <textarea name="f3_passwordStorage" value={formData.f3_passwordStorage} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">4. The Friday afternoon test: your bookkeeper receives an email, apparently from you, urgently changing payment details on a real vendor invoice. Walk me through what happens in your company, step by step, honestly.</label>
                <textarea name="f4_fridayTest" value={formData.f4_fridayTest} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">5. When the last person left your company, on what day were their accounts and access actually closed? Who checked?</label>
                <textarea name="f5_offboarding" value={formData.f5_offboarding} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">6. If your primary system, files, or site were encrypted by ransomware tonight, what is your recovery plan, and when did you last test that a backup actually restores?</label>
                <textarea name="f6_ransomwarePlan" value={formData.f6_ransomwarePlan} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">7. Has any client, partner, or insurer asked you for security documentation? What did you send them?</label>
                <textarea name="f7_securityDocRequest" value={formData.f7_securityDocRequest} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
            </div>
          </section>

          {/* SECTION G */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Section G: Pressure Tests</h2>
              <p className="text-sm font-medium text-muted-foreground mb-2"><span className="text-primary font-semibold">Why I ask:</span> these five questions have no comfortable answers, and they surface more truth per line than the rest of the questionnaire combined. Short answers are fine. Honest ones are mandatory.</p>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">Optional</span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">1. A competitor with serious funding decides to take your customers in 90 days. What do they attack first, because you know it is weak?</label>
                <textarea name="g1_competitorAttack" value={formData.g1_competitorAttack} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">2. What do you know you should stop doing, and have not? What is the stopping costing you?</label>
                <textarea name="g2_stopDoing" value={formData.g2_stopDoing} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">3. Which customer would hurt most to lose, what percentage of revenue are they, and when did you last do something deliberate to keep them?</label>
                <textarea name="g3_mostPainfulLoss" value={formData.g3_mostPainfulLoss} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">4. What part of the business works only because you personally compensate for it, and what would it cost to fix properly?</label>
                <textarea name="g4_personalCompensation" value={formData.g4_personalCompensation} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">5. If you could only fix one thing in the next 90 days, and everything else stayed exactly as it is, what would you fix? Do not optimize this answer. First instinct.</label>
                <textarea name="g5_oneFix" value={formData.g5_oneFix} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
            </div>
          </section>

          {/* SECTION H */}
          <section className="space-y-8 bg-secondary/10 p-6 rounded-xl border border-border">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Section H: Documents to Attach</h2>
              <p className="text-sm font-medium text-muted-foreground mb-2"><span className="text-primary font-semibold">Why I ask:</span> send what exists; missing items are findings, not failures.</p>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-muted text-muted-foreground">Optional</span>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-sm font-semibold mb-6 flex items-center">
                  <span className="bg-primary/20 text-primary p-1 rounded-md mr-3 text-xs uppercase tracking-wider font-bold">Action</span>
                  Email these documents to dylan@dylanmazzei.com with your company name in the subject line.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'h_docs_pnl', label: 'Last 12 months profit and loss' },
                    { id: 'h_docs_formation', label: 'Formation documents for each entity' },
                    { id: 'h_docs_pricing', label: 'Current price list or rate card' },
                    { id: 'h_docs_marketing', label: 'Marketing and analytics exports' },
                    { id: 'h_docs_orgChart', label: 'Org chart or list of who does what' },
                    { id: 'h_docs_agreements', label: 'Partnership or operating agreements' },
                  ].map((item) => (
                    <div key={item.id} className="flex items-start space-x-3">
                      <Checkbox 
                        id={item.id} 
                        checked={formData[item.id]} 
                        onCheckedChange={(checked) => handleCheckboxChange(item.id, checked)}
                      />
                      <label htmlFor={item.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer pt-0.5">
                        {item.label}
                      </label>
                      {/* Hidden inputs to pass checkbox state to form submission */}
                      <input type="hidden" name={item.id} value={formData[item.id] ? "Yes" : "No"} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">List anything from this list that does not exist, and anything extra you are sending.</label>
                <textarea name="h_docs_notes" value={formData.h_docs_notes} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
            </div>
          </section>

          {/* SECTION I */}
          <section className="space-y-8">
            <div className="border-b border-border pb-4">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Section I: The Finish Line</h2>
              <p className="text-sm font-medium text-muted-foreground mb-2"><span className="text-primary font-semibold">Why I ask:</span> a roadmap built toward the wrong destination is worse than no roadmap. This section sets the destination.</p>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">Required</span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">1. Twelve months from now, what has to be true for you to call this a win? Numbers where possible, feelings where not. <span className="text-destructive">*</span></label>
                <textarea required name="i1_twelveMonthsWin" value={formData.i1_twelveMonthsWin} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">2. Are you building this to keep and run, to hand to a team, or to sell? Your honest answer changes the roadmap materially. <span className="text-destructive">*</span></label>
                <textarea required name="i2_buildGoal" value={formData.i2_buildGoal} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">3. Describe the Monday morning after this all works: what does your week look like that it does not look like now? <span className="text-destructive">*</span></label>
                <textarea required name="i3_mondayMorning" value={formData.i3_mondayMorning} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">4. What are you unwilling to change, no matter what the audit finds? Naming it now saves us both from a roadmap you will not run. <span className="text-destructive">*</span></label>
                <textarea required name="i4_unwillingToChange" value={formData.i4_unwillingToChange} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">5. Anything I did not ask about that you suspect I should have? <span className="text-destructive">*</span></label>
                <textarea required name="i5_missedQuestions" value={formData.i5_missedQuestions} onChange={handleChange} rows={3} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground resize-none" />
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-8 pb-12">
            <Button type="submit" size="lg" className="w-full md:w-auto px-12 h-14 text-lg font-bold">
              Submit My Intake
            </Button>
            <p className="text-sm text-muted-foreground mt-4 text-center md:text-left">
              By submitting, your answers will be sent securely for review prior to your session.
            </p>
          </div>
        </form>
      </main>

      {/* Footer Minimal */}
      <footer className="border-t border-border py-8 mt-auto bg-card">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          Dylan Mazzei Consulting | Confidential | <a href="mailto:dylan@dylanmazzei.com" className="hover:text-primary transition-colors">dylan@dylanmazzei.com</a>
        </div>
      </footer>
    </div>
  );
}