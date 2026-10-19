
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import {
  ArrowRight,
  Check,
  Search,
  Layout,
  Code2,
  ShieldCheck,
  Rocket,
  
} from "lucide-react";

import {
  SiJavascript,
  SiReact,
  SiNestjs,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

export const metadata = {
  title: "Development Journey | Basharat",
  description:
    "Explore Basharat’s development journey across frontend interfaces, backend APIs, databases, and AI applications.",
};

const milestones = [
  {
    number: "01",
    title: "Frontend Foundations",
    subtitle: "Starting with the browser",
    icon: SiJavascript,
    color: "text-yellow-400",
    description:
      "I started with HTML, CSS, and JavaScript to understand how web pages are structured, styled, and made interactive.",
    skills: [
      "Semantic HTML and page structure",
      "CSS layouts and responsive design",
      "JavaScript events and DOM interaction",
    ],
    outcome:
      "Built a foundation for creating responsive website interfaces.",
  },
  {
    number: "02",
    title: "React & Next.js",
    subtitle: "Building complete interfaces",
    icon: SiReact,
    color: "text-cyan-400",
    description:
      "I moved into React and Next.js to organize interfaces into reusable components and build websites with multiple pages.",
    skills: [
      "Reusable React components",
      "Next.js App Router and layouts",
      "Tailwind CSS and responsive styling",
    ],
    outcome:
      "Created Gym, Construction, and Mobile Store website interfaces.",
    href: "/fullwork",
    linkText: "Explore website projects",
  },
  {
    number: "03",
    title: "Backend Development",
    subtitle: "Connecting the application",
    icon: SiNestjs,
    color: "text-rose-500",
    description:
      "I expanded into backend development with Node.js and NestJS to understand how applications handle requests, data, and authentication.",
    skills: [
      "Controllers, services, and modules",
      "REST APIs and input validation",
      "Authentication and protected routes",
    ],
    outcome:
      "Developed skills for connecting frontend interfaces with backend services.",
  },
  {
    number: "04",
    title: "Databases & Application Data",
    subtitle: "Working with persistent information",
    icon: SiPostgresql,
    color: "text-sky-400",
    description:
      "I worked with PostgreSQL and Prisma to model application data and connect database operations with backend features.",
    skills: [
      "Relational data and relationships",
      "Prisma schemas and migrations",
      "Create, read, update, and delete operations",
    ],
    outcome:
      "Learned to organize and manage data beyond the browser interface.",
  },
  {
    number: "05",
    title: "AI Applications",
    subtitle: "Adding intelligent features",
    icon: SiPython,
    color: "text-yellow-300",
    description:
      "I explored Python and AI application tools to connect language models with documents, tools, and useful workflows.",
    skills: [
      "Chatbot and model integrations",
      "Retrieval-Augmented Generation",
      "LangChain and agent workflows",
    ],
    outcome:
      "Expanded my focus toward AI features that support web applications.",
  },
];

const workflow = [
  {
    title: "Understand",
    description: "Clarify the goal and required features.",
    icon: Search,
  },
  {
    title: "Design",
    description: "Plan the interface and user flow.",
    icon: Layout,
  },
  {
    title: "Develop",
    description: "Build and connect the features.",
    icon: Code2,
  },
  {
    title: "Test",
    description: "Check behavior and responsive layouts.",
    icon: ShieldCheck,
  },
  {
    title: "Deploy",
    description: "Publish and verify the live application.",
    icon: Rocket,
  },
];

export default function JourneyPage() {
  return (
    <>
      <Navbar />

      <main className="relative isolate min-h-screen overflow-hidden bg-[#090b0e]">

        {/* Background decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl" />

          {/* Right-side wave lines */}
          <svg
            viewBox="0 0 600 900"
            fill="none"
            className="absolute -right-52 top-40 h-[900px] w-[600px] max-w-none text-orange-500 md:-right-32"
          >
            <path
              d="M600 0 C180 100 560 260 330 400 S520 650 200 900"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.25"
            />

            <path
              d="M620 20 C200 120 580 280 350 420 S540 670 220 920"
              stroke="currentColor"
              opacity="0.16"
            />

            <path
              d="M640 40 C220 140 600 300 370 440 S560 690 240 940"
              stroke="currentColor"
              opacity="0.08"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 md:py-20">

          {/* Page introduction */}
          <p className="font-mono text-xs tracking-widest text-orange-400">
            MY DEVELOPMENT JOURNEY
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            From First Steps to
            <br />
            <span className="text-orange-500">
              Working Applications.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
            My journey connects frontend development, backend
            services, databases, and AI integrations. Each stage
            has helped me build a broader understanding of web
            applications.
          </p>

          {/* Timeline */}
          <section
            aria-labelledby="timeline-heading"
            className="mt-14"
          >
            <h2
              id="timeline-heading"
              className="text-2xl font-semibold text-white"
            >
              Learning Through
              <span className="text-orange-500"> Building</span>
            </h2>

            <ol className="relative mt-8 space-y-6">

              {milestones.map((milestone, index) => (
                <li
                  key={milestone.number}
                  className="relative flex gap-4 sm:gap-6"
                >
                  {/* Line between milestones */}
                  {index < milestones.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute bottom-[-24px] left-5 top-10 w-px bg-linear-to-b from-orange-500/50 to-orange-500/10 sm:left-6 sm:top-12"
                    />
                  )}

                  {/* Colored icon */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/25 bg-[#141414] sm:h-12 sm:w-12">
                    <milestone.icon
                      size={23}
                      aria-hidden="true"
                      className={milestone.color}
                    />
                  </div>

                  {/* Milestone card */}
                  <article className="group relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-[border-color,box-shadow] duration-300 hover:border-orange-500/50 hover:shadow-[0_8px_35px_-15px_rgba(249,115,22,0.3)] motion-safe:transition-[transform,border-color,box-shadow] motion-safe:hover:scale-[1.01] sm:p-7">

                    {/* Hover glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs text-orange-400">
                            {milestone.subtitle}
                          </p>

                          <h3 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-orange-400">
                            {milestone.title}
                          </h3>
                        </div>

                        <span className="font-mono text-sm text-zinc-500">
                          {milestone.number}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-zinc-400">
                        {milestone.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {milestone.skills.map((skill) => (
                          <li
                            key={skill}
                            className="flex items-start gap-2 text-sm leading-6 text-zinc-300"
                          >
                            <Check
                              size={16}
                              aria-hidden="true"
                              className="mt-1 shrink-0 text-orange-400"
                            />
                            {skill}
                          </li>
                        ))}
                      </ul>

                      <p className="mt-5 border-t border-white/5 pt-4 text-sm leading-7 text-zinc-300">
                        <span className="font-medium text-orange-400">
                          Outcome:{" "}
                        </span>
                        {milestone.outcome}
                      </p>

                      {milestone.href && (
                        <a
                          href={milestone.href}
                          className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300"
                        >
                          {milestone.linkText}
                          <ArrowRight
                            size={16}
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </section>

          {/* Development workflow */}
          <section className="mt-16">
            <p className="font-mono text-xs tracking-widest text-orange-400">
              MY APPROACH
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              How I <span className="text-orange-500">Work</span>
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {workflow.map((step) => (
                <article
                  key={step.title}
                  className="group relative isolate scroll-mt-28 overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900/80 to-[#090b0e] p-5 transition-[border-color,box-shadow] duration-300 hover:border-orange-500/40 hover:shadow-[0_10px_40px_-20px_rgba(249,115,22,0.3)] motion-safe:transition-[transform,border-color,box-shadow] motion-safe:hover:scale-[1.02] sm:p-7">
                  <step.icon
                    size={23}
                    aria-hidden="true"
                    className="text-orange-400"
                  />

                  <h3 className="mt-4 font-medium text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <div className="relative mt-14 overflow-hidden rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl"
            />

            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Have something to build?
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Let’s discuss your website or application.
                </p>
              </div>

             <a
  href="/fullcontact"
  target="_blank"
  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black hover:bg-orange-400"
>
  Let’s Talk
  <ArrowRight size={17} aria-hidden="true" />
</a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}