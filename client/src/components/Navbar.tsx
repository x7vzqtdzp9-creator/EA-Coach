/*
 * Navbar — EA Coach
 * Variants:
 * - transparent: transparente sur hero, devient navy au scroll
 * - dark: navy fixe
 */

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";

type NavbarProps = {
  variant?: "transparent" | "dark";
};

const navLinks = [
  { label: "Accueil", href: "/", type: "link" as const },
  { label: "Qui sommes-nous ?", href: "/a-propos", type: "link" as const },
  { label: "Notre accompagnement", href: "/services", type: "link" as const },
  { label: "Ils nous inspirent", section: "inspirent", type: "section" as const },
  { label: "Blog", href: "/blog", type: "link" as const },
  { label: "Contact", href: "/contact", type: "link" as const },
];

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function handleSectionNavigation(sectionId: string) {
  if (window.location.pathname === "/") {
    scrollToSection(sectionId);
  } else {
    window.location.href = "/#" + sectionId;
  }
}

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const isDark = variant === "dark" || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.slice(1);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isDark
            ? "bg-[oklch(0.22_0.06_250)] shadow-2xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span
                className="font-display text-white font-bold leading-none"
                style={{ fontSize: "1.6rem", letterSpacing: "-0.02em" }}
              >
                EA
              </span>
              <span
                className="font-nav text-[oklch(0.72_0.10_78)] font-semibold leading-none"
                style={{ fontSize: "0.65rem", letterSpacing: "0.3em" }}
              >
                COACH
              </span>
            </div>
            <div
              className="h-8 w-px opacity-40"
              style={{ background: "oklch(0.72_0.10_78)" }}
            />
            <span
              className="font-body text-white/70 italic hidden sm:block"
              style={{ fontSize: "0.75rem" }}
            >
              It's in the life
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.type === "link" ? (
                <Link
                  key={link.label}
                  href={link.href!}
                  className="font-nav text-white/80 hover:text-white px-4 py-2 relative group transition-colors duration-200"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.08em", fontWeight: 500 }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-[oklch(0.72_0.10_78)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleSectionNavigation(link.section!)}
                  className="font-nav text-white/80 hover:text-white px-4 py-2 relative group transition-colors duration-200"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.08em", fontWeight: 500 }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-[oklch(0.72_0.10_78)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 font-nav text-[oklch(0.72_0.10_78)] border border-[oklch(0.72_0.10_78)] px-4 py-2 hover:bg-[oklch(0.72_0.10_78)] hover:text-[oklch(0.18_0.04_250)] transition-all duration-300"
              style={{ fontSize: "0.7rem", letterSpacing: "0.1em", fontWeight: 600 }}
            >
              <Mail size={12} />
              NOUS CONTACTER
            </Link>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-400 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "oklch(0.22 0.06 250)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) =>
            link.type === "link" ? (
              <Link
                key={link.label}
                href={link.href!}
                onClick={() => setMenuOpen(false)}
                className="font-display text-white text-3xl hover:text-[oklch(0.72_0.10_78)] transition-colors duration-200"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => {
                  handleSectionNavigation(link.section!);
                  setMenuOpen(false);
                }}
                className="font-display text-white text-3xl hover:text-[oklch(0.72_0.10_78)] transition-colors duration-200"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {link.label}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
}
