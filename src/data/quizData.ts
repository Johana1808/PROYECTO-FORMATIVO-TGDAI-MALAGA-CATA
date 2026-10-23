import { QuizQuestion } from '../types';

export const DIAGNOSTIC_QUIZ: QuizQuestion[] = [
  {
    id: "diag_q1",
    question: "¿Cuál es el propósito central del Proyecto Formativo INNOVAGESTIÓN (Código SOFIA: 3639874)?",
    options: [
      "Vender productos agrícolas en plazas de mercado sin planeación.",
      "Desarrollar una estrategia de gestión administrativa e innovación para fortalecer capacidades de Mipymes y organizaciones campesinas.",
      "Capacitar únicamente en mantenimiento de equipos de cómputo.",
      "Redactar contratos mercantiles sin diagnóstico previo."
    ],
    correctIndex: 1,
    explanation: "El objetivo general del proyecto INNOVAGESTIÓN es desarrollar una estrategia de gestión administrativa e innovación para fortalecer las capacidades organizativas, administrativas, tecnológicas y de innovación de las mipymes.",
    dimension: "saber",
    associatedCompetency: "210601023 - Coordinación de Actividades Administrativas"
  },
  {
    id: "diag_q2",
    question: "¿Cuáles son las 4 fases ordenadas del proyecto formativo en el SENA?",
    options: [
      "Inicio, Desarrollo, Cierre y Archivo",
      "Análisis, Planeación, Ejecución y Evaluación",
      "Diagnóstico, Presupuesto, Cobro y Liquidación",
      "Inducción, Lectiva, Práctica y Graduación"
    ],
    correctIndex: 1,
    explanation: "El ciclo pedagógico de formación por proyectos del SENA se estructura rigurosamente en 4 fases: Análisis, Planeación, Ejecución y Evaluación.",
    dimension: "saber",
    associatedCompetency: "240201530 - Inducción Institucional SENA"
  },
  {
    id: "diag_q3",
    question: "El 'Informe de Diagnóstico Organizacional' corresponde al Producto N° 2. ¿A qué fase y actividad pertenece?",
    options: [
      "Fase de Ejecución - AP6",
      "Fase de Análisis - AP2",
      "Fase de Planeación - AP3",
      "Fase de Evaluación - AP8"
    ],
    correctIndex: 1,
    explanation: "El Producto 2 se produce en la Fase de Análisis mediante la AP2: 'Aplicar instrumentos de diagnóstico para analizar las capacidades organizativas, administrativas, comerciales, financieras y tecnológicas'.",
    dimension: "saberHacer",
    associatedCompetency: "210601023 / 210601026"
  },
  {
    id: "diag_q4",
    question: "En la formación integral del SENA, ¿cuáles son las 3 dimensiones del conocimiento que evalúan el desempeño del aprendiz?",
    options: [
      "Lectura, Escritura y Memoria",
      "Saber (Conceptual), Saber Hacer (Procedimental) y Ser (Actitudinal/Valorativo)",
      "Teoría, Examen y Asistencia",
      "Pasado, Presente y Futuro"
    ],
    correctIndex: 1,
    explanation: "El modelo pedagógico del SENA evalúa de manera integral el Saber (conceptos), el Saber Hacer (habilidades técnicas y procedimentales) y el Ser (valores éticos, trabajo colaborativo y liderazgo).",
    dimension: "ser",
    associatedCompetency: "240201530 / 240201526"
  },
  {
    id: "diag_q5",
    question: "¿Qué herramienta estratégica permite cruzar Fortalezas, Oportunidades, Debilidades y Amenazas para formular estrategias?",
    options: [
      "Diagrama de Gantt simple",
      "Matriz DOFA cruzada (Estrategias FO, FA, DO, DA)",
      "Factura electrónica",
      "Hoja de vida"
    ],
    correctIndex: 1,
    explanation: "La Matriz DOFA cruzada permite formular estrategias ofensivas, defensivas, de reorientación y supervivencia correlacionando variables internas y del entorno.",
    dimension: "saberHacer",
    associatedCompetency: "210001012 - Diagnóstico e Innovación Empresarial"
  }
];

