import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-[0] opacity-60 [background:radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.12),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(59,130,246,0.10),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />

        {/* Mini CTA */}
        <section id="about" className="relative py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Designed for the next web</h2>
            <p className="mt-4 text-slate-300/90">
              Clean, digital, and future-forward. This space blends minimalist UI with an interactive 3D experience so your product can shine.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-sm text-white/80">Live 3D scene rendered in-browser</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
