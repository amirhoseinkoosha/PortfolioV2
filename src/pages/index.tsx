import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

export default function Home() {
  return (
    <>
      <NextSeo
        title={`${siteMetadata.fullName} | ${siteMetadata.jobTitle}`}
        description={`Explore the professional portfolio of ${
          siteMetadata.fullName
        }, a skilled ${siteMetadata.jobTitle}. ${siteMetadata.summary.substring(
          0,
          150,
        )}...`}
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: `${siteMetadata.fullName} - ${siteMetadata.jobTitle}`,
          description: siteMetadata.summary,
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: `${siteMetadata.fullName} - Portfolio Image`,
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: `${
              siteMetadata.jobTitle
            }, React Developer, Frontend Developer, Web Developer, React Native, Next.js, ${siteMetadata.specializations.join(
              ", ",
            )}, Portfolio, UI/UX, Frontend Development, Web Development, Mobile Development`,
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
