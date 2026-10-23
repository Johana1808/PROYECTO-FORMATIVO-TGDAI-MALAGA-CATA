import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { User, Save, X, Building, CreditCard, Hash, MapPin } from 'lucide-react';

interface ProfileModalProps {
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  const { profile, updateProfile, addXp } = useApp();
  const [formData, setFormData] = useState({
    name: profile.name,
    documentType: profile.documentType,
    documentNumber: profile.documentNumber,
    ficheNumber: profile.ficheNumber,
    trainingCenter: profile.trainingCenter,
    regional: profile.regional,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    addXp(30, "Actualizaste los datos de tu perfil de aprendiz");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl border border-slate-200">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-600" />
            <h3 className="font-extrabold text-lg text-slate-900">
              Perfil del Aprendiz SENA
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-500">
          Estos datos se reflejarán en tu <span className="font-semibold text-slate-700">Certificación de Apropiación Integral</span> y en el seguimiento de tu proceso formativo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 block mb-1">
              Nombre Completo del Aprendiz:
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#39A900] bg-slate-50 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                Tipo de Documento:
              </label>
              <select
                value={formData.documentType}
                onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#39A900] bg-slate-50 focus:bg-white"
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
                value={formData.documentNumber}
                onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#39A900] bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                Ficha SOFIA:
              </label>
              <input
                type="text"
                required
                value={formData.ficheNumber}
                onChange={(e) => setFormData({ ...formData, ficheNumber: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#39A900] bg-slate-50 focus:bg-white"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                Regional:
              </label>
              <input
                type="text"
                required
                value={formData.regional}
                onChange={(e) => setFormData({ ...formData, regional: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#39A900] bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">
              Centro de Formación:
            </label>
            <input
              type="text"
              required
              value={formData.trainingCenter}
              onChange={(e) => setFormData({ ...formData, trainingCenter: e.target.value })}
              className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-[#39A900] bg-slate-50 focus:bg-white"
            />
          </div>

          <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#39A900] hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Save className="w-4 h-4" />
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
