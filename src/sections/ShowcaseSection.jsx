import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import vogueVistaImg from '../images/voguevista.webp';
import nexusAiimg from '../images/nexusai.webp'
import artesianRoastImg from "../images/artesian-roast.webp";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      {/* Optional: Add a title for the section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Our Success Stories</h1>
        <p className="text-xl text-white-50 mt-4">See how Elation drives real results for brands.</p>
      </div>

      <div className="w-full">
        <div className="showcaselayout">
          {/* === FEATURED CAMPAIGN === */}
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              {/* Replace with an image of a campaign dashboard, ad creative, or results graph */}
              <img src={vogueVistaImg} alt="VogueVista Campaign Showcase" width={100} />
            </div>
            <div className="text-content">
              <h2>
                Launching VogueVista: A Full-Funnel Strategy that Boosted Sales by 300%
              </h2>
              <p className="text-white-50 md:text-xl">
                A multi-channel campaign integrating Paid Social, Influencer Marketing, and SEO to captivate a new generation of fashion lovers.
              </p>
            </div>
          </div>

          {/* === SMALLER CASE STUDIES === */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                {/* Replace with an image of a content marketing piece, like a blog or whitepaper design */}
                <img
                  src={nexusAiimg}
                  alt="Nexus AI Content Marketing Case Study"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />              </div>
              <h2>Nexus AI: Driving B2B Leads with Targeted Content Marketing</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                {/* Replace with an image of social media content, like an Instagram grid */}
                <img src={artesianRoastImg} alt="The Artisan Roast Social Media Campaign" />
              </div>
              <h2>The Artisan Roast: Brewing Community on Social Media</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
