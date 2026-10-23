import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DIAGNOSTIC_QUIZ, FORMATIVE_QUIZ, TRIVIA_QUESTIONS, CURRICULAR_MATCH_PAIRS, MatchPair } from '../../data/quizData';
import { QuizQuestion } from '../../types';
import { 
  CheckSquare, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Trophy, 
  Zap, 
  Shuffle, 
  Layers, 
  Sparkles, 
  Award,
  ArrowRight
} from 'lucide-react';

export const ModuleEvaluations: React.FC = () => {
  const { addXp, unlockBadge, recordQuizScore } = useApp();
  const [evalMode, setEvalMode] = useState<'diagnostico' | 'formativa' | 'trivia' | 'match'>('diagnostico');

  // Quiz state
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // Trivia state
  const [triviaIdx, setTriviaIdx] = useState(0);
  const [triviaScore, setTriviaScore] = useState(0);
  const [triviaFinished, setTriviaFinished] = useState(false);
  const [triviaSelected, setTriviaSelected] = useState<number | null>(null);

  // Match Curricular Game state
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [selectedApForMatch, setSelectedApForMatch] = useState<MatchPair | null>(null);
  const [matchStatusMsg, setMatchStatusMsg] = useState<string | null>(null);

  // Active quiz pool
  const currentQuizQuestions: QuizQuestion[] = evalMode === 'diagnostico' ? DIAGNOSTIC_QUIZ : FORMATIVE_QUIZ;
  const currentQ = currentQuizQuestions[activeQuestionIdx];

  const handleSelectAnswer = (optionIdx: number) => {
    if (showFeedback || quizFinished) return;
    setSelectedAnswers((prev) => ({ ...prev, [activeQuestionIdx]: optionIdx }));
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    if (activeQuestionIdx + 1 < currentQuizQuestions.length) {
      setActiveQuestionIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
      // calculate score
      let correct = 0;
      currentQuizQuestions.forEach((q, idx) => {
        if (selectedAnswers[idx] === q.correctIndex) correct++;
      });
      const scorePct = Math.round((correct / currentQuizQuestions.length) * 100);
      recordQuizScore(evalMode, scorePct);

      if (scorePct >= 80) {
        unlockBadge('campeon_trivia');
      }
    }
  };

  const handleRestartQuiz = () => {
    setActiveQuestionIdx(0);
    setSelectedAnswers({});
    setShowFeedback(false);
    setQuizFinished(false);
  };

  // Trivia Handlers
  const handleAnswerTrivia = (idx: number) => {
    if (triviaSelected !== null || triviaFinished) return;
    setTriviaSelected(idx);
    const isCorrect = idx === TRIVIA_QUESTIONS[triviaIdx].correctIndex;
    if (isCorrect) {
      setTriviaScore((prev) => prev + 1);
      addXp(50, "¡Respuesta correcta en Trivia SENA!");
    }

    setTimeout(() => {
      setTriviaSelected(null);
      if (triviaIdx + 1 < TRIVIA_QUESTIONS.length) {
        setTriviaIdx((prev) => prev + 1);
      } else {
        setTriviaFinished(true);
        if (triviaScore + (isCorrect ? 1 : 0) === TRIVIA_QUESTIONS.length) {
          unlockBadge('campeon_trivia');
        }
      }
    }, 1500);
  };

  const handleRestartTrivia = () => {
    setTriviaIdx(0);
    setTriviaScore(0);
    setTriviaFinished(false);
    setTriviaSelected(null);
  };

  // Match Curricular Handlers
  const handleSelectAp = (pair: MatchPair) => {
    setSelectedApForMatch(pair);
    setMatchStatusMsg(`Seleccionaste ${pair.ap}. Ahora haz clic en su Producto correspondiente.`);
  };

  const handleSelectProductMatch = (targetPair: MatchPair) => {
    if (!selectedApForMatch) {
      setMatchStatusMsg("Primero selecciona una Actividad de Proyecto (columna izquierda).");
      return;
    }

    if (selectedApForMatch.id === targetPair.id) {
      setMatchedPairs((prev) => [...prev, targetPair.id]);
      setMatchStatusMsg(`¡Correcto! ${selectedApForMatch.ap} genera el Producto ${targetPair.productNumber}: ${targetPair.productTitle}`);
      addXp(75, `Vinculación acertada: AP <-> Producto 0${targetPair.productNumber}`);
      setSelectedApForMatch(null);

      if (matchedPairs.length + 1 === CURRICULAR_MATCH_PAIRS.length) {
        unlockBadge('arquitecto_procesos');
        unlockBadge('guardian_evidencias');
      }
    } else {
      setMatchStatusMsg(`No coincide. ${selectedApForMatch.ap} no genera ese producto. ¡Intenta de nuevo!`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500">Mecanismo de Evaluación:</span>
          <button
            onClick={() => {
              setEvalMode('diagnostico');
              handleRestartQuiz();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              evalMode === 'diagnostico'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            1. Diagnóstica de Entrada
          </button>
          <button
            onClick={() => {
              setEvalMode('formativa');
              handleRestartQuiz();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              evalMode === 'formativa'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            2. Formativa & Seguimiento
          </button>
          <button
            onClick={() => setEvalMode('trivia')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              evalMode === 'trivia'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            ⚡ 3. Trivia Rápida
          </button>
          <button
            onClick={() => setEvalMode('match')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              evalMode === 'match'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            🧩 4. Match Curricular
          </button>
        </div>

        <span className="text-xs font-medium text-slate-500">
          Evaluación por Competencias &bull; Rúbrica SENA
        </span>
      </div>

      {/* MODE 1 & 2: Cuestionario Interactivo (Diagnóstico o Formativo) */}
      {(evalMode === 'diagnostico' || evalMode === 'formativa') && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm max-w-3xl mx-auto space-y-6">
          {!quizFinished ? (
            <>
              {/* Stepper Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#39A900] text-white text-xs font-extrabold uppercase">
                    {evalMode === 'diagnostico' ? 'Evaluación Diagnóstica' : 'Evaluación Formativa'}
                  </span>
                  <span className="text-xs text-slate-500">
                    Pregunta {activeQuestionIdx + 1} de {currentQuizQuestions.length}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  Dimensión: {currentQ.dimension.toUpperCase()}
                </span>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {currentQ.question}
                </h3>
                <span className="text-[11px] text-slate-400 block font-mono">
                  Competencia asociada: {currentQ.associatedCompetency}
                </span>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[activeQuestionIdx] === idx;
                  let btnStyle = "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800";

                  if (showFeedback) {
                    if (idx === currentQ.correctIndex) {
                      btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-2 ring-emerald-300/40";
                    } else if (isSelected) {
                      btnStyle = "border-rose-400 bg-rose-50 text-rose-900";
                    } else {
                      btnStyle = "border-slate-200 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={showFeedback}
                      onClick={() => handleSelectAnswer(idx)}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-relaxed">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback Explanation */}
              {showFeedback && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    {selectedAnswers[activeQuestionIdx] === currentQ.correctIndex ? (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>¡Respuesta Correcta! (+50 XP)</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700">
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>Respuesta Incorrecta. Revisa el fundamento conceptual:</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Action */}
              <div className="pt-2 flex items-center justify-end">
                {showFeedback && (
                  <button
                    onClick={handleNextQuestion}
                    className="px-5 py-2.5 rounded-xl bg-[#39A900] hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>{activeQuestionIdx + 1 < currentQuizQuestions.length ? 'Siguiente Pregunta' : 'Finalizar y Calificar'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <Trophy className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900">
                  ¡Cuestionario Completado!
                </h3>
                <p className="text-xs text-slate-500">
                  Tus respuestas han sido evaluadas conforme al banco de preguntas del SENA.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-xs mx-auto">
                <span className="text-xs text-slate-500 block uppercase font-bold">
                  Puntaje Obtenido
                </span>
                <span className="text-3xl font-black text-emerald-600">
                  {Math.round(
                    (currentQuizQuestions.filter((q, idx) => selectedAnswers[idx] === q.correctIndex).length /
                      currentQuizQuestions.length) *
                      100
                  )}
                  %
                </span>
                <span className="text-[11px] text-slate-500 block mt-1">
                  {currentQuizQuestions.filter((q, idx) => selectedAnswers[idx] === q.correctIndex).length} de {currentQuizQuestions.length} correctas
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleRestartQuiz}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Repetir Evaluación
                </button>
                <button
                  onClick={() => setEvalMode('trivia')}
                  className="px-4 py-2 rounded-xl bg-[#39A900] hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Zap className="w-3.5 h-3.5" /> Jugar Trivia Rápida
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 3: TRIVIA RÁPIDA */}
      {evalMode === 'trivia' && (
        <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl max-w-2xl mx-auto space-y-6">
          {!triviaFinished ? (
            <>
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-200 animate-bounce" />
                  <span className="font-extrabold text-sm uppercase tracking-wider">
                    Trivia del Saber SENA
                  </span>
                </div>
                <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">
                  Pregunta {triviaIdx + 1} / {TRIVIA_QUESTIONS.length}
                </span>
              </div>

              <div className="text-center space-y-2 py-2">
                <h3 className="text-xl sm:text-2xl font-black leading-tight">
                  {TRIVIA_QUESTIONS[triviaIdx].question}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TRIVIA_QUESTIONS[triviaIdx].options.map((opt, idx) => {
                  let btnColor = "bg-white/90 text-slate-900 hover:bg-white";
                  if (triviaSelected !== null) {
                    if (idx === TRIVIA_QUESTIONS[triviaIdx].correctIndex) {
                      btnColor = "bg-emerald-600 text-white font-bold ring-4 ring-white";
                    } else if (triviaSelected === idx) {
                      btnColor = "bg-rose-600 text-white font-bold";
                    } else {
                      btnColor = "bg-white/40 text-slate-800 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={triviaSelected !== null}
                      onClick={() => handleAnswerTrivia(idx)}
                      className={`p-4 rounded-xl text-left text-xs sm:text-sm font-bold shadow-md transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer ${btnColor}`}
                    >
                      <span className="w-5 h-5 rounded-full bg-black/10 inline-flex items-center justify-center mr-2 text-xs">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {triviaSelected !== null && (
                <div className="p-3 rounded-xl bg-black/30 text-xs text-amber-100 text-center animate-fadeIn">
                  {TRIVIA_QUESTIONS[triviaIdx].explanation}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-6 space-y-4">
              <Sparkles className="w-16 h-16 text-yellow-200 mx-auto animate-spin" />
              <h3 className="text-3xl font-black">¡Fin de la Ronda de Trivia!</h3>
              <p className="text-sm text-amber-100">
                Puntaje alcanzado: <span className="font-extrabold text-white text-lg">{triviaScore} de {TRIVIA_QUESTIONS.length}</span>
              </p>
              <button
                onClick={handleRestartTrivia}
                className="px-6 py-2.5 rounded-xl bg-white text-orange-600 font-extrabold text-xs shadow-lg hover:bg-amber-50 cursor-pointer"
              >
                Jugar otra vez
              </button>
            </div>
          )}
        </div>
      )}

      {/* MODE 4: MATCH CURRICULAR (Reto de Vinculación Inteligente) */}
      {evalMode === 'match' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-200 pb-4 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600" />
                Reto "Match Curricular": Conecta APs con sus 9 Productos Requeridos
              </h3>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800">
                {matchedPairs.length} / {CURRICULAR_MATCH_PAIRS.length} Emparejados
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Haz clic primero en una <span className="font-semibold text-slate-800">Actividad de Proyecto (Columna Izquierda)</span> y luego en el <span className="font-semibold text-slate-800">Producto Requerido (Columna Derecha)</span> correspondiente.
            </p>
          </div>

          {matchStatusMsg && (
            <div className="p-3 rounded-xl bg-purple-50 text-purple-900 text-xs font-semibold border border-purple-200 animate-fadeIn">
              {matchStatusMsg}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Actividades de Proyecto */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2">
                1. Actividades de Proyecto (Fases & APs):
              </h4>
              <div className="space-y-2">
                {CURRICULAR_MATCH_PAIRS.map((pair) => {
                  const isMatched = matchedPairs.includes(pair.id);
                  const isSelected = selectedApForMatch?.id === pair.id;

                  return (
                    <div
                      key={pair.id}
                      onClick={() => !isMatched && handleSelectAp(pair)}
                      className={`p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                        isMatched
                          ? 'bg-emerald-50 border-emerald-300 opacity-60'
                          : isSelected
                          ? 'bg-purple-50 border-purple-500 ring-2 ring-purple-300'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-extrabold text-[10px] px-2 py-0.5 rounded bg-slate-900 text-white">
                          Fase {pair.phase}
                        </span>
                        {isMatched && (
                          <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Vinculado
                          </span>
                        )}
                      </div>
                      <p className="font-bold text-slate-900">{pair.ap}</p>
                      <span className="text-[10px] text-slate-500">{pair.competencyName}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Productos Requeridos */}
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2">
                2. Productos Requeridos del Proyecto:
              </h4>
              <div className="space-y-2">
                {/* Shuffle order conceptually or display list */}
                {CURRICULAR_MATCH_PAIRS.slice().reverse().map((target) => {
                  const isMatched = matchedPairs.includes(target.id);

                  return (
                    <div
                      key={target.id}
                      onClick={() => !isMatched && handleSelectProductMatch(target)}
                      className={`p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                        isMatched
                          ? 'bg-emerald-50 border-emerald-300 opacity-60'
                          : 'bg-white border-slate-200 hover:border-purple-400 hover:bg-purple-50/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[10px] px-2 py-0.5 rounded bg-amber-500 text-white">
                          Producto N° 0{target.productNumber}
                        </span>
                        {isMatched && (
                          <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Acierto
                          </span>
                        )}
                      </div>
                      <p className="font-bold text-slate-900">{target.productTitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
