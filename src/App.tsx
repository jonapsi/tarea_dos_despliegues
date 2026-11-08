import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { PatientForm } from "./components/PatientForm";
import { JsonModal } from "./components/JsonModal";
import { Footer } from "./components/Footer";
import { AvisoPrivacidad } from "./components/AvisoPrivacidad";
import type { Nom004Data } from "./types";

const AVISO_HASH = "#aviso-privacidad";

function App() {
  const [modalData, setModalData] = useState<Nom004Data | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleFormSubmit = (data: Nom004Data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const showAviso = hash === AVISO_HASH;

  return (
    <div className="min-h-screen pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        <main>
          {showAviso ? (
            <AvisoPrivacidad />
          ) : (
            <PatientForm onSubmit={handleFormSubmit} />
          )}
        </main>

        <Footer />

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
