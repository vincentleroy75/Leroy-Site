"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/config";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white border-b border-brand-gray-100"
      }`}
    >
      {/* Top bar */}
      <div className="bg-brand-blue text-white text-sm py-2 hidden md:block">
        <div className="container-wide flex justify-between items-center">
          <span>Agent Général AXA Prévoyance &amp; Patrimoine – Paris, Vincennes, Val-de-Marne</span>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="font-semibold hover:underline"
          >
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-wide" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-brand-blue font-bold text-lg leading-tight">
                Vincent Leroy
              </span>
              <span className="text-xs text-brand-gray-400 leading-tight">
                AXA Prévoyance &amp; Patrimoine
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-brand-gray-600 hover:text-brand-blue rounded-md transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.children && (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-brand-gray-100 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-brand-gray-600 hover:text-brand-blue hover:bg-brand-gray-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-sm font-medium text-brand-gray-600 hover:text-brand-blue transition-colors"
            >
              {SITE_CONFIG.phone}
            </a>
            <Link href="/audit-prevoyance-gratuit" className="btn-primary text-sm">
              Audit gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-brand-gray-600 hover:text-brand-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-brand-gray-100 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-sm font-medium text-brand-gray-600 hover:text-brand-blue hover:bg-brand-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-brand-gray-400 hover:text-brand-blue hover:bg-brand-gray-50 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 px-4">
              <Link
                href="/audit-prevoyance-gratuit"
                className="btn-primary w-full text-center text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Demander un audit gratuit
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
