// src/components/StatsPanel.jsx
import React from 'react';

export default function StatsPanel({ stats, darkMode }) {
  return (
    <aside className={`stats ${darkMode ? 'stats--dark' : 'stats--light'}`}>
      <div className="stats__item">
        <div className="stats__label">Jugadores</div>
        <div className="stats__value">{stats.total}</div>
      </div>
      <div className="stats__item">
        <div className="stats__label">Prom. PTS</div>
        <div className="stats__value">{stats.avgPoints.toFixed(1)}</div>
      </div>
      <div className="stats__item">
        <div className="stats__label">Prom. REB</div>
        <div className="stats__value">{stats.avgRebounds.toFixed(1)}</div>
      </div>
      <div className="stats__item stats__top">
        <div className="stats__label">Top Anotador</div>
        <div className="stats__value">{stats.topScorer ? stats.topScorer.name : '-'}</div>
        {stats.topScorer && <div className="stats__sub">{stats.topScorer.points} pts · {stats.topScorer.position}</div>}
      </div>

      <div className="stats__positions">
        <div className="stats__label">Distribución por posición</div>
        <div className="stats__bars">
          {stats.positions.map(p => (
            <div key={p.name} className="stats__bar-row">
              <div className="stats__bar-label">{p.name}</div>
              <div className="stats__bar-track">
                <div className="stats__bar-fill" style={{ width: `${p.percent}%` }} />
              </div>
              <div className="stats__bar-count">{p.count}</div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
