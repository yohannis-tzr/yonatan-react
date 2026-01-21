import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ showBookButton = true }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="
          fixed top-0 w-full z-50
          bg-black/60 text-white
          backdrop-blur-md
          border-b border-white/10
        "
      >
        <div className="flex items-center justify-between h-16 px-4">

          {/* LOGO */}
          <Link
            to="/"
            className="text-blue-400 font-semibold text-lg hover:text-blue-300 transition"
          >
            Yonatan.
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6">

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

            {showBookButton && (
              <Link
                to="/book"
                className="
                  px-6 py-2.5 rounded-full
                  bg-blue-500 font-semibold
                  hover:bg-blue-600 transition
                  shadow-[0_0_20px_rgba(59,130,246,0.7)]
                "
              >
                Book a Meeting
              </Link>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            fixed inset-0 z-[999]
            bg-black/80 text-white
            backdrop-blur-xl
            flex flex-col items-center justify-center
          "
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-4xl"
          >
            ✕
          </button>

          <div className="flex flex-col items-center gap-8 text-2xl">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            {showBookButton && (
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="mt-6 px-8 py-4 rounded-full bg-blue-500 font-semibold"
              >
                Book a Meeting
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
