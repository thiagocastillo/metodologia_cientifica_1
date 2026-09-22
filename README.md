# MC1 — Guía de Estudio Interactiva

Página de estudio interactiva para **Métodos Cuantitativos 1** (estadística y probabilidad aplicada a medicina, dentro de Metodología Científica 1).

Todo el material original en PDF (clases, diapositivas, prácticos, artículos, tablas y hoja de fórmulas) fue convertido a Markdown y organizado por tema. Cada tema principal tiene además una **autoevaluación** (quiz de opción múltiple) que corrige al instante y explica la respuesta, se acierte o se falle. El progreso de estudio y los mejores puntajes de cada quiz se guardan localmente en el navegador (no requiere backend ni login).

## Estructura

```
metodologia_cientifica_1/
├── index.html         ← página principal
├── app.js              ← navegación, búsqueda, progreso y quizzes (localStorage), render de Markdown + LaTeX
├── style.css           ← tema visual
└── content/
    ├── repaso/          ← variables, medidas de resumen, probabilidad básica
    ├── discretas/        ← distribución Binomial y de Poisson
    ├── continuas/         ← distribución Normal y Teorema del Límite Central
    ├── inferencia/         ← estimación e intervalos de confianza
    ├── diagnostico/         ← sensibilidad, especificidad, VPP, VPN, LR
    ├── contraste/            ← contraste de hipótesis para medias
    ├── avanzado/              ← muestras pareadas, proporciones, chi², riesgo, correlación
    ├── practicos/              ← prácticos de la materia con sus respuestas
    ├── referencia/              ← hoja de fórmulas y tablas estadísticas (Z, t, Binomial, Poisson)
    ├── articulos/                ← artículos científicos usados en los prácticos
    └── quiz/                      ← preguntas de cada autoevaluación (JSON), una por tema
```

## Autoevaluaciones (quiz)

Cada uno de los 7 temas principales (Repaso, Discretas, Continuas, Inferencia, Diagnóstico, Contraste, Avanzado) termina con una autoevaluación de opción múltiple: al elegir una respuesta se marca al instante como correcta o incorrecta y se muestra una explicación (en ambos casos) de por qué la opción correcta lo es. El puntaje de la vuelta actual y el mejor puntaje histórico se guardan en `localStorage`, y el quiz se puede reintentar todas las veces que se quiera. Las preguntas viven en `content/quiz/<tema>.json` con este formato:

```json
{
  "title": "Autoevaluación: <Tema>",
  "questions": [
    {
      "question": "texto de la pregunta (admite LaTeX inline con $...$)",
      "options": ["opción A", "opción B", "opción C", "opción D"],
      "correctIndex": 0,
      "explanation": "por qué es correcta / por qué fallan las demás"
    }
  ]
}
```

## Cómo se generó el contenido

Los PDF originales estaban en `Materiales/`. Se procesaron en dos vías:

- **PDFs con texto seleccionable** → convertidos a Markdown con [MarkItDown](https://github.com/microsoft/markitdown) y luego reformateados (fórmulas a LaTeX, tablas a Markdown GFM, limpieza de ruido de extracción).
- **PDFs escaneados / solo imágenes** (varias diapositivas de clase no tenían capa de texto) → renderizados página por página y transcriptos manualmente preservando fórmulas, ejemplos numéricos y tablas.

Las tablas estadísticas de referencia (Z, t, Binomial, Poisson) se mantienen como imágenes de alta resolución en vez de transcribirse número por número, para evitar errores de transcripción en valores que se usan para calcular resultados.

## Cómo verlo localmente

No hace falta build ni backend: es un sitio estático. Abrí `index.html` a través de un servidor local (por ejemplo `npx serve` o la extensión "Live Server" de VS Code) — abrirlo con `file://` directo puede bloquear el `fetch()` de los archivos Markdown en algunos navegadores.

```bash
npx serve .
```

## Publicarlo en GitHub Pages

1. Creá un repositorio en GitHub (por ejemplo `mc1-estudio-interactivo`).
2. Subí este contenido a la rama `main`.
3. En **Settings → Pages**, elegí la rama `main` y la carpeta raíz (`/`).
4. La página va a quedar disponible en `https://<tu-usuario>.github.io/mc1-estudio-interactivo/`.

El archivo `.nojekyll` ya está incluido para que GitHub Pages sirva las carpetas y archivos tal cual están (sin el procesamiento de Jekyll).

---

*Material compilado a partir de los apuntes y diapositivas de la cátedra de Métodos Cuantitativos.*
