import React from "react";

export function PlayerTable({
  players,
  onRowClick,
  favorites,
  onToggleFavorite,
  sortConfig,
  onSort,
  rowColors
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
      
      {/* TABLA  BLANCA */}
      <table className="player-table w-full text-sm bg-white">
        <thead className="bg-[#eef2ff] text-[#222]">
          <tr>
            <th className="p-3 text-left">Fav</th>

            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => onSort("number")}
            >
              #
            </th>

            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => onSort("name")}
            >
              Jugador
            </th>

            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => onSort("team")}
            >
              Equipo
            </th>

            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => onSort("position")}
            >
              Posición
            </th>

            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => onSort("points")}
            >
              PTS
            </th>

            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => onSort("rebounds")}
            >
              REB
            </th>

            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => onSort("assists")}
            >
              AST
            </th>

            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => onSort("efficiency")}
            >
              EFF
            </th>
          </tr>
        </thead>

        <tbody className="text-[#111]">
          {players.map((p, index) => {
            const isEven = index % 2 === 0;

            let rowStyle = "";

            /** 
              Botones de Pintar Pares / Impares
             */
            if (rowColors === "pares" && isEven) {
              rowStyle = "bg-blue-200";
            } else if (rowColors === "impares" && !isEven) {
              rowStyle = "bg-yellow-200";
            }

            /**
              Alternar colores por defecto 
             */
            if (rowColors === "none") {
              rowStyle = isEven ? "bg-[#f5f7ff]" : "bg-[#eaf0ff]";
            }

            return (
              <tr
                key={p.id}
                className={`player-row cursor-pointer transition-all ${rowStyle}`}
                onClick={() => onRowClick(p)}
              >
                <td className="p-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(p.id);
                    }}
                    className={`w-6 h-6 flex items-center justify-center rounded border ${
                      favorites.includes(p.id)
                        ? "bg-yellow-400 text-black"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    ★
                  </button>
                </td>

                <td className="p-3">{p.number}</td>
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.team}</td>
                <td className="p-3">{p.position}</td>
                <td className="p-3">{p.points}</td>
                <td className="p-3">{p.rebounds}</td>
                <td className="p-3">{p.assists}</td>
                <td className="p-3">{p.efficiency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
