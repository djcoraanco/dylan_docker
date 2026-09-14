import React from 'react';
import { Helmet } from 'react-helmet';
import PortfolioHeroSection from '@/components/PortfolioHeroSection';
import BrandPortfolioGrid from '@/components/BrandPortfolioGrid';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import IndustriesGrid from '@/components/IndustriesGrid';
import ClosingCTA from '@/components/ClosingCTA';

function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
        ],
        "knowsAbout": ["SEO", "AI search optimization", "LLMO", "business formation", "supply chain management", "cybersecurity", "education technology", "AI implementation"]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://dylanmazzei.com/portfolio/#webpage",
        "url": "https://dylanmazzei.com/portfolio",
        "name": "Venture Portfolio & Brands | Dylan Mazzei"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dylanmazzei.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Portfolio",
            "item": "https://dylanmazzei.com/portfolio"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Venture Portfolio & Brands | Dylan Mazzei</title>
        <meta name="description" content="Explore Dylan Mazzei's portfolio of successful ventures, board positions, and strategic growth systems across technology, marketing, and consumer brands." />
        <meta property="og:title" content="Venture Portfolio & Brands | Dylan Mazzei" />
        <meta property="og:description" content="Explore Dylan Mazzei's portfolio of successful ventures, board positions, and strategic growth systems across technology, marketing, and consumer brands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dylanmazzei.com/portfolio" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Venture Portfolio & Brands | Dylan Mazzei" />
        <meta name="twitter:description" content="Explore Dylan Mazzei's portfolio of successful ventures, board positions, and strategic growth systems across technology, marketing, and consumer brands." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/41732f5bd1fbc8d18015d92b91b66a02.png" />
        <link rel="canonical" href="https://dylanmazzei.com/portfolio" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <PortfolioHeroSection />
      <BrandPortfolioGrid />
      <CapabilitiesGrid />
      <IndustriesGrid />
      <ClosingCTA />
    </div>
  );
}

export default PortfolioPage;