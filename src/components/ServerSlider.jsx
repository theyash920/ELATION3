import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Register GSAP React plugin
gsap.registerPlugin(useGSAP);

// Icon components
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

const ServiceSlider = () => {
  const sliderRef = useRef(null);

  useGSAP(() => {
    // Animate the slider container
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out",
        delay: 0.3
      }
    );
  }, []);

  const services = [
    {
      id: 1,
      title: "Marketing Strategy",
      subtitle: "Strategic Planning",
      icon: <ChartIcon />,
      color: "blue",
      items: [
        { title: "Audience Mapping", desc: "identify segments and uncover digital opportunities to win attention." },
        { title: "Competitor Analysis", desc: "scan messaging, hooks, and funnels to spot market gaps." },
        { title: "Brand Positioning", desc: "define how your brand communicates and builds recall." },
        { title: "Campaign Ideation", desc: "plan micro-campaigns and activations aligned with growth." }
      ]
    },
    {
      id: 2,
      title: "Content Creation",
      subtitle: "Creative Production",
      icon: <CreativeIcon />,
      color: "green",
      items: [
        { title: "Scripts & Copy", desc: "craft stories, captions, and ad copy that convert attention into action." },
        { title: "Video Production", desc: "produce Reels, Shorts, UGC, and founder-led content tailored to your audience." },
        { title: "Design & Carousels", desc: "deliver graphics and visual assets that stand out in crowded feeds." },
        { title: "Creative Testing", desc: "generate multiple hooks and variations to find what performs best." }
      ]
    },
    {
      id: 3,
      title: "Editing & Distribution",
      subtitle: "Content Delivery",
      icon: <DistributionIcon />,
      color: "purple",
      items: [
        { title: "Video Editing", desc: "turn raw footage into scroll-stopping content with sharp cuts and motion graphics." },
        { title: "Platform Packaging", desc: "adapt content into native formats for Instagram, YouTube, LinkedIn, and TikTok." },
        { title: "Multi-Account Publishing", desc: "distribute across founder, brand, and partner handles for reach." },
        { title: "Strategic Scheduling", desc: "optimize timing and seed content with creators to drive recall." }
      ]
    },
    {
      id: 4,
      title: "Performance Marketing",
      subtitle: "Paid Advertising",
      icon: <PerformanceIcon />,
      color: "orange",
      items: [
        { title: "Awareness Ads", desc: "capture attention and grow brand recall on Meta, YouTube, and LinkedIn with efficient CPM." },
        { title: "Engagement Ads", desc: "deliver value through saves, shares, and interactions to lift engagement rates." },
        { title: "Retargeting Ads", desc: "re-engage warm audiences, improving CTR and lowering CPL." },
        { title: "Conversion Ads", desc: "lead audiences to purchase or inquiry, delivering positive ROAS and revenue." }
      ]
    },
    {
      id: 5,
      title: "Insights & Optimization",
      subtitle: "Data & Analytics",
      icon: <InsightsIcon />,
      color: "cyan",
      items: [
        { title: "Competitor Reports", desc: "deliver bi-weekly scans of trends, hooks, and opportunities in your category." },
        { title: "Performance Tracking", desc: "we measure CPM, ROAS, hook rate, engagement metrics, CPL, ROI, and any other given KPI to refine output." },
        { title: "Audience Feedback", desc: "turn comments, polls, and DMs into actionable creative inputs." },
        { title: "Continuous Refresh", desc: "update ads, reallocate budgets, and sharpen content for compounding ROI." }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        border: "hover:border-blue-500/60",
        shadow: "hover:shadow-blue-500/20",
        bg: "from-blue-600/8 via-transparent to-blue-800/8",
        icon: "from-blue-500 to-blue-600",
        iconShadow: "group-hover:shadow-blue-500/50",
        text: "group-hover:text-blue-100",
        accent: "text-blue-400",
        itemText: "group-hover/item:text-blue-300",
        arrow: "text-blue-400"
      },
      green: {
        border: "hover:border-green-500/60",
        shadow: "hover:shadow-green-500/20",
        bg: "from-green-600/8 via-transparent to-green-800/8",
        icon: "from-green-500 to-green-600",
        iconShadow: "group-hover:shadow-green-500/50",
        text: "group-hover:text-green-100",
        accent: "text-green-400",
        itemText: "group-hover/item:text-green-300",
        arrow: "text-green-400"
      },
      purple: {
        border: "hover:border-purple-500/60",
        shadow: "hover:shadow-purple-500/20",
        bg: "from-purple-600/8 via-transparent to-purple-800/8",
        icon: "from-purple-500 to-purple-600",
        iconShadow: "group-hover:shadow-purple-500/50",
        text: "group-hover:text-purple-100",
        accent: "text-purple-400",
        itemText: "group-hover/item:text-purple-300",
        arrow: "text-purple-400"
      },
      orange: {
        border: "hover:border-orange-500/60",
        shadow: "hover:shadow-orange-500/20",
        bg: "from-orange-600/8 via-transparent to-orange-800/8",
        icon: "from-orange-500 to-orange-600",
        iconShadow: "group-hover:shadow-orange-500/50",
        text: "group-hover:text-orange-100",
        accent: "text-orange-400",
        itemText: "group-hover/item:text-orange-300",
        arrow: "text-orange-400"
      },
      cyan: {
        border: "hover:border-cyan-500/60",
        shadow: "hover:shadow-cyan-500/20",
        bg: "from-cyan-600/8 via-transparent to-cyan-800/8",
        icon: "from-cyan-500 to-cyan-600",
        iconShadow: "group-hover:shadow-cyan-500/50",
        text: "group-hover:text-cyan-100",
        accent: "text-cyan-400",
        itemText: "group-hover/item:text-cyan-300",
        arrow: "text-cyan-400"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div ref={sliderRef} className="w-full max-w-7xl mx-auto px-4">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="service-swiper"
      >
        {services.map((service) => {
          const colorClasses = getColorClasses(service.color);
          return (
            <SwiperSlide key={service.id} className="!w-96">
              <div className={`service-card group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-8 ${colorClasses.border} transition-all duration-500 shadow-2xl ${colorClasses.shadow} hover:shadow-2xl w-full h-[420px]`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  {service.icon}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className={`service-icon flex items-center justify-center w-12 h-12 bg-gradient-to-br ${colorClasses.icon} rounded-2xl mr-4 shadow-lg ${colorClasses.iconShadow} transition-all duration-300`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold text-white ${colorClasses.text} transition-colors`}>
                        {service.title}
                      </h3>
                      <p className={`${colorClasses.accent} text-sm font-medium`}>{service.subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {service.items.map((item, index) => (
                      <div key={index} className="flex items-start group/item">
                        <span className={`${colorClasses.arrow} mr-3 mt-1 text-xs`}>▶</span>
                        <div className="text-gray-300 text-sm leading-relaxed">
                          <span className={`text-white font-semibold ${colorClasses.itemText} transition-colors`}>
                            {item.title}
                          </span> → {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style>{`
        .service-swiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .service-swiper .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
          height: 400px;
        }

        .service-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }

        .service-swiper .swiper-pagination-bullet-active {
          background: #fff;
        }

        .service-swiper .swiper-button-next,
        .service-swiper .swiper-button-prev {
          color: rgba(255, 255, 255, 0.8);
          background: rgba(0, 0, 0, 0.5);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .service-swiper .swiper-button-next:hover,
        .service-swiper .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }

        .service-swiper .swiper-button-next:after,
        .service-swiper .swiper-button-prev:after {
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .service-swiper .swiper-slide {
            width: 280px;
            height: 380px;
          }
          
          .service-swiper .swiper-button-next,
          .service-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceSlider;