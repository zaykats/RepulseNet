
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circleRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      // Get window dimensions
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate percentage across screen (from -10 to 10)
      const xPercent = ((x / windowWidth) - 0.5) * 20;
      const yPercent = ((y / windowHeight) - 0.5) * 20;
      
      // Apply subtle transform
      circleRef.current.style.transform = `translate(${xPercent}px, ${yPercent}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div 
        ref={circleRef}
        className="absolute opacity-30 blur-[100px] rounded-full w-[400px] h-[400px] bg-repulse-500/40 -right-40 top-40 transition-transform duration-300 ease-out"
      ></div>
      <div className="absolute opacity-20 blur-[100px] rounded-full w-[300px] h-[300px] bg-repulse-600/30 -left-20 top-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
              Welcome to RepulseNet
              <span className="ml-2 h-1.5 w-1.5 rounded-full bg-repulse-500 animate-pulse"></span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up">
            <span className="text-gradient">WHERE CITIES FIND</span> <br />
            THEIR PULSE AGAIN
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up animate-delay-200">
            Transforming urban landscapes through AI-powered solutions, community collaboration, and sustainable innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-300">
            <Link to="/join" className="w-full sm:w-auto">
              <button className="w-full px-6 py-3 rounded-full bg-repulse-500 text-white font-medium hover:bg-repulse-600 transition-colors flex items-center justify-center gap-2 group">
                Join the Movement
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link to="/startup-hub" className="w-full sm:w-auto">
              <button className="w-full px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-repulse-500 hover:text-repulse-600 transition-colors">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
