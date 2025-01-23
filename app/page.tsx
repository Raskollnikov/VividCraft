import HeroSection from "./Components/Sections/HeroSection/HeroSection";
import ServicesSection from "./Components/Sections/ServicesSection/ServicesSection";
import AboutSection from "./Components/Sections/AboutSection/AboutSection";
import ScrollingText from "./Components/ScrollingText/ScrollingText";
import PortfoliosSection from "./Components/Sections/PortfoliosSection/PortfoliosSection";
import AwardsSection from "./Components/Sections/AwardsSection/AwardsSection";
import FaqSection from "./Components/Sections/FaqSection/FaqSection";
import FooterSection from "./Components/Sections/FooterSection/FooterSection";
import ContactSection from "./Components/Sections/ContactSection/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>

      <div className="border-y-2">
        <ScrollingText direction="left"/>
        <ScrollingText direction="right"/>
      </div>

      <PortfoliosSection/>
      <AwardsSection/>
      <FaqSection/>
      <ContactSection/>
      <FooterSection/>
    </main>
  );
}
