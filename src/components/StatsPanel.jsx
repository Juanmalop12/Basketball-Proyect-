import React from "react";

export function StatsPanel({ stats }) {
  return (
    <div className="
      mt-10 
      grid grid-cols-1 md:grid-cols-4 
      gap-5 p-4
      rounded-2xl
    ">
      <div className="bg-yellow-400 text-gray-900 rounded-2xl p-5 shadow-lg">
        <p className="text-xs uppercase opacity-60">Jugadores en tabla</p>
        <p className="text-4xl font-extrabold">{stats.total}</p>
        <p className="text-xs bg-black/20 mt-2 px-2 py-1 rounded-full inline-block">
          Favoritos: {stats.favorites ?? 0}
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg">
        <p className="text-xs uppercase opacity-60">Promedio de puntos</p>
        <p className="text-3xl font-bold text-blue-400">{stats.avgPoints}</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg">
        <p className="text-xs uppercase opacity-60">Promedio de rebotes</p>
        <p className="text-3xl font-bold text-green-400">{stats.avgRebounds}</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
        <p className="text-xs uppercase opacity-60">Líderes</p>

        <div className="mt-3">
          <p className="text-yellow-400 text-xs uppercase">Anotador</p>
          <p className="font-semibold">{stats.topScorer?.name} — {stats.topScorer?.points} pts</p>
        </div>

        <div className="mt-2">
          <p className="text-yellow-400 text-xs uppercase">Eficiencia</p>
          <p className="font-semibold">{stats.topScorer?.efficiency}</p>
        </div>
      </div>
    </div>
  );
}
