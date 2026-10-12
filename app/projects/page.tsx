"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Brain Tumor Detection Website",
    description:
      "A deep learning model using CNN and SVM for brain tumor, aneurysm, and cancer detection with 98% accuracy. Built with Flask and PyTorch.",
    tech: ["Python", "PyTorch", "Flask", "CNN", "SVM"],
    image: "/images/Brain.jpeg",
  },
  {
    title: "Bitcoin and Stock Price Forecasting (BBCA)",
    descriptio:
      "A time series forecasting model using TimesNet architecture to predict Bitcoin and BCA stock prices with high temporal accuracy.",
    tech: ["Python", "TimesNet", "Pandas", "Matplotlib"],
    image: "/images/bitcoin.jpeg",
  },
  {
    title: "Plant Disease Detection",
    description:
      "A deep learning model using ResNet50 for several plants disease like, tomato, pepper, potato, etc with 93% accuracy. Built with PyTorch, Torchvision and Flask.",
    tech: ["Python", "Deep Learning", "ResNet50", "PyTorch"],
    image: "/images/plant.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <main
      id="projects"
      className="min-h-screen bg-[var(--bg)] px-6 py-24 text-[var(--text)] md:px-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        className="mb-12 text-center text-4xl font-bold md:text-5xl"
      >
        Featured <span className="text-[var(--accent)]">Projects</span>
      </motion.h2>

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--muted)]/10 shadow-lg backdrop-blur-sm transition hover:shadow-cyan-500/10"
          >
            <div className="relative h-56 w-full">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 p-6">
              <h3 className="text-xl font-semibold text-[var(--accent)]">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--subtle)]">
                {p.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-2 py-1 text-xs text-[var(--accent)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
