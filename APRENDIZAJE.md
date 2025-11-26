Aquí tienes una **versión más estética, completa, clara y profesional**, ideal para tu entrega del proyecto **Central de Rendimiento – Basketball**.
Conserva todos los conceptos clave, pero con mejor orden, explicación y presentación.

---

# 🏀 **Central de Rendimiento – Basketball**

## **Resumen de Hooks, Persistencia y Optimización en React**

---

## 🔵 **1. ¿Qué es `useState` y cuándo usarlo?**

`useState` es un **hook de React** que permite crear y manejar un **estado interno** dentro de un componente funcional.

```js
const [valor, setValor] = useState(valorInicial);
```

### 📌 ¿Para qué sirve?

* Guardar datos que cambian con el tiempo.
* Forzar que el componente se vuelva a renderizar cuando el estado cambia.

### 📌 ¿Cuándo usarlo?

Siempre que necesites manejar información dinámica, como:

* Inputs de formularios
* Modal abierto/cerrado
* Modo oscuro
* Listas filtradas
* Datos temporales del usuario
* Favoritos, puntuaciones, estadísticas

### 🏀 Ejemplos reales del proyecto:

1. **Estado del término de búsqueda**

   ```js
   const [searchTerm, setSearchTerm] = useState("");
   ```

2. **Modo oscuro / claro**

   ```js
   const [darkMode, setDarkMode] = useState(false);
   ```

3. **Jugadores favoritos**

   ```js
   const [favorites, setFavorites] = useState([]);
   ```

---

## 🔵 **2. ¿Qué es `useEffect` y qué casos de uso tiene?**

`useEffect` permite ejecutar **efectos secundarios** (acciones fuera del render).

### 🛠️ Casos de uso principales:

* Llamados a APIs
* Timers (`setTimeout`, `setInterval`)
* Guardar o leer del `localStorage`
* Suscribirse a eventos (scroll, resize…)
* Validaciones automáticas
* Control de modo oscuro basado en el sistema

### 🧩 Tipos de `useEffect`

| Sintaxis                              | Cuándo se ejecuta               |
| ------------------------------------- | ------------------------------- |
| `useEffect(() => {})`                 | En **cada render**              |
| `useEffect(() => {}, [])`             | Solo **una vez** al montar      |
| `useEffect(() => {}, [dependencias])` | Cuando cambian las dependencias |

---

## 🔵 **3. ¿Qué es `useMemo` y cuándo usarlo?**

`useMemo` memoriza el **resultado de un cálculo costoso**, evitando recalcularlo en cada render.

```js
const resultado = useMemo(() => calcularAlgo(), [dependencias]);
```

### 🎯 ¿Cuándo usarlo?

* Cálculos complejos o pesados
* Filtros de listas grandes
* Ordenamientos
* Procesar estadísticas de jugadores
* Evitar renders innecesarios

### ⚔️ Diferencia con `useCallback`:

* `useMemo` → memoriza **valores**
* `useCallback` → memoriza **funciones**

---

## 🔵 **4. ¿Cómo funciona el Cleanup en `useEffect`?**

El **cleanup** limpia efectos anteriores para evitar:

✔️ Fugas de memoria
✔️ Eventos duplicados
✔️ Timers acumulados

```js
useEffect(() => {
  const id = setInterval(() => {
    console.log("Actualizando...");
  }, 1000);

  return () => clearInterval(id);
}, []);
```

### 📌 ¿Cuándo es obligatorio usar cleanup?

* Timers (`setInterval`, `setTimeout`)
* Eventos del navegador (scroll, resize)
* WebSockets o suscripciones
* Observers

---

## 🔵 **5. ¿Cómo funciona `localStorage` con React?**

`localStorage` permite guardar datos que **persisten incluso si cierras la pestaña o el navegador**.

### 📝 Características:

* Solo almacena **strings**
* Por eso usamos `JSON.stringify` y `JSON.parse`

### 🏀 Ejemplos del proyecto:

**Guardar favoritos**

```js
localStorage.setItem("favorites", JSON.stringify(updated));
```

**Guardar historial de búsqueda**

```js
localStorage.setItem("searchHistory", JSON.stringify(updated));
```

### ⭐ Beneficios:

* Persistencia real
* Experiencia más fluida
* Cumple con los requisitos del examen

---

## 🧠 **Conclusiones del Proyecto**

* Los **hooks** permiten crear interfaces dinámicas, limpias y reactivas.
* `useState` manejó la interacción del usuario: búsqueda, favoritos, modo oscuro.
* `useEffect` nos permitió usar APIs, timers, eventos y persistencia.
* `useMemo` optimizó cálculos y listas para mejorar el rendimiento.
* Se aplicó correctamente el sistema de **cleanup** para evitar fugas de memoria.
* `localStorage` garantizó que la app conserve datos incluso si se cierra.
* En conjunto, se desarrolló una aplicación que aprovecha completamente las herramientas modernas de React.

---

## 🤖 **IA Utilizada**

Documento redactado con apoyo de: **ChatGPT – OpenAI (Modelo GPT-5.1)**
El código, integración y diseño fueron realizados manualmente por los integrantes del equipo.

---

Si quieres, también puedo:
✅ Convertirlo en PDF
✅ Hacerlo estilo diapositivas
✅ Ponerlo en formato de presentación de proyecto
✅ Añadir imágenes y diagramas estéticos

¿Deseas un formato diferente?
