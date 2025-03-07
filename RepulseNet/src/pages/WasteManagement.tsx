
import React from 'react';
import { Recycle, MapPin, UtensilsCrossed, Truck, BarChart3 } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import AnimatedArrow from '../components/ui/AnimatedArrow';

const WasteManagement = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute opacity-30 blur-[100px] rounded-full w-[400px] h-[400px] bg-repulse-500/40 -left-40 top-40"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
              Smart Solutions
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Waste Management & <span className="text-gradient">Food Redistribution</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              AI-driven solutions for sustainable urban development and resource optimization, ensuring nothing goes to waste in our communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <Recycle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Intelligent Waste Management</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Our AI-driven system optimizes waste collection routes, monitors recycling efficiency, and provides real-time data on environmental impact.
                </p>
                <Button variant="link" className="px-0 flex items-center text-repulse-600 text-sm font-medium">
                  Coming Soon
                  <AnimatedArrow size="sm" />
                </Button>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Food Redistribution Network</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Connect restaurants and supermarkets with food banks and shelters to ensure excess food reaches those in need instead of landfills.
                </p>
                <Button variant="link" className="px-0 flex items-center text-repulse-600 text-sm font-medium">
                  Coming Soon
                  <AnimatedArrow size="sm" />
                </Button>
              </div>
            </GlassCard>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 mb-16">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Interactive Resource Map</h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-repulse-500 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Interactive map coming soon</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/30 flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our interactive map will show donation centers, recycling facilities, and collection points.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Smart Collection System</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Schedule pickups for donations or recyclables through our platform, with AI-optimized routes for efficiency.
                </p>
                <Button variant="link" className="px-0 flex items-center text-repulse-600 text-sm font-medium">
                  Coming Soon
                  <AnimatedArrow size="sm" />
                </Button>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Impact Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Track your contribution to sustainability with detailed metrics on waste reduction, carbon footprint, and community impact.
                </p>
                <Button variant="link" className="px-0 flex items-center text-repulse-600 text-sm font-medium">
                  Coming Soon
                  <AnimatedArrow size="sm" />
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WasteManagement;
