import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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

    // Add hover animations
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    });

    industryCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -5,
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black">
      {/* What We Will Do For You Section */}
      <div className="text-center mb-20">
        <h1 className="section-title text-5xl md:text-6xl font-black text-white mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
          What We Will Do For You
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto mb-32">
        <div className="services-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Marketing Strategy Card */}
          <div className="service-card group relative overflow-hidden bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-500 shadow-2xl hover:shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 animate-pulse"></div>
                <h3 className="text-2xl font-bold text-white">Marketing Strategy</h3>
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
          <div className="service-card group relative overflow-hidden bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 hover:border-green-500/40 transition-all duration-500 shadow-2xl hover:shadow-green-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-transparent to-green-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4 animate-pulse"></div>
                <h3 className="text-2xl font-bold text-white">Content Creation</h3>
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
          <div className="service-card group relative overflow-hidden bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-500 shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-purple-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-4 animate-pulse"></div>
                <h3 className="text-2xl font-bold text-white">Editing & Distribution</h3>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Categories Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise Across Industries</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Alcobev Brands */}
          <div className="showcase-card group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-gray-600/70 transition-all duration-300">
            <h3 className="text-lg font-bold text-white mb-3">Alcobev Brands</h3>
            <div className="space-y-2 text-gray-300 text-xs">
              <div>
                <span className="text-orange-400 font-semibold">Problem:</span> crowded markets where creating buzz and loyalty is difficult.
              </div>
              <div>
                <span className="text-orange-400 font-semibold">Solution:</span> creative campaigns, cultural activations, UGC integration, and performance marketing across Meta & YouTube.
              </div>
              <div>
                <span className="text-orange-400 font-semibold">Engagement:</span> Project-Based.
              </div>
            </div>
          </div>

          {/* Podcasters */}
          <div className="showcase-card group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-gray-600/70 transition-all duration-300">
            <h3 className="text-lg font-bold text-white mb-3">Podcasters</h3>
            <div className="space-y-2 text-gray-300 text-xs">
              <div>
                <span className="text-blue-400 font-semibold">Problem:</span> growing reach and building a loyal listener base.
              </div>
              <div>
                <span className="text-blue-400 font-semibold">Solution:</span> content design, audience-specific distribution, and engagement-driven micro-campaigns.
              </div>
              <div>
                <span className="text-blue-400 font-semibold">Engagement:</span> Sprint.
              </div>
            </div>
          </div>

          {/* Restaurants */}
          <div className="showcase-card group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-gray-600/70 transition-all duration-300">
            <h3 className="text-lg font-bold text-white mb-3">Restaurants</h3>
            <div className="space-y-2 text-gray-300 text-xs">
              <div>
                <span className="text-green-400 font-semibold">Problem:</span> generating awareness and repeat customers in competitive spaces.
              </div>
              <div>
                <span className="text-green-400 font-semibold">Solution:</span> campaign-led storytelling, localized activations, video/photo content, and targeted awareness ads.
              </div>
              <div>
                <span className="text-green-400 font-semibold">Engagement:</span> Sprint.
              </div>
            </div>
          </div>

          {/* D2C Brands */}
          <div className="showcase-card group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-gray-600/70 transition-all duration-300">
            <h3 className="text-lg font-bold text-white mb-3">D2C Brands</h3>
            <div className="space-y-2 text-gray-300 text-xs">
              <div>
                <span className="text-purple-400 font-semibold">Problem:</span> connecting with Gen Z through content, distribution, and ad funnels.
              </div>
              <div>
                <span className="text-purple-400 font-semibold">Solution:</span> end-to-end marketing strategy, sharp creatives, influencer/UGC integration, and performance campaigns.
              </div>
              <div>
                <span className="text-purple-400 font-semibold">Engagement:</span> Consultancy.
              </div>
            </div>
          </div>

          {/* Legacy Brands */}
          <div className="showcase-card group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-gray-600/70 transition-all duration-300">
            <h3 className="text-lg font-bold text-white mb-3">Legacy Brands</h3>
            <div className="space-y-2 text-gray-300 text-xs">
              <div>
                <span className="text-red-400 font-semibold">Problem:</span> shifting from distribution-led growth to relevance with younger audiences.
              </div>
              <div>
                <span className="text-red-400 font-semibold">Solution:</span> refreshed communication strategy, recall-first campaigns, content distribution, and loyalty micro-campaigns.
              </div>
              <div>
                <span className="text-red-400 font-semibold">Engagement:</span> Retainer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;