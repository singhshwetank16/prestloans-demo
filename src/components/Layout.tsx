import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { Modals } from './Modals';
import { ScrollToTop } from './ScrollToTop';

export const Layout: React.FC = () => {
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
