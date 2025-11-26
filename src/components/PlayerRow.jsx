import React from "react";

export function PlayerRow({
  player,
  index,
  onClick,
  onToggleFavorite,
  isFavorite,
  colorClass,
}) {
  return (
    <tr
      className={`
        ${colorClass}
        hover:bg-slate-100
        transition-colors
        cursor-pointer
      `}
      onClick={(e) => {
        // Si hizo click en la estrella, NO abrir modal
        if (e.target.dataset.star) return;
        onClick(player);
      }}
    >
      {/* Favorito */}
      <td className="px-4 py-3 text-center">
        <button
          data-star="true"
          onClick={() => onToggleFavorite(player.id)}
          className="text-xl text-yellow-500"
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </td>

      <td className="px-4 py-3 font-semibold">{player.number}</td>
      <td className="px-4 py-3 font-semibold text-gray-900">{player.name}</td>
      <td className="px-4 py-3">{player.team}</td>
      <td className="px-4 py-3">{player.position}</td>

      <td className="px-4 py-3 text-center font-semibold">{player.points}</td>
      <td className="px-4 py-3 text-center font-semibold">{player.rebounds}</td>
      <td className="px-4 py-3 text-center font-semibold">{player.assists}</td>
      <td className="px-4 py-3 text-center font-semibold">{player.efficiency}</td>
    </tr>
  );
}

