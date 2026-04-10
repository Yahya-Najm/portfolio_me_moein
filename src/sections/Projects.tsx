"use client";

import { useRef } from "react";

/* ── CSS-art LayerEdit editor mockup ── */
function LayerEditPreview() {
  return (
    <div className="w-full max-w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-950 font-mono text-[10px] select-none shadow-2xl">

      {/* Toolbar — two layouts: mobile (minimal) and sm+ (full) */}
      <div className="flex items-center px-2 sm:px-3 py-2 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
        {/* Traffic lights */}
        <div className="flex gap-1 sm:gap-1.5 shrink-0 mr-2">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <span className="w-2 h-2 rounded-full bg-green-500/80" />
        </div>

        {/* Logo */}
        <span className="text-violet-400 font-semibold tracking-wide shrink-0">LayerEdit</span>

        {/* Tool pills — only on sm+ */}
        <div className="hidden sm:flex items-center gap-1 ml-2">
          <div className="w-px h-4 bg-neutral-700 mx-1" />
          {["S","P","C","B","E","T"].map((t, i) => (
            <span
              key={t}
              className={`px-1.5 py-0.5 rounded text-[9px] ${i === 3 ? "bg-violet-600 text-white" : "text-neutral-500"}`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Active tool badge on mobile only */}
        <span className="sm:hidden ml-2 px-1.5 py-0.5 rounded text-[9px] bg-violet-600 text-white shrink-0">
          Brush
        </span>

        <div className="flex-1 min-w-0" />

        {/* Right side badges */}
        <div className="flex items-center gap-1 shrink-0">
          <span className="hidden sm:inline px-1.5 py-0.5 rounded bg-amber-500/80 text-black text-[9px]">B/A</span>
          <span className="px-1.5 py-0.5 rounded bg-neutral-700 text-neutral-300 text-[9px]">100%</span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-white text-[9px]">Export</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex" style={{ height: 150 }}>

        {/* Adjustment panel — sm+ only */}
        <div className="hidden sm:flex w-24 shrink-0 bg-neutral-900 border-r border-neutral-800 p-2 flex-col gap-2">
          <span className="text-[8px] text-neutral-500 uppercase tracking-widest">Adjustments</span>
          {[
            { label: "Bri", val: 60, color: "bg-yellow-400" },
            { label: "Con", val: 40, color: "bg-blue-400" },
            { label: "Sat", val: 75, color: "bg-pink-400" },
            { label: "Blu", val: 20, color: "bg-cyan-400" },
          ].map(({ label, val, color }) => (
            <div key={label}>
              <div className="flex justify-between mb-0.5">
                <span className="text-neutral-500">{label}</span>
                <span className="text-neutral-400">{val > 50 ? `+${val - 50}` : val - 50}</span>
              </div>
              <div className="h-1 rounded-full bg-neutral-800 overflow-hidden">
                <div className={`h-full rounded-full ${color} opacity-70`} style={{ width: `${val}%` }} />
              </div>
            </div>
          ))}
          <div className="flex gap-1 mt-auto">
            <span className="flex-1 text-center py-0.5 rounded bg-neutral-800 text-neutral-400 text-[8px]">H</span>
            <span className="flex-1 text-center py-0.5 rounded bg-neutral-800 text-neutral-400 text-[8px]">V</span>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 min-w-0 relative overflow-hidden bg-[#1a1a2e]">
          {/* Checkerboard */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "repeating-conic-gradient(#555 0% 25%, transparent 0% 50%)",
            backgroundSize: "16px 16px",
          }} />
          {/* Gradient layer */}
          <div className="absolute inset-3 rounded-lg overflow-hidden">
            <div className="absolute inset-0" style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 40%, #f64f59 70%, #c471ed 100%)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 6s ease infinite",
            }} />
            <div className="absolute left-0 right-0 h-0.5 bg-white/30 animate-scan" />
          </div>
          {/* Corner handles */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/60 rounded-tl" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/60 rounded-tr" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/60 rounded-bl" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/60 rounded-br" />
          {/* Text label — hidden on mobile to avoid whitespace-nowrap overflow */}
          <div className="hidden sm:block absolute bottom-5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/50 border border-white/10 text-white text-[9px] whitespace-nowrap">
            T · &ldquo;Hello World&rdquo;
          </div>
        </div>

        {/* Layer panel — sm+ only */}
        <div className="hidden sm:flex w-24 shrink-0 bg-neutral-900 border-l border-neutral-800 p-2 flex-col gap-1.5">
          <span className="text-[8px] text-neutral-500 uppercase tracking-widest">Layers</span>
          {[
            { name: "Text",    color: "bg-blue-500",    active: false },
            { name: "Drawing", color: "bg-emerald-500", active: true  },
            { name: "Image",   color: "bg-violet-500",  active: false },
          ].map(({ name, color, active }) => (
            <div
              key={name}
              className={`flex items-center gap-1.5 px-1.5 py-1 rounded ${active ? "bg-violet-600/30 border border-violet-500/40" : "bg-neutral-800"}`}
            >
              <span className={`w-2 h-2 rounded-sm shrink-0 ${color}`} />
              <span className="text-neutral-300 truncate text-[9px]">{name}</span>
            </div>
          ))}
          <div className="mt-auto flex gap-1">
            <span className="flex-1 text-center py-0.5 rounded bg-neutral-800 text-neutral-400">+</span>
            <span className="flex-1 text-center py-0.5 rounded bg-neutral-800 text-red-400">×</span>
          </div>
        </div>

      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-2 sm:px-3 py-1 bg-neutral-900 border-t border-neutral-800 text-neutral-600 text-[8px] overflow-hidden">
        <span className="truncate mr-2">3 layers · 1920 × 1080</span>
        <span className="shrink-0">PNG · ready</span>
      </div>
    </div>
  );
}

/* ── 3-D tilt card ── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const rotX = (((e.clientY - rect.top)  / rect.height) - 0.5) * -16;
    const rotY = (((e.clientX - rect.left) / rect.width)  - 0.5) *  16;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
  }

  function onMouseLeave() {
    const el = cardRef.current;
    if (el) el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="card-3d"
      style={{ transition: "transform 0.15s ease" }}
    >
      {children}
    </div>
  );
}

const tags = ["Next.js", "TypeScript", "Canvas API", "Zustand", "Tailwind CSS"];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto overflow-x-clip">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
        My <span className="text-[var(--accent)]">Projects</span>
      </h2>

      <TiltCard>
        {/* overflow-hidden ensures nothing bleeds outside the rounded card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">

            {/* Preview */}
            <div className="md:order-2 w-full min-w-0 animate-float">
              <LayerEditPreview />
            </div>

            {/* Info */}
            <div className="md:order-1 flex flex-col justify-center min-w-0">
              <span className="text-[var(--accent)] text-xs font-mono tracking-widest uppercase mb-2">
                Featured Project
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">LayerEdit</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                A browser-based image editor inspired by Photoshop. Supports multi-layer editing
                — stack image, drawing, and text layers independently. Adjust brightness, contrast,
                saturation, and blur per layer. Crop, rotate, flip, zoom, and compare
                before&thinsp;/&thinsp;after. Export to PNG or JPEG — all in the browser, no server needed.
              </p>
              <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://image-editor-eight-ashy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d self-start px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-medium"
              >
                View Project →
              </a>
            </div>

          </div>
        </div>
      </TiltCard>

      <p className="text-center text-[var(--muted)] text-sm mt-10 opacity-60">
        More projects coming soon&hellip;
      </p>
    </section>
  );
}
