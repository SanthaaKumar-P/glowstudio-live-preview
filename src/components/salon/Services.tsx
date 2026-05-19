import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Heart, Brush, Flower2 } from "lucide-react";

const services = [
  { icon: Scissors, title: "Hair Styling", desc: "Editorial cuts, silk blowouts and runway-ready finishes.", price: "$60 – $180" },
  { icon: Palette, title: "Hair Coloring", desc: "Custom balayage, gloss treatments and bespoke color.", price: "$120 – $420" },
  { icon: Sparkles, title: "Facial Treatments", desc: "24K gold facials, microcurrent and luminous glows.", price: "$95 – $320" },
  { icon: Heart, title: "Bridal Makeup", desc: "Timeless bridal artistry with on-location experiences.", price: "$280 – $650" },
  { icon: Brush, title: "Nail Art", desc: "Couture manicures, gel extensions and crystal détails.", price: "$45 – $140" },
  { icon: Flower2, title: "Spa Therapy", desc: "Aromatherapy, hot stone and signature glow rituals.", price: "$110 – $290" },
];

export function Services({ onBook }: { onBook: () => void }) {
  return (
    <section id="services" className="relative py-28 noise">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Signature Services</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              Crafted with <em className="text-gradient-gold not-italic">precision</em>,<br />
              delivered with grace.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Every service is a ritual — composed by our master artisans using rare
            botanicals and award-winning techniques.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative glass rounded-3xl p-7 hover-lift overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-luxe shadow-gold">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center justify-between pt-5 border-t border-white/10">
                  <span className="text-sm text-primary font-medium">{s.price}</span>
                  <button
                    onClick={onBook}
                    className="text-xs uppercase tracking-widest text-foreground/80 hover:text-primary transition"
                  >
                    Book →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
