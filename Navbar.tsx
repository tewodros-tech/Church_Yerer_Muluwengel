import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Ministries", path: "/ministries" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-church-navy/97 nav-blur shadow-2xl shadow-black/20 py-2"
          : "bg-gradient-to-b from-church-navy/80 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-church-gold to-church-gold-dark flex items-center justify-center shadow-lg shadow-church-gold/20 group-hover:scale-110 transition-all duration-500 group-hover:shadow-church-gold/40">
            <svg className="w-6 h-6 text-church-navy" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l6 3v7L12 17l-6-3V7l6-3z"/>
              <path d="M12 8l-3 1.5v3L12 14l3-1.5v-3L12 8z" opacity="0.75"/>
            </svg>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-white font-bold text-lg leading-tight tracking-tight">
              Yerer Full Gospel
            </h1>
            <p className="text-church-gold-light text-[10px] tracking-[0.15em] uppercase font-medium">
              የረር ሙሉ ወንጌል ቤተ ክርስቲያን
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg ${
                  isActive
                    ? "text-church-gold bg-church-gold/10"
                    : "text-white/75 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-church-gold rounded-full" />
                )}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-church-gold to-church-gold-dark text-church-navy font-bold rounded-full text-sm tracking-wide hover:shadow-lg hover:shadow-church-gold/40 transition-all duration-300 hover:scale-105"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 relative z-50"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <div
        className={`fixed inset-0 bg-church-navy/98 nav-blur transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2 px-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-3xl font-bold transition-all duration-300 ${
                  isActive
                    ? "text-church-gold scale-110"
                    : "text-white/60 hover:text-white hover:scale-105"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-8 px-10 py-4 bg-gradient-to-r from-church-gold to-church-gold-dark text-church-navy font-bold rounded-full text-xl hover:shadow-lg hover:shadow-church-gold/40 transition-all duration-300"
          >
            Join Us This Sunday
          </Link>
        </div>
      </div>
    </nav>
  );
}
