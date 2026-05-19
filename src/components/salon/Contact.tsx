import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Visit Us</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
            Step into the <em className="text-gradient-gold not-italic">atelier</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 flex flex-col gap-6"
          >
            {[
              { Icon: MapPin, title: "Atelier", value: "212 Rue Saint-Honoré, Paris 75001" },
              { Icon: Phone, title: "Reservations", value: "+33 1 42 60 30 30" },
              { Icon: Mail, title: "Concierge", value: "hello@glowstudio.salon" },
            ].map(({ Icon, title, value }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-luxe flex items-center justify-center shrink-0 shadow-gold">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
                  <p className="mt-1 text-lg">{value}</p>
                </div>
              </div>
            ))}

            <div className="mt-2 pt-6 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Follow the glow
              </p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="h-11 w-11 rounded-full glass-strong inline-flex items-center justify-center hover:bg-gradient-luxe hover:text-primary-foreground transition"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-luxe min-h-[420px] glass"
          >
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.328%2C48.864%2C2.338%2C48.870&layer=mapnik"
              className="w-full h-full min-h-[420px] grayscale-[0.4] contrast-[1.05]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
