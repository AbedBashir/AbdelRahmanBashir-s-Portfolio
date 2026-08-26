import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-gray-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>
          Built with{" "}
          <span className="text-cyan-400">Next.js</span> &{" "}
          <span className="text-fuchsia-400">GSAP</span>
        </p>
      </div>
    </footer>
  );
}
