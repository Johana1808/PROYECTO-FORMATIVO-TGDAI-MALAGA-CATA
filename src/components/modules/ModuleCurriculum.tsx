import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { COMPETENCIES_DATA } from '../../data/curriculumData';
import { REQUIRED_PRODUCTS } from '../../data/productsData';
import { Competency, RequiredProduct } from '../../types';
import { 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  Brain, 
  Wrench, 
  HeartHandshake, 
  Award, 
  Download, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  CheckSquare,
  Sparkles,
  Layers,
  FileCheck
} from 'lucide-react';

export const ModuleCurriculum: React.FC = () => {
  const { addXp, unlockBadge } = useApp();
  const [activeSubTab, setActiveSubTab] = useState<'productos' | 'competencias'>('productos');
  const [selectedProduct, setSelectedProduct] = useState<RequiredProduct>(REQUIRED_PRODUCTS[0]);
  const [selectedCompType, setSelectedCompType] = useState<'todas' | 'tecnica' | 'clave_transversal'>('todas');
  const [searchComp, setSearchComp] = useState('');
  const [expandedCompCode, setExpandedCompCode] = useState<string | null>(COMPETENCIES_DATA[0].code);
  const [downloadedTemplates, setDownloadedTemplates] = useState<number[]>([]);

  const handleSimulateDownload = (prodId: number) => {
    if (!downloadedTemplates.includes(prodId)) {
      setDownloadedTemplates((prev) => [...prev, prodId]);
      addXp(60, `Descargaste la guía técnica del Producto 0${prodId}`);
      if (downloadedTemplates.length + 1 >= 5) {
        unlockBadge("guardian_evidencias");
      }
    }
  };

  const filteredCompetencies = COMPETENCIES_DATA.filter((c) => {
    if (selectedCompType !== 'todas' && c.type !== selectedCompType) return false;
    if (searchComp) {
      const q = searchComp.toLowerCase();
      return (
        c.name.toLowerCase().includes(q) ||
        c.code.includes(q) ||
        c.normName.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Subtab navigation */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-3">
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveSubTab('productos')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeSubTab === 'productos'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className={`w-4 h-4 ${activeSubTab === 'productos' ? 'text-amber-500' : 'text-slate-500'}`} />
            <span>Los 9 Productos Requeridos</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-extrabold">
              9
            </span>
          </button>

          <button
            onClick={() => setActiveSubTab('competencias')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeSubTab === 'competencias'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className={`w-4 h-4 ${activeSubTab === 'competencias' ? 'text-[#39A900]' : 'text-slate-500'}`} />
            <span>Matriz de Competencias</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold">
              Saber / Hacer / Ser
            </span>
          </button>
        </div>

        <div className="text-xs text-slate-500 font-medium">
          Tecnólogo en Gestión del Desarrollo Administrativo e Innovación &bull; Código: 122153
        </div>
      </div>

      {/* SUBTAB 1: LOS 9 PRODUCTOS REQUERIDOS */}
      {activeSubTab === 'productos' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left List of Products */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl mb-3 flex items-center justify-between">
              <div>
                <span className="font-extrabold text-xs text-amber-900 block">
                  Catálogo de Productos del Proyecto INNOVAGESTIÓN
                </span>
                <span className="text-[11px] text-amber-800">
                  Selecciona cualquier producto para ver su estructura oficial y rúbrica.
                </span>
              </div>
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            </div>

            <div className="space-y-2 max-h-[720px] overflow-y-auto pr-1">
              {REQUIRED_PRODUCTS.map((prod) => {
                const isSelected = selectedProduct.id === prod.id;
                const isDownloaded = downloadedTemplates.includes(prod.id);

                return (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#39A900] ring-2 ring-emerald-500/20 shadow-md'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-slate-900 text-white">
                        Producto {prod.id}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        Fase {prod.phaseId}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm leading-snug">
                      {prod.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {prod.subtitle}
                    </p>

                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 font-mono">{prod.associatedAp.split(':')[0]}</span>
                      {isDownloaded && (
                        <span className="text-emerald-600 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Descargada
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Detailed View of Selected Product */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 sticky top-28">
              {/* Product Header */}
              <div className="border-b border-slate-200 pb-4">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-black bg-amber-500 text-white">
                    PRODUCTO FORMATIVO N° {selectedProduct.id}
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Fase de {selectedProduct.phaseId}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {selectedProduct.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 mt-1">
                  {selectedProduct.subtitle}
                </p>
                <div className="mt-2 text-xs text-emerald-800 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  {selectedProduct.associatedAp}
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> Alcance y Propósito del Entregable
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {selectedProduct.description}
                </p>
              </div>

              {/* CAMPESENA Focus */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 space-y-1">
                <span className="text-xs font-extrabold text-emerald-900 uppercase tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#39A900]" /> Enfoque Especial CAMPESENA & Mipymes
                </span>
                <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                  {selectedProduct.campesenaFocus}
                </p>
              </div>

              {/* Structure Sections */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> Estructura y Contenidos Requeridos (Lista de Chequeo)
                </h4>
                <div className="space-y-1.5">
                  {selectedProduct.structure.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-800 font-medium flex items-start gap-2"
                    >
                      <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evaluation Criteria */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-purple-600" /> Criterios de Evaluación SENA Aplicables
                </h4>
                <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside">
                  {selectedProduct.evaluationCriteria.map((crit, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span className="font-semibold text-slate-800">{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Downloadable / Action Footer */}
              <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold block text-slate-200">
                    Formato Técnico Recomendado:
                  </span>
                  <span className="text-xs text-slate-400">
                    {selectedProduct.templateFormat}
                  </span>
                </div>

                <button
                  onClick={() => handleSimulateDownload(selectedProduct.id)}
                  className="px-4 py-2 rounded-xl bg-[#39A900] hover:bg-emerald-600 text-white text-xs font-extrabold flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  Descargar Guía & Plantilla (+60 XP)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: MATRIZ DE COMPETENCIAS (SABER, SABER HACER, SER) */}
      {activeSubTab === 'competencias' && (
        <div className="space-y-4">
          {/* Filtering Header */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Tipo de Competencia:</span>
              <button
                onClick={() => setSelectedCompType('todas')}
                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                  selectedCompType === 'todas'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Todas ({COMPETENCIES_DATA.length})
              </button>
              <button
                onClick={() => setSelectedCompType('tecnica')}
                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                  selectedCompType === 'tecnica'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                Técnicas Específicas
              </button>
              <button
                onClick={() => setSelectedCompType('clave_transversal')}
                className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                  selectedCompType === 'clave_transversal'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                Clave & Transversales
              </button>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar competencia..."
                value={searchComp}
                onChange={(e) => setSearchComp(e.target.value)}
                className="w-full pl-9 pr-3 py-1 text-xs rounded-lg border border-slate-300 bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          {/* Competencies Accordion */}
          <div className="space-y-3">
            {filteredCompetencies.map((comp) => {
              const isExpanded = expandedCompCode === comp.code;

              return (
                <div
                  key={comp.code}
                  className={`bg-white rounded-xl border transition-all ${
                    isExpanded ? 'border-[#39A900] shadow-md ring-1 ring-emerald-500/20' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Card Header Accordion Trigger */}
                  <div
                    onClick={() => setExpandedCompCode(isExpanded ? null : comp.code)}
                    className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center font-black text-xs ${
                          comp.type === 'tecnica'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {comp.type === 'tecnica' ? 'TEC' : 'TRV'}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-bold text-slate-400">
                            Código: {comp.code}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {comp.durationHours} Horas
                          </span>
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-base">
                          {comp.name}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          Norma: {comp.normName}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 font-semibold hidden md:inline">
                        {comp.raps.length} RAPs
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Body: SABER, SABER HACER, SER, RAPs & CRITERIOS */}
                  {isExpanded && (
                    <div className="px-4 pb-6 pt-2 border-t border-slate-100 space-y-6">
                      {/* RAPs Section */}
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#39A900]" />
                          Resultados de Aprendizaje (RAPs) Asociados
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {comp.raps.map((rap, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-200 text-xs text-slate-800 font-medium"
                            >
                              <span className="font-bold text-emerald-800 block mb-0.5">
                                {rap.id}:
                              </span>
                              <span>{rap.denomination}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 3 Pillars of Knowledge: SABER, SABER HACER, SER */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* 1. SABER (Conceptos) */}
                        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wide">
                            <Brain className="w-4 h-4 text-blue-600" />
                            <span>1. Saber (Conocimientos Conceptuales)</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                            {comp.saber.map((item, idx) => (
                              <li key={idx} className="leading-snug">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 2. SABER HACER (Procedimientos) */}
                        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                            <Wrench className="w-4 h-4 text-amber-600" />
                            <span>2. Saber Hacer (Procedimentales)</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                            {comp.saberHacer.map((item, idx) => (
                              <li key={idx} className="leading-snug">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 3. SER (Actitudes y Valores) */}
                        <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 space-y-2">
                          <div className="flex items-center gap-2 text-xs font-bold text-rose-900 uppercase tracking-wide">
                            <HeartHandshake className="w-4 h-4 text-rose-600" />
                            <span>3. Ser (Actitudinales & Valores)</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                            {comp.ser.map((item, idx) => (
                              <li key={idx} className="leading-snug">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Criterios de Evaluación */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wide">
                          <Award className="w-4 h-4 text-purple-600" />
                          <span>Criterios de Evaluación Oficiales de la Competencia</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {comp.criteriosEvaluacion.map((criterio, idx) => (
                            <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                              <span className="text-[#39A900] font-black">&bull;</span>
                              <span>{criterio}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
