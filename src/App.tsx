import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/theme-provider";
import Donate from "./pages/Donate";
import TreeDonation from "./pages/TreeDonation";
import NotFound from "./pages/NotFound";
import Documents from "./pages/Documents";
import { Toaster } from "@/components/ui/sonner";
import { ConfettiProvider } from "./components/ConfettiProvider";
import { HelmetProvider } from 'react-helmet-async'; // New import

function App() {
  return (
    <HelmetProvider> {/* Wrap the entire app with HelmetProvider */}
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ConfettiProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/documents" element={<Documents />} />
                <Route path="/our-work" element={<OurWork />} />
                <Route path="/our-work/:projectId" element={<ProjectDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/tree-donation" element={<TreeDonation />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Router>
          <Toaster />
        </ConfettiProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;