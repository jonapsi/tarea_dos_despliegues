export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
      <p>
        © {new Date().getFullYear()} Instituto de PCC de Occidente A.C. ·{" "}
        <a
          href="#aviso-privacidad"
          className="text-blue-700 hover:underline font-medium"
        >
          Aviso de Privacidad y Términos de Uso
        </a>
      </p>
    </footer>
  );
};
