import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title={`About ${siteMetadata.fullName} | ${siteMetadata.jobTitle}`}
        description={`Learn more about ${siteMetadata.fullName}, a dedicated ${
          siteMetadata.jobTitle
        }. ${siteMetadata.summary.substring(0, 150)}...`}
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: `Learn About ${siteMetadata.fullName} - ${siteMetadata.jobTitle}`,
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
            content: `${siteMetadata.jobTitle} portfolio, ${
              siteMetadata.jobTitle
            }, React Developer, Frontend Developer, Web Developer, React Native, Next.js, ${siteMetadata.specializations.join(
              ", ",
            )}, Professional Journey, Skills`,
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
