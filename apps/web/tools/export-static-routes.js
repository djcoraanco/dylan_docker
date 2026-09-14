#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(APP_DIR, '../../dist');

const routes = [
  { path: '/', file: 'HomePage.jsx', title: 'Dylan Mazzei | Personal Website & Executive Portfolio', desc: 'Personal website and executive portfolio of Dylan Mazzei.' },
  { path: '/about', file: 'AboutPage.jsx', title: 'About Dylan Mazzei | Operator, Founder, Author', desc: 'Learn more about Dylan Mazzei, operational executive, venture founder, and author.' },
  { path: '/book', file: 'BookPage.jsx', title: 'The Practical Playbook for Success | Dylan Mazzei', desc: 'Official book by Dylan Mazzei detailing actionable frameworks for executive leadership and operational excellence.' },
  { path: '/consulting', file: 'ConsultingPage.jsx', title: 'Strategic Consulting & Advisory | Dylan Mazzei', desc: 'Strategic consulting and advisory services across marketing, business setup, supply chain, and executive leadership.' },
  { path: '/consulting/marketing', file: 'MarketingConsultingPage.jsx', title: 'Marketing Consulting | Dylan Mazzei', desc: 'Performance marketing and brand growth strategies.' },
  { path: '/consulting/business-setup', file: 'BusinessSetupConsultingPage.jsx', title: 'Business Setup Consulting | Dylan Mazzei', desc: 'Comprehensive entity structuring, compliance, and launch operations.' },
  { path: '/consulting/business-optimization', file: 'BusinessOptimizationConsultingPage.jsx', title: 'Business Optimization | Dylan Mazzei', desc: 'Streamline operations, optimize cost structures, and maximize margins.' },
  { path: '/consulting/supply-chain', file: 'SupplyChainConsultingPage.jsx', title: 'Supply Chain Consulting | Dylan Mazzei', desc: 'Resilient logistics, vendor management, and end-to-end supply chain execution.' },
  { path: '/consulting/cybersecurity', file: 'CybersecurityConsultingPage.jsx', title: 'Cybersecurity Consulting | Dylan Mazzei', desc: 'Information security, compliance audits, and proactive risk mitigation.' },
  { path: '/consulting/education', file: 'EducationConsultingPage.jsx', title: 'Education Consulting | Dylan Mazzei', desc: 'Curriculum innovation, ed-tech integration, and workforce readiness programs.' },
  { path: '/consulting/fractional', file: 'FractionalExecutiveRolesPage.jsx', title: 'Fractional Executive Leadership | Dylan Mazzei', desc: 'High-impact COO, CMO, or Advisory leadership for scaling organizations.' },
  { path: '/portfolio', file: 'PortfolioPage.jsx', title: 'Venture Portfolio & Brands | Dylan Mazzei', desc: 'Explore the portfolio of companies and ventures founded or operated by Dylan Mazzei.' },
  { path: '/press', file: 'PressPage.jsx', title: 'Press & Media Mentions | Dylan Mazzei', desc: 'Featured articles, podcast interviews, and media appearances with Dylan Mazzei.' },
  { path: '/contact', file: 'ContactPage.jsx', title: 'Contact & Consultation | Dylan Mazzei', desc: 'Get in touch or book an advisory consultation directly with Dylan Mazzei.' },
  { path: '/intake-dq7k2m', file: 'IntakePage.jsx', title: 'Consulting Intake Assessment | Dylan Mazzei', desc: 'Strategic intake questionnaire for new consulting engagements.' }
];

function exportStaticRoutes() {
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.warn('⚠️ dist/index.html not found, skipping static routes generation.');
    return;
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  // 1. Create dist/404.html (essential for GitHub Pages and static hosts)
  const notFoundPath = path.join(DIST_DIR, '404.html');
  fs.writeFileSync(notFoundPath, baseHtml, 'utf8');
  console.log('✅ Created dist/404.html for SPA fallback');

  // 2. Generate static HTML files for every route
  for (const route of routes) {
    if (route.path === '/') continue;

    const routeDir = path.join(DIST_DIR, route.path.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    let pageHtml = baseHtml;

    // Update title and description if present
    if (route.title) {
      pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);
      pageHtml = pageHtml.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${route.title}" />`);
      pageHtml = pageHtml.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${route.title}" />`);
    }

    if (route.desc) {
      pageHtml = pageHtml.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${route.desc}" />`);
      pageHtml = pageHtml.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${route.desc}" />`);
      pageHtml = pageHtml.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${route.desc}" />`);
    }

    const targetFile = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetFile, pageHtml, 'utf8');
    console.log(`✅ Exported static route: ${route.path} -> ${path.relative(DIST_DIR, targetFile)}`);
  }

  console.log('🎉 All static routes successfully generated in dist/');
}

exportStaticRoutes();
