import { RequiredProduct } from '../types';

export const REQUIRED_PRODUCTS: RequiredProduct[] = [
  {
    id: 1,
    code: "PROD-01",
    title: "Informe de Análisis Organizacional",
    subtitle: "Caracterización de la unidad productiva y análisis estructural inicial",
    phaseId: "analisis",
    associatedAp: "AP1: Analizar la estructura organizacional de las organizaciones intervenidas",
    description: "Documento técnico inicial que recoge la caracterización general de la Mipyme o iniciativa productiva campesina, su reseña histórica, direccionamiento estratégico (misión, visión, valores), estructura orgánica, mapa de procesos y primeras oportunidades de mejora detectadas.",
    structure: [
      "1. Portada institucional SENA y datos de la empresa intervenida.",
      "2. Caracterización general: razón social, NIT, sector económico, ubicación geográfica y actividad productiva.",
      "3. Direccionamiento estratégico actual: misión, visión, principios corporativos y políticas.",
      "4. Estructura organizacional: organigrama funcional, descripción de cargos y líneas de mando.",
      "5. Identificación de procesos administrativos: mapa de procesos (estratégicos, misionales y de apoyo).",
      "6. Matriz de fortalezas y oportunidades de mejora preliminares."
    ],
    evaluationCriteria: [
      "Caracteriza la organización con rigurosidad técnica y veracidad en los datos.",
      "Grafica el mapa de procesos identificando entradas, actividades, salidas y clientes.",
      "Aplica la norma técnica GTC 185 en la redacción y presentación del informe escrito."
    ],
    campesenaFocus: "Aplicable a asociaciones campesinas (ej. ASOCAFÉ Santander) para visibilizar roles comunitarios, canales de acopio y cadena de valor local.",
    templateFormat: "Documento Word/PDF estructurado con organigrama y diagrama de procesos editable.",
    sampleEvidence: "Ejemplo: Caracterización de la Asociación Agropecuaria de la Serranía de San Gil, con 28 productores asociados y mapa de procesos de beneficio de café."
  },
  {
    id: 2,
    code: "PROD-02",
    title: "Informe de Diagnóstico Organizacional",
    subtitle: "Metodología, instrumentos aplicados, tabulación estadística y priorización",
    phaseId: "analisis",
    associatedAp: "AP2: Aplicar instrumentos de diagnóstico para analizar las capacidades organizativas",
    description: "Informe detallado fundamentado en trabajo de campo, aplicación de encuestas, entrevistas, listas de chequeo y matrices diagnósticas (PESTEL, perfil competitivo). Presenta el procesamiento estadístico de la información, análisis de cuellos de botella y priorización de problemas.",
    structure: [
      "1. Metodología diagnóstica: técnicas de recolección, población objeto, muestra y fuentes de información.",
      "2. Instrumentos aplicados: encuestas a clientes/colaboradores, entrevistas y listas de verificación.",
      "3. Tabulación y análisis estadístico: tablas de frecuencias, gráficos de barras/sectores e interpretación de variables.",
      "4. Análisis del macroentorno (PESTEL) y microentorno (competidores, proveedores, clientes).",
      "5. Matriz de hallazgos y árbol de problemas priorizados.",
      "6. Conclusiones y recomendaciones para la fase de planeación."
    ],
    evaluationCriteria: [
      "Diseña y aplica instrumentos de recolección de información acordes con la muestra.",
      "Tabula datos estadísticos con exactitud matemática y análisis deductivo.",
      "Determina con claridad las causas raíces de las debilidades organizacionales."
    ],
    campesenaFocus: "Diagnóstico de brechas de formalización, intermediación de precios y barreras de transporte en comunidades campesinas.",
    templateFormat: "Plantilla de informe analítico con anexos de cuestionarios y matriz de tabulación Excel.",
    sampleEvidence: "Ejemplo: Diagnóstico a 4 microempresas del sector agroindustrial con tabulación de 85 encuestas a consumidores finales."
  },
  {
    id: 3,
    code: "PROD-03",
    title: "Plan Estratégico Organizacional",
    subtitle: "Matriz DOFA cruzada, mapa estratégico, objetivos SMART e indicadores BSC",
    phaseId: "planeacion",
    associatedAp: "AP3: Estructurar la estrategia tecnológica de gestión administrativa",
    description: "Instrumento rector de planeación que conecta el diagnóstico con el futuro deseado de la organización. Incluye la formulación de la matriz DOFA cruzada (FO, FA, DO, DA), definición de objetivos estratégicos SMART, mapa estratégico bajo Balanced Scorecard y plan de comunicación institucional.",
    structure: [
      "1. Plataforma estratégica renovada (Misión, Visión 2030, Valores y Propuesta de Valor).",
      "2. Matriz DOFA cruzada con formulación de estrategias ofensivas, defensivas, de reorientación y supervivencia.",
      "3. Objetivos estratégicos SMART (Específicos, Medibles, Alcanzables, Relevantes y con Tiempo).",
      "4. Mapa Estratégico articulado en 4 perspectivas: Financiera, Clientes, Procesos Internos y Aprendizaje/Crecimiento.",
      "5. Tablero de control de indicadores (BSC) con fórmulas, líneas base, metas y periodicidad.",
      "6. Plan de comunicación interno y externo para la socialización de la estrategia."
    ],
    evaluationCriteria: [
      "Formula estrategias coherentes a partir de la correlación de factores internos y externos.",
      "Construye indicadores de gestión medibles y técnicamente estructurados.",
      "Diseña el mapa estratégico integrando causas y efectos en las cuatro perspectivas."
    ],
    campesenaFocus: "Planificación estratégica para fortalecer la comercialización directa 'del campo a la mesa' sin sobrecostos de intermediación.",
    templateFormat: "Plantilla editable de Plan Estratégico con matriz interactiva DOFA y lienzo de Mapa Estratégico.",
    sampleEvidence: "Ejemplo: Plan Estratégico 2026-2028 para Mipyme transformadora de panela orgánica en Güepsa, Santander."
  },
  {
    id: 4,
    code: "PROD-04",
    title: "Plan de Innovación Empresarial",
    subtitle: "Estrategia de innovación aplicada a procesos productivos y administrativos",
    phaseId: "planeacion",
    associatedAp: "AP4: Definir acciones de innovación organizacional estableciendo recursos e indicadores",
    description: "Propuesta innovadora estructurada con metodologías ágiles (Design Thinking, Lean Startup) orientada a sofisticar un proceso crítico de la Mipyme, incorporar economía circular, bioeconomía o transformación digital ligera, con evaluación de riesgos y factibilidad.",
    structure: [
      "1. Identificación del reto de innovación y mapa de empatía con el usuario/cliente.",
      "2. Proceso de ideación y selección de alternativas (SCAMPER, matriz impacto-esfuerzo).",
      "3. Descripción detallada de la innovación (de producto, proceso, comercialización u organizacional).",
      "4. Prototipado y validación de baja fidelidad (prueba de concepto, storyboard o mockup).",
      "5. Presupuesto estimado, recursos requeridos y fuentes de cofinanciación (Fondo Emprender, SENNOVA).",
      "6. Matriz de riesgos de la innovación y plan de contingencia.",
      "7. Indicadores de impacto de la innovación."
    ],
    evaluationCriteria: [
      "Aplica metodologías creativas y ágiles en la solución de desafíos reales.",
      "Sustenta la viabilidad técnica, operativa y económica de la propuesta innovadora.",
      "Estructura el mapa de riesgos y define planes de mitigación pertinentes."
    ],
    campesenaFocus: "Innovación en empaques biodegradables a base de fique o fibra de plátano, y trazabilidad con código QR para productos de la granja.",
    templateFormat: "Canvas de innovación empresarial + ficha técnica de prototipado y validación ágil.",
    sampleEvidence: "Ejemplo: Estrategia de innovación en empaquetado al vacío con código QR de origen para productores de cacao en San Vicente de Chucurí."
  },
  {
    id: 5,
    code: "PROD-05",
    title: "Sistema / Herramienta Tecnológica de Gestión",
    subtitle: "Herramienta digital con registros administrativos, indicadores y soporte decisional",
    phaseId: "ejecucion",
    associatedAp: "AP5: Implementar herramientas tecnológicas de gestión de información",
    description: "Solución tecnológica aplicada (en hojas de cálculo avanzadas con macros, bases de datos relacionales Access/SQL, apps no-code o software administrativo libre) que permite digitalizar registros de clientes, inventarios, compras, ventas y generar cuadros de mando para la toma de decisiones.",
    structure: [
      "1. Manual técnico y de usuario de la herramienta tecnológica desarrollada.",
      "2. Módulo de captura de datos: formularios parametrizados con validaciones y control de errores.",
      "3. Módulo de base de datos relacional: tablas de clientes, proveedores, artículos y transacciones.",
      "4. Módulo de cálculo y procesamiento: nómina, causación contable, liquidación y costos.",
      "5. Tablero de mando (Dashboard) con gráficos interactivos y KPIs ejecutivos.",
      "6. Política de seguridad de la información y protocolo de copias de respaldo (backups)."
    ],
    evaluationCriteria: [
      "Construye bases de datos y herramientas ofimáticas funcionales que resuelvan la necesidad operativa.",
      "Aplica protocolos de seguridad informática y respaldo de la información empresarial.",
      "Genera reportes e interfaces claras para la toma de decisiones gerenciales."
    ],
    campesenaFocus: "Sistema accesible y offline para el registro de cosechas, costos de insumos agrícolas y libro diario del productor campesino.",
    templateFormat: "Libro de Excel automatizado con macros VBA o interfaz web interactiva + Manual en PDF.",
    sampleEvidence: "Ejemplo: Sistema 'AgroAdmin 2026' con registro de nómina de jornales, control de fertilizantes y dashboard de margen por hectárea."
  },
  {
    id: 6,
    code: "PROD-06",
    title: "Plan de Acción Organizacional",
    subtitle: "Cronograma, responsables, recursos, riesgos y acciones preventivas/correctivas",
    phaseId: "ejecucion",
    associatedAp: "AP6: Desarrollar acciones administrativas de fortalecimiento organizacional",
    description: "Instrumento operativo que desagrega las estrategias en actividades concretas, asignando líderes de proceso, recursos presupuestales, cronograma Gantt, indicadores de logro y planes de contingencia para garantizar la ejecución efectiva de las mejoras en la Mipyme.",
    structure: [
      "1. Objetivos específicos del plan de acción por área funcional (administrativa, comercial, financiera, talento humano).",
      "2. Matriz de actividades detalladas (fórmula 5W2H: Qué, Quién, Cuándo, Dónde, Por qué, Cómo y Cuánto cuesta).",
      "3. Cronograma en diagrama de Gantt con ruta crítica e hitos de entrega.",
      "4. Presupuesto consolidado de inversión y recursos logísticos requeridos.",
      "5. Matriz de gestión del talento humano (capacitación y clima organizacional).",
      "6. Protocolo de contingencia y acciones preventivas ante retrasos o desvíos."
    ],
    evaluationCriteria: [
      "Estructura el plan de acción con coherencia técnica y rigor en la distribución temporal.",
      "Establece presupuestos y recursos viables acordes con la realidad de la empresa.",
      "Incorpora acciones de mitigación de riesgos y articulación interinstitucional."
    ],
    campesenaFocus: "Plan de acción concertado con asambleas campesinas respetando calendarios agrícolas y tiempos de cosecha.",
    templateFormat: "Matriz 5W2H + Cronograma Gantt interactivo descargable en formato Excel/Project.",
    sampleEvidence: "Ejemplo: Plan de acción para la modernización de los procesos de recepción y despacho de mercancías en distribuidora local."
  },
  {
    id: 7,
    code: "PROD-07",
    title: "Informe de Seguimiento y Mejora Organizacional",
    subtitle: "Monitoreo de indicadores, evaluación del cumplimiento y recomendaciones",
    phaseId: "evaluacion",
    associatedAp: "AP8: Medir el cumplimiento de las acciones implementadas mediante indicadores",
    description: "Informe de auditoría y seguimiento que evalúa el grado de cumplimiento de los objetivos y actividades ejecutadas en la organización intervenida. Compara metas planificadas vs resultados reales, analiza variaciones y emite recomendaciones correctivas de impacto inmediato.",
    structure: [
      "1. Ficha técnica de seguimiento del periodo evaluado.",
      "2. Medición comparativa de indicadores (Meta vs Real) en productividad, ventas y costos.",
      "3. Evaluación del cumplimiento del cronograma y nivel de ejecución presupuestal.",
      "4. Análisis de desviaciones y hallazgos identificados en los procesos intervenidos.",
      "5. Evaluación del nivel de adopción tecnológica y satisfacción de los usuarios internos.",
      "6. Recomendaciones prioritarias y ajustes a corto plazo."
    ],
    evaluationCriteria: [
      "Calcula con precisión índices de eficacia, eficiencia y efectividad.",
      "Interpreta resultados con juicio crítico proponiendo ajustes pertinentes.",
      "Comunica los hallazgos con claridad ejecutiva y soporte en evidencias verificables."
    ],
    campesenaFocus: "Medición del incremento en el ingreso neto por familia campesina asociada tras implementar la estrategia de gestión.",
    templateFormat: "Plantilla de informe ejecutivo de auditoría con gráficos de semaforización (verde, amarillo, rojo).",
    sampleEvidence: "Ejemplo: Informe trimestral con análisis de 12 KPIs organizacionales evidenciando un 22% de ahorro en costos de papelería y archivo."
  },
  {
    id: 8,
    code: "PROD-08",
    title: "Plan de Mejoramiento Organizacional",
    subtitle: "Acciones de mejora continua para la sostenibilidad de iniciativas campesinas y Mipymes",
    phaseId: "evaluacion",
    associatedAp: "AP9: Proponer acciones de mejora organizacional considerando los resultados obtenidos",
    description: "Plan de mejora continua basado en el ciclo PHVA (Planear, Hacer, Verificar, Actuar). Define acciones correctivas a no conformidades, estandarización de buenas prácticas administrativas, planes de sostenibilidad ambiental y compromisos a largo plazo para asegurar la permanencia de los beneficios.",
    structure: [
      "1. Balance general del ciclo de intervención formativa en la organización.",
      "2. Matriz de No Conformidades y análisis de causa raíz (diagrama de Ishikawa y 5 Porqués).",
      "3. Plan de Acciones Correctivas y Preventivas (PAC) bajo ciclo PHVA.",
      "4. Procedimientos estandarizados y manuales de buenas prácticas administrativas.",
      "5. Estrategia de sostenibilidad financiera, social y ambiental a largo plazo.",
      "6. Compromisos y actas de entrega formal de la intervención a los directivos de la Mipyme."
    ],
    evaluationCriteria: [
      "Aplica técnicas formales de análisis de causas (espina de pescado, 5 porqués).",
      "Formula planes de mejora orientados a la sostenibilidad y autonomía de la empresa.",
      "Estandariza procedimientos técnicos para evitar la reaparición de fallas."
    ],
    campesenaFocus: "Acuerdos comunitarios para el mantenimiento de herramientas tecnológicas en centros de acopio campesinos sin dependencia externa.",
    templateFormat: "Formato oficial de Plan de Mejoramiento SENA con seguimiento a hallazgos y firmas de entrega.",
    sampleEvidence: "Ejemplo: Plan de mejora continua con 5 acciones correctivas para la Cooperativa Lechera del Norte de Santander."
  },
  {
    id: 9,
    code: "PROD-09",
    title: "Repositorio Digital de Evidencias del Proyecto",
    subtitle: "Consolidación estructurada de instrumentos, bases de datos, matrices e informes",
    phaseId: "evaluacion",
    associatedAp: "AP9 / AP10: Consolidación y transferencia de evidencias integrales",
    description: "Carpeta digital y portafolio estructurado según las normas archivísticas del SENA que recopila todos los instrumentos aplicados, bases de datos en crudo, matrices de análisis, presentaciones ejecutivas, actas de reuniones firmadas, registros fotográficos y los 8 informes previos.",
    structure: [
      "1. Índice maestro de evidencias con codificación técnica y metadatos de archivo.",
      "2. Carpeta Fase 1 (Análisis): encuestas, entrevistas, informe diagnóstico y tabulaciones.",
      "3. Carpeta Fase 2 (Planeación): matriz DOFA, mapa estratégico y plan de innovación.",
      "4. Carpeta Fase 3 (Ejecución): software/herramienta, manuales, comprobantes contables y nómina.",
      "5. Carpeta Fase 4 (Evaluación): informes de seguimiento, actas de entrega y plan de mejora.",
      "6. Memoria fotográfica, cartas de agradecimiento de la empresa y bitácora del aprendiz."
    ],
    evaluationCriteria: [
      "Organiza el portafolio digital aplicando criterios archivísticos de ordenación y nomenclatura.",
      "Consolida el 100% de las evidencias requeridas por el proyecto formativo INNOVAGESTIÓN.",
      "Garantiza la integridad, legibilidad y disponibilidad de los soportes documentales."
    ],
    campesenaFocus: "Banco de buenas prácticas campesinas transferible a nuevos grupos de aprendices para réplica en otros municipios.",
    templateFormat: "Estructura de carpetas en la nube (Drive/ZIP) con índice interactivo en PDF hipervinculado.",
    sampleEvidence: "Ejemplo: Portafolio digital de 1.2 GB con más de 45 archivos de soporte del proyecto formativo desarrollado durante 24 meses."
  }
];
