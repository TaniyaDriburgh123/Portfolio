export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-[rgba(212,168,83,0.1)] blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-24 h-[480px] w-[480px] rounded-full bg-[rgba(196,154,60,0.08)] blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-[rgba(184,148,46,0.1)] blur-3xl animate-float" style={{ animationDelay: "-5s" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" />
    </div>
  );
}
