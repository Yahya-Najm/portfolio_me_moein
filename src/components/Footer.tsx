export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-[var(--muted)] border-t border-white/10">
      <p>Built by Moein Rezaie &mdash; {new Date().getFullYear()}</p>
    </footer>
  );
}
