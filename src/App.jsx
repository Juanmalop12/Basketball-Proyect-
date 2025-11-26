import { useState, useEffect, useMemo } from "react";
import { players } from "./data/players";

// Componentes
import { Modal } from "./components/Modal";
import { Pagination } from "./components/Pagination";
import { PlayerTable } from "./components/PlayerTable";
import { SearchBar } from "./components/SearchBar";
import { SearchHistory } from "./components/SearchHistory";
import { StatsPanel } from "./components/StatsPanel";
import { ThemeToggle } from "./components/ThemeToggle";
import { Header } from "./components/Header";

export default function App() {
  // BUSQUEDA
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // HISTORIAL
  const [searchHistory, setSearchHistory] = useState(() => {
    const saved = localStorage.getItem("searchHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // FAVORITOS
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // MODO OSCURO — SOLO FONDO
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // MODAL
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // PAGINACIÓN
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // ORDENAMIENTO
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "none",
  });

  // COLORES FILAS
  const [rowColors, setRowColors] = useState("none");

  // -----------------------------
  // DEBOUNCE DE BUSQUEDA
  // -----------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // -----------------------------
  // HISTORIAL
  // -----------------------------
  useEffect(() => {
    if (!debouncedSearch || debouncedSearch.length < 2) return;

    setSearchHistory((prev) => {
      const updated = [
        debouncedSearch,
        ...prev.filter((h) => h !== debouncedSearch),
      ].slice(0, 5);

      localStorage.setItem("searchHistory", JSON.stringify(updated));
      return updated;
    });
  }, [debouncedSearch]);

  // -----------------------------
  // FILTRO DE BÚSQUEDA
  // -----------------------------
  const filteredPlayers = useMemo(() => {
    if (!debouncedSearch) return players;

    return players.filter((p) =>
      p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch]);

  // -----------------------------
  // FAVORITOS
  // -----------------------------
  const favoriteFilteredPlayers = useMemo(() => {
    if (!showOnlyFavorites) return filteredPlayers;
    return filteredPlayers.filter((p) => favorites.includes(p.id));
  }, [filteredPlayers, favorites, showOnlyFavorites]);

  // -----------------------------
  // ORDENAMIENTO
  // -----------------------------
  const sortedPlayers = useMemo(() => {
    if (sortConfig.direction === "none" || !sortConfig.key)
      return favoriteFilteredPlayers;

    return [...favoriteFilteredPlayers].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [favoriteFilteredPlayers, sortConfig]);

  // ESTADISTICAS
  const stats = useMemo(() => {
    const list = sortedPlayers;

    if (list.length === 0) {
      return {
        total: 0,
        avgPoints: 0,
        avgRebounds: 0,
        topScorer: null,
        posDistribution: {},
      };
    }

    const total = list.length;
    const avgPoints = (list.reduce((a, b) => a + b.points, 0) / total).toFixed(1);
    const avgRebounds = (list.reduce((a, b) => a + b.rebounds, 0) / total).toFixed(1);

    const topScorer = list.reduce((max, p) =>
      p.points > max.points ? p : max
    );

    const posDistribution = list.reduce((acc, p) => {
      acc[p.position] = (acc[p.position] || 0) + 1;
      return acc;
    }, {});

    return { total, avgPoints, avgRebounds, topScorer, posDistribution };
  }, [sortedPlayers]);

  // FAVORITOS
  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];

      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  // -----------------------------
  // ORDENAR COLUMNAS
  // -----------------------------
  const onSort = (column) => {
    setSortConfig((prev) => {
      if (prev.key !== column) {
        return { key: column, direction: "asc" };
      }
      if (prev.direction === "asc") {
        return { key: column, direction: "desc" };
      }
      return { key: null, direction: "none" };
    });
  };

  // -----------------------------
  // PAGINACIÓN
  // -----------------------------
  const totalItems = sortedPlayers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedPlayers = sortedPlayers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // -----------------------------
  // MODAL
  // -----------------------------
  const openModal = (player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPlayer(null);
    setIsModalOpen(false);
  };

  // -----------------------------
  // LIMPIAR HISTORIAL
  // -----------------------------
  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
  };

  // -----------------------------
  // MODO OSCURO SOLO FONDO (BODY)
  // -----------------------------
 
useEffect(() => {
  localStorage.setItem("darkMode", JSON.stringify(darkMode));

  if (darkMode) {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  } else {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

  // -----------------------------
  // RENDER
  // -----------------------------
  return (
    <div className="min-h-screen w-full">

      {/* BOTÓN MODO OSCURO ARRIBA DERECHA */}
      <div className="absolute top-10 right-10 z-50">
        <ThemeToggle 
          darkMode={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />
      </div>

      {/* CONTENIDO */}
      <div className="max-w-6xl mx-auto pt-10 pb-16 px-6 relative">

        <Header />

        <div className="mt-10 bg-slate-950/70 border border-white/5 rounded-3xl px-8 py-6 shadow-[0_26px_60px_rgba(0,0,0,0.9)]">

          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            onClear={() => setSearchTerm("")}
            resultsCount={filteredPlayers.length}
          />

          <SearchHistory
            history={searchHistory}
            onSelectSearch={setSearchTerm}
            onClearHistory={clearHistory}
          />

          <StatsPanel stats={stats} />

          <div className="mt-6">
            <button
              onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
              className="px-5 py-2 rounded-full bg-amber-400 text-slate-900 font-semibold text-sm shadow-md hover:bg-amber-300"
            >
              {showOnlyFavorites
                ? "Mostrar todos los jugadores"
                : "Mostrar solo favoritos ⭐"}
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <button
              className="px-4 py-2 rounded-full bg-blue-600/80 hover:bg-blue-500 text-sm font-semibold"
              onClick={() => setRowColors("pares")}
            >
              Pintar Pares
            </button>

            <button
              className="px-4 py-2 rounded-full bg-amber-500/90 hover:bg-amber-400 text-sm font-semibold"
              onClick={() => setRowColors("impares")}
            >
              Pintar Impares
            </button>

            <button
              className="px-4 py-2 rounded-full bg-slate-700 hover:bg-slate-600 text-sm font-semibold"
              onClick={() => setRowColors("none")}
            >
              Limpiar Colores
            </button>
          </div>

          <PlayerTable
            players={paginatedPlayers}
            onRowClick={openModal}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            sortConfig={sortConfig}
            onSort={onSort}
            rowColors={rowColors}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={setItemsPerPage}
            onPageChange={setCurrentPage}
          />

        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        player={selectedPlayer}
      />

    </div>
  );
}
