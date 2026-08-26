import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Apps from "@/components/Apps";
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
        <Timeline />
        <Skills />
        <Work />
        <Apps />
        <Stores />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
