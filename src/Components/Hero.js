import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden border-b border-zinc-800 bg-[#090b0e]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
        {/* LEFT: INTRODUCTION */}
        <div className="relative z-10 min-w-0">
          {/* Text aur mobile photo */}
          <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center gap-3 md:block">
            <div>
              <p className="font-mono text-xs text-zinc-400 md:text-sm">
                {"< Hello, I’m />"}
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
                Basharat<span className="text-orange-500">.</span>
              </h1>

              <h2 className="mt-4 text-sm font-medium leading-6 text-zinc-200 sm:text-xl sm:leading-8 lg:text-2xl">
                <span className="text-orange-500">
                  Full-Stack Developer
                </span>
                <br />
                & AI Integrations
              </h2>
            </div>

            {/* MOBILE: Centered circular photo */}
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

          <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
            I build responsive websites, backend APIs, and
            AI-powered applications with Next.js, NestJS,
            and Python.
          </p>

          <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-400">
            From chatbot integrations to fixing bugs,
            I turn ideas into practical web solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/fullwork"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              Explore My Work

              <ArrowRight
                size={18}
                aria-hidden="true"
                className="motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
              />
            </a>

            <a
              href="/fullcontact"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-orange-500/70 px-5 py-3 text-sm font-medium text-zinc-100 transition-colors hover:bg-orange-500/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
            >
              <MessageCircle
                size={18}
                aria-hidden="true"
                className="text-orange-500"
              />
              Let’s Talk
            </a>
          </div>

          {/* Skills */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300">
              Web Development
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300">
              Chatbots & RAG
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300">
              Bug Fixing
            </span>
          </div>

          <p className="mt-6 font-mono text-xs leading-6 text-zinc-500">
            Next.js / NestJS / PostgreSQL / LangChain
          </p>
        </div>

        {/* DESKTOP: PHOTO, GLOW AND TERMINAL */}
        <div className="relative mx-auto hidden min-h-[420px] w-full max-w-md items-center justify-center pb-14 md:flex">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-80 w-80 rounded-full bg-orange-600/25 blur-3xl"
          />

          {/* Glowing photo circle */}
          <div className="relative h-72 w-72 rounded-full border-2 border-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.8),0_0_40px_rgba(249,115,22,0.45),0_0_80px_rgba(249,115,22,0.2)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/me2.png"
                alt="Basharat"
                fill
                loading="eager"
                sizes="288px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Terminal card */}
          <div className="absolute bottom-0 right-2 z-20 w-48 rounded-xl border border-zinc-700 bg-[#0c1016]/95 p-4 shadow-xl backdrop-blur-md">
            <div
              aria-hidden="true"
              className="mb-3 flex gap-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-500" />
            </div>

            <div className="font-mono text-xs leading-6">
              <p className="text-zinc-500">$ whoami</p>
              <p className="text-zinc-100">basharat</p>

              <p className="mt-2 text-zinc-500">$ focus</p>
              <p className="text-orange-400">
                Web · APIs · AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}