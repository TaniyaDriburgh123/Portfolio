import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const can = [
  "Manual Testing", "Test Case Writing", "Bug Reporting",
  "Functional Testing", "Exploratory Testing", "Regression Basics",
  "Cross-browser Testing", "JIRA (Basic)", "Postman (Basic)",
];
const learning = [
  "Selenium (Beginner)", "SQL for Testers",
  "Agile & Scrum Basics", "Test Automation Concepts",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Toolkit</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          What I can do <span className="text-muted-foreground font-light">— and what I'm learning next.</span>
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-foreground/90">What I can do</h3>
              <span className="text-[11px] text-primary">9 skills</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {can.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: [0.34, 1.56, 0.64, 1] }}
                  className="rounded-full border border-primary/30 bg-primary/[0.06] px-4 py-2 text-xs text-foreground/90 shadow-[0_0_18px_rgba(212,168,83,0.1)]"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-foreground/90">Currently learning</h3>
              <span className="flex items-center gap-1.5 text-[11px] text-[#c49a3c]">
                <Loader2 className="h-3 w-3 animate-spin" /> in progress
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {learning.map((l, i) => (
                <motion.li
                  key={l}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center justify-between rounded-2xl glass px-4 py-3"
                >
                  <span className="flex items-center gap-3 text-sm text-foreground/90">
                    <span className="h-2 w-2 rounded-full bg-[#c49a3c] animate-pulse-soft" />
                    {l}
                  </span>
                  <div className="h-1.5 w-28 overflow-hidden rounded-full bg-primary/[0.08]">
                    <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#c49a3c] to-primary animate-pulse-soft" />
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
