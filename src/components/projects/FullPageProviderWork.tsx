"use client";

import React from "react"; // useEffect added
import ReactFullpage from "@fullpage/react-fullpage";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

// 1. Register Plugin OUTSIDE component to avoid re-registering
if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}
const opts = {
  autoScrolling: true,
  scrollOverflow: false,
  scrollHorizontally: false,
  fixedElements: ".background",
  navigation: false,
  navigationPosition: "left",
  scrollingSpeed: 1300,
  easingcss3: "cubic-bezier(.70,0,.30,1)",
  anchors: ["first", "second", "third", "fourth", "fifth", "sixth"],
  licenseKey: "gplv3-license", // 2. Fixed: Uncommented this
  credits: {
    enabled: false,
  },
};

const FullpageProviderWork = ({ children }: { children: React.ReactNode }) => {
  const onLeave = function (origin: any, destination: any, direction: any) {
    // Note: destination.index (previously nextIndex.index) is safer
    const idx = destination.index;

    // --- Animation for .anime elements ---
    // Check if element exists first to avoid "Target undefined" error
    const animeTargets = document.querySelectorAll(`.s${idx} .anime`);

    if (animeTargets.length > 0) {
      if (direction == "down") {
        gsap
          .timeline()
          .from(`.s${idx} .anime`, {
            duration: 0.3,
          })
          .fromTo(
            `.s${idx} .anime`,
            { y: "30vh" },
            {
              y: "0vh",
              duration: 1.1,
              stagger: 0.03,
              ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
            },
          );
      } else {
        gsap
          .timeline()
          .from(`.s${idx} .anime`, {
            duration: 0.3,
          })
          .fromTo(
            `.s${idx} .anime`,
            { y: "-30vh" },
            {
              y: "0vh",
              duration: 1.1,
              stagger: -0.03,
              ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
            },
          );
      }
    }

    // --- Animation for ROUNDED DIVS (Transition Overlays) ---
    var flex = screen.width > 540 ? 17 : 5;

    // Check if these specific divs exist before animating them
    const downDiv = document.querySelector(`.s${idx} .rounded__div__down`);
    const upDiv = document.querySelector(`.s${idx} .rounded__div__up`);

    if (direction == "down" && downDiv) {
      gsap
        .timeline()
        .from(downDiv, { duration: 0.1 })
        .fromTo(
          downDiv,
          { height: `${flex}vh` },
          {
            height: "0vh",
            duration: 1.2,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    } else if (direction == "up" && upDiv) {
      gsap
        .timeline()
        .from(upDiv, { duration: 0.1 })
        .fromTo(
          upDiv,
          { height: `${flex}vh` },
          {
            height: "0vh",
            duration: 1.2,
            ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
          },
        );
    }
  };

  return (
    <ReactFullpage
      {...opts}
      onLeave={onLeave}
      licenseKey={"gplv3-license"}
      render={() => {
        return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
      }}
    />
  );
};

export default FullpageProviderWork;
