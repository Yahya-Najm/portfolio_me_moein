"use client";

const skills = [
  { name: "JavaScript", color: "#f7df1e" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "React",      color: "#61dafb" },
  { name: "Next.js",    color: "#ffffff" },
  { name: "Node.js",    color: "#339933" },
  { name: "Python",     color: "#3776ab" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "Git",        color: "#f05032" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">
        My <span className="text-[var(--accent)]">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(({ name, color }) => (
          <div
            key={name}
            className="group px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm text-[var(--muted)] cursor-default
                       transition-all duration-200
                       hover:text-[var(--foreground)] hover:border-white/30 hover:bg-white/10
                       hover:-translate-y-1 hover:rotate-1
                       hover:shadow-lg"
            style={{
              transitionProperty: "transform, box-shadow, border-color, background, color",
            }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full mr-2 align-middle transition-transform duration-300 group-hover:rotate-180"
              style={{ background: color }}
            />
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
