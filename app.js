const tabsConfig = {
    'Repaso': { icon: 'fa-rotate-left', label: 'Repaso' },
    'Distribuciones Discretas': { icon: 'fa-dice', label: 'Discretas' },
    'Distribuciones Continuas': { icon: 'fa-bell', label: 'Continuas' },
    'Inferencia': { icon: 'fa-magnifying-glass-chart', label: 'Inferencia' },
    'Procedimientos Diagnósticos': { icon: 'fa-stethoscope', label: 'Diagnóstico' },
    'Contraste de Hipótesis': { icon: 'fa-scale-balanced', label: 'Contraste' },
    'Temas Avanzados': { icon: 'fa-layer-group', label: 'Avanzado' },
    'Prácticos': { icon: 'fa-pen', label: 'Prácticos' },
    'Referencia': { icon: 'fa-table-list', label: 'Referencia' },
    'Artículos': { icon: 'fa-newspaper', label: 'Artículos' },
    'Guías de Estudio': { icon: 'fa-route', label: 'Guías' }
};

const virtualDocuments = {
    'guia-ruta-estudio': {
        title: 'Ruta de Estudio Sugerida',
        category: 'Guías de Estudio',
        markdown: `
# Ruta de Estudio Sugerida — Métodos Cuantitativos 1

Una forma de recorrer todo el material con foco en el examen. Marcá cada tema como completado a medida que avanzás (el progreso se guarda en este navegador).

## 1) Repaso de base (60-90 min)

- **Repaso** → Variables, medidas de tendencia central y dispersión, probabilidad básica.
- **Repaso** → Diapositivas de Probabilidad (espacio muestral, reglas, Bayes).

## 2) Distribuciones discretas (60-90 min)

- Distribución Binomial: ensayo de Bernoulli, condiciones, media y varianza.
- Distribución de Poisson: cuándo usarla en vez de la Binomial, parámetro λ.
- Practicar con la **Tabla Binomial Acumulada** y la **Tabla de Poisson** (pestaña Referencia).

## 3) Distribuciones continuas y TLC (60-90 min)

- Distribución Normal: estandarización (Z), uso de la tabla, regla empírica 68-95-99.7%.
- Teorema del Límite Central: distribución de la media muestral.

## 4) Inferencia estadística (45-60 min)

- Estimación puntual e intervalos de confianza (para medias y proporciones).
- Tamaño de muestra.

## 5) Procedimientos diagnósticos (45 min)

- Sensibilidad, especificidad, VPP, VPN, razones de verosimilitud (LR+/LR-).

## 6) Contraste de hipótesis (45-60 min)

- H0 vs H1, error tipo I y II, estadísticos Z y t, comparación de dos medias.

## 7) Temas avanzados (45-60 min)

- Muestras pareadas e independientes, comparación de proporciones, prueba de independencia (Chi-cuadrado), riesgo (OR/RR), correlación.

## 8) Prácticos (el resto del tiempo)

- Resolvé cada práctico SIN mirar las respuestas primero.
- Comparar contra la hoja de respuestas y anotar errores recurrentes.
- Tener a mano la **Hoja de Fórmulas** y las **Tablas Estadísticas** mientras resolvés.

## Checklist de cierre

- [ ] Reconozco cuándo usar Binomial vs. Poisson vs. Normal.
- [ ] Calculo probabilidades con las tablas Z, t, Binomial y Poisson sin dudar.
- [ ] Construyo un intervalo de confianza para media y para proporción.
- [ ] Interpreto sensibilidad/especificidad/VPP/VPN en un caso clínico.
- [ ] Planteo H0/H1 y decido con el estadístico y el valor-p correctos.
- [ ] Distingo cuándo aplicar OR vs. RR y calculo su intervalo de confianza.
`
    }
};

