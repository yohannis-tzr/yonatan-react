export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6"
    >
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">
        Skills
      </h2>

      {/* Description */}
      <p className="mt-8 max-w-3xl text-center text-lg md:text-xl text-gray-200">
        “Front-End Developer skilled in crafting responsive designs and
        interactive experiences with HTML, CSS, JavaScript, & React.”
      </p>

      {/* Skills Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
        
        {/* HTML */}
        <div className="group rounded-2xl bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center transition transform hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]">
          <img src="/HTML.png" alt="HTML" className="h-14 mb-4" />
          <span className="text-lg font-medium">Html</span>
        </div>

        {/* CSS */}
        <div className="group rounded-2xl bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center transition transform hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]">
          <img src="/CSS.png" alt="CSS" className="h-14 mb-4" />
          <span className="text-lg font-medium">CSS</span>
        </div>

        {/* JavaScript */}
        <div className="group rounded-2xl bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center transition transform hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]">
          <img src="/Java-script.png" alt="JavaScript" className="h-14 mb-4" />
          <span className="text-lg font-medium">JavaScript</span>
        </div>

        {/* React */}
        <div className="group rounded-2xl bg-white/5 border border-white/10 p-10 flex flex-col items-center justify-center transition transform hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]">
          <img src="/React.png" alt="React" className="h-14 mb-4" />
          <span className="text-lg font-medium">React</span>
        </div>

      </div>
    </section>
  );
}
