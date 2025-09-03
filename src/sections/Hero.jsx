import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

// Mock data for video cards
const videoCards = [
  {
    id: 1,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "found Aretto",
    position: "left-[5%] top-[20%]",
    delay: 0.2,
    rotation: -5
  },
  {
    id: 2,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "SPECSMAKERS",
    position: "left-[25%] top-[15%]",
    delay: 0.4,
    rotation: 3
  },
  {
    id: 3,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "IN FIBRE, EASIER",
    label: "Sauble Diwali",
    position: "left-[45%] top-[10%]",
    delay: 0.6,
    rotation: -2
  },
  {
    id: 4,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "YOU NEED",
    subtitle: "STAY REAL",
    position: "right-[25%] top-[15%]",
    delay: 0.8,
    rotation: 4
  },
  {
    id: 5,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Found my match: SunScoop",
    position: "right-[5%] top-[20%]",
    delay: 1,
    rotation: -3
  }
];

const VideoCard = ({ video, index }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <div
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
      style={{
        animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
        animationDelay: `${video.delay}s`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-64 h-80 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            {video.label && (
              <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full mb-2">
                {video.label}
              </span>
            )}
            <h3 className="text-lg font-bold">{video.title}</h3>
            {video.subtitle && (
              <p className="text-sm text-gray-300">{video.subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  useGSAP(() => {
    // Animate hero title words with stagger
    gsap.fromTo(
      ".hero-title span",
      { y: 100, opacity: 0, rotateX: 90 },
      { 
        y: 0, 
        opacity: 1, 
        rotateX: 0,
        stagger: 0.3, 
        duration: 1.2, 
        ease: "power3.out",
        delay: 0.5
      }
    );

    // Animate the dots between words
    gsap.fromTo(
      ".hero-dot",
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8, 
        ease: "back.out(1.7)",
        delay: 1.5
      }
    );

    // Animate description text
    gsap.fromTo(
      ".hero-description",
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out",
        delay: 2
      }
    );

    // Animate CTA button
    gsap.fromTo(
      ".hero-cta",
      { y: 30, opacity: 0, scale: 0.8 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        ease: "back.out(1.7)",
        delay: 2.3
      }
    );

    // Continuous floating animation for the main title
    gsap.to(".hero-title", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  });

  return (
    <section id="hero" className="relative overflow-hidden bg-black pt-24 md:pt-28">
      {/* Background image */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Centered Hero Content */}
        <header className="flex-1 flex items-center justify-center w-full md:px-20 px-5 mt-16">
          <div className="mx-auto max-w-6xl flex flex-col items-center text-center gap-8">
            
            {/* Large ATTENTION RECALL REVENUE */}
            <div className="relative mb-8 z-10">
              <h1 className="hero-title text-5xl md:text-7xl lg:text-6xl xl:text-6xl font-bold text-white mb-4 leading-tight uppercase tracking-wider">
                <span className="inline-block text-white">ATTENTION</span>
                <span className="hero-dot text-gray-400 mx-4">•</span>
                <span className="inline-block text-white/90">RECALL</span>
                <span className="hero-dot text-gray-400 mx-4">•</span>
                <span className="inline-block text-white/80">REVENUE</span>
              </h1>
            </div> 

            {/* Smaller Description */}
            <div className="relative max-w-3xl">
              <p className="hero-description text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                We start by listening to your audience,then we create content buckets that capture their attention and distribute them where they'll matter most. With recall in place, ads drive sales while micro-campaigns and UGC build loyalty, creating both immediate growth and long-term lifetime value
              </p>
            </div>

            {/* Enhanced CTA Button */}
            <div className="hero-cta relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <button className="relative inline-flex h-14 md:h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 hover:scale-105">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_25%,#FF6B6B_50%,#4ECDC4_75%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-base md:text-lg font-semibold text-white backdrop-blur-3xl transition-all duration-300 hover:bg-gray-900">
                  <span className="mr-2">Book a call</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>

          </div>
        </header> 

        {/* Video Cards Section - Below Hero Text */}
        <div className="relative w-full py-20">
          <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Our Work Showcase
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
              {videoCards.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          </div>
        </div>

        <AnimatedCounter />
      </div> 

      {/* CSS for float animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
