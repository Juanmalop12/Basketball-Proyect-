Central de Rendimiento – Basketball

Qué es useState y cuándo usarlo?

useState es un hook de React que permite crear estados internos dentro de un componente funcional.
Cada estado contiene dos partes:

const [valor, setValor] = useState(valorInicial);

valor = dato almacenado

setValor = función para actualizarlo

React vuelve a renderizar el componente cuando el estado cambia.

Cuándo usarlo?

Para almacenar datos que cambian con el tiempo.

Para manejar inputs, modales, favoritos, colores, filtros, paginación, etc.

 Ejemplos reales del proyecto
1️ Estado del término de búsqueda
const [searchTerm, setSearchTerm] = useState("");

2️ Estado del modo oscuro
const [darkMode, setDarkMode] = useState(false);

3️ Estado de los jugadores favoritos
const [favorites, setFavorites] = useState([]);

 ¿Qué es useEffect y sus casos de uso?

useEffect ejecuta efectos secundarios, es decir, acciones fuera del flujo normal del render:

Timers (setTimeout, setInterval)

Llamados a API

Guardado en localStorage

Suscripción a eventos

Validaciones

 Tipos de useEffect
 useEffect(() => {}, [])

Ejecuta cuando dep cambia.

 useEffect(() => {})


Qué es useMemo y cuándo usarlo?

useMemo memoriza resultados de cálculos pesados, evitando recalcularlos en cada render.

Se usa para optimizar rendimiento cuando:

Tienes cálculos costosos

Tienes listas grandes

Tienes filtros u ordenamientos complejos

Diferencia con useCallback

useMemo guarda valores

useCallback guarda funciones

¿Cómo funciona el cleanup dentro de useEffect?

El cleanup es esencial cuando:

Usas timeouts o intervalos

Añades eventos (scroll, resize, click)

Creas suscripciones

Evitas memoria acumulada

El cleanup previene fugas de memoria y comportamientos duplicados.


¿Cómo funciona localStorage con React?


localStorage guarda datos de manera persistente en el navegador.
Incluso después de recargar la página o cerrar el navegador, la información sigue ahí.

Formatos permitidos: solo strings (por eso usamos JSON).


Guardar favoritos
localStorage.setItem("favorites", JSON.stringify(updated));

Guardar historial de búsqueda
localStorage.setItem("searchHistory", JSON.stringify(updated));


✔️ Persistencia real
✔️ Experiencia mejorada
✔️ Cumple requisito del examen

🧠 Conclusiones

Comprendimos cómo los hooks permiten crear lógica compleja en componentes pequeños.

Aprendimos a optimizar cálculos con useMemo.

Implementamos persistencia con localStorage.

Aplicamos cleanup functions para evitar fugas de memoria y comportamientos duplicados.

Utilizamos useEffect correctamente con dependencias ([], [variable]).

El proyecto desarrollado aplica TODOS los conceptos vistos en clase.

🤖 IA Utilizada

Documento redactado con apoyo de:
ChatGPT – OpenAI (Modelo GPT-5.1)
El código y la integración fueron realizados manualmente por los integrantes del equipo.
