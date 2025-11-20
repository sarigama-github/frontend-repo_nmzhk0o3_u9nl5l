import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and grid overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl pt-28">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
            Interactive • Tech • Futuristic • Minimal
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_6px_40px_rgba(56,189,248,0.15)]">
            A digital space where ideas become real-time experiences
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            Explore a minimalist 3D environment engineered for the future. Smooth, tactile, and fully interactive.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#features" className="rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-900 hover:bg-cyan-300 transition-colors">Explore Features</a>
            <a href="#contact" className="rounded-xl border border-white/20 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition-colors">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
