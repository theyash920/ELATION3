import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";
import Contact from "../sections/Contact";
import TechStack from "../sections/TechStack";
import Solutions from "../sections/Solutions";
import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";
import LogoShowcase from "../sections/LogoShowcase";

const Home = () => (
  <>
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <Solutions />
    <TechStack />
    <Testimonials />
    <Contact />
  </>
);

export default Home;