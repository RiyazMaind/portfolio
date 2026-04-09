"use client";

export default function Hero() {
  return (
    <section 
      id="hero"
      className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen text-center">
        {/* Greeting */}
        <p className="text-blue-400 font-semibold text-lg mb-4 animate-fade-in">
          Welcome to my portfolio
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Riyaz Maind
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
          Data science and analytics enthusiast turning raw data into actionable insights.
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl">
          I build analytic dashboards, data visualizations, and intelligent models using Python, SQL, and modern web tools.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
