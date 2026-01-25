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
import VragenAdvies from "./pages/VragenAdvies";
import AZIndex from "./pages/AZIndex";
import NotFound from "./pages/NotFound";

// Gedagvaard sub-pages
import VoorWelkeRechtbank from "./pages/gedagvaard/VoorWelkeRechtbank";
import VerloopZitting from "./pages/gedagvaard/VerloopZitting";
import MeeNaarZitting from "./pages/gedagvaard/MeeNaarZitting";
import Vrijspraak from "./pages/gedagvaard/Vrijspraak";
import VerzachtendeOmstandigheden from "./pages/gedagvaard/VerzachtendeOmstandigheden";
import VonnisBeroep from "./pages/gedagvaard/VonnisBeroep";
import Gerechtskosten from "./pages/gedagvaard/Gerechtskosten";
import GedagvaardRijverbod from "./pages/gedagvaard/RijverbodInleveringRijbewijs";

// PV Ontvangen sub-pages
import OnmiddellijkeInning from "./pages/pv-ontvangen/OnmiddellijkeInning";
import BevelTotBetalen from "./pages/pv-ontvangen/BevelTotBetalen";
import PvRijbewijsIngetrokken from "./pages/pv-ontvangen/RijbewijsIngetrokken";
import Geldboete from "./pages/pv-ontvangen/Geldboete";

// Ongeval gehad sub-pages
import InzittendenBestuurder from "./pages/ongeval-gehad/InzittendenBestuurder";
import BurgerlijkePartij from "./pages/ongeval-gehad/BurgerlijkePartij";
import Gekwetst from "./pages/ongeval-gehad/Gekwetst";
import Raadsgeneesheer from "./pages/ongeval-gehad/Raadsgeneesheer";
import MinnelijkeMedischeExpertise from "./pages/ongeval-gehad/MinnelijkeMedischeExpertise";

// Verzekering sub-pages
import Terugvordering from "./pages/verzekering/Terugvordering";
import Omniumverzekering from "./pages/verzekering/Omniumverzekering";

// Teveel gedronken sub-pages
import TeveelRijbewijsIngetrokken from "./pages/teveel-gedronken/RijbewijsIngetrokken";
import TeveelRijverbod from "./pages/teveel-gedronken/RijverbodInleveringRijbewijs";
import MedischePsychologischeProeven from "./pages/teveel-gedronken/MedischePsychologischeProeven";
import Herstelexamens from "./pages/teveel-gedronken/Herstelexamens";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Gedagvaard */}
          <Route path="/gedagvaard" element={<Gedagvaard />} />
          <Route path="/gedagvaard/voor-welke-rechtbank" element={<VoorWelkeRechtbank />} />
          <Route path="/gedagvaard/verloop-van-de-zitting" element={<VerloopZitting />} />
          <Route path="/gedagvaard/mee-naar-de-zitting" element={<MeeNaarZitting />} />
          <Route path="/gedagvaard/vrijspraak" element={<Vrijspraak />} />
          <Route path="/gedagvaard/verzachtende-omstandigheden" element={<VerzachtendeOmstandigheden />} />
          <Route path="/gedagvaard/vonnis-beroep" element={<VonnisBeroep />} />
          <Route path="/gedagvaard/gerechtskosten" element={<Gerechtskosten />} />
          <Route path="/gedagvaard/rijverbod-en-inlevering-rijbewijs" element={<GedagvaardRijverbod />} />
          {/* PV Ontvangen */}
          <Route path="/pv-ontvangen" element={<PvOntvangen />} />
          <Route path="/pv-ontvangen/onmiddellijke-inning" element={<OnmiddellijkeInning />} />
          <Route path="/pv-ontvangen/bevel-tot-betalen" element={<BevelTotBetalen />} />
          <Route path="/pv-ontvangen/rijbewijs-ingetrokken" element={<PvRijbewijsIngetrokken />} />
          <Route path="/pv-ontvangen/geldboete" element={<Geldboete />} />
          {/* Ongeval gehad */}
          <Route path="/ongeval-gehad" element={<OngevalGehad />} />
          <Route path="/ongeval-gehad/inzittenden-bestuurder" element={<InzittendenBestuurder />} />
          <Route path="/ongeval-gehad/burgerlijke-partij" element={<BurgerlijkePartij />} />
          <Route path="/ongeval-gehad/gekwetst" element={<Gekwetst />} />
          <Route path="/ongeval-gehad/raadsgeneesheer" element={<Raadsgeneesheer />} />
          <Route path="/ongeval-gehad/minnelijke-medische-expertise" element={<MinnelijkeMedischeExpertise />} />
          {/* Verzekering */}
          <Route path="/verzekering" element={<Verzekering />} />
          <Route path="/verzekering/terugvordering" element={<Terugvordering />} />
          <Route path="/verzekering/omniumverzekering" element={<Omniumverzekering />} />
          {/* Teveel gedronken */}
          <Route path="/teveel-gedronken" element={<TeveelGedronken />} />
          <Route path="/teveel-gedronken/rijbewijs-ingetrokken" element={<TeveelRijbewijsIngetrokken />} />
          <Route path="/teveel-gedronken/rijverbod-en-inlevering-rijbewijs" element={<TeveelRijverbod />} />
          <Route path="/teveel-gedronken/medische-psychologische-proeven" element={<MedischePsychologischeProeven />} />
          <Route path="/teveel-gedronken/herstelexamens" element={<Herstelexamens />} />
          {/* Vragen & Advies and A-Z */}
          <Route path="/vragen-advies" element={<VragenAdvies />} />
          <Route path="/a-z" element={<AZIndex />} />
          <Route path="/a-z/:term" element={<AZIndex />} />
          {/* Other */}
          <Route path="/gratis-advocaat" element={<GratisAdvocaat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
