import { motion } from "framer-motion";
import caredesk from "@/assets/project-caredesk.png";
import helamed from "@/assets/project-helamed.png";
import hopeflow from "@/assets/project-hopeflow.png";
import pawfinder from "@/assets/project-pawfinder.png";
import wellness from "@/assets/project-wellnesshub.png";
import smartCampus from "@/assets/Smart cmapus spring boot and react project.png";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Smart Campus",
    desc: "Campus resource management and incident ticketing system for booking facilities and handling maintenance.",
    tools: ["Java Spring Boot", "React", "MongoDB"],
    img: smartCampus,
    label: "Practice Project",
    githubUrl: "https://github.com/TaniyaDriburgh123/it3030-paf-2026-smart-campus-groupY3S1-WD-51",
  },
  {
    title: "CareDesk — Support Ticketing",
    desc: "Tested ticket submission, agent flows, and status transitions across 30+ manual test cases.",
    tools: ["Manual Testing", "Java + MySQL"],
    img: caredesk,
    label: "Practice Project",
    githubUrl: "https://github.com/TaniyaDriburgh123/Online-custom-care",
  },
  {
    title: "HelaMed — Healthcare Management",
    desc: "Explored patient, doctor channelling and lab modules; logged 12 bugs with reproduction steps.",
    tools: ["Exploratory Testing", "React + Node", "MongoDB", "API Testing"],
    img: helamed,
    label: "Practice Project",
    githubUrl: "https://github.com/TaniyaDriburgh123/Hospital-Management-System",
  },
  {
    title: "HopeFlow — Blood Donation",
    desc: "Wrote functional & form-validation test cases for donor sign-up, requests and appointments.",
    tools: ["Test Case Writing", "PHP", "HTML", "MySQL"],
    img: hopeflow,
    label: "Practice Project",
    githubUrl: "https://github.com/TaniyaDriburgh123/Blood-donation-project",
  },
  {
    title: "PawFinder — Pet Adoption App",
    desc: "Mobile UI testing on login, search filters and adoption flow across multiple screen sizes.",
    tools: ["UI Testing", "Mobile Prototype"],
    img: pawfinder,
    label: "Practice Project",
    githubUrl: "https://github.com/TaniyaDriburgh123/PawFinder",
  },
  {
    title: "Wellness Hub — Habit Tracker",
    desc: "Verified habit add/delete, mood logging and hydration counter on an Android Kotlin build.",
    tools: ["Manual Testing", "Android / Kotlin"],
    img: wellness,
    label: "Practice Project",
    githubUrl: "https://github.com/TaniyaDriburgh123/HabitHub",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Practice Work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Things I've broken on purpose.
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Personal QA exercises on apps I've helped build & test — honest scope, real artifacts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              className={`group glass-strong rounded-3xl overflow-hidden transition duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(212,168,83,0.2)]`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-wider text-primary">
                  {p.label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <div className="flex gap-2">
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 shrink-0 place-items-center rounded-full glass text-muted-foreground transition hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_22px_rgba(212,168,83,0.45)]">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full glass text-primary transition group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_22px_rgba(212,168,83,0.45)]">
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-primary/[0.04] px-3 py-1 text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
