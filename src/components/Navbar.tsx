import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import LogoImage from "../../Assets/ACFHE Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programmes", path: "/programmes" },
  { name: "Campus", path: "/campus" },
  { name: "Careers", path: "/careers" },
  { name: "Admissions", path: "/admissions" },
  { name: "Blog", path: "/blog" },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={LogoImage}
              alt="ACFHE Logomark"
              className="h-16 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className="hidden w-10 h-10 rounded-full border border-primary flex items-center justify-center bg-white shadow-sm">
              <span className="font-serif text-primary text-xl font-bold">
                A
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm font-bold tracking-wide uppercase transition-colors hover:text-primary",
                  location.pathname === link.path
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-[#1E1E1E]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/admissions"
              className="btn-secondary text-xs px-6 py-2.5"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1E1E1E] hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#FDF9F1] border-b border-primary/20 shadow-lg relative z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block px-3 py-2 rounded-md text-base font-bold uppercase tracking-wide",
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-[#1E1E1E] hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center btn-primary w-full"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
