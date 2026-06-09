import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full glass-strong px-5 py-3 mx-3 md:mx-auto">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold">TD</span>
          <span className="text-sm">Taniya<span className="text-primary">.qa</span></span>
       </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex h-9 items-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-[0_0_24px_rgba(212,168,83,0.35)] hover:scale-[1.03] transition">Hire me</a>
        <button onClick={() => setOpen(true)} className="md:hidden text-foreground" aria-label="Open menu"><Menu className="h-5 w-5" /></button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-xl md:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-semibold">Menu</span>
            <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-5 w-5" /></button>
          </div>
          <nav className="flex flex-col items-center gap-6 pt-16 text-2xl">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-primary transition">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-primary px-6 py-3 text-base text-primary-foreground">Hire me</a>
          </nav>
        </div>
      )}
    </header>
  );
}
