import React from "react";

export function Header() {
  return (

    <header className="w-full flex flex-col items-center mt-10 mb-6 ">
      <div className="text-xs tracking-[0.2em] uppercase text-gray-300 mb-3">
        <span className="px-3 py-1 rounded-full font-semibold text-[#ffb347] glow-orange">
          Top Club
        </span>
        <span className="font-semibold text-[#3bd9ff] glow-blue">/ Basketball</span>
      </div>

      <h1 className="text-4xl font-extrabold tracking-wide text-white mb-1">
        Central de Rendimiento
      </h1>

      <p className="text-sm text-gray-300 mb-6">
        Administra convocatorias, analiza métricas clave y mantén la intensidad
        de juego en cada partido.
      </p>

      {/* Marcador grande */}
      <div className="w-full max-w-3xl bg-[#120b2c]/90 rounded-2xl shadow-2xl px-8 py-5 flex items-center justify-between border border-white/5">
        {/* LOCAL */}
        <div className="flex items-center gap-4">
          <div className="bg-black/40 px-4 py-3 rounded-xl text-left">
            <div className="text-xs text-gray-300 mb-1">TCB</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-gray-400">
              Top Club Flames
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-300 mb-1">LOCAL</span>
            <span className="text-4xl font-extrabold text-yellow-300 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]">
              98
            </span>
          </div>
        </div>

        {/* VS */}
        <div className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center font-bold shadow-lg">
            VS
          </span>
        </div>

        {/* VISITANTE */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-300 mb-1">VISITANTE</span>
            <span className="text-4xl font-extrabold text-blue-300 drop-shadow-[0_0_12px_rgba(96,165,250,0.7)]">
              92
            </span>
          </div>

          <div className="bg-black/40 px-4 py-3 rounded-xl text-right">
            <div className="text-xs text-gray-300 mb-1">RIV</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-gray-400">
              Rival All-Stars
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
