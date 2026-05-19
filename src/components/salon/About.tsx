import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import about from "@/assets/about.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const stats = [
  { v: 12, s: "K+", label: "Happy Clients" },
  { v: 25, s: "+", label: "Master Artists" },
  { v: 11, s: "yrs", label: "Of Artistry" },
  { v: 48, s: "+", label: "Awards Won" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-accent/20 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={about}
              alt="GlowStudio interior"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 glass-strong rounded-2xl px-6 py-4 shadow-luxe">
            <p className="font-display text-4xl text-gradient-gold">A+</p>
            <p className="text-xs text-muted-foreground">Vogue Rated Atelier</p>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-primary"
          >
            Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            A House of <em className="text-gradient-gold not-italic">Modern</em> Beauty Rituals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-muted-foreground leading-relaxed"
          >
            Founded by master stylist Camille Rose, GlowStudio is a haven where European
            craftsmanship meets contemporary indulgence. Every detail — from our hand-blended
            serums to our gilded private suites — is designed to celebrate you.
          </motion.p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="glass rounded-2xl p-5 hover-lift"
              >
                <p className="font-display text-4xl text-gradient-gold">
                  <Counter to={s.v} suffix={s.s} />
                </p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
