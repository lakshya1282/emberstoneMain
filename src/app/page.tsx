import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SecondaryShowcase from "@/components/sections/SecondaryShowcase";
import Story from "@/components/sections/Story";
import Process from "@/components/sections/Process";
import CraftShowcase from "@/components/sections/CraftShowcase";
import PouringScene from "@/components/sections/PouringScene";
import ConclusionSection from "@/components/sections/ConclusionSection";
import SmoothScroll from "@/components/common/SmoothScroll";
import ScrollEffects from "@/components/common/ScrollEffects";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollEffects />
      <Navbar />
      <main>
        <Hero />
        <SecondaryShowcase />
        <Process />
        <Story />
        <CraftShowcase />
        <PouringScene />
        <ConclusionSection />
      </main>
    </>
  );
}