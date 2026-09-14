import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

// Inject Google Analytics script asynchronously
const trackingId = 'G-P9H24L6WM5';
const gaScript = document.createElement('script');
gaScript.async = true;
gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
document.head.appendChild(gaScript);

// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
window.gtag = gtag; // Expose globally
gtag('js', new Date());
gtag('config', trackingId);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);