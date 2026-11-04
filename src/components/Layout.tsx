import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { Modals } from './Modals';
import { ScrollToTop } from './ScrollToTop';

export const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof (window as any).initApp === 'function') {
      (window as any).initApp();
    }
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <Modals />
    </>
  );
};
