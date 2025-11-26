import React from "react";

export function SearchHistory({ history, onSelectSearch, onClearHistory }) {
  if (!history || history.length === 0) return null;

  return (
    <div className="mt-6">

      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm text-gray-300">Historial de búsqueda</h3>

        <button
          onClick={onClearHistory}
          className="text-xs text-red-300 hover:text-red-200"
        >
          Limpiar historial
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {history.map((item) => (
          <button
            key={item}
            onClick={() => onSelectSearch(item)}
            className="search-chip"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
