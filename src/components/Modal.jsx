// src/components/Modal.jsx
import React from 'react';

export default function Modal({ isOpen, onClose, player, darkMode }) {
  if (!isOpen || !player) return null;

  const handleOverlayClick = e => {
    if (e.target.classList.contains('modal__overlay')) onClose();
  };

  return (
    <div className="modal__overlay" onClick={handleOverlayClick}>
      <div className={`modal__card ${darkMode ? 'modal__card--dark' : 'modal__card--light'}`}>
        <button className="modal__close" onClick={onClose} aria-label="Cerrar">✕</button>
        <h3 className="modal__title">{player.name}</h3>
        <p className="modal__subtitle">{player.team} · {player.position}</p>

        <div className="modal__grid">
          <div className="modal__stat">
            <div className="modal__stat-label">Número</div>
            <div className="modal__stat-value">{player.number}</div>
          </div>
          <div className="modal__stat">
            <div className="modal__stat-label">Edad</div>
            <div className="modal__stat-value">{player.age}</div>
          </div>
          <div className="modal__stat">
            <div className="modal__stat-label">PTS</div>
            <div className="modal__stat-value">{player.points}</div>
          </div>
          <div className="modal__stat">
            <div className="modal__stat-label">REB</div>
            <div className="modal__stat-value">{player.rebounds}</div>
          </div>
          <div className="modal__stat">
            <div className="modal__stat-label">AST</div>
            <div className="modal__stat-value">{player.assists}</div>
          </div>
          <div className="modal__stat">
            <div className="modal__stat-label">EFF</div>
            <div className="modal__stat-value">{player.efficiency}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
