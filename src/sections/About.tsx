export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">
        About <span className="text-[var(--accent)]">Me</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 text-[var(--muted)] leading-relaxed">
        <div className="space-y-4">
          <p>
            I&apos;m a developer who loves turning ideas into real, working products. I enjoy building
            full-stack web applications and am always looking to learn new things.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new tech, working on side projects,
            or just enjoying a good cup of coffee.
          </p>
        </div>
        <div className="space-y-4">
          {/* Placeholder for a photo or extra content */}
          <div className="w-full aspect-square max-w-xs mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--muted)]">
            Photo
          </div>
        </div>
      </div>
    </section>
  );
}
