import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  GraduationCap, 
  UserCheck, 
  BookOpen, 
  KeyRound, 
  User, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Lock,
  FileText,
  HelpCircle
} from 'lucide-react';

interface LandingRoleSelectorProps {
  onEnterApp: () => void;
}

export const LandingRoleSelector: React.FC<LandingRoleSelectorProps> = ({ onEnterApp }) => {
  const { profile, updateProfile, resetLearnerSession } = useApp();
  
  const [selectedRole, setSelectedRole] = useState<'none' | 'instructor' | 'aprendiz'>('none');
  
  // Instructor login state
  const [instructorKey, setInstructorKey] = useState('');
  const [instructorError, setInstructorError] = useState('');

  // Aprendiz characterization state
  const [aprendizName, setAprendizName] = useState(profile.name || '');
  const [aprendizDocType, setAprendizDocType] = useState(profile.documentType || 'CC');
  const [aprendizDocNum, setAprendizDocNum] = useState(profile.documentNumber || '');
  const [aprendizFiche, setAprendizFiche] = useState(profile.ficheNumber || '3639874');

  const handleInstructorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (instructorKey === 'Tomas0816') {
      setInstructorError('');
      // Update role state or profile flag if needed, and enter app
      updateProfile({ name: 'Instructor (Gestión Ficha 3639874)' });
      onEnterApp();
    } else {
      setInstructorError('Clave incorrecta. La clave de instructor es Tomas0816');
    }
  };

  const handleAprendizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aprendizName.trim()) return;
    
    resetLearnerSession(
      aprendizName,
      aprendizDocType,
      aprendizDocNum || '10987654',
      aprendizFiche || '3639874'
    );
    onEnterApp();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00324D] via-[#004B73] to-[#012438] text-slate-800 flex flex-col justify-between p-4 sm:p-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#39A900]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="max-w-5xl mx-auto w-full flex items-center justify-between text-white py-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center p-1.5 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
              <path fill="#39a900" d="M504.2,20.5c-58.3,0.1-105.6,47.4-105.5,105.8c0.1,58.3,47.4,105.6,105.7,105.6 c58.3,0,105.6-47.3,105.6-105.7V126C609.9,67.6,562.6,20.4,504.2,20.5z M155.6,264.6c-18.6,0.1-37.5,1.1-55.2,5.6 c-11.7,3-23,7.8-30.3,15.4c-9.2,9.5-10.4,22.3-5.9,33.3c4,9.7,14.8,16.9,26.8,21.1c25.9,8.9,54.6,10.7,81.8,16.3 c5,1.2,10.6,2.6,13.7,6c3.2,4.1,1.3,9.7-4,12.2c-8.8,4.5-20.1,4.5-30.4,4.4c-9.4-0.4-19.7-1.2-27.2-5.9c-5.5-3.4-6.5-9.1-5.2-14.1 l-60.6,0c-0.2,9.2,1.6,18.9,8.4,26.8c5.6,6.8,14.8,11.5,24.6,14.4c15.7,4.6,32.7,6,49.4,6.4c22.7,0.4,45.8-0.3,67.6-5.4 c13-3.2,25.8-8.3,34.1-16.6c14.8-14.8,11.3-38.3-8.3-49.8c-9.8-5.7-21.5-9.2-33.4-11.5c-17.5-3.6-35.3-6.3-52.9-9.2 c-6.2-1.2-12.8-2.3-18-5.2c-5.5-2.9-5.9-9.8-0.3-12.9c7.2-4.1,16.8-4,25.4-4c9.1,0.2,19,0.7,26.5,5c4.2,2.3,5.9,6.3,5.9,10.1 l57.6-0.1c-0.2-7.3-1.6-14.9-6.9-21.2c-6.2-7.8-17.1-12.7-28.3-15.5C192.8,265.6,174.1,264.7,155.6,264.6L155.6,264.6z M280.6,268.9 l0,137.7l168.1,0l0-30H342.3v-26.7h94.9v-29.3h-94.9l0-21.9l102.6,0l-0.1-29.7L280.6,268.9z M557.5,269c0,0-51.9,0-77.9,0l0,137.7 l59,0l0-92.7l80.8,92.6l81,0.1l0-137.7l-59.1,0l0.1,92L557.5,269z M805.6,269.2c0,0-63.6,91.9-95.6,137.7l61.9,0l14.9-24.8h95.7 l13.9,24.9l68.8,0L874,269.2L805.6,269.2z M836.6,302.1l29.4,49.9l-60.7,0.1L836.6,302.1z M10.6,445.6l0.5,75l280.1-1 c14.3,3.1,22.6,12.4,19.7,33.5L138.6,854.7l56.1,52.5l266.9-461.6L10.6,445.6z M545.2,446.2l262.4,459.6l58-52.1L691.3,552.9 c-2.9-21.2,5.4-30.6,19.7-33.7l280.2,1l-0.1-73.7L545.2,446.2z M500.9,522.3L254.8,944.7l65.4,31.9L484.4,699 c5.7-4.6,11.4-7.1,17.1-7.3c6-0.2,12.2,2,18.3,6.8l163.8,278.4l67.4-35.2L500.9,522.3z"/>
            </svg>
          </div>
          <div>
            <h1 className="font-black text-xl sm:text-2xl tracking-tight text-white">
              SENA <span className="text-[#39A900]">InnovaAprende</span>
            </h1>
            <p className="text-xs text-slate-300">
              Gestión del Desarrollo Administrativo e Innovación &bull; Ficha 3639874
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-300">
          <Building2 className="w-4 h-4" />
          <span>Centro Agroempresarial y Turístico de los Andes</span>
        </div>
      </header>

      {/* Main Hero Card */}
      <main className="max-w-4xl mx-auto w-full my-auto py-8 relative z-10 space-y-8 text-center">
        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#39A900]/20 border border-[#39A900]/40 text-[#72f537] text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Portal Educativo Inteligente SENA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Selecciona tu Rol para Ingresar al Prototipo
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Elije tu perfil de acceso para garantizar una experiencia formativa guiada, con el rol de Instructor o el registro de Aprendiz.
          </p>
        </div>

        {/* Role Cards Selector */}
        {selectedRole === 'none' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4">
            {/* INSTRUCTOR CARD */}
            <div
              onClick={() => setSelectedRole('instructor')}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-transparent hover:border-[#39A900] shadow-xl transition-all transform hover:-translate-y-1.5 cursor-pointer text-left space-y-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-sm group-hover:bg-[#39A900] group-hover:text-white transition-colors">
                <KeyRound className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                  Acceso con Clave
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                  Rol Instructor(a)
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Para orientar la formación, evaluar evidencias, consultar la matriz curricular y generar enlaces para los estudiantes.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-[#39A900]">
                <span>Ingresar como Instructor</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* APRENDIZ CARD */}
            <div
              onClick={() => setSelectedRole('aprendiz')}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-transparent hover:border-[#39A900] shadow-xl transition-all transform hover:-translate-y-1.5 cursor-pointer text-left space-y-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-sm group-hover:bg-[#39A900] group-hover:text-white transition-colors">
                <UserCheck className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800">
                  Sin Clave &bull; Registro Directo
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                  Rol Aprendiz
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Para desarrollar las misiones, resolver simuladores Mipymes, participar en la trivia y obtener tu certificado a tu nombre.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-[#39A900]">
                <span>Registrarme como Aprendiz</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        )}

        {/* INSTRUCTOR LOGIN FORM */}
        {selectedRole === 'instructor' && (
          <div className="bg-white rounded-3xl max-w-md mx-auto p-6 sm:p-8 text-left shadow-2xl space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-indigo-600" />
                <h3 className="font-extrabold text-lg text-slate-900">
                  Acceso de Instructor SENA
                </h3>
              </div>
              <button
                onClick={() => setSelectedRole('none')}
                className="text-xs font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ← Volver
              </button>
            </div>

            <form onSubmit={handleInstructorSubmit} className="space-y-4 text-xs">
              <p className="text-slate-600 leading-relaxed">
                Ingresa la clave institucional asignada para instructores del programa (Clave: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-bold text-slate-800">Tomas0816</code>).
              </p>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Clave de Instructor:
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    required
                    placeholder="Ingresa la clave..."
                    value={instructorKey}
                    onChange={(e) => setInstructorKey(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#39A900] bg-slate-50 text-sm"
                  />
                </div>
                {instructorError && (
                  <span className="text-[11px] text-rose-600 font-bold block mt-1.5">
                    {instructorError}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Acceder al Prototipo (Instructor)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* APRENDIZ CHARACTERIZATION FORM */}
        {selectedRole === 'aprendiz' && (
          <div className="bg-white rounded-3xl max-w-lg mx-auto p-6 sm:p-8 text-left shadow-2xl space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="font-extrabold text-lg text-slate-900">
                  Caracterización del Aprendiz
                </h3>
              </div>
              <button
                onClick={() => setSelectedRole('none')}
                className="text-xs font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ← Volver
              </button>
            </div>

            <form onSubmit={handleAprendizSubmit} className="space-y-4 text-xs">
              <p className="text-slate-600 leading-relaxed">
                Ingresa tus datos personales. Al finalizar el recorrido y aprobar los retos, <span className="font-bold text-slate-900">tu Certificado Oficial saldrá expedido automáticamente a tu nombre</span>.
              </p>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Nombre Completo del Aprendiz *:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Johana Marcela Alvarado"
                  value={aprendizName}
                  onChange={(e) => setAprendizName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#39A900] bg-slate-50 text-sm font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Tipo de Documento:
                  </label>
                  <select
                    value={aprendizDocType}
                    onChange={(e) => setAprendizDocType(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50"
                  >
                    <option value="CC">Cédula de Ciudadanía (CC)</option>
                    <option value="TI">Tarjeta de Identidad (TI)</option>
                    <option value="CE">Cédula de Extranjería (CE)</option>
                    <option value="PEP">Permiso Especial (PEP)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Número de Documento:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. 63396427"
                    value={aprendizDocNum}
                    onChange={(e) => setAprendizDocNum(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Ficha de Caracterización SOFIA:
                </label>
                <input
                  type="text"
                  required
                  value={aprendizFiche}
                  onChange={(e) => setAprendizFiche(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={!aprendizName.trim()}
                className="w-full py-3 rounded-xl bg-[#39A900] hover:bg-emerald-600 disabled:opacity-50 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Ingresar al Prototipo (Aprendiz)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto w-full text-center text-xs text-slate-400 py-4 relative z-10">
        Servicio Nacional de Aprendizaje SENA &bull; Regional Santander &bull; Programa 122153
      </footer>
    </div>
  );
};
