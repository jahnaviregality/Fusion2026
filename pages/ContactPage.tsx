
import React from 'react';
import { INSTITUTION_NAME, INSTITUTION_ADDRESS } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen pb-40">
       <div className="bg-[#050505] py-40 px-6 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-[10rem] font-black text-white mb-8 uppercase tracking-tighter font-heading italic">CONTACT</h1>
          <p className="text-red-600 text-lg md:text-2xl font-black uppercase tracking-[0.5em] italic">Establish Communication</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Operational Base</h2>
              <p className="text-xl text-slate-400 font-light leading-relaxed max-w-md">
                Direct inquiries to our sector leads or visit the institutional headquarters.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="bg-white/5 border border-white/10 p-5 h-16 w-16 flex items-center justify-center shrink-0 transition-custom group-hover:border-red-600">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-slate-500 mb-3">Geographic Coordinates</h4>
                  <p className="text-white font-black text-lg leading-relaxed uppercase tracking-tight">
                    {INSTITUTION_NAME}
                  </p>
                  <p className="text-slate-500 text-sm mt-1">{INSTITUTION_ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="bg-white/5 border border-white/10 p-5 h-16 w-16 flex items-center justify-center shrink-0 transition-custom group-hover:border-cyan-500">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1.097a17.51 17.51 0 01-12.912-12.912V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-slate-500 mb-3">Sector Leads</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 border border-white/5">
                      <p className="text-white font-black text-sm uppercase tracking-widest">Dr. R. Md. Shafi</p>
                      <p className="text-cyan-400 text-xs font-mono-space font-bold mt-1">Technical: 99516 22786</p>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/5">
                      <p className="text-white font-black text-sm uppercase tracking-widest">Dr. P. Saleema</p>
                      <p className="text-red-600 text-xs font-mono-space font-bold mt-1">Cultural: 99120 99892</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[600px] w-full bg-white/5 border-2 border-white/10 relative overflow-hidden grayscale contrast-125 opacity-70 hover:opacity-100 hover:grayscale-0 transition-custom shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.8920197463665!2d78.47353457589635!3d13.542211902266847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb267866579549f%3A0xc3f8f1762c57802b!2sAditya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1714800000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Tactical Location of ACE"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
