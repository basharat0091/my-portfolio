import React from 'react'
import { Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiPython,
} from "react-icons/si";
const journey = [
  {
    title: "JavaScript",
    skills: "Frontend foundations",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    title: "React",
    skills: "Interactive interfaces",
    icon: SiReact,
    color: "text-cyan-400",
  },
  {
    title: "Next.js",
    skills: "Web applications",
    icon: SiNextdotjs,
    color: "text-white",
  },
  {
    title: "NestJS",
    skills: "Backend & APIs",
    icon: SiNestjs,
    color: "text-rose-500",
  },
  {
    title: "PostgreSQL",
    skills: "Database integration",
    icon: SiPostgresql,
    color: "text-sky-400",
  },
  {
    title: "Python & AI",
    skills: "Chatbots, RAG, Agents",
    icon: SiPython,
    color: "text-yellow-300",
  },
];
export default function Journey() {
  return (
    <div className="overflow-hidden border-b border-zinc-800 bg-[#090b0e]">

      <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.6fr_1fr]">

        {/* LEFT: JOURNEY */}
        <section
          id="journey"
          className="scroll-mt-24 px-5 py-12 lg:pr-10"
        >
          <p className="font-mono text-xs text-orange-500">
            04 /
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-100">
            My Development
            <span className="text-orange-500"> Journey</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            My path through web development and AI applications.
          </p>

          {/* Roadmap */}
          {/* Development roadmap */}
<div className="relative mt-8">

  {/* Connecting line */}
  <div
    aria-hidden="true"
    className="absolute left-6 right-6 top-6 hidden h-px bg-linear-to-r from-orange-500/50 to-orange-500/10 lg:block"
  />

  <ol className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
    {journey.map((step) => (
      <li
        key={step.title}
        className="group relative flex items-start gap-4 sm:flex-col"
      >
        {/* Colored technology logo */}
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-[#111318] transition-colors duration-300 group-hover:border-orange-500/50">
          <step.icon
            size={25}
            aria-hidden="true"
            className={`${step.color} motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-110`}
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-zinc-100">
            {step.title}
          </h3>

          <p className="mt-2 text-xs leading-5 text-zinc-400">
            {step.skills}
          </p>
        </div>
      </li>
    ))}
  </ol>
</div>
</section>

        {/* RIGHT: CONTACT */}
        <section
          id="contact"
          className="relative isolate scroll-mt-24 overflow-hidden border-t border-zinc-800 px-5 py-12 lg:border-l lg:border-t-0 lg:pl-8"
        >

          {/* Orange background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-4 h-56 w-56 rounded-full bg-orange-600/10 blur-3xl"
          />

          {/* Orange wave lines */}
          <svg
            aria-hidden="true"
            viewBox="0 0 500 300"
            fill="none"
            className="pointer-events-none absolute -right-28 top-0 h-full w-[450px] max-w-none text-orange-500"
          >
            {/* Soft shaded ribbon */}
            <path
              d="M0 160 C110 155 170 80 260 110 S390 10 500 70 L500 105 C390 40 350 170 260 140 S110 185 0 185 Z"
              fill="currentColor"
              opacity="0.06"
            />

            <path
              d="M0 160 C110 155 170 80 260 110 S390 10 500 70"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.45"
            />

            <path
              d="M0 172 C110 165 170 95 260 120 S390 25 500 85"
              stroke="currentColor"
              opacity="0.3"
            />

            <path
              d="M0 185 C110 180 170 110 260 140 S390 40 500 105"
              stroke="currentColor"
              opacity="0.2"
            />

            <path
              d="M20 245 C150 230 160 100 270 145 S400 80 500 125"
              stroke="currentColor"
              opacity="0.12"
            />

            <path
              d="M110 300 C190 240 210 95 300 150 S420 120 500 145"
              stroke="currentColor"
              opacity="0.1"
            />
          </svg>

          {/* Content stays above decoration */}
          <div className="relative z-10">
            <p className="font-mono text-xs text-orange-500">
              05 /
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-zinc-100">
              Contact
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-400">
              Have a website, AI integration, or bug to fix?
              Let’s discuss your project.
            </p>

            {/* Replace with your actual email */}
            <a
              href="/fullcontact"
              className="group mt-6 inline-flex min-h-11 items-center gap-3 rounded-lg border border-orange-500 px-4 py-2 text-sm font-medium text-orange-400 transition-colors hover:bg-orange-500 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              Let’s Build Something

            <Mail size={17} aria-hidden="true" />

<ArrowRight
  size={16}
  aria-hidden="true"
  className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
/>
            </a>

            {/* Replace with your actual profile links */}
           {/* Social links — apne actual URLs lagayein */}
<div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-300">
 <a
  href="https://github.com/basharat0091"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-zinc-300 transition-colors hover:text-orange-400"
>
  <FaGithub size={18} aria-hidden="true" />
  GitHub
</a>
<a
  href="https://www.linkedin.com/in/basharat-naqvi-b4a688431/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-zinc-300 hover:text-orange-400"
>
  <FaLinkedin size={18} aria-hidden="true" />
  LinkedIn
</a>

  <a
    href="mailto:basharatnavi819@.com"
    className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-orange-400"
  >
    <Mail size={17} aria-hidden="true" />
    Email
  </a>
</div>
          </div>
        </section>

      </div>
    </div>
  );
}