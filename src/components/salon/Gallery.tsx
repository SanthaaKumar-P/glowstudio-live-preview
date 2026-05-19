import { motion } from "framer-motion";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";
import g5 from "@/assets/gallery5.jpg";
import g6 from "@/assets/gallery6.jpg";

const images = [
  { src: g1, label: "Balayage", span: "row-span-2" },
  { src: g2, label: "Nail Couture", span: "" },
  { src: g3, label: "Bridal", span: "" },
  { src: g4, label: "Gold Facial", span: "row-span-2" },
  { src: g5, label: "Rose Gold", span: "" },
  { src: g6, label: "Spa", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Lookbook</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
            A gallery of <em className="text-gradient-gold not-italic">glow</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-3xl shadow-luxe ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs uppercase tracking-widest text-primary">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
