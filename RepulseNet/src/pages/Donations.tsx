
import React from 'react';
import { Heart, BarChart3, Shield, Users, LucideLifeBuoy } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import { Button } from '@/components/ui/button';

const Donations = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute opacity-30 blur-[100px] rounded-full w-[400px] h-[400px] bg-repulse-500/40 -left-40 top-40"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
              Community Support
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Transparent</span> Donation System
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              A revolutionary approach ensuring every contribution reaches its intended destination with complete transparency and accountability.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 mb-16">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Donation Impact Dashboard</h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-repulse-500 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Impact dashboard coming soon</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/30 flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Track your donations and see their real-world impact in real-time.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4 items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Blockchain Verified</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every transaction is recorded on the blockchain, ensuring transparency and immutability.
                </p>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4 items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Community Voting</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Donors can participate in deciding how funds are allocated to different community needs.
                </p>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4 items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <LucideLifeBuoy className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Direct Impact</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect directly with the people and projects your donations are helping.
                </p>
              </div>
            </GlassCard>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 text-center">
              <Heart className="w-12 h-12 text-repulse-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Coming Soon: Make a Difference Today</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our transparent donation system is currently in development. Join our waitlist to be among the first to contribute when we launch.
              </p>
              <div className="flex justify-center">
                <Button className="bg-repulse-500 hover:bg-repulse-600">Join Waitlist</Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Donations;
