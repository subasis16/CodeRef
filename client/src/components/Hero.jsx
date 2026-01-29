import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>

      {/* Radial Gradient overlay for spotlight effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ossium-accent/5 via-transparent to-transparent opacity-50"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center animate-fade-in-up">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-white/10 text-ossium-accent text-xs font-semibold uppercase tracking-wider shadow-lg backdrop-blur-sm hover:border-ossium-accent/30 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ossium-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ossium-accent"></span>
          </span>
          v1.0 Public Beta is Live
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-8 drop-shadow-2xl">
          Recall anything in <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ossium-accent to-green-400 inline-block transform hover:scale-[1.02] transition-transform duration-300 cursor-default">
            Seconds
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-ossium-muted max-w-2xl mb-12 leading-relaxed font-light">
          The all-in-one coding cheat-sheet and documentation platform designed for developers who build fast.
          Stop context switching. <span className="text-white font-medium">Start shipping.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 bg-ossium-accent text-ossium-darker font-bold rounded-lg hover:bg-ossium-accent-hover transform hover:-translate-y-1 transition-all shadow-[0_4px_20px_rgba(202,255,51,0.3)] hover:shadow-[0_6px_25px_rgba(202,255,51,0.4)] text-base">
            Start Coding Faster
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/20 transform hover:-translate-y-1 transition-all text-base backdrop-blur-md">
            View Documentation
          </button>
        </div>

        {/* Social Proof / Tech Stack Icons */}
        <div className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl">
          <p className="text-xs text-ossium-muted mb-6 uppercase tracking-[0.2em] font-semibold">Powering developers working with</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {['JavaScript', 'TypeScript', 'React', 'Python', 'Go', 'Rust'].map((tech) => (
              <span key={tech} className="font-bold text-white text-lg md:text-xl hover:text-white transition-colors cursor-default">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
