"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Tools from "../components/Tools";
import Skills from "../components/Skills";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  thumb: string;
  repo: string;
};

export default function Page() {
  const reduce = useReducedMotion();

  return (
    <main className="relative bg-[var(--bg)] text-[var(--text)]">
      {/* background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0B0B0D] via-[#0F1114] to-[#0B0B0D] opacity-90" />

      {/* ===== HERO ===== */}
      <section
        id="home"
        className="container mx-auto grid min-h-[100dvh] max-w-[1240px] scroll-mt-24 grid-cols-12 gap-8 px-6 pt-28 md:px-10 md:pt-32"
      >
        <motion.div
          className="col-span-12 flex flex-col justify-center gap-6 md:col-span-7 md:pr-6 lg:pr-10"
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="leading-[1.08]">
            <span className="block text-[clamp(2rem,4.8vw,4rem)] font-bold text-[var(--text)]">
              Hi, I&apos;m
            </span>
            <span className="block text-[clamp(2.2rem,5.2vw,4.2rem)] font-bold text-[var(--accent)]">
              Ryan Alvino
            </span>
          </h1>

          <p className="max-w-prose text-base text-[var(--subtle)] md:text-lg">
            Information Systems undergraduate at Tarumanagara University who
            loves to explore.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/Resume_Vino.pdf"
              download
              className="rounded-full bg-[var(--elevated)] px-5 py-3 font-medium ring-1 ring-white/10 transition hover:ring-[var(--accent)]/60 active:scale-[0.98]"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              aria-label="Download CV"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="col-span-12 flex items-center justify-center md:col-span-5"
          initial={reduce ? undefined : { opacity: 0, x: 24 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="h-[340px] w-[240px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 sm:h-[400px] sm:w-[280px] lg:h-[460px] lg:w-[340px]">
            <Image
              src="/images/Vino_Profile_New.png"
              alt="Ryan Alvino"
              width={680}
              height={900}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 340px"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== PROJECTS ===== */}
      {/* ===== SKILLS & TOOLS ===== */}
      <Skills />
      <Tools />

      {/* ===== CONTACT ===== */}
      <section
        id="contact"
        className="container mx-auto min-h-[70vh] max-w-[1240px] scroll-mt-24 px-6 pt-28 pb-28 md:px-10 md:pt-32"
      >
        <h2 className="text-2xl font-semibold md:text-3xl">
          Contact <span className="text-[var(--accent)]">Me</span>
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-12">
          <div className="space-y-4 md:col-span-7">
            <p className="leading-relaxed text-[var(--subtle)]">
              Interested in collaborating, discussing a project, or just want to
              talk about data and tech? I&apos;m always open to new
              opportunities and meaningful conversations. Feel free to reach out
              through any of the platforms below.
            </p>

            <div className="mt-4 flex gap-4">
              {[
                {
                  icon: "/images/social/instagram.svg",
                  href: "https://www.instagram.com/ryn_alvno?igsh=MnN2anBqbjlzMncz&utm_source=qr",
                },
                {
                  icon: "/images/social/gmail.svg",
                  href: "mailto:ryanalvino1234@gmail.com",
                },
              ].map((s) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={
                    s.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--elevated)] ring-1 ring-white/10 transition hover:ring-[var(--accent)] active:scale-95"
                  aria-label={s.href}
                >
                  <Image src={s.icon} alt="icon" width={24} height={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
