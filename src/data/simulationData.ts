import { SimulationCase } from '../types';

export const SIMULATION_CASES: SimulationCase[] = [
  {
    id: "sim_analisis_cafe",
    phaseId: "analisis",
    title: "Caso 1: Diagnóstico en la Cooperativa Agropecuaria 'Café Santander'",
    organizationType: "Asociación Campesina / Mipyme Rural (32 productores asociados)",
    location: "San Gil, Santander",
    context: "La cooperativa comercializa café pergamino seco. Los productores afirman que sus ingresos no cubren los costos y que pierden ventas debido a retrasos en la entrega y desorganización en los registros de acopio.",
    problem: "Falta de caracterización formal de la estructura de procesos, carencia de instrumentos para medir la calidad y desconocimiento de los costos reales de cada productor.",
    challenge: "¿Qué paquete de acciones de diagnóstico administrativo y recolección de información debes priorizar para generar el Informe de Diagnóstico Organizacional (Producto 2)?",
    options: [
      {
        id: "opt_1",
        text: "Diseñar y aplicar encuestas a los 32 productores y compradores clave, tabular datos estadísticos de rendimientos, levantar el mapa de procesos de acopio y estructurar una matriz PESTEL con árbol de problemas.",
        impactScore: 100,
        feedback: "¡Excelente decisión! Cumple rigurosamente con los RAPs de AP1 y AP2: integra recolección sistemática, estadística descriptiva, análisis del macroentorno y mapa de procesos.",
        dimensionFocus: "Saber: Teoría de procesos y estadística. Saber Hacer: Aplicación de instrumentos y tabulación. Ser: Empatía y rigor metodológico."
      },
      {
        id: "opt_2",
        text: "Sugerir inmediatamente comprar un software costoso de gestión ERP sin encuestar a los campesinos ni conocer sus procesos actuales.",
        impactScore: 35,
        feedback: "Inadecuado para la fase de Análisis. No se puede prescribir una solución tecnológica sin un diagnóstico previo de capacidades y necesidades reales (viola el procedimiento formativo SENA).",
        dimensionFocus: "Falta de diagnóstico previo y pertinencia contextual."
      },
      {
        id: "opt_3",
        text: "Realizar únicamente una reunión informal con el presidente de la asociación y anotar sus opiniones en un cuaderno sin instrumentos validados ni análisis estadístico.",
        impactScore: 50,
        feedback: "Insuficiente. La evidencia del Producto 2 exige instrumentos estructurados, muestra representativa, tabulación de variables y matriz de priorización técnica.",
        dimensionFocus: "Carencia de rigor técnico y metodológico."
      }
    ]
  },
  {
    id: "sim_planeacion_panela",
    phaseId: "planeacion",
    title: "Caso 2: Estrategia e Innovación en 'Panela Orgánica Güepsa'",
    organizationType: "Microempresa Agroindustrial Campesina",
    location: "Hoya del Río Suárez, Santander",
    context: "La microempresa produce panela en bloque tradicional. El diagnóstico reveló alta competencia de precios y clientes en Bucaramanga que solicitan panela pulverizada con trazabilidad ecológica y empaque sostenible.",
    problem: "Carencia de un plan estratégico formal y necesidad de innovar en el proceso de presentación y comercialización sin endeudarse en exceso.",
    challenge: "¿Cómo estructurar el Plan Estratégico Organizacional (Producto 3) y el Plan de Innovación Empresarial (Producto 4)?",
    options: [
      {
        id: "opt_1",
        text: "Estructurar matriz DOFA cruzando la oportunidad de mercado ecológico con la fortaleza de caña orgánica, formular objetivos SMART a 2 años, y prototipar un empaque biodegradable con código QR de origen mediante Design Thinking y matriz de riesgos.",
        impactScore: 100,
        feedback: "¡Perfecto enfoque estratégico e innovador! Articula exactamente los requerimientos de AP3 y AP4: combina formulación DOFA con metodologías ágiles de innovación de bajo costo y enfoque CAMPESENA.",
        dimensionFocus: "Saber: Balanced Scorecard y modelos de innovación. Saber Hacer: Formulación DOFA y prototipado ágil. Ser: Creatividad e innovación sostenible."
      },
      {
        id: "opt_2",
        text: "Bajar los precios un 40% para competir con los intermediarios tradicionales y abandonar la producción orgánica por ser más exigente.",
        impactScore: 30,
        feedback: "Decisión contraproducente. Destruye el valor agregado campesino y vulnera el objetivo del proyecto INNOVAGESTIÓN de fortalecer la sostenibilidad y competitividad.",
        dimensionFocus: "Falta de visión estratégica y pérdida de rentabilidad."
      },
      {
        id: "opt_3",
        text: "Formular un plan estratégico copiado de internet de una multinacional de gaseosas sin adaptarlo a la realidad campesina de Güepsa.",
        impactScore: 40,
        feedback: "No es pertinente. El SENA exige pertinencia territorial, contextualización y análisis de recursos propios para asegurar la viabilidad del proyecto.",
        dimensionFocus: "Falta de contextualización y ética investigativa."
      }
    ]
  },
  {
    id: "sim_ejecucion_confecciones",
    phaseId: "ejecucion",
    title: "Caso 3: Transformación Tecnológica y Contable en 'Confecciones Andina'",
    organizationType: "Taller Mipyme de Confección de Dotaciones Industriales (14 colaboradores)",
    location: "Socorro, Santander",
    context: "El taller no cuenta con registro sistematizado de inventario de telas ni de pedidos. La nómina se paga a mano sin calcular prestaciones sociales ni horas extras con precisión, generando inconformidades y riesgos legales.",
    problem: "Desorden operativo, falta de liquidación técnica de nómina según el Código Sustantivo del Trabajo e inexistencia de base de datos de clientes.",
    challenge: "¿Cómo implementar la herramienta tecnológica de gestión (Producto 5) y las acciones del Plan de Acción (Producto 6)?",
    options: [
      {
        id: "opt_1",
        text: "Diseñar e implementar una herramienta en hoja de cálculo automatizada con base de datos de clientes/stock, parametrizar la liquidación de nómina con seguridad social y retenciones legales, y capacitar al personal con protocolos de servicio.",
        impactScore: 100,
        feedback: "¡Magistral implementación! Corresponde exactamente a los RAPs de AP5, AP6 y AP7: une tecnología de información, contabilidad, nómina y talento humano en un sistema accesible.",
        dimensionFocus: "Saber: Normativa laboral y bases de datos. Saber Hacer: Parametrización y liquidación. Ser: Responsabilidad laboral y servicio al cliente."
      },
      {
        id: "opt_2",
        text: "Continuar llevando cuadernos de papel pero comprar candados nuevos para archivarlos con llave.",
        impactScore: 30,
        feedback: "No cumple con los objetivos de digitalización ni eficiencia tecnológica de la fase de Ejecución del proyecto INNOVAGESTIÓN.",
        dimensionFocus: "Resistencia tecnológica y estancamiento operativo."
      },
      {
        id: "opt_3",
        text: "Subcontratar todo el proceso administrativo con una firma de Bogotá que cobra el triple de las utilidades del taller.",
        impactScore: 45,
        feedback: "Inviable financieramente. El tecnólogo SENA debe desarrollar capacidades internas sostenibles en la propia empresa.",
        dimensionFocus: "Inviabilidad financiera y dependencia externa."
      }
    ]
  },
  {
    id: "sim_evaluacion_cacao",
    phaseId: "evaluacion",
    title: "Caso 4: Auditoría y Plan de Mejora en 'Cacao de la Serranía'",
    organizationType: "Asociación Agroempresarial de Cacaoteros (48 familias)",
    location: "San Vicente de Chucurí, Santander",
    context: "Tras 6 meses de aplicar la estrategia de gestión, se requiere medir el impacto real en ventas, tiempos de respuesta a clientes y costos de secado, para presentar el informe de auditoría y consolidar el repositorio de evidencias.",
    problem: "Se identificaron ligeras desviaciones en el indicador de entrega a tiempo debido a lluvias en la vía terciaria.",
    challenge: "¿Cómo estructurar el Informe de Seguimiento (Producto 7), el Plan de Mejoramiento (Producto 8) y el Repositorio de Evidencias (Producto 9)?",
    options: [
      {
        id: "opt_1",
        text: "Calcular indicadores de cumplimiento meta vs real con semaforización, aplicar análisis de causa raíz con diagrama de Ishikawa a las demoras logísticas, concertar plan de mejora PHVA con ruta alternativa y compilar el 100% de soportes en el Repositorio Digital.",
        impactScore: 100,
        feedback: "¡Apropiación sobresaliente! Integra a la perfección AP8, AP9 y la preparación de evidencias integrales para la etapa productiva y certificación final.",
        dimensionFocus: "Saber: Auditoría de indicadores y ciclo PHVA. Saber Hacer: Diagrama causa-efecto y repositorio. Ser: Compromiso con la excelencia y mejora continua."
      },
      {
        id: "opt_2",
        text: "Ocultar las fallas de entrega para que el informe muestre 100% de éxito ficticio ante los directivos.",
        impactScore: 20,
        feedback: "Inaceptable éticamente. La formación profesional integral del SENA inculca transparencia, honestidad y análisis constructivo de desviaciones.",
        dimensionFocus: "Falta grave de ética profesional (Ser)."
      },
      {
        id: "opt_3",
        text: "Entregar solo un resumen verbal sin gráficos de indicadores, sin análisis de causas ni repositorio ordenado de carpetas.",
        impactScore: 40,
        feedback: "Insuficiente. El Producto 7, 8 y 9 exigen rigor técnico, documentación verificable y conservación archivística.",
        dimensionFocus: "Deficiencia documental y falta de trazabilidad."
      }
    ]
  }
];
