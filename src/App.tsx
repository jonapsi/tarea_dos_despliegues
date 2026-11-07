import { useState } from "react";
import { Header } from "./components/Header";
import { PatientForm } from "./components/PatientForm";
import { JsonModal } from "./components/JsonModal";
import type { Nom004Data } from "./types";

function App() {
  const [modalData, setModalData] = useState<Nom004Data | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (data: Nom004Data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        <main>
          <PatientForm onSubmit={handleFormSubmit} />
        </main>

        <JsonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={modalData}
        />
      </div>
    </div>
  );
}

export default App;
