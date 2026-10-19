import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import {
  Monitor,
  Database,
  Bot,
  Wrench,
  ArrowRight,
  Code2,
  ShieldCheck,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

export const metadata = {
  title: "Tech Stack | Basharat",
  description:
    "Explore the technologies Basharat uses for frontend development, backend APIs, databases, and AI integrations.",
};

const categories = [
  {
    title: "Frontend Development",
    subtitle: "Interfaces people can use on any screen.",
    icon: Monitor,
    technologies: [
      {
        name: "HTML & CSS",
        icon: FaHtml5,
        color: "text-orange-500",
        use: "Semantic page structure, layouts, and responsive styling.",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
        use: "Interactive features, form handling, and API requests.",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-400",
        use: "Typed components and data structures for maintainable code.",
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
        use: "Reusable components, state management, and interactive interfaces.",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-white",
        use: "App Router pages, shared layouts, and server-rendered content.",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-300",
        use: "Responsive layouts, consistent styling, and hover effects.",
      },
    ],
  },
  {
    title: "Backend & Databases",
    subtitle: "The application logic behind the interface.",
    icon: Database,
    technologies: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-400",
        use: "JavaScript server applications and backend services.",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "text-rose-500",
        use: "Organized backend modules, controllers, services, and REST APIs.",
      },
      {
        name: "REST APIs",
        icon: Code2,
        color: "text-violet-400",
        use: "Connecting interfaces with backend data and application features.",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-sky-400",
        use: "Relational data storage, queries, and connected records.",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "text-teal-300",
        use: "Database schemas, migrations, and application queries.",
      },
      {
        name: "Authentication",
        icon: ShieldCheck,
        color: "text-amber-400",
        use: "Login workflows, password hashing, JWT, and protected routes.",
      },
    ],
  },
  {
    title: "AI Applications",
    subtitle: "AI features connected to useful workflows.",
    icon: Bot,
    technologies: [
      {
        name: "Python",
        icon: FaPython,
        color: "text-yellow-300",
        use: "AI application logic, data processing, and integrations.",
      },
      {
        name: "LangChain",
        icon: Code2,
        color: "text-emerald-400",
        use: "Connecting language models with prompts, tools, and retrieval.",
      },
      {
        name: "LangGraph",
        icon: Bot,
        color: "text-purple-400",
        use: "Building agent workflows with state and conditional steps.",
      },
      {
        name: "RAG",
        icon: Database,
        color: "text-sky-400",
        use: "Retrieving relevant document content to support model responses.",
      },
      {
        name: "AI Chatbots",
        icon: Bot,
        color: "text-orange-400",
        use: "Conversational interfaces connected to models and application data.",
      },
      {
        name: "AI Agents",
        icon: Wrench,
        color: "text-pink-400",
        use: "Tool-assisted workflows for research and information processing.",
      },
    ],
  },
  {
    title: "Tools & Deployment",
    subtitle: "Tools that support development and delivery.",
    icon: Wrench,
    technologies: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
        use: "Tracking code changes and managing branches.",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
        use: "Repository hosting, collaboration, and project documentation.",
      },
      {
        name: "VS Code",
        icon: Code2,
        color: "text-blue-400",
        use: "Writing, navigating, and debugging application code.",
      },
      {
        name: "Vercel",
        icon: Monitor,
        color: "text-white",
        use: "Deploying Next.js websites and reviewing live previews.",
      },
      {
        name: "Streamlit",
        icon: Monitor,
        color: "text-red-400",
        use: "Building Python interfaces for AI demos and prototypes.",
      },
      {
        name: "Debugging",
        icon: Wrench,
        color: "text-amber-400",
        use: "Investigating UI issues, API errors, and application behavior.",
      },
    ],
  },
];

const services = [
  {
    title: "Business Websites",
    description:
      "Responsive company websites, service pages, and project showcases.",
    icon: Monitor,
  },
  {
    title: "Full-Stack Applications",
    description:
      "Connected interfaces, backend APIs, authentication, and databases.",
    icon: Database,
  },
  {
    title: "AI Integrations",
    description:
      "Chatbots, document retrieval, and tool-assisted agent workflows.",
    icon: Bot,
  },
  {
    title: "Bug Fixing",
    description:
      "Responsive layout fixes, broken integrations, and application errors.",
    icon: Wrench,
  },
];

