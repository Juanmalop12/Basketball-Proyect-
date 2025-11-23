// src/components/SearchHistory.jsx
import React from 'react';

export default function SearchHistory({ history, onSelectSearch, onClearHistory }) {
  if (!history || history.length === 0) return null;

  return (
    <div className="history">
      <div className="history__header">
        <span className="history__title">Historial</span>
        <button className="history__clear" onClick={onClearHistory}>Limpiar</button>
      </div>
      <div className="history__chips">
        {history.map(item => (
          <button key={item} className="history__chip" onClick={() => onSelectSearch(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