export const FORMATIVE_QUIZ: QuizQuestion[] = [
  {
    id: "form_q1",
    question: "¿Qué norma técnica colombiana rige la elaboración formal de cartas, memorandos, circulares y actas?",
    options: [
      "Norma ISO 9001 únicamente",
      "Guía Técnica Colombiana GTC 185 (ICONTEC)",
      "Código de Tránsito",
      "Ley de Comercio Electrónico"
    ],
    correctIndex: 1,
    explanation: "La GTC 185 de ICONTEC establece pautas y recomendaciones para la elaboración de documentos comerciales y administrativos en Colombia.",
    dimension: "saber",
    associatedCompetency: "210601024 - Elaboración de Documentos"
  },
  {
    id: "form_q2",
    question: "¿Cuál es el Producto N° 5 del proyecto formativo y qué componentes mínimos debe integrar?",
    options: [
      "Un folleto publicitario impreso",
      "Sistema o herramienta tecnológica de gestión con registros administrativos, indicadores y soporte a decisiones",
      "Un recibo de caja menor en talonario de papel",
      "Una lista de asistencia física"
    ],
    correctIndex: 1,
    explanation: "El Producto 5 es el 'Sistema o herramienta tecnológica de gestión de información', que incluye formularios de captura, bases de datos, cálculos contables/nómina y cuadros de mando.",
    dimension: "saberHacer",
    associatedCompetency: "220501121 / 220501114"
  },
  {
    id: "form_q3",
    question: "Al liquidar la nómina de un trabajador en Colombia, ¿cuáles son los conceptos de seguridad social y prestaciones legales?",
    options: [
      "Solo pagar salario básico sin aportes",
      "Salud (EPS), Pensión (AFP), ARL, más cesantías, intereses sobre cesantías, prima de servicios y vacaciones",
      "Bono navideño discrecional únicamente",
      "Descuento del 50% por conceptos no autorizados"
    ],
    correctIndex: 1,
    explanation: "La legislación laboral colombiana y el Código Sustantivo del Trabajo exigen aportes al Sistema de Seguridad Social Integral y provisión de prestaciones sociales.",
    dimension: "saberHacer",
    associatedCompetency: "210303037 - Reconocimiento de Recursos Financieros"
  },
  {
    id: "form_q4",
    question: "¿Qué principio rige la custodia de información y datos personales en las organizaciones bajo la Ley 1581 de 2012?",
    options: [
      "Habeas Data: confidencialidad, autorización previa, veracidad y seguridad de los datos",
      "Publicar todos los datos personales en redes abiertas",
      "Venta libre de correos de clientes a terceros",
      "Ignorar las solicitudes de actualización de los titulares"
    ],
    correctIndex: 0,
    explanation: "La Ley 1581 de 2012 y el principio de Habeas Data obligan a las empresas a tratar la información personal con autorización expresa, seguridad y confidencialidad.",
    dimension: "ser",
    associatedCompetency: "220501114 / 210601020"
  },
  {
    id: "form_q5",
    question: "¿En qué consiste el Producto N° 9: Repositorio Digital de Evidencias del Proyecto?",
    options: [
      "Guardar todo en el escritorio de la computadora en desorden",
      "Consolidación estructurada de instrumentos aplicados, bases de datos, matrices, informes, presentaciones y soportes generados",
      "Eliminar los archivos al terminar cada trimestre",
      "Entregar únicamente un USB vacío con el logo del SENA"
    ],
    correctIndex: 1,
    explanation: "El Producto 9 consolida en orden archivístico todas las evidencias generadas en el proyecto INNOVAGESTIÓN, garantizando trazabilidad y transferencia técnica.",
    dimension: "saberHacer",
    associatedCompetency: "210602021 - Organización de Archivos de Gestión"
  }
];

