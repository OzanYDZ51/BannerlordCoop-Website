export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <div className="font-heading text-gold font-bold tracking-wider text-lg">
          CALRADIA ONLINE
        </div>
        <p className="text-text-secondary text-xs max-w-md">
          Fan-made multiplayer mod for Mount & Blade II: Bannerlord.
          Not affiliated with TaleWorlds Entertainment.
        </p>
        <div className="text-text-secondary/40 text-xs mt-2">
          &copy; {new Date().getFullYear()} Calradia Online
        </div>
      </div>
    </footer>
  );
}
