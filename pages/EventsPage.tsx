
import React, { useState } from 'react';
import { TECHNICAL_EVENTS, CULTURAL_EVENTS, PRIZE_POOL } from '../constants';
import { EventDetails } from '../types';

const EventCard: React.FC<{ event: EventDetails }> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isTech = event.type === 'technical';

  // Category-specific icons
  const CategoryIcon = () => {
    if (isTech) {
      return (
        <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    }
    return (
      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    );
  };

  return (
    <div className={`group relative transition-custom border-l-4 overflow-hidden bg-white/5 border-white/10 hover:scale-[1.03] ${
      isTech 
        ? 'hover:border-cyan-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]' 
        : 'hover:border-red-600 hover:shadow-[0_0_50px_rgba(220,38,38,0.3)]'
    }`}>
      {/* Event Image Banner - Bright and eye-catchy */}
      {event.imageUrl && (
        <div className="relative h-72 w-full overflow-hidden">
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover transition-custom group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          {/* Subtle accent glow overlay */}
          <div className={`absolute inset-0 opacity-20 transition-custom group-hover:opacity-40 ${isTech ? 'bg-cyan-900/30' : 'bg-red-900/30'}`}></div>
        </div>
      )}

      <div className={`relative z-10 p-8 md:p-12 ${event.imageUrl ? '-mt-20' : ''}`}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div className="space-y-4">
            <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 inline-block backdrop-blur-md border ${
              isTech ? 'bg-cyan-900/40 text-cyan-400 border-cyan-500/20' : 'bg-red-900/40 text-red-500 border-red-600/20'
            }`}>
              {event.type}
            </span>
            <div className="flex items-center gap-4">
              <CategoryIcon />
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter font-heading italic transition-custom group-hover:fire-glow-text">
                {event.title}
              </h3>
            </div>
            <p className="text-slate-200 font-medium italic text-sm">"{event.tagline}"</p>
          </div>
          <div className="bg-black/80 backdrop-blur-xl p-4 text-center min-w-[140px] border border-white/10 shadow-2xl">
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Operational Day</span>
             <span className="text-white font-black text-xl">{event.day.split('.')[0]} March 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-y border-white/10 mb-10 bg-black/40 backdrop-blur-md px-6 shadow-inner">
          <div className="space-y-1">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Enrollment Fee</p>
            <p className="font-black text-white text-lg">{event.fee}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Squad/Unit</p>
            <p className="font-black text-white text-lg">{event.teamSize}</p>
          </div>
          <div className="space-y-1">
             <p className={`text-[10px] font-black uppercase tracking-widest ${isTech ? 'text-cyan-400' : 'text-red-500'}`}>Reward Pool</p>
             <p className="font-black text-2xl text-white fire-glow-text">{event.prizes.split(',')[0]}</p>
          </div>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full py-5 text-[10px] font-black uppercase tracking-[0.4em] transition-custom border backdrop-blur-sm group-hover:fire-glow ${
            isTech ? 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black' : 'border-red-600/30 text-red-600 hover:bg-red-600 hover:text-white'
          }`}
        >
          {isExpanded ? 'Collapse Mission Briefing' : 'Engage Full Tactical Brief'}
        </button>

        {isExpanded && (
          <div className="mt-16 space-y-16 animate-fadeIn pt-10 border-t border-white/10">
            <section>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-white/20"></span> Mission Statement
              </h4>
              <p className="text-slate-200 leading-relaxed text-lg font-light max-w-4xl">{event.description}</p>
            </section>

            <div className="grid md:grid-cols-2 gap-16">
              <section className="bg-white/[0.03] p-8 border border-white/5">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-600 mb-8 underline decoration-2 underline-offset-8">Engagement Rules</h4>
                <ul className="space-y-6">
                  {event.rules.map((rule, i) => (
                    <li key={i} className="flex gap-6 text-sm text-slate-300 leading-relaxed">
                      <span className="font-black text-red-800 shrink-0 select-none">0{i+1}</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="bg-white/[0.03] p-8 border border-white/5">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500 mb-8 underline decoration-2 underline-offset-8">Victory Metrics</h4>
                <ul className="space-y-6">
                  {event.criteria.map((c, i) => (
                    <li key={i} className="flex gap-6 text-sm text-slate-300 leading-relaxed">
                      <span className="font-black text-cyan-800 shrink-0 select-none">>></span>
                      {c}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className={`p-10 border relative overflow-hidden ${isTech ? 'bg-cyan-950/20 border-cyan-900/30' : 'bg-red-950/20 border-red-900/30'}`}>
               <div className={`absolute top-0 right-0 w-48 h-48 opacity-10 blur-3xl ${isTech ? 'bg-cyan-400' : 'bg-red-600'}`}></div>
               <h4 className={`text-xs font-black uppercase tracking-[0.3em] mb-4 ${isTech ? 'text-cyan-400' : 'text-red-500'}`}>Full Strategic Reserve</h4>
               <p className="text-3xl font-black text-white tracking-tighter italic">{event.prizes}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Commanding Authority</h4>
                <div className="flex flex-wrap gap-3">
                  {event.facultyInCharge.map((f, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 text-[10px] font-black text-white uppercase tracking-widest border border-white/5">{f}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Sector Leads</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {event.studentCoordinators.map((s, i) => (
                    <div key={i} className="group/coord">
                      <p className="font-black text-white text-xs uppercase mb-1 tracking-widest transition-custom group-hover/coord:text-red-500">{s.name}</p>
                      <a href={`tel:${s.phone}`} className={`text-[10px] font-bold tracking-widest ${isTech ? 'text-cyan-500' : 'text-red-600'}`}>
                        {s.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tech' | 'cultural'>('tech');

  return (
    <div className="pb-40 bg-black min-h-screen">
      {/* Dynamic Header Section */}
      <div className="bg-[#050505] py-40 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-ember opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.2),_transparent)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-7xl md:text-[11rem] font-black text-white mb-8 uppercase tracking-tighter font-heading italic animate-pulse">ARENA</h1>
          <p className="text-red-600 text-lg md:text-2xl font-black uppercase tracking-[0.5em] italic">
            Sector Briefings
          </p>
          
          <div className="mt-16 inline-block bg-red-950/20 border border-red-900/30 p-12 backdrop-blur-md shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-custom"></div>
            <span className="text-slate-400 uppercase text-[10px] font-black tracking-[0.6em] block mb-3">Total Competitive Reserve</span>
            <span className="text-7xl font-black text-white tracking-tighter fire-glow-text">{PRIZE_POOL}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="flex justify-center mb-24">
          <div className="inline-flex p-2 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-20 py-6 text-[11px] font-black uppercase tracking-[0.4em] transition-custom relative overflow-hidden ${
                activeTab === 'tech' ? 'bg-white text-black fire-glow shadow-white/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              Technology
              {activeTab === 'tech' && <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-500"></span>}
            </button>
            <button
              onClick={() => setActiveTab('cultural')}
              className={`px-20 py-6 text-[11px] font-black uppercase tracking-[0.4em] transition-custom relative overflow-hidden ${
                activeTab === 'cultural' ? 'bg-red-600 text-white fire-glow shadow-red-600/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              Cultural
              {activeTab === 'cultural' && <span className="absolute bottom-0 left-0 w-full h-1 bg-white"></span>}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16 max-w-5xl mx-auto">
          {activeTab === 'tech' ? (
            TECHNICAL_EVENTS.map(event => <EventCard key={event.id} event={event} />)
          ) : (
            CULTURAL_EVENTS.map(event => <EventCard key={event.id} event={event} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
