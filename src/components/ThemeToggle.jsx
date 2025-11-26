export function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="px-4 py-2 mt-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition"
    >
      {darkMode ? " Modo Claro" : " Modo Oscuro"}
    </button>
  );
}
//boton de modo oscuro/claro
