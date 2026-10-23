import { Badge, LeaderboardEntry } from '../types';

export const BADGES_DATA: Badge[] = [
  {
    id: "brujula_formativa",
    title: "Brújula Formativa",
    description: "Exploró la relación entre el proyecto INNOVAGESTIÓN, las 4 fases y el mapa del programa.",
    icon: "Compass",
    category: "fase",
    requiredXp: 100
  },
  {
    id: "pionero_diagnostico",
    title: "Pionero del Diagnóstico",
    description: "Completó la fase de Análisis e identificó las necesidades de una Mipyme o iniciativa campesina.",
    icon: "Search",
    category: "fase",
    requiredXp: 300
  },
  {
    id: "estratega_dofa",
    title: "Estratega Organizacional",
    description: "Dominó la formulación de objetivos SMART, matrices DOFA cruzadas y mapas estratégicos.",
    icon: "Target",
    category: "innovacion",
    requiredXp: 600
  },
  {
    id: "innovador_disruptivo",
    title: "Innovador Disruptivo",
    description: "Diseñó una estrategia de innovación aplicada y validó un prototipo para el sector productivo.",
    icon: "Zap",
    category: "innovacion",
    requiredXp: 900
  },
  {
    id: "arquitecto_procesos",
    title: "Arquitecto de Procesos",
    description: "Modeló flujogramas administrativos y estructuró el plan de acción organizacional 5W2H.",
    icon: "Layers",
    category: "fase",
    requiredXp: 1200
  },
  {
    id: "analista_datos",
    title: "Científico de Información",
    description: "Operó bases de datos, analítica estadística y tableros de control para la toma de decisiones.",
    icon: "BarChart3",
    category: "retos",
    requiredXp: 1500
  },
  {
    id: "guardian_evidencias",
    title: "Guardián de Evidencias",
    description: "Exploró y dominó los 9 productos requeridos con sus criterios de evaluación oficial.",
    icon: "FolderCheck",
    category: "maestria",
    requiredXp: 1800
  },
  {
    id: "lider_campesena",
    title: "Líder Sostenible CAMPESENA",
    description: "Apropió prácticas de bioeconomía, economía circular y sostenibilidad para comunidades rurales.",
    icon: "Leaf",
    category: "maestria",
    requiredXp: 2100
  },
  {
    id: "campeon_trivia",
    title: "Campeón de la Trivia",
    description: "Logró una racha perfecta de respuestas correctas en los desafíos de conocimientos SENA.",
    icon: "Award",
    category: "retos",
    requiredXp: 2400
  },
  {
    id: "tecnologo_integral",
    title: "Apropiación Integral SENA",
    description: "Superó todas las fases formativas y obtuvo la Certificación Oficial del Programa.",
    icon: "GraduationCap",
    category: "maestria",
    requiredXp: 2800
  }
];

export const LEVELS = [
  { level: 1, title: "Aprendiz Inicial", minXp: 0, maxXp: 350, badge: "🌱", color: "from-slate-500 to-emerald-600" },
  { level: 2, title: "Explorador de Gestión", minXp: 350, maxXp: 850, badge: "🌿", color: "from-emerald-500 to-teal-600" },
  { level: 3, title: "Estratega de Innovación", minXp: 850, maxXp: 1600, badge: "⭐", color: "from-blue-500 to-indigo-600" },
  { level: 4, title: "Gestor Tecnológico Pro", minXp: 1600, maxXp: 2500, badge: "🚀", color: "from-amber-500 to-orange-600" },
  { level: 5, title: "Tecnólogo Master SENA", minXp: 2500, maxXp: 9999, badge: "👑", color: "from-yellow-400 to-amber-600" }
];

export interface LearningMission {
  id: string;
  title: string;
  phaseId: string;
  description: string;
  xpReward: number;
  badgeRewardId?: string;
  criteria: string;
  actionLabel: string;
}

