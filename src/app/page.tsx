import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { Highlighter } from "@/components/ui/highlighter"
import { RockPaperScissors } from "@/components/rock-paper-scissors";
import { BadgeCheckIcon, CheckIcon } from "lucide-react";
import { SkillsSection } from "@/components/skills-section";
import { FrontendShowcase } from "@/components/frontend-showcase";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <Image
                    src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
                    alt="👋"
                    width={64}
                    height={64}
                    className="mb-4"
                    unoptimized
                  />
                </BlurFade>
              </div>
              <div>
               <BlurFade delay={BLUR_FADE_DELAY}>
                 <Highlighter action="underline" color="#FF9800">
                  {DATA.description[0]}
                 </Highlighter>{" "}
                 {DATA.description[1]}
               </BlurFade>
              </div>
              </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-32 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                initialExpanded={id === 0}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={
                  <>
                    {education.degree} •{" "}
                    <span className="font-bold">{education.score}</span>
                  </>
                }
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <SkillsSection
          skills={DATA.skills}
          blurFadeDelay={BLUR_FADE_DELAY * 9}
          initialVisibleCount={3}
        />
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="font-kalam font-medium underline underline-offset-6 text-lg">
                  <Highlighter action="underline" color="#FF9800">
                   Case Studies
                 </Highlighter>
                 </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Real-World Product Challenges
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Explore real-world product management challenges I&apos;ve analyzed,
      from feature development to user experience improvements and data-driven decisions.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.caseStudies.map((caseStudy, id) => (
              <BlurFade
                key={caseStudy.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  key={caseStudy.title}
                  title={caseStudy.title}
                  description={caseStudy.description}
                  dates={caseStudy.dates}
                  tags={caseStudy.technologies}
                  link={caseStudy.href} // Use the href field as the main link
                  image={caseStudy.image}
                  video={caseStudy.video}
                  links={[]} // Pass empty array to avoid showing the website badge
                  detailedDescription={caseStudy.detailedDescription}
                  features={caseStudy.features}
                  techStack={caseStudy.techStack}
                />
              </BlurFade>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <a
                href="https://case-studies-blogs.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  View More
                </button>
              </a>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="font-kalam font-medium underline underline-offset-6 text-lg">
                  <Highlighter action="underline" color="#FF9800">
                   Contact
                 </Highlighter>
                 </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me an{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="text-blue-500 hover:underline"
                >
                  email
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="fun">
        <div className="space-y-2 w-full py-2">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="font-kalam font-medium underline underline-offset-6 text-lg">
                  <Highlighter action="underline" color="#FF9800">
                    Take a Break
                 </Highlighter>
                 </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Thanks for scrolling!
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  You&apos;ve made it this far. Why not play a quick game? 
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Rock-paper-scissors
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <RockPaperScissors className="mx-auto" />
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
