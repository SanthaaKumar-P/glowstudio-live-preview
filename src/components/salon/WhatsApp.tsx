import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/33142603030"
      target="_blank"
      rel="noopener"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[oklch(0.7_0.18_145)] text-white shadow-gold flex items-center justify-center hover:scale-110 transition"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.7_0.18_145)] animate-ping opacity-30" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}
