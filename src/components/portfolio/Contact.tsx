import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message ready — opening your email client.");
      const f = e.target as HTMLFormElement;
      const data = new FormData(f);
      const subject = encodeURIComponent(`QA opportunity from ${data.get("name")}`);
      const body = encodeURIComponent(String(data.get("message")));
      window.location.href = `mailto:tanidriburg@gmail.com?subject=${subject}&body=${body}`;
    }, 600);
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Let's make software <span className="text-gradient">a little less buggy.</span>
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Reach out about internships, junior QA roles, or just to talk testing.
              </p>

              <div className="mt-8 space-y-3 text-sm">
                <a href="mailto:tanidriburg@gmail.com" className="flex items-center gap-3 text-foreground/90 hover:text-primary transition">
                  <Mail className="h-4 w-4 text-primary" /> tanidriburg@gmail.com
                </a>
                <a href="https://github.com/TaniyaDriburgh123" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground/90 hover:text-primary transition">
                  <Github className="h-4 w-4 text-primary" /> github.com/TaniyaDriburgh123
                </a>
                <a href="#" className="flex items-center gap-3 text-foreground/90 hover:text-primary transition">
                  <Linkedin className="h-4 w-4 text-primary" /> LinkedIn (coming soon)
                </a>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <Field label="Name" name="name" defaultValue="" />
              <Field label="Email" name="email" type="email" defaultValue="" />
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  defaultValue="Hi! I'd love to connect with you about a QA opportunity."
                  className="mt-2 w-full resize-none rounded-2xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-[0_0_24px_rgba(212,168,83,0.25)] transition"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_30px_rgba(212,168,83,0.35)] transition hover:scale-[1.04] active:scale-95 disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send message"}
                <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", defaultValue }: { label: string; name: string; type?: string; defaultValue?: string }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name} type={type} defaultValue={defaultValue} required
        className="mt-2 w-full rounded-2xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:shadow-[0_0_24px_rgba(212,168,83,0.25)] transition"
      />
    </div>
  );
}
