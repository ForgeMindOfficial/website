import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "motion/react";

import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  {
    label: "Expertise",
    href: "/#expertise",
  },
  {
    label: "Work",
    href: "/#work",
  },
  {
    label: "Approach",
    href: "/#approach",
  },
  {
    label: "About",
    href: "/#about",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111827]/90 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

        {/* LOGO */}

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-xl font-black tracking-tight text-white"
          aria-label="ForgeMind homepage"
        >
          FORGE<span className="text-blue-400">MIND</span>.
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-5 py-2.5 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-400/20"
          >
            Let's Connect
            <ArrowUpRight size={16} />
          </Link>
        </nav>

        {/* MOBILE BUTTON */}

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-[#152238] lg:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">

              {navigation.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-between rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white"
              >
                Let's Connect
                <ArrowUpRight size={18} />
              </Link>

            </div>
          </motion.nav>
        )}
      </AnimatePresence>

    </header>
  );
}