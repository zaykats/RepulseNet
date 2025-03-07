
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-800 text-dark-900 dark:text-white relative overflow-hidden">
      <Header />
      <main className={className}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
