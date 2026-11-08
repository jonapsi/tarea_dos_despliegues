export const AvisoPrivacidad = () => {
  return (
    <article className="bg-white rounded-lg shadow-md p-8 text-gray-800 leading-relaxed">
      <a href="#" className="text-blue-700 hover:underline text-sm">
        ← Volver al simulador
      </a>

      <section className="mt-6 mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          Aviso de Privacidad
        </h2>

        <h3 className="font-bold mt-4">Identidad y Domicilio del Responsable</h3>
        <p className="mb-4">
          El Instituto de PCC de Occidente A.C. (en adelante "El Instituto"),
          con domicilio en [Dirección física del Instituto, Ej. Calle, Colonia,
          Ciudad, Jalisco, C.P.], es el responsable del uso y protección de sus
          datos personales, y al respecto le informamos lo siguiente:
        </p>

        <h3 className="font-bold mt-4">Datos Personales que se Recaban</h3>
        <p className="mb-2">
          Para llevar a cabo las finalidades descritas en el presente aviso, a
          través del sistema Obi, recabaremos las siguientes categorías de
          datos:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Datos de Identificación y Contacto:</strong> Nombre
            completo, edad, fecha de nacimiento, domicilio, teléfono y correo
            electrónico.
          </li>
          <li>
            <strong>Datos Sensibles (Salud):</strong> Antecedentes médicos,
            psicológicos y psiquiátricos, estado de salud actual, diagnósticos,
            evolución clínica y cualquier otra información generada durante el
            proceso de atención psicoterapéutica.
          </li>
        </ul>

        <h3 className="font-bold mt-4">Finalidades del Tratamiento de Datos</h3>
        <p className="mb-2">
          Los datos personales que recabamos serán utilizados exclusivamente
          para las siguientes finalidades primarias, que son necesarias para el
          servicio solicitado:
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li>
            Apertura, integración, actualización y gestión del Expediente
            Clínico Electrónico, en estricto apego a la NOM-004-SSA3-2012 y
            NOM-024-SSA3-2012.
          </li>
          <li>
            Gestión de agenda, programación de citas y seguimiento del
            tratamiento psicoterapéutico.
          </li>
          <li>
            Cumplimiento de las obligaciones legales y normativas aplicables a
            los servicios de salud y psicología clínica en México.
          </li>
        </ol>

        <h3 className="font-bold mt-4">Medidas de Seguridad Tecnológica</h3>
        <p className="mb-4">
          El sistema Obi protege la confidencialidad de los datos mediante
          protocolos de cifrado en tránsito (HTTPS/SSL), autenticación estricta
          de usuarios autorizados (tokens JWT) y políticas de seguridad de
          contenido (CSP), garantizando que solo el personal clínico autorizado
          tenga acceso a los expedientes.
        </p>

        <h3 className="font-bold mt-4">
          Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
        </h3>
        <p className="mb-4">
          Usted tiene derecho a conocer qué datos personales tenemos de usted,
          para qué los utilizamos y las condiciones del uso que les damos
          (Acceso). Asimismo, es su derecho solicitar la corrección de su
          información personal si está desactualizada, sea inexacta o
          incompleta (Rectificación); que la eliminemos de nuestros registros o
          bases de datos cuando proceda legalmente (Cancelación); así como
          oponerse al uso de sus datos personales para fines específicos
          (Oposición). Para el ejercicio de cualquiera de los derechos ARCO,
          usted deberá presentar la solicitud respectiva a través del correo
          electrónico: [Correo de contacto clínico/administrativo].
        </p>

        <h3 className="font-bold mt-4">Cambios al Aviso de Privacidad</h3>
        <p className="mb-4">
          El presente aviso de privacidad puede sufrir modificaciones, cambios
          o actualizaciones derivadas de nuevos requerimientos legales o de
          nuestras propias necesidades operativas. Nos comprometemos a
          mantenerlo informado sobre los cambios a través de las notificaciones
          dentro de la plataforma Obi.
        </p>
        <p className="text-sm text-gray-500">
          Última actualización: [Fecha actual]
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          Términos y Condiciones de Uso del Sistema Obi
        </h2>

        <h3 className="font-bold mt-4">1. Aceptación de los Términos</h3>
        <p className="mb-4">
          El acceso y uso de la aplicación web Obi (en adelante "El Sistema")
          constituye la aceptación expresa de los presentes Términos y
          Condiciones por parte de los profesionales de la salud, terapeutas y
          personal administrativo (en adelante "El Usuario") del Instituto de
          PCC de Occidente A.C.
        </p>

        <h3 className="font-bold mt-4">2. Uso Autorizado y Restricciones</h3>
        <p className="mb-2">
          El Sistema es una herramienta tecnológica SaaS diseñada
          exclusivamente para la gestión de agendas y expedientes clínicos. El
          Usuario se compromete a:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Utilizar El Sistema de forma ética y profesional, respetando en todo
            momento el secreto profesional.
          </li>
          <li>
            No compartir sus credenciales de acceso (usuario y contraseña) con
            terceros. Todas las acciones realizadas bajo su cuenta quedarán
            registradas a su nombre mediante bitácoras de auditoría (logs) en el
            servidor.
          </li>
          <li>
            Asegurar que la información clínica ingresada sea veraz, exacta y
            cumpla con los estándares de la normativa mexicana vigente.
          </li>
        </ul>

        <h3 className="font-bold mt-4">3. Privacidad y Seguridad</h3>
        <p className="mb-4">
          El Usuario reconoce que la información procesada en El Sistema es
          altamente sensible y está protegida por leyes federales. Queda
          estrictamente prohibida la extracción, descarga o divulgación no
          autorizada de historiales clínicos, notas de evolución o datos
          personales de los pacientes fuera de los canales institucionales.
        </p>

        <h3 className="font-bold mt-4">4. Disponibilidad del Servicio</h3>
        <p className="mb-4">
          El Sistema está diseñado para operar con alta disponibilidad; sin
          embargo, no se garantiza el acceso ininterrumpido debido a posibles
          mantenimientos programados, actualizaciones técnicas o eventos de
          fuerza mayor ajenos a la infraestructura de desarrollo.
        </p>

        <h3 className="font-bold mt-4">5. Propiedad Intelectual</h3>
        <p className="mb-4">
          La arquitectura de software, bases de datos, código fuente y diseño
          de la interfaz de Obi son propiedad intelectual registrada en el
          marco del diseño del sistema para el Instituto. Está prohibida su
          reproducción, copia, ingeniería inversa o distribución sin
          autorización expresa.
        </p>

        <h3 className="font-bold mt-4">6. Modificaciones a los Términos</h3>
        <p className="mb-4">
          La administración del sistema se reserva el derecho de modificar
          estos términos en cualquier momento. El uso continuo de la plataforma
          después de la publicación de las modificaciones constituirá la
          aceptación de las mismas.
        </p>
      </section>
    </article>
  );
};
