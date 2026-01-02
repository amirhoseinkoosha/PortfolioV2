import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import {
  fadeOutSplitTextAnimation,
  initScrambleTextAnimation,
  WordAnimation,
} from "@/gsap/scrambleTextAnimation";
import Magnetic from "./projects/Magnetic";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      initScrambleTextAnimation(".split h1", siteMetadata.fullName);
      fadeOutSplitTextAnimation(".descriptFade");
      WordAnimation(".jobTitle");

      // const titleElement = titleRef.current;
      // console.log(titleElement);
      // if (titleElement) {
      //   const handleMouseEnter = () => {
      //     initScrambleTextAnimation(".split h1", siteMetadata.fullName, 0); // بدون delay برای hover
      //   };
      //   titleElement.addEventListener("mouseenter", handleMouseEnter);

      //   return () => {
      //     titleElement.removeEventListener("mouseenter", handleMouseEnter);
      //   };
      // }
    }
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <Magnetic
                strength={50}
                className={`justify-start `}
                href={""}
                target=""
                scrambleParams={{ text: "Show Me", chars: "-x" }}
              >
                <div
                  className="split pointer-events-auto "
                  ref={titleRef}
                  onMouseEnter={() => {
                    const titleElement = titleRef.current;
                    console.log(titleElement);
                    if (titleElement) {
                      initScrambleTextAnimation(
                        ".split h1",
                        siteMetadata.fullName,
                        0,
                      );
                    }
                  }}
                >
                  <h1 className="bg-accent bg-clip-text py-2 text-left text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                    {siteMetadata.fullName}
                  </h1>
                </div>
              </Magnetic>
              <span className="jobTitle text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                {siteMetadata.jobTitle}
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="descriptFade mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                {siteMetadata.summary.split(".")[0]}. Skilled in{" "}
                <span className="font-semibold text-accent">React</span>,{" "}
                <span className="font-semibold text-accent">Next.js</span>,{" "}
                <span className="font-semibold text-accent">React Native</span>
                {/* and */}
                {/* experienced in{" "}
                <span className="font-semibold text-accent">MQL4</span> and{" "}
                <span className="font-semibold text-accent">MQL5</span>. */}
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
