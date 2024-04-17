import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import EventsSection from "./components/EventsSection";

export default function Home() {
  return (
    <main className=" h-[1000px]">
      <HeroSection />
      <EventsSection />
    </main>
  );
}
