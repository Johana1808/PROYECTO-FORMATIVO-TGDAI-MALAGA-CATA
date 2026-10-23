import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Bot, Send, User, Sparkles, HelpCircle, BookOpen, Layers, Lightbulb, RefreshCw } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const PRESET_PROMPTS = [
  "¿Cómo relaciono la fase de Análisis (AP1 y AP2) con el Informe de Diagnóstico?",
  "¿Cuál es la diferencia entre conocimientos del Saber y Saber Hacer en el SENA?",
  "Dame un ejemplo de formulación DOFA cruzada para una Mipyme de Santander.",
  "¿Qué criterios evalúa el instructor en el Producto 5 (Herramienta Tecnológica)?",
  "¿Cómo se articula la estrategia CAMPESENA con el proyecto INNOVAGESTIÓN?"
];

export const ModuleAITutor: React.FC = () => {
  const { profile, addXp } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome_msg",
      sender: "assistant",
      text: `¡Hola ${profile.name.split(' ')[0]}! Soy tu Tutor Pedagógico Inteligente del SENA para el programa "Gestión del Desarrollo Administrativo e Innovación" (Código 122153) y el proyecto "INNOVAGESTIÓN" (Ficha 3639874).\n\nPuedo orientarte sobre las 4 fases del proyecto, los 10 RAPs y Actividades de Proyecto, las 3 dimensiones del aprendizaje (Saber, Saber Hacer, Ser), la elaboración de los 9 Productos Requeridos y la aplicación práctica en Mipymes e iniciativas campesinas de Santander. ¿En qué te puedo asesorar hoy?`,
      timestamp: "Ahora"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: text,
          context: `Aprendiz: ${profile.name}, Nivel: ${profile.level}, Actividades completadas: ${profile.completedActivityIds.join(', ')}`,
          history: messages.slice(-4).map((m) => ({ role: m.sender, content: m.text }))
        })
      });

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: data.answer || "No se pudo obtener respuesta del tutor.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      addXp(30, "Consultaste al Tutor IA Pedagógico");
    } catch (error) {
      console.error(error);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "assistant",
        text: "Recuerda que en el SENA cada actividad de proyecto formativo vincula resultados de aprendizaje específicos con criterios de evaluación. Por ejemplo, en la fase de Planeación formulas objetivos SMART e indicadores que luego medirás en la fase de Evaluación con el informe de seguimiento.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[750px]">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-[#00324D] text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#39A900] to-emerald-600 flex items-center justify-center text-white shadow-md">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-base">Tutor IA Pedagógico SENA</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Gemini 3.8 Flash
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Especializado en Diseño Curricular 122153 & Proyecto INNOVAGESTIÓN
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setMessages([
              {
                id: Date.now().toString(),
                sender: "assistant",
                text: "Conversación reiniciada. ¿En qué componente o producto del programa tienes dudas?",
                timestamp: "Ahora"
              }
            ]);
          }}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Reiniciar chat"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Preset Prompts Pill Bar */}
      <div className="p-2.5 bg-slate-50 border-b border-slate-200 overflow-x-auto no-scrollbar flex items-center gap-2">
        <span className="text-[11px] font-bold text-slate-500 shrink-0 flex items-center gap-1">
          <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Consultas rápidas:
        </span>
        {PRESET_PROMPTS.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(prompt)}
            className="px-2.5 py-1 rounded-full bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-[11px] font-medium text-slate-700 hover:text-emerald-800 transition-colors shrink-0 cursor-pointer shadow-2xs"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/40">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  isUser
                    ? 'bg-slate-900 text-white'
                    : 'bg-[#39A900] text-white shadow-xs'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-2xs space-y-1.5 ${
                  isUser
                    ? 'bg-slate-900 text-white rounded-tr-xs'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-4 text-[10px] opacity-70">
                  <span className="font-bold">{isUser ? profile.name : 'Tutor SENA'}</span>
                  <span>{msg.timestamp}</span>
                </div>
                <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans">
                  {msg.text}
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#39A900] text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-xs p-4 shadow-2xs flex items-center gap-2 text-xs text-slate-600">
              <Sparkles className="w-4 h-4 text-[#39A900] animate-spin" />
              <span>El Tutor IA está consultando el programa curricular y generando respuesta pedagógica...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input bar */}
      <div className="p-4 bg-white border-t border-slate-200">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Pregunta sobre fases, RAPs, Saber, Hacer, Ser, los 9 productos o evidencias..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            disabled={isLoading}
            className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#39A900] bg-slate-50 focus:bg-white"
          />
          <button
            type="submit"
            disabled={isLoading || !inputMessage.trim()}
            className="px-4 py-2.5 rounded-xl bg-[#39A900] hover:bg-emerald-600 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Preguntar</span>
          </button>
        </form>
      </div>
    </div>
  );
};
