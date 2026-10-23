import React, { useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { PROGRAM_INFO, PROJECT_INFO } from '../data/curriculumData';
import { Award, Printer, Download, CheckCircle2, ShieldCheck, X, Edit3 } from 'lucide-react';

interface CertificateModalProps {
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ onClose }) => {
  const { profile, updateProfile } = useApp();
  const certRef = useRef<HTMLDivElement>(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(profile.name);
  const [tempDoc, setTempDoc] = useState(profile.documentNumber);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden my-6 border border-slate-300">
        {/* Top Action Bar */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="font-extrabold text-sm">
              Certificación Digital Oficial &bull; SENA
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-xl bg-[#39A900] hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar como PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PRINTABLE CERTIFICATE CONTAINER */}
        <div
          ref={certRef}
          className="p-8 sm:p-12 bg-[#FCFDF9] text-slate-900 relative border-8 border-double border-emerald-800 m-4 sm:m-6 rounded-2xl shadow-inner print:m-0 print:border-4"
        >
          {/* Watermark background icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[500px] h-[500px]">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          {/* Certificate Content */}
          <div className="relative z-10 text-center space-y-6">
            {/* Header logos and title */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                    <path fill="#39a900" d="M504.2,20.5c-58.3,0.1-105.6,47.4-105.5,105.8c0.1,58.3,47.4,105.6,105.7,105.6 c58.3,0,105.6-47.3,105.6-105.7V126C609.9,67.6,562.6,20.4,504.2,20.5z M155.6,264.6c-18.6,0.1-37.5,1.1-55.2,5.6 c-11.7,3-23,7.8-30.3,15.4c-9.2,9.5-10.4,22.3-5.9,33.3c4,9.7,14.8,16.9,26.8,21.1c25.9,8.9,54.6,10.7,81.8,16.3 c5,1.2,10.6,2.6,13.7,6c3.2,4.1,1.3,9.7-4,12.2c-8.8,4.5-20.1,4.5-30.4,4.4c-9.4-0.4-19.7-1.2-27.2-5.9c-5.5-3.4-6.5-9.1-5.2-14.1 l-60.6,0c-0.2,9.2,1.6,18.9,8.4,26.8c5.6,6.8,14.8,11.5,24.6,14.4c15.7,4.6,32.7,6,49.4,6.4c22.7,0.4,45.8-0.3,67.6-5.4 c13-3.2,25.8-8.3,34.1-16.6c14.8-14.8,11.3-38.3-8.3-49.8c-9.8-5.7-21.5-9.2-33.4-11.5c-17.5-3.6-35.3-6.3-52.9-9.2 c-6.2-1.2-12.8-2.3-18-5.2c-5.5-2.9-5.9-9.8-0.3-12.9c7.2-4.1,16.8-4,25.4-4c9.1,0.2,19,0.7,26.5,5c4.2,2.3,5.9,6.3,5.9,10.1 l57.6-0.1c-0.2-7.3-1.6-14.9-6.9-21.2c-6.2-7.8-17.1-12.7-28.3-15.5C192.8,265.6,174.1,264.7,155.6,264.6L155.6,264.6z M280.6,268.9 l0,137.7l168.1,0l0-30H342.3v-26.7h94.9v-29.3h-94.9l0-21.9l102.6,0l-0.1-29.7L280.6,268.9z M557.5,269c0,0-51.9,0-77.9,0l0,137.7 l59,0l0-92.7l80.8,92.6l81,0.1l0-137.7l-59.1,0l0.1,92L557.5,269z M805.6,269.2c0,0-63.6,91.9-95.6,137.7l61.9,0l14.9-24.8h95.7 l13.9,24.9l68.8,0L874,269.2L805.6,269.2z M836.6,302.1l29.4,49.9l-60.7,0.1L836.6,302.1z M10.6,445.6l0.5,75l280.1-1 c14.3,3.1,22.6,12.4,19.7,33.5L138.6,854.7l56.1,52.5l266.9-461.6L10.6,445.6z M545.2,446.2l262.4,459.6l58-52.1L691.3,552.9 c-2.9-21.2,5.4-30.6,19.7-33.7l280.2,1l-0.1-73.7L545.2,446.2z M500.9,522.3L254.8,944.7l65.4,31.9L484.4,699 c5.7-4.6,11.4-7.1,17.1-7.3c6-0.2,12.2,2,18.3,6.8l163.8,278.4l67.4-35.2L500.9,522.3z"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#00324D]">
                REPÚBLICA DE COLOMBIA &bull; SERVICIO NACIONAL DE APRENDIZAJE SENA
              </p>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                {profile.trainingCenter.toUpperCase()} &bull; {profile.regional.toUpperCase()}
              </p>
            </div>

            {/* Certificate Title */}
            <div className="space-y-1">
              <span className="text-xs uppercase font-extrabold text-[#39A900] tracking-widest block">
                OTORGA LA PRESENTE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-serif uppercase">
                Certificación de Apropiación Integral del Programa de Formación SENA
              </h2>
            </div>

            {/* Grant statement */}
            <div className="max-w-2xl mx-auto space-y-3 pt-2">
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Se hace constar que el (la) Aprendiz:
              </p>

              <div className="py-2 border-b-2 border-slate-300 max-w-xl mx-auto flex items-center justify-center gap-2 group">
                {!isEditingName ? (
                  <>
                    <h3 className="text-xl sm:text-3xl font-black text-[#00324D] tracking-wide font-sans">
                      {profile.name}
                    </h3>
                    <button
                      onClick={() => {
                        setTempName(profile.name);
                        setTempDoc(profile.documentNumber);
                        setIsEditingName(true);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-opacity cursor-pointer print:hidden text-xs flex items-center gap-1"
                      title="Editar nombre y cédula en el certificado"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span className="text-[10px]">Editar</span>
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-lg print:hidden">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      placeholder="Nombre completo"
                      className="p-1.5 text-sm font-bold border border-slate-300 rounded-lg flex-1 text-center"
                    />
                    <input
                      type="text"
                      value={tempDoc}
                      onChange={(e) => setTempDoc(e.target.value)}
                      placeholder="Cédula"
                      className="p-1.5 text-sm font-bold border border-slate-300 rounded-lg w-32 text-center"
                    />
                    <button
                      onClick={() => {
                        updateProfile({ name: tempName, documentNumber: tempDoc });
                        setIsEditingName(false);
                      }}
                      className="px-3 py-1.5 bg-[#39A900] text-white rounded-lg text-xs font-bold cursor-pointer"
                    >
                      Guardar
                    </button>
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Identificado(a) con {profile.documentType} N° <span className="font-bold text-slate-900">{profile.documentNumber}</span>, Ficha de Caracterización <span className="font-bold text-slate-900">{profile.ficheNumber}</span>, ha demostrado comprensión, apropiación y dominio integral de todos los componentes curriculares del programa:
              </p>

              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
                <h4 className="text-base sm:text-lg font-black text-emerald-950">
                  {PROGRAM_INFO.name.toUpperCase()}
                </h4>
                <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                  Nivel de Formación: {PROGRAM_INFO.degree} &bull; Código de Programa: {PROGRAM_INFO.code} &bull; Total: {PROGRAM_INFO.totalHours} Horas
                </p>
                <div className="mt-2 text-[11px] text-slate-700 font-medium">
                  En el marco del Proyecto Formativo: <span className="font-bold text-slate-900">"{PROJECT_INFO.name}"</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed max-w-xl mx-auto">
                Acreditando competencia en las <span className="font-bold text-slate-800">4 Fases Formativas (Análisis, Planeación, Ejecución y Evaluación)</span>, los conocimientos del <span className="font-bold text-slate-800">Saber, Saber Hacer y Ser</span>, y la formulación integral de los <span className="font-bold text-slate-800">9 Productos Requeridos</span> con enfoque de fortalecimiento a Mipymes y la estrategia CAMPESENA.
              </p>
            </div>

            {/* Date and Security Hash */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto pt-4 text-xs border-t border-slate-200 text-slate-600">
              <div className="text-left">
                <span className="block font-bold text-slate-800">Fecha de Expedición:</span>
                <span>{profile.certificateDate || new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100 border border-slate-200 font-mono text-[10px]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Hash: {profile.certificateHash || 'SENA-INNOVA-7X9821-2026'}</span>
              </div>
            </div>

            {/* Signature blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 max-w-2xl mx-auto">
              <div className="border-t border-slate-400 pt-2 text-center">
                <span className="font-bold text-xs text-slate-900 block font-serif italic">
                  Equipo Desarrollo Curricular
                </span>
                <span className="text-[10px] text-slate-500 block">
                  Johana Marcela Alvarado Flórez
                </span>
                <span className="text-[9px] text-slate-400 block">
                  Centro Agroempresarial y Turístico
                </span>
              </div>

              <div className="border-t border-slate-400 pt-2 text-center">
                <span className="font-bold text-xs text-slate-900 block font-serif italic">
                  Instructor Líder Campesena
                </span>
                <span className="text-[10px] text-slate-500 block">
                  Yudy Patricia Malaver Herrera
                </span>
                <span className="text-[9px] text-slate-400 block">
                  Regional Santander
                </span>
              </div>

              <div className="border-t border-slate-400 pt-2 text-center">
                <div className="w-12 h-12 mx-auto mb-1 rounded-full border border-emerald-600/30 flex items-center justify-center bg-emerald-50">
                  <CheckCircle2 className="w-6 h-6 text-[#39A900]" />
                </div>
                <span className="font-extrabold text-[10px] text-emerald-800 uppercase block">
                  Certificación Verificada
                </span>
                <span className="text-[9px] text-slate-400 block">
                  Sello Digital SENA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
