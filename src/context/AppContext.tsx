import React, { createContext, useContext, useState, useEffect } from 'react';
import { LearnerProfile, Badge } from '../types';
import { BADGES_DATA, LEVELS } from '../data/gamificationData';
import confetti from 'canvas-confetti';

interface Toast {
  id: string;
  title: string;
  message: string;
  type: 'xp' | 'badge' | 'success' | 'info';
}

import { Language, translations } from '../data/translations';

interface AppContextType {
  profile: LearnerProfile;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['es'];
  updateProfile: (updates: Partial<LearnerProfile>) => void;
  resetLearnerSession: (name?: string, docType?: string, docNumber?: string, fiche?: string) => void;
  addXp: (amount: number, reason?: string) => void;
  unlockBadge: (badgeId: string) => void;
  completeActivity: (apId: string) => void;
  recordQuizScore: (quizId: string, score: number) => void;
  recordSimulationScore: (simId: string, score: number) => void;
  generateCertificate: () => { success: boolean; hash: string };
  toasts: Toast[];
  removeToast: (id: string) => void;
  progressPercentage: number;
}

const DEFAULT_PROFILE: LearnerProfile = {
  name: "Johana Marcela Alvarado Flórez",
  documentType: "CC",
  documentNumber: "63.396.427",
  ficheNumber: "3639874",
  trainingCenter: "Centro Agroempresarial y Turístico de los Andes",
  regional: "Regional Santander",
  level: 1,
  levelTitle: "Aprendiz Inicial",
  xp: 150,
  streakDays: 1,
  unlockedBadgeIds: ["brujula_formativa"],
  completedActivityIds: [],
  completedQuizIds: [],
  simulationScores: {},
  certificateGenerated: false,
};