export const TRIVIA_QUESTIONS: QuizQuestion[] = [
  {
    id: "triv_1",
    question: "¿Cuál es la sigla del sistema en el cual se inscriben los aprendices y se gestionan fichas en el SENA?",
    options: ["SOFIA Plus", "FACEBOOK", "DIAN", "EXCEL"],
    correctIndex: 0,
    explanation: "SOFIA Plus (Sistema Optimizado para la Formación Integral del Aprendizaje Activo) es la plataforma de gestión del SENA.",
    dimension: "saber",
    associatedCompetency: "240201530"
  },
  {
    id: "triv_2",
    question: "¿Qué significan las siglas 'CAMPESENA' en la estrategia del SENA?",
    options: [
      "Campaña de senderismo nacional",
      "Estrategia integral del SENA para el reconocimiento, formación y fortalecimiento del campesinado colombiano",
      "Campeonato deportivo del SENA",
      "Comité de compras agrícolas"
    ],
    correctIndex: 1,
    explanation: "CAMPESENA es la estrategia institucional del SENA orientada a campesinos y campesinas para reconocer su labor y fortalecer sus unidades productivas.",
    dimension: "ser",
    associatedCompetency: "Proyecto INNOVAGESTIÓN"
  },
  {
    id: "triv_3",
    question: "En un diagrama de Ishikawa (Espina de Pescado), ¿qué se coloca en la 'cabeza' del pez?",
    options: ["El nombre del gerente", "El efecto o problema principal", "El presupuesto total", "La fecha de cumpleaños"],
    correctIndex: 1,
    explanation: "En la cabeza del diagrama de Ishikawa se ubica el problema o efecto no deseado, y en las espinas se analizan las causas raíces (método, mano de obra, maquinaria, materiales, medición y medio ambiente).",
    dimension: "saberHacer",
    associatedCompetency: "210601023 / 210601026"
  },
  {
    id: "triv_4",
    question: "¿Qué indicador mide el grado en que se alcanzaron los objetivos propuestos?",
    options: ["Eficacia", "Termómetro", "Altímetro", "Horómetro"],
    correctIndex: 0,
    explanation: "La eficacia mide el logro de resultados previstos (¿Se cumplió la meta?), mientras que la eficiencia mide el uso óptimo de recursos.",
    dimension: "saber",
    associatedCompetency: "210601023 - Indicadores de Gestión"
  },
  {
    id: "triv_5",
    question: "¿Qué método ágil utiliza 5 etapas: Empatizar, Definir, Idear, Prototipar y Testear?",
    options: ["Design Thinking", "Método Tradicional", "Contabilidad Básica", "Regla de Tres"],
    correctIndex: 0,
    explanation: "Design Thinking (Pensamiento de Diseño) es la metodología centrada en el usuario para resolver problemas complejos e innovar en productos y servicios.",
    dimension: "saberHacer",
    associatedCompetency: "210001012 - Innovación Empresarial"
  }
];

export interface MatchPair {
  id: string;
  phase: string;
  ap: string;
  competencyCode: string;
  competencyName: string;
  productTitle: string;
  productNumber: number;
}

export const CURRICULAR_MATCH_PAIRS: MatchPair[] = [
  {
    id: "match_1",
    phase: "Análisis",
    ap: "AP1: Analizar la estructura organizacional",
    competencyCode: "210601023",
    competencyName: "Coordinación de Actividades Administrativas",
    productTitle: "Informe de Análisis Organizacional",
    productNumber: 1
  },
  {
    id: "match_2",
    phase: "Análisis",
    ap: "AP2: Aplicar instrumentos de diagnóstico",
    competencyCode: "210601026",
    competencyName: "Procesamiento de Datos y Estadística",
    productTitle: "Informe de Diagnóstico Organizacional",
    productNumber: 2
  },
  {
    id: "match_3",
    phase: "Planeación",
    ap: "AP3: Estructurar la estrategia tecnológica",
    competencyCode: "210601023",
    competencyName: "Planeación Estratégica",
    productTitle: "Plan Estratégico Organizacional",
    productNumber: 3
  },
  {
    id: "match_4",
    phase: "Planeación",
    ap: "AP4: Definir acciones de innovación",
    competencyCode: "210001012",
    competencyName: "Diagnóstico e Innovación Empresarial",
    productTitle: "Plan de Innovación Empresarial",
    productNumber: 4
  },
  {
    id: "match_5",
    phase: "Ejecución",
    ap: "AP5: Implementar herramientas tecnológicas",
    competencyCode: "220501121",
    competencyName: "Operación de Tecnologías Informáticas",
    productTitle: "Sistema o Herramienta Tecnológica de Gestión",
    productNumber: 5
  },
  {
    id: "match_6",
    phase: "Ejecución",
    ap: "AP6: Desarrollar acciones de fortalecimiento",
    competencyCode: "210601023",
    competencyName: "Plan de Acción y Coordinación",
    productTitle: "Plan de Acción Organizacional",
    productNumber: 6
  },
  {
    id: "match_7",
    phase: "Evaluación",
    ap: "AP8: Medir cumplimiento con indicadores",
    competencyCode: "220501114",
    competencyName: "Sistematización y Analítica de Datos",
    productTitle: "Informe de Seguimiento y Mejora Organizacional",
    productNumber: 7
  },
  {
    id: "match_8",
    phase: "Evaluación",
    ap: "AP9: Proponer acciones de mejora",
    competencyCode: "210601024",
    competencyName: "Elaboración de Documentos y Calidad",
    productTitle: "Plan de Mejoramiento Organizacional",
    productNumber: 8
  },
  {
    id: "match_9",
    phase: "Evaluación",
    ap: "AP9 / AP10: Consolidación y Etapa Práctica",
    competencyCode: "210602021",
    competencyName: "Organización de Archivos de Gestión",
    productTitle: "Repositorio Digital de Evidencias",
    productNumber: 9
  }
];
