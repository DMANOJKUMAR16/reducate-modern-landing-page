import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Programs from "@/sections/Programs";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}