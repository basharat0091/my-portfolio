import { Monitor, Database, Bot, Wrench, Code2 } from "lucide-react";

const skillGroups = [
  {
  number: "01",
  title: "Frontend",
  icon: Monitor,
  description: "Responsive interfaces",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
},
  {
    number: "02",
    title: "Backend & Database",
    description: "APIs and application logic",
    icon: Database,
    skills: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
  },
  {
    number: "03",
    title: "AI Applications",
    description: "Intelligent app features",
    icon: Bot,
    skills: [
      "Python",
      "LangChain",
      "LangGraph",
      "RAG",
      "Chatbots",
      "AI Agents",
    ],
  },
  {
    number: "04",
    title: "Tools & Deployment",
    description: "Development workflow",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Streamlit"],
  },
];

const services = [
  {
    title: "Full-Stack Development",
      icon: Code2,
    description: "Web interfaces, backend APIs, and databases.",
  },
  {
    title: "AI Integrations",
    icon: Bot,
    description: "Chatbots, document search, and agent workflows.",
  },
  {
    title: "Bug Fixing",
      icon: Wrench,
    description: "UI issues, API errors, and responsive fixes.",
  },
];

export default function TechStack() {
  return (
    <section className="relative isolate overflow-hidden border-b border-zinc-800 bg-[#090b0e] py-16">

      {/* BACKGROUND: BOTTOM-RIGHT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl md:h-[450px] md:w-[450px]" />

        <svg
          viewBox="0 0 800 500"
          fill="none"
          className="absolute -bottom-10 -right-32 h-[350px] w-[600px] max-w-none text-orange-500 md:-right-16 md:h-[450px] md:w-[800px]"
        >
          <path
            d="M0 350 C180 370 250 160 410 230 S640 70 800 140 L800 180 C640 110 570 330 410 270 S180 410 0 380 Z"
            fill="currentColor"
            opacity="0.06"
          />

          <path
            d="M0 350 C180 370 250 160 410 230 S640 70 800 140"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.4"
          />

          <path
            d="M0 360 C180 380 250 175 410 242 S640 85 800 155"
            stroke="currentColor"
            opacity="0.3"
          />

          <path
            d="M0 370 C180 390 250 190 410 255 S640 100 800 170"
            stroke="currentColor"
            opacity="0.22"
          />

          <path
            d="M0 380 C180 400 250 205 410 270 S640 115 800 185"
            stroke="currentColor"
            opacity="0.15"
          />

          <path
            d="M40 450 C220 430 260 180 430 280 S650 150 800 210"
            stroke="currentColor"
            opacity="0.12"
          />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">

        {/* LEFT: STACK */}
        <div id="stack" className="relative isolate scroll-mt-24">

          {/* Stack top-left decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-5 -top-16 z-0 h-64 w-full"
          >
            <div className="absolute -left-12 top-0 h-48 w-48 rounded-full bg-orange-500/20 blur-3xl" />

            <svg
              viewBox="0 0 600 240"
              fill="none"
              className="absolute -left-32 top-0 h-60 w-[600px] max-w-none text-orange-500"
            >
              <path
                d="M0 90 C100 10 170 150 280 80 S470 20 600 100 L600 120 C470 40 390 170 280 100 S100 30 0 110 Z"
                fill="currentColor"
                opacity="0.06"
              />

              <path
                d="M0 90 C100 10 170 150 280 80 S470 20 600 100"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.5"
              />

              <path
                d="M0 100 C100 20 170 160 280 90 S470 30 600 110"
                stroke="currentColor"
                opacity="0.3"
              />

              <path
                d="M0 110 C100 30 170 170 280 100 S470 40 600 120"
                stroke="currentColor"
                opacity="0.2"
              />

              <path
                d="M0 130 C100 50 170 190 280 120 S470 60 600 140"
                stroke="currentColor"
                opacity="0.1"
              />
            </svg>
          </div>

          {/* Stack content */}
          <div className="relative z-10">
            <p className="font-mono text-xs tracking-widest text-orange-400">
              02 / THE TOOLKIT
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              My <span className="text-orange-500">Stack</span>
            </h2>

            <div className="mt-4 h-1 w-12 rounded-full bg-orange-500" />

            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
              The technologies behind my web applications,
              backend services, and AI integrations.
            </p>

            {/* Skill cards */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-[#090b0e] p-5 transition-[border-color,box-shadow] duration-300 hover:border-orange-500/50 hover:shadow-[0_10px_35px_-15px_rgba(249,115,22,0.35)] motion-safe:transition-[transform,border-color,box-shadow] motion-safe:hover:-translate-y-1"
                >
                  {/* Card hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="relative flex items-center justify-between gap-3">
                   <h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-100 transition-colors group-hover:text-orange-400">
  <group.icon
    size={18}
    aria-hidden="true"
    className="shrink-0 text-orange-500"
  />

  {group.title}
</h3>

                    <span className="font-mono text-xs text-zinc-600 transition-colors group-hover:text-orange-500">
                      {group.number}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-zinc-500">
                    {group.description}
                  </p>

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1.5 text-xs text-zinc-300 transition-colors duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: ABOUT */}
        <div
          id="about"
          className="relative isolate scroll-mt-24 lg:border-l lg:border-zinc-800 lg:pl-10"
        >
          {/* About top-left glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 -top-8 z-0 h-72 w-72 rounded-full bg-orange-500/25 blur-3xl"
          />

          {/* About content */}
          <div className="relative z-10">
            <p className="font-mono text-xs tracking-widest text-orange-400">
              03 / THE DEVELOPER
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              About <span className="text-orange-500">Me</span>
            </h2>

            <div className="mt-4 h-1 w-12 rounded-full bg-orange-500" />

            {/* Profile */}
            <div className="mt-7 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-500/30 bg-orange-500/10 text-2xl font-bold text-orange-400">
                B
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Basharat
                </h3>

                <p className="mt-1 text-sm text-zinc-400 ">
                  Full-Stack Developer · AI Integrations
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-300">
              I build responsive web applications with
              <span className="font-medium text-white">
                {" "}Next.js and NestJS
              </span>
              , connecting clear interfaces with backend APIs,
              authentication, and databases.
            </p>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              My work also includes AI chatbots, RAG applications,
              and agent workflows. I help troubleshoot existing
              applications and turn ideas into working features.
            </p>

            {/* Services */}
            <div className="mt-7 space-y-3">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 transition-colors duration-300 hover:border-orange-500/40 hover:bg-orange-500/5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 font-mono text-xs text-orange-400 transition-colors group-hover:bg-orange-500 group-hover:text-black">
                    0{index + 1}
                  </span>

                  <div>
                    <h4 className="text-sm font-semibold text-zinc-100">
                      {service.title}
                    </h4>

                    <p className="mt-1 text-xs leading-6 text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact button */}
            <a
              href="/fullcontact"
              className="group mt-7 inline-flex min-h-11 items-center gap-3 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              Let’s Build Something

              <span className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}