const topics = [
    {
        category: 'Repaso',
        items: [
            { id: 'repaso-material', title: 'Repaso: Variables y Probabilidad', file: './content/repaso/material-repaso.md' },
            { id: 'repaso-apuntes', title: 'Apuntes de Clase', file: './content/repaso/apuntes-clase.md' },
            { id: 'repaso-slides', title: 'Diapositivas: Repaso', file: './content/repaso/repaso-slides.md' },
            { id: 'repaso-probabilidad-slides', title: 'Diapositivas: Probabilidad', file: './content/repaso/probabilidad-slides.md' },
        ]
    },
    {
        category: 'Distribuciones Discretas',
        items: [
            { id: 'discretas-apuntes', title: 'Apuntes de Clase', file: './content/discretas/apuntes-clase.md' },
            { id: 'discretas-binomial', title: 'Teoría: Distribución Binomial', file: './content/discretas/teoria-binomial-normal.md' },
            { id: 'discretas-poisson', title: 'Teoría: Distribución de Poisson', file: './content/discretas/teoria-poisson.md' },
            { id: 'discretas-slides', title: 'Diapositivas: Binomial y Poisson', file: './content/discretas/slides-binomial-poisson.md' },
        ]
    },
    {
        category: 'Distribuciones Continuas',
        items: [
            { id: 'continuas-apuntes', title: 'Apuntes de Clase', file: './content/continuas/apuntes-clase.md' },
            { id: 'continuas-normal', title: 'Diapositivas: Distribución Normal I', file: './content/continuas/slides-normal.md' },
            { id: 'continuas-normal2', title: 'Diapositivas: Distribución Normal II', file: './content/continuas/slides-normal-2.md' },
            { id: 'continuas-dn3', title: 'Diapositivas: Distribución Normal III', file: './content/continuas/slides-clase-dn3.md' },
            { id: 'continuas-tlc', title: 'Teorema del Límite Central', file: './content/continuas/teorema-limite-central.md' },
        ]
    },
    {
        category: 'Inferencia',
        items: [
            { id: 'inferencia-apuntes', title: 'Apuntes de Clase', file: './content/inferencia/apuntes-clase.md' },
            { id: 'inferencia-estimacion', title: 'Teoría: Inferencia y Estimación', file: './content/inferencia/teoria-estimacion.md' },
            { id: 'inferencia-proporciones', title: 'Aclaraciones: Estimación de Proporciones', file: './content/inferencia/aclaraciones-proporciones.md' },
        ]
    },
    {
        category: 'Procedimientos Diagnósticos',
        items: [
            { id: 'diagnostico-apuntes', title: 'Apuntes de Clase', file: './content/diagnostico/apuntes-clase.md' },
            { id: 'diagnostico-teoria', title: 'Teoría: Procedimientos Diagnósticos', file: './content/diagnostico/teoria-procedimientos.md' },
        ]
    },
    {
        category: 'Contraste de Hipótesis',
        items: [
            { id: 'contraste-apuntes', title: 'Apuntes de Clase', file: './content/contraste/apuntes-clase.md' },
            { id: 'contraste-teoria', title: 'Teoría: Contraste para Medias', file: './content/contraste/teoria-contraste-medias.md' },
        ]
    },
    {
        category: 'Temas Avanzados',
        items: [
            { id: 'avanzado-pareadas', title: 'Muestras Pareadas e Independientes', file: './content/avanzado/muestras-pareadas.md' },
            { id: 'avanzado-proporciones', title: 'Comparación de Proporciones', file: './content/avanzado/comparacion-proporciones.md' },
            { id: 'avanzado-independencia', title: 'Prueba de Independencia (Chi²)', file: './content/avanzado/prueba-independencia.md' },
            { id: 'avanzado-riesgo', title: 'Riesgo: OR y RR', file: './content/avanzado/riesgo.md' },
            { id: 'avanzado-correlacion', title: 'Correlación', file: './content/avanzado/correlacion.md' },
        ]
    },
    {
        category: 'Prácticos',
        items: [
            { id: 'practico1', title: 'Práctico 1: Repaso', file: './content/practicos/practico1-repaso.md' },
            { id: 'practico1-resp', title: '   Práctico 1: Respuestas', file: './content/practicos/practico1-respuestas.md' },
            { id: 'practico2', title: 'Práctico 2: Distr. Discretas', file: './content/practicos/practico2-discretas.md' },
            { id: 'practico2-resp', title: '   Práctico 2: Respuestas', file: './content/practicos/practico2-respuestas.md' },
            { id: 'practico5', title: 'Práctico 5: Inferencia II', file: './content/practicos/practico5-inferencia2.md' },
            { id: 'practico6', title: 'Práctico 6: Proc. Diagnósticos', file: './content/practicos/practico6-procdiagnosticos.md' },
            { id: 'practico7', title: 'Práctico 7: Contraste I', file: './content/practicos/practico7-contraste1.md' },
        ]
    },
    {
        category: 'Referencia',
        items: [
            { id: 'ref-formulas', title: '📐 Hoja de Fórmulas', file: './content/referencia/hoja-formulas.md' },
            { id: 'ref-tablas', title: '📊 Tablas Estadísticas (Z, t, Bin, Poisson)', file: './content/referencia/tablas-estadisticas.md' },
        ]
    },
    {
        category: 'Artículos',
        items: [
            { id: 'articulo-calvache', title: 'La Bioestadística y su Aplicación', file: './content/articulos/calvache2006.md' },
            { id: 'articulo-practico2', title: 'Incidencia de Neoplasias en Cohorte VIH', file: './content/articulos/articulo-practico2.md' },
        ]
    },
    {
        category: 'Guías de Estudio',
        items: [
            { id: 'guia-ruta-estudio', title: 'Ruta de Estudio Sugerida', file: 'virtual/guia-ruta-estudio.md', virtual: true },
        ]
    }
];

