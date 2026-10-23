import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { LandingRoleSelector } from './components/LandingRoleSelector';
import { Navbar } from './components/Navbar';
import { TabsNav } from './components/TabsNav';
import { ModuleMap } from './components/modules/ModuleMap';
import { ModuleCurriculum } from './components/modules/ModuleCurriculum';
import { ModuleSimulations } from './components/modules/ModuleSimulations';
import { ModuleEvaluations } from './components/modules/ModuleEvaluations';
import { ModuleAITutor } from './components/modules/ModuleAITutor';
import { ModuleGamificationCert } from './components/modules/ModuleGamificationCert';
import { CertificateModal } from './components/CertificateModal';
import { ProfileModal } from './components/ProfileModal';
import { ShareInstructorModal } from './components/ShareInstructorModal';
import { Trophy, Sparkles, CheckCircle2, X } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activeTab, toasts, removeToast } = useApp();
  
  // If URL params have student credentials or if user already selected role, skip landing
  const [isInLanding, setIsInLanding] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('nombre') || params.get('name') || params.get('estudiante')) {
        return false;
      }
    }
    return true;
  });

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  if (isInLanding) {
    return <LandingRoleSelector onEnterApp={() => setIsInLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-[#39A900] selection:text-white">
      {/* Navbar with Level, XP & SENA branding */}
      <Navbar
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onOpenShare={() => setIsShareOpen(true)}
      />

      {/* Tabs Switcher for the 6 modules */}
      <TabsNav />

      {/* Main Module Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'mapa' && <ModuleMap />}
        {activeTab === 'curriculo' && <ModuleCurriculum />}
        {activeTab === 'simulaciones' && <ModuleSimulations />}
        {activeTab === 'evaluaciones' && <ModuleEvaluations />}
        {activeTab === 'tutor' && <ModuleAITutor />}
        {activeTab === 'gamificacion' && (
          <ModuleGamificationCert
            onOpenCertificate={() => setIsCertificateOpen(true)}
            onOpenProfile={() => setIsProfileOpen(true)}
            onOpenShare={() => setIsShareOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#39A900] flex items-center justify-center text-white font-bold text-xs">
              S
            </div>
            <span>
              Servicio Nacional de Aprendizaje SENA &bull; Prototipo Educativo Inteligente
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Centro Agroempresarial y Turístico de los Andes</span>
            <span>&bull;</span>
            <span>Programa: 122153</span>
            <span>&bull;</span>
            <span>Proyecto: INNOVAGESTIÓN</span>
          </div>
        </div>
      </footer>

      {/* Floating Toast Notifications */}
      <div className="fixed bottom-5 right-5 z-50 space-y-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-xl shadow-xl border flex items-start gap-3 backdrop-blur-md animate-slideUp transition-all ${
              toast.type === 'badge'
                ? 'bg-amber-900 text-white border-amber-500'
                : toast.type === 'xp'
                ? 'bg-slate-900 text-white border-emerald-500'
                : 'bg-emerald-900 text-white border-emerald-400'
            }`}
          >
            <div className="p-1 rounded-lg bg-white/10 shrink-0">
              {toast.type === 'badge' ? (
                <Trophy className="w-5 h-5 text-amber-300" />
              ) : toast.type === 'xp' ? (
                <Sparkles className="w-5 h-5 text-emerald-300" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              )}
            </div>
            <div className="flex-1 space-y-0.5">
              <span className="font-extrabold text-xs block">{toast.title}</span>
              <p className="text-xs text-slate-200">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-400 hover:text-white shrink-0 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Modals */}
      {isProfileOpen && <ProfileModal onClose={() => setIsProfileOpen(false)} />}
      {isCertificateOpen && <CertificateModal onClose={() => setIsCertificateOpen(false)} />}
      {isShareOpen && <ShareInstructorModal onClose={() => setIsShareOpen(false)} />}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
