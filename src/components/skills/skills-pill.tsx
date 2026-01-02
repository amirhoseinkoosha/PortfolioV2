import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon } = props;
  // const skills = document.querySelectorAll(".skill");

  // skills.forEach((skill) => {
  //   skill.addEventListener("mousemove", (e: MouseEvent) => {
  //     const rect = skill.getBoundingClientRect();
  //     const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
  //     const y = (e.clientY - rect.top - rect.height / 2) * 0.15;

  //     gsap.to(skill, { x, y, duration: 0.3 });
  //   });

  //   skill.addEventListener("mouseleave", () => {
  //     gsap.to(skill, { x: 0, y: 0, duration: 0.4 });
  //   });
  // });

  return (
    <button className=" group relative cursor-pointer overflow-hidden rounded-xl border border-accent/20 bg-white px-4 py-3 shadow-sm dark:bg-zinc-800">
      <div
        className="
        absolute inset-0
        translate-y-full
        bg-gradient-to-t from-accent/100 to-transparent
        transition-transform duration-500
        group-hover:translate-y-0
      "
      />
      <div className="relative flex w-max items-center gap-2">
        <Icon className="h-5 w-5 sm:h-8 sm:w-8" />
        <span className="text-sm font-medium sm:text-base md:text-lg">
          {name}
        </span>
      </div>
    </button>
  );
}
