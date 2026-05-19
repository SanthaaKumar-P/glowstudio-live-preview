import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/salon/Navbar";
import { Hero } from "@/components/salon/Hero";
import { About } from "@/components/salon/About";
import { Services } from "@/components/salon/Services";
import { Gallery } from "@/components/salon/Gallery";
import { Testimonials } from "@/components/salon/Testimonials";
import { Team } from "@/components/salon/Team";
import { Pricing } from "@/components/salon/Pricing";
import { Contact } from "@/components/salon/Contact";
import { Footer } from "@/components/salon/Footer";
import { BookingDialog } from "@/components/salon/BookingDialog";
import { WhatsAppButton } from "@/components/salon/WhatsApp";
import { ScrollProgress } from "@/components/salon/ScrollProgress";
import { Loader } from "@/components/salon/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GlowStudio Salon — Luxury Beauty Atelier in Paris" },
      {
        name: "description",
        content:
          "GlowStudio is a premium beauty atelier offering hair styling, coloring, facial treatments, bridal makeup, nail art and spa therapy in Paris.",
      },
      { property: "og:title", content: "GlowStudio Salon — Luxury Beauty Atelier" },
      {
        property: "og:description",
        content: "A house of modern beauty rituals. Book your appointment with our master artisans.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar onBook={() => setOpen(true)} />
      <main>
        <Hero onBook={() => setOpen(true)} />
        <About />
        <Services onBook={() => setOpen(true)} />
        <Gallery />
        <Testimonials />
        <Team />
        <Pricing onBook={() => setOpen(true)} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BookingDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
