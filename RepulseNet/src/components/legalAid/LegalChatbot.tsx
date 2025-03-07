
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import GlassCard from '../ui/GlassCard';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Hello! I'm your AI Legal Assistant. How can I help you today?",
    isUser: false,
    timestamp: new Date(),
  },
];

const legalResponses: Record<string, string> = {
  unemployment: "To file for unemployment benefits, you'll need to:\n1. Visit your state's unemployment insurance website\n2. Create an account or log in\n3. Provide required personal information\n4. Submit details about your previous employment\n5. File weekly claims once approved\n\nWould you like me to help you find your state's specific website?",
  eviction: "If you're facing eviction, you have several rights:\n1. You're entitled to proper notice before eviction\n2. The landlord must file a lawsuit and obtain a court order\n3. You have the right to defend yourself in court\n4. In many states, you can stop the eviction by paying all rent owed\n\nI recommend contacting a local tenant rights organization or legal aid society for assistance specific to your situation.",
  divorce: "The divorce process generally involves:\n1. Filing a petition for dissolution of marriage\n2. Serving papers to your spouse\n3. Negotiating issues like property division, custody, and support\n4. Attending court hearings if agreements can't be reached\n5. Finalizing the divorce decree\n\nDivorce laws vary by state. Would you like information specific to your location?",
  smallclaims: "Small claims courts handle cases involving relatively small amounts of money (usually under $10,000, though this varies by state). The process typically includes:\n1. Filing a claim with the court clerk\n2. Paying a filing fee\n3. Serving the defendant with the claim\n4. Attending the hearing\n5. If you win, collecting your judgment\n\nSmall claims courts are designed to be navigated without an attorney.",
  will: "Creating a will typically involves:\n1. Listing your assets and beneficiaries\n2. Naming an executor to manage your estate\n3. Specifying guardians for minor children\n4. Getting the document properly witnessed and notarized\n\nWhile simple wills can be created using online templates, consulting with an estate attorney is recommended for complex situations.",
  rental: "A rental agreement should include:\n1. Names of all tenants and landlord\n2. Property address and description\n3. Rental term (month-to-month or fixed period)\n4. Rent amount, due date, and payment methods\n5. Security deposit details\n6. Maintenance responsibilities\n7. Rules regarding pets, guests, noise, etc.\n\nWould you like more information about tenant rights in your state?",
};

const findRelevantResponse = (query: string): string => {
  query = query.toLowerCase();
  
  if (query.includes('unemployment') || query.includes('benefits') || query.includes('lost job')) {
    return legalResponses.unemployment;
  } else if (query.includes('evict') || query.includes('landlord') || query.includes('tenant')) {
    return legalResponses.eviction;
  } else if (query.includes('divorce') || query.includes('separation') || query.includes('custody')) {
    return legalResponses.divorce;
  } else if (query.includes('small claim') || query.includes('sue') || query.includes('court')) {
    return legalResponses.smallclaims;
  } else if (query.includes('will') || query.includes('testament') || query.includes('estate')) {
    return legalResponses.will;
  } else if (query.includes('rent') || query.includes('lease') || query.includes('apartment')) {
    return legalResponses.rental;
  } else {
    return "I don't have specific information about that legal topic yet. For the most accurate legal advice, I recommend consulting with a qualified attorney. Would you like me to connect you with our pro bono lawyer network?";
  }
};

const LegalChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);
    
    // Simulate AI response with typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: findRelevantResponse(userMessage.content),
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsProcessing(false);
    }, 1500);
  };

  const clearChat = () => {
    setMessages(initialMessages);
    toast({
      title: "Chat cleared",
      description: "All messages have been removed"
    });
  };

  // Auto-scroll to the most recent message
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <GlassCard className="flex flex-col h-full max-h-[600px] min-h-[400px]">
      <div className="p-4 flex items-center justify-between bg-repulse-50 dark:bg-repulse-900/20 rounded-t-2xl">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-repulse-500/10 flex items-center justify-center text-repulse-600">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="ml-3">
            <h3 className="font-medium">AI Legal Assistant</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Free legal guidance</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearChat}
          className="text-gray-500 hover:text-red-500"
        >
          <Trash className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 bg-white/5 dark:bg-gray-900/5">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                message.isUser
                  ? 'bg-repulse-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
              }`}
            >
              <div className="whitespace-pre-line">{message.content}</div>
              <div className={`text-xs mt-1 ${message.isUser ? 'text-repulse-100' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isProcessing && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 text-gray-800 dark:text-gray-200">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={endOfMessagesRef} />
      </div>
      
      <div className="p-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your legal question..."
            className="flex-grow p-2 rounded-l-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-repulse-500"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!input.trim() || isProcessing}
            className="rounded-l-none bg-repulse-500 hover:bg-repulse-600"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </GlassCard>
  );
};

export default LegalChatbot;
