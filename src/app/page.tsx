import BestSelers from "@/components/Home-Page-Sections/bestSelers";
import Gender from "@/components/Home-Page-Sections/gender";
import Hero from "@/components/Home-Page-Sections/hero";
import LastSection from "@/components/Home-Page-Sections/lastSection";
import StyleyOutlook from "@/components/Home-Page-Sections/styleOutlook";



export default function Home() {
  return (
    <main>
      <Hero />
      <Gender />
      <BestSelers />
      <StyleyOutlook />
      <LastSection />
    </main>
  );
}
