
import React from 'react';
import { Rocket, Heart, Globe, Star, Users } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import { Button } from '@/components/ui/button';

const JoinMovement = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute opacity-30 blur-[100px] rounded-full w-[400px] h-[400px] bg-repulse-500/40 -right-40 top-40"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
              Be Part Of The Change
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join The <span className="text-gradient">Movement</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              RepulseNet isn't just an app—it's a vision of sustainable progress, justice, and opportunity for all. Be part of a global transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">How You Can Contribute</h2>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-repulse-100 dark:bg-repulse-900/20 flex items-center justify-center text-repulse-600">
                      <Rocket className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Launch a Startup</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Use our platform to bring your innovative urban solutions to life with support from our community.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-repulse-100 dark:bg-repulse-900/20 flex items-center justify-center text-repulse-600">
                      <Heart className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Donate Resources</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Contribute funds, time, or expertise to support projects that align with your values.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-repulse-100 dark:bg-repulse-900/20 flex items-center justify-center text-repulse-600">
                      <Star className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Share Your Skills</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Offer your expertise as a mentor, advisor, or volunteer to help others succeed.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-repulse-100 dark:bg-repulse-900/20 flex items-center justify-center text-repulse-600">
                      <Globe className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Spread the Word</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Help us grow our community by sharing RepulseNet with your network.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <GlassCard className="p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for Updates</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-repulse-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-repulse-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      I'm interested in...
                    </label>
                    <select 
                      id="interest" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-repulse-500"
                    >
                      <option value="">Select an option</option>
                      <option value="startup">Launching a Startup</option>
                      <option value="investor">Investing in Projects</option>
                      <option value="mentor">Becoming a Mentor</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <Button className="w-full bg-repulse-500 hover:bg-repulse-600 mt-4">
                    Join the Movement
                  </Button>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 text-center">
              <Users className="w-12 h-12 text-repulse-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Join Our Growing Community</h2>
              <div className="flex justify-center space-x-6 mb-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-repulse-600">5K+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-repulse-600">120+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Cities</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-repulse-600">$2M+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Impact</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Be part of a global movement dedicated to revitalizing cities through technology, innovation, and collaboration.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default JoinMovement;
