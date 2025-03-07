
import React from 'react';
import { FileText, DownloadCloud, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Brochure = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="brochure">
      {/* Background elements - subtle dotted pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.08)_1px,transparent_1px)] [background-size:25px_25px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
            Resources
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Download Our Brochure
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Learn more about RepulseNet's mission, vision, and impact in our comprehensive brochure.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="p-6 flex items-center">
              <div className="w-14 h-14 flex-shrink-0 bg-repulse-100 dark:bg-repulse-900/20 rounded-lg flex items-center justify-center text-repulse-600 dark:text-repulse-400">
                <FileText className="w-7 h-7" />
              </div>
              
              <div className="ml-5 flex-grow">
                <h3 className="text-xl font-semibold">RepulseNet Complete Guide</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">PDF • Coming Soon</p>
              </div>
              
              <div className="flex-shrink-0">
              <a
                  href="../../../public/First design.pdf"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
                  download
                >
                  <DownloadCloud className="w-4 h-4 mr-2" />
                  Coming Soon
                  </a>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/30 flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our comprehensive brochure will be available for download shortly.
              </p>
              
              <a 
                href="../../../public/First design.pdf"  
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-repulse-600 dark:text-repulse-400 text-sm font-medium hover:underline focus:outline-none"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Preview
                </a>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need more information? <a href="#contact" className="text-repulse-600 hover:underline">Contact our team</a> for additional resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
