import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between h-16 px-4">
          
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <img src="/icon.png" alt="Logo" className="h-8 w-8" />
            <Link
              to="/"
              className="text-blue-400 font-semibold text-lg hover:text-blue-300 transition"
            >
              Yonatan.
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-white">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>

            {/* Book a Meeting */}
            <Link
              to="/book"
              className="px-6 py-2.5 rounded-full bg-blue-500 font-semibold
                         hover:bg-blue-600 transition
                         shadow-[0_0_20px_rgba(59,130,246,0.7)]
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]"
            >
              Book a Meeting
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center text-white">
          
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-4xl"
          >
            ✕
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-8 text-2xl">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            {/* Book a Meeting */}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-6 px-8 py-4 rounded-full bg-blue-500 font-semibold
                         shadow-[0_0_25px_rgba(59,130,246,0.8)]"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
