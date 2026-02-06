
import React from 'react';
import { SCHEDULE_DAY_1, SCHEDULE_DAY_2 } from '../constants';

const SchedulePage: React.FC = () => {
  return (
    <div className="pb-40 bg-black">
      <div className="bg-[#050505] py-40 px-6 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-600 text-xs font-black uppercase tracking-[0.5em] block mb-4 italic">Execution Intel</span>
          <h1 className="text-7xl md:text-[10rem] font-black text-white mb-8 uppercase tracking-tighter font-heading italic">TIMELINE</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Day 1 */}
          <div className="relative">
            <div className="flex items-center justify-between mb-16 pb-6 border-b-4 border-white/10">
              <h2 className="text-6xl font-black text-white uppercase tracking-tighter italic">ALPHA</h2>
              <p className="text-red-600 font-black uppercase tracking-widest text-sm">06 MAR '26</p>
            </div>
            
            <div className="space-y-6">
              {SCHEDULE_DAY_1.map((item, i) => (
                <div key={i} className="group relative bg-white/5 p-8 flex items-center justify-between border-l border-white/5 transition-custom hover:border-red-600 hover:bg-red-950/5">
                  <div className="flex items-center gap-8">
                    <span className="text-[10px] font-black text-slate-600 font-mono-space tracking-widest uppercase">Phase 0{i+1}</span>
                    <div>
                      <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">{item.event}</h3>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{item.venue || 'Sector TBA'}</p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest">
                    {item.time || 'TBD'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div className="relative">
            <div className="flex items-center justify-between mb-16 pb-6 border-b-4 border-red-600">
              <h2 className="text-6xl font-black text-white uppercase tracking-tighter italic">OMEGA</h2>
              <p className="text-red-600 font-black uppercase tracking-widest text-sm">07 MAR '26</p>
            </div>
            
            <div className="space-y-6">
              {SCHEDULE_DAY_2.map((item, i) => (
                <div key={i} className="group relative bg-white/5 p-8 flex items-center justify-between border-l border-white/5 transition-custom hover:border-cyan-500 hover:bg-cyan-950/5">
                  <div className="flex items-center gap-8">
                    <span className="text-[10px] font-black text-slate-600 font-mono-space tracking-widest uppercase">Phase 0{i+1}</span>
                    <div>
                      <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">{item.event}</h3>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{item.venue || 'Sector TBA'}</p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest fire-glow">
                    {item.time || 'TBD'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-40 p-16 border-4 border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-5 -mr-32 -mt-32 rounded-full blur-3xl"></div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 mb-8 italic">Field Directives</h4>
          <p className="text-2xl md:text-3xl text-slate-400 font-light leading-snug italic max-w-4xl">
            "Participants are ordered to report to their assigned sectors 45 minutes prior to commencement. 
            All logistics are strictly synchronized."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
