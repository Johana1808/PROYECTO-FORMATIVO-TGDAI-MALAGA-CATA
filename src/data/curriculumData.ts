import { Phase, Competency } from '../types';

export const PROGRAM_INFO = {
  name: "Gestión del Desarrollo Administrativo e Innovación",
  code: "122153",
  version: "1",
  degree: "Tecnólogo",
  technologicalLine: "Cliente",
  technologicalNetwork: "Tecnologías de Gestión Administrativa y Servicios Financieros",
  knowledgeNetwork: "Red de Conocimiento en Gestión Administrativa y Financiera",
  durationLectivaHours: 3120,
  durationProductivaHours: 864,
  totalHours: 3984,
  center: "Centro Agroempresarial y Turístico de los Andes",
  regional: "Regional Santander",
  focalStrategy: "Estrategia CAMPESENA y Fortalecimiento a Mipymes",
  justification: "El programa responde a la necesidad de las organizaciones y Mipymes colombianas de contar con talento humano intermedio capaz de liderar la transformación digital, la innovación de procesos, la toma de decisiones basada en datos y la sostenibilidad empresarial."
};

export const PROJECT_INFO = {
  codeSofia: "3639874",
  name: "INNOVAGESTIÓN: Estrategia de gestión administrativa e innovación para fortalecer la competitividad y sostenibilidad empresarial",
  generalObjective: "Desarrollar una estrategia de gestión administrativa e innovación para fortalecer las capacidades organizativas, administrativas, tecnológicas y de innovación de las mipymes, contribuyendo al mejoramiento de su productividad, competitividad y sostenibilidad.",
  specificObjectives: [
    "Caracterizar las capacidades organizativas, administrativas, tecnológicas y de innovación de las mipymes mediante herramientas de diagnóstico organizacional.",
    "Estructurar una estrategia integral de gestión administrativa e innovación de acuerdo con las necesidades, brechas y oportunidades identificadas en las Mipymes y organizaciones productivas.",
    "Implementar la estrategia integral de gestión administrativa e innovación mediante herramientas administrativas, documentales, financieras, tecnológicas y de analítica de datos, de acuerdo con las necesidades de las organizaciones intervenidas.",
    "Evaluar los resultados y oportunidades de mejora de la estrategia integral de gestión administrativa e innovación mediante indicadores definidos para las organizaciones intervenidas."
  ],
  beneficiaries: "Aprendices en formación del SENA (beneficiarios directos) y micro, pequeñas y medianas empresas (Mipymes) e iniciativas campesinas de la región de Santander.",
  impacts: {
    social: "Fortalecimiento del tejido empresarial local, empleabilidad de los aprendices y liderazgo comunitario.",
    economico: "Optimización de procesos, reducción de costos operativos y aumento de la competitividad de las iniciativas campesinas y Mipymes.",
    ambiental: "Fomento de prácticas de economía circular, uso eficiente de recursos y sostenibilidad alineada con los ODS.",
    tecnologico: "Adopción de herramientas digitales, analítica de datos, sistematización documental y automatización de procesos."
  }
};

export const PHASES_DATA: Phase[] = [
  {
    id: "analisis",
    number: 1,
    name: "Análisis",
    shortDesc: "Diagnóstico y caracterización integral de las organizaciones y su entorno.",
    color: "emerald",
    badgeColor: "bg-emerald-500",
    activities: [
      {
        id: "AP1",
        number: 1,
        title: "Analizar la estructura organizacional",
        description: "Analizar la estructura organizacional de las organizaciones intervenidas mediante herramientas de diagnóstico administrativo y recopilación de información del contexto.",
        phaseId: "analisis",
        durationHours: 153,
        competencyCodes: ["210601023", "210001012", "210601020", "240201533", "220201501"],
        associatedProducts: [1]
      },
      {
        id: "AP2",
        number: 2,
        title: "Aplicar instrumentos de diagnóstico",
        description: "Aplicar instrumentos de diagnóstico para analizar las capacidades organizativas, administrativas, comerciales, financieras, tecnológicas y de innovación de las Mipymes, mediante la recopilación, organización e interpretación de la información del contexto organizacional.",
        phaseId: "analisis",
        durationHours: 201,
        competencyCodes: ["210601023", "210601026", "210303037", "210201042", "240201526", "240201530"],
        associatedProducts: [2]
      }
    ]
  },
  {
    id: "planeacion",
    number: 2,
    name: "Planeación",
    shortDesc: "Estructuración estratégica, planes de innovación y modelado de soluciones.",
    color: "blue",
    badgeColor: "bg-blue-500",
    activities: [
      {
        id: "AP3",
        number: 3,
        title: "Estructurar la estrategia tecnológica y administrativa",
        description: "Estructurar la estrategia tecnológica de gestión administrativa considerando los hallazgos del diagnóstico y las capacidades de las organizaciones.",
        phaseId: "planeacion",
        durationHours: 165,
        competencyCodes: ["210601023", "210001012", "210201042", "240201064", "220501046", "240201528"],
        associatedProducts: [3]
      },
      {
        id: "AP4",
        number: 4,
        title: "Definir acciones de innovación organizacional",
        description: "Definir acciones de innovación organizacional estableciendo recursos, responsables e indicadores de acuerdo con las necesidades productivas identificadas.",
        phaseId: "planeacion",
        durationHours: 112,
        competencyCodes: ["210303037", "220501114", "210001012"],
        associatedProducts: [4]
      }
    ]
  },
  {
    id: "ejecucion",
    number: 3,
    name: "Ejecución",
    shortDesc: "Implementación de herramientas tecnológicas, contables, documentales y de talento humano.",
    color: "amber",
    badgeColor: "bg-amber-500",
    activities: [
      {
        id: "AP5",
        number: 5,
        title: "Implementar herramientas tecnológicas de gestión",
        description: "Implementar herramientas tecnológicas de gestión de información de acuerdo con los requerimientos administrativos y productivos de las organizaciones.",
        phaseId: "ejecucion",
        durationHours: 605,
        competencyCodes: ["220501121", "210601023", "210601024", "210602021", "210201042", "210601020", "220601501", "230101507", "210201501"],
        associatedProducts: [5]
      },
      {
        id: "AP6",
        number: 6,
        title: "Desarrollar acciones de fortalecimiento",
        description: "Desarrollar acciones administrativas de fortalecimiento organizacional mediante el plan de acción definido para las organizaciones intervenidas.",
        phaseId: "ejecucion",
        durationHours: 292,
        competencyCodes: ["210001012", "210602021", "210601020", "240202501"],
        associatedProducts: [6]
      },
      {
        id: "AP7",
        number: 7,
        title: "Implementar herramientas de gestión contable y analítica",
        description: "Implementar herramientas tecnológicas de gestión de información de acuerdo con los requerimientos administrativos y productivos de las pymes (contabilidad, nómina, analítica y comunicación).",
        phaseId: "ejecucion",
        durationHours: 216,
        competencyCodes: ["210601026", "210303037", "220501114", "240201524"],
        associatedProducts: [5, 6]
      }
    ]
  },
  {
    id: "evaluacion",
    number: 4,
    name: "Evaluación",
    shortDesc: "Medición con indicadores, planes de mejora continua y aplicación en etapa productiva.",
    color: "purple",
    badgeColor: "bg-purple-500",
    activities: [
      {
        id: "AP8",
        number: 8,
        title: "Medir cumplimiento de acciones con indicadores",
        description: "Medir el cumplimiento de las acciones implementadas mediante indicadores de gestión definidos para la estrategia tecnológica.",
        phaseId: "evaluacion",
        durationHours: 232,
        competencyCodes: ["210601023", "210303037", "220501114", "210001012"],
        associatedProducts: [7]
      },
      {
        id: "AP9",
        number: 9,
        title: "Proponer acciones de mejora organizacional",
        description: "Proponer acciones de mejora organizacional considerando los resultados obtenidos durante el seguimiento del proyecto.",
        phaseId: "evaluacion",
        durationHours: 232,
        competencyCodes: ["210601026", "220501114", "210601024"],
        associatedProducts: [8, 9]
      },
      {
        id: "AP10",
        number: 10,
        title: "Aplicación en la resolución de problemas reales (Etapa Práctica)",
        description: "Aplicar en la resolución de problemas reales del sector productivo, los conocimientos, habilidades y destrezas pertinentes a las competencias del programa de formación asumiendo estrategias y metodologías de autogestión.",
        phaseId: "evaluacion",
        durationHours: 864,
        competencyCodes: ["999999999"],
        associatedProducts: [8, 9]
      }
    ]
  }
];

