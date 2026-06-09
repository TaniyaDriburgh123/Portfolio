import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Bug, Search } from "lucide-react";

const phrase = "I love finding bugs and making software better.";

export function Hero() {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(phrase.slice(0, i));
      if (i >= phrase.length) clearInterval(t);
    }, 38);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-soft" />
            Available for QA internships & junior roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Taniya Driburg</span>
            <br />
            <span className="text-muted-foreground font-light">Aspiring QA Engineer.</span>
          </motion.h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg caret">
            {typed}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_30px_rgba(212,168,83,0.4)] transition hover:scale-[1.04]">
              Hire me <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm text-foreground hover:border-primary/40 transition">
              View practice work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Manual testing</span>
            <span className="flex items-center gap-2"><Bug className="h-3.5 w-3.5 text-[#c49a3c]" /> Bug reporting</span>
            <span className="flex items-center gap-2"><Search className="h-3.5 w-3.5 text-[#b8942e]" /> Exploratory testing</span>
          </div>
        </div>

        {/* 3D-ish floating QA orb (CSS substitute for Spline) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }}
          className="relative aspect-square w-full max-w-md justify-self-center md:justify-self-end"
        >
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_120deg,rgba(212,168,83,0.25),rgba(196,154,60,0.2),rgba(184,148,46,0.25),rgba(212,168,83,0.25))] blur-2xl animate-spin-slow" />
          <div className="relative grid h-full w-full place-items-center rounded-full glass-strong neon-ring animate-float">
            <div className="grid h-44 w-44 md:h-56 md:w-56 place-items-center rounded-full bg-white/60 backdrop-blur-xl border border-primary/30">
              <Search className="h-20 w-20 md:h-24 md:w-24 text-primary drop-shadow-[0_0_24px_rgba(212,168,83,0.5)]" strokeWidth={1.2} />
            </div>
            {/* status pills */}
            <div className="absolute -top-3 left-6 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-wider text-primary animate-float">PASS · 42</div>
            <div className="absolute top-1/2 -right-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-wider text-[#c49a3c] animate-float" style={{ animationDelay: "-2s" }}>FAIL · 3</div>
            <div className="absolute bottom-2 left-1/4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-wider text-[#b8942e] animate-float" style={{ animationDelay: "-4s" }}>BUG #018</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
