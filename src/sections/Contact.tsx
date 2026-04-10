export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">
        Get In <span className="text-[var(--accent)]">Touch</span>
      </h2>
      <p className="text-[var(--muted)] max-w-md mx-auto mb-8 leading-relaxed">
        I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi,
        my inbox is always open.
      </p>
      <a
        href="mailto:your@email.com"
        className="btn-3d inline-block px-8 py-4 rounded-xl bg-[var(--accent)] text-white font-medium"
      >
        Say Hello
      </a>
    </section>
  );
}
