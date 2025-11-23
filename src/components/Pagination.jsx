// src/components/Pagination.jsx
import React from 'react';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  totalItems
}) {
  const pages = [];
  const maxPagesToShow = 7;
  let start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let end = start + maxPagesToShow - 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - maxPagesToShow + 1);
  }
  for (let p = start; p <= end; p += 1) pages.push(p);

  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="pagination">
      <div className="pagination__info">
        Mostrando {startItem}-{endItem} de {totalItems} registros
      </div>
      <div className="pagination__controls">
        <button className="btn btn--small" onClick={() => onPageChange(1)} disabled={currentPage === 1}>
          Primera
        </button>
        <button className="btn btn--small" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>

        {pages.map(p => (
          <button
            key={p}
            className={`btn btn--small pagination__page ${p === currentPage ? 'pagination__page--active' : ''}`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ))}

        <button className="btn btn--small" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Siguiente
        </button>
        <button className="btn btn--small" onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
          Última
        </button>
      </div>

      <div className="pagination__per-page">
        <label>
          Elementos por página:
          <select value={itemsPerPage} onChange={e => onItemsPerPageChange(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>
    </div>
  );
}
