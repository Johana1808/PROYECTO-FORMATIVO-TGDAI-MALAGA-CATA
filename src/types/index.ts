export type PhaseId = 'analisis' | 'planeacion' | 'ejecucion' | 'evaluacion';

export interface Phase {
  id: PhaseId;
  number: number;
  name: string;
  shortDesc: string;
  color: string;
  badgeColor: string;
  activities: ProjectActivity[];
}

export interface ProjectActivity {
  id: string; // e.g. "AP1"
  number: number;
  title: string;
  description: string;
  phaseId: PhaseId;
  durationHours: number;
  competencyCodes: string[];
  associatedProducts: number[]; // e.g. [1, 2]
}

export type CompetencyType = 'tecnica' | 'clave_transversal';

export interface Competency {
  code: string;
  name: string;
  normName: string;
  type: CompetencyType;
  durationHours: number;
  phaseIds: PhaseId[];
  associatedAps: string[];
  raps: ResultAprendizaje[];
  saber: string[]; // Conocimientos Conceptuales
  saberHacer: string[]; // Conocimientos Procedimentales / de Proceso
  ser: string[]; // Conocimientos Actitudinales y Valorales
  criteriosEvaluacion: string[];
}

export interface ResultAprendizaje {
  id: string;
  code?: string;
  denomination: string;
  competencyCode: string;
  activityId?: string;
}

export interface RequiredProduct {
  id: number;
  code: string;
  title: string;
  subtitle: string;
  phaseId: PhaseId;
  associatedAp: string;
  description: string;
  structure: string[];
  evaluationCriteria: string[];
  campesenaFocus: string;
  templateFormat: string;
  sampleEvidence: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'fase' | 'retos' | 'innovacion' | 'maestria';
  requiredXp: number;
  unlockedAt?: string;
}

export interface LearnerProfile {
  name: string;
  documentType: string;
  documentNumber: string;
  ficheNumber: string;
  trainingCenter: string;
  regional: string;
  level: number;
  levelTitle: string;
  xp: number;
  streakDays: number;
  unlockedBadgeIds: string[];
  completedActivityIds: string[];
  completedQuizIds: string[];
  simulationScores: Record<string, number>;
  certificateGenerated: boolean;
  certificateDate?: string;
  certificateHash?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  dimension: 'saber' | 'saberHacer' | 'ser';
  associatedCompetency: string;
}

export interface SimulationCase {
  id: string;
  phaseId: PhaseId;
  title: string;
  organizationType: string;
  location: string;
  context: string;
  problem: string;
  challenge: string;
  options: {
    id: string;
    text: string;
    impactScore: number;
    feedback: string;
    dimensionFocus: string;
  }[];
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  team: string;
  xp: number;
  badgesCount: number;
  isCurrentUser?: boolean;
}
