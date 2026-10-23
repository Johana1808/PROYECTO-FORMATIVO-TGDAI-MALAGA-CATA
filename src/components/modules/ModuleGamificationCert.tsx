import React from 'react';
import { useApp } from '../../context/AppContext';
import { BADGES_DATA, LEVELS, INITIAL_LEADERBOARD } from '../../data/gamificationData';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  Lock, 
  Download, 
  ShieldCheck, 
  Users, 
  Gift, 
  ExternalLink,
  GraduationCap,
  Compass,
  Search,
  Target,
  Zap,
  Layers,
  BarChart3,
  FolderCheck,
  Leaf,
  Share2
} from 'lucide-react';

interface ModuleGamificationCertProps {
  onOpenCertificate: () => void;
  onOpenProfile: () => void;
  onOpenShare?: () => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Search,
  Target,
  Zap,
  Layers,
  BarChart3,
  FolderCheck,
  Leaf,
  Award,
  GraduationCap,
  Share2
};

export const ModuleGamificationCert: React.FC<ModuleGamificationCertProps> = ({
  onOpenCertificate,
  onOpenProfile,
  onOpenShare,
}) => {
  const { profile, generateCertificate, progressPercentage } = useApp();

  const handleGenerateOrView = () => {
    if (!profile.certificateGenerated) {
      generateCertificate();
    }
    onOpenCertificate();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: Official Certification Milestone */}
      <div className="bg-gradient-to-br from-[#00324D] via-[#014264] to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <GraduationCap className="w-4 h-4" />
              Culminación de Apropiación Curricular
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Certificación de Apropiación Integral del Programa de Formación SENA
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Alcanza el nivel mínimo de desempeño en las 4 fases del proyecto INNOVAGESTIÓN y genera automáticamente tu diploma digital con código hash institucional, firmas autorizadas y aval del Centro Agroempresarial y Turístico de los Andes.
            </p>

            {/* Status pill */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg bg-white/10 border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Progreso Actual: {progressPercentage}%</span>
              </div>
              <span className="text-xs text-slate-300">
                (Mínimo 60% para expedición oficial)
              </span>
            </div>
          </div>

          {/* Action box */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-4 shrink-0 lg:w-72">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-900 mx-auto flex items-center justify-center shadow-lg">
              <Award className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs uppercase font-extrabold text-amber-300 tracking-wide block">
                {profile.certificateGenerated ? "¡CERTIFICADO EXPEDIDO!" : "ESTADO DE CERTIFICACIÓN"}
              </span>
              <p className="text-xs text-slate-300 mt-0.5">
                {profile.certificateGenerated
                  ? `Emitido el ${profile.certificateDate}`
                  : progressPercentage >= 60
                  ? "Listo para generar diploma"
                  : "Completa actividades y evaluaciones"}
              </p>
            </div>

            <button
              onClick={handleGenerateOrView}
              className={`w-full py-2.5 px-4 rounded-xl font-extrabold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 ${
                progressPercentage >= 60 || profile.certificateGenerated
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 hover:scale-105 active:scale-95'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>
                {profile.certificateGenerated
                  ? 'Ver / Imprimir Certificación'
                  : progressPercentage >= 60
                  ? 'Generar Certificado Oficial'
                  : 'Previsualizar Certificado'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Learner Profile & Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wide">
              Ficha del Aprendiz
            </h3>
            <button
              onClick={onOpenProfile}
              className="text-xs font-bold text-[#39A900] hover:underline cursor-pointer"
            >
              Editar Datos
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#00324D] text-white flex items-center justify-center font-black text-lg shadow-sm">
              {profile.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-base leading-tight">
                {profile.name}
              </h4>
              <p className="text-xs text-slate-500">
                {profile.documentType} {profile.documentNumber}
              </p>
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div>
              <span className="font-bold text-slate-800">Programa: </span>
              Gestión del Desarrollo Administrativo e Innovación (122153)
            </div>
            <div>
              <span className="font-bold text-slate-800">Ficha SOFIA: </span>
              {profile.ficheNumber}
            </div>
            <div>
              <span className="font-bold text-slate-800">Centro: </span>
              {profile.trainingCenter}
            </div>
          </div>

          {onOpenShare && (
            <button
              onClick={onOpenShare}
              className="w-full py-2 px-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Generar Enlace para la Clase</span>
            </button>
          )}
        </div>

        {/* Level & XP Gauge */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" /> Nivel & Experiencia
            </h3>
            <span className="text-xs font-bold text-orange-600 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-orange-500" /> {profile.streakDays} días
            </span>
          </div>

          <div className="text-center space-y-1">
            <span className="text-3xl font-black text-slate-900">
              Nivel {profile.level}
            </span>
            <span className="block text-xs font-bold text-emerald-700 uppercase tracking-wider">
              {profile.levelTitle}
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-slate-600">
              <span>{profile.xp} XP Acumulados</span>
              <span>Próximo Nivel</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-gradient-to-r from-[#39A900] to-emerald-500 rounded-full transition-all duration-700"
                style={{ width: `${Math.min(100, (profile.xp % 800) / 8)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Virtual Rewards Unlocked */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-purple-600" /> Recompensas Virtuales
            </h3>
            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">
              SENA Pack
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-purple-900 block">Kit de Plantillas 9 Productos</span>
                <span className="text-[10px] text-purple-700">Formatos editables Word y Excel</span>
              </div>
              <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Activo
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-800 block">Guía de Campo CAMPESENA</span>
                <span className="text-[10px] text-slate-500">Metodología de diagnóstico rural</span>
              </div>
              <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                Desbloqueado
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges Showcase (Vitrina de Insignias) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              Vitrina de Insignias Digitales por Competencias
            </h3>
            <p className="text-xs text-slate-500">
              Desbloquea insignias cumpliendo retos de aprendizaje y apropiación.
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
            {profile.unlockedBadgeIds.length} / {BADGES_DATA.length} Desbloqueadas
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {BADGES_DATA.map((badge) => {
            const isUnlocked = profile.unlockedBadgeIds.includes(badge.id);
            const Icon = ICON_MAP[badge.icon] || Trophy;

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  isUnlocked
                    ? 'bg-gradient-to-b from-white to-amber-50/50 border-amber-300 shadow-sm ring-1 ring-amber-400/20'
                    : 'bg-slate-50/70 border-slate-200 opacity-55'
                }`}
              >
                <div
                  className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-xl mb-2.5 shadow-sm transition-transform hover:scale-110 ${
                    isUnlocked
                      ? 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-white shadow-amber-200'
                      : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {isUnlocked ? <Icon className="w-7 h-7" /> : <Lock className="w-5 h-5" />}
                </div>

                <h4 className="font-extrabold text-xs text-slate-900 line-clamp-1 mb-1">
                  {badge.title}
                </h4>

                <p className="text-[10px] text-slate-500 line-clamp-2 leading-tight">
                  {badge.description}
                </p>

                <div className="mt-2 pt-2 border-t border-slate-100">
                  <span
                    className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      isUnlocked
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isUnlocked ? 'Conquistada' : `Req. ${badge.requiredXp} XP`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leaderboard & Team Ranking */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              Ranking de la Ficha 3639874 & Equipos del Proyecto
            </h3>
            <p className="text-xs text-slate-500">
              Tabla de posiciones en tiempo real basada en XP acumulado y productos completados.
            </p>
          </div>
          <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Regional Santander
          </span>
        </div>

        <div className="space-y-2">
          {INITIAL_LEADERBOARD.map((item) => {
            const isUser = item.isCurrentUser;
            const currentXp = isUser ? profile.xp : item.xp;
            const currentBadges = isUser ? profile.unlockedBadgeIds.length : item.badgesCount;

            return (
              <div
                key={item.rank}
                className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                  isUser
                    ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-500/20 shadow-xs'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs ${
                      item.rank === 1
                        ? 'bg-amber-400 text-slate-950 shadow-xs'
                        : item.rank === 2
                        ? 'bg-slate-300 text-slate-900'
                        : item.rank === 3
                        ? 'bg-amber-700 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {item.rank}
                  </span>

                  <div>
                    <span className="font-extrabold text-xs text-slate-900 flex items-center gap-1.5">
                      {isUser ? profile.name : item.name}
                      {isUser && (
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-200/60 px-1.5 py-0.2 rounded">
                          Tú
                        </span>
                      )}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      {item.team}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="text-slate-600 hidden sm:inline">
                    {currentBadges} Insignias
                  </span>
                  <span className="font-black text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-lg">
                    {currentXp} XP
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
