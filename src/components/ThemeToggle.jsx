// src/components/ThemeToggle.jsx
import React from 'react';

export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-pressed={darkMode}>
      {darkMode ? 'Modo claro' : 'Modo oscuro'}
    </button>
  );
}
