"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Tool = { name: string; icon: string };

const TOOLS: Tool[] = [
  { name: "Visual Studio Code", icon: "/images/tools/vscode.svg" },
  {
    name: "Visual Studio Insiders",
    icon: "/images/tools/visualstudio-insiders.svg",
  },
  { name: "Google Colab", icon: "/images/tools/colab.svg" },
  { name: "Canva", icon: "/images/tools/canva.svg" },
  { name: "CapCut", icon: "/images/tools/capcut.svg" },
];

export default function Tools() {
  return (
    <section className="container mx-auto max-w-[1240px] px-6 py-16 md:px-10">
      <h3 className="mb-6 text-xl font-semibold md:text-2xl">
        Tools <span className="text-[var(--accent)]">I Use</span>
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TOOLS.map((t) => (
          <motion.div
            key={t.name}
            whileHover={{ y: -3 }}
            className="group flex h-32 items-center justify-center rounded-xl border border-white/10 bg-[var(--elevated)] p-6"
            title={t.name}
            aria-label={t.name}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="relative h-12 w-12 transform transition-transform duration-200 group-hover:scale-110">
                <Image
                  src={t.icon}
                  alt={t.name}
                  fill
                  sizes="48px"
                  className="object-contain contrast-100 grayscale saturate-0 filter transition duration-200 group-hover:brightness-100 group-hover:grayscale-0 group-hover:saturate-100"
                />
              </div>
              <span className="text-sm text-[var(--subtle)] transition group-hover:text-[var(--text)]">
                {t.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
