import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-fluid-aurora z-0 pointer-events-none"></div>

      {/* Floating Particles Generator */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`, // 1px to 4px
              height: `${Math.random() * 3 + 1}px`,
              '--duration': `${Math.random() * 10 + 10}s`, // 10s to 20s
              '--opacity': Math.random() * 0.5 + 0.1,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Radial Gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_90%)] opacity-40"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center animate-fade-in-up">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-6 sm:mb-8 drop-shadow-2xl">
          Recall anything in <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ossium-accent to-green-400 inline-block transform hover:scale-[1.02] transition-transform duration-300 cursor-default">
            Seconds
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-ossium-muted max-w-2xl mb-8 sm:mb-12 leading-relaxed font-light px-2 sm:px-0">
          The coding cheat-sheet and documentation platform designed for developers who build fast.
          Stop context switching. <span className="text-white font-medium">Start shipping.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-ossium-accent text-ossium-darker font-bold rounded-lg hover:bg-ossium-accent-hover transform hover:-translate-y-1 transition-all shadow-[0_4px_20px_rgba(202,255,51,0.3)] hover:shadow-[0_6px_25px_rgba(202,255,51,0.4)] text-base text-center block">
            Start Coding Faster
          </Link>
          <Link to="/dashboard" state={{ tab: 'docs' }} className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/20 transform hover:-translate-y-1 transition-all text-base backdrop-blur-md text-center block">
            View Documentation
          </Link>
        </div>

        {/* Social Proof / Tech Stack Icons */}
        <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-white/5 w-full max-w-4xl">
          <p className="text-[10px] sm:text-xs text-ossium-muted mb-4 sm:mb-6 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold">Powering developers working with</p>
          <div className="relative w-full overflow-hidden mask-linear-fade">
            <div className="flex gap-8 sm:gap-16 items-center whitespace-nowrap animate-scroll w-max">
              {/* Duplicate the list to create seamless loop */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 sm:gap-16 items-center">
                  {['JavaScript', 'TypeScript', 'React', 'Python', 'Go', 'Rust', 'Java', 'C++', 'Swift', 'Kotlin', 'PHP', 'Ruby', 'Dart', 'Solidity', 'HTML5', 'CSS3', 'Docker', 'Kubernetes', 'AWS', 'TensorFlow'].map((tech) => (
                    <span key={`${tech}-${i}`} className="font-bold text-white text-sm sm:text-lg md:text-xl opacity-40 hover:opacity-100 transition-opacity cursor-default select-none">
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