const STORAGE_KEY = "sena_innova_aprende_profile_v1";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<LearnerProfile>(() => {
    // Check URL parameters first for student links
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const nameParam = params.get('nombre') || params.get('name') || params.get('estudiante');
        const docParam = params.get('doc') || params.get('documento') || params.get('cedula');
        const typeParam = params.get('tipo') || params.get('tipo_doc');
        const fichaParam = params.get('ficha');
        const centroParam = params.get('centro');
        const regionalParam = params.get('regional');

        if (nameParam || docParam || fichaParam) {
          return {
            ...DEFAULT_PROFILE,
            name: nameParam ? decodeURIComponent(nameParam) : DEFAULT_PROFILE.name,
            documentNumber: docParam ? decodeURIComponent(docParam) : DEFAULT_PROFILE.documentNumber,
            documentType: typeParam ? decodeURIComponent(typeParam) : DEFAULT_PROFILE.documentType,
            ficheNumber: fichaParam ? decodeURIComponent(fichaParam) : DEFAULT_PROFILE.ficheNumber,
            trainingCenter: centroParam ? decodeURIComponent(centroParam) : DEFAULT_PROFILE.trainingCenter,
            regional: regionalParam ? decodeURIComponent(regionalParam) : DEFAULT_PROFILE.regional,
          };
        }
      } catch (err) {
        console.error("Error parsing URL params", err);
      }
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_PROFILE, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error("Error reading localStorage", e);
    }
    return DEFAULT_PROFILE;
  });

  const [activeTab, setActiveTab] = useState<string>("mapa");
  const [language, setLanguage] = useState<Language>("es");
  const [toasts, setToasts] = useState<Toast[]>([]);

  const t = translations[language];

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  }, [profile]);

  const addToast = (title: string, message: string, type: Toast['type']) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev.slice(-3), { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#39A900', '#00324D', '#FBBF24', '#10B981']
    });
  };

  const updateProfile = (updates: Partial<LearnerProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const resetLearnerSession = (name?: string, docType?: string, docNumber?: string, fiche?: string) => {
    const newProfile: LearnerProfile = {
      ...DEFAULT_PROFILE,
      name: name?.trim() || "Nuevo Aprendiz",
      documentType: docType || "CC",
      documentNumber: docNumber?.trim() || "00000000",
      ficheNumber: fiche?.trim() || "3639874",
      unlockedBadgeIds: ["brujula_formativa"],
      completedActivityIds: [],
      completedQuizIds: [],
      simulationScores: {},
      certificateGenerated: false,
      certificateDate: undefined,
      certificateHash: undefined,
      xp: 150,
      level: 1,
      levelTitle: "Aprendiz Inicial",
    };
    setProfile(newProfile);
    addToast("¡Sesión de Aprendiz Iniciada!", `Bienvenido(a) ${newProfile.name}. Los avances y el certificado se emitirán a tu nombre.`, "success");
  };

  const addXp = (amount: number, reason?: string) => {
    setProfile((prev) => {
      const newXp = prev.xp + amount;
      let newLevel = prev.level;
      let newLevelTitle = prev.levelTitle;

      for (let i = LEVELS.length - 1; i >= 0; i--) {
        if (newXp >= LEVELS[i].minXp) {
          newLevel = LEVELS[i].level;
          newLevelTitle = LEVELS[i].title;
          break;
        }
      }

      if (newLevel > prev.level) {
        addToast("¡Subiste de Nivel!", `Ahora eres Nivel ${newLevel}: ${newLevelTitle}`, "success");
        triggerConfetti();
      } else if (reason) {
        addToast(`+${amount} XP`, reason, "xp");
      }

      return {
        ...prev,
        xp: newXp,
        level: newLevel,
        levelTitle: newLevelTitle,
      };
    });
  };

  const unlockBadge = (badgeId: string) => {
    setProfile((prev) => {
      if (prev.unlockedBadgeIds.includes(badgeId)) return prev;
      const badge = BADGES_DATA.find((b) => b.id === badgeId);
      const title = badge ? badge.title : "Nueva Insignia";
      addToast("¡Insignia Desbloqueada!", `Has ganado la insignia "${title}"`, "badge");
      triggerConfetti();
      return {
        ...prev,
        unlockedBadgeIds: [...prev.unlockedBadgeIds, badgeId],
      };
    });
  };

  const completeActivity = (apId: string) => {
    setProfile((prev) => {
      if (prev.completedActivityIds.includes(apId)) return prev;
      addXp(120, `Completaste la actividad formativa ${apId}`);
      return {
        ...prev,
        completedActivityIds: [...prev.completedActivityIds, apId],
      };
    });
  };

  const recordQuizScore = (quizId: string, score: number) => {
    setProfile((prev) => {
      const isNew = !prev.completedQuizIds.includes(quizId);
      if (isNew) {
        addXp(score >= 80 ? 150 : 80, `Evaluación ${quizId} superada con ${score}%`);
      }
      return {
        ...prev,
        completedQuizIds: isNew ? [...prev.completedQuizIds, quizId] : prev.completedQuizIds,
      };
    });
  };

  const recordSimulationScore = (simId: string, score: number) => {
    setProfile((prev) => {
      const prevScore = prev.simulationScores[simId] || 0;
      if (score > prevScore) {
        addXp(100, `Caso práctico ${simId} resuelto con éxito`);
      }
      return {
        ...prev,
        simulationScores: {
          ...prev.simulationScores,
          [simId]: Math.max(prevScore, score),
        },
      };
    });
  };

  // Overall progress calculation based on APs, Badges, Quizzes, Simulations
  const totalAps = 10;
  const apsDone = profile.completedActivityIds.length;
  const badgesDone = profile.unlockedBadgeIds.length;
  const totalBadges = BADGES_DATA.length;
  const simsDone = Object.keys(profile.simulationScores).length;

  const progressPercentage = Math.min(
    100,
    Math.round(((apsDone / totalAps) * 0.4 + (badgesDone / totalBadges) * 0.3 + (simsDone / 4) * 0.3) * 100)
  );

  const generateCertificate = () => {
    const hash = "SENA-INNOVA-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + Date.now().toString().slice(-4);
    const today = new Date().toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    setProfile((prev) => ({
      ...prev,
      certificateGenerated: true,
      certificateDate: today,
      certificateHash: hash,
    }));

    unlockBadge("tecnologo_integral");
    addToast("¡Certificación Oficial Generada!", "Has obtenido la Certificación de Apropiación Integral del Programa SENA", "success");
    triggerConfetti();

    return { success: true, hash };
  };

  return (
    <AppContext.Provider
      value={{
        profile,
        activeTab,
        setActiveTab,
        language,
        setLanguage,
        t,
        updateProfile,
        resetLearnerSession,
        addXp,
        unlockBadge,
        completeActivity,
        recordQuizScore,
        recordSimulationScore,
        generateCertificate,
        toasts,
        removeToast,
        progressPercentage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
