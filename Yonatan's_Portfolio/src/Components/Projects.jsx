export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        
        {/* Bento Grid */}
        <a
          href="https://bento-grid133.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 transition transform group-hover:-translate-y-2 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]">
            <img
              src="/bent.png"
              alt="Bento Grid Project"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Bento Grid</h3>
            </div>
          </div>
        </a>

        {/* Lost ID */}
        <a
          href="https://github.com/Lost-ID/Frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 transition transform group-hover:-translate-y-2 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]">
            <img
              src="/lost-id.jpg"
              alt="Lost ID Project"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Lost ID Automation</h3>
            </div>
          </div>
        </a>

        {/* Mortgage Calculator */}
        <a
          href="https://mortage-calculator32.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 transition transform group-hover:-translate-y-2 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]">
            <img
              src="/mortgage.png"
              alt="Mortgage Calculator Project"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Mortgage Calculator</h3>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}
