import React from 'react';
import { useApp } from '../context/AppContext';
import { Trophy, Flame, Sparkles, User, Award, CheckCircle2, Share2, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenProfile: () => void;
  onOpenCertificate: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProfile, onOpenCertificate, onOpenShare }) => {
  const { profile, progressPercentage, language, setLanguage } = useApp();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Top micro institutional banner */}
      <div className="bg-[#00324D] text-white text-xs px-4 py-1.5 flex items-center justify-between font-medium">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#39A900] animate-pulse"></span>
          <span>SERVICIO NACIONAL DE APRENDIZAJE SENA &bull; REGIONAL SANTANDER</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-300">
          <span>Centro Agroempresarial y Turístico de los Andes</span>
          <span>&bull;</span>
          <span>Estrategia CAMPESENA & Mipymes</span>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-md shadow-emerald-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
              <path fill="#39a900" d="M504.2,20.5c-58.3,0.1-105.6,47.4-105.5,105.8c0.1,58.3,47.4,105.6,105.7,105.6 c58.3,0,105.6-47.3,105.6-105.7V126C609.9,67.6,562.6,20.4,504.2,20.5z M155.6,264.6c-18.6,0.1-37.5,1.1-55.2,5.6 c-11.7,3-23,7.8-30.3,15.4c-9.2,9.5-10.4,22.3-5.9,33.3c4,9.7,14.8,16.9,26.8,21.1c25.9,8.9,54.6,10.7,81.8,16.3 c5,1.2,10.6,2.6,13.7,6c3.2,4.1,1.3,9.7-4,12.2c-8.8,4.5-20.1,4.5-30.4,4.4c-9.4-0.4-19.7-1.2-27.2-5.9c-5.5-3.4-6.5-9.1-5.2-14.1 l-60.6,0c-0.2,9.2,1.6,18.9,8.4,26.8c5.6,6.8,14.8,11.5,24.6,14.4c15.7,4.6,32.7,6,49.4,6.4c22.7,0.4,45.8-0.3,67.6-5.4 c13-3.2,25.8-8.3,34.1-16.6c14.8-14.8,11.3-38.3-8.3-49.8c-9.8-5.7-21.5-9.2-33.4-11.5c-17.5-3.6-35.3-6.3-52.9-9.2 c-6.2-1.2-12.8-2.3-18-5.2c-5.5-2.9-5.9-9.8-0.3-12.9c7.2-4.1,16.8-4,25.4-4c9.1,0.2,19,0.7,26.5,5c4.2,2.3,5.9,6.3,5.9,10.1 l57.6-0.1c-0.2-7.3-1.6-14.9-6.9-21.2c-6.2-7.8-17.1-12.7-28.3-15.5C192.8,265.6,174.1,264.7,155.6,264.6L155.6,264.6z M280.6,268.9 l0,137.7l168.1,0l0-30H342.3v-26.7h94.9v-29.3h-94.9l0-21.9l102.6,0l-0.1-29.7L280.6,268.9z M557.5,269c0,0-51.9,0-77.9,0l0,137.7 l59,0l0-92.7l80.8,92.6l81,0.1l0-137.7l-59.1,0l0.1,92L557.5,269z M805.6,269.2c0,0-63.6,91.9-95.6,137.7l61.9,0l14.9-24.8h95.7 l13.9,24.9l68.8,0L874,269.2L805.6,269.2z M836.6,302.1l29.4,49.9l-60.7,0.1L836.6,302.1z M10.6,445.6l0.5,75l280.1-1 c14.3,3.1,22.6,12.4,19.7,33.5L138.6,854.7l56.1,52.5l266.9-461.6L10.6,445.6z M545.2,446.2l262.4,459.6l58-52.1L691.3,552.9 c-2.9-21.2,5.4-30.6,19.7-33.7l280.2,1l-0.1-73.7L545.2,446.2z M500.9,522.3L254.8,944.7l65.4,31.9L484.4,699 c5.7-4.6,11.4-7.1,17.1-7.3c6-0.2,12.2,2,18.3,6.8l163.8,278.4l67.4-35.2L500.9,522.3z"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-slate-900 tracking-tight text-lg sm:text-xl">
                SENA <span className="text-[#39A900]">InnovaAprende</span>
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                122153 &bull; SOFIA 3639874
              </span>
            </div>
            <p className="text-xs text-slate-600 line-clamp-1">
              Gestión del Desarrollo Administrativo e Innovación &bull; Proyecto INNOVAGESTIÓN
            </p>
          </div>
        </div>

        {/* Gamification stats & user controls */}
        <div className="flex items-center flex-wrap gap-2.5 sm:gap-3 text-xs">
          {/* Streak */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 font-semibold shadow-xs">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-bounce" />
            <span>{profile.streakDays} días racha</span>
          </div>

          {/* XP & Level */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
            <Sparkles className="w-4 h-4 text-[#39A900]" />
            <div>
              <div className="flex items-center gap-1.5 font-bold">
                <span>Nivel {profile.level}:</span>
                <span className="text-emerald-700">{profile.levelTitle}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-emerald-700">
                <span>{profile.xp} XP</span>
                <div className="w-16 h-1.5 bg-emerald-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#39A900] rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (profile.xp % 700) / 7)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Badges count */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold shadow-xs">
            <Trophy className="w-4 h-4 text-indigo-600" />
            <span>{profile.unlockedBadgeIds.length} / 10 Insignias</span>
          </div>

          {/* Global Progress */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <div className="text-[11px]">
              <span className="text-slate-500 font-medium">Progreso Global: </span>
              <span className="font-bold text-slate-800">{progressPercentage}%</span>
            </div>
          </div>

          {/* Certificate Quick Button */}
          {progressPercentage >= 60 && (
            <button
              onClick={onOpenCertificate}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer animate-pulse"
              title="Ver Certificación Digital Oficial"
            >
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Certificado</span>
            </button>
          )}

          {/* Share Instructor Button */}
          <button
            onClick={onOpenShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Compartir enlace con los estudiantes para que su certificado salga a su nombre"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Compartir Enlace</span>
          </button>

          {/* Language Switcher Toggle */}
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer border border-slate-300"
            title="Cambiar idioma / Change language"
          >
            <Globe className="w-4 h-4 text-[#39A900]" />
            <span>{language === 'es' ? 'EN' : 'ES'}</span>
          </button>

          {/* Profile Button */}
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-medium shadow-xs transition-colors cursor-pointer"
            title="Ver / Editar Perfil del Aprendiz"
          >
            <User className="w-4 h-4" />
            <span className="max-w-[110px] truncate hidden sm:inline">{profile.name.split(' ')[0]}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
