
import React from 'react';
import { Link } from 'react-router-dom';
import { FEST_NAME, TAGLINE, FEST_DATES, PRIZE_POOL, INSTITUTION_NAME } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-ember pulse-ember pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1)_0%,_transparent_70%)]"></div>
        
        {/* Animated Background Spark Particles (CSS simulation) */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
           <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-orange-500 rounded-full blur-sm animate-bounce"></div>
           <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-red-600 rounded-full blur-sm animate-pulse"></div>
           <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-amber-400 rounded-full blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full text-center">
          <div className="inline-block mb-8">
            <span className="px-4 py-1.5 border border-red-600/30 bg-red-950/20 text-red-500 text-[10px] font-black uppercase tracking-[0.5em] block">
              {INSTITUTION_NAME}
            </span>
          </div>
          
          <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] tracking-tighter mb-8 font-heading italic">
            FUSION<span className="text-red-600 fire-glow-text">2K26</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto mb-16 tracking-wide italic font-mono-space">
            "{TAGLINE}"
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
            <div className="flex flex-col items-center">
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Event Window</span>
              <span className="text-white text-2xl font-black">{FEST_DATES}</span>
            </div>
            <div className="h-12 w-px bg-white/10 hidden md:block"></div>
            <div className="bg-red-600/10 p-8 border border-red-600/20 fire-glow">
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-2">Dominant Prize Pool</span>
              <span className="text-5xl font-black text-white tracking-tighter">{PRIZE_POOL}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/registration" className="px-12 py-5 bg-red-600 text-white text-xs font-black uppercase tracking-[0.3em] transition-custom hover:bg-orange-600 hover:fire-glow transform hover:-translate-y-1">
              Register Now
            </Link>
            <Link to="/events" className="px-12 py-5 border-2 border-white/20 text-white text-xs font-black uppercase tracking-[0.3em] transition-custom hover:bg-white/5 hover:border-white transform hover:-translate-y-1">
              Explore Tracks
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Tracks */}
      <section className="bg-[#050505] py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {/* Tech Track */}
          <div className="bg-black p-12 md:p-24 group relative overflow-hidden transition-custom hover:bg-slate-900/40">
            <div className="absolute top-0 right-0 p-12 opacity-5 transition-custom group-hover:scale-110 group-hover:opacity-10">
              <svg width="150" height="150" viewBox="0 0 100 100" fill="white">
                <path d="M10 30 L90 30 M10 50 L90 50 M10 70 L90 70" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-cyan-400 text-xs font-black uppercase tracking-widest block mb-4">Domain 01</span>
            <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Engineering</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-sm">
              The forge of logic. From 12-hour hackathons to competitive coding, prove your technical dominance.
            </p>
            <Link to="/events" className="inline-flex items-center gap-4 text-cyan-400 font-bold uppercase tracking-widest text-[10px] group/link">
              Access Core Tech <span className="transition-custom group-hover/link:translate-x-2">→</span>
            </Link>
          </div>

          {/* Cultural Track */}
          <div className="bg-black p-12 md:p-24 group relative overflow-hidden border-t md:border-t-0 md:border-l border-white/5 transition-custom hover:bg-red-950/10">
            <div className="absolute top-0 right-0 p-12 opacity-5 transition-custom group-hover:scale-110 group-hover:opacity-10">
              <svg width="150" height="150" viewBox="0 0 100 100" fill="red">
                <circle cx="50" cy="50" r="30" stroke="red" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="text-red-600 text-xs font-black uppercase tracking-widest block mb-4">Domain 02</span>
            <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Cultural</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-sm">
              The fire of expression. High-octane dance battles, fashion walks, and melodic showdowns.
            </p>
            <Link to="/events" className="inline-flex items-center gap-4 text-red-600 font-bold uppercase tracking-widest text-[10px] group/link">
              Unleash Talent <span className="transition-custom group-hover/link:translate-x-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Institutional Banner */}
      <section className="py-40 relative">
        <div className="absolute inset-0 bg-red-600 opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-3xl md:text-6xl font-black text-white leading-none tracking-tighter mb-12 uppercase italic">
            "Ignite the Innovation within"
          </p>
          <div className="w-24 h-2 bg-red-600 mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
