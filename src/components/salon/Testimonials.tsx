import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Isabella Moreau",
    role: "Bride · Paris",
    text: "Camille and her team made me feel like a goddess on my wedding day. The most exquisite experience I've ever had at a salon.",
    rating: 5,
  },
  {
    name: "Aria Kapoor",
    role: "Editor, Vogue India",
    text: "GlowStudio isn't a salon — it's a temple. Every brush stroke is intentional. I won't trust my hair to anyone else.",
    rating: 5,
  },
  {
    name: "Sofia Lindqvist",
    role: "Loyal client of 6 years",
    text: "The 24K gold facial changed my skin overnight. The ambience, the staff, the rituals — pure indulgence from start to finish.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 noise">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Kind Words</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
            Voices of our <em className="text-gradient-gold not-italic">guests</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative glass rounded-3xl p-8 hover-lift"
            >
              <Quote className="h-10 w-10 text-primary/40" />
              <p className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center justify-between pt-5 border-t border-white/10">
                <div>
                  <p className="font-display text-lg">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
                <div className="flex gap-0.5 text-primary">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
