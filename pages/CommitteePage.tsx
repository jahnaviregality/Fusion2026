
import React from 'react';
import { TECH_COMMITTEE, CULTURAL_COMMITTEE, TECHNICAL_EVENTS, CULTURAL_EVENTS } from '../constants';

const CommitteePage: React.FC = () => {
  return (
    <div className="pb-32 bg-slate-50">
       <div className="bg-slate-950 py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter font-heading">Core Board</h1>
          <p className="text-slate-400 text-xl font-medium tracking-wide">
            Institutional Leadership and Student Committees.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Core Committees */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 mb-32 border border-slate-200 academic-shadow">
          <div className="bg-white p-12">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-600 mb-10 underline underline-offset-8">Technical Convener Panel</h2>
            <div className="space-y-10">
              {TECH_COMMITTEE.map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{m.role}</span>
                  <span className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-none mb-1">{m.name}</span>
                  <span className="text-xs text-slate-500 italic">{m.designation || m.phone}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-12">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-maroon-700 mb-10 underline underline-offset-8">Cultural Convener Panel</h2>
            <div className="space-y-10">
              {CULTURAL_COMMITTEE.map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{m.role}</span>
                  <span className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-none mb-1">{m.name}</span>
                  <span className="text-xs text-slate-500 italic">{m.designation || m.phone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Leads */}
        <div>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter shrink-0">Student Leadership</h2>
            <div className="h-px bg-slate-200 w-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...TECHNICAL_EVENTS, ...CULTURAL_EVENTS].map(event => (
              <div key={event.id} className="bg-white p-8 border border-slate-200 academic-shadow">
                <span className={`text-[10px] font-black uppercase tracking-widest block mb-4 ${
                  event.type === 'technical' ? 'text-cyan-600' : 'text-maroon-700'
                }`}>
                  {event.title}
                </span>
                <div className="space-y-6">
                  {event.studentCoordinators.map((s, i) => (
                    <div key={i}>
                      <p className="font-black text-slate-900 uppercase text-sm mb-1 tracking-tight">{s.name}</p>
                      <a href={`tel:${s.phone.replace(/\s/g, '')}`} className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-custom">
                        {s.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;
