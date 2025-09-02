import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

// Define this array in your component file or import it.
// Define this array in your component file or import it.
const offeringCards = [
  {
    title: "Digital Marketing Strategy",
    subtitle: "Data-Driven Strategies for Measurable Growth & ROI.",
    benefits: [
      "Comprehensive market analysis and audience segmentation.",
      "Customized multi-channel marketing roadmaps.",
      "Performance tracking and continuous optimization.",
      "Clear, transparent reporting on key metrics.",
    ],
    testimonial: "Their strategic approach doubled our lead generation in just one quarter. Invaluable partnership!",
    clientName: "Sarah Johnson",
    clientTitle: "CEO, Innovate Co.",
  },
  {
    title: "Social Media Management",
    subtitle: "Engaging Content & Community Building Across Platforms.",
    benefits: [
      "Compelling content creation tailored to each platform.",
      "Active community management and audience interaction.",
      "Strategic campaign planning and execution.",
      "Brand awareness and lead generation through social channels.",
    ],
    testimonial: "Our social engagement is up 300%. They truly understand our brand voice and our audience.",
    clientName: "David Lee",
    clientTitle: "Marketing Director, FusionWear",
  },
  {
    title: "Search Engine Optimization (SEO)",
    subtitle: "Improving Visibility & Driving Organic Traffic to Your Website.",
    benefits: [
      "In-depth keyword research and on-page optimization.",
      "High-quality link building and off-page strategies.",
      "Technical SEO audits for site health and performance.",
      "Increased organic search rankings and qualified leads.",
    ],
    testimonial: "We hit the first page for our top keywords within six months. The results speak for themselves.",
    clientName: "Emily Chen",
    clientTitle: "Founder, Bloom & Stem",
  },
];
const Solutions = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
        },
      });
    });

    // Animate the timeline height as the user scrolls
    // from the top of the timeline to 70% down the screen
    // The timeline height should scale down from 1 to 0
    // as the user scrolls up the screen
    gsap.to(".timeline", {
      // Set the origin of the animation to the bottom of the timeline
      transformOrigin: "bottom bottom",
      // Animate the timeline height over 1 second
      ease: "power1.inOut",
      // Trigger the animation when the timeline is at the top of the screen
      // and end it when the timeline is at 70% down the screen
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // Update the animation as the user scrolls
        onUpdate: (self) => {
          // Scale the timeline height as the user scrolls
          // from 1 to 0 as the user scrolls up the screen
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="solutions"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        {/* FIX 1: Added a flex container to prevent overlap and manage spacing */}
        <div className="flex flex-col items-center gap-16">
          <TitleHeader
            title="Our Core Services"
            sub="💡 Engineering the Digital Future of Your Business"
          />

          <div className="relative z-50 w-full">
            <div className="xl:space-y-32 space-y-20">
              {offeringCards.map((card) => (
                <div key={card.title} className="exp-card-wrapper">
                  <div className="xl:w-2/6">
                    <GlowCard card={card}>
                      {/* FIX 2: Replaced the simple image with a testimonial card structure */}
                      <div className="flex flex-col items-center text-center p-8 h-full justify-center">
                        <div className="text-2xl text-yellow-400">★★★★★</div>
                        <p className="mt-4 italic text-white-50">
                          "{card.testimonial}"
                        </p>
                        <div className="mt-6">
                          <img
                            src="/images/logo2.png" // This is your client's logo
                            alt="Client Logo"
                            className="w-12 h-12 mx-auto rounded-full"
                          />
                          <p className="mt-2 font-bold">{card.clientName}</p>
                          <p className="text-sm text-[#839CB5]">{card.clientTitle}</p>
                        </div>
                      </div>
                    </GlowCard>
                  </div>
                  <div className="xl:w-4/6">
                    <div className="flex items-start">
                      <div className="timeline-wrapper">
                        <div className="timeline" />
                        <div className="gradient-line w-1 h-full" />
                      </div>
                      <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                        <div className="timeline-logo">
                          {/* This is your company's logo for the timeline */}
                          <img src="/images/logo1.png" alt="logo" />
                        </div>
                        <div>
                          <h1 className="font-semibold text-3xl">{card.title}</h1>
                          <p className="my-5 text-white-50">
                            📈&nbsp;{card.subtitle}
                          </p>
                          <p className="text-[#839CB5] italic">Key Benefits</p>
                          <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                            {card.benefits.map((benefit, index) => (
                              <li key={index} className="text-lg">
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Solutions;
