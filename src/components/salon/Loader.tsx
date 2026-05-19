import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mx-auto h-16 w-16 rounded-full border-2 border-transparent border-t-primary border-r-accent"
            />
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-6 font-display text-2xl tracking-wide"
            >
              Glow<span className="text-gradient-gold">Studio</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