const allItems = topics.flatMap(cat => cat.items);

let currentCategory = 'Repaso';
let currentTopicId = null;
const progress = JSON.parse(localStorage.getItem('mc1-progress')) || {};

const sidebar = document.getElementById('sidebar');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebarNav = document.getElementById('sidebar-nav');
const sidebarTabs = document.getElementById('sidebar-tabs');
const searchInput = document.getElementById('search-input');
const markdownContent = document.getElementById('markdown-content');
const currentTopicTitle = document.getElementById('current-topic-title');
const currentCategoryBadge = document.getElementById('current-category-badge');
const topicCheckbox = document.getElementById('topic-checkbox');
const progressPercentage = document.getElementById('progress-percentage');
const progressBar = document.getElementById('progress-bar');
const contentWrapper = document.getElementById('content-wrapper');

let searchQuery = '';

function init() {
    renderTabs();
    setupTabs();
    setupSearch();
    setupMobileMenu();
    renderSidebar();
    updateProgressUI();

    marked.setOptions({
        gfm: true,
        breaks: true,
        headerIds: true
    });

    const initialItems = topics.find(c => c.category === currentCategory).items;
    if (initialItems.length > 0) {
        loadTopic(initialItems[0].id);
    }

    topicCheckbox.addEventListener('change', (e) => {
        if (!currentTopicId) return;
        progress[currentTopicId] = e.target.checked;
        saveProgress();
        renderSidebar();
        updateProgressUI();
    });
}

function setupMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
        sidebarBackdrop.classList.add('open');
    });
    sidebarBackdrop.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
    sidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('open');
}

function setupSearch() {
    searchInput.oninput = (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        if (searchQuery) {
            sidebarTabs.style.display = 'none';
        } else {
            sidebarTabs.style.display = 'grid';
        }
        renderSidebar();
    };
}

function setupTabs() {
    const btns = sidebarTabs.querySelectorAll('.tab-btn');
    btns.forEach(btn => {
        btn.onclick = () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            if (searchQuery) {
                searchQuery = '';
                searchInput.value = '';
                sidebarTabs.style.display = 'grid';
            }
            renderSidebar();

            const items = topics.find(c => c.category === currentCategory).items;
            if (items.length > 0 && !items.find(i => i.id === currentTopicId)) {
                loadTopic(items[0].id);
            }
        };
    });
}

function renderTabs() {
    sidebarTabs.innerHTML = '';
    topics.forEach((topicGroup, index) => {
        const cfg = tabsConfig[topicGroup.category] || { icon: 'fa-folder-open', label: topicGroup.category };
        const btn = document.createElement('button');
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.dataset.category = topicGroup.category;
        btn.innerHTML = `<i class="fa-solid ${cfg.icon}"></i> ${cfg.label}`;
        sidebarTabs.appendChild(btn);
    });
}

function renderSidebar() {
    sidebarNav.innerHTML = '';
    let itemsToRender = [];
    let headerText = '';

    if (searchQuery) {
        itemsToRender = allItems.filter(i =>
            i.title.toLowerCase().includes(searchQuery) ||
            i.id.toLowerCase().includes(searchQuery)
        );
        headerText = `Resultados para: "${searchQuery}"`;
    } else {
        const category = topics.find(c => c.category === currentCategory);
        if (!category) return;
        itemsToRender = category.items;
        headerText = category.category;
    }

    const header = document.createElement('div');
    header.className = 'nav-category';
    header.innerHTML = `<span>${headerText}</span>`;
    sidebarNav.appendChild(header);

    if (itemsToRender.length === 0) {
        const empty = document.createElement('div');
        empty.style.padding = '1rem';
        empty.style.color = 'var(--text-muted)';
        empty.textContent = 'No se encontraron temas.';
        sidebarNav.appendChild(empty);
        return;
    }

    itemsToRender.forEach(topic => {
        const isCompleted = progress[topic.id];
        const isActive = topic.id === currentTopicId;
        const el = document.createElement('div');
        el.className = `nav-item ${isActive ? 'active' : ''}`;
        el.innerHTML = `
            <span>${topic.title}</span>
            ${isCompleted ? '<div class="status-icon"><i class="fa-solid fa-check"></i></div>' : ''}
        `;
        el.onclick = () => {
            loadTopic(topic.id);
            closeMobileMenu();
        };
        sidebarNav.appendChild(el);
    });
}

function updateProgressUI() {
    const total = allItems.length;
    const completed = allItems.filter(t => progress[t.id]).length;
    const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
    progressPercentage.textContent = `${pct}%`;
    progressBar.style.width = `${pct}%`;
}

function saveProgress() {
    localStorage.setItem('mc1-progress', JSON.stringify(progress));
}

function enhanceCodeBlocks() {
    const codeBlocks = markdownContent.querySelectorAll('pre code');
    codeBlocks.forEach((block, index) => {
        const classList = Array.from(block.classList);
        const langClass = classList.find(c => c.startsWith('language-'));
        const language = langClass ? langClass.replace('language-', '') : 'texto';
        hljs.highlightElement(block);
        const pre = block.parentElement;
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper fade-in';
        wrapper.style.animationDelay = `${index * 0.05}s`;
        const header = document.createElement('div');
        header.className = 'code-block-header';
        const langLabel = document.createElement('div');
        langLabel.className = 'code-language';
        langLabel.textContent = language;
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar';
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(block.innerText).then(() => {
                copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado';
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar';
                    copyBtn.classList.remove('copied');
                }, 2000);
            });
        };
        header.appendChild(langLabel);
        header.appendChild(copyBtn);
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(header);
        wrapper.appendChild(pre);
    });
}

function wrapTables() {
    const tables = markdownContent.querySelectorAll('table');
    tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-scroll';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
}

/**
 * Extraemos las fórmulas LaTeX ($$...$$ y $...$) ANTES de pasar el texto por
 * marked, para que el parser de Markdown no interprete "_" o "*" dentro de
 * subíndices/superíndices como énfasis. KaTeX renderiza cada fórmula a HTML
 * y se reinserta por placeholder una vez que marked terminó.
 */
function renderMarkdownWithMath(text) {
    const mathStore = [];

    const store = (expr, displayMode) => {
        const idx = mathStore.length;
        let html;
        try {
            html = katex.renderToString(expr.trim(), { displayMode, throwOnError: false });
        } catch (e) {
            html = `<code>${expr}</code>`;
        }
        mathStore.push(html);
        return `@@MATH${idx}@@`;
    };

    // Bloques $$...$$ primero (multilínea)
    text = text.replace(/\$\$([\s\S]+?)\$\$/g, (m, expr) => store(expr, true));
    // Luego inline $...$ (una sola línea, sin $ vacío)
    text = text.replace(/\$([^\$\n]+?)\$/g, (m, expr) => store(expr, false));

    let html = marked.parse(text);
    html = html.replace(/@@MATH(\d+)@@/g, (m, idx) => mathStore[parseInt(idx, 10)]);
    return html;
}

async function loadTopic(id) {
    const topic = allItems.find(t => t.id === id);
    if (!topic) return;
    currentTopicId = id;
    markdownContent.classList.remove('fade-in');
    const parentCategory = topics.find(c => c.items.some(i => i.id === id));
    currentCategoryBadge.textContent = parentCategory ? parentCategory.category : 'General';
    currentTopicTitle.textContent = topic.title.trim();
    topicCheckbox.disabled = false;
    topicCheckbox.checked = !!progress[id];

    if (parentCategory && parentCategory.category !== currentCategory) {
        currentCategory = parentCategory.category;
        const btns = sidebarTabs.querySelectorAll('.tab-btn');
        btns.forEach(b => b.classList.toggle('active', b.dataset.category === currentCategory));
    }

    renderSidebar();
    markdownContent.innerHTML = `<div class="loader-container"><div class="loader"></div><h3>Cargando...</h3></div>`;
    contentWrapper.scrollTop = 0;

    try {
        let text = '';
        if (topic.virtual) {
            text = virtualDocuments[id] ? virtualDocuments[id].markdown : '# Contenido no disponible';
        } else {
            const fetchUrl = topic.file + '?v=' + Date.now();
            const fullUrl = new URL(topic.file, window.location.href).href;

            const response = await fetch(fetchUrl);
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText} (URL: ${fullUrl})`);
            }
            text = await response.text();
        }
        // Remover bloque YAML (Frontmatter) si existe al inicio
        text = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');

        markdownContent.innerHTML = renderMarkdownWithMath(text);
        markdownContent.classList.add('fade-in');
        enhanceCodeBlocks();
        wrapTables();
    } catch (err) {
        console.error('loadTopic Error:', err);
        markdownContent.innerHTML = `
            <div class="error-box fade-in">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <h3>Error cargando contenido</h3>
                <p>No se pudo cargar: <code>${topic.file}</code></p>
                <div style="font-size: 0.8rem; margin-top: 1rem; color: var(--text-muted); opacity: 0.7;">
                    Detalle: ${err.message}<br>
                    Intenta recargar la página (Ctrl + F5).
                </div>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', init);
