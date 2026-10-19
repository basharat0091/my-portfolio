
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Gym Website",
    image: "/gym.jpg",
    description:
      "A responsive fitness website that presents gym programs, trainers, and membership options.",
    features: [
      "Homepage introducing the gym",
      "About and training program pages",
      "Trainer profiles",
      "Membership plans",
      "Contact page",
      "Responsive layouts for mobile and desktop",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    live: "https://gym-website-chi-orcin.vercel.app/",
  },
  {
    title: "Construction Website",
    image: "/construction.jpg",
    description:
      "A construction business website presenting company information, services, and featured projects.",
    features: [
      "Homepage introducing the company",
      "About page",
      "Construction services",
      "Project gallery",
      "Contact information",
      "Responsive layouts for mobile and desktop",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    live: "https://basharat.vercel.app/",
  },
  {
    title: "Mobile Store",
    image: "/mobile.png",
    description:
      "A mobile phone website showcasing products, specifications, and prices.",
    features: [
      "Mobile phone product previews",
      "Product specifications and prices",
      "Responsive interface",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    live: "",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#090b0e]">
        <div className="mx-auto max-w-6xl px-5 py-14">

          {/* Page heading */}
          <p className="font-mono text-sm text-orange-400">
            MY PORTFOLIO
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Selected <span className="text-orange-500">Projects</span>
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            Explore my web development projects, their features,
            and the technologies used to build them.
          </p>

          {/* Detailed projects */}
          <div className="mt-12 space-y-10">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative isolate overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition-[border-color,box-shadow,background-color] duration-300 hover:border-orange-500/60 hover:bg-zinc-900/50 hover:shadow-[0_12px_45px_-15px_rgba(249,115,22,0.35)] motion-safe:transition-[transform,border-color,box-shadow,background-color] motion-safe:hover:-translate-y-1"
              >
                {/* Orange glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -right-20 -z-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl transition-colors duration-500 group-hover:bg-orange-500/25"
                />

                <div className="grid lg:grid-cols-2">

                  {/* Project screenshot */}
                  <div className="relative aspect-video overflow-hidden bg-zinc-900 lg:aspect-auto lg:min-h-96">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                     className="object-contain motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Project details */}
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">
  {project.title}
</h2>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {project.description}
                    </p>

                    <h3 className="mt-6 font-medium text-orange-400">
                      Key Features
                    </h3>

                    <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span
                            aria-hidden="true"
                            className="text-orange-500"
                          >
                            →
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
                      >
                        <ExternalLink size={17} aria-hidden="true" />
                        View Live Website
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}