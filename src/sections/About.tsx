export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
        About <span className="text-[var(--accent)]">Me</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 text-[var(--muted)] leading-relaxed">
        {/* Photo — top on mobile */}
        <div className="md:order-2 flex justify-center">
          <div className="w-full max-w-[200px] sm:max-w-xs aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--muted)]">
            Photo
          </div>
        </div>
        {/* Text — below photo on mobile */}
        <div className="md:order-1 space-y-4 text-sm sm:text-base">
          <p>
            I&apos;m a developer who loves turning ideas into real, working products. I enjoy building
            full-stack web applications and am always looking to learn new things.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new tech, working on side projects,
            or just enjoying a good cup of coffee.
          </p>
        </div>
      </div>
    </section>
  );
}
