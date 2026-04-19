import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SecondaryShowcase from "@/components/sections/SecondaryShowcase";
import Story from "@/components/sections/Story";
import CraftShowcase from "@/components/sections/CraftShowcase";
import SmoothScroll from "@/components/common/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <SecondaryShowcase />
        <Story />
        <CraftShowcase />
      </main>
    </>
  );
}
