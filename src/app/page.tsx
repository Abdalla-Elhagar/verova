import BestSelers from "@/components/Home-Pages-Sections/bestSelers";
import Gender from "@/components/Home-Pages-Sections/gender";
import Hero from "@/components/Home-Pages-Sections/hero";
import LastSection from "@/components/Home-Pages-Sections/lastSection";
import StyleyOutlook from "@/components/Home-Pages-Sections/styleOutlook";



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
