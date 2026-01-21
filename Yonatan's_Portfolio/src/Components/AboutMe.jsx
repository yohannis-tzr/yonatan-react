export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">
        About Me
      </h2>

      <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-200 leading-relaxed">
        I am a web developer who creates modern, clean and responsive websites.
        I focus on creating intuitive user interfaces and building reliable,
        efficient code that delivers a seamless user experience.
      </p>
    </section>
  );
}
