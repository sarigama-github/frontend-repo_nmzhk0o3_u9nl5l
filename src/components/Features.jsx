import { Cpu, Zap, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Real-time 3D',
    desc: 'Immersive, interactive scenes powered by GPU-accelerated rendering.'
  },
  {
    icon: Zap,
    title: 'Lightning-fast',
    desc: 'Optimized interactions with buttery-smooth transitions and motion.'
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    desc: 'Built with modern web standards and best practices out of the box.'
  },
  {
    icon: Sparkles,
    title: 'Minimal Aesthetic',
    desc: 'A futuristic visual language with focus on clarity and function.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35)_inset,0_20px_50px_-20px_rgba(56,189,248,0.25)] transition-shadow">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-slate-300/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
