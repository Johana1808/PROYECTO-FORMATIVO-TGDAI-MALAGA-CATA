import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PROGRAM_INFO, PROJECT_INFO, PHASES_DATA, COMPETENCIES_DATA } from '../../data/curriculumData';
import { REQUIRED_PRODUCTS } from '../../data/productsData';
import { PhaseId, ProjectActivity } from '../../types';
import { 
  CheckCircle, 
  Circle, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Layers, 
  BookOpen, 
  FileText, 
  Target, 
  Compass, 
  Filter, 
  Search,
  ExternalLink,
  Info
} from 'lucide-react';

export const ModuleMap: React.FC = () => {
  const { profile, completeActivity, unlockBadge, setActiveTab } = useApp();
  const [selectedPhase, setSelectedPhase] = useState<PhaseId | 'todas'>('todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeActivityModal, setActiveActivityModal] = useState<ProjectActivity | null>(null);

  // Trigger badge if explored
  const handleExploreProject = () => {
    unlockBadge("brujula_formativa");
  };

  const filteredPhases = PHASES_DATA.filter((phase) => {
    if (selectedPhase !== 'todas' && phase.id !== selectedPhase) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Hero: Institutional Banner & Objective */}
      <div className="bg-gradient-to-br from-[#00324D] via-[#004b73] to-[#012438] rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#39A900]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39A900]/20 border border-[#39A900]/40 text-[#68d831] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            La Brújula Formativa SENA &bull; FPI
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Apropiación Integral del Proyecto Formativo <span className="text-[#39A900]">INNOVAGESTIÓN</span>
          </h2>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Bienvenido al mapa de navegación formativa. Aquí comprenderás y apropiarás la trazabilidad directa entre el <span className="font-semibold text-white">Objetivo General</span>, las <span className="font-semibold text-emerald-300">4 Fases</span>, las <span className="font-semibold text-emerald-300">10 Actividades de Proyecto (AP)</span>, las <span className="font-semibold text-emerald-300">Competencias</span>, los <span className="font-semibold text-emerald-300">Resultados de Aprendizaje (RAP)</span> y los <span className="font-semibold text-amber-300">9 Productos Entregables</span>.
          </p>

          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wide">
              <Target className="w-4 h-4" />
              Objetivo General del Proyecto (SOFIA: 3639874)
            </div>
            <p className="text-xs sm:text-sm text-slate-100 font-medium">
              "{PROJECT_INFO.generalObjective}"
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-black/20 border border-white/10 text-center">
              <span className="block text-xl font-extrabold text-emerald-400">3.984 h</span>
              <span className="text-[11px] text-slate-300">3.120 Lectiva + 864 Prod.</span>
            </div>
            <div className="p-3 rounded-xl bg-black/20 border border-white/10 text-center">
              <span className="block text-xl font-extrabold text-blue-400">4 Fases</span>
              <span className="text-[11px] text-slate-300">Análisis a Evaluación</span>
            </div>
            <div className="p-3 rounded-xl bg-black/20 border border-white/10 text-center">
              <span className="block text-xl font-extrabold text-amber-400">10 APs</span>
              <span className="text-[11px] text-slate-300">Actividades de Proyecto</span>
            </div>
            <div className="p-3 rounded-xl bg-black/20 border border-white/10 text-center">
              <span className="block text-xl font-extrabold text-purple-400">9 Productos</span>
              <span className="text-[11px] text-slate-300">Evidencias Requeridas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls & Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        {/* Phase selector pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Fases:
          </span>
          <button
            onClick={() => setSelectedPhase('todas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              selectedPhase === 'todas'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todas (4)
          </button>
          {PHASES_DATA.map((p) => {
            const isSel = selectedPhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPhase(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  isSel
                    ? `${p.badgeColor} text-white shadow-xs`
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {p.number}. {p.name}
              </button>
            );
          })}
        </div>

        {/* Search bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por AP, competencia o producto..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#39A900] bg-slate-50 focus:bg-white"
          />
        </div>
      </div>

      {/* Visual Roadmap / Journey */}
      <div className="space-y-6">
        {filteredPhases.map((phase) => {
          const phaseProducts = REQUIRED_PRODUCTS.filter((prod) => prod.phaseId === phase.id);

          return (
            <div
              key={phase.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-shadow hover:shadow-md"
            >
              {/* Phase Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/70 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${phase.badgeColor} text-white font-extrabold flex items-center justify-center text-lg shadow-sm`}
                  >
                    0{phase.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase font-extrabold tracking-wider text-slate-500">
                        Fase {phase.number}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">{phase.name}</h3>
                    </div>
                    <p className="text-xs text-slate-600">{phase.shortDesc}</p>
                  </div>
                </div>

                {/* Phase summary tags */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-semibold flex items-center gap-1.5 shadow-2xs">
                    <Layers className="w-3.5 h-3.5 text-slate-500" />
                    {phase.activities.length} Actividades de Proyecto
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-semibold flex items-center gap-1.5 shadow-2xs">
                    <FileText className="w-3.5 h-3.5 text-amber-600" />
                    {phaseProducts.length} Productos Asociados
                  </span>
                </div>
              </div>

              {/* Activities Grid */}
              <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {phase.activities
                  .filter((act) => {
                    if (!searchQuery) return true;
                    const q = searchQuery.toLowerCase();
                    return (
                      act.id.toLowerCase().includes(q) ||
                      act.title.toLowerCase().includes(q) ||
                      act.description.toLowerCase().includes(q)
                    );
                  })
                  .map((act) => {
                    const isCompleted = profile.completedActivityIds.includes(act.id);
                    const associatedCompetencies = COMPETENCIES_DATA.filter((comp) =>
                      act.competencyCodes.includes(comp.code)
                    );
                    const associatedProds = REQUIRED_PRODUCTS.filter((prod) =>
                      act.associatedProducts.includes(prod.id)
                    );

                    return (
                      <div
                        key={act.id}
                        className={`p-4 rounded-xl border transition-all ${
                          isCompleted
                            ? 'bg-emerald-50/40 border-emerald-300 shadow-2xs'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-md font-extrabold text-xs bg-slate-900 text-white">
                              {act.id}
                            </span>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {act.durationHours} horas
                            </span>
                          </div>

                          <button
                            onClick={() => completeActivity(act.id)}
                            className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                              isCompleted
                                ? 'text-emerald-700 bg-emerald-100 hover:bg-emerald-200'
                                : 'text-slate-500 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700'
                            }`}
                            title={isCompleted ? 'Actividad apropiada' : 'Marcar como apropiada (+120 XP)'}
                          >
                            {isCompleted ? (
                              <>
                                <CheckCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                                <span className="hidden sm:inline text-[11px]">Apropiada</span>
                              </>
                            ) : (
                              <>
                                <Circle className="w-4 h-4 text-slate-400" />
                                <span className="hidden sm:inline text-[11px]">Marcar</span>
                              </>
                            )}
                          </button>
                        </div>

                        <h4 className="font-bold text-slate-900 text-sm mb-1.5">{act.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          {act.description}
                        </p>

                        {/* Associated Deliverables Pills */}
                        {associatedProds.length > 0 && (
                          <div className="mb-3 p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80">
                            <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block mb-1">
                              Productos Requeridos Generados:
                            </span>
                            <div className="space-y-1">
                              {associatedProds.map((prod) => (
                                <div
                                  key={prod.id}
                                  onClick={() => setActiveTab("curriculo")}
                                  className="text-xs font-semibold text-amber-900 hover:text-amber-700 flex items-center gap-1.5 cursor-pointer hover:underline"
                                >
                                  <span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">
                                    {prod.id}
                                  </span>
                                  <span>{prod.title}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Associated Competencies tags */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                            Competencias Vinculadas ({associatedCompetencies.length}):
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {associatedCompetencies.map((c) => (
                              <span
                                key={c.code}
                                className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${
                                  c.type === 'tecnica'
                                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                                    : 'bg-slate-100 text-slate-700 border-slate-200'
                                }`}
                                title={c.normName}
                              >
                                {c.name.split(' ')[0]} {c.code.slice(-3)}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Expand Modal Trigger */}
                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <button
                            onClick={() => setActiveActivityModal(act)}
                            className="text-xs font-bold text-[#39A900] hover:text-emerald-700 flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <span>Ver RAPs, Saber y Criterios</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-[10px] text-slate-400">
                            {act.competencyCodes.length} normas
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Phase Footer Deliverables Strip */}
              {phaseProducts.length > 0 && (
                <div className="bg-slate-900 text-white px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold text-slate-300">Entregables de la Fase {phase.name}:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {phaseProducts.map((p) => (
                      <span
                        key={p.id}
                        className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-slate-200 text-[11px] font-medium transition-colors"
                      >
                        P{p.id}: {p.title}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Modal for Project Activity */}
      {activeActivityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-5 shadow-2xl border border-slate-200">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-md font-extrabold text-xs bg-[#39A900] text-white">
                  {activeActivityModal.id}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  {activeActivityModal.title}
                </h3>
                <p className="text-xs text-slate-500">
                  Fase: {activeActivityModal.phaseId.toUpperCase()} &bull; Duración: {activeActivityModal.durationHours} horas
                </p>
              </div>
              <button
                onClick={() => setActiveActivityModal(null)}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                Descripción de la Actividad:
              </h4>
              <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                {activeActivityModal.description}
              </p>
            </div>

            {/* Competencies & RAPs linked */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Competencias y Resultados de Aprendizaje (RAPs) Vinculados:
              </h4>
              <div className="space-y-3">
                {COMPETENCIES_DATA.filter((comp) => activeActivityModal.competencyCodes.includes(comp.code)).map((c) => (
                  <div key={c.code} className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-900">{c.name}</span>
                      <span className="text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                        Código: {c.code}
                      </span>
                    </div>
                    <div className="space-y-1.5 pl-2 border-l-2 border-[#39A900]">
                      {c.raps
                        .filter((r) => !r.activityId || r.activityId === activeActivityModal.id)
                        .map((rap, idx) => (
                          <p key={idx} className="text-xs text-slate-600">
                            <span className="font-bold text-emerald-700">{rap.id}:</span> {rap.denomination}
                          </p>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverable Products */}
            {activeActivityModal.associatedProducts.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Productos Requeridos que se consolidan en esta actividad:
                </h4>
                <div className="space-y-2">
                  {REQUIRED_PRODUCTS.filter((prod) => activeActivityModal.associatedProducts.includes(prod.id)).map((p) => (
                    <div key={p.id} className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-xs text-amber-900 block">
                          Producto {p.id}: {p.title}
                        </span>
                        <span className="text-[11px] text-amber-800">{p.subtitle}</span>
                      </div>
                      <button
                        onClick={() => {
                          setActiveActivityModal(null);
                          setActiveTab("curriculo");
                        }}
                        className="text-xs font-bold text-amber-900 underline flex items-center gap-1 cursor-pointer"
                      >
                        Ver Ficha <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
              <button
                onClick={() => {
                  completeActivity(activeActivityModal.id);
                  setActiveActivityModal(null);
                }}
                className="px-4 py-2 rounded-xl bg-[#39A900] hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <CheckCircle className="w-4 h-4" />
                Marcar como Apropiada (+120 XP)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