export const LEARNING_MISSIONS: LearningMission[] = [
  {
    id: "mision_01",
    title: "Misión 1: La Brújula de INNOVAGESTIÓN",
    phaseId: "analisis",
    description: "Explora la estructura completa del proyecto: relación entre Objetivo General, las 4 Fases y los 9 Productos.",
    xpReward: 150,
    badgeRewardId: "brujula_formativa",
    criteria: "Interpretar principios de coordinación y estructura del proyecto SENA.",
    actionLabel: "Explorar Mapa del Programa"
  },
  {
    id: "mision_02",
    title: "Misión 2: Diagnóstico en la Granja Campesina",
    phaseId: "analisis",
    description: "Resuelve el simulador del caso práctico de la Cooperativa Agropecuaria de Santander y recopila hallazgos.",
    xpReward: 200,
    badgeRewardId: "pionero_diagnostico",
    criteria: "Aplicar instrumentos diagnósticos según la metodología del programa.",
    actionLabel: "Iniciar Simulación Análisis"
  },
  {
    id: "mision_03",
    title: "Misión 3: El Arte de la Estrategia DOFA",
    phaseId: "planeacion",
    description: "Construye el plan estratégico cruzando fortalezas y debilidades para generar objetivos SMART.",
    xpReward: 250,
    badgeRewardId: "estratega_dofa",
    criteria: "Formular metas SMART y matrices de correlación estratégica.",
    actionLabel: "Superar Reto Estratégico"
  },
  {
    id: "mision_04",
    title: "Misión 4: Innovación Rural y Digital",
    phaseId: "planeacion",
    description: "Diseña una propuesta de valor con herramientas ágiles (Design Thinking) y minimiza riesgos de inversión.",
    xpReward: 250,
    badgeRewardId: "innovador_disruptivo",
    criteria: "Elaborar mapa de riesgos internos y validar prototipo de bajo costo.",
    actionLabel: "Simular Caso Innovación"
  },
  {
    id: "mision_05",
    title: "Misión 5: Implementación y Datos Masivos",
    phaseId: "ejecucion",
    description: "Implementa una solución tecnológica de base de datos, liquidación contable y análisis estadístico.",
    xpReward: 300,
    badgeRewardId: "analista_datos",
    criteria: "Procesar transacciones contables y construir tablero de indicadores.",
    actionLabel: "Ejecutar Caso Tecnológico"
  },
  {
    id: "mision_06",
    title: "Misión 6: Auditoría, Sostenibilidad y Grado",
    phaseId: "evaluacion",
    description: "Evalúa el cumplimiento de metas con semaforización de KPIs y consolida el Repositorio Digital de Evidencias.",
    xpReward: 350,
    badgeRewardId: "tecnologo_integral",
    criteria: "Proponer planes de mejora continua bajo ciclo PHVA y generar certificación.",
    actionLabel: "Auditar y Certificar"
  }
];

export const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: "Valentina Gómez Flórez", team: "Equipo AgroInnova San Gil", xp: 2950, badgesCount: 10 },
  { rank: 2, name: "Carlos Andrés Pedraza", team: "Equipo Gestión Socorro", xp: 2680, badgesCount: 9 },
  { rank: 3, name: "Aprendiz SENA (Tú)", team: "Iniciativa CAMPESENA Andes", xp: 450, badgesCount: 2, isCurrentUser: true },
  { rank: 4, name: "Mariana Rueda Bautista", team: "Equipo Panela Sostenible", xp: 2150, badgesCount: 7 },
  { rank: 5, name: "Mateo Villamizar", team: "Equipo Digital Chucurí", xp: 1980, badgesCount: 6 },
  { rank: 6, name: "Diana Sofía Barajas", team: "Equipo Lácteos Serranía", xp: 1820, badgesCount: 6 },
  { rank: 7, name: "Jhoan Sebastián Mantilla", team: "Equipo AgroInnova San Gil", xp: 1640, badgesCount: 5 }
];
