import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
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
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <div className="grid gap-1">
            <Link to="/about" className="hover:underline hover:text-white">About Us</Link>
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