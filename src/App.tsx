import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Corrected from Index
import About from "./pages/About"; // Corrected from AboutUs
import OurWork from "./pages/OurWork";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact"; // Corrected from ContactUs
import Layout from "./components/Layout"; // Using the Layout component
import { ThemeProvider } from "./components/theme-provider";
import Donate from "./pages/Donate"; // Import Donate page
import TreeDonation from "./pages/TreeDonation"; // Import TreeDonation page
import NotFound from "./pages/NotFound"; // Import NotFound page
import Documents from "./pages/Documents"; // Import Documents page
import { Toaster } from "@/components/ui/sonner"; // Import Toaster for sonner toasts
import { ConfettiProvider } from "./components/ConfettiProvider"; // Import ConfettiProvider

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ConfettiProvider> {/* Wrap the entire app with ConfettiProvider */}
        <Router>
          <Layout> {/* Wrap routes with Layout component */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/documents" element={<Documents />} /> {/* New route for documents */}
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/our-work/:projectId" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} /> {/* New route for Donate page */}
              <Route path="/tree-donation" element={<TreeDonation />} /> {/* New route for Tree Donation page */}
              <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
            </Routes>
          </Layout>
        </Router>
        <Toaster /> {/* Add Toaster component for sonner toasts */}
      </ConfettiProvider>
    </ThemeProvider>
  );
}

export default App;