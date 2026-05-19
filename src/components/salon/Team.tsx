import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import t1 from "@/assets/team1.jpg";
import t2 from "@/assets/team2.jpg";
import t3 from "@/assets/team3.jpg";
import t4 from "@/assets/team4.jpg";

const team = [
  { img: t1, name: "Camille Rose", role: "Founder · Master Stylist" },
  { img: t2, name: "Elena Vasquez", role: "Lead Makeup Artist" },
  { img: t3, name: "Naomi Park", role: "Nail Couture Director" },
  { img: t4, name: "Aria Bennett", role: "Senior Spa Therapist" },
];

export function Team() {
  return (
    <section id="team" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Atelier</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
              Meet our <em className="text-gradient-gold not-italic">artisans</em>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A globally trained team of stylists, therapists and color experts —
            each celebrated for their distinctive craft.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl shadow-luxe"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl">{m.name}</h3>
                  <p className="text-xs text-primary mt-1">{m.role}</p>
                </div>
                <a
                  href="#"
                  className="h-9 w-9 inline-flex items-center justify-center rounded-full glass-strong opacity-0 group-hover:opacity-100 transition"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
