import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export function Navbar({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 md:px-8`}>
        <div
          className={`flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-luxe" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-luxe shadow-gold">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display text-xl tracking-tight">
              Glow<span className="text-gradient-gold">Studio</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-luxe transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLight((v) => !v)}
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-white/10 transition"
              aria-label="Toggle theme"
            >
              {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              onClick={onBook}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-luxe px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-gold hover:scale-[1.03] transition-transform"
            >
              Book Now
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full glass"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-3 rounded-3xl glass-strong p-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="mt-2 rounded-full bg-gradient-luxe px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Book Appointment
            </button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
