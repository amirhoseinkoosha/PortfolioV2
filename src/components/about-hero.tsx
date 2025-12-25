import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";
import DuotoneImage from "./duotone-image";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="flex w-full items-center justify-center sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence mode="wait">
          <FadeUp key="hero-image" duration={0.6}>
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-accent/20 shadow-lg sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px]">
              <DuotoneImage
                src={heroProfileImg}
                width={100}
                height={100}
                className=" h-full w-full object-cover object-top"
                alt="hero image"
                lightColor="#E0FFFF"
                darkColor="#004D4D"
                unoptimized
              />
            </div>
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence mode="wait">
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m {siteMetadata.fullName}
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              {siteMetadata.summary}
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              showcasing my expertise in{" "}
              {siteMetadata.specializations.join(", ")}.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Iran flag"
                src="https://flagcdn.com/ir.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              {siteMetadata.location}
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
