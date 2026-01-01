import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
// import { ScrambleText } from "gsap/ScrambleText";

export function initScrambleTextAnimation(
  selector: string,
  finalText: string,
  delay: number = 0.8,
) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrambleTextPlugin);
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      gsap.killTweensOf(element);
      gsap.to(element, {
        delay: delay,
        scrambleText: {
          text: finalText,
          chars: "Amirhosein Koosha",
          speed: 0.2,
          revealDelay: 0.5,
        },
        duration: 2,
      });
    }
  }
}

export function fadeOutSplitTextAnimation(selector: string) {
  gsap.registerPlugin(ScrambleTextPlugin);
  let split = SplitText.create(selector, { type: "words" });
  gsap.from(split.words, {
    x: "random(-100, 100)",
    y: "random(-100, 100)",
    stagger: 0.1,
    onComplete: () => split.revert(), // <-- restores original innerHTML
  });
}

export function WordAnimation(selector: string) {
  gsap.registerPlugin(ScrambleTextPlugin);
  let split = SplitText.create(selector, { type: "words" });
  gsap.from(split.words, {
    delay: 2,
    y: 200,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 0.7,
    ease: "back",
    stagger: 0.15,
  });
}