export default function StackPage() {
  return (
    <>
      <Navbar />

      <main className="relative isolate min-h-screen overflow-hidden bg-[#090b0e]">

        {/* Background glows */}
        {/* Background glow and wave lines */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
>
  {/* Left soft glow */}
  <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

  {/* Right orange glow */}
  <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl" />

  {/* Right-side flowing lines */}
  <svg
    viewBox="0 0 600 900"
    fill="none"
    className="absolute -right-48 top-8 h-[800px] w-[500px] max-w-none text-orange-500 opacity-50 md:-right-28 md:h-[1000px] md:w-[650px]"
  >
    {/* Soft shaded ribbon */}
    <path
      d="M600 0 C180 100 560 260 330 400 S520 650 200 900
         L245 900 C565 650 375 540 365 420 S220 100 600 40 Z"
      fill="currentColor"
      opacity="0.06"
    />

    <path
      d="M600 0 C180 100 560 260 330 400 S520 650 200 900"
      stroke="currentColor"
      strokeWidth="1.5"
      opacity="0.55"
    />

    <path
      d="M620 20 C200 120 580 280 350 420 S540 670 220 920"
      stroke="currentColor"
      opacity="0.35"
    />

    <path
      d="M640 40 C220 140 600 300 370 440 S560 690 240 940"
      stroke="currentColor"
      opacity="0.22"
    />

    <path
      d="M660 60 C240 160 620 320 390 460 S580 710 260 960"
      stroke="currentColor"
      opacity="0.12"
    />
  </svg>
</div>        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">

          {/* Page introduction */}
          <p className="font-mono text-xs tracking-widest text-orange-400">
            MY TOOLKIT
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            The Stack Behind
            <br />
            <span className="text-orange-500">My Work.</span>
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
            I work across frontend interfaces, backend services,
            databases, and AI integrations. Here is how I use
            these technologies to build web applications.
          </p>

          {/* Category navigation */}
          <div className="mt-7 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <a
                key={category.title}
                href={`#category-${index}`}
                className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs text-zinc-300 transition-colors hover:border-orange-500/50 hover:text-orange-400"
              >
                {category.title}
              </a>
            ))}
          </div>

          {/* Technology categories */}
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
            {categories.map((category, index) => (
              <section
                key={category.title}
                id={`category-${index}`}
                className="group relative isolate scroll-mt-28 overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900/80 to-[#090b0e] p-5 transition-[border-color,box-shadow] duration-300 hover:border-orange-500/40 hover:shadow-[0_10px_40px_-20px_rgba(249,115,22,0.3)] motion-safe:transition-[transform,border-color,box-shadow] motion-safe:hover:scale-[1.02] sm:p-7">
                {/* Corner glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 -z-10 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl"
                />

                {/* Category heading */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400">
                    <category.icon size={23} aria-hidden="true" />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      {category.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <ul className="mt-7 divide-y divide-white/5">
                  {category.technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/5">
                        <technology.icon
                          size={22}
                          aria-hidden="true"
                          className={technology.color}
                        />
                      </div>

                      <div>
                        <h3 className="text-sm font-medium text-zinc-100">
                          {technology.name}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-zinc-400">
                          {technology.use}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Services */}
          <section className="mt-16">
            <p className="font-mono text-xs tracking-widest text-orange-400">
              WHAT I BUILD
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              From Tools to
              <span className="text-orange-500"> Working Features</span>
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                 className="group relative isolate scroll-mt-28 overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900/80 to-[#090b0e] p-5 transition-[border-color,box-shadow] duration-300 hover:border-orange-500/40 hover:shadow-[0_10px_40px_-20px_rgba(249,115,22,0.3)] motion-safe:transition-[transform,border-color,box-shadow] motion-safe:hover:scale-[1.02] sm:p-7">
                  <service.icon
                    size={24}
                    aria-hidden="true"
                    className="text-orange-400"
                  />

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="relative mt-14 overflow-hidden rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl"
            />

            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  See these tools in action.
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Explore my projects and the features I built.
                </p>
              </div>

              <a
                href="/fullwork"
                target="_blank"
                className="group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
              >
                Explore Projects
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}