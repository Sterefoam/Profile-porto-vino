"use client";

import { motion } from "framer-motion";

type Skill = { name: string; desc: string };

const SKILLS: Skill[] = [
  { name: "PHP", desc: "Server-side scripting for web applications and backend development." },
  { name: "Java", desc: "Object-oriented programming with Spring Boot framework for enterprise applications." },
  { name: "Python", desc: "Scripting, data wrangling, automation, and general-purpose programming." },
  { name: "C", desc: "Low-level programming and systems development." },
  { name: "Node.JS", desc: "JavaScript runtime for building scalable backend services and APIs." },
  { name: "Google Colab", desc: "Cloud-based Jupyter notebook environment for data science and ML projects." },
  { name: "HTML", desc: "Markup language for creating web page structure and semantics." },
  { name: "CSS", desc: "Styling and layout design for responsive and interactive user interfaces." },
  { name: "SQL", desc: "Query optimization, indexing, and database design with Star & Snowflake Schema." },
  { name: "Data Warehouse", desc: "Design and implementation of data warehouse architecture (Star & Snowflake Schema)." },
  { name: "UI/UX Design", desc: "User interface and experience design with glassmorphism and dark mode principles." },
  { name: "Word & Excel", desc: "Document creation and data analysis with Microsoft Office suite." },
];

export default function Skills() {
  return (
    <section
      id="skills"
      // ✅ anchor offset; ga ubah layout yang sudah ada
      className="scroll-mt-24 container mx-auto max-w-[1240px] px-6 md:px-10 py-20"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">
        My <span className="text-[var(--accent)]">Skills</span>
      </h2>

      {/* ✅ hemat render di mobile */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 [content-visibility:auto] [contain-intrinsic-size:500px]">
        {SKILLS.map((s) => (
          <motion.div
            key={s.name}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-white/10 bg-[var(--elevated)] p-5"
          >
            <h3 className="font-semibold text-lg">{s.name}</h3>
            <p className="text-sm text-[var(--subtle)] mt-1">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
