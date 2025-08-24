import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react"; // Import MessageCircle for WhatsApp

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/jeevanchetnafoundation/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/jeevanchetnafoundation/" },
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@JEEVANCHETNAFOUNDATION" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/jeevanchetnafoundation/" },
  ];

  return (
    <footer className="bg-slate-800 text-slate-300 p-6 md:py-12 w-full">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Logo and Socials */}
        <div className="col-span-2 sm:col-span-1 md:col-span-1 grid gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold text-white">Jeevan Chetna Foundation</span>
          </Link>
          <p>
            Dedicated to creating a better tomorrow for everyone.
          </p>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label={platform.name}
              >
                <platform.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <div className="grid gap-1">
            <Link to="/" className="hover:underline hover:text-white">Home</Link>
            <Link to="/our-work" className="hover:underline hover:text-white">Our Work</Link>
            <Link to="/tree-donation" className="hover:underline hover:text-white">Tree Donation</Link>
            <Link to="/donate" className="hover:underline hover:text-white">Donate</Link>
          </div>
        </div>

        {/* About Us Links */}
        <div>
          <h3 className="font-semibold text-white mb-2">About Us</h3>
          <div className="grid gap-1">
            <Link to="/about" className="hover:underline hover:text-white">Our Story</Link>
            <Link to="/about/documents" className="hover:underline hover:text-white">Our Documents</Link>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-white mb-2">Contact Us</h3>
          <div className="grid gap-1">
            <p>Haldwani, Uttarakhand</p>
            <a href="mailto:info@jeevanchetnafoundation.org" className="hover:underline hover:text-white">info@jeevanchetnafoundation.org</a>
            <a href="tel:8958521254" className="hover:underline hover:text-white">8958521254</a>
            <a href="tel:9012146420" className="hover:underline hover:text-white">9012146420</a>
            <a href="https://wa.me/8958521254" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white flex items-center gap-2 mt-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="col-span-2 sm:col-span-2 md:col-span-4 text-center mt-8">
          © {new Date().getFullYear()} Jeevan Chetna Foundation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;