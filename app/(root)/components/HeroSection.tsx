import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className=" bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col gap-8 justify-center">
          <h1 className="h1-bold">
            Host, Connect, Celebrate:Your Events, Our Platform!
          </h1>
          <p className="p-regular-20 md:p-regular-24 ">
            Book and learn helpful tips from 3168+ mentors in world-class
            companies with our global community
          </p>

          <Button asChild className="button w-full sm:w-fit">
            <Link href={"#events"}>Explore Now</Link>
          </Button>
        </div>
        <Image
          src={"/assets/images/hero.png"}
          alt="hero"
          width={1000}
          height={1000}
          className=" object-contain object-center max-h-[70vh] 2xl:max-h-[50vh]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
