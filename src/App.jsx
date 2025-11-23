// src/App.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { players as initialPlayers } from './data/players.js';
import SearchBar from './components/SearchBar.jsx';
import PlayerTable from './components/PlayerTable.jsx';
import Pagination from './components/Pagination.jsx';
import StatsPanel from './components/StatsPanel.jsx';
import Modal from './components/Modal.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import SearchHistory from './components/SearchHistory.jsx';

export default function App() {
  // ---------- Estado y lógica (igual que antes) ----------
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const [rowColors, setRowColors] = useState('none');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'none' });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false; // default false: light (video style)
  });
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const [searchHistory, setSearchHistory] = useState(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (debouncedSearch && debouncedSearch.length > 2) {
      setSearchHistory(prev => {
        const updated = [debouncedSearch, ...prev.filter(s => s !== debouncedSearch)];
        const sliced = updated.slice(0, 5);
        localStorage.setItem('searchHistory', JSON.stringify(sliced));
        return sliced;
      });
    }
  }, [debouncedSearch]);

  const filteredPlayers = useMemo(() => {
    let data = [...initialPlayers];
    if (debouncedSearch) {
      const term = debouncedSearch.toLowerCase();
      data = data.filter(p => p.name.toLowerCase().includes(term));
    }
    if (showOnlyFavorites) {
      data = data.filter(p => favorites.includes(p.id));
    }
    if (sortConfig.key && sortConfig.direction !== 'none') {
      const key = sortConfig.key;
      data.sort((a, b) => {
        let va = a[key]; let vb = b[key];
        if (typeof va === 'string') { va = va.toLowerCase(); vb = vb.toLowerCase(); }
        if (va < vb) return sortConfig.direction === 'asc' ? -1 : 1;
        if (va > vb) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return data;
  }, [debouncedSearch, showOnlyFavorites, favorites, sortConfig]);

  useEffect(() => setCurrentPage(1), [debouncedSearch, showOnlyFavorites, itemsPerPage]);

  const totalItems = filteredPlayers.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPlayers = filteredPlayers.slice(startIndex, startIndex + itemsPerPage);

  const stats = useMemo(() => {
    if (filteredPlayers.length === 0) return { total: 0, avgPoints: 0, avgRebounds: 0, topScorer: null, positions: [] };
    const total = filteredPlayers.length;
    const avgPoints = filteredPlayers.reduce((s, p) => s + p.points, 0) / total;
    const avgRebounds = filteredPlayers.reduce((s, p) => s + p.rebounds, 0) / total;
    const topScorer = filteredPlayers.reduce((m, p) => (p.points > m.points ? p : m), filteredPlayers[0]);
    const map = {};
    filteredPlayers.forEach(p => (map[p.position] = (map[p.position] || 0) + 1));
    const positions = Object.entries(map).map(([name, count]) => ({ name, count, percent: Math.round((count / total) * 100) }));
    return { total, avgPoints, avgRebounds, topScorer, positions };
  }, [filteredPlayers]);

  // ---------- handlers ----------
  const handleSort = key => {
    setSortConfig(prev => {
      if (prev.key !== key) return { key, direction: 'asc' };
      if (prev.direction === 'asc') return { key, direction: 'desc' };
      if (prev.direction === 'desc') return { key: null, direction: 'none' };
      return { key, direction: 'asc' };
    });
  };
  const handleRowClick = player => { setSelectedPlayer(player); setIsModalOpen(true); };
  const handleToggleFavorite = id => setFavorites(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  const handleClearHistory = () => { setSearchHistory([]); localStorage.removeItem('searchHistory'); };
  const handleSelectHistory = term => setSearchTerm(term);

  // ---------- render ----------
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b1360] to-[#07101b] text-gray-900 antialiased">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Scoreboard */}
        <header className="mb-8">
          <div className="rounded-3xl bg-white shadow-xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="text-sm text-gray-500">TCB</div>
              <div className="text-xs text-gray-400 uppercase">Top Club Flames</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-extrabold text-gray-800">98 <span className="text-[#2cc6f0]">—</span> 92</div>
              <div className="text-xs text-gray-500 mt-1">Q4 · 01:12 · Arena Central — 18 Nov</div>
            </div>

            <div className="text-right">
              <div className="text-sm text-gray-500">RIV</div>
              <div className="text-xs text-gray-400 uppercase">Rival All-Stars</div>
            </div>
          </div>
        </header>

        {/* Main layout: search + stats + table */}
        <main className="grid grid-cols-12 gap-8">
          {/* Left column: search, actions, table */}
          <section className="col-span-8">
            {/* Search Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex gap-6 items-center">
                <div className="flex-1">
                  <SearchBar value={searchTerm} onChange={setSearchTerm} onClear={() => setSearchTerm('')} resultsCount={filteredPlayers.length} />
                </div>
                <div className="flex gap-3 items-center">
                  <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 shadow hover:shadow-md" onClick={() => setRowColors('pares')}>Filas pares</button>
                  <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 shadow hover:shadow-md" onClick={() => setRowColors('impares')}>Filas impares</button>
                  <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 shadow hover:shadow-md" onClick={() => setRowColors('none')}>Limpiar</button>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-4">
                  <label className="inline-flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" className="form-checkbox" checked={showOnlyFavorites} onChange={e => setShowOnlyFavorites(e.target.checked)} />
                    Mostrar solo favoritos ({favorites.length})
                  </label>
                </div>
                <div>
                  <SearchHistory history={searchHistory} onSelectSearch={handleSelectHistory} onClearHistory={handleClearHistory} />
                </div>
              </div>
            </div>

            {/* Table Card */}
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <PlayerTable
                players={paginatedPlayers}
                onRowClick={handleRowClick}
                onSort={handleSort}
                sortConfig={sortConfig}
                darkMode={darkMode}
                rowColors={rowColors}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />

              <div className="mt-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  itemsPerPage={itemsPerPage}
                  onItemsPerPageChange={setItemsPerPage}
                  totalItems={totalItems}
                />
              </div>
            </div>
          </section>

          {/* Right column: stats */}
          <aside className="col-span-4 space-y-6">
            <StatsPanel stats={stats} darkMode={darkMode} />
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <h3 className="text-sm text-gray-600 mb-3">Líderes</h3>
              <div className="text-sm text-gray-800">
                <div className="mb-2"><strong>Anotador:</strong> {stats.topScorer ? `${stats.topScorer.name} · ${stats.topScorer.points} pts` : '-'}</div>
                <div className="mb-2"><strong>Rebotes (avg):</strong> {stats.avgRebounds.toFixed(1)}</div>
                <div className="mb-2"><strong>Eficiencia (top):</strong> {stats.topScorer ? `${stats.topScorer.efficiency}` : '-'}</div>
              </div>
            </div>
          </aside>
        </main>

        <footer className="mt-8 text-sm text-gray-500 flex justify-between">
          <div>Proyecto: Central de Rendimiento — Basketball</div>
          <div>Integrantes: Tomás Rodríguez, Juan Manuel López</div>
        </footer>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} player={selectedPlayer} darkMode={darkMode} />
    </div>
  );
}
