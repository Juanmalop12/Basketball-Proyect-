// src/components/SearchBar.jsx
import React from 'react';

export default function SearchBar({ value, onChange, onClear, resultsCount }) {
  return (
    <div className="search-bar">
      <div className="search-bar__input">
        <span className="search-bar__icon">🔍</span>
        <input
          className="search-bar__field"
          type="text"
          placeholder="Buscar jugador por nombre..."
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        {value && (
          <button
            className="search-bar__clear"
            type="button"
            onClick={onClear}
            aria-label="Limpiar búsqueda"
          >
            ✕
          </button>
        )}
      </div>
      <div className="search-bar__results">Mostrando {resultsCount} resultados</div>
    </div>
  );
}
