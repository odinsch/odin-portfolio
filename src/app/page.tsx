import Hero from "@/components/hero";
import SelectedWorks from "@/components/selected-works";
import Experience from "@/components/experience";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWorks />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
