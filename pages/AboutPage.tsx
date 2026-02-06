
import React from 'react';
import { FEST_NAME, TAGLINE, INSTITUTION_NAME } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pb-32">
       <div className="bg-[#050505] py-40 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-ember opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-[10rem] font-black text-white mb-8 uppercase tracking-tighter font-heading italic">VISION</h1>
          <p className="text-red-600 text-lg md:text-2xl font-black uppercase tracking-[0.5em] italic">The Core Mission</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-10">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic border-l-4 border-red-600 pl-8">The Convergence</h2>
            <div className="space-y-8 leading-relaxed text-lg font-light">
              <p className="text-slate-100">
                <span className="font-black text-white">{FEST_NAME}</span> stands as the premier Techno-Cultural symposium of {INSTITUTION_NAME}. 
                It is an arena designed where the precision of engineering meets the boundless fire of creative culture.
              </p>
              <p className="italic bg-white/10 p-8 border-l-2 border-red-600 font-mono-space text-white shadow-xl">
                "{TAGLINE}"
              </p>
              <p className="text-slate-200">
                This flagship event is engineered to prepare students not just as technical operatives, 
                but as holistic visionaries rooted in tradition while commanding the engines of future innovation.
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-10 group-hover:opacity-20 transition-custom"></div>
            <div className="relative z-10 bg-white/10 p-12 md:p-16 border border-white/20 backdrop-blur-xl shadow-2xl">
              <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-widest flex items-center gap-4">
                <span className="w-8 h-px bg-red-600"></span> Institutional Headquarters
              </h2>
              <div className="space-y-6 text-slate-100 text-base leading-relaxed">
                <p className="font-black text-white tracking-tight text-xl uppercase italic">
                  Aditya College of Engineering, Madanapalle
                </p>
                <p>
                  An Autonomous stronghold of academic excellence. With cutting-edge infrastructure and a 
                  relentless focus on student-led innovation, the institution serves as a critical 
                  hub for engineering intelligence in the region.
                </p>
                
                <div className="pt-12 grid grid-cols-2 gap-12 border-t border-white/20">
                  <div className="space-y-2">
                    <p className="text-5xl font-black text-white tracking-tighter italic">02</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-red-600">Operational Days</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-5xl font-black text-white tracking-tighter italic">10+</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-red-600">Tactical Competitions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
