// import { NextSeo } from "next-seo";

// import ProjectCard from "@/components/projects/project-card";
// import { PROJECTS_CARD } from "@/data/projects";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

// export default function Projects() {
//   return (
//     <>
//       <NextSeo
//         title={`Projects by ${siteMetadata.fullName} - ${siteMetadata.jobTitle} Portfolio`}
//         description={`Explore a collection of projects by ${siteMetadata.fullName}, a ${siteMetadata.jobTitle}. From innovative web and mobile applications to responsive interfaces, discover the depth and diversity of my work.`}
//         canonical={`${siteMetadata.siteUrl}/projects`}
//         openGraph={{
//           url: `${siteMetadata.siteUrl}/projects`,
//           title: `Discover Projects by ${siteMetadata.fullName} - ${siteMetadata.jobTitle}`,
//           description: `Explore a showcase of projects crafted by ${siteMetadata.fullName}, a ${siteMetadata.jobTitle}. Witness the fusion of creativity and technology in web and mobile development.`,
//           images: [
//             {
//               url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
//               alt: `${siteMetadata.fullName} - Portfolio Image`,
//             },
//           ],
//           siteName: siteMetadata.siteName,
//           type: "website",
//         }}
//         twitter={{
//           cardType: "summary_large_image",
//         }}
//         additionalMetaTags={[
//           {
//             property: "keywords",
//             content: `Projects, ${siteMetadata.fullName} Portfolio, ${
//               siteMetadata.jobTitle
//             }, React Developer, Frontend Developer, Web Development, React Native, Next.js, ${siteMetadata.specializations.join(
//               ", ",
//             )}, UI/UX, Web Applications, Mobile Applications, Responsive Design`,
//           },
//         ]}
//       />
//       <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
//         <div className="mx-auto max-w-7xl">
//           <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
//             Projects
//           </h1>
//           <div className="my-2">
//             <span className="text-sm text-muted-foreground">
//               Here are some of the projects I&apos;d like to share
//             </span>
//           </div>
//           <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
//             {PROJECTS_CARD.map((card, index) => (
//               <ProjectCard key={index} {...card} />
//             ))}
//           </div>
//           <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
//             {/* <span className="text-xl font-bold md:text-2xl">
//               I am currently building new projects and learning backend
//               development to expand my skill set beyond frontend.
//             </span> */}
//             <p className="mt-10 text-base md:text-xl">
//               Visit my github to see some of the latest projects{" "}
//               <a
//                 href={`${siteMetadata.github}?tab=repositories`}
//                 target="_blank"
//                 className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
//               >
//                 Github
//               </a>
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import React from "react";
// import "../header.css";
// import FullpageProviderWork from "@/components/fullpageProviderWork";
// import { Cursor } from "@/components/cursor";
// import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/projects/workSection";

const projectsData = [
  {
    title: (
      <>
        YieldStone <br /> Page
      </>
    ),
    description: "Webflow Site",
    link: "https://www.yieldstone.ai/",
    imageLink: "/img/projects/1.avif",
  },
  {
    title: (
      <>
        Simple Font <br /> Replacer
      </>
    ),
    description: "Figma Plugin",
    link: "https://www.figma.com/community/plugin/1380643582596908985/simple-font-replacer",
    imageLink: "/img/projects/2.avif",
  },
  {
    title: (
      <>
        Andy PFP <br /> Generator
      </>
    ),
    description: "Next.js Site",
    link: "https://generator.andytoken.com/",
    imageLink: "/img/projects/3.avif",
  },
  {
    title: (
      <>
        PonkeSol <br /> Page
      </>
    ),
    description: "Webflow Site",
    link: "https://ponkecoin-ninetyeight.webflow.io/",
    imageLink: "/img/projects/4.avif",
  },

  {
    title: (
      <>
        AmanFX <br /> Portfolio
      </>
    ),
    description: "Webflow Site",
    link: "https://amanfx.webflow.io/",
    imageLink: "/img/projects/5.avif",
  },
  {
    title: (
      <>
        Therapist <br /> Website
      </>
    ),
    description: "UI Design",
    link: "https://www.figma.com/proto/Tzz9bwrjHtSza87b1l3D0i/Inner-Strength-UI-Design?type=design&node-id=37-10&t=pq2KDLjYbMU4LFgA-1&scaling=min-zoom&page-id=0%3A1&mode=design",
    imageLink: "/img/projects/6.avif",
  },
];
//test
export default function Projects() {
  return (
    <>
      {/* <Cursor /> */}
      {/* <HeaderNavigation /> */}
      {/* <FullpageProviderWork> */}
      <div id="fullpage">
        <div className="background">
          PROJECTS
          <br />
          PROJECTS
        </div>

        {projectsData.map((item, index) => (
          <WorkSection
            key={index}
            item={item}
            index={index}
            length={projectsData.length}
            color={index % 2 !== 0 ? "Light" : "Dark"}
          />
        ))}
      </div>
      {/* </FullpageProviderWork> */}
    </>
  );
}
