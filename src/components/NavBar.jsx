import { useState, useEffect } from "react";

import { navLinks } from "../constants";
import elationLogo from '../images/elationlogo.jpg';

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
      <a href="#hero" className="logo">
        <img src={elationLogo} alt="Elation Logo" style={{ height: '100px', width: '56px', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', marginRight: '16px', objectFit: 'cover' }} />
      </a>

      <nav className="desktop">
        <ul>
          {navLinks.map(({ link, name }) => (
            <li key={name} className="group">
              <a href={link}>
                <span>{name}</span>
                <span className="underline" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href="#contact"
        aria-label="Book a call"
        className="relative inline-flex h-12 md:h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 hover:scale-105"
      >
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_25%,#FF6B6B_50%,#4ECDC4_75%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black px-6 md:px-8 py-1 text-sm md:text-base font-semibold text-white backdrop-blur-3xl transition-all duration-300 hover:bg-gray-900">
          <span className="mr-2">Book a call</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </a>
    </div>
    </header >
  );
}

export default NavBar;
