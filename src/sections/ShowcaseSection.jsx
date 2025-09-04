import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Icon components for better visual hierarchy
const ChartIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>
    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
  </svg>
);

const CreativeIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
  </svg>
);

const DistributionIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const PerformanceIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
  </svg>
);

const InsightsIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z"/>
    <path fillRule="evenodd" d="M5 14a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd"/>
  </svg>
);

const IndustryIcon = ({ type }) => {
  const icons = {
    alcobev: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z"/>
      </svg>
    ),
    podcast: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-2.21-.895-4.21-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 12a5.984 5.984 0 01-.757 2.828 1 1 0 11-1.415-1.414A3.987 3.987 0 0013 12a3.988 3.988 0 00-.172-1.414 1 1 0 010-1.415z" clipRule="evenodd"/>
      </svg>
    ),
    restaurant: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
      </svg>
    ),
    d2c: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd"/>
      </svg>
    ),
    legacy: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"/>
      </svg>
    ),
    authors: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V4.804z"/>
      </svg>
    ),
    doctors: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>
    ),
    entrepreneurs: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
      </svg>
    )
  };
  return icons[type] || icons.d2c;
};

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );

    // Animate title
    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: -30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".section-title",
          start: "top bottom-=50",
        }
      }
    );

    // Animate service cards with stagger
    const serviceCards = gsap.utils.toArray('.service-card');
    gsap.fromTo(
      serviceCards,
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
        rotationX: 45
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top bottom-=100",
        },
      }
    );

    // Animate industry cards
    const industryCards = gsap.utils.toArray('.industry-card');
    gsap.fromTo(
      industryCards,
      {
        y: 60,
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".industries-grid",
          start: "top bottom-=80",
        },
      }
    );

    // Enhanced hover animations with more interactive elements
    serviceCards.forEach(card => {
      const icon = card.querySelector('.service-icon');
      const backdrop = card.querySelector('.service-backdrop');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -12,
          scale: 1.03,
          duration: 0.4,
          ease: "power2.out"
        });
        
        if (icon) {
          gsap.to(icon, {
            rotation: 10,
            scale: 1.1,
            duration: 0.4,
            ease: "back.out(1.7)"
          });
        }
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
        
        if (icon) {
          gsap.to(icon, {
            rotation: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        }
      });
    });

    industryCards.forEach(card => {
      const icon = card.querySelector('.industry-icon');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
        
        if (icon) {
          gsap.to(icon, {
            rotation: 5,
            scale: 1.2,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        }
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
        
        if (icon) {
          gsap.to(icon, {
            rotation: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    });

    // Floating animation for background elements
    gsap.to(".floating-bg-1", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    gsap.to(".floating-bg-2", {
      y: 15,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1
    });

    gsap.to(".floating-bg-3", {
      y: -10,
      duration: 2.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase flex flex-col items-stretch justify-start gap-16 py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="floating-bg-1 absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="floating-bg-2 absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="floating-bg-3 absolute bottom-20 left-1/2 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      {/* What We Will Do For You Section */}
      <div className="relative z-10 text-center mb-20">
        <div className="mb-6">
          {/*<span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-200 text-sm font-medium mb-6">
            ✨ Our Services
          </span>*/}
        </div>
        <h1 className="section-title text-3xl md:text-5xl lg:text-5xl font-black text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
          What We Will Do For You<br />
         {/* <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">For You</span> */}
        </h1>
        
        <div className="flex justify-center items-center space-x-4">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mb-32">
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Marketing Strategy Card */}
          <div className="service-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-8 hover:border-blue-500/60 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20 hover:shadow-2xl w-full h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-blue-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <ChartIcon />
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="service-icon flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mr-4 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <ChartIcon />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors">Marketing Strategy</h3>
                  <p className="text-blue-400 text-sm font-medium">Strategic Planning</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group/item">
                  <span className="text-blue-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-blue-300 transition-colors">Audience Mapping</span> → identify segments and uncover digital opportunities to win attention.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-blue-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-blue-300 transition-colors">Competitor Analysis</span> → scan messaging, hooks, and funnels to spot market gaps.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-blue-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-blue-300 transition-colors">Brand Positioning</span> → define how your brand communicates and builds recall.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-blue-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-blue-300 transition-colors">Campaign Ideation</span> → plan micro-campaigns and activations aligned with growth.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Creation Card */}
          <div className="service-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-8 hover:border-green-500/60 transition-all duration-500 shadow-2xl hover:shadow-green-500/20 hover:shadow-2xl w-full h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/8 via-transparent to-green-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <CreativeIcon />
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="service-icon flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mr-4 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                  <CreativeIcon />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-100 transition-colors">Content Creation</h3>
                  <p className="text-green-400 text-sm font-medium">Creative Production</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group/item">
                  <span className="text-green-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-green-300 transition-colors">Scripts & Copy</span> → craft stories, captions, and ad copy that convert attention into action.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-green-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-green-300 transition-colors">Video Production</span> → produce Reels, Shorts, UGC, and founder-led content tailored to your audience.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-green-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-green-300 transition-colors">Design & Carousels</span> → deliver graphics and visual assets that stand out in crowded feeds.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-green-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-green-300 transition-colors">Creative Testing</span> → generate multiple hooks and variations to find what performs best.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editing & Distribution Card */}
          <div className="service-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-8 hover:border-purple-500/60 transition-all duration-500 shadow-2xl hover:shadow-purple-500/20 hover:shadow-2xl w-full h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/8 via-transparent to-purple-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <DistributionIcon />
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="service-icon flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mr-4 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <DistributionIcon />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-100 transition-colors">Editing & Distribution</h3>
                  <p className="text-purple-400 text-sm font-medium">Content Delivery</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group/item">
                  <span className="text-purple-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-purple-300 transition-colors">Video Editing</span> → turn raw footage into scroll-stopping content with sharp cuts and motion graphics.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-purple-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-purple-300 transition-colors">Platform Packaging</span> → adapt content into native formats for Instagram, YouTube, LinkedIn, and TikTok.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-purple-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-purple-300 transition-colors">Multi-Account Publishing</span> → distribute across founder, brand, and partner handles for reach.
                  </div>
                </div> 
                <div className="flex items-start group/item">
                  <span className="text-purple-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-purple-300 transition-colors">Strategic Scheduling</span> → optimize timing and seed content with creators to drive recall.
                  </div>
                </div> 
              </div>
            </div>
          </div>

          {/* Performance Marketing Card */}
          <div className="service-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-8 hover:border-orange-500/60 transition-all duration-500 shadow-2xl hover:shadow-orange-500/20 hover:shadow-2xl w-full h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/8 via-transparent to-orange-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <PerformanceIcon />
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="service-icon flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mr-4 shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                  <PerformanceIcon />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors">Performance Marketing</h3>
                  <p className="text-orange-400 text-sm font-medium">Paid Advertising</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group/item">
                  <span className="text-orange-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-orange-300 transition-colors">Awareness Ads</span> → capture attention and grow brand recall on Meta, YouTube, and LinkedIn with efficient CPM.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-orange-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-orange-300 transition-colors">Engagement Ads</span> → deliver value through saves, shares, and interactions to lift engagement rates.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-orange-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-orange-300 transition-colors">Retargeting Ads</span> → re-engage warm audiences, improving CTR and lowering CPL.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-orange-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-orange-300 transition-colors">Conversion Ads</span> → lead audiences to purchase or inquiry, delivering positive ROAS and revenue.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Insights & Optimization Card */}
          <div className="service-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-8 hover:border-cyan-500/60 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 hover:shadow-2xl w-full h-[425px]"> 
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/8 via-transparent to-cyan-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <InsightsIcon />
            </div>
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="service-icon flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl mr-4 shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                  <InsightsIcon />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">Insights & Optimization</h3>
                  <p className="text-cyan-400 text-sm font-medium">Data & Analytics</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start group/item">
                  <span className="text-cyan-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-cyan-300 transition-colors">Competitor Reports</span> → deliver bi-weekly scans of trends, hooks, and opportunities in your category.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-cyan-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-cyan-300 transition-colors">Performance Tracking</span> → we measure CPM, ROAS, hook rate, engagement metrics, CPL, ROI, and any other given KPI to refine output.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-cyan-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-cyan-300 transition-colors">Audience Feedback</span> → turn comments, polls, and DMs into actionable creative inputs.
                  </div>
                </div>
                <div className="flex items-start group/item">
                  <span className="text-cyan-400 mr-3 mt-1 text-xs">▶</span>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    <span className="text-white font-semibold group-hover/item:text-cyan-300 transition-colors">Continuous Refresh</span> → update ads, reallocate budgets, and sharpen content for compounding ROI.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Brand Categories Section */}
      <div className="relative z-10 text-center mb-20">
        <div className="mb-6">
          {/*<span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-200 text-sm font-medium mb-6">
            🎯 Industry Expertise
          </span>*/}
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent leading-tight">
          Who We Do It For<br /></h2>
          {/*<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">Industries</span>
        */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="industries-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Alcobev Brands */}
          <div className="industry-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 hover:border-orange-500/60 transition-all duration-500 shadow-xl hover:shadow-orange-500/20 w-full h-90">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/8 via-transparent to-orange-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                  <IndustryIcon type="alcobev" />
                </div>
                <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full">Project-Based</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors">Alcobev Brands</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-orange-400 font-semibold text-xs">Challenge:</span>
                  <p className="text-gray-300 text-xs mt-1">Crowded markets where creating buzz and loyalty is difficult.</p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-orange-400 font-semibold text-xs">Solution:</span>
                  <p className="text-gray-300 text-xs mt-1">Creative campaigns, cultural activations, UGC integration, and performance marketing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Podcasters */}
          <div className="industry-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 hover:border-blue-500/60 transition-all duration-500 shadow-xl hover:shadow-blue-500/20 w-full h-90">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-blue-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <IndustryIcon type="podcast" />
                </div>
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full">Sprint</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">Podcasters</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-blue-400 font-semibold text-xs">Challenge:</span>
                  <p className="text-gray-300 text-xs mt-1">Growing reach and building a loyal listener base.</p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-blue-400 font-semibold text-xs">Solution:</span>
                  <p className="text-gray-300 text-xs mt-1">Content design, audience-specific distribution, and engagement-driven micro-campaigns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurants */}
          <div className="industry-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 hover:border-green-500/60 transition-all duration-500 shadow-xl hover:shadow-green-500/20 w-full h-90">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/8 via-transparent to-green-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                  <IndustryIcon type="restaurant" />
                </div>
                <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full">Sprint</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-100 transition-colors">Restaurants</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-green-400 font-semibold text-xs">Challenge:</span>
                  <p className="text-gray-300 text-xs mt-1">Generating awareness and repeat customers in competitive spaces.</p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-green-400 font-semibold text-xs">Solution:</span>
                  <p className="text-gray-300 text-xs mt-1">Campaign-led storytelling, localized activations, video/photo content, and targeted awareness ads.</p>
                </div>
              </div>
            </div>
          </div>

          {/* D2C Brands */}
          <div className="industry-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 hover:border-purple-500/60 transition-all duration-500 shadow-xl hover:shadow-purple-500/20 w-full h-90">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/8 via-transparent to-purple-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <IndustryIcon type="d2c" />
                </div>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full">Consultancy</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors">D2C Brands</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-purple-400 font-semibold text-xs">Challenge:</span>
                  <p className="text-gray-300 text-xs mt-1">Connecting with Gen Z through content, distribution, and ad funnels.</p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-purple-400 font-semibold text-xs">Solution:</span>
                  <p className="text-gray-300 text-xs mt-1">End-to-end marketing strategy, sharp creatives, influencer/UGC integration, and performance campaigns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legacy Brands */}
          <div className="industry-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 hover:border-red-500/60 transition-all duration-500 shadow-xl hover:shadow-red-500/20 w-full h-90">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/8 via-transparent to-red-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg group-hover:shadow-red-500/50 transition-all duration-300">
                  <IndustryIcon type="legacy" />
                </div>
                <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs font-medium rounded-full">Retainer</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors">Legacy Brands</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-red-400 font-semibold text-xs">Challenge:</span>
                  <p className="text-gray-300 text-xs mt-1">Shifting from distribution-led growth to relevance with younger audiences.</p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-red-400 font-semibold text-xs">Solution:</span>
                  <p className="text-gray-300 text-xs mt-1">Refreshed communication strategy, recall-first campaigns, content distribution, and loyalty micro-campaigns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Authors & Thought Leaders */}
          <div className="industry-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 hover:border-indigo-500/60 transition-all duration-500 shadow-xl hover:shadow-indigo-500/20 w-full h-90">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 via-transparent to-indigo-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300">
                  <IndustryIcon type="authors" />
                </div>
                <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-medium rounded-full">Retainer</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-100 transition-colors">Authors & Thought Leaders</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-indigo-400 font-semibold text-xs">Problem:</span>
                  <p className="text-gray-300 text-xs mt-1">Building recall and credibility beyond a book launch.</p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-indigo-400 font-semibold text-xs">Solution:</span>
                  <p className="text-gray-300 text-xs mt-1">Brand positioning, personal brand engines, strategic content buckets, high-converting video content, and full-funnel campaigns.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Doctors */}
          <div className="industry-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 hover:border-teal-500/60 transition-all duration-500 shadow-xl hover:shadow-teal-500/20 w-full h-90">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/8 via-transparent to-teal-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl shadow-lg group-hover:shadow-teal-500/50 transition-all duration-300">
                  <IndustryIcon type="doctors" />
                </div>
                <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs font-medium rounded-full">Retainer</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-100 transition-colors">Doctors</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-teal-400 font-semibold text-xs">Problem:</span>
                  <p className="text-gray-300 text-xs mt-1">Turning medical expertise into trust and consistent patient acquisition.</p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-teal-400 font-semibold text-xs">Solution:</span>
                  <p className="text-gray-300 text-xs mt-1">Audience mapping, positioning frameworks, credibility-led content, ad funnels for leads, and continuous optimization.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Entrepreneurs */}
          <div className="industry-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6 hover:border-yellow-500/60 transition-all duration-500 shadow-xl hover:shadow-yellow-500/20 w-full h-90">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/8 via-transparent to-yellow-800/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="industry-icon flex items-center justify-center w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300">
                  <IndustryIcon type="entrepreneurs" />
                </div>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-full">Retainer</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-100 transition-colors">Entrepreneurs</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-yellow-400 font-semibold text-xs">Problem:</span>
                  <p className="text-gray-300 text-xs mt-1">Lack of consistent content and distribution to establish authority.</p>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-xl border border-gray-700/30">
                  <span className="text-yellow-400 font-semibold text-xs">Solution:</span>
                  <p className="text-gray-300 text-xs mt-1">Content strategy, multi-platform pipelines, and micro-campaigns designed to scale authority and trust.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;