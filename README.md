# 🏀 Central de Rendimiento – Basketball  
Examen Final – Programación IV

Este proyecto es una aplicación web construida con **React + Vite + TailwindCSS**, que permite visualizar, buscar, ordenar, filtrar y analizar rendimiento estadístico de jugadores de basketball.  

---

## 👥 Integrantes
- **Tomas Rodríguez**  
- **Juan Manuel López**

---

## 🤖 Asistencia Tecnológica
En la elaboración del proyecto se utilizó apoyo de **ChatGPT (OpenAI, modelo GPT-5.1)** estrictamente para:
- Explicación de errores,
- Mejoras de organización del código,
- Generación de documentación,
- Ajustes de estilo CSS y estructura de carpetas.  

Todo el código final fue desarrollado, probado e integrado manualmente por los integrantes del grupo.


## 📝 Descripción del Proyecto
La **Central de Rendimiento Basketball** permite:

- Buscar jugadores
- Ordenar por: número, nombre, PTS, REB, AST, EFF, equipo, posición
- Colorear filas pares o impares
- Paginación completa
- Estadísticas automáticas:
  - Total jugadores mostrados  
  - Promedio de puntos  
  - Promedio de rebotes  
  - Máximo anotador  
  - Distribución por posición  
- Sistema de favoritos persistente
- Modal con detalles completos del jugador
- Historial de búsquedas (persistente)
- Modo claro/oscuro 
---

# ⚙️ Instalación y Ejecución

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/TU-REPO.git

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev

# 4. Construir para producción
npm run build

🗂️ Estructura del Proyecto
src/
│── components/
│   ├── Header.jsx
│   ├── Modal.jsx
│   ├── Pagination.jsx
│   ├── PlayerTable.jsx
│   ├── SearchBar.jsx
│   ├── SearchHistory.jsx
│   ├── StatsPanel.jsx
│   ├── ThemeToggle.jsx
│
│── data/
│   └── players.js
│
│── App.jsx
│── main.jsx
│── styles.css
│
public/
index.html
README.md
APRENDIZAJE.md
