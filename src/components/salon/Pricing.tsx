import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Essential Glow",
    price: 149,
    desc: "A monthly ritual to keep you radiant.",
    features: ["1 Signature Facial", "1 Express Blowout", "Complimentary Aromatherapy", "10% off retail"],
  },
  {
    name: "Atelier Suite",
    price: 349,
    desc: "Our signature membership, beloved by regulars.",
    features: [
      "2 Signature Facials",
      "2 Hair Services",
      "1 Spa Therapy session",
      "Priority booking",
      "20% off retail",
    ],
    featured: true,
  },
  {
    name: "Maison Couture",
    price: 749,
    desc: "All-access indulgence with private suite.",
    features: [
      "Unlimited blowouts",
      "Monthly 24K Gold Facial",
      "Bridal & event styling",
      "Private suite access",
      "30% off retail",
    ],
  },
];

export function Pricing({ onBook }: { onBook: () => void }) {
  return (
    <section id="pricing" className="relative py-28 noise">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Memberships</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
            Choose your <em className="text-gradient-gold not-italic">ritual</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 hover-lift ${
                p.featured
                  ? "bg-gradient-luxe text-primary-foreground shadow-gold scale-[1.02] md:-translate-y-3"
                  : "glass"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-background px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
                  <Crown className="h-3 w-3" /> Most Loved
                </div>
              )}
              <h3 className="font-display text-3xl">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {p.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl">${p.price}</span>
                <span className={`text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  /mo
                </span>
              </div>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onBook}
                className={`mt-8 w-full rounded-full py-3 text-sm font-medium transition ${
                  p.featured
                    ? "bg-background text-foreground hover:scale-[1.02]"
                    : "bg-gradient-luxe text-primary-foreground shadow-gold hover:scale-[1.02]"
                }`}
              >
                Join {p.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
