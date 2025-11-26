import React from "react";

export function SearchBar({ value, onChange, onClear, resultsCount }) {
  return (
    <div className="mt-10 w-full">

      {/* Título encima de la barra */}
      <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
        Buscar jugadores
      </p>

      {/* Contenedor del input */}
      <div className="relative w-full">

        {/* Ícono dentro de un círculo amarillo */}
        <div
          className="
            absolute left-3 top-1/2 -translate-y-1/2
            w-10 h-10
            bg-yellow-400
            rounded-full
            flex items-center justify-center
            shadow-[0_0_15px_#facc15aa]
          "
        >
          <span className="text-gray-900 text-xl">🔍</span>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Escribe un nombre o equipo..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            bg-[#0d1021]/70
            border border-yellow-400/40
            rounded-2xl
            pl-16 pr-28 py-3
            text-sm text-white
            placeholder-white/40
            outline-none
            focus:border-yellow-400
            focus:ring-2 focus:ring-yellow-300/40
            transition-all
          "
        />

        {/* Botón limpiar */}
        {value && (
          <button
            onClick={onClear}
            className="
              absolute right-3 top-1/2 -translate-y-1/2
              px-3 py-1
              bg-red-500 hover:bg-red-600
              text-white text-xs
              rounded-lg
              shadow-md
            "
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Contador */}
      <p className="text-xs text-white/60 mt-2">
        Mostrando{" "}
        <span className="text-yellow-400 font-semibold">{resultsCount}</span>{" "}
        resultados
      </p>
    </div>
  );
}

