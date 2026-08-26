import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Work from "@/components/Work";
import Stores from "@/components/Stores";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Timeline />
        <Work />
        <Stores />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
