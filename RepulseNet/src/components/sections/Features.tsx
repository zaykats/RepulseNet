
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from '../ui/FeatureCard';
import { 
  Recycle, 
  Lightbulb, 
  Scale, 
  Heart, 
  Users,
  X,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const navigate = useNavigate();

  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Startup Innovation Hub",
      description: "A collaborative ecosystem where startups, investors, and mentors unite to transform ideas into successful ventures using AI-powered tools.",
      label: "Ecosystem",
      details: [
        "AI-powered matching algorithm connects startups with the right investors",
        "Virtual incubation spaces with real-time mentorship",
        "Resource allocation optimization for maximum impact",
        "Automated progress tracking and milestone celebrations",
        "Community-driven knowledge sharing platform"
      ],
      path: "/startup-hub"
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Smart Waste Management",
      description: "AI-driven solutions for efficient resource optimization and sustainable urban development, reducing environmental impact.",
      label: "Environment",
      details: [
        "Real-time waste collection route optimization",
        "AI-powered sorting and recycling systems",
        "Community rewards for sustainable practices",
        "Food redistribution network to minimize waste",
        "Transparent impact tracking dashboard"
      ],
      path: "/waste-management"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Justice for All",
      description: "Free AI-powered legal assistance and a pro bono network ensuring everyone has access to legal support when they need it most.",
      label: "Equity",
      details: [
        "24/7 AI legal assistant for common questions",
        "Document preparation and filing assistance",
        "Connection to pro bono attorneys for complex cases",
        "Multilingual support for diverse communities",
        "Plain language legal education resources"
      ],
      path: "/legal-aid"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Transparent Donations",
      description: "A system that ensures every contribution reaches the right people with complete transparency and accountability.",
      label: "Community",
      details: [
        "Blockchain-verified donation tracking",
        "Real-time impact visualization",
        "Direct donor-recipient communication channels",
        "Community voting on fund allocation priorities",
        "Automated impact reporting"
      ],
      path: "/donations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Futuristic Collaboration",
      description: "Connect tech enthusiasts, investors, and changemakers to drive meaningful action and innovation for cities worldwide.",
      label: "Network",
      details: [
        "Virtual collaboration spaces with AR/VR integration",
        "Cross-sector innovation challenges",
        "Skill-sharing marketplace",
        "Global impact hackathons",
        "AI-facilitated brainstorming sessions"
      ],
      path: "/collaboration"
    }
  ];

  const handleFeatureClick = (index: number) => {
    setSelectedFeature(index);
  };

  const handleExploreClick = () => {
    if (selectedFeature !== null && features[selectedFeature]?.path) {
      navigate(features[selectedFeature].path);
      setSelectedFeature(null);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.08)_1px,transparent_1px)] [background-size:25px_25px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
            Core Features
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powering Urban Transformation
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            RepulseNet combines cutting-edge AI technology with community-driven initiatives to revitalize cities and create sustainable futures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "opacity-0",
                index === 0 && "animate-fade-up",
                index === 1 && "animate-fade-up animate-delay-100",
                index === 2 && "animate-fade-up animate-delay-200",
                index === 3 && "animate-fade-up animate-delay-300",
                index === 4 && "animate-fade-up animate-delay-400",
              )}
              // This ensures the animation plays when in viewport
              style={{ animationPlayState: 'running', animationFillMode: 'forwards' }}
            >
              <FeatureCard 
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                label={feature.label}
                onClick={() => handleFeatureClick(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Feature Details Dialog */}
      <Dialog open={selectedFeature !== null} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedFeature !== null && (
                <>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                    {features[selectedFeature]?.icon}
                  </span>
                  {features[selectedFeature]?.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {selectedFeature !== null && features[selectedFeature]?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <h4 className="font-medium text-repulse-700 mb-3">Key Capabilities:</h4>
            <ul className="space-y-2">
              {selectedFeature !== null && features[selectedFeature]?.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 text-repulse-500">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between mt-6">
            <DialogClose className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Close
            </DialogClose>
            
            <button 
              onClick={handleExploreClick}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-repulse-600 hover:bg-repulse-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-repulse-500"
            >
              Explore Feature <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Features;
