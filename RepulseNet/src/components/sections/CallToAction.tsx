
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedArrow from '../ui/AnimatedArrow';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-repulse-50 to-white dark:from-dark-900 dark:to-dark-800 -z-10"></div>
      
      {/* Animated circles */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-repulse-300/10 -right-64 -bottom-64 animate-float"></div>
      <div className="absolute w-[300px] h-[300px] rounded-full bg-repulse-500/10 -left-32 -bottom-32 animate-float animate-delay-1000"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
            Join The Movement
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Shape the Future of <span className="text-gradient">Urban Innovation</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            RepulseNet isn't just an app—it's a vision of sustainable progress, justice, and opportunity for all. Be part of a global transformation where innovation meets community-driven change.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/join" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 rounded-full bg-repulse-500 text-white font-medium hover:bg-repulse-600 transition-colors flex items-center justify-center gap-2 group">
                Get Started Now
                <AnimatedArrow direction="right" size="sm" />
              </button>
            </Link>
            <Link to="/startup-hub" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 hover:border-repulse-500 hover:text-repulse-600 transition-colors">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
