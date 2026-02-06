
import React from 'react';
import { Link } from 'react-router-dom';
import { INSTITUTION_NAME, FEST_NAME, PRIZE_POOL, INSTITUTION_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-500 pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-6">
            <h3 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter italic">
              <span className="text-red-600">FUSION</span>2K26
            </h3>
            <p className="text-xl leading-relaxed mb-12 max-w-lg text-slate-400">
              Madanapalle's premier Techno-Cultural convergence. 
              The ultimate testing ground for engineering innovation and creative fire.
            </p>
            <div className="inline-flex flex-col p-10 border border-white/10 bg-white/5 relative group overflow-hidden">
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-custom"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 mb-4">Cumulative Compensation</span>
              <span className="text-5xl font-black text-white tracking-tighter fire-glow-text">{PRIZE_POOL}</span>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 opacity-50">Intelligence</h4>
            <ul className="space-y-5 font-black text-xs uppercase tracking-[0.2em]">
              <li><Link to="/events" className="hover:text-red-600 transition-custom">Competitions</Link></li>
              <li><Link to="/schedule" className="hover:text-red-600 transition-custom">Timelines</Link></li>
              <li><Link to="/registration" className="hover:text-red-600 transition-custom">Enrolment</Link></li>
              <li><Link to="/committees" className="hover:text-red-600 transition-custom">Authority</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 opacity-50">Headquarters</h4>
            <p className="text-slate-300 font-black text-sm mb-4 uppercase tracking-tight">{INSTITUTION_NAME}</p>
            <p className="text-xs leading-relaxed text-slate-600 font-medium">
              {INSTITUTION_ADDRESS}
            </p>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-slate-700">
              © 2026 {INSTITUTION_NAME}
            </p>
            <p className="text-[9px] uppercase tracking-[0.5em] font-black text-red-900">
              Engineering Excellence • Madanapalle
            </p>
          </div>
          
          <div className="flex gap-10 opacity-40 hover:opacity-100 transition-custom">
             <div className="w-6 h-px bg-white/20"></div>
             <div className="w-6 h-px bg-white/20"></div>
             <div className="w-6 h-px bg-white/20"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
