export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 relative overflow-hidden"
    >
      {/* Spinning ring decoration */}
      <div className="absolute w-[420px] h-[420px] rounded-full border border-[var(--accent)]/10 animate-spin-slow pointer-events-none" />
      <div
        className="absolute w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none"
        style={{ animation: "spin-slow 20s linear infinite reverse" }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)"
      }} />

      <p
        className="text-[var(--accent)] text-sm font-mono mb-4 tracking-widest uppercase animate-fade-up"
        style={{ animationDelay: "0.1s" }}
      >
        Hi, my name is
      </p>

      <h1
        className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        Moein Rezaie
        <span
          className="inline-block ml-2 w-3 h-3 rounded-full bg-[var(--accent)] animate-pulse-glow align-middle"
        />
      </h1>

      <h2
        className="text-2xl md:text-4xl font-semibold text-[var(--muted)] mb-6 animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        I build things for the web.
      </h2>

      <p
        className="max-w-xl text-[var(--muted)] leading-relaxed mb-10 animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      >
        A passionate developer focused on building clean, modern, and performant web experiences.
      </p>

      <div
        className="flex gap-4 animate-fade-up"
        style={{ animationDelay: "0.5s" }}
      >
        <a
          href="#projects"
          className="btn-3d px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="btn-3d px-6 py-3 rounded-lg border border-white/20 text-[var(--foreground)] font-medium"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          Contact me
        </a>
      </div>

      {/* Floating scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-float">
        <span className="text-xs font-mono text-[var(--muted)] tracking-widest">scroll</span>
        <span className="block w-px h-8 bg-[var(--muted)]" />
      </div>
    </section>
  );
}
