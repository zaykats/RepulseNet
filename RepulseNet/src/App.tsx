
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartupHub from "./pages/StartupHub";
import WasteManagement from "./pages/WasteManagement";
import LegalAid from "./pages/LegalAid";
import Donations from "./pages/Donations";
import Collaboration from "./pages/Collaboration";
import JoinMovement from "./pages/JoinMovement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/startup-hub" element={<StartupHub />} />
          <Route path="/waste-management" element={<WasteManagement />} />
          <Route path="/legal-aid" element={<LegalAid />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/join" element={<JoinMovement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
