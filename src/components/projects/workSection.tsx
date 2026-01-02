import React, { useEffect, useRef } from "react";
import Magentic from "@/components/projects/Magnetic";
// import { Header } from "@/components/header";
// import { Bulge } from "../bulge";
import { cn } from "@/utility/utils";
import gsap from "gsap";
export function WorkSection({
  index,
  item,
  color,
  length,
}: {
  index: number;
  item: {
    title: React.JSX.Element;
    description: string | React.JSX.Element;
    link: string;
    imageLink: string;
  };
  color: "Dark" | "Light";
  length: number;
}) {
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const imageElement = imageRef.current;
    if (imageElement) {
      gsap.set(imageElement, { x: "100%" });
    }
    if (titleElement) {
      gsap.set(titleElement, { x: "-100%" });
      gsap.to(titleElement, {
        x: "0%",
        duration: 1.3,
        ease: "sine",
        delay: 0.5,
      });
    }
    if (titleElement && imageElement) {
      const handleMouseEnter = () => {
        gsap.fromTo(
          imageElement,
          { x: "100%" },
          { x: "0%", duration: 1, ease: "power2.out" },
        );
      };
      titleElement.addEventListener("mouseenter", handleMouseEnter);
      return () => {
        titleElement.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, []);
  //   const possibleTailwindClasses = [
  //     "text-colorDark",
  //     "text-colorLight",
  //     "bg-colorDark",
  //     "bg-colorLight",
  //     "bg-colorSecondaryDark",
  //     "bg-colorSecondaryLight",
  //   ];

  return (
    <div
      className={`section s${index} ${
        color == "Dark" ? "lightGradient" : "darkGradient"
      }
      text-color${color} `}
      key={item.link}
    >
      <div className="anime gap-6bg-red-500 absolute top-10 z-50 flex w-full items-start justify-center">
        {Array(length)
          .fill(0)
          .map((_, i) => {
            return (
              <div
                key={i}
                className={cn(
                  `h-4 w-1 bg-colorSecondary${color} bg-white-500 rounded-full`,
                  ` ${i === index ? `h-10 bg-color${color}` : ""}`,
                )}
              ></div>
            );
          })}
      </div>
      {/* <Header color={color}></Header>
      <Bulge type={color} /> */}

      <div className="px-paddingX flex h-[100dvh] w-full items-center">
        <div
          className={`fullpage__slide max-w-maxWidth mx-auto
          `}
        >
          <a
            ref={imageRef}
            className={`image image--works image--works${
              index + 1
            } anime rounded-3xl `}
            target="_blank"
            href={item.link}
            style={{
              background: `url(${item.imageLink}) center center / contain no-repeat`,
            }}
          >
            <div className="image__over">
              <div className="image__cover">1</div>
              <div className="image__cover">2</div>
            </div>
            <div className="page-num anime ">
              <div className="mask bg-colorSecondaryDark absolute left-0 top-0 -z-10 h-full w-full rounded-2xl"></div>
              <p className="text-colorLight p-8 ">0{index + 1}</p>
            </div>
          </a>
          <div className="title relative z-40" ref={titleRef}>
            <h2 className="title__text js-letter anime mask font-bold tracking-tight">
              {item.title}
              <br />
            </h2>
            <div className="js-letter anime borderv">
              <span className={`bg-colorSecondary${color}`}></span>
              <span className={`bg-colorSecondary${color}`}></span>
            </div>
            <p className=" js-letter anime  flex-wrap text-lg">
              {item.description}
            </p>
            <div className="btn-wrap js-letter anime">
              <Magentic
                strength={50}
                className={`btn text-color${
                  color === "Dark" ? "Light" : "Dark"
                } bg-color${color} mask`}
                href={item.link}
                target="_blank"
                scrambleParams={{ text: "Show Me", chars: "-x" }}
              >
                <p className="shapka">
                  <span className="scrambleText">Show Me</span>
                  <svg
                    className="ml-4 inline w-[0.8em] -rotate-[75deg] text-inherit" // width="34px"
                    // height="34px"
                    viewBox="0 0 14 14"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg" // xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>arrow-up-right</title>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="2"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Artboard"
                        transform="translate(-1019.000000, -279.000000)"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <g
                          id="arrow-up-right"
                          transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                        >
                          <polyline
                            id="Path"
                            points="2.76923077 0 12 0 12 9.23076923"
                          ></polyline>
                          <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                        </g>
                      </g>
                    </g>
                  </svg>
                </p>
              </Magentic>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
