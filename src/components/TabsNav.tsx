import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Compass, 
  BookOpen, 
  Gamepad2, 
  CheckSquare, 
  Bot, 
  Award
} from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  tag?: string;
}

export const TABS: TabItem[] = [
  {
    id: "mapa",
    label: "1. Brújula & Mapa del Proyecto",
    shortLabel: "Brújula & Mapa",
    icon: Compass,
    tag: "Estructura"
  },
  {
    id: "curriculo",
    label: "2. Matriz Curricular & 9 Productos",
    shortLabel: "Currículo & 9 Productos",
    icon: BookOpen,
    tag: "Saber / Hacer / Ser"
  },
  {
    id: "simulaciones",
    label: "3. Simulador de Casos Mipymes",
    shortLabel: "Simulador Casos",
    icon: Gamepad2,
    tag: "CAMPESENA"
  },
  {
    id: "evaluaciones",
    label: "4. Retos, Trivia & Evaluaciones",
    shortLabel: "Retos & Trivia",
    icon: CheckSquare,
    tag: "+XP"
  },
  {
    id: "tutor",
    label: "5. Tutor IA Pedagógico",
    shortLabel: "Tutor IA",
    icon: Bot,
    tag: "Gemini AI"
  },
  {
    id: "gamificacion",
    label: "6. Progreso & Certificado Oficial",
    shortLabel: "Certificado & Logros",
    icon: Award,
    tag: "Diplomas"
  }
];

export const TabsNav: React.FC = () => {
  const { activeTab, setActiveTab, t } = useApp();

  const TABS: TabItem[] = [
    {
      id: "mapa",
      label: t.tabMap,
      shortLabel: t.tabMapShort,
      icon: Compass,
      tag: "Estructura"
    },
    {
      id: "curriculo",
      label: t.tabCurriculo,
      shortLabel: t.tabCurriculoShort,
      icon: BookOpen,
      tag: "Saber / Hacer / Ser"
    },
    {
      id: "simulaciones",
      label: t.tabSimulaciones,
      shortLabel: t.tabSimulacionesShort,
      icon: Gamepad2,
      tag: "CAMPESENA"
    },
    {
      id: "evaluaciones",
      label: t.tabEvaluaciones,
      shortLabel: t.tabEvaluacionesShort,
      icon: CheckSquare,
      tag: "+XP"
    },
    {
      id: "tutor",
      label: t.tabTutor,
      shortLabel: t.tabTutorShort,
      icon: Bot,
      tag: "Gemini AI"
    },
    {
      id: "gamificacion",
      label: t.tabGamif,
      shortLabel: t.tabGamifShort,
      icon: Award,
      tag: "Diplomas"
    }
  ];

  return (
    <div className="bg-white border-b border-slate-200 shadow-2xs sticky top-[69px] z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 no-scrollbar">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#39A900] text-white shadow-sm shadow-emerald-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span className="hidden md:inline">{tab.label}</span>
                <span className="md:hidden">{tab.shortLabel}</span>
                {tab.tag && (
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase ${
                      isActive
                        ? 'bg-emerald-900/30 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {tab.tag}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
