
import React from 'react';
import { Scale, MessageSquare, FileText, Shield, Globe, Users, Link, BookOpen } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import AnimatedArrow from '../components/ui/AnimatedArrow';
import LegalChatbot from '../components/legalAid/LegalChatbot';

const LegalAid = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute opacity-30 blur-[100px] rounded-full w-[400px] h-[400px] bg-repulse-500/40 -right-40 top-40"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
              Justice For All
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered <span className="text-gradient">Legal Assistance</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Free legal guidance and support through our AI chatbot and pro bono lawyer network, ensuring everyone has access to justice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-6 h-full md:col-span-1">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">AI Legal Assistant</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Get answers to common legal questions and preliminary case assessments through our AI-powered chatbot.
                </p>
                <Button variant="outline" className="flex items-center text-repulse-600 font-medium">
                  Try it now
                  <AnimatedArrow size="sm" />
                </Button>
              </div>
            </GlassCard>
            
            <div className="md:col-span-2">
              <LegalChatbot />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Pro Bono Lawyer Network</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Connect with volunteer attorneys who provide free legal representation for qualified cases.
                </p>
                
                <div className="bg-repulse-50/50 dark:bg-repulse-900/10 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-repulse-600" />
                    What our pro bono network offers:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-repulse-500">•</span>
                      <span>Free 30-minute initial consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-repulse-500">•</span>
                      <span>Case evaluation and eligibility assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-repulse-500">•</span>
                      <span>Full representation for qualified individuals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-repulse-500">•</span>
                      <span>Multilingual support in over 20 languages</span>
                    </li>
                  </ul>
                </div>
                
                <Button variant="outline" className="flex items-center mt-auto text-repulse-600 font-medium">
                  Connect with a lawyer
                  <AnimatedArrow size="sm" />
                </Button>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Document Preparation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  AI-assisted creation of legal documents and forms, with guidance on proper filing procedures.
                </p>
                
                <div className="bg-repulse-50/50 dark:bg-repulse-900/10 rounded-lg p-4 mb-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Link className="w-4 h-4 text-repulse-600" />
                    Available document types:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                      <BookOpen className="w-3 h-3 mr-2 text-repulse-600" />
                      Simple Will
                    </div>
                    <div className="flex items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                      <BookOpen className="w-3 h-3 mr-2 text-repulse-600" />
                      Power of Attorney
                    </div>
                    <div className="flex items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                      <BookOpen className="w-3 h-3 mr-2 text-repulse-600" />
                      Lease Agreement
                    </div>
                    <div className="flex items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                      <BookOpen className="w-3 h-3 mr-2 text-repulse-600" />
                      Small Claims
                    </div>
                    <div className="flex items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                      <BookOpen className="w-3 h-3 mr-2 text-repulse-600" />
                      LLC Formation
                    </div>
                    <div className="flex items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded">
                      <BookOpen className="w-3 h-3 mr-2 text-repulse-600" />
                      Name Change
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="flex items-center mt-auto text-repulse-600 font-medium">
                  Create document
                  <AnimatedArrow size="sm" />
                </Button>
              </div>
            </GlassCard>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8">
              <div className="text-center mb-8">
                <Globe className="w-12 h-12 text-repulse-500 mx-auto mb-6" />
                <h2 className="text-2xl font-bold mb-4">Justice Shouldn't Have Barriers</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Our mission is to make legal assistance accessible to everyone, regardless of financial status, 
                  through technology and a dedicated network of legal professionals.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-repulse-50/70 dark:bg-repulse-900/10 rounded-lg p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-repulse-500/10 flex items-center justify-center text-repulse-600 mx-auto mb-3">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-medium mb-2">Privacy Protected</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All conversations and documents are encrypted and confidential</p>
                </div>
                
                <div className="bg-repulse-50/70 dark:bg-repulse-900/10 rounded-lg p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-repulse-500/10 flex items-center justify-center text-repulse-600 mx-auto mb-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-medium mb-2">Expert Verified</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All AI responses are periodically reviewed by qualified attorneys</p>
                </div>
                
                <div className="bg-repulse-50/70 dark:bg-repulse-900/10 rounded-lg p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-repulse-500/10 flex items-center justify-center text-repulse-600 mx-auto mb-3">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="font-medium mb-2">Globally Accessible</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Available in multiple languages and jurisdictions</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-repulse-500 hover:bg-repulse-600">Join Our Network</Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LegalAid;
