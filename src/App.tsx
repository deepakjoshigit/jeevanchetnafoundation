import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import TreeDonation from "./pages/TreeDonation";
import Documents from "./pages/Documents"; // New import
import NotFound from "./pages/NotFound";
import { ConfettiProvider } from "./components/ConfettiProvider";

const queryClient = new QueryClient();
const helmetContext = {}; // Required for HelmetProvider

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ConfettiProvider>
        <HelmetProvider context={helmetContext}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/documents" element={<Documents />} /> {/* New Route */}
                <Route path="/our-work" element={<OurWork />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/tree-donation" element={<TreeDonation />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </HelmetProvider>
      </ConfettiProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;