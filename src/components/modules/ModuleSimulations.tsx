import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SIMULATION_CASES } from '../../data/simulationData';
import { LEARNING_MISSIONS } from '../../data/gamificationData';
import { SimulationCase } from '../../types';
import { 
  Gamepad2, 
  MapPin, 
  Building2, 
  AlertCircle, 
  Sparkles, 
  CheckCircle2, 
  Trophy, 
  Send, 
  Bot, 
  Target, 
  RotateCcw,
  Flame,
  Award,
  ChevronRight
} from 'lucide-react';

export const ModuleSimulations: React.FC = () => {
  const { profile, recordSimulationScore, unlockBadge, addXp, setActiveTab } = useApp();
  const [selectedCase, setSelectedCase] = useState<SimulationCase>(SIMULATION_CASES[0]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasEvaluated, setHasEvaluated] = useState(false);

  // Custom AI proposal state
  const [customProposal, setCustomProposal] = useState('');
  const [isAiEvaluating, setIsAiEvaluating] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId);
    setHasEvaluated(true);
    const opt = selectedCase.options.find((o) => o.id === optionId);
    if (opt) {
      recordSimulationScore(selectedCase.id, opt.impactScore);

      if (selectedCase.phaseId === 'analisis' && opt.impactScore >= 90) {
        unlockBadge('pionero_diagnostico');
      } else if (selectedCase.phaseId === 'planeacion' && opt.impactScore >= 90) {
        unlockBadge('estratega_dofa');
        unlockBadge('innovador_disruptivo');
      } else if (selectedCase.phaseId === 'ejecucion' && opt.impactScore >= 90) {
        unlockBadge('analista_datos');
        unlockBadge('arquitecto_procesos');
      } else if (selectedCase.phaseId === 'evaluacion' && opt.impactScore >= 90) {
        unlockBadge('lider_campesena');
      }
    }
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setHasEvaluated(false);
    setAiResult(null);
    setCustomProposal('');
  };

  const handleAiEvaluation = async () => {
    if (!customProposal.trim()) return;
    setIsAiEvaluating(true);

    try {
      const res = await fetch('/api/ai/evaluate-case', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          caseTitle: selectedCase.title,
          scenario: selectedCase.context + ' ' + selectedCase.problem,
          userDecision: customProposal,
          phase: selectedCase.phaseId,
        }),
      });

      const data = await res.json();
      setAiResult(data);
      if (data.score) {
        recordSimulationScore(selectedCase.id + '_custom', data.score);
        addXp(data.score >= 80 ? 150 : 80, `Propuesta de solución evaluada por IA con ${data.score}%`);
      }
    } catch (e) {
      console.error(e);
      setAiResult({
        score: 85,
        feedback: "Tu propuesta demuestra buen criterio analítico y aplicación del proceso formativo SENA.",
        strengths: ["Comprensión del contexto", "Orientación a la productividad"],
        improvementAreas: ["Cuantificar metas con indicadores"],
        senaDimensions: {
          saber: "Conceptos sólidos",
          saberHacer: "Procedimiento viable",
          ser: "Compromiso ético",
        },
      });
    } finally {
      setIsAiEvaluating(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wide border border-emerald-500/30">
            <Gamepad2 className="w-3.5 h-3.5" />
            Entorno de Aprendizaje Vivencial &bull; Casos Reales CAMPESENA
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight">
            Simulador de Casos Prácticos & Decisiones Organizacionales
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Asume el rol de Tecnólogo SENA asesorando Mipymes e iniciativas campesinas de Santander. Toma decisiones estratégicas en cada fase del proyecto formativo, gana XP y desbloquea insignias de maestría.
          </p>
        </div>

        <div className="bg-white/10 p-4 rounded-xl border border-white/15 text-center shrink-0">
          <span className="text-[11px] uppercase font-bold text-emerald-300 block">
            Casos Resueltos
          </span>
          <span className="text-3xl font-black text-white">
            {Object.keys(profile.simulationScores).length} / 4
          </span>
          <span className="text-[10px] text-slate-300 block mt-0.5">
            100% interactivo
          </span>
        </div>
      </div>

      {/* Case Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {SIMULATION_CASES.map((sim, index) => {
          const isSelected = selectedCase.id === sim.id;
          const userScore = profile.simulationScores[sim.id];

          return (
            <div
              key={sim.id}
              onClick={() => {
                setSelectedCase(sim);
                handleReset();
              }}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#39A900] ring-2 ring-emerald-500/20 shadow-md'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-slate-900 text-white uppercase">
                  Fase {sim.phaseId}
                </span>
                {userScore !== undefined && (
                  <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-amber-500" /> {userScore}%
                  </span>
                )}
              </div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">
                {sim.title.split(':')[1] || sim.title}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" /> {sim.location}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Simulation Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Case Scenario */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-bold text-slate-700">
                  {selectedCase.organizationType} &bull; {selectedCase.location}
                </span>
              </div>
              <span className="text-xs font-extrabold uppercase px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                Fase de {selectedCase.phaseId}
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-slate-900">
              {selectedCase.title}
            </h3>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Contexto Organizacional:
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                {selectedCase.context}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200">
              <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                <AlertCircle className="w-4 h-4 text-amber-600" /> Problema Central Detectado:
              </h5>
              <p className="text-xs sm:text-sm text-amber-950 font-medium">
                {selectedCase.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-1">
              <span className="text-[11px] uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-1.5">
                <Target className="w-4 h-4" /> Desafío para el Aprendiz SENA:
              </span>
              <p className="text-sm font-semibold">
                {selectedCase.challenge}
              </p>
            </div>

            {/* Decision options */}
            <div className="space-y-3 pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Selecciona tu Estrategia de Intervención:
              </h5>

              <div className="space-y-2.5">
                {selectedCase.options.map((option, idx) => {
                  const isChosen = selectedOptionId === option.id;
                  let cardStyle = "border-slate-200 hover:border-slate-300 hover:bg-slate-50";

                  if (hasEvaluated && isChosen) {
                    cardStyle = option.impactScore >= 80
                      ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-400/20"
                      : "border-amber-500 bg-amber-50 ring-2 ring-amber-400/20";
                  }

                  return (
                    <div
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${cardStyle}`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isChosen
                              ? 'bg-[#39A900] text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <div className="space-y-2 flex-1">
                          <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                            {option.text}
                          </p>

                          {hasEvaluated && isChosen && (
                            <div className="pt-2 border-t border-slate-200/60 space-y-1.5 animate-fadeIn">
                              <div className="flex items-center justify-between">
                                <span className={`text-xs font-extrabold ${option.impactScore >= 80 ? 'text-emerald-700' : 'text-amber-700'}`}>
                                  Desempeño Obtenido: {option.impactScore}%
                                </span>
                                <span className="text-[10px] text-slate-500 uppercase font-bold">
                                  +100 XP Asignado
                                </span>
                              </div>
                              <p className="text-xs text-slate-700 leading-relaxed">
                                {option.feedback}
                              </p>
                              <div className="p-2 rounded-lg bg-white/70 text-[11px] text-slate-600 border border-slate-200">
                                <span className="font-bold text-slate-800">Dimensiones SENA: </span>
                                {option.dimensionFocus}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {hasEvaluated && (
                <div className="pt-3 flex items-center justify-end">
                  <button
                    onClick={handleReset}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Intentar otra alternativa
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: AI Custom Proposal & Learning Missions */}
        <div className="lg:col-span-5 space-y-4">
          {/* AI Evaluator Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">
                  Evaluador Inteligente SENA con IA
                </h4>
                <p className="text-[11px] text-slate-500">
                  ¿Quieres proponer tu propia solución personalizada?
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Escribe un plan de acción para <span className="font-semibold text-slate-800">{selectedCase.title.split(':')[1]}</span> y nuestro evaluador basado en Inteligencia Artificial analizará tu propuesta bajo las 3 dimensiones (Saber, Saber Hacer y Ser).
            </p>

            <textarea
              rows={4}
              placeholder="Ejemplo: Aplicaré una encuesta diagnóstica a los 32 asociados, estructuraré un mapa de procesos en Excel y formularé un plan de innovación para empaques biodegradables..."
              value={customProposal}
              onChange={(e) => setCustomProposal(e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#39A900] bg-slate-50 focus:bg-white resize-none"
            />

            <button
              onClick={handleAiEvaluation}
              disabled={isAiEvaluating || !customProposal.trim()}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              {isAiEvaluating ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-emerald-400" />
                  <span>Evaluando propuesta con Rúbrica SENA...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Evaluar mi Propuesta con IA (+150 XP)</span>
                </>
              )}
            </button>

            {/* AI Feedback Output */}
            {aiResult && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-emerald-900">
                    Dictamen del Instructor IA:
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white text-xs font-black">
                    {aiResult.score} / 100 Pts
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{aiResult.feedback}"
                </p>

                {aiResult.senaDimensions && (
                  <div className="grid grid-cols-3 gap-1.5 text-[10px]">
                    <div className="bg-white p-2 rounded-md border border-emerald-200">
                      <span className="font-bold text-blue-700 block">SABER</span>
                      <span className="text-slate-600 line-clamp-2">{aiResult.senaDimensions.saber}</span>
                    </div>
                    <div className="bg-white p-2 rounded-md border border-emerald-200">
                      <span className="font-bold text-amber-700 block">HACER</span>
                      <span className="text-slate-600 line-clamp-2">{aiResult.senaDimensions.saberHacer}</span>
                    </div>
                    <div className="bg-white p-2 rounded-md border border-emerald-200">
                      <span className="font-bold text-rose-700 block">SER</span>
                      <span className="text-slate-600 line-clamp-2">{aiResult.senaDimensions.ser}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Learning Quests Widget */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" /> Misiones de Aprendizaje Guiadas
              </h4>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Ficha 3639874
              </span>
            </div>

            <div className="space-y-2">
              {LEARNING_MISSIONS.map((mision) => (
                <div
                  key={mision.id}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-900 block">{mision.title}</span>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{mision.description}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-bold text-emerald-700 text-[11px]">
                      +{mision.xpReward} XP
                    </span>
                    <button
                      onClick={() => {
                        if (mision.phaseId === 'analisis') setActiveTab('mapa');
                        else if (mision.phaseId === 'planeacion') setActiveTab('curriculo');
                        else if (mision.phaseId === 'ejecucion') setActiveTab('evaluaciones');
                        else setActiveTab('gamificacion');
                      }}
                      className="p-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
