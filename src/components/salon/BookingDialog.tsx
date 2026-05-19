import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";

const services = [
  "Hair Styling",
  "Hair Coloring",
  "Facial Treatments",
  "Bridal Makeup",
  "Nail Art",
  "Spa Therapy",
];

export function BookingDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0],
    date: "",
    time: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      setForm({ name: "", phone: "", service: services[0], date: "", time: "" });
    }, 2400);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
        >
          <div
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 22 }}
            className="relative w-full max-w-lg glass-strong rounded-3xl p-8 shadow-luxe"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 h-9 w-9 inline-flex items-center justify-center rounded-full glass hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>

            {success ? (
              <div className="py-10 flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 14 }}
                  className="h-20 w-20 rounded-full bg-gradient-luxe flex items-center justify-center shadow-gold"
                >
                  <Check className="h-9 w-9 text-primary-foreground" />
                </motion.div>
                <h3 className="mt-6 font-display text-3xl">You're booked ✦</h3>
                <p className="mt-2 text-muted-foreground max-w-xs">
                  Our concierge will reach out shortly to confirm your reservation.
                </p>
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Reservation</p>
                <h3 className="mt-2 font-display text-3xl">Book your appointment</h3>
                <form onSubmit={submit} className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Name"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <Field
                      label="Phone"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">
                      Service
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-background">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Date"
                      type="date"
                      value={form.date}
                      onChange={(v) => setForm({ ...form, date: v })}
                    />
                    <Field
                      label="Time"
                      type="time"
                      value={form.time}
                      onChange={(v) => setForm({ ...form, time: v })}
                    />
                  </div>
                  <button className="w-full mt-2 rounded-full bg-gradient-luxe py-4 text-sm font-medium text-primary-foreground shadow-gold hover:scale-[1.02] transition">
                    Confirm Booking
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50"
      />
    </div>
  );
}
