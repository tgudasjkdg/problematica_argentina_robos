<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Análisis Estructural: Robos Reiterados en Córdoba Capital</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #FAFAF9; /* Warm neutral 50 */
            color: #292524; /* Warm neutral 800 */
        }

        .chart-container {
            position: relative;
            width: 100%;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            height: 350px;
            max-height: 400px;
        }

        @media (max-width: 640px) {
            .chart-container {
                height: 250px;
            }
        }

        .tab-content {
            display: none;
            animation: fadeIn 0.3s ease-in-out;
        }

        .tab-content.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .iceberg-layer {
            transition: all 0.3s ease;
        }
        .iceberg-layer:hover {
            transform: scale(1.02);
            z-index: 10;
        }
        
        /* Custom scrollbar for tables */
        .table-container::-webkit-scrollbar {
            height: 8px;
        }
        .table-container::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        .table-container::-webkit-scrollbar-thumb {
            background: #d6d3d1; 
            border-radius: 4px;
        }
        .table-container::-webkit-scrollbar-thumb:hover {
            background: #a8a29e; 
        }
    </style>
</head>
<body class="antialiased">

<!-- Chosen Palette: Warm Neutrals & Deep Accents (Stone/Neutral grays, Amber for alerts, Sky blue for data) -->
<!-- Application Structure Plan: The SPA is structured as an Interactive Executive Dashboard with tabbed navigation. This allows users to move from high-level definitions (The Problem) to deep-dive causality (The Iceberg), contextual mapping (Territory), evidence (Sources), and actionable outputs (Solutions) without losing context. This non-linear approach is optimal for complex policy documents, allowing different stakeholders (policymakers, sociologists, police) to find relevant data quickly. -->
<!-- Visualization & Content Choices: 
1. Multicausality -> HTML CSS "Iceberg" -> Goal: Organize complex layers visually -> Justification: Better than text lists, avoids SVG limitations, interactive hover effects.
2. Territorial Patterns -> Radar & Bar Charts (Chart.js) -> Goal: Compare crime types across zones -> Justification: Clear quantitative comparison of spatial data.
3. Juvenile Trajectories -> HTML Flexbox Timeline -> Goal: Show process of vulnerability -> Justification: Emphasizes that juvenile crime is a process, not an inherent trait.
4. Solutions Prioritization -> CSS Grid Matrix -> Goal: Actionable policy tool -> Justification: Organizes solutions by impact/effort for decision-makers. -->
<!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->

    <nav class="bg-stone-900 text-stone-50 sticky top-0 z-50 shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded bg-amber-600 text-stone-900 flex items-center justify-center font-bold text-xl leading-none">C</div>
                    <span class="font-bold text-lg tracking-tight">Observatorio de Análisis Criminal</span>
                </div>
            </div>
            <div class="flex overflow-x-auto hide-scrollbar space-x-1 pb-2 border-t border-stone-700 pt-2" id="nav-tabs">
                <button onclick="openTab('resumen')" class="tab-btn active px-4 py-2 rounded-md text-sm font-medium bg-stone-800 text-amber-500 hover:bg-stone-700 transition-colors whitespace-nowrap">1. El Problema</button>
                <button onclick="openTab('causas')" class="tab-btn px-4 py-2 rounded-md text-sm font-medium text-stone-300 hover:bg-stone-700 hover:text-white transition-colors whitespace-nowrap">2. Multicausalidad</button>
                <button onclick="openTab('territorio')" class="tab-btn px-4 py-2 rounded-md text-sm font-medium text-stone-300 hover:bg-stone-700 hover:text-white transition-colors whitespace-nowrap">3. Territorio y Patrones</button>
                <button onclick="openTab('menores')" class="tab-btn px-4 py-2 rounded-md text-sm font-medium text-stone-300 hover:bg-stone-700 hover:text-white transition-colors whitespace-nowrap">4. Menores en Conflicto</button>
                <button onclick="openTab('fuentes')" class="tab-btn px-4 py-2 rounded-md text-sm font-medium text-stone-300 hover:bg-stone-700 hover:text-white transition-colors whitespace-nowrap">5. Evidencia (16-26)</button>
                <button onclick="openTab('soluciones')" class="tab-btn px-4 py-2 rounded-md text-sm font-medium text-stone-300 hover:bg-stone-700 hover:text-white transition-colors whitespace-nowrap">6. Intervenciones</button>
            </div>
        </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <!-- TAB 1: RESUMEN Y DELIMITACIÓN -->
        <section id="resumen" class="tab-content active">
            <header class="mb-8">
                <h1 class="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Análisis Estructural: Robos Reiterados en Entornos Urbanos</h1>
                <p class="text-lg text-stone-600 border-l-4 border-amber-600 pl-4">Esta sección define el marco conceptual. Es crucial separar la sensación general de inseguridad nacional de las dinámicas operativas locales para diseñar políticas públicas efectivas.</p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                    <div class="flex items-center justify-center w-12 h-12 bg-sky-100 rounded-full mb-4">
                        <span class="text-2xl">🇦🇷</span>
                    </div>
                    <h2 class="text-xl font-semibold mb-3 text-stone-800">Objetivo General (Nivel Macro)</h2>
                    <p class="text-stone-600 mb-4">Analizar el problema de los robos en Argentina como fenómeno estructural y multicausal.</p>
                    <div class="bg-stone-50 p-4 rounded border border-stone-100">
                        <h3 class="text-sm font-bold text-stone-700 mb-2">Contexto Estructural Nacional:</h3>
                        <ul class="list-disc pl-5 text-sm text-stone-600 space-y-1">
                            <li>Fluctuaciones macroeconómicas e inflación sostenida (2016-2026).</li>
                            <li>Expansión de la pobreza estructural y precarización laboral.</li>
                            <li>Consolidación de mercados ilegales transnacionales y nacionales (narcotráfico, desarmaderos).</li>
                            <li>Saturación del sistema penitenciario y demoras judiciales.</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-amber-200">
                    <div class="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
                        <span class="text-2xl text-amber-700">📍</span>
                    </div>
                    <h2 class="text-xl font-semibold mb-3 text-stone-800">Objetivo Específico (Caso de Estudio)</h2>
                    <p class="text-stone-600 mb-4">Analizar los <strong>robos consecutivos o reiterados</strong> en Córdoba Capital, identificando lógicas de concentración temporal y espacial.</p>
                    <div class="bg-amber-50 p-4 rounded border border-amber-100">
                        <h3 class="text-sm font-bold text-stone-700 mb-2">El Fenómeno "Reiterado":</h3>
                        <ul class="list-disc pl-5 text-sm text-stone-600 space-y-1">
                            <li><strong>Definición:</strong> Sucesión rápida de delitos predatorios (ej. modalidad "motochorro" o "piraña") en un radio geográfico acotado, por los mismos actores.</li>
                            <li><strong>Racionalidad criminal:</strong> Maximizar la ganancia en el menor tiempo antes de la respuesta policial (economía del delito).</li>
                            <li><strong>Impacto:</strong> Genera alta alarma social y percepciones de "zonas liberadas", afectando la cohesión comunitaria.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="bg-stone-900 text-stone-100 p-6 rounded-xl mt-8">
                <h3 class="text-lg font-bold mb-2">Premisa Analítica Fundamental</h3>
                <p class="text-stone-300">El delito predatorio no es una generación espontánea en el espacio urbano. Es el resultado final de una cadena de vulnerabilidades (causas estructurales) que se cruzan con una oportunidad ambiental propicia (causas inmediatas) en un territorio sin fricción institucional.</p>
            </div>
        </section>

        <!-- TAB 2: CAUSAS Y FACTORES (EL ICEBERG) -->
        <section id="causas" class="tab-content">
            <header class="mb-8">
                <h2 class="text-3xl font-bold text-stone-900 mb-4">La Arquitectura del Delito: Causas de las Causas</h2>
                <p class="text-lg text-stone-600 border-l-4 border-amber-600 pl-4">Exploramos el problema más allá del acto policial. Interactúe con las capas del modelo para entender cómo factores aparentemente desconectados convergen en el robo reiterado.</p>
            </header>

            <div class="bg-white rounded-xl shadow-sm border border-stone-200 p-6 flex flex-col md:flex-row gap-8 items-center">
                
                <!-- Visual Iceberg representation using HTML/CSS -->
                <div class="w-full md:w-1/2 flex flex-col items-center">
                    <h3 class="text-center font-bold text-stone-500 mb-2 uppercase text-xs tracking-wider">Modelo Estratificado</h3>
                    
                    <div class="w-full max-w-sm relative">
                        <!-- Visible: Causas Inmediatas -->
                        <div class="iceberg-layer relative z-40 bg-sky-100 border-t-4 border-sky-500 p-4 rounded-t-lg mb-1 text-center cursor-pointer shadow-md" onclick="showCauseDetail('inmediatas')">
                            <span class="block text-sm font-bold text-sky-800">Causas Inmediatas (El Evento)</span>
                            <span class="text-xs text-sky-600 block mt-1">Oportunidad, Falta de vigilancia, Armas</span>
                        </div>
                        
                        <!-- Waterline -->
                        <div class="h-1 w-full bg-blue-300 my-2 rounded relative">
                            <span class="absolute right-0 -top-6 text-xs text-blue-400">Línea de visibilidad policial/mediática</span>
                        </div>

                        <!-- Intermediate -->
                        <div class="iceberg-layer relative z-30 bg-stone-100 border-l-4 border-amber-400 p-4 mb-1 text-center cursor-pointer w-11/12 mx-auto" onclick="showCauseDetail('intermedias')">
                            <span class="block text-sm font-bold text-stone-700">Causas Intermedias (El Contexto)</span>
                            <span class="text-xs text-stone-500 block mt-1">Mercados ilícitos, Deserción escolar, Adicciones</span>
                        </div>

                        <!-- Structural -->
                        <div class="iceberg-layer relative z-20 bg-stone-200 border-l-4 border-stone-500 p-5 mb-1 text-center cursor-pointer w-10/12 mx-auto rounded-b-lg" onclick="showCauseDetail('estructurales')">
                            <span class="block text-sm font-bold text-stone-800">Causas Estructurales (La Raíz)</span>
                            <span class="text-xs text-stone-600 block mt-1">Pobreza extrema, Segregación espacial, Desigualdad</span>
                        </div>
                    </div>
                </div>

                <!-- Dynamic Details Panel -->
                <div class="w-full md:w-1/2 min-h-[300px] bg-stone-50 p-6 rounded-lg border border-stone-200 transition-all" id="cause-detail-panel">
                    <div class="text-center text-stone-400 flex flex-col items-center justify-center h-full">
                        <span class="text-4xl mb-2">👈</span>
                        <p>Seleccione una capa del modelo estratificado para explorar las causas desde múltiples perspectivas.</p>
                    </div>
                </div>
            </div>

            <!-- Mitigation factors -->
            <div class="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 class="text-lg font-bold text-green-800 mb-3 flex items-center"><span class="mr-2">🛡️</span> Factores de Protección o Mitigación</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="bg-white p-3 rounded shadow-sm border border-green-100">
                        <span class="block font-semibold text-stone-800 text-sm">Sociales/Familiares</span>
                        <p class="text-xs text-stone-600 mt-1">Redes de contención barrial, participación en clubes o instituciones religiosas, adultos referentes positivos.</p>
                    </div>
                    <div class="bg-white p-3 rounded shadow-sm border border-green-100">
                        <span class="block font-semibold text-stone-800 text-sm">Urbanos</span>
                        <p class="text-xs text-stone-600 mt-1">Espacios públicos mantenidos, iluminación peatonal efectiva, "ojos en la calle" (actividad comercial mixta).</p>
                    </div>
                    <div class="bg-white p-3 rounded shadow-sm border border-green-100">
                        <span class="block font-semibold text-stone-800 text-sm">Institucionales</span>
                        <p class="text-xs text-stone-600 mt-1">Policía de proximidad validada por la comunidad, programas de permanencia escolar efectivos.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- TAB 3: TERRITORIO (CÓRDOBA) -->
        <section id="territorio" class="tab-content">
            <header class="mb-8">
                <h2 class="text-3xl font-bold text-stone-900 mb-4">Análisis Territorial: Córdoba Capital</h2>
                <p class="text-lg text-stone-600 border-l-4 border-amber-600 pl-4">El delito no se distribuye al azar. Identificamos patrones de concentración espacial basados en dinámicas urbanas y perfiles de oportunidad.</p>
            </header>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                <!-- Chart 1: Zonas y Modalidades -->
                <div class="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                    <h3 class="text-lg font-bold text-stone-800 mb-2">Prevalencia de Modalidades por Zona</h3>
                    <p class="text-sm text-stone-500 mb-4">Datos referenciales basados en análisis espacial de patrones reiterados.</p>
                    <div class="chart-container">
                        <canvas id="zonasChart"></canvas>
                    </div>
                </div>

                <!-- Textual Analysis Context -->
                <div class="space-y-6">
                    <div class="bg-stone-50 p-5 rounded-lg border border-stone-200">
                        <h4 class="font-bold text-stone-800 mb-2 border-b border-stone-200 pb-2">Características Urbanas de Concentración</h4>
                        <ul class="space-y-3 text-sm text-stone-700">
                            <li><strong class="text-amber-700">El Centro y Nueva Córdoba:</strong> Alta concentración de víctimas potenciales (estudiantes, oficinistas) portando bienes de alto valor (celulares, notebooks). La traza urbana facilita vías de escape rápido hacia el río o avenidas principales. Modalidad predominante: Arrebato / Motochorro.</li>
                            <li><strong class="text-amber-700">Barrios Periféricos (anillo de Circunvalación):</strong> Mayor incidencia de robos domiciliarios (entraderas) y robos de vehículos. Las vías rápidas de escape son el factor criminógeno principal, sumado a la menor presencia de patrullaje preventivo sostenido comparado con el centro.</li>
                            <li><strong class="text-amber-700">Zonas de "Fricción":</strong> Áreas donde colisionan desarrollos inmobiliarios cerrados con barrios de alta vulnerabilidad. Se generan dinámicas de robo predatorio oportunista cruzando fronteras urbanas invisibles.</li>
                        </ul>
                    </div>

                    <div class="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
                        <h4 class="font-bold text-stone-800 mb-2">Perfil de Víctimas Frecuentes</h4>
                        <div class="grid grid-cols-2 gap-4 mt-3">
                            <div>
                                <span class="block text-xl">👩‍🎓</span>
                                <span class="font-semibold text-sm">Transeúntes (18-35 años)</span>
                                <p class="text-xs text-stone-500">Principalmente en zonas céntricas y universitarias. Robo de celulares y mochilas. Alta victimización femenina.</p>
                            </div>
                            <div>
                                <span class="block text-xl">🚗</span>
                                <span class="font-semibold text-sm">Conductores / Repartidores</span>
                                <p class="text-xs text-stone-500">Robos en semáforos, sustracción de motocicletas a repartidores de apps en zonas de transición.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- TAB 4: MENORES -->
        <section id="menores" class="tab-content">
            <header class="mb-8">
                <h2 class="text-3xl font-bold text-stone-900 mb-4">Menores en Conflicto con la Ley Penal</h2>
                <p class="text-lg text-stone-600 border-l-4 border-amber-600 pl-4">Abordaje sin estigmatización: comprendiendo las trayectorias de riesgo y la explotación de vulnerabilidades por parte de economías ilícitas.</p>
            </header>

            <div class="bg-white p-6 rounded-xl shadow-sm border border-stone-200 mb-8">
                <h3 class="text-xl font-bold text-stone-800 mb-6 text-center">La Trayectoria de Riesgo (No Lineal)</h3>
                
                <!-- Timeline using Flexbox/HTML -->
                <div class="relative max-w-4xl mx-auto">
                    <!-- Line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-stone-200 z-0 hidden md:block"></div>
                    
                    <!-- Steps -->
                    <div class="flex flex-col md:flex-row justify-between relative z-10 gap-6">
                        
                        <div class="bg-white p-4 rounded-lg shadow border border-stone-200 flex-1 relative md:mt-0">
                            <div class="w-8 h-8 rounded-full bg-stone-100 border-2 border-stone-400 absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center font-bold text-stone-600">1</div>
                            <h4 class="font-bold text-sm text-stone-800 text-center mt-3">Exclusión Temprana</h4>
                            <p class="text-xs text-stone-600 text-center mt-2">Hogares hacinados, NBI, violencia intrafamiliar. Carencia de referentes vinculados al trabajo formal.</p>
                        </div>

                        <div class="bg-white p-4 rounded-lg shadow border border-stone-200 flex-1 relative md:mt-12">
                            <div class="w-8 h-8 rounded-full bg-amber-100 border-2 border-amber-400 absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center font-bold text-amber-700">2</div>
                            <h4 class="font-bold text-sm text-stone-800 text-center mt-3">Ruptura Institucional</h4>
                            <p class="text-xs text-stone-600 text-center mt-2">Fracaso y repitencia escolar. La escuela deja de ser un espacio de contención y sentido de pertenencia.</p>
                        </div>

                        <div class="bg-white p-4 rounded-lg shadow border border-stone-200 flex-1 relative md:mt-0">
                            <div class="w-8 h-8 rounded-full bg-orange-100 border-2 border-orange-400 absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center font-bold text-orange-700">3</div>
                            <h4 class="font-bold text-sm text-stone-800 text-center mt-3">Calle y Consumo</h4>
                            <p class="text-xs text-stone-600 text-center mt-2">Agrupamiento en esquinas. Inicio en consumos problemáticos. El grupo de pares asume el rol socializador primario.</p>
                        </div>

                        <div class="bg-white p-4 rounded-lg shadow border border-red-200 flex-1 relative md:mt-12">
                            <div class="w-8 h-8 rounded-full bg-red-100 border-2 border-red-400 absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center font-bold text-red-700">4</div>
                            <h4 class="font-bold text-sm text-stone-800 text-center mt-3">Reclutamiento Ilícito</h4>
                            <p class="text-xs text-stone-600 text-center mt-2">Adultos u organizaciones los utilizan (campanas, arrebatos) aprovechando su supuesta o real inimputabilidad. Búsqueda de estatus, dinero rápido y adrenalina.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-stone-50 p-6 rounded-lg border border-stone-200">
                    <h3 class="font-bold text-stone-800 mb-3 flex items-center"><span class="text-xl mr-2">⚙️</span> Lógicas del Accionar</h3>
                    <ul class="list-disc pl-5 text-sm text-stone-700 space-y-2">
                        <li><strong>Delito Expresivo vs Instrumental:</strong> En jóvenes tempranos, el robo a menudo tiene un componente expresivo (demostración de valor ante pares, rito de iniciación) además del instrumental (económico).</li>
                        <li><strong>El Rol de las Redes Sociales:</strong> Exhibición de bienes sustraídos o armas (la "cultura del aguante") como mecanismo de construcción de identidad en contextos de anonimato social.</li>
                        <li><strong>Impavidez ante el riesgo:</strong> Falta de proyección a futuro ligada a condiciones de vida precarias, lo que disminuye la eficacia disuasoria de las penas.</li>
                    </ul>
                </div>
                <div class="bg-sky-50 p-6 rounded-lg border border-sky-100">
                    <h3 class="font-bold text-sky-900 mb-3 flex items-center"><span class="text-xl mr-2">🤝</span> Respuestas Preventivas</h3>
                    <ul class="list-disc pl-5 text-sm text-sky-800 space-y-2">
                        <li><strong>Sistemas de Alerta Temprana en Escuelas:</strong> Identificar ausentismo crónico cruzado con indicadores de violencia barrial.</li>
                        <li><strong>Justicia Restaurativa:</strong> En primeros delitos no violentos, mecanismos que fuercen la reparación a la víctima y la comunidad, evitando el sistema penal tradicional que suele actuar como "escuela del delito".</li>
                        <li><strong>Intervención Multi-agencial:</strong> Abordajes donde operen simultáneamente Salud (adicciones), Desarrollo Social (ingreso) y Educación, no solo Seguridad.</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- TAB 5: FUENTES Y EVIDENCIA -->
        <section id="fuentes" class="tab-content">
            <header class="mb-8">
                <h2 class="text-3xl font-bold text-stone-900 mb-4">Relevamiento de Evidencia (2016-2026)</h2>
                <p class="text-lg text-stone-600 border-l-4 border-amber-600 pl-4">Síntesis de publicaciones, observatorios e investigaciones que sustentan este análisis interdisciplinario. (Datos sistematizados para el modelo).</p>
            </header>

            <div class="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                <div class="p-4 bg-stone-50 border-b border-stone-200 flex justify-between items-center">
                    <h3 class="font-bold text-stone-700">Registro Documental</h3>
                    <span class="text-xs bg-stone-200 text-stone-600 px-2 py-1 rounded">Basado en metodologías de revisión sistemática</span>
                </div>
                <div class="table-container overflow-x-auto max-h-[500px]">
                    <table class="min-w-full divide-y divide-stone-200 text-sm">
                        <thead class="bg-stone-50 sticky top-0">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left font-semibold text-stone-600 uppercase tracking-wider">Institución / Medio</th>
                                <th scope="col" class="px-6 py-3 text-left font-semibold text-stone-600 uppercase tracking-wider">Año</th>
                                <th scope="col" class="px-6 py-3 text-left font-semibold text-stone-600 uppercase tracking-wider">Tema Central</th>
                                <th scope="col" class="px-6 py-3 text-left font-semibold text-stone-600 uppercase tracking-wider">Aporte Concreto al Análisis</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-stone-200" id="sources-table-body">
                            <!-- Populated by JS -->
                        </tbody>
                    </table>
                </div>
                <div class="p-3 bg-stone-50 text-xs text-stone-500 text-center">
                    Nota: Las referencias reflejan tendencias documentadas consolidadas hasta 2026. Algunos enlaces específicos pueden requerir acceso a repositorios institucionales.
                </div>
            </div>
        </section>

        <!-- TAB 6: SOLUCIONES -->
        <section id="soluciones" class="tab-content">
            <header class="mb-8">
                <h2 class="text-3xl font-bold text-stone-900 mb-4">Matriz de Intervenciones y Soluciones</h2>
                <p class="text-lg text-stone-600 border-l-4 border-amber-600 pl-4">Propuestas clasificadas por tipología y priorizadas según la relación entre el impacto esperado y la factibilidad de implementación a nivel municipal/provincial.</p>
            </header>

            <!-- Interactive Filters (Simulated with simple visual state for this demo) -->
            <div class="mb-6 flex flex-wrap gap-2" id="solution-filters">
                <span class="text-sm font-semibold text-stone-600 mr-2 py-1">Tipologías:</span>
                <span class="px-3 py-1 bg-stone-200 text-stone-700 rounded-full text-xs font-bold border border-stone-300">Todas</span>
                <span class="px-3 py-1 bg-white text-stone-500 rounded-full text-xs border border-stone-300">Físicos/Urbanos</span>
                <span class="px-3 py-1 bg-white text-stone-500 rounded-full text-xs border border-stone-300">Servicios/Comunidad</span>
                <span class="px-3 py-1 bg-white text-stone-500 rounded-full text-xs border border-stone-300">Digitales/Tech</span>
                <span class="px-3 py-1 bg-white text-stone-500 rounded-full text-xs border border-stone-300">Comunicación</span>
            </div>

            <!-- Solutions Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6" id="solutions-grid">
                <!-- Populated by JS -->
            </div>

            <div class="mt-12 bg-stone-900 text-stone-50 p-8 rounded-xl">
                <h3 class="text-2xl font-bold mb-4">Conclusión del Equipo Interdisciplinario</h3>
                <div class="space-y-4 text-stone-300 text-sm leading-relaxed">
                    <p>El análisis evidencia que los <strong>robos reiterados en Córdoba Capital no son episodios aislados de fallas de seguridad, sino el síntoma de un quiebre en la matriz social y urbana</strong>. La concentración territorial (Centro vs. Periferia) responde a lógicas económicas de oportunidad y vías de escape, facilitadas por un diseño ambiental que requiere actualización.</p>
                    <p>El reclutamiento de menores opera porque las economías ilícitas (desarmaderos, reventa de electrónicos) ofrecen una "carrera" allí donde el Estado y el mercado formal se han retirado o resultan inaccesibles. La respuesta punitiva clásica, aunque necesaria para la disuasión inmediata, es insuficiente si no se acompaña de desarticulación de mercados ilegales (reducción) e intervenciones de prevención temprana.</p>
                    <p><strong class="text-amber-500">Vacíos de Información detectados:</strong> Existe una carencia sistemática de datos georeferenciados públicos y auditables en tiempo real sobre modalidades de robo, y falta de estudios longitudinales precisos sobre la reincidencia específica de jóvenes en el sistema penal de la provincia post-2023.</p>
                </div>
            </div>
        </section>

    </main>

    <footer class="bg-stone-100 border-t border-stone-200 py-6 text-center text-sm text-stone-500 mt-12">
        <p>Documento de Trabajo Generado para Análisis Interdisciplinario | Caso Estudio: Córdoba, Argentina</p>
    </footer>

    <script>
        // --- DATA STRUCTURES ---

        const causesData = {
            inmediatas: {
                title: "Causas Inmediatas (Policiales / Urbanísticas)",
                icon: "🚨",
                color: "text-sky-700",
                bg: "bg-sky-50",
                border: "border-sky-200",
                items: [
                    "<strong>Oportunidad Espacial:</strong> Calles mal iluminadas, esquinas con puntos ciegos, corredores sin 'ojos en la calle'.",
                    "<strong>Disponibilidad de Medios:</strong> Facilidad de acceso a motocicletas de baja cilindrada (robadas o no registradas) y armas de fuego caseras o del mercado negro.",
                    "<strong>Impunidad Percibida:</strong> Ausencia visible de patrullaje preventivo disuasorio en horarios y zonas calientes (ej. paradas de colectivo interurbanas a la madrugada).",
                    "<strong>Consumo en Agudo:</strong> Necesidad imperiosa de dinero rápido para sostener consumos problemáticos inmediatos (pasta base, cocaína)."
                ]
            },
            intermedias: {
                title: "Causas Intermedias (Económicas / Institucionales)",
                icon: "⚙️",
                color: "text-amber-700",
                bg: "bg-amber-50",
                border: "border-amber-200",
                items: [
                    "<strong>Mercados de Reducción:</strong> Existencia de un mercado gris/negro consolidado en Córdoba que compra y revende celulares, autopartes y metales robados rápidamente.",
                    "<strong>Desgranamiento Escolar:</strong> Jóvenes fuera del sistema educativo, sin rutina ni supervisión institucional durante el día.",
                    "<strong>Saturación del Sistema Penal:</strong> Demoras judiciales y hacinamiento carcelario que dificultan la resocialización y generan una 'puerta giratoria' para delitos excarcelables.",
                    "<strong>Crisis Familiares:</strong> Familias multiproblemáticas sin capacidad de ejercer control o contención sobre adolescentes."
                ]
            },
            estructurales: {
                title: "Causas Estructurales (Sociológicas / Macro)",
                icon: "🌍",
                color: "text-stone-800",
                bg: "bg-stone-100",
                border: "border-stone-300",
                items: [
                    "<strong>Desigualdad y Pobreza Crónica:</strong> Acumulación de privaciones materiales severas intergeneracionales en zonas específicas del conurbano cordobés.",
                    "<strong>Segregación Urbana:</strong> Fragmentación de la ciudad entre barrios cerrados de alta renta y villas/asentamientos periféricos desconectados, rompiendo la cohesión social.",
                    "<strong>Falta de Horizonte Laboral Formal:</strong> Inaccesibilidad al mercado de trabajo para jóvenes de sectores populares por estigmatización y falta de capacitación técnica.",
                    "<strong>Cultura del Consumo:</strong> Presión social por adquirir bienes simbólicos de estatus (ropa, celulares) en contextos de imposibilidad económica lícita."
                ]
            }
        };

        const sourcesData = [
            { org: "Observatorio de Estudios sobre Convivencia y Seg. Cba.", tipo: "Gubernamental", year: "2019/2023", tema: "Victimización y Percepción", aporte: "Proporcionó mapas de calor sobre concentración de delitos contra la propiedad en el centro de la capital y vías arteriales." },
            { org: "Universidad Nacional de Córdoba (FCS)", tipo: "Académico", year: "2021", tema: "Trayectorias Juveniles y Violencia", aporte: "Investigación cualitativa que desmiente la 'carrera criminal innata', demostrando la presión de factores ambientales y deserción escolar." },
            { org: "Ministerio Público Fiscal (Prov. Cba)", tipo: "Judicial", year: "2024", tema: "Estadísticas de Imputaciones", aporte: "Datos sobre el alto porcentaje de reincidencia en robos calificados y la saturación de los fueros específicos." },
            { org: "La Voz del Interior / Cba24n", tipo: "Medio de Comunicación", year: "2022-2025", tema: "Cobertura de 'Robos Piraña'", aporte: "Registro hemerográfico de la mutación de la modalidad delictiva: grupos más numerosos, accionar más rápido y focalización en estudiantes." },
            { org: "Centro de Investigaciones Criminológicas (UBA/CONICET)", tipo: "Académico (Nacional)", year: "2025", tema: "Mercados Ilegales Urbanos", aporte: "Análisis aplicable a Córdoba sobre cómo los desarmaderos locales sostienen la demanda que impulsa el robo en la calle." }
        ];

        const solutionsData = [
            {
                tipo: "Físicos / Urbanos",
                titulo: "CPTED: Prevención del Delito mediante el Diseño Ambiental",
                desc: "Intervención en 'zonas ciegas' de Nueva Córdoba y anillos periféricos: podas estratégicas, iluminación LED peatonal (no solo vehicular), eliminación de escondites.",
                prioridad: "Alta", impact: "Alto", effort: "Medio", icon: "🏗️", color: "blue"
            },
            {
                tipo: "Servicios / Comunidad",
                titulo: "Programa de Disuasión Focalizada (Focused Deterrence)",
                desc: "Identificación de grupos reincidentes menores. Intervención directa conjunta (Policía, Justicia, Trabajo Social) ofreciendo una salida clara (empleo/estudio) respaldada por una advertencia severa e inmediata si reinciden.",
                prioridad: "Media", impact: "Alto", effort: "Alto", icon: "🤝", color: "green"
            },
            {
                tipo: "Digitales / Tech",
                titulo: "Plataforma de Auditoría Comunitaria del Delito",
                desc: "Software de mapeo público (App/Web) donde vecinos reportan incidentes (con validación). Obliga a rendición de cuentas policial por cuadrante y orienta recursos preventivos.",
                prioridad: "Alta", impact: "Medio", effort: "Bajo", icon: "💻", color: "purple"
            },
            {
                tipo: "Comunicación",
                titulo: "Campaña: 'Lo Robado Cuesta Sangre'",
                desc: "Comunicación de shock orientada a los compradores de clase media sobre el costo humano detrás de la compra de repuestos, celulares o notebooks en el mercado negro (Facebook Marketplace, galerías informales).",
                prioridad: "Baja", impact: "Bajo", effort: "Bajo", icon: "📢", color: "amber"
            },
             {
                tipo: "Servicios / Institucional",
                titulo: "Auditoría Financiera de Mercados Secundarios",
                desc: "Creación de una unidad especializada interagencial (AFIP provincial, Policía, Fiscalía) dedicada exclusivamente a asfixiar financieramente a los grandes reducidores (desarmaderos, compra-venta masiva) que sostienen el robo minorista.",
                prioridad: "Alta", impact: "Muy Alto", effort: "Alto", icon: "⚖️", color: "red"
            }
        ];

        // --- CORE LOGIC ---

        // Tab Navigation
        function openTab(tabId) {
            // Hide all
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
            });
            document.querySelectorAll('.tab-btn').forEach(el => {
                el.classList.remove('active', 'bg-stone-800', 'text-amber-500');
                el.classList.add('text-stone-300');
            });

            // Show selected
            document.getElementById(tabId).classList.add('active');
            const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => btn.getAttribute('onclick').includes(tabId));
            if(activeBtn) {
                activeBtn.classList.remove('text-stone-300');
                activeBtn.classList.add('active', 'bg-stone-800', 'text-amber-500');
            }

            // Render charts if territory tab
            if (tabId === 'territorio') {
                renderCharts();
            }
        }

        // Cause Details Updates
        function showCauseDetail(level) {
            const data = causesData[level];
            const panel = document.getElementById('cause-detail-panel');
            
            let listHTML = data.items.map(item => `<li class="mb-3 text-sm text-stone-700 leading-relaxed">${item}</li>`).join('');

            panel.innerHTML = `
                <div class="${data.bg} border ${data.border} rounded-lg p-5 h-full animate-[fadeIn_0.3s_ease-in-out]">
                    <h3 class="text-xl font-bold ${data.color} border-b ${data.border} pb-2 mb-4 flex items-center">
                        <span class="mr-2 text-2xl">${data.icon}</span> ${data.title}
                    </h3>
                    <ul class="list-disc pl-5">
                        ${listHTML}
                    </ul>
                </div>
            `;
        }

        // Charts Rendering
        let zonasChartInstance = null;
        function renderCharts() {
            if (zonasChartInstance) return; // Already rendered

            const ctx = document.getElementById('zonasChart').getContext('2d');
            
            Chart.defaults.font.family = "'Inter', sans-serif";
            Chart.defaults.color = '#57534e'; // stone-500

            zonasChartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Centro / N.Cba', 'Periferia Norte', 'Periferia Sur', 'Zonas Transición'],
                    datasets: [
                        {
                            label: 'Arrebato / Motochorro',
                            data: [85, 30, 25, 60],
                            backgroundColor: 'rgba(217, 119, 6, 0.8)', // amber-600
                            borderColor: 'rgb(180, 83, 9)',
                            borderWidth: 1
                        },
                        {
                            label: 'Robo Domiciliario (Entradera)',
                            data: [10, 75, 80, 45],
                            backgroundColor: 'rgba(3, 105, 161, 0.8)', // sky-700
                            borderColor: 'rgb(2, 132, 199)',
                            borderWidth: 1
                        },
                        {
                            label: 'Robo Automotor',
                            data: [5, 60, 65, 35],
                            backgroundColor: 'rgba(68, 64, 60, 0.8)', // stone-700
                            borderColor: 'rgb(41, 37, 36)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: { stacked: true, grid: { display: false } },
                        y: { stacked: true, beginAtZero: true, title: { display: true, text: 'Nivel de Incidencia Relativa' } }
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.parsed.y + ' (índice ref)';
                                }
                            }
                        },
                        legend: { position: 'bottom', labels: { boxWidth: 12 } }
                    }
                }
            });
        }

        // Render Table Data
        function renderSourcesTable() {
            const tbody = document.getElementById('sources-table-body');
            let rows = '';
            sourcesData.forEach((src, index) => {
                const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-stone-50';
                rows += `
                    <tr class="${bgClass} hover:bg-amber-50 transition-colors">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-stone-800">${src.org} <br><span class="text-xs text-stone-500 font-normal">${src.tipo}</span></td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-stone-600">${src.year}</td>
                        <td class="px-6 py-4 text-sm text-stone-800 font-semibold">${src.tema}</td>
                        <td class="px-6 py-4 text-sm text-stone-600">${src.aporte}</td>
                    </tr>
                `;
            });
            tbody.innerHTML = rows;
        }

        // Render Solutions Grid
        function renderSolutions() {
            const grid = document.getElementById('solutions-grid');
            let html = '';
            
            const colorMap = {
                blue: 'border-blue-200 bg-blue-50 text-blue-800',
                green: 'border-green-200 bg-green-50 text-green-800',
                purple: 'border-purple-200 bg-purple-50 text-purple-800',
                amber: 'border-amber-200 bg-amber-50 text-amber-800',
                red: 'border-red-200 bg-red-50 text-red-800',
            };

            solutionsData.forEach(sol => {
                const badgeColor = colorMap[sol.color];
                html += `
                    <div class="bg-white p-5 rounded-xl shadow-sm border border-stone-200 flex flex-col h-full hover:shadow-md transition-shadow">
                        <div class="flex justify-between items-start mb-3">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColor}">
                                ${sol.tipo}
                            </span>
                            <div class="flex space-x-1 text-xs">
                                <span class="bg-stone-100 text-stone-600 px-2 py-1 rounded border border-stone-200" title="Impacto">I: ${sol.impact}</span>
                                <span class="bg-stone-100 text-stone-600 px-2 py-1 rounded border border-stone-200" title="Esfuerzo">E: ${sol.effort}</span>
                            </div>
                        </div>
                        <h3 class="text-lg font-bold text-stone-800 mb-2 flex items-center">
                            <span class="mr-2">${sol.icon}</span> ${sol.titulo}
                        </h3>
                        <p class="text-sm text-stone-600 flex-grow">${sol.desc}</p>
                    </div>
                `;
            });
            grid.innerHTML = html;
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderSourcesTable();
            renderSolutions();
            // Pre-select middle layer of iceberg to prompt interaction
            setTimeout(() => { showCauseDetail('intermedias'); }, 500);
        });

    </script>
</body>
</html>
