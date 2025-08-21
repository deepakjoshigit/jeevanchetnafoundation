import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    { to: "/our-work", text: "Our Work" },
    { to: "/tree-donation", text: "Tree Donation" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-bold text-lg text-foreground">Jeevan Chetna Foundation</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/donate">Donate Now</Link>
          </Button>
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link to="/" className="flex items-center gap-2" onClick={closeSheet}>
                <Logo />
                <span className="font-bold text-foreground">JCF</span>
              </Link>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeSheet}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors hover:text-primary ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground"
                    }`
                  }
                >
                  {link.text}
                </NavLink>
              ))}
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={closeSheet}>
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;