
import React from 'react';
import { TECHNICAL_EVENTS, CULTURAL_EVENTS, INSTITUTION_NAME } from '../constants';

const RegistrationPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pb-40">
       <div className="bg-[#050505] py-40 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-ember opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-[10rem] font-black text-white mb-8 uppercase tracking-tighter font-heading italic">ENROLMENT</h1>
          <p className="text-red-600 text-lg md:text-2xl font-black uppercase tracking-[0.5em] italic">Deploy Your Expertise</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic border-l-4 border-cyan-500 pl-6">Technical Operations</h2>
            <div className="space-y-4">
              {TECHNICAL_EVENTS.map(event => (
                <div key={event.id} className="flex justify-between items-center p-6 bg-white/10 border border-white/5 transition-custom hover:bg-white/20 group backdrop-blur-md">
                  <span className="font-black text-slate-200 uppercase tracking-tight group-hover:text-white">{event.title}</span>
                  <span className="font-black text-cyan-400 font-mono-space tracking-widest text-sm">{event.fee}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic border-l-4 border-red-600 pl-6">Cultural Operatives</h2>
            <div className="space-y-4">
              {CULTURAL_EVENTS.map(event => (
                <div key={event.id} className="flex justify-between items-center p-6 bg-white/10 border border-white/5 transition-custom hover:bg-white/20 group backdrop-blur-md">
                  <span className="font-black text-slate-200 uppercase tracking-tight group-hover:text-white">{event.title}</span>
                  <span className="font-black text-red-600 font-mono-space tracking-widest text-sm">{event.fee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Official Registration Action */}
        <div className="relative group max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-15 group-hover:opacity-25 transition-custom"></div>
          <div className="relative z-10 bg-[#0a0a0a] border-2 border-red-600 p-12 md:p-20 text-center shadow-2xl backdrop-blur-xl">
            <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter italic">Official Registration Portal</h3>
            <p className="text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
              Registration for FUSION 2K26 is managed exclusively via Google Forms. 
              Please ensure your institutional credentials are ready for verification.
            </p>
            
            <a 
              href="https://docs.google.com/forms/d/e/FUSION_2K26_REGISTRATION_PLACEHOLDER/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-16 py-6 bg-red-600 text-white text-sm font-black uppercase tracking-[0.4em] transition-custom hover:bg-orange-600 hover:fire-glow transform hover:-translate-y-2 mb-8 shadow-xl"
            >
              Access Enrollment Form
            </a>
            
            <div className="pt-10 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500 mb-2">Registration Status</p>
              <div className="inline-flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-xl font-black text-white tracking-widest uppercase">Live & Synchronized</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 space-y-8 text-sm text-slate-400 border-t border-white/10 pt-16 max-w-4xl mx-auto italic">
          <p className="flex gap-4"><span className="text-red-600 font-black tracking-widest shrink-0 uppercase">Protocol Alpha:</span> Enrollment fees are non-refundable upon official confirmation.</p>
          <p className="flex gap-4"><span className="text-red-600 font-black tracking-widest shrink-0 uppercase">Protocol Beta:</span> Participants must ensure non-conflicting schedules across multiple sectors.</p>
          <p className="flex gap-4"><span className="text-red-600 font-black tracking-widest shrink-0 uppercase">Protocol Gamma:</span> Physical College ID verification is mandatory at the Sector Desk.</p>
          <p className="flex gap-4"><span className="text-red-600 font-black tracking-widest shrink-0 uppercase">Protocol Delta:</span> Standard eligibility applies to all B.Tech candidates.</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