export const COMPETENCIES_DATA: Competency[] = [
  {
    code: "210601023",
    name: "Coordinación de Actividades Administrativas",
    normName: "Coordinar actividades de acuerdo con estrategias de gestión y proceso administrativo",
    type: "tecnica",
    durationHours: 288,
    phaseIds: ["analisis", "planeacion", "ejecucion", "evaluacion"],
    associatedAps: ["AP1", "AP2", "AP3", "AP5", "AP8"],
    raps: [
      { id: "RAP 1", denomination: "Interpretar principios y fundamentos de la coordinación de actividades de acuerdo con elementos de gestión y características del proceso administrativo.", competencyCode: "210601023", activityId: "AP1" },
      { id: "RAP 2", denomination: "Ejecutar la planeación estratégica de acuerdo con criterios y políticas de la organización.", competencyCode: "210601023", activityId: "AP3" },
      { id: "RAP 3", denomination: "Aplicar el plan de diagnóstico organizacional de acuerdo con objetivos y políticas de la empresa.", competencyCode: "210601023", activityId: "AP2" },
      { id: "RAP 4", denomination: "Construir el plan de acción en la coordinación de actividades de acuerdo con normativa y políticas de la organización.", competencyCode: "210601023", activityId: "AP5" },
      { id: "RAP 5", denomination: "Efectuar el seguimiento al plan de acción de acuerdo con metodología técnica establecida por la organización.", competencyCode: "210601023", activityId: "AP8" }
    ],
    saber: [
      "Teoría de la administración: clásica, neoclásica, estructuralista y de sistemas.",
      "Fases del proceso administrativo: Planear, Organizar, Dirigir y Controlar.",
      "Estructuras organizacionales: jerárquica, funcional, matricial y por procesos.",
      "Direccionamiento estratégico: Misión, Visión, Valores, Políticas y Objetivos SMART.",
      "Herramientas de diagnóstico: PESTEL, Factores Críticos de Éxito, Matrices EFE, EFI y BSC.",
      "Planes de acción y contingencia: cronogramas, matrices de responsabilidades e indicadores de eficacia y eficiencia."
    ],
    saberHacer: [
      "Describir y graficar el mapa de procesos y flujogramas de la organización.",
      "Construir y aplicar instrumentos de diagnóstico administrativo.",
      "Formular planes estratégicos alineados con los objetivos de la empresa.",
      "Diseñar planes de acción con responsables, recursos y tiempos.",
      "Monitorear indicadores de gestión y estructurar informes de seguimiento ejecutivo."
    ],
    ser: [
      "Liderazgo participativo y motivación orientada a resultados.",
      "Comunicación asertiva con el equipo y directivos.",
      "Pensamiento estratégico y toma de decisiones éticas.",
      "Responsabilidad y rigurosidad en el seguimiento de compromisos."
    ],
    criteriosEvaluacion: [
      "Relaciona la estructura organizacional y los procesos administrativos a partir de principios y políticas de la empresa.",
      "Elabora el plan de comunicación interno y externo de acuerdo con objetivos estratégicos.",
      "Determina acciones para el diagnóstico organizacional según políticas y herramientas de análisis.",
      "Presenta el plan de acción de acuerdo con el sistema de gestión de calidad.",
      "Elabora informes de las medidas y acciones de mejora a partir del seguimiento."
    ]
  },
  {
    code: "210001012",
    name: "Diagnóstico e Innovación Empresarial",
    normName: "Diagnosticar la capacidad de innovación empresarial según criterios estratégicos",
    type: "tecnica",
    durationHours: 240,
    phaseIds: ["analisis", "planeacion", "ejecucion", "evaluacion"],
    associatedAps: ["AP1", "AP3", "AP4", "AP6", "AP8"],
    raps: [
      { id: "RAP 1", denomination: "Interpretar las fases en las que se produce la innovación según modelo definido por la organización.", competencyCode: "210001012", activityId: "AP1" },
      { id: "RAP 2", denomination: "Implementar el proceso de innovación de acuerdo con el modelo definido por la organización.", competencyCode: "210001012", activityId: "AP3" },
      { id: "RAP 3", denomination: "Aplicar el modelo de innovación de acuerdo con metodología, herramientas de uso y objetivos organizacionales.", competencyCode: "210001012", activityId: "AP6" },
      { id: "RAP 4", denomination: "Establecer la capacidad de creatividad e innovación organizacional de acuerdo con objetivos y políticas de la empresa.", competencyCode: "210001012", activityId: "AP8" }
    ],
    saber: [
      "Fases de innovación: Fase Creativa (descubrir, idear) y Fase Ejecutiva (prototipar, implementar).",
      "Modelos de innovación: abierta, cerrada, incremental, disruptiva y frugal para el sector rural.",
      "Metodologías ágiles e ideación: Design Thinking, Brainstorming, 6 Sombreros, Scrum y Lean Startup.",
      "Herramientas de empatía: Mapa de empatía, Customer Journey Map y pruebas de concepto.",
      "Matriz DOFA cruzada aplicada a la innovación y gestión del cambio tecnológico."
    ],
    saberHacer: [
      "Identificar focos de innovación en procesos administrativos y productivos de Mipymes.",
      "Diseñar prototipos de bajo costo para validar soluciones con clientes reales.",
      "Elaborar mapas de riesgos internos asociados a la innovación empresarial.",
      "Medir la capacidad innovadora de la empresa mediante indicadores de innovación y valor agregado.",
      "Formular planes de innovación empresarial sostenibles y transferibles."
    ],
    ser: [
      "Curiosidad intelectual y mentalidad abierta a la experimentación.",
      "Resiliencia ante la incertidumbre y tolerancia al error constructivo.",
      "Espíritu colaborativo y empatía con las necesidades del cliente y campesino.",
      "Compromiso con el desarrollo sostenible y la agregación de valor local."
    ],
    criteriosEvaluacion: [
      "Reconoce habilidades creativas en la organización a partir de las necesidades identificadas.",
      "Integra la idea creativa en los procesos de la organización de acuerdo con el modelo de innovación.",
      "Elabora el mapa de riesgos internos de acuerdo con políticas de innovación.",
      "Presenta informe de implementación del modelo de innovación con herramientas ágiles.",
      "Aplica matriz DOFA y evalúa la capacidad creativa empleando indicadores de gestión."
    ]
  },
  {
    code: "210601020",
    name: "Atención de Clientes",
    normName: "Atender clientes de acuerdo con procedimiento de servicio y normativa",
    type: "tecnica",
    durationHours: 144,
    phaseIds: ["analisis", "ejecucion"],
    associatedAps: ["AP1", "AP5", "AP6"],
    raps: [
      { id: "RAP 1", denomination: "Interpretar procedimientos de atención y servicio al cliente interno y externo, teniendo en cuenta las políticas de la organización.", competencyCode: "210601020", activityId: "AP1" },
      { id: "RAP 2", denomination: "Aplicar protocolos de atención y servicio al cliente de acuerdo con políticas de la organización y normativa.", competencyCode: "210601020", activityId: "AP5" },
      { id: "RAP 3", denomination: "Organizar eventos empresariales de acuerdo con requerimiento y procedimiento.", competencyCode: "210601020", activityId: "AP5" },
      { id: "RAP 4", denomination: "Verificar la prestación del servicio al cliente de acuerdo con política institucional y normativa.", competencyCode: "210601020", activityId: "AP6" }
    ],
    saber: [
      "Tipología de clientes y momentos de verdad en la experiencia de servicio.",
      "Protocolos y etiqueta empresarial física, telefónica y digital.",
      "Gestión de PQRSF (Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones).",
      "Logística de eventos empresariales: comités de pre-evento, evento y post-evento.",
      "Normas técnicas de calidad en servicio al cliente y confidencialidad (Habeas Data)."
    ],
    saberHacer: [
      "Aplicar protocolos de cortesía y comunicación asertiva multicanal.",
      "Diseñar y gestionar buzones físicos y virtuales de atención al cliente.",
      "Organizar comités y logística para reuniones y eventos empresariales.",
      "Aplicar encuestas e instrumentos de satisfacción de clientes.",
      "Calcular la trazabilidad del servicio y proponer planes de mejora."
    ],
    ser: [
      "Empatía y vocación de servicio con sentido humano.",
      "Escucha activa y tolerancia a la frustración.",
      "Ética en la custodia de datos personales.",
      "Puntualidad y diplomacia en las relaciones públicas corporativas."
    ],
    criteriosEvaluacion: [
      "Relaciona características en la atención al cliente según normativa de calidad.",
      "Recepciona requerimientos cumpliendo normas de cortesía, etiqueta y protocolo.",
      "Programa actividades de comités en las diferentes etapas del evento empresarial.",
      "Aplica instrumentos de recolección de información para evaluar la satisfacción del cliente."
    ]
  },
  {
    code: "220501121",
    name: "Operación de Tecnologías Informáticas y Digitales",
    normName: "Operar herramientas informáticas y digitales de acuerdo con protocolos y manuales técnicos",
    type: "tecnica",
    durationHours: 192,
    phaseIds: ["ejecucion"],
    associatedAps: ["AP5"],
    raps: [
      { id: "RAP 1", denomination: "Determinar funcionalidades de las herramientas informáticas de acuerdo con las necesidades de la organización.", competencyCode: "220501121", activityId: "AP5" },
      { id: "RAP 2", denomination: "Utilizar herramientas de tecnologías de la información y comunicación (TIC) en actividades administrativas según políticas de uso.", competencyCode: "220501121", activityId: "AP5" },
      { id: "RAP 3", denomination: "Administrar bases de datos de la unidad administrativa de acuerdo con necesidades de la organización y gestión de información.", competencyCode: "220501121", activityId: "AP5" },
      { id: "RAP 4", denomination: "Proponer acciones de mejora de la información procesada según procedimientos y requerimientos de la unidad administrativa.", competencyCode: "220501121", activityId: "AP5" }
    ],
    saber: [
      "Teoría general de sistemas: componentes de entrada, procesamiento, almacenamiento y salida.",
      "Herramientas ofimáticas avanzadas: hojas de cálculo con macros y tablas dinámicas, procesadores de texto estructurados y presentaciones interactivas.",
      "Bases de datos relacionales: tablas, campos, claves primarias, consultas y formularios de captura.",
      "Seguridad de la información: protocolos de copias de seguridad (backup), acceso y recuperación.",
      "Servicios en la nube, almacenamiento colaborativo y herramientas digitales de comunicación."
    ],
    saberHacer: [
      "Construir bases de datos para registrar proveedores, clientes e inventarios.",
      "Diseñar hojas de cálculo con fórmulas avanzadas y tableros visuales para Mipymes.",
      "Configurar esquemas de seguridad y copias de respaldo de datos empresariales.",
      "Automatizar tareas administrativas repetitivas mediante macros y formularios.",
      "Emitir reportes gerenciales con gráficas e indicadores analíticos."
    ],
    ser: [
      "Rigor y precisión en el tratamiento y confidencialidad de datos.",
      "Adaptabilidad a nuevas herramientas tecnológicas de software libre y privativo.",
      "Cuidado y mantenimiento preventivo de equipos y recursos informáticos."
    ],
    criteriosEvaluacion: [
      "Diferencia procesos y estructuras de los sistemas y medios de información según principios técnicos.",
      "Procesa información acorde con paquetes tecnológicos integrados y manuales de usuario.",
      "Construye y administra bases de datos de acuerdo con los requerimientos de la empresa.",
      "Presenta informes de resultados y verifica el correcto funcionamiento del software."
    ]
  },
  {
    code: "220501114",
    name: "Sistematización y Analítica de Datos",
    normName: "Sistematizar datos masivos de acuerdo con métodos de analítica y herramientas tecnológicas",
    type: "tecnica",
    durationHours: 288,
    phaseIds: ["planeacion", "ejecucion", "evaluacion"],
    associatedAps: ["AP4", "AP7", "AP8", "AP9"],
    raps: [
      { id: "RAP 1", denomination: "Interpretar métodos de analítica de datos de acuerdo con marco legal y modelo de gestión de la organización.", competencyCode: "220501114", activityId: "AP4" },
      { id: "RAP 2", denomination: "Aplicar herramientas de analítica de datos de acuerdo con normativa y política de la empresa.", competencyCode: "220501114", activityId: "AP7" },
      { id: "RAP 3", denomination: "Verificar el comportamiento de la ciencia de los datos de acuerdo con normativa y el uso de herramientas informáticas.", competencyCode: "220501114", activityId: "AP8" },
      { id: "RAP 4", denomination: "Ejecutar acciones de mejoras en el uso de herramientas informáticas según verificación del comportamiento de los datos.", competencyCode: "220501114", activityId: "AP9" }
    ],
    saber: [
      "Conceptos de Big Data: volumen, velocidad, variedad, veracidad y valor.",
      "Ciclo de vida de los datos: extracción, depuración, transformación, modelado y visualización.",
      "Herramientas de Business Intelligence (BI): dashboards interactivos, KPIs y tableros de control.",
      "Modelos descriptivos, predictivos y tendencias en la toma de decisiones empresariales.",
      "Legislación de protección de datos personales (Ley 1581 de 2012) y ética en IA."
    ],
    saberHacer: [
      "Depurar y organizar datos masivos provenientes de transacciones comerciales y encuestas.",
      "Crear tableros de mando (dashboards) con métricas en tiempo real para gerentes de Mipymes.",
      "Generar modelos de tendencias de ventas y satisfacción del cliente.",
      "Interpretar correlaciones para recomendar decisiones estratégicas fundamentadas.",
      "Proponer planes de mejora continua en la arquitectura de datos organizacionales."
    ],
    ser: [
      "Pensamiento analítico y crítico ante datos e interpretaciones estadísticas.",
      "Honestidad y transparencia en la presentación de resultados.",
      "Sentido ético en la privacidad y anonimización de datos."
    ],
    criteriosEvaluacion: [
      "Reconoce fuentes de información y describe componentes de modelos estadísticos.",
      "Genera formatos de tratamiento y presenta informes según herramientas disponibles.",
      "Valida la muestra apropiada y evalúa el comportamiento de los datos para la toma de decisiones.",
      "Documenta e implementa acciones de mejora en los sistemas de información."
    ]
  },
  {
    code: "210303037",
    name: "Reconocimiento de Recursos Financieros y Gestión Contable",
    normName: "Reconocer recursos financieros de acuerdo con política y normativa contable",
    type: "tecnica",
    durationHours: 192,
    phaseIds: ["analisis", "planeacion", "ejecucion", "evaluacion"],
    associatedAps: ["AP2", "AP4", "AP7", "AP8"],
    raps: [
      { id: "RAP 1", denomination: "Interpretar las políticas financieras y contables de acuerdo con normativa y lineamientos de la organización.", competencyCode: "210303037", activityId: "AP2" },
      { id: "RAP 2", denomination: "Procesar los documentos generados en las actividades financieras según políticas y normativa.", competencyCode: "210303037", activityId: "AP4" },
      { id: "RAP 3", denomination: "Causar las operaciones en el sistema de información contable de acuerdo con normativa.", competencyCode: "210303037", activityId: "AP7" },
      { id: "RAP 4", denomination: "Liquidar nómina según normativa y lineamientos de la organización.", competencyCode: "210303037", activityId: "AP7" },
      { id: "RAP 5", denomination: "Generar los informes financieros de acuerdo con las Normas Internacionales de Información Financiera (NIIF).", competencyCode: "210303037", activityId: "AP8" }
    ],
    saber: [
      "Código de Comercio, tipos societarios (SAS, Ltda, Unipersonal) y personería jurídica.",
      "Principios de Contabilidad Generalmente Aceptados y Normas NIIF para Pymes.",
      "Comprobantes contables y no contables: recibos de caja, facturas electrónicas, notas débito/crédito y títulos valores.",
      "Estructura del Código Sustantivo de Trabajo: devengados, deducciones, prestaciones sociales y aportes parafiscales.",
      "Estados financieros básicos: Balance General, Estado de Resultados y flujo de caja."
    ],
    saberHacer: [
      "Clasificar y archivar soportes contables cumpliendo requisitos fiscales de la DIAN.",
      "Causar hechos económicos en software contable o plantillas financieras.",
      "Liquidar nómina mensual de trabajadores con horas extras, recargos y seguridad social.",
      "Calcular bases gravables e impuestos nacionales y territoriales (IVA, Retefuente, ICA).",
      "Elaborar informes financieros básicos y ratios de liquidez y rentabilidad para Mipymes."
    ],
    ser: [
      "Integridad, probidad y transparencia en el manejo de cifras contables.",
      "Responsabilidad social en el cumplimiento de obligaciones laborales.",
      "Orden meticuloso en la conservación y custodia de soportes contables."
    ],
    criteriosEvaluacion: [
      "Distingue la normativa financiera y clasifica documentos contables y no contables.",
      "Contabiliza hechos económicos según normativa y software contable.",
      "Calcula liquidaciones de nómina, prestaciones sociales y seguridad social integral.",
      "Procesa y presenta informes financieros bajo principios NIIF."
    ]
  },
  {
    code: "210602021",
    name: "Organización de Archivos de Gestión",
    normName: "Organizar archivos de gestión de acuerdo con normativa",
    type: "tecnica",
    durationHours: 240,
    phaseIds: ["ejecucion"],
    associatedAps: ["AP5", "AP6"],
    raps: [
      { id: "RAP 1", denomination: "Caracterizar el proceso de gestión documental acorde con procedimientos y normativa de archivo.", competencyCode: "210602021", activityId: "AP5" },
      { id: "RAP 2", denomination: "Estructurar la organización del archivo de acuerdo con herramientas tecnológicas y normativa.", competencyCode: "210602021", activityId: "AP6" },
      { id: "RAP 3", denomination: "Implementar la transferencia documental de acuerdo con procedimientos técnicos y normativa.", competencyCode: "210602021", activityId: "AP6" }
    ],
    saber: [
      "Legislación del Archivo General de la Nación (Ley 594 de 2000 - Ley General de Archivos).",
      "Instrumentos archivísticos: Tablas de Retención Documental (TRD), Cuadro de Clasificación Documental (CCD) y Programa de Gestión Documental (PGD).",
      "Procesos técnicos: clasificación, ordenación, foliación y descripción documental.",
      "Gestión documental electrónica: metadatos, preservación digital y almacenamiento en la nube.",
      "Transferencias documentales primarias y secundarias con inventario único (FUID)."
    ],
    saberHacer: [
      "Aplicar Tablas de Retención Documental en la organización física y digital de expedientes.",
      "Realizar la foliación técnica y rotulación de carpetas y cajas de archivo.",
      "Diligenciar el Formato Único de Inventario Documental (FUID).",
      "Implementar esquemas de nomenclatura y control de versiones digitales.",
      "Asegurar la custodia, confidencialidad y preservación ambiental de los documentos."
    ],
    ser: [
      "Confidencialidad y reserva profesional con documentos institucionales.",
      "Organización, pulcritud y orden en la gestión del archivo.",
      "Conciencia ambiental en el uso responsable del papel."
    ],
    criteriosEvaluacion: [
      "Relaciona las tablas de retención documental en la clasificación de expedientes.",
      "Aplica herramientas tecnológicas en la descripción y foliación técnica del archivo.",
      "Organiza series documentales y administra transferencias documentales con inventario."
    ]
  },
  {
    code: "210201042",
    name: "Planeación de Desarrollo de Talento Humano",
    normName: "Planear el desarrollo del talento humano según requerimientos y modelos de gestión",
    type: "tecnica",
    durationHours: 144,
    phaseIds: ["analisis", "planeacion", "ejecucion"],
    associatedAps: ["AP2", "AP3", "AP5"],
    raps: [
      { id: "RAP 1", denomination: "Categorizar necesidades del talento humano de la organización de acuerdo con políticas y diagnóstico.", competencyCode: "210201042", activityId: "AP2" },
      { id: "RAP 2", denomination: "Estructurar propuesta de capacitación a partir de las necesidades del talento humano.", competencyCode: "210201042", activityId: "AP3" },
      { id: "RAP 3", denomination: "Implementar la propuesta de capacitación del talento humano en la organización según procedimientos técnicos.", competencyCode: "210201042", activityId: "AP5" }
    ],
    saber: [
      "Conceptos de gestión del talento humano por competencias laborales.",
      "Diagnóstico de Necesidades de Capacitación (DNC): metodologías, formatos y variables.",
      "Estructura de un Programa de Capacitación: objetivos pedagógicos, cronogramas, presupuestos y facilitadores.",
      "Clima laboral y cultura organizacional: técnicas de evaluación y dinámicas de integración.",
      "Indicadores de gestión de talento humano: cobertura, impacto, evaluación y retención."
    ],
    saberHacer: [
      "Diseñar y aplicar encuestas de clima organizacional y necesidades formativas en la Mipyme.",
      "Formular manuales de funciones y perfiles de cargo alineados a la productividad.",
      "Diseñar módulos y talleres de capacitación para colaboradores de unidades campesinas.",
      "Organizar la logística de sesiones formativas y preparar listas de verificación.",
      "Medir el retorno y efectividad de las actividades de desarrollo de personal."
    ],
    ser: [
      "Empatía y respeto por la diversidad cultural y el potencial humano.",
      "Habilidades pedagógicas y de facilitación grupal.",
      "Promoción del bienestar integral y el trabajo decente."
    ],
    criteriosEvaluacion: [
      "Describe características del talento humano y aplica instrumentos de diagnóstico de necesidades.",
      "Sustenta la propuesta de capacitación y establece indicadores de gestión.",
      "Organiza actividades formativas y aplica instrumentos de registro y verificación del aprendizaje."
    ]
  },
  {
    code: "210601026",
    name: "Procesamiento de Datos, Estadística e Investigación",
    normName: "Procesar datos de acuerdo con procedimiento técnico y metodología estadística",
    type: "tecnica",
    durationHours: 192,
    phaseIds: ["analisis", "ejecucion", "evaluacion"],
    associatedAps: ["AP2", "AP7", "AP9"],
    raps: [
      { id: "RAP 1", denomination: "Recolectar información según procedimiento técnico de la organización.", competencyCode: "210601026", activityId: "AP2" },
      { id: "RAP 2", denomination: "Analizar la información de acuerdo con metodología estadística.", competencyCode: "210601026", activityId: "AP7" },
      { id: "RAP 3", denomination: "Establecer acciones de mejora del procesamiento de datos a partir de los resultados obtenidos.", competencyCode: "210601026", activityId: "AP9" }
    ],
    saber: [
      "Fuentes primarias y secundarias de recolección de información.",
      "Técnicas de muestreo probabilístico y no probabilístico para investigación de mercados.",
      "Estadística descriptiva: media, mediana, moda, varianza, desviación estándar y percentiles.",
      "Tabulación de encuestas y elaboración de tablas de frecuencia y gráficos circulares/barras.",
      "Elaboración de informes estadísticos con recomendaciones ejecutivas para la toma de decisiones."
    ],
    saberHacer: [
      "Diseñar cuestionarios y formularios digitales de recolección de datos.",
      "Calcular tamaño de muestra representativa para poblaciones de clientes o productores.",
      "Tabular datos en hojas de cálculo y aplicar fórmulas estadísticas.",
      "Construir gráficos descriptivos claros con conclusiones orientadas a la gerencia.",
      "Detectar anomalías en datos y proponer planes de mejora continua."
    ],
    ser: [
      "Objetividad, rigor y precisión matemática.",
      "Pensamiento deductivo e inductivo.",
      "Respeto a la veracidad científica de las evidencias."
    ],
    criteriosEvaluacion: [
      "Aplica instrumentos de recolección según requerimientos técnicos.",
      "Tabula datos y calcula parámetros estadísticos de centralidad y dispersión.",
      "Presenta informes estadísticos claros orientados a la solución de problemas."
    ]
  },
  {
    code: "210601024",
    name: "Elaboración de Documentos Organizacionales",
    normName: "Elaborar documentos de acuerdo con normas técnicas",
    type: "tecnica",
    durationHours: 288,
    phaseIds: ["ejecucion", "evaluacion"],
    associatedAps: ["AP5", "AP9"],
    raps: [
      { id: "RAP 1", denomination: "Interpretar el uso de reglas ortográficas y gramaticales en la construcción de textos según su intención comunicativa.", competencyCode: "210601024", activityId: "AP5" },
      { id: "RAP 2", denomination: "Redactar textos de acuerdo con norma técnica para elaboración de documentos y protocolos.", competencyCode: "210601024", activityId: "AP5" },
      { id: "RAP 3", denomination: "Verificar la construcción de documentos según normativa y políticas de la organización.", competencyCode: "210601024", activityId: "AP9" }
    ],
    saber: [
      "Norma Técnica Colombiana ICONTEC (GTC 185) para la elaboración de documentos administrativos.",
      "Estructura formal de: cartas comerciales, memorandos, circulares, actas de reunión e informes ejecutivos.",
      "Gramática, semántica, sintaxis, ortografía y signos de puntuación.",
      "Postura ergonómica en el puesto de digitación y salud ocupacional.",
      "Criterios de verificación y control de calidad documental."
    ],
    saberHacer: [
      "Redactar oficios, actas de reuniones y memorandos con tono formal y pulcro.",
      "Aplicar márgenes, interlineados, membretes y zonas de firma según norma técnica.",
      "Digitar con rapidez y precisión adoptando hábitos ergonómicos.",
      "Diseñar listas de chequeo para la revisión y control de calidad documental.",
      "Corregir inconsistencias y generar informes técnicos impecables."
    ],
    ser: [
      "Pulcritud y excelencia en los entregables escritos.",
      "Atención al detalle y autocorrección disciplinada.",
      "Puntualidad en la entrega de comunicaciones organizacionales."
    ],
    criteriosEvaluacion: [
      "Diferencia elementos de redacción de textos según procedimiento y norma técnica.",
      "Digita documentos organizacionales adoptando posturas ergonómicas adecuadas.",
      "Presenta informes de evaluación y aplica acciones de mejora a la redacción."
    ]
  },
  {
    code: "240201530",
    name: "Inducción Institucional SENA",
    normName: "Apropiar características de la gestión organizacional del SENA en el contexto de la misión institucional",
    type: "clave_transversal",
    durationHours: 48,
    phaseIds: ["analisis"],
    associatedAps: ["AP1"],
    raps: [
      { id: "RAP Único", denomination: "Apropiar la identidad institucional, modelo pedagógico, reglamento del aprendiz y componentes de la Formación Profesional Integral incorporándolos al proyecto de vida.", competencyCode: "240201530", activityId: "AP1" }
    ],
    saber: [
      "Misión, visión, símbolos, himno y valores del SENA (Ley 119 de 1994).",
      "Modelo Pedagógico de Formación Profesional Integral por competencias.",
      "Reglamento del Aprendiz SENA: deberes, derechos, faltas y debido proceso.",
      "Plataformas institucionales: Sofia Plus, LMS Territorium / ZAJUNA, SVA y Correo Misena.",
      "Estructura del Proyecto Formativo y formulación del Proyecto de Vida."
    ],
    saberHacer: [
      "Navegar autónomamente por las plataformas tecnológicas del SENA.",
      "Formular y redactar el Proyecto de Vida personal y profesional a corto, mediano y largo plazo.",
      "Aplicar el reglamento del aprendiz en la convivencia cotidiana.",
      "Identificar la ruta formativa de las 4 fases del proyecto INNOVAGESTIÓN."
    ],
    ser: [
      "Sentido de pertenencia y orgullo por la institucionalidad SENA.",
      "Honestidad académica, respeto y solidaridad con la comunidad educativa.",
      "Autonomía y compromiso con el propio desarrollo integral."
    ],
    criteriosEvaluacion: [
      "Reconoce la identidad institucional y los procedimientos formativos.",
      "Identifica los componentes del programa desde el proyecto formativo.",
      "Valora el reglamento del aprendiz como guía para la convivencia social y laboral."
    ]
  },
  {
    code: "240201524",
    name: "Comunicación Oral y Escrita",
    normName: "Desarrollar procesos de comunicación oral y escritos en forma eficaz y efectiva",
    type: "clave_transversal",
    durationHours: 48,
    phaseIds: ["ejecucion"],
    associatedAps: ["AP7"],
    raps: [
      { id: "RAP 1-4", denomination: "Analizar componentes de la comunicación, argumentar en forma oral y escrita, y enriquecer el léxico en contextos laborales y sociales.", competencyCode: "240201524", activityId: "AP7" }
    ],
    saber: ["Comunicación verbal y no verbal, técnicas de oratoria, argumentación y normas de cortesía corporativa."],
    saberHacer: ["Sustentar propuestas ante directivos, escuchar activamente y redactar discursos persuasivos."],
    ser: ["Respeto a opiniones divergentes, empatía comunicativa y asertividad."],
    criteriosEvaluacion: ["Se expresa con fluidez y claridad en exposiciones orales y documentos técnicos."]
  },
  {
    code: "240201526",
    name: "Ética y Cultura de Paz - Enrique Low Murtra",
    normName: "Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz",
    type: "clave_transversal",
    durationHours: 48,
    phaseIds: ["analisis"],
    associatedAps: ["AP2"],
    raps: [
      { id: "RAP 1-4", denomination: "Promover la dignidad humana, resolución pacífica de conflictos y uso sostenible de recursos naturales en el entorno productivo.", competencyCode: "240201526", activityId: "AP2" }
    ],
    saber: ["Derechos humanos, dignidad, negociación de conflictos, ética aplicada y responsabilidad social empresarial."],
    saberHacer: ["Resolver desacuerdos mediante el diálogo y proponer iniciativas comunitarias de paz."],
    ser: ["Integridad moral, tolerancia, solidaridad y compromiso con el bien común."],
    criteriosEvaluacion: ["Demuestra conductas éticas en el trabajo colaborativo y respeto por el entorno."]
  },
  {
    code: "240201533",
    name: "Fomento de la Cultura Emprendedora",
    normName: "Fomentar cultura emprendedora según habilidades y competencias personales",
    type: "clave_transversal",
    durationHours: 48,
    phaseIds: ["analisis"],
    associatedAps: ["AP1"],
    raps: [
      { id: "RAP 1-4", denomination: "Establecer características emprendedoras personales, toma de decisiones, creatividad y negociación para el logro de metas.", competencyCode: "240201533", activityId: "AP1" }
    ],
    saber: ["Características Emprendedoras Personales (CEP), búsqueda de oportunidades, persistencia y modelos de negocio."],
    saberHacer: ["Formular planes de negocio iniciales y evaluar riesgos calculados."],
    ser: ["Proactividad, visión de futuro y autoconfianza."],
    criteriosEvaluacion: ["Valora sus características emprendedoras y sustenta estrategias para desafíos reales."]
  },
  {
    code: "240201528",
    name: "Razonamiento Cuantitativo y Matemático",
    normName: "Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática",
    type: "clave_transversal",
    durationHours: 48,
    phaseIds: ["planeacion"],
    associatedAps: ["AP3"],
    raps: [
      { id: "RAP 1-4", denomination: "Plantear y resolver modelos matemáticos y estadísticos en problemas productivos y laborales.", competencyCode: "240201528", activityId: "AP3" }
    ],
    saber: ["Proporcionalidad, regla de tres, ecuaciones de costos, porcentajes, márgenes de ganancia y geometría."],
    saberHacer: ["Calcular costos unitarios, proyecciones financieras y optimización de recursos."],
    ser: ["Precisión, lógica estructurada y perseverancia en el análisis cuantitativo."],
    criteriosEvaluacion: ["Resuelve problemas reales formulando ecuaciones y verificando resultados con herramientas ofimáticas."]
  },
  {
    code: "240202501",
    name: "Bilingüismo - Inglés Técnico",
    normName: "Interactuar en lengua inglesa de forma oral y escrita dentro de contextos sociales y laborales",
    type: "clave_transversal",
    durationHours: 384,
    phaseIds: ["ejecucion"],
    associatedAps: ["AP6"],
    raps: [
      { id: "RAP 1-6", denomination: "Comprender y expresar vocabulario técnico laboral, atención de clientes en inglés y redacción de reportes simples.", competencyCode: "240202501", activityId: "AP6" }
    ],
    saber: ["Gramática en presente, pasado y futuro laboral; léxico administrativo en inglés (business vocabulary)."],
    saberHacer: ["Atender una solicitud básica en inglés, leer manuales de software y redactar correos ejecutivos."],
    ser: ["Confianza comunicativa y apertura a la internacionalización de los servicios."],
    criteriosEvaluacion: ["Se comunica con fluidez básica en situaciones simuladas de negocios en inglés."]
  },
  {
    code: "220601501",
    name: "Protección Ambiental y SST",
    normName: "Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo",
    type: "clave_transversal",
    durationHours: 48,
    phaseIds: ["ejecucion"],
    associatedAps: ["AP5"],
    raps: [
      { id: "RAP 1-4", denomination: "Prevenir impactos ambientales y accidentes laborales (ATEL) según programas de SST y normatividad vigente.", competencyCode: "220601501", activityId: "AP5" }
    ],
    saber: ["Matriz de riesgos laborales, gestión de residuos sólidos, ergonomía de oficina y planes de emergencia."],
    saberHacer: ["Identificar actos y condiciones inseguras en ambientes administrativos y proponer pausas activas."],
    ser: ["Autocuidado, responsabilidad colectiva y compromiso con el medio ambiente."],
    criteriosEvaluacion: ["Aplica controles de impacto ambiental y medidas preventivas de salud laboral."]
  },
  {
    code: "230101507",
    name: "Hábitos Saludables y Actividad Física",
    normName: "Generar hábitos saludables de vida mediante la aplicación de programas de actividad física",
    type: "clave_transversal",
    durationHours: 48,
    phaseIds: ["ejecucion"],
    associatedAps: ["AP5"],
    raps: [
      { id: "RAP 1-4", denomination: "Desarrollar habilidades psicomotrices, acondicionamiento físico, ergonomía y pausas activas en el puesto de trabajo.", competencyCode: "230101507", activityId: "AP5" }
    ],
    saber: ["Nutrición básica, frecuencia cardiaca, miología y biomecánica postural."],
    saberHacer: ["Ejecutar rutinas de pausas activas y registrar fichas antropométricas."],
    ser: ["Disciplina corporal y fomento de un estilo de vida saludable."],
    criteriosEvaluacion: ["Estructura y practica un plan de pausas activas adaptado a su jornada laboral."]
  },
  {
    code: "220501046",
    name: "Aplicación de Herramientas TIC",
    normName: "Utilizar herramientas informáticas de acuerdo con las necesidades de manejo de información",
    type: "clave_transversal",
    durationHours: 48,
    phaseIds: ["planeacion"],
    associatedAps: ["AP3"],
    raps: [
      { id: "RAP 1-4", denomination: "Alistar y aplicar servicios TIC, correo institucional, herramientas de nube y trabajo colaborativo.", competencyCode: "220501046", activityId: "AP3" }
    ],
    saber: ["Plataformas en la nube, almacenamiento seguro, ofimática web y etiqueta digital."],
    saberHacer: ["Organizar repositorios compartidos, reuniones sincrónicas y formularios en línea."],
    ser: ["Ciudadanía digital responsable y colaboración en red."],
    criteriosEvaluacion: ["Utiliza eficazmente herramientas colaborativas en internet para el trabajo en equipo."]
  },
  {
    code: "240201064",
    name: "Investigación Formativa",
    normName: "Orientar investigación formativa según referentes técnicos",
    type: "clave_transversal",
    durationHours: 48,
    phaseIds: ["planeacion"],
    associatedAps: ["AP3"],
    raps: [
      { id: "RAP 1-4", denomination: "Analizar el contexto productivo, estructurar el problema de investigación y formular el marco teórico.", competencyCode: "240201064", activityId: "AP3" }
    ],
    saber: ["Método científico aplicado, formulación de preguntas de investigación y búsqueda en bases académicas."],
    saberHacer: ["Redactar planteamiento del problema, objetivos y marco teórico con normas APA/ICONTEC."],
    ser: ["Rigor metodológico, honestidad en citación y pensamiento crítico."],
    criteriosEvaluacion: ["Estructura un proyecto de investigación formativa pertinente al sector de las Mipymes."]
  },
  {
    code: "999999999",
    name: "Etapa Productiva / Práctica",
    normName: "Aplicar en la resolución de problemas reales del sector productivo las competencias adquiridas",
    type: "tecnica",
    durationHours: 864,
    phaseIds: ["evaluacion"],
    associatedAps: ["AP10"],
    raps: [
      { id: "RAP Único", denomination: "Aplicar en la resolución de problemas reales del sector productivo los conocimientos, habilidades y destrezas del programa de formación.", competencyCode: "999999999", activityId: "AP10" }
    ],
    saber: ["Integración global de todas las competencias técnicas, normatividad empresarial y dinámicas organizacionales."],
    saberHacer: ["Desempeñarse en una empresa real (contrato de aprendizaje, proyecto productivo o pasantía)."],
    ser: ["Puntualidad, ética profesional, liderazgo, trabajo en equipo y adaptación al entorno laboral."],
    criteriosEvaluacion: ["Cumple satisfactoriamente con la bitácora de seguimiento y evaluación del desempeño en la empresa."]
  }
];
