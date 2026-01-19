export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16"></div>

        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src="icon.png"
                alt="Logo"
                className="h-9 w-9 sm:h-8 sm:w-8 h-8"
              />
            </div>

            <span className="text-lg sm:text-xl md:text-2xl font-bold">
              <span className="text-blue-400">YONATAN.</span>
            </span>
          </div>
          {/* nav links */}
          <div className="flex items-center space-x-6 lg:space-x-8"></div>
          <a
            href="#home"
            className="text-gray-300 hover:text-white text:sm lg:text-base"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white text:sm lg:text-base"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white text:sm lg:text-base"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-white text:sm lg:text-base"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white text:sm lg:text-base"
          >
            Contact
          </a>
        </div>

        <button>
            
        </button>
      </div>
    </nav>
  );
}
