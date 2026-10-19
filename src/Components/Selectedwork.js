import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Gym Website",
    image: "/gym.jpg",
    description:
      "A responsive gym website with training programs and membership plans.",
    live: "https://gym-website-chi-orcin.vercel.app/",
    github: "https://github.com",
  },
  {
    title: "Mobile Store",
    image: "/mobile.png",
    description:
      "A mobile phone website showcasing products, specifications, and prices.",
    live: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Construction Website",
    image: "/construction.jpg",
    description:
      "A business website showcasing construction services and company projects.",
    live: "https://basharat.vercel.app/",
    github: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-zinc-800 bg-[#090b0e] py-10"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />

        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl" />

        {/* Subtle orange wave lines */}
        <svg
          viewBox="0 0 700 250"
          fill="none"
          className="absolute -right-24 bottom-0 h-60 w-[700px] max-w-none text-orange-500"
        >
          <path
            d="M0 190 C160 230 240 50 390 110 S580 30 700 70"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.25"
          />

          <path
            d="M0 205 C160 245 240 65 390 125 S580 45 700 85"
            stroke="currentColor"
            opacity="0.15"
          />

          <path
            d="M0 220 C160 260 240 80 390 140 S580 60 700 100"
            stroke="currentColor"
            opacity="0.08"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5">

        <p className="text-xs text-orange-500">01 /</p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          Selected <span className="text-orange-500">Work</span>
        </h2>

        {/* Three cards on desktop */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex gap-3 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 transition duration-300 hover:border-orange-500/60 hover:bg-zinc-900/90 hover:shadow-[0_8px_30px_rgba(249,115,22,0.15)] motion-safe:hover:-translate-y-1"
            >
              {/* Card hover glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/15 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Left image */}
              <div className="relative w-28 shrink-0 overflow-hidden rounded-lg bg-zinc-900">
  <Image
    src={project.image}
    alt={`${project.title} preview`}
    fill
    sizes="112px"
    className="object-cover object-top"
  />
</div>

              {/* Right details */}
              <div className="relative min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-orange-400">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-zinc-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-3 flex flex-wrap gap-1">
                  <span className="rounded-full border border-white/5 bg-zinc-800 px-2 py-1 text-[10px] text-zinc-300">
                    Next.js
                  </span>

                  <span className="rounded-full bg-zinc-800 px-2 py-1 text-[10px] text-zinc-300">
  Tailwind CSS
</span>

                  <span className="rounded-full bg-zinc-800 px-2 py-1 text-[10px] text-zinc-300">
  Responsive
</span>
                </div>

                {/* Links */}
                <div className="mt-3 flex flex-wrap gap-2">
                 <a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex min-h-10 items-center gap-2 rounded-md border border-orange-500 px-2 text-xs text-orange-400 transition-colors hover:bg-orange-500 hover:text-black"
>
  <ExternalLink size={14} aria-hidden="true" />
  Live Demo
</a>


                 <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex min-h-10 items-center gap-2 rounded-md border border-zinc-700 px-2 text-xs text-zinc-300 transition-colors hover:border-zinc-300 hover:text-white"
>
  <FaGithub size={14} aria-hidden="true" />
  GitHub
</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}