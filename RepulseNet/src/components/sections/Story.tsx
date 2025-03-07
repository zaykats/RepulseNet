
import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Zap, RefreshCw, Building } from 'lucide-react';

const Story = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-repulse-50 dark:from-dark-800 dark:to-dark-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
            Our Story
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Story of <span className="text-gradient">Renewal</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            How RepulseNet is transforming struggling cities into thriving hubs of collaboration, entrepreneurship, and hope.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-repulse-200 dark:bg-repulse-800 -translate-x-1/2 z-0"></div>
          
          <div className="relative z-10 space-y-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 order-2 md:order-1">
                <GlassCard className="p-8 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Building className="w-6 h-6 text-repulse-500" />
                    From Struggling to Thriving
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Urban areas facing economic decline, environmental challenges, and social disconnection are transformed through RepulseNet's integrated approach to city revitalization.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    By combining AI-powered waste management, community engagement, and entrepreneurial support, cities find new pathways to sustainable growth and prosperity.
                  </p>
                </GlassCard>
              </div>
              
              <div className="w-16 h-16 rounded-full bg-repulse-500 flex items-center justify-center text-white">
                <span className="text-2xl font-bold">1</span>
              </div>
              
              <div className="flex-1 order-3 md:order-3"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 order-2 md:order-1"></div>
              
              <div className="w-16 h-16 rounded-full bg-repulse-500 flex items-center justify-center text-white">
                <span className="text-2xl font-bold">2</span>
              </div>
              
              <div className="flex-1 order-3 md:order-3">
                <GlassCard className="p-8 animate-fade-in animate-delay-200">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <RefreshCw className="w-6 h-6 text-repulse-500" />
                    Connected Communities
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Once-divided neighborhoods now unite through shared resources, knowledge, and opportunities, creating stronger social bonds and resilience.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our platform breaks down barriers between different sectors of society, fostering collaboration between residents, businesses, and local governments.
                  </p>
                </GlassCard>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 order-2 md:order-1">
                <GlassCard className="p-8 animate-fade-in animate-delay-300">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-repulse-500" />
                    Sustainable Future
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Cities powered by RepulseNet become models of sustainability, with reduced waste, optimized resource usage, and environmentally conscious development.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    The integration of AI technology with community initiatives creates a blueprint for urban areas worldwide to address climate challenges while improving quality of life.
                  </p>
                </GlassCard>
              </div>
              
              <div className="w-16 h-16 rounded-full bg-repulse-500 flex items-center justify-center text-white">
                <span className="text-2xl font-bold">3</span>
              </div>
              
              <div className="flex-1 order-3 md:order-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
