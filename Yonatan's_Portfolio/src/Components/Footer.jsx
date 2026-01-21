export default function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-screen flex flex-col justify-between bg-black text-white px-6 border-t border-white/10"
    >
      {/* Main content (centered) */}
      <div className="flex flex-col items-center justify-center flex-1">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">
          Contact Me!
        </h2>

        <div className="mt-12 flex items-center gap-10">
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          >
            <img src="/git.svg" alt="GitHub" className="h-14 w-14" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="h-14 w-14" />
          </a>

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="transition transform hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          >
            <img src="/E-mail.png" alt="Email" className="h-14 w-14" />
          </a>
        </div>
      </div>

      {/* Footer bar (bottom) */}
      <div className="py-6 text-center bg-white/5 backdrop-blur-md border-t border-white/10">
        <p className="text-sm text-gray-400">
          © 2025 Yonatan Portfolio
        </p>
      </div>
    </footer>
  );
}
