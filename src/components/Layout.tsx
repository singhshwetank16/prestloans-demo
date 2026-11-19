import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { Modals } from './Modals';
import { ScrollToTop } from './ScrollToTop';

export const Layout: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof (window as any).initApp === 'function') {
      (window as any).initApp();
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className={`site-sticky-header ${isScrolled ? 'scrolled' : ''}`}>
        <TopBar />
        <Header />
      </div>
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <Modals />
    </>
  );
};
