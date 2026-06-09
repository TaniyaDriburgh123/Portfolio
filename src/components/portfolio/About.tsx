import { motion } from "framer-motion";
import profile from "@/assets/profile.jpeg";
import { ClipboardList, Bug, FileText, Repeat2, Search, Boxes, Send, Globe } from "lucide-react";

const skills = [
  { icon: ClipboardList, label: "Manual Testing" },
  { icon: Bug, label: "Bug Reporting" },
  { icon: FileText, label: "Test Case Writing" },
  { icon: Repeat2, label: "Functional Testing" },
  { icon: Search, label: "Exploratory Testing" },
  { icon: Boxes, label: "JIRA (Basic)" },
  { icon: Send, label: "Postman (Basic)" },
  { icon: Globe, label: "Cross-browser" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative mx-auto aspect-square w-64 md:w-80"
        >
          <div className="absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,rgba(212,168,83,0.5),rgba(196,154,60,0.35),rgba(184,148,46,0.4),rgba(212,168,83,0.5))] blur-md animate-spin-slow opacity-80" />
          <div className="absolute inset-0 rounded-full overflow-hidden neon-ring transition-transform duration-500 hover:-translate-y-1">
            <img src={profile} alt="Portrait of Taniya Driburg" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            New to QA. <span className="text-muted-foreground font-light">Serious about quality.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            I'm Taniya Driburg a fresher QA Engineer passionate about software quality and finding
            bugs before users do. I've been learning manual testing, writing test cases, and exploring
            tools like Postman and JIRA through personal practice and coursework. I'm actively
            building my skills and looking for my first opportunity to grow inside a real QA team.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group glass rounded-2xl p-4 hover:border-primary/40 transition"
              >
                <s.icon className="h-5 w-5 text-primary transition group-hover:scale-110" strokeWidth={1.4} />
                <p className="mt-3 text-xs text-foreground/90">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
