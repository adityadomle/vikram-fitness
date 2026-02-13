import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Programs", href: "programs" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll effect for transparency
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-14 md:h-16">
        {/* Logo - more minimal on mobile */}
        <a
          href="#home"
          className="font-heading text-xl md:text-2xl tracking-wider text-foreground uppercase"
        >
          <span className="hidden md:inline">Vikram Fitness</span>
          <span className="md:hidden">VF</span>
        </a>

        {/* Desktop Navigation - Minimalist */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                className={`text-sm font-medium transition-all duration-200 relative ${activeSection === link.href
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop only for minimalism */}
        <div className="hidden md:block">
          <Button size="sm" className="shadow-button">
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button - Minimal */}
        <button
          className="md:hidden text-foreground p-2 hover:bg-accent/10 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu - Minimalist Design */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${activeSection === link.href
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:bg-accent/5"
                  }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="w-full mt-3 shadow-button">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
