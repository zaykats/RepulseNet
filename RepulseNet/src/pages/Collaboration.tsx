
import React from 'react';
import { Users, Zap, Globe, MessageSquare, Sparkles } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import { Button } from '@/components/ui/button';

const Collaboration = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute opacity-30 blur-[100px] rounded-full w-[400px] h-[400px] bg-repulse-500/40 -right-40 top-40"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
              Global Network
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Futuristic</span> Collaboration Hub
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Connect with tech enthusiasts, investors, and changemakers to drive meaningful action and innovation for cities worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="md:col-span-2">
              <GlassCard className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 flex-shrink-0 bg-repulse-100 dark:bg-repulse-900/20 rounded-full flex items-center justify-center">
                    <Globe className="w-16 h-16 text-repulse-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Global Collaboration Network</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our platform connects change-makers from around the world, breaking down geographical barriers to collaboration and innovation.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Through virtual collaboration spaces, cross-sector challenges, and AI-facilitated connections, we're building a global community dedicated to urban transformation.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Forums & Discussion Boards</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Engage in meaningful conversations with experts, enthusiasts, and community leaders from diverse backgrounds and sectors.
                </p>
                <Button variant="outline" className="mt-4">Coming Soon</Button>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Innovation Challenges</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Participate in cross-sector challenges designed to spark creativity and develop solutions for pressing urban issues.
                </p>
                <Button variant="outline" className="mt-4">Coming Soon</Button>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">AI-Powered Matchmaking</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Our AI algorithms connect you with potential partners, investors, and collaborators based on shared interests and complementary skills.
                </p>
                <Button variant="outline" className="mt-4">Coming Soon</Button>
              </div>
            </GlassCard>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 text-center">
              <Users className="w-12 h-12 text-repulse-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Join Our Global Community</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Be among the first to experience our revolutionary collaboration platform and connect with changemakers worldwide.
              </p>
              <div className="flex justify-center">
                <Button className="bg-repulse-500 hover:bg-repulse-600">Request Early Access</Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Collaboration;
