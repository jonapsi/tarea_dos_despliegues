export const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-8 rounded-b-lg shadow-md mb-8">
      <h1 className="text-3xl font-bold mb-4">
        Simulador NOM-004: Ponte en los zapatos de tu paciente
      </h1>
      <p className="text-lg leading-relaxed max-w-4xl">
        La normativa mexicana exige recabar datos muy específicos antes de
        iniciar un tratamiento. Como profesionales de la salud mental, sabemos
        que pedir la CURP o el domicilio exacto antes de establecer rapport
        puede sentirse intrusivo. Te invitamos a llenar esta ficha de
        identificación desde la perspectiva de un paciente nuevo. Al finalizar,
        verás cómo se estructuran estos datos en un expediente electrónico
        clínico.
      </p>
    </header>
  );
};
