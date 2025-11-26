import React from "react";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  totalItems,
}) {
  if (totalPages === 0) return null;

  const goTo = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

      {/* ==== TEXTO: MOSTRANDO x */}
      <p className="text-gray-300 text-sm">
        Mostrando{" "}
        <span className="font-bold text-yellow-400">
          {(currentPage - 1) * itemsPerPage + 1}
        </span>{" "}
        -{" "}
        <span className="font-bold text-yellow-400">
          {Math.min(currentPage * itemsPerPage, totalItems)}
        </span>{" "}
        de {totalItems}
      </p>

      
      <div className="flex items-center gap-2">

        {/* Botón Inicio */}
        <button
          onClick={() => goTo(1)}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-700 hover:bg-gray-600 text-white"
        >
          «
        </button>

        {/* Botón Anterior */}
        <button
          onClick={() => goTo(currentPage - 1)}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-700 hover:bg-gray-600 text-white"
        >
          ‹
        </button>

        {/* Números */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => goTo(p)}
            className={`w-8 h-8 flex items-center justify-center rounded-md font-semibold 
              ${
                currentPage === p
                  ? "bg-yellow-400 text-gray-900 shadow"
                  : "bg-gray-700 hover:bg-gray-600 text-white"
              }`}
          >
            {p}
          </button>
        ))}

        {/* Botón Siguiente */}
        <button
          onClick={() => goTo(currentPage + 1)}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-700 hover:bg-gray-600 text-white"
        >
          ›
        </button>

        {/* Botón Final */}
        <button
          onClick={() => goTo(totalPages)}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-700 hover:bg-gray-600 text-white"
        >
          »
        </button>
      </div>

      {/* ==== SELECT ITEMS PER PAGE ==== */}
      <div className="flex items-center gap-2 text-sm">
        <span>Mostrar:</span>

        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="bg-gray-900 border border-gray-600 rounded px-2 py-1"
        >
          <option value={5}>5 por página</option>
          <option value={10}>10 por página</option>
          <option value={15}>15 por página</option>
          <option value={20}>20 por página</option>
        </select>
      </div>

    </div>
  );
}

