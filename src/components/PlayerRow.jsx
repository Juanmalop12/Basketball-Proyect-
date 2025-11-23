// src/components/PlayerRow.jsx
import React from 'react';


export default function PlayerRow({
  player,
  index,
  onClick,
  isFavorite,
  onToggleFavorite,
  darkMode,
  colorClass
}) {
  const rowClass = [
    'table__row',
    darkMode ? 'table__row--dark' : 'table__row--light',
    colorClass || ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <tr className={rowClass} onClick={() => onClick(player)} role="button">
      <td
        className="table__cell table__cell--fav"
        onClick={e => {
          e.stopPropagation();
          onToggleFavorite(player.id);
        }}
      >
        <span className="fav-icon">{isFavorite ? '★' : '☆'}</span>
      </td>
      <td className="table__cell">{String(player.number).padStart(2, '0')}</td>
      <td className="table__cell">{player.name}</td>
      <td className="table__cell">{player.position}</td>
      <td className="table__cell">{player.age}</td>
      <td className="table__cell">{player.points}</td>
      <td className="table__cell">{player.rebounds}</td>
      <td className="table__cell">{player.assists}</td>
      <td className="table__cell">{player.efficiency}</td>
    </tr>
  );
}
