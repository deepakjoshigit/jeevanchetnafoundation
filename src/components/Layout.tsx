import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ClickSparkles from "./ClickSparkles";
import FloatingParticles from "./FloatingParticles"; // New import

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative"> {/* Added relative for particle positioning */}
      <FloatingParticles /> {/* Add floating particles as background */}
      <ClickSparkles />
      <Navbar />
      <main className="flex-grow relative z-10">{children}</main> {/* Added relative z-10 to keep content above particles */}
      <Footer />
    </div>
  );
};

export default Layout;