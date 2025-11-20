export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/60">© {new Date().getFullYear()} Nova3D. All rights reserved.</p>
        <div className="text-xs text-white/60 flex items-center gap-4">
          <a href="#" className="hover:text-white/90 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/90 transition-colors">Terms</a>
          <a href="#" className="hover:text-white/90 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
