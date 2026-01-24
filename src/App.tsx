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

// Gedagvaard sub-pages
import VoorWelkeRechtbank from "./pages/gedagvaard/VoorWelkeRechtbank";
import VerloopZitting from "./pages/gedagvaard/VerloopZitting";
import MeeNaarZitting from "./pages/gedagvaard/MeeNaarZitting";
import Vrijspraak from "./pages/gedagvaard/Vrijspraak";
import VerzachtendeOmstandigheden from "./pages/gedagvaard/VerzachtendeOmstandigheden";
import VonnisBeroep from "./pages/gedagvaard/VonnisBeroep";
import Gerechtskosten from "./pages/gedagvaard/Gerechtskosten";
import RijverbodInleveringRijbewijs from "./pages/gedagvaard/RijverbodInleveringRijbewijs";

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
          <Route path="/gedagvaard/voor-welke-rechtbank" element={<VoorWelkeRechtbank />} />
          <Route path="/gedagvaard/verloop-van-de-zitting" element={<VerloopZitting />} />
          <Route path="/gedagvaard/mee-naar-de-zitting" element={<MeeNaarZitting />} />
          <Route path="/gedagvaard/vrijspraak" element={<Vrijspraak />} />
          <Route path="/gedagvaard/verzachtende-omstandigheden" element={<VerzachtendeOmstandigheden />} />
          <Route path="/gedagvaard/vonnis-beroep" element={<VonnisBeroep />} />
          <Route path="/gedagvaard/gerechtskosten" element={<Gerechtskosten />} />
          <Route path="/gedagvaard/rijverbod-en-inlevering-rijbewijs" element={<RijverbodInleveringRijbewijs />} />
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
