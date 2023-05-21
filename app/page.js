import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Home() {
  return (
    <div className="flex flex-row">
      <div className="hidden lg:block w-1/5 fixed top-0 left-0 h-screen bg-[rgb(20,20,20)]">
        <div className="py-10 w-full  flex  flex-col justify-center items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img src="/ahmad.jpeg" />
          </div>
          <h1 className="text-2xl py-7">Ahmad M.</h1>
        </div>
        <div className="w-4/5 mx-auto">
          <p className="my-2">
            As an experienced software developer with over 3 years in the field,
            I have developed a deep understanding of enterprise software
            development, agile teams, and software design patterns.
          </p>
          <p className="my-2">
            I take pride in delivering top-notch code and user-friendly
            experiences, consistently striving for excellence in everything I
            do.
          </p>
        </div>
        <div className="flex justify-evenly flex-row py-20 w-4/5 mx-auto">
          <a href="https://www.facebook.com/username" target="_blank">
            <BsFacebook className="color-white text-2xl" />
          </a>
          <a href="https://www.twitter.com/username" target="_blank">
            <BsTwitter className="color-white text-2xl" />
          </a>
          <a href="https://www.instagram.com/username" target="_blank">
            <BsInstagram className="color-white text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/username" target="_blank">
            <BsLinkedin className="color-white text-2xl" />
          </a>
        </div>
      </div>
      {/* ALL OUR WORK IS HER ATM */}
      <div className="hidden lg:block lg:w-1/5"></div>
      <div className="w-full lg:w-4/5">
        <Hero />
        <About />
        <Resume />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}
