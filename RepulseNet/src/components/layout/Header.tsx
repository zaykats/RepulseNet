
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import JoinMovement from '../../pages/JoinMovement';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 backdrop-blur-lg bg-white/80 shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 mr-6">
  <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-repulse-500 text-white font-bold text-lg">
    <img src="../../../public/icon.png" alt="Logo" className="h-6 w-6" />
    <span className="absolute inset-0 rounded-full border border-repulse-400 animate-pulse-slow"></span>
  </span>
  <span className="text-xl font-bold tracking-tight">RepulseNet</span>
</Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-repulse-600">
              Home
            </Link>
            <Link to="/" className="text-sm font-medium transition-colors hover:text-repulse-600">
              Features
            </Link>
            <Link to="/" className="text-sm font-medium transition-colors hover:text-repulse-600">
              Story
            </Link>
            <Link to="/" className="text-sm font-medium transition-colors hover:text-repulse-600">
              Impact
            </Link>
            <Link to="/">
              <button className="px-4 py-2 rounded-full bg-repulse-500 text-white text-sm font-medium hover:bg-repulse-600 transition-colors">
                Join the Movement 
              </button>
            </Link>
          </nav>
          
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white dark:bg-dark-800 pt-20">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-8">
            <Link 
              to="/" 
              className="text-xl font-medium transition-colors hover:text-repulse-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/" 
              className="text-xl font-medium transition-colors hover:text-repulse-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/" 
              className="text-xl font-medium transition-colors hover:text-repulse-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Story
            </Link>
            <Link 
              to="/" 
              className="text-xl font-medium transition-colors hover:text-repulse-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </Link>
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="w-full px-6 py-3 rounded-full bg-repulse-500 text-white font-medium hover:bg-repulse-600 transition-colors">
                Join the Movement
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
