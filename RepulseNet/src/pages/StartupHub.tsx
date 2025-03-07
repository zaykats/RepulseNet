
import React from 'react';
import { Lightbulb, Users, Rocket, LineChart, Briefcase } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import AnimatedArrow from '../components/ui/AnimatedArrow';

const StartupHub = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute opacity-30 blur-[100px] rounded-full w-[400px] h-[400px] bg-repulse-500/40 -right-40 top-40"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
              Innovation Hub
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Where <span className="text-gradient">Ideas Become Impact</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Connect with investors, mentors, and fellow entrepreneurs in our collaborative ecosystem designed to transform innovative ideas into successful ventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Launch Your Startup</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Register your startup, create a compelling profile, and get discovered by our network of investors and mentors.
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
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Connect with Investors</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Our AI-driven matching algorithm will connect you with investors who align with your vision, industry, and growth stage.
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
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Find Mentorship</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Get guidance from experienced mentors who can help navigate challenges and accelerate your startup's growth.
                </p>
                <Button variant="link" className="px-0 flex items-center text-repulse-600 text-sm font-medium">
                  Coming Soon
                  <AnimatedArrow size="sm" />
                </Button>
              </div>
            </GlassCard>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 text-center">
              <Lightbulb className="w-12 h-12 text-repulse-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Coming Soon: AI-Powered Startup Acceleration</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our platform is evolving to include AI-driven tools for startup success, including market analysis, 
                fundraising guidance, and competitive intelligence.
              </p>
              <div className="flex justify-center">
                <Button variant="outline" className="mr-4">Join Waitlist</Button>
                <Button className="bg-repulse-500 hover:bg-repulse-600">Learn More</Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default StartupHub;
