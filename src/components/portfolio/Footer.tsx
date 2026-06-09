import { Github, Linkedin, Mail } from "lucide-react";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm italic text-muted-foreground">
            "Every bug I find is a better experience for someone."
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition">{l}</a>
            ))}
          </nav>
          <div className="flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/TaniyaDriburgh123" },
              { Icon: Linkedin, href: "#" },
              { Icon: Mail, href: "mailto:tanidriburg@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full glass hover:text-primary hover:shadow-[0_0_20px_rgba(212,168,83,0.3)] transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground/70">© 2025 Taniya Driburg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
