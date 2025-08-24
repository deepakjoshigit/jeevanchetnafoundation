import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ProjectDetail from "./pages/ProjectDetail"; // New import
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/our-work/:projectId" element={<ProjectDetail />} /> {/* New route */}
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;