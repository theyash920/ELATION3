import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Elevating
                <span className="slide">
                  <span className="wrapper">
                    {/* Assumes `words` is an array like:
                const words = [
                  { text: "Strategies", imgPath: "/path/to/icon.png" },
                  { text: "Campaigns", imgPath: "/path/to/icon.png" },
                  { text: "Brands", imgPath: "/path/to/icon.png" },
                ];
              */}
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={`${word.text} icon`}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span className="text-cyan-400">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Powerful Brands</h1>
              <h1>that Drive Growth</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Welcome to Elation, a results-driven marketing firm <br /> passionate about
              building memorable brands that connect and convert.
            </p>

            <Button
              text="Explore Our Services"
              className="md:w-80 md:h-16 w-60 h-12"
              id="cta-button"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
