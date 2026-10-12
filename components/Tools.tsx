"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Tool = { name: string; icon: string };

const TOOLS: Tool[] = [
  { name: "Visual Studio Code", icon: "/images/tools/vscode.svg" },
  { name: "Visual Studio Insiders", icon: "/images/tools/visualstudio-insiders.svg" },
  { name: "Google Colab", icon: "/images/tools/colab.svg" },
  { name: "Canva", icon: "/images/tools/canva.svg" },
  { name: "CapCut", icon: "/images/tools/capcut.svg" },
];

export default function Tools() {
  return (
    <section className="container mx-auto max-w-[1240px] px-6 md:px-10 py-16">
      <h3 className="text-xl md:text-2xl font-semibold mb-6">
        Tools <span className="text-[var(--accent)]">I Use</span>
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TOOLS.map((t) => (
          <motion.div
            key={t.name}
            whileHover={{ y: -3 }}
            className="group rounded-xl border border-white/10 bg-[var(--elevated)] p-6 flex items-center justify-center h-32"
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
                  className="object-contain filter grayscale saturate-0 contrast-100 group-hover:grayscale-0 group-hover:saturate-100 group-hover:brightness-100 transition duration-200"
                />
              </div>
              <span className="text-sm text-[var(--subtle)] group-hover:text-[var(--text)] transition">
                {t.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
