import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Resume />

      <Footer />
    </div>
  );
}
