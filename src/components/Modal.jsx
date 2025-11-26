import React from "react";

export function Modal({ isOpen, onClose, player }) {
  if (!isOpen || !player) return null;

  const handleOverlayClick = (e) => {
    if (e.target.dataset.overlay) {
      onClose();
    }
  };

  return (
    <div
      data-overlay="true"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="w-full max-w-3xl bg-slate-950/95 rounded-2xl border border-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Barra superior */}
        <div className="flex items-center justify-between bg-slate-800/90 px-6 py-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-slate-100">
              {player.name}
            </h2>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-yellow-400 text-slate-900">
              {player.position}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Info principal */}
        <div className="px-6 pt-5 pb-2 text-sm text-slate-200">
          <div className="flex flex-wrap gap-10 mb-6">
            <div className="space-y-1">
              <p className="text-xs text-slate-400">Equipo</p>
              <p className="font-medium">{player.team}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-400">Edad</p>
              <p>{player.age} años</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-400">Altura</p>
              <p>{player.height} </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-400">Peso</p>
              <p>{player.weight} </p>
            </div>
          </div>

          {/* Tarjetas estadísticas (como en el video) */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-yellow-400 text-slate-900 rounded-xl py-4 text-center shadow-lg">
              <p className="text-xs font-semibold tracking-wide">PUNTOS</p>
              <p className="mt-2 text-2xl font-extrabold">{player.points}</p>
            </div>

            <div className="bg-slate-800 rounded-xl py-4 text-center shadow-lg border border-slate-700">
              <p className="text-xs font-semibold tracking-wide text-slate-300">
                REBOTES
              </p>
              <p className="mt-2 text-2xl font-extrabold">
                {player.rebounds}
              </p>
            </div>

            <div className="bg-white rounded-xl py-4 text-center shadow-lg">
              <p className="text-xs font-semibold tracking-wide text-slate-500">
                EFICIENCIA
              </p>
              <p className="mt-2 text-2xl font-extrabold text-amber-500">
                {player.efficiency}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end px-6 pb-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-slate-700 hover:bg-slate-600 text-sm text-slate-100"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
