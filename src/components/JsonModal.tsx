import React from "react";
import type { Nom004Data } from "../types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: Nom004Data | null;
}

export const JsonModal: React.FC<Props> = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
        <div className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
          <h3 className="font-bold text-lg">Carga Útil Generada (JSON)</h3>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white font-bold text-xl"
          >
            &times;
          </button>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-600 mb-4">
            Esta es la estructura de datos que se enviaría al servidor para
            persistir en la base de datos, cumpliendo con la trazabilidad
            requerida por la NOM-024.
          </p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm text-blue-900 border border-gray-200">
            {JSON.stringify(data, null, 2)}
          </pre>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
