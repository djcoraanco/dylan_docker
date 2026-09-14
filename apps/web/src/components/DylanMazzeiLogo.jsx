import React, { useState, useEffect } from 'react';

function DylanMazzeiLogo({ className = "", imgStyle = {} }) {
  // Light mode displays the navy text logo
  const lightLogo = "https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/6995ab2d6ddc8a61fc099cbf42438fcd.png";
  // Dark mode displays the white text logo
  const darkLogo = "https://horizons-cdn.hostinger.com/36d537b2-6a44-466e-b4f5-6f4b52ea69c7/696a408712f13791984c8c8c8557ff6b.png";

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial check
    setIsDark(document.documentElement.classList.contains('dark'));

    // Observe changes to the html class attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img 
        src={isDark ? darkLogo : lightLogo} 
        alt="Dylan Mazzei Logo" 
        className="object-contain block max-w-none transition-opacity duration-300"
        style={{ width: 'auto', height: '208px', ...imgStyle }}
      />
    </div>
  );
}

export default DylanMazzeiLogo;