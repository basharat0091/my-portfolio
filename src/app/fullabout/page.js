import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import {
  Code2,
  Bot,
  Wrench,
  Database,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata = {
  title: "About | Basharat",
  description:
    "Meet Basharat, a full-stack developer building websites, backend APIs, and AI integrations.",
};

const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive websites and interfaces using React, Next.js, and Tailwind CSS.",
    icon: Code2,
  },
  {
    title: "Backend & Databases",
    description:
      "REST APIs, authentication, and database integration using NestJS, PostgreSQL, and Prisma.",
    icon: Database,
  },
  {
    title: "AI Integrations",
    description:
      "Chatbots, document retrieval, and agent workflows using Python and LangChain.",
    icon: Bot,
  },
  {
    title: "Bug Fixing",
    description:
      "Troubleshooting layout issues, API errors, and existing application features.",
    icon: Wrench,
  },
];

const approach = [
  "Understand the requirements before writing code.",
  "Break features into manageable components.",
  "Keep interfaces responsive and easy to navigate.",
  "Check loading, error, and empty states.",
  "Test the finished work and explain the changes.",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="relative isolate min-h-screen overflow-hidden bg-[#090b0e]">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl" />

          {/* Right-side orange lines */}
          <svg
            viewBox="0 0 600 900"
            fill="none"
            className="absolute -right-48 top-32 h-[900px] w-[600px] max-w-none text-orange-500 md:-right-28"
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
              opacity="0.15"
            />

            <path
              d="M640 40 C220 140 600 300 370 440 S560 690 240 940"
              stroke="currentColor"
              opacity="0.08"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 md:py-20">
          {/* Introduction */}
          <section className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            <div className="min-w-0">
              <p className="font-mono text-xs tracking-widest text-orange-400">
                ABOUT THE DEVELOPER
              </p>

              {/* Heading and mobile photo */}
              <div className="mt-4 grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center gap-3 md:block">
                <div className="min-w-0">
                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                    Hi, I’m
                    <span className="text-orange-500">
                      {" "}Basharat.
                    </span>
                  </h1>

                  <p className="mt-5 text-sm leading-6 text-zinc-200 sm:text-xl sm:leading-8">
                    Full-Stack Developer & AI Integrations
                  </p>
                </div>

                {/* MOBILE: Small centered photo */}
                <div className="relative h-24 w-24 justify-self-center rounded-full border-2 border-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.7),0_0_35px_rgba(249,115,22,0.3)] md:hidden">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src="/me2.png"
                      alt="Basharat"
                      fill
                      loading="eager"
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-6 leading-8 text-zinc-400">
                I build responsive websites, backend APIs,
                and AI-powered application features. My work
                brings together user interfaces, application
                logic, and data.
              </p>

              <p className="mt-4 leading-8 text-zinc-400">
                I work with Next.js, Tailwind CSS, and NestJS
                for web development, alongside Python and
                LangChain for AI integrations. I also help
                investigate bugs and improve existing applications.
              </p>

              <a
                href="/fullwork"
                className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
              >
                Explore My Projects

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* DESKTOP: Profile photo */}
            <div className="relative hidden items-center justify-center py-8 md:flex">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"
              />

              <div className="relative h-56 w-56 shrink-0 rounded-full border-2 border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.5),0_0_50px_rgba(249,115,22,0.2)] lg:h-72 lg:w-72">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/me2.png"
                    alt="Basharat"
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 288px, 224px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mt-16">
            <p className="font-mono text-xs tracking-widest text-orange-400">
              HOW I CAN HELP
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              What I <span className="text-orange-500">Do</span>
            </h2>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-[border-color,box-shadow] duration-300 hover:border-orange-500/50 hover:shadow-[0_10px_35px_-15px_rgba(249,115,22,0.25)] motion-safe:transition-[transform,border-color,box-shadow] motion-safe:hover:scale-[1.02]"
                >
                  {/* Card glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                  />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400">
                      <service.icon size={23} aria-hidden="true" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white transition-colors group-hover:text-orange-400">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-[border-color,box-shadow,background-color] duration-300 hover:border-orange-500/50 hover:bg-zinc-900/60 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] motion-safe:transition-[transform,border-color,box-shadow,background-color] motion-safe:hover:scale-[1.02] sm:p-8">
            <h2 className="text-2xl font-semibold text-white">
              My Approach to
              <span className="text-orange-500"> Development</span>
            </h2>

            <ul className="mt-6 space-y-4">
              {approach.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-zinc-300"
                >
                  <Check
                    size={18}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-orange-400"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Contact CTA */}
          <section className="relative mt-14 overflow-hidden rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl"
            />

            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="transition-transform duration-300 motion-safe:hover:scale-[1.02]">
                <h2 className="text-xl font-semibold text-white">
                  Let’s build something useful.
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Have a website, AI feature, or bug to discuss?
                </p>
              </div>

              <a
                href="/fullcontact"
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
              >
                Let’s Talk
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}