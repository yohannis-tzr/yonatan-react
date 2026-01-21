export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center pt-20 bg-black text-white"
    >
      <h1 className="text-5xl md:text-7xl font-bold">
        Hello, I'm{" "}
        <span className="text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">
          Yonatan
        </span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-300">
        A Passionate Web Developer
      </p>

      <a href="#projects"><button className="mt-10 px-8 py-4 text-lg font-semibold rounded-full bg-blue-500 hover:bg-blue-600 transition shadow-[0_0_20px_rgba(59,130,246,0.6)] cursor-pointer">
        View My Work
      </button>
      </a>
    </section>
  );
}
