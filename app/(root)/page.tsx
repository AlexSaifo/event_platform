import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import EventsSection from "./components/EventsSection";
import { SearchParamProps } from "@/types";

export default function Home({ searchParams }: SearchParamProps) {
  return (
    <main className="">
      <HeroSection />
      <EventsSection searchParams={searchParams}/>
    </main>
  );
}