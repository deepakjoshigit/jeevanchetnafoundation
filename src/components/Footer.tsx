import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"; // Import social media icons

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/jeevanchetnafoundation" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/jeevanchetnafoundation" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/jeevanchetnafoundation" }, // Assuming Twitter handle is the same
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/jeevanchetnafoundation" }, // Assuming it's a company page
  ];

  return (
    <footer className="bg-slate-800 text-slate-300 p-6 md:py-12 w-full">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2 sm:col-span-3 md:col-span-2 grid gap-2">
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
        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <div className="grid gap-1">
            <Link to="/about" className="hover:underline hover:text-white">About Us</Link>
            <Link to="/about/documents" className="hover:underline hover:text-white">Documents</Link> {/* New link */}
            <Link to="/our-work" className="hover:underline hover:text-white">Our Work</Link>
            <Link to="/contact" className="hover:underline hover:text-white">Contact</Link>
            <Link to="/donate" className="hover:underline hover:text-white">Donate</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Contact Us</h3>
          <div className="grid gap-1">
            <p>Haldwani, Uttarakhand</p>
            <a href="mailto:info@jeevanchetnafoundation.org" className="hover:underline hover:text-white">info@jeevanchetnafoundation.org</a>
            <a href="tel:8958521254" className="hover:underline hover:text-white">8958521254</a>
            <a href="tel:9012146420" className="hover:underline hover:text-white">9012146420</a>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-3 md:col-span-5 text-center mt-8">
          © {new Date().getFullYear()} Jeevan Chetna Foundation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;