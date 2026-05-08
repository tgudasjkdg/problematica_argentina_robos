/**
 * Widget IA — Observatorio de Análisis Criminal
 * Buscador + Chatbot sobre el contenido de la página
 *
 * INSTALACIÓN: Pegá esta línea antes de </body> en tu HTML:
 * <script src="widget-ia.js"></script>
 *
 * CONFIGURACIÓN: Editá las variables de la sección CONFIG más abajo.
 */

(function () {
  // ─── CONFIG ──────────────────────────────────────────────────────────────
  const CONFIG = {
    // Tu API Key de Groq (gratis en console.groq.com)
    API_KEY: "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",

    // Nombre del asistente que ve el visitante
    assistantName: "Asistente IA",

    // Color de acento (tomado del sitio original)
    accentColor: "#c0392b",

    // Preguntas rápidas sugeridas
    quickQuestions: [
      "¿Qué es el fenómeno reiterado?",
      "¿Cómo afecta a los menores?",
      "¿Cuáles son las zonas de mayor riesgo?",
      "¿Qué soluciones propone el análisis?",
    ],
  };

  // ─── CONTENIDO DE LA PÁGINA (base de conocimiento) ───────────────────────
  const SITE_CONTENT = `
Análisis Estructural: Robos Reiterados en Córdoba Capital
Observatorio de Análisis Criminal

OBJETIVO GENERAL (Nivel Macro):
Analizar el problema de los robos en Argentina como fenómeno estructural y multicausal.

Contexto Estructural Nacional:
- Fluctuaciones macroeconómicas e inflación sostenida (2016-2026).
- Expansión de la pobreza estructural y precarización laboral.
- Consolidación de mercados ilegales transnacionales y nacionales (narcotráfico, desarmaderos).
- Saturación del sistema penitenciario y demoras judiciales.

OBJETIVO ESPECÍFICO (Caso de Estudio):
Analizar los robos consecutivos o reiterados en Córdoba Capital, identificando lógicas de concentración temporal y espacial.

El Fenómeno "Reiterado":
- Definición: Sucesión rápida de delitos predatorios (ej. modalidad "motochorro" o "piraña") en un radio geográfico acotado, por los mismos actores.
- Racionalidad criminal: Maximizar la ganancia en el menor tiempo antes de la respuesta policial (economía del delito).
- Impacto: Genera alta alarma social y percepciones de "zonas liberadas", afectando la cohesión comunitaria.

Premisa Analítica Fundamental:
El delito predatorio no es una generación espontánea en el espacio urbano. Es el resultado final de una cadena de vulnerabilidades (causas estructurales) que se cruzan con una oportunidad ambiental propicia (causas inmediatas) en un territorio sin fricción institucional.

ARQUITECTURA DEL DELITO — CAUSAS:
Causas Inmediatas (El Evento): Oportunidad, Falta de vigilancia, Armas.
Causas Intermedias (El Contexto): Mercados ilícitos, Deserción escolar, Adicciones.
Causas Estructurales (La Raíz): Pobreza extrema, Segregación espacial, Desigualdad.

Factores de Protección o Mitigación:
- Sociales/Familiares: Redes de contención barrial, participación en clubes o instituciones religiosas, adultos referentes positivos.
- Urbanos: Espacios públicos mantenidos, iluminación peatonal efectiva, "ojos en la calle" (actividad comercial mixta).
- Institucionales: Policía de proximidad validada por la comunidad, programas de permanencia escolar efectivos.

ANÁLISIS TERRITORIAL — CÓRDOBA CAPITAL:
- El Centro y Nueva Córdoba: Alta concentración de víctimas potenciales (estudiantes, oficinistas) portando bienes de alto valor (celulares, notebooks). Modalidad predominante: Arrebato / Motochorro.
- Barrios Periféricos (anillo de Circunvalación): Mayor incidencia de robos domiciliarios (entraderas) y robos de vehículos. Las vías rápidas de escape son el factor criminógeno principal.
- Zonas de "Fricción": Áreas donde colisionan desarrollos inmobiliarios cerrados con barrios de alta vulnerabilidad. Se generan dinámicas de robo predatorio oportunista cruzando fronteras urbanas invisibles.

Perfil de Víctimas Frecuentes:
- Transeúntes (18-35 años): Principalmente en zonas céntricas y universitarias. Robo de celulares y mochilas. Alta victimización femenina.
- Conductores / Repartidores: Robos en semáforos, sustracción de motocicletas a repartidores de apps en zonas de transición.

MENORES EN CONFLICTO CON LA LEY PENAL:
Trayectoria de Riesgo:
1. Exclusión Temprana: Hogares hacinados, NBI, violencia intrafamiliar. Carencia de referentes vinculados al trabajo formal.
2. Ruptura Institucional: Fracaso y repitencia escolar. La escuela deja de ser un espacio de contención.
3. Calle y Consumo: Agrupamiento en esquinas. Inicio en consumos problemáticos. El grupo de pares asume el rol socializador primario.
4. Reclutamiento Ilícito: Adultos u organizaciones los utilizan aprovechando su supuesta o real inimputabilidad. Búsqueda de estatus, dinero rápido y adrenalina.

Lógicas del Accionar:
- Delito Expresivo vs Instrumental: En jóvenes tempranos, el robo tiene un componente expresivo (demostración de valor ante pares) además del instrumental (económico).
- El Rol de las Redes Sociales: Exhibición de bienes sustraídos o armas como mecanismo de construcción de identidad.
- Impavidez ante el riesgo: Falta de proyección a futuro ligada a condiciones de vida precarias, lo que disminuye la eficacia disuasoria de las penas.

Respuestas Preventivas para Menores:
- Sistemas de Alerta Temprana en Escuelas: Identificar ausentismo crónico cruzado con indicadores de violencia barrial.
- Justicia Restaurativa: En primeros delitos no violentos, mecanismos que fuercen la reparación a la víctima y la comunidad.
- Intervención Multi-agencial: Abordajes donde operen simultáneamente Salud (adicciones), Desarrollo Social (ingreso) y Educación, no solo Seguridad.

MATRIZ DE INTERVENCIONES Y SOLUCIONES:
Tipologías: Físicos/Urbanos, Servicios/Comunidad, Digitales/Tech, Comunicación.

CONCLUSIÓN DEL EQUIPO INTERDISCIPLINARIO:
Los robos reiterados en Córdoba Capital no son episodios aislados de fallas de seguridad, sino el síntoma de un quiebre en la matriz social y urbana. La concentración territorial (Centro vs. Periferia) responde a lógicas económicas de oportunidad y vías de escape. El reclutamiento de menores opera porque las economías ilícitas ofrecen una "carrera" allí donde el Estado y el mercado formal se han retirado. La respuesta punitiva clásica es insuficiente si no se acompaña de desarticulación de mercados ilegales e intervenciones de prevención temprana.

Vacíos de Información detectados: Carencia sistemática de datos georeferenciados públicos y auditables en tiempo real sobre modalidades de robo, y falta de estudios longitudinales sobre reincidencia específica de jóvenes en el sistema penal de la provincia post-2023.

Período analizado: 2016-2026. Documento generado 100% por Inteligencia Artificial [TALLER INTELIGENCIA ARTIFICIAL - INSM].
`;

  const SYSTEM_PROMPT = `Sos un asistente especializado del "Observatorio de Análisis Criminal". Tu único rol es responder preguntas sobre el análisis de robos reiterados en Córdoba Capital, basándote EXCLUSIVAMENTE en el siguiente contenido del sitio web:

${SITE_CONTENT}

Reglas estrictas:
- Respondé SOLO en base al contenido del sitio. Si algo no está en el contenido, decí "Esa información no está cubierta en este análisis".
- Respondé en español argentino, de forma clara y directa.
- Sé conciso: máximo 3-4 oraciones por respuesta salvo que pidan un detalle extenso.
- No inventes datos, estadísticas ni afirmaciones que no estén en el texto.
- Podés organizar la respuesta con puntos si hay varios ítems.`;

  // ─── ESTILOS ──────────────────────────────────────────────────────────────
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

    #oac-widget-btn {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 56px;
      height: 56px;
      border-radius: 16px;
      background: #111318;
      border: 1px solid rgba(192,57,43,0.5);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 24px rgba(0,0,0,0.5), 0 0 0 0 rgba(192,57,43,0.4);
      z-index: 99999;
      transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
      animation: oac-pulse-border 3s ease-in-out infinite;
    }
    @keyframes oac-pulse-border {
      0%,100%{ box-shadow: 0 4px 24px rgba(0,0,0,0.5), 0 0 0 0 rgba(192,57,43,0.3); }
      50%{ box-shadow: 0 4px 24px rgba(0,0,0,0.5), 0 0 0 6px rgba(192,57,43,0.0); }
    }
    #oac-widget-btn:hover {
      transform: scale(1.06);
      border-color: #c0392b;
    }
    #oac-widget-btn svg { width: 24px; height: 24px; }

    #oac-panel {
      position: fixed;
      bottom: 96px;
      right: 28px;
      width: 380px;
      max-height: 580px;
      background: #0e1016;
      border: 1px solid rgba(255,255,255,0.09);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      z-index: 99998;
      font-family: 'IBM Plex Sans', sans-serif;
      opacity: 0;
      transform: translateY(16px) scale(0.97);
      pointer-events: none;
      transition: opacity 0.22s ease, transform 0.22s ease;
      box-shadow: 0 32px 80px rgba(0,0,0,0.7);
    }
    #oac-panel.oac-open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }

    .oac-header {
      background: #111318;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      padding: 14px 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }
    .oac-header-icon {
      width: 34px;
      height: 34px;
      border-radius: 9px;
      background: rgba(192,57,43,0.15);
      border: 1px solid rgba(192,57,43,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .oac-header-icon svg { width: 16px; height: 16px; }
    .oac-header-text { flex: 1; }
    .oac-header-text h4 {
      font-size: 13px;
      font-weight: 600;
      color: #e8e6f0;
      letter-spacing: 0.1px;
      margin: 0;
    }
    .oac-header-text p {
      font-size: 11px;
      color: rgba(232,230,240,0.35);
      margin: 1px 0 0;
      font-family: 'IBM Plex Mono', monospace;
    }
    .oac-close {
      background: none;
      border: none;
      cursor: pointer;
      color: rgba(255,255,255,0.3);
      font-size: 20px;
      line-height: 1;
      padding: 4px;
      transition: color 0.15s;
    }
    .oac-close:hover { color: rgba(255,255,255,0.8); }

    /* Tab bar */
    .oac-tabs {
      display: flex;
      background: #111318;
      border-bottom: 1px solid rgba(255,255,255,0.07);
      flex-shrink: 0;
    }
    .oac-tab {
      flex: 1;
      background: none;
      border: none;
      padding: 10px;
      font-size: 12px;
      font-family: 'IBM Plex Mono', monospace;
      cursor: pointer;
      color: rgba(232,230,240,0.35);
      border-bottom: 2px solid transparent;
      transition: color 0.15s, border-color 0.15s;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .oac-tab.active {
      color: #c0392b;
      border-bottom-color: #c0392b;
    }

    /* SEARCH TAB */
    .oac-pane { display: none; flex-direction: column; flex: 1; overflow: hidden; }
    .oac-pane.active { display: flex; }

    .oac-search-box {
      padding: 12px 14px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      flex-shrink: 0;
    }
    .oac-search-input-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #1a1d26;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      padding: 8px 12px;
    }
    .oac-search-input-wrap svg { width: 15px; height: 15px; flex-shrink: 0; opacity: 0.4; }
    .oac-search-input-wrap input {
      background: none;
      border: none;
      outline: none;
      color: #e8e6f0;
      font-size: 13px;
      font-family: 'IBM Plex Sans', sans-serif;
      width: 100%;
    }
    .oac-search-input-wrap input::placeholder { color: rgba(232,230,240,0.25); }

    .oac-search-results {
      flex: 1;
      overflow-y: auto;
      padding: 10px 14px;
    }
    .oac-search-results::-webkit-scrollbar { width: 3px; }
    .oac-search-results::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }

    .oac-result-item {
      padding: 10px 12px;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.06);
      margin-bottom: 8px;
      background: #131620;
      cursor: pointer;
      transition: border-color 0.15s, background 0.15s;
    }
    .oac-result-item:hover { background: #1a1d26; border-color: rgba(192,57,43,0.3); }
    .oac-result-section {
      font-size: 10px;
      font-family: 'IBM Plex Mono', monospace;
      color: #c0392b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .oac-result-text {
      font-size: 13px;
      color: rgba(232,230,240,0.7);
      line-height: 1.5;
    }
    .oac-result-text mark {
      background: rgba(192,57,43,0.25);
      color: #e8e6f0;
      border-radius: 3px;
      padding: 0 2px;
    }
    .oac-search-empty {
      text-align: center;
      padding: 2rem 1rem;
      color: rgba(232,230,240,0.25);
      font-size: 13px;
      font-family: 'IBM Plex Mono', monospace;
    }

    /* CHAT TAB */
    .oac-messages {
      flex: 1;
      overflow-y: auto;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .oac-messages::-webkit-scrollbar { width: 3px; }
    .oac-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }

    .oac-msg { display: flex; gap: 8px; max-width: 90%; }
    .oac-msg.bot { align-self: flex-start; }
    .oac-msg.user { align-self: flex-end; flex-direction: row-reverse; }

    .oac-bubble {
      padding: 9px 13px;
      border-radius: 14px;
      font-size: 13px;
      line-height: 1.6;
    }
    .oac-msg.bot .oac-bubble {
      background: #1a1d26;
      border: 1px solid rgba(255,255,255,0.07);
      color: rgba(232,230,240,0.85);
      border-bottom-left-radius: 4px;
    }
    .oac-msg.user .oac-bubble {
      background: #c0392b;
      color: #fff;
      border-bottom-right-radius: 4px;
    }

    .oac-typing {
      display: flex;
      gap: 4px;
      padding: 10px 14px;
      background: #1a1d26;
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 14px;
      border-bottom-left-radius: 4px;
      width: fit-content;
    }
    .oac-typing span {
      width: 6px; height: 6px;
      background: rgba(232,230,240,0.3);
      border-radius: 50%;
      animation: oac-bounce 1.2s infinite;
    }
    .oac-typing span:nth-child(2) { animation-delay: 0.15s; }
    .oac-typing span:nth-child(3) { animation-delay: 0.3s; }
    @keyframes oac-bounce {
      0%,80%,100%{ transform:translateY(0); }
      40%{ transform:translateY(-5px); }
    }

    .oac-quick-bar {
      padding: 8px 12px;
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      border-top: 1px solid rgba(255,255,255,0.06);
      background: #111318;
      flex-shrink: 0;
    }
    .oac-quick {
      background: #1a1d26;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 4px 10px;
      font-size: 11px;
      font-family: 'IBM Plex Sans', sans-serif;
      color: rgba(232,230,240,0.5);
      cursor: pointer;
      transition: background 0.15s, border-color 0.15s, color 0.15s;
    }
    .oac-quick:hover { background: rgba(192,57,43,0.15); border-color: rgba(192,57,43,0.4); color: #e8e6f0; }

    .oac-input-row {
      padding: 10px 12px;
      display: flex;
      gap: 8px;
      background: #111318;
      border-top: 1px solid rgba(255,255,255,0.06);
      flex-shrink: 0;
    }
    .oac-input-row textarea {
      flex: 1;
      background: #1a1d26;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      padding: 8px 12px;
      color: #e8e6f0;
      font-size: 13px;
      font-family: 'IBM Plex Sans', sans-serif;
      resize: none;
      outline: none;
      max-height: 80px;
      transition: border-color 0.15s;
    }
    .oac-input-row textarea:focus { border-color: rgba(192,57,43,0.5); }
    .oac-input-row textarea::placeholder { color: rgba(232,230,240,0.2); }
    .oac-send {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: #c0392b;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      align-self: flex-end;
      transition: background 0.15s, transform 0.1s;
    }
    .oac-send:hover { background: #a93226; }
    .oac-send:active { transform: scale(0.93); }
    .oac-send:disabled { opacity: 0.4; cursor: default; }
    .oac-send svg { width: 16px; height: 16px; }

    @media (max-width: 440px) {
      #oac-panel { width: calc(100vw - 24px); right: 12px; bottom: 88px; }
      #oac-widget-btn { right: 16px; bottom: 16px; }
    }
  `;

  // ─── BASE DE CONOCIMIENTO INDEXADA ────────────────────────────────────────
  const SEARCH_INDEX = [
    { section: "Objetivo General", text: "Analizar el problema de los robos en Argentina como fenómeno estructural y multicausal, considerando fluctuaciones macroeconómicas, pobreza estructural y mercados ilegales." },
    { section: "El Fenómeno Reiterado", text: "Sucesión rápida de delitos predatorios como 'motochorro' o 'piraña' en un radio geográfico acotado por los mismos actores, maximizando la ganancia antes de la respuesta policial." },
    { section: "Causas Estructurales", text: "Pobreza extrema, segregación espacial y desigualdad son las causas raíz. A nivel intermedio: mercados ilícitos, deserción escolar y adicciones. A nivel inmediato: oportunidad, falta de vigilancia y armas." },
    { section: "Análisis Territorial — Centro", text: "El Centro y Nueva Córdoba concentran víctimas con bienes de alto valor (celulares, notebooks). La traza urbana facilita escape hacia el río. Modalidad predominante: arrebato y motochorro." },
    { section: "Análisis Territorial — Periferia", text: "Los barrios periféricos en el anillo de Circunvalación tienen mayor incidencia de robos domiciliarios (entraderas) y robos de vehículos, facilitados por vías rápidas de escape y menor patrullaje." },
    { section: "Zonas de Fricción", text: "Áreas donde colisionan desarrollos inmobiliarios cerrados con barrios de alta vulnerabilidad, generando dinámicas de robo predatorio oportunista cruzando fronteras urbanas invisibles." },
    { section: "Víctimas Frecuentes", text: "Transeúntes de 18 a 35 años en zonas céntricas y universitarias, con alta victimización femenina. También conductores y repartidores de apps en semáforos y zonas de transición." },
    { section: "Menores — Trayectoria de Riesgo", text: "La trayectoria incluye exclusión temprana (NBI, violencia), ruptura institucional (abandono escolar), vida en la calle con consumos problemáticos, y reclutamiento ilícito por adultos u organizaciones." },
    { section: "Menores — Lógicas del Accionar", text: "El delito en jóvenes combina componentes expresivos (demostración ante pares, identidad) con instrumentales (ganancia económica). La falta de proyección a futuro reduce la eficacia disuasoria de las penas." },
    { section: "Respuestas Preventivas — Menores", text: "Se propone alerta temprana en escuelas por ausentismo, justicia restaurativa para primeros delitos, e intervención multi-agencial combinando Salud, Desarrollo Social y Educación." },
    { section: "Factores de Protección", text: "Redes de contención barrial, adultos referentes positivos, espacios públicos mantenidos, iluminación efectiva, actividad comercial mixta y policía de proximidad validada por la comunidad." },
    { section: "Conclusión", text: "Los robos reiterados son el síntoma de un quiebre en la matriz social y urbana. La respuesta punitiva clásica es insuficiente sin desarticulación de mercados ilegales y prevención temprana." },
    { section: "Vacíos de Información", text: "Existe carencia de datos georeferenciados públicos y auditables en tiempo real, y falta de estudios longitudinales sobre reincidencia de jóvenes en el sistema penal post-2023." },
    { section: "Contexto Nacional", text: "Fluctuaciones macroeconómicas e inflación sostenida (2016-2026), expansión de pobreza estructural, consolidación de mercados ilegales transnacionales y saturación del sistema penitenciario." },
  ];

  // ─── LÓGICA ───────────────────────────────────────────────────────────────
  function search(query) {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return SEARCH_INDEX.filter(item => {
      const t = (item.section + " " + item.text).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return q.split(" ").every(w => t.includes(w));
    }).slice(0, 5);
  }

  function highlight(text, query) {
    if (!query) return text;
    const words = query.split(" ").filter(Boolean);
    let result = text;
    words.forEach(w => {
      const re = new RegExp(`(${w})`, "gi");
      result = result.replace(re, "<mark>$1</mark>");
    });
    return result;
  }

  // ─── BUILD UI ─────────────────────────────────────────────────────────────
  function init() {
    // Inject styles
    const styleEl = document.createElement("style");
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);

    // Button
    const btn = document.createElement("button");
    btn.id = "oac-widget-btn";
    btn.setAttribute("aria-label", "Abrir asistente IA");
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
    </svg>`;
    document.body.appendChild(btn);

    // Panel
    const panel = document.createElement("div");
    panel.id = "oac-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Asistente IA del Observatorio");
    panel.innerHTML = `
      <div class="oac-header">
        <div class="oac-header-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
            <path d="M12 8v4l3 3"/>
          </svg>
        </div>
        <div class="oac-header-text">
          <h4>Asistente IA — Observatorio Criminal</h4>
          <p>Búsqueda + preguntas sobre el análisis</p>
        </div>
        <button class="oac-close" id="oac-close" aria-label="Cerrar">×</button>
      </div>

      <div class="oac-tabs">
        <button class="oac-tab active" data-tab="search">🔍 Buscar</button>
        <button class="oac-tab" data-tab="chat">💬 Preguntar</button>
      </div>

      <!-- SEARCH PANE -->
      <div class="oac-pane active" id="oac-pane-search">
        <div class="oac-search-box">
          <div class="oac-search-input-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="text" id="oac-search-input" placeholder="Ej: menores, zonas de riesgo, causas..." autocomplete="off"/>
          </div>
        </div>
        <div class="oac-search-results" id="oac-search-results">
          <div class="oac-search-empty">Escribí una palabra para buscar en el análisis</div>
        </div>
      </div>

      <!-- CHAT PANE -->
      <div class="oac-pane" id="oac-pane-chat">
        <div class="oac-messages" id="oac-messages">
          <div class="oac-msg bot">
            <div class="oac-bubble">Hola. Soy el asistente IA de este análisis. Podés preguntarme sobre causas del delito, zonas de Córdoba, menores, intervenciones o cualquier tema del sitio.</div>
          </div>
        </div>
        <div class="oac-quick-bar" id="oac-quick-bar"></div>
        <div class="oac-input-row">
          <textarea id="oac-chat-input" rows="1" placeholder="Hacé tu pregunta..."></textarea>
          <button class="oac-send" id="oac-send" aria-label="Enviar">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(panel);

    // Quick questions
    const quickBar = panel.querySelector("#oac-quick-bar");
    CONFIG.quickQuestions.forEach(q => {
      const b = document.createElement("button");
      b.className = "oac-quick";
      b.textContent = q;
      b.onclick = () => { sendChat(q); };
      quickBar.appendChild(b);
    });

    // Events
    let isOpen = false;
    btn.onclick = () => {
      isOpen = !isOpen;
      panel.classList.toggle("oac-open", isOpen);
      if (isOpen) {
        const activeTab = panel.querySelector(".oac-tab.active").dataset.tab;
        if (activeTab === "search") document.getElementById("oac-search-input").focus();
        else document.getElementById("oac-chat-input").focus();
      }
    };
    document.getElementById("oac-close").onclick = () => {
      isOpen = false;
      panel.classList.remove("oac-open");
    };

    // Tabs
    panel.querySelectorAll(".oac-tab").forEach(tab => {
      tab.onclick = () => {
        panel.querySelectorAll(".oac-tab").forEach(t => t.classList.remove("active"));
        panel.querySelectorAll(".oac-pane").forEach(p => p.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById("oac-pane-" + tab.dataset.tab).classList.add("active");
        if (tab.dataset.tab === "search") document.getElementById("oac-search-input").focus();
        else document.getElementById("oac-chat-input").focus();
      };
    });

    // Search
    let searchTimeout;
    document.getElementById("oac-search-input").addEventListener("input", function () {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => renderSearch(this.value), 200);
    });

    // Chat
    const chatInput = document.getElementById("oac-chat-input");
    chatInput.addEventListener("keydown", e => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendChat(); }
    });
    chatInput.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = Math.min(this.scrollHeight, 80) + "px";
    });
    document.getElementById("oac-send").onclick = () => sendChat();
  }

  function renderSearch(query) {
    const container = document.getElementById("oac-search-results");
    if (!query || query.length < 2) {
      container.innerHTML = '<div class="oac-search-empty">Escribí una palabra para buscar en el análisis</div>';
      return;
    }
    const results = search(query);
    if (!results.length) {
      container.innerHTML = '<div class="oac-search-empty">Sin resultados para "' + query + '"</div>';
      return;
    }
    container.innerHTML = results.map(r => `
      <div class="oac-result-item">
        <div class="oac-result-section">${r.section}</div>
        <div class="oac-result-text">${highlight(r.text, query)}</div>
      </div>
    `).join("");
  }

  let history = [];
  let isChatting = false;

  async function sendChat(preset) {
    const input = document.getElementById("oac-chat-input");
    const text = preset || input.value.trim();
    if (!text || isChatting) return;

    input.value = "";
    input.style.height = "auto";
    addMsg("user", text);
    history.push({ role: "user", content: text });

    showTyping();
    isChatting = true;
    document.getElementById("oac-send").disabled = true;

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${CONFIG.API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          max_tokens: 800,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...history
          ]
        })
      });

      if (!res.ok) {
        const e = await res.json();
        throw new Error(e?.error?.message || "Error de API");
      }

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "No pude generar una respuesta. Intentá de nuevo.";
      history.push({ role: "assistant", content: reply });
      hideTyping();
      addMsg("bot", reply);
    } catch(err) {
      hideTyping();
      addMsg("bot", "Error: " + (err?.message || "Verificá la API key de OpenRouter"));
    }

    isChatting = false;
    document.getElementById("oac-send").disabled = false;
  }

  function addMsg(type, text) {
    const container = document.getElementById("oac-messages");
    const div = document.createElement("div");
    div.className = `oac-msg ${type}`;
    div.innerHTML = `<div class="oac-bubble">${text.replace(/\n/g, "<br>")}</div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function showTyping() {
    const container = document.getElementById("oac-messages");
    const div = document.createElement("div");
    div.className = "oac-msg bot";
    div.id = "oac-typing";
    div.innerHTML = `<div class="oac-typing"><span></span><span></span><span></span></div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById("oac-typing");
    if (el) el.remove();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
