import React from "react";
import { type Nom004Data } from "../types";

interface Props {
  onSubmit: (data: Nom004Data) => void;
}

export const PatientForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      formData.entries(),
    ) as unknown as Nom004Data;

    // Convertir el checkbox a booleano explícito
    data.aceptaPrivacidad = formData.get("aceptaPrivacidad") === "on";

    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md space-y-8"
    >
      {/* Sección 1: Identidad */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
          1. Datos de Identidad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="nombres"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre(s) *
            </label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
          </div>
          <div>
            <label
              htmlFor="apellidos"
              className="block text-sm font-medium text-gray-700"
            >
              Apellidos *
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
          </div>
          <div>
            <label
              htmlFor="curp"
              className="block text-sm font-medium text-gray-700"
            >
              CURP (Requerido por NOM-024) *
            </label>
            <input
              type="text"
              id="curp"
              name="curp"
              required
              maxLength={18}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border uppercase"
            />
          </div>
          <div>
            <label
              htmlFor="fechaNacimiento"
              className="block text-sm font-medium text-gray-700"
            >
              Fecha de Nacimiento *
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
          </div>
        </div>
      </section>

      {/* Sección 2: Clínicos y Legales */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
          2. Triaje y Normativa
        </h2>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="motivoConsulta"
              className="block text-sm font-medium text-gray-700"
            >
              Motivo de consulta (Breve descripción) *
            </label>
            <textarea
              id="motivoConsulta"
              name="motivoConsulta"
              rows={3}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            ></textarea>
          </div>
          <div className="flex items-center mt-4">
            <input
              id="aceptaPrivacidad"
              name="aceptaPrivacidad"
              type="checkbox"
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="aceptaPrivacidad"
              className="ml-2 block text-sm text-gray-900"
            >
              He leído y acepto el Aviso de Privacidad para el manejo de datos
              sensibles (psicológicos). *
            </label>
          </div>
        </div>
      </section>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow-sm transition-colors"
        >
          Generar Expediente (Simulación)
        </button>
      </div>
    </form>
  );
};
