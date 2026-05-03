'use client';

import { useState, useEffect } from 'react';

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Munculkan popup setelah delay 1.5 detik
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-4 lg:bottom-10 lg:left-10 z-50 max-w-[300px] md:max-w-[340px]">
      <div className="bg-primary text-slate-900 p-4 md:p-5 rounded-2xl relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-white/30 overflow-hidden transform transition-all animate-[bounce_1s_ease-in-out]">
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/20 rounded-full pointer-events-none blur-sm"></div>
        <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-black/5 rounded-full pointer-events-none blur-sm"></div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-slate-900/60 hover:text-slate-900 hover:bg-black/10 rounded-full w-7 h-7 flex items-center justify-center transition-colors z-10"
          aria-label="Tutup info"
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>

        <div className="flex gap-3 relative z-10">
          <div className="bg-white/30 p-2 rounded-xl h-fit shadow-inner">
            <span className="material-symbols-outlined text-2xl">campaign</span>
          </div>
          <div className="pr-3">
            <h4 className="font-bold text-base mb-1.5 leading-none">Info Spesial!</h4>
            <p className="text-sm font-medium leading-relaxed opacity-90 text-slate-800">
              Harga lebih murah daripada di aplikasi ShopeeFood & GoFood. <br /><br />
              <span className="bg-white/40 px-1 py-0.5 rounded text-black font-bold shadow-sm">Gratis ongkir</span> minimal pembelian 2 item untuk area Barongan dan sekitarnya!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
