"use client";

import { useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import {
  Mail,
  ArrowUpRight,
  Send,
  Code2,
  Bot,
  Wrench,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

// Apni actual details yahan likhein
const email = "basharatnaqvi819@.com";
const github = "https://github.com/basharat0091";
const linkedin = "https://www.linkedin.com/in/basharat-naqvi-b4a688431/";
export default function ContactPage() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name")).trim();
    const senderEmail = String(form.get("email")).trim();
    const projectType = String(form.get("projectType"));
    const message = String(form.get("message")).trim();

    if (!name || !senderEmail || !message) {
      setNotice("Please complete your name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(
      `${projectType} inquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\nService: ${projectType}\n\n${message}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;

    setNotice(
      "Your email app should open with a draft. Review it and press Send there. If it does not open, email me directly."
    );
  }

  return (
    <>
      <Navbar />

      <main className="relative isolate min-h-screen overflow-hidden bg-[#090b0e]">

        {/* Background glow and lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="absolute -right-32 top-48 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl" />

          <svg
            viewBox="0 0 600 700"
            fill="none"
            className="absolute -right-48 top-16 h-[700px] w-[600px] max-w-none text-orange-500"
          >
            <path
              d="M600 0 C200 100 550 220 330 350 S500 550 200 700"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.3"
            />
            <path
              d="M620 20 C220 120 570 240 350 370 S520 570 220 720"
              stroke="currentColor"
              opacity="0.18"
            />
            <path
              d="M640 40 C240 140 590 260 370 390 S540 590 240 740"
              stroke="currentColor"
              opacity="0.1"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 md:py-20">

          {/* Heading */}
          <p className="font-mono text-xs tracking-widest text-orange-400">
            GET IN TOUCH
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let’s Build
            <br />
            <span className="text-orange-500">
              Something Useful.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-zinc-400">
            Have a website to build, an AI feature to integrate,
            or a bug to fix? Tell me about your project.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">

            {/* LEFT: CONTACT DETAILS */}
            <section aria-labelledby="contact-details-heading">
              <h2
                id="contact-details-heading"
                className="text-2xl font-semibold text-white"
              >
                Start a Conversation
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Share what you want to build, what you already
                have, and where you need help.
              </p>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="group mt-6 flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors hover:border-orange-500/50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                  <Mail size={21} aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-zinc-500">
                    EMAIL ME
                  </p>
                  <p className="mt-1 break-all text-sm text-zinc-100">
                    {email}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-orange-400"
                />
              </a>

              {/* Social links */}
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-zinc-800 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-orange-500/50 hover:text-orange-400"
                >
                  <FaGithub size={18} aria-hidden="true" />
                  GitHub
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-zinc-800 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-orange-500/50 hover:text-orange-400"
                >
                  <FaLinkedin size={18} aria-hidden="true" />
                  LinkedIn
                </a>
              </div>

              {/* Services */}
              <h3 className="mt-9 text-sm font-semibold text-white">
                What I Can Help With
              </h3>

              <div className="mt-4 space-y-4 text-sm text-zinc-400">
                <p className="flex items-center gap-3">
                  <Code2
                    size={19}
                    aria-hidden="true"
                    className="shrink-0 text-orange-400"
                  />
                  Websites & Full-Stack Applications
                </p>

                <p className="flex items-center gap-3">
                  <Bot
                    size={19}
                    aria-hidden="true"
                    className="shrink-0 text-orange-400"
                  />
                  Chatbots & AI Integrations
                </p>

                <p className="flex items-center gap-3">
                  <Wrench
                    size={19}
                    aria-hidden="true"
                    className="shrink-0 text-orange-400"
                  />
                  Bug Fixing & Application Improvements
                </p>
              </div>
            </section>

            {/* RIGHT: FORM */}
            <section
              aria-labelledby="form-heading"
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 sm:p-8"
            >
              <h2
                id="form-heading"
                className="text-xl font-semibold text-white"
              >
                Tell Me About Your Project
              </h2>

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm text-zinc-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-lg border border-zinc-700 bg-[#090b0e] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-orange-500 focus:outline-2 focus:outline-orange-500/30"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm text-zinc-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-zinc-700 bg-[#090b0e] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-orange-500 focus:outline-2 focus:outline-orange-500/30"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="text-sm text-zinc-300"
                  >
                    Project Type
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    className="mt-2 w-full rounded-lg border border-zinc-700 bg-[#090b0e] px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-2 focus:outline-orange-500/30"
                  >
                    <option>Website Development</option>
                    <option>Full-Stack Application</option>
                    <option>AI Integration</option>
                    <option>Bug Fixing</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm text-zinc-300"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={2000}
                    rows={5}
                    placeholder="Describe your project and the help you need..."
                    className="mt-2 w-full resize-y rounded-lg border border-zinc-700 bg-[#090b0e] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-orange-500 focus:outline-2 focus:outline-orange-500/30"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400"
                >
                  <Send size={17} aria-hidden="true" />
                  Open Email Draft
                </button>

                <p className="text-xs leading-6 text-zinc-500">
                  Opens your email app. Review the draft and
                  send it from there.
                </p>

                <p
                  role="status"
                  aria-live="polite"
                  className="text-sm leading-6 text-orange-300"
                >
                  {notice}
                </p>
              </form>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}