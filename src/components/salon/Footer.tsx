import { Sparkles } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="glass-strong rounded-[2rem] p-8 md:p-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-3xl md:text-4xl">
              Join the <em className="text-gradient-gold not-italic">GlowList</em>
            </h3>
            <p className="mt-2 text-muted-foreground max-w-md">
              Receive seasonal beauty rituals, members-only offers and atelier news.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) {
                setDone(true);
                setEmail("");
                setTimeout(() => setDone(false), 3000);
              }
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full glass px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="rounded-full bg-gradient-luxe px-7 py-4 text-sm font-medium text-primary-foreground shadow-gold hover:scale-[1.03] transition">
              {done ? "Welcome ✦" : "Subscribe"}
            </button>
          </form>
        </div>

        <div className="mt-14 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-luxe shadow-gold">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="font-display text-xl">
                Glow<span className="text-gradient-gold">Studio</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A house of modern beauty rituals, est. 2014 in the heart of Paris.
            </p>
          </div>
          {[
            { title: "Salon", links: ["About", "Services", "Pricing", "Team"] },
            { title: "Visit", links: ["Atelier Paris", "Atelier Milan", "Atelier NYC", "Concierge"] },
            { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Imprint"] },
          ].map((c) => (
            <div key={c.title}>
              <p className="text-xs uppercase tracking-widest text-primary">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} GlowStudio Salon — Crafted with care.</p>
          <p>Designed in Paris · Made with love.</p>
        </div>
      </div>
    </footer>
  );
}
