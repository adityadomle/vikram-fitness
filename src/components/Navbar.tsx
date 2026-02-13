import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
            ? "bg-[#3E5F44] shadow-xl"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Minimal Logo */}
            <a
              href="#home"
              className="flex items-baseline gap-1 group"
            >
              <span className="font-heading text-2xl md:text-3xl text-[#E8FFD7] tracking-tight">
                VIKRAM
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#93DA97] mb-1"></span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  className="group relative"
                >
                  <span className={`text-sm tracking-widest uppercase font-medium transition-colors duration-300 ${activeSection === link.href
                      ? "text-[#93DA97]"
                      : "text-[#E8FFD7]/60 group-hover:text-[#E8FFD7]"
                    }`}>
                    {link.label}
                  </span>
                  {activeSection === link.href && (
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#93DA97] to-transparent"></div>
                  )}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="relative group px-6 py-2 border border-[#93DA97]/40 text-[#93DA97] text-sm font-medium tracking-wider uppercase overflow-hidden transition-all duration-300 hover:border-[#93DA97] hover:text-[#3E5F44]"
              >
                <span className="relative z-10">START</span>
                <div className="absolute inset-0 bg-[#93DA97] -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#E8FFD7] hover:text-[#93DA97] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Accent line */}
        <div className={`h-px bg-gradient-to-r from-transparent via-[#5E936C]/30 to-transparent transition-opacity duration-700 ${scrolled ? "opacity-100" : "opacity-0"
          }`}></div>
      </nav>

      {/* Mobile Menu - Slide-in from right */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setMobileOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-[#2d4532] z-50 shadow-2xl transition-transform duration-500 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 p-2 text-[#E8FFD7] hover:text-[#93DA97] transition-colors"
          >
            <X size={24} />
          </button>

          {/* Menu content */}
          <div className="pt-20 px-6 h-full flex flex-col">
            {/* Navigation links */}
            <nav className="flex-1 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  className={`group flex items-center justify-between py-3 px-4 rounded transition-all duration-300 ${activeSection === link.href
                      ? "bg-[#5E936C]/30 text-[#93DA97]"
                      : "text-[#E8FFD7]/70 hover:bg-[#5E936C]/10 hover:text-[#E8FFD7]"
                    } ${mobileOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                    }`}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    transitionDelay: mobileOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <span className="text-base font-medium tracking-wide">{link.label}</span>
                  <ArrowUpRight
                    size={16}
                    className={`transition-transform duration-300 ${activeSection === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                  />
                </a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="pb-8 space-y-4">
              <div className="h-px bg-[#5E936C]/30"></div>
              <a
                href="#contact"
                className={`block w-full py-3 bg-[#93DA97] text-[#2d4532] text-center font-semibold text-sm tracking-wider uppercase hover:bg-[#E8FFD7] transition-all duration-300 ${mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                  }`}
                onClick={() => setMobileOpen(false)}
                style={{
                  transitionDelay: mobileOpen ? "200ms" : "0ms",
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
