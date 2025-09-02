import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";
import innovationImg from '../images/values2.png';
import customerService from '../images/values1.png';
import integrity from '../images/values3.png';
import collaboration from '../images/values4.png';
import accountability from '../images/values5.png';
import adaptability from '../images/values6.png';
import wellBeing from '../images/values7.png';
import transparency from '../images/values8.png';
import improvement from '../images/values9.png';

// import { techStackImgs } from "../constants";

// Define this new array in your component file or import it.
// You will need to create these SVG or PNG icons yourself.
const companyValues = [
  { name: 'Customer Focus', iconPath: customerService }, 
  { name: 'Innovation', iconPath: innovationImg },
  { name: 'Integrity', iconPath: integrity },
  { name: 'Collaboration', iconPath: collaboration },
  { name: 'Accountability', iconPath: accountability },
  { name: 'Adaptability', iconPath: adaptability },
  { name: 'Well-being', iconPath: wellBeing },
  { name: 'Transparency', iconPath: transparency },
  { name: 'Improvement', iconPath: improvement },
];
const TechStack = () => {
  // Animate the tech cards in the Values section
  // This animation is triggered when the user scrolls to the #values wrapper
  // The animation starts when the top of the wrapper is at the center of the screen
  // The animation is staggered, meaning each card will animate in sequence
  // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#values", // Trigger the animation when the user scrolls to the #values wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <div id="values" className="flex-center section-padding">
    <div className="w-full h-full md:px-10 px-5">
      {/* --- CONTENT UPDATED --- */}
      <TitleHeader
        title="Our Core Values"
        sub="🤝 The Principles That Guide Our Work"
      />
      <div className="tech-grid">
  {/* Loop through the companyValues array */}
  {companyValues.map((value) => (
    <div
      key={value.name}
      className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
    >
      <div className="tech-card-animated-bg" />
      <div className="tech-card-content">
        <div className="tech-icon-wrapper">
          {/* Use the imported image variable in the src attribute */}
          <img 
            src={value.iconPath} 
            alt={value.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }} 
          />
        </div>
        <div className="padding-x w-full">
          <p>{value.name}</p>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  </div>
  );
};

export default TechStack;
