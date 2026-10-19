export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-[#090b0e]">

      {/* Orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/2 h-32 w-72 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 text-[10px] text-zinc-400 sm:text-xs">

        <p>
          © {new Date().getFullYear()} Basharat.
          <span className="hidden sm:inline">
            {" "}All rights reserved.
          </span>
        </p>

        <p>
          Made with <span className="text-orange-500">♥</span>
          <span className="hidden sm:inline"> and coffee.</span>
        </p>

      </div>
    </footer>
  );
}