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
        className="scroll-mt-24 min-h-[100dvh] container mx-auto grid max-w-[1240px] grid-cols-12 gap-8 px-6 md:px-10 pt-28 md:pt-32"
      >
        <motion.div
          className="col-span-12 md:col-span-7 flex flex-col justify-center gap-6 md:pr-6 lg:pr-10"
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

          <p className="max-w-prose text-base md:text-lg text-[var(--subtle)]">
            Information Systems undergraduate at Tarumanagara University who loves to explore.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/Resume_Vino.pdf"
              download
              className="rounded-full bg-[var(--elevated)] px-5 py-3 font-medium ring-1 ring-white/10 hover:ring-[var(--accent)]/60 transition active:scale-[0.98]"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              aria-label="Download CV"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-5 flex items-center justify-center"
          initial={reduce ? undefined : { opacity: 0, x: 24 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="w-[240px] h-[340px] sm:w-[280px] sm:h-[400px] lg:w-[340px] lg:h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <Image
              src="/images/Vino_Profile.jpeg"
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
        className="scroll-mt-24 min-h-[70vh] container mx-auto max-w-[1240px] px-6 md:px-10 pt-28 md:pt-32 pb-28"
      >
        <h2 className="text-2xl md:text-3xl font-semibold">
          Contact <span className="text-[var(--accent)]">Me</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-12 mt-8">
          <div className="md:col-span-7 space-y-4">
            <p className="text-[var(--subtle)] leading-relaxed">
              Interested in collaborating, discussing a project, or just want to talk about data and
              tech? I&apos;m always open to new opportunities and meaningful conversations. Feel free
              to reach out through any of the platforms below.
            </p>

            <div className="flex gap-4 mt-4">
              {[
                { icon: "/images/social/instagram.svg", href: "https://www.instagram.com/ryn_alvno?igsh=MnN2anBqbjlzMncz&utm_source=qr" },
                { icon: "/images/social/gmail.svg", href: "mailto:ryanalvino1234@gmail.com" },
              ].map((s) => (
                <motion.a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.95 }}
                  className="h-11 w-11 flex items-center justify-center bg-[var(--elevated)] rounded-xl ring-1 ring-white/10 hover:ring-[var(--accent)] transition active:scale-95"
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
