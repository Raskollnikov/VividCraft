import HeroSection from "./Components/Sections/HeroSection/HeroSection";
import ServicesSection from "./Components/Sections/ServicesSection/ServicesSection";
import AboutSection from "./Components/Sections/AboutSection/AboutSection";
import ScrollingText from "./Components/ScrollingText/ScrollingText";

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
    </main>
  );
}
