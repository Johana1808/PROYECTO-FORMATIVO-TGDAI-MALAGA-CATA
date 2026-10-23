import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Share2, 
  Copy, 
  Check, 
  Users, 
  UserPlus, 
  Sparkles, 
  X, 
  ExternalLink, 
  MessageSquare, 
  Award,
  Link as LinkIcon
} from 'lucide-react';

interface ShareInstructorModalProps {
  onClose: () => void;
}

export const ShareInstructorModal: React.FC<ShareInstructorModalProps> = ({ onClose }) => {
  const { profile, resetLearnerSession } = useApp();
  
  // Base URL
  const baseUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`
    : 'https://ais-pre-cxm7cfgtm5debruwwjym46-888700571483.us-east1.run.app';

  // Customized student link state
  const [studentName, setStudentName] = useState('');
  const [studentDoc, setStudentDoc] = useState('');
  const [studentDocType, setStudentDocType] = useState('CC');
  const [studentFicha, setStudentFicha] = useState(profile.ficheNumber || '3639874');

  const [copiedGeneral, setCopiedGeneral] = useState(false);
  const [copiedCustom, setCopiedCustom] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Build custom link
  const customQuery = new URLSearchParams();
  if (studentName.trim()) customQuery.set('nombre', studentName.trim());
  if (studentDoc.trim()) customQuery.set('doc', studentDoc.trim());
  if (studentDocType) customQuery.set('tipo', studentDocType);
  if (studentFicha.trim()) customQuery.set('ficha', studentFicha.trim());

  const generatedCustomUrl = customQuery.toString()
    ? `${baseUrl}?${customQuery.toString()}`
    : baseUrl;

  // WhatsApp announcement text
  const shareMessageText = `🌱 *EJERCICIO DE FORMACIÓN SENA - INNOVAGESTIÓN (Ficha ${studentFicha})*
Apreciados Aprendices: Ingresen a la plataforma educativa interactiva en el siguiente enlace para realizar las misiones y simuladores de las 4 fases del proyecto.
Al completar las actividades y retos, la plataforma generará automáticamente su *"Certificación de Apropiación Integral del Programa SENA"* personalizada a su nombre y documento:
👉 ${baseUrl}`;

  const copyToClipboard = (text: string, type: 'general' | 'custom' | 'msg') => {
    navigator.clipboard.writeText(text);
    if (type === 'general') {
      setCopiedGeneral(true);
      setTimeout(() => setCopiedGeneral(false), 2500);
    } else if (type === 'custom') {
      setCopiedCustom(true);
      setTimeout(() => setCopiedCustom(false), 2500);
    } else {
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    }
  };

  const handleStartAsStudent = () => {
    if (studentName.trim()) {
      resetLearnerSession(studentName, studentDocType, studentDoc, studentFicha);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 my-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#39A900] to-emerald-700 flex items-center justify-center text-white shadow-md">
              <Share2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Herramienta del Instructor
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Compartir Enlace con los Aprendices
              </h3>
              <p className="text-xs text-slate-500">
                Cada estudiante contestará el ejercicio y obtendrá su certificado a su nombre.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Option 1: General Class Link */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600" />
              1. Enlace General para Toda la Ficha (Recomendado)
            </h4>
            <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
              Auto-registro
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Envía este enlace a tu grupo de WhatsApp, Teams o LMS ZAJUNA. Cada estudiante ingresará su nombre y número de documento (desde el botón superior de perfil o en el certificado), contestará las actividades y <span className="font-bold text-slate-900">su certificado saldrá generado única y exclusivamente con su propio nombre</span>.
          </p>

          <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-slate-300">
            <input
              type="text"
              readOnly
              value={baseUrl}
              className="flex-1 text-xs font-mono text-slate-700 bg-transparent outline-hidden px-2"
            />
            <button
              onClick={() => copyToClipboard(baseUrl, 'general')}
              className="px-3.5 py-1.5 rounded-lg bg-[#39A900] hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              {copiedGeneral ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedGeneral ? '¡Copiado!' : 'Copiar Enlace'}</span>
            </button>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-500">¿Quieres enviar el mensaje redactado listo?</span>
            <button
              onClick={() => copyToClipboard(shareMessageText, 'msg')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{copiedMessage ? '¡Mensaje Copiado!' : 'Copiar Anuncio para WhatsApp / LMS'}</span>
            </button>
          </div>
        </div>

        {/* Option 2: Pre-filled Personalized Link Generator */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-indigo-600" />
              2. Generar Enlace Pre-Personalizado por Aprendiz (Opcional)
            </h4>
            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
              Con Datos Precargados
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Si deseas que un aprendiz en específico abra el enlace y ya tenga su nombre y cédula precargados sin tener que escribirlos:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Nombre Completo del Aprendiz:</label>
              <input
                type="text"
                placeholder="Ej. Juan Carlos Pérez"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#39A900] bg-slate-50"
              />
            </div>
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Número de Documento:</label>
              <div className="flex gap-2">
                <select
                  value={studentDocType}
                  onChange={(e) => setStudentDocType(e.target.value)}
                  className="w-20 p-2 rounded-lg border border-slate-300 bg-slate-50"
                >
                  <option value="CC">CC</option>
                  <option value="TI">TI</option>
                  <option value="CE">CE</option>
                </select>
                <input
                  type="text"
                  placeholder="Ej. 1098765432"
                  value={studentDoc}
                  onChange={(e) => setStudentDoc(e.target.value)}
                  className="flex-1 p-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#39A900] bg-slate-50"
                />
              </div>
            </div>
          </div>

          {studentName.trim() && (
            <div className="space-y-2 pt-2 animate-fadeIn">
              <span className="text-[11px] font-bold text-slate-700 block">
                Enlace generado para {studentName}:
              </span>
              <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl border border-slate-300">
                <input
                  type="text"
                  readOnly
                  value={generatedCustomUrl}
                  className="flex-1 text-xs font-mono text-indigo-900 bg-transparent outline-hidden px-2 truncate"
                />
                <button
                  onClick={() => copyToClipboard(generatedCustomUrl, 'custom')}
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  {copiedCustom ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCustom ? '¡Copiado!' : 'Copiar Enlace Alumno'}</span>
                </button>
              </div>

              <button
                onClick={handleStartAsStudent}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer pt-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>O probar ahora mismo en este navegador con el nombre de {studentName}</span>
              </button>
            </div>
          )}
        </div>

        {/* Step Guide for Students */}
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
            <Award className="w-4 h-4 text-[#39A900]" />
            <span>¿Cómo es la experiencia para el estudiante?</span>
          </div>
          <ol className="text-xs text-emerald-950 space-y-1 list-decimal list-inside leading-relaxed font-medium">
            <li>El estudiante ingresa desde el link en su computador o celular.</li>
            <li>Realiza el recorrido interactivo por las 4 fases, resuelve los simuladores de casos y la trivia.</li>
            <li>Al completar el ejercicio (progreso &ge; 60%), el sistema genera automáticamente su <strong>"Certificación de Apropiación Integral del Programa de Formación SENA"</strong> con su nombre, documento y código hash verificable para guardar o imprimir en PDF.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
