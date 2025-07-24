import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { PrintDrawer } from "@/components/print-drawer";
import { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { getDateDiff } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} - CV | Software Engineer`,
  description: `${RESUME_DATA.summary} View my work experience at JotForm, projects, and technical skills.`,
  openGraph: {
    title: `${RESUME_DATA.name} - CV | Software Engineer`,
    description: `${RESUME_DATA.summary} View my work experience and projects.`,
    url: "https://cihat.dev",
    images: [
      {
        url: RESUME_DATA.avatarUrl,
        width: 400,
        height: 400,
        alt: `${RESUME_DATA.name} - Software Engineer`
      }
    ]
  }
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": RESUME_DATA.name,
  "jobTitle": "Software Engineer",
  "description": RESUME_DATA.summary,
  "url": RESUME_DATA.personalWebsiteUrl,
  "image": RESUME_DATA.avatarUrl,
  "email": RESUME_DATA.contact.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Istanbul",
    "addressCountry": "Turkey"
  },
  "sameAs": RESUME_DATA.contact.social.map(social => social.url),
  "alumniOf": {
    "@type": "Organization",
    "name": "Firat University",
    "url": "https://firat.edu.tr"
  },
  "worksFor": {
    "@type": "Organization", 
    "name": "JotForm",
    "url": "https://jotform.com"
  },
  "knowsAbout": RESUME_DATA.skills,
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Engineer",
    "description": "Full-stack development, iOS app development, web development"
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 relative">
        <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact?.tel ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA.contact?.tel}`}>
                      <PhoneIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
                <div className="print:flex print:flex-col print:gap-y-1">
                  <div>github: <a href="https://github.com/cihat/" className="underline">@http://github.com/cihat/</a></div>
                  <div>apps: <a href="https://apps.cihat.dev/" className="underline">@https://apps.cihat.dev/</a></div>
                  <div>website: <a href="https://cihat.dev/" className="underline">@https://cihat.dev/</a></div>
                  <div>mail: <a href={`mailto:${RESUME_DATA.contact.email}`} className="underline">{RESUME_DATA.contact.email}</a></div>
                </div>
              </div>
            </div>

                      <Avatar className="size-28">
            <AvatarImage alt={`${RESUME_DATA.name} - Software Engineer profile picture`} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
          </div>
          <Section>
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.summary}
            </p>
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Work Experience</h2>

            {RESUME_DATA.work.map((work) => {
              return (
                <Card key={work.company} className="mb-4">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <Image src={work.logo} width={36} height={36} alt={`${work.company} company logo`} className="object-cover rounded-full border-solid border-2 border-gray-200" />
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>

                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>

                      <div className="flex flex-col justify-center items-center">
                        <span className="text-sm tabular-nums text-gray-500 overflow-hidden text-ellipsis">{work.start} - {work.end ?? "Present"}</span>
                        {
                          work.start && work.end && (
                            <Badge variant="secondary" className="text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5">
                              {getDateDiff(work.start, work.end)}
                            </Badge>
                          )
                        }
                      </div>
                    </div>
                    <h4 className="font-mono text-sm leading-none print:text-[12px]">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs print:text-[10px]">
                    {work.description}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Education</h2>
            {RESUME_DATA.education.map((education) => {
              return (
                <Card key={education.school}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semibold leading-none">
                        {education.school}
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500 overflow-hidden text-ellipsis">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2 print:text-[12px]">
                    {education.degree}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section>
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.map((skill) => {
                return (
                  <Badge className="print:text-[10px]" key={skill}>
                    {skill}
                  </Badge>
                );
              })}
            </div>
          </Section>

          <Section>
            <h2 className="text-xl font-bold">Apps</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
              {RESUME_DATA.apps.slice(0, 6).map((app) => {
                return (
                  <ProjectCard
                    key={app.title}
                    title={app.title}
                    description={app.description}
                    tags={app.techStack}
                    link={app.link.href}
                  />
                );
              })}
            </div>
            <p className="hidden print:block text-xs text-muted-foreground mt-2">
              More apps available at: <a href="https://apps.cihat.dev/" className="underline">apps.cihat.dev</a>
            </p>
          </Section>

          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold">Projects</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
              {RESUME_DATA.projects.slice(0, 6).map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    link={"link" in project ? project.link.href : undefined}
                  />
                );
              })}
            </div>
            <p className="hidden print:block text-xs text-muted-foreground mt-2">
              More projects available at: <a href="https://github.com/cihat/" className="underline">github.com/cihat</a>
            </p>
          </Section>
        </section>

        <CommandMenu
          links={[
            {
              url: RESUME_DATA.personalWebsiteUrl,
              title: "Personal Website",
            },
            ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
            })),
          ]}
        />
        <PrintDrawer />
      </main>
    </>
  );
}
