import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden noise">
      {/* Floating gradient orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-24 h-[460px] w-[460px] rounded-full bg-accent/25 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            Premium Beauty Atelier · Est. 2014
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95]"
          >
            Where Beauty <br />
            Meets <em className="text-gradient-gold not-italic">Artistry</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Step into GlowStudio — a sanctuary of curated luxury where master stylists,
            bespoke treatments, and timeless elegance redefine the way you glow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onBook}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-luxe px-7 py-4 text-sm font-medium text-primary-foreground shadow-gold hover:scale-[1.03] transition-transform"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-medium hover:bg-white/10 transition"
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-background bg-gradient-luxe"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Loved by 12,000+ clients worldwide
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/5] max-w-[520px] mx-auto w-full"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-luxe opacity-30 blur-3xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={hero}
              alt="Luxury salon model"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-12 glass-strong rounded-2xl p-4 shadow-luxe hidden md:block"
          >
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Today</p>
            <p className="font-display text-2xl mt-1">28 Bookings</p>
            <div className="mt-2 h-1 w-32 rounded-full bg-gradient-luxe" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-16 glass-strong rounded-2xl p-4 shadow-luxe hidden md:flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-full bg-gradient-luxe flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Master Stylist</p>
              <p className="font-medium text-sm">Available now</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
