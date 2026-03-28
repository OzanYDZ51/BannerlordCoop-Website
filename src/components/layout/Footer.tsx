export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="font-heading text-gold font-bold tracking-wider">CALRADIA ONLINE</div>
          <p className="text-text-secondary text-xs mt-1">
            Fan-made mod. Not affiliated with TaleWorlds Entertainment.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/OzanYDZ51/BannerlordCoop"
            target="_blank"
            className="text-text-secondary hover:text-gold transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://github.com/OzanYDZ51/BannerlordCoop/releases"
            target="_blank"
            className="text-text-secondary hover:text-gold transition-colors text-sm"
          >
            Releases
          </a>
          <a
            href="https://github.com/OzanYDZ51/BannerlordCoop/issues"
            target="_blank"
            className="text-text-secondary hover:text-gold transition-colors text-sm"
          >
            Report Bug
          </a>
        </div>
      </div>
    </footer>
  );
}
