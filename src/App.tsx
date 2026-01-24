import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gedagvaard from "./pages/Gedagvaard";
import PvOntvangen from "./pages/PvOntvangen";
import OngevalGehad from "./pages/OngevalGehad";
import Verzekering from "./pages/Verzekering";
import TeveelGedronken from "./pages/TeveelGedronken";
import GratisAdvocaat from "./pages/GratisAdvocaat";
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
          <Route path="/gedagvaard" element={<Gedagvaard />} />
          <Route path="/pv-ontvangen" element={<PvOntvangen />} />
          <Route path="/ongeval-gehad" element={<OngevalGehad />} />
          <Route path="/verzekering" element={<Verzekering />} />
          <Route path="/teveel-gedronken" element={<TeveelGedronken />} />
          <Route path="/gratis-advocaat" element={<GratisAdvocaat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
