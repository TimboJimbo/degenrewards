import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout/Layout";
import GoogleAnalytics from "./components/Analytics/GoogleAnalytics";
import Home from "./pages/Home";
import Roobet from "./pages/Roobet";
import Gamdom from "./pages/Gamdom";
import Duelbits from "./pages/Duelbits";
import Rainbet from "./pages/Rainbet";
import GamdomRakeback from "./pages/GamdomRakeback";
import RoobetRakeback from "./pages/RoobetRakeback";
import RainbetRakeback from "./pages/RainbetRakeback";
import ComparisonPage from "./pages/ComparisonPage";
import NotFound from "./pages/NotFound";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";
import BestBonuses from "./pages/BestBonuses";
import FirstDepositBonuses from './pages/FirstDepositBonuses';
import BonusCalendar from './pages/BonusCalendar';
import VIPComparison from './pages/VIPComparison';
import StrategyGuides from './pages/StrategyGuides';
import GamblingStrategies from './pages/GamblingStrategies';
import ResponsibleGambling from "./pages/ResponsibleGambling";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <GoogleAnalytics />
          <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roobet" element={<Roobet />} />
            <Route path="/gamdom" element={<Gamdom />} />
            <Route path="/duelbits" element={<Duelbits />} />
            <Route path="/rainbet" element={<Rainbet />} />
            <Route path="/gamdom-rakeback" element={<GamdomRakeback />} />
            <Route path="/roobet-rakeback" element={<RoobetRakeback />} />
            <Route path="/rainbet-rakeback" element={<RainbetRakeback />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/best-bonuses" element={<BestBonuses />} />
            <Route path="/first-deposit-bonuses" element={<FirstDepositBonuses />} />
            <Route path="/bonus-calendar" element={<BonusCalendar />} />
            <Route path="/vip-comparison" element={<VIPComparison />} />
            <Route path="/strategy-guides" element={<StrategyGuides />} />
            <Route path="/gambling-strategies" element={<GamblingStrategies />} />
            <Route path="/responsible-gambling" element={<ResponsibleGambling />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
</HelmetProvider>
);

export default App;