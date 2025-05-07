export default function About() {
  return (
    <div className="text-lightSlate max-w-4xl mx-auto">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-brightSlate mb-8 text-left">
        Sobre Mí
      </h1>

      {/* About Me Section */}
      <div className="mb-12">
        <div className="text-left">
          <p className="mb-4">
            Soy <span className="text-cianGreen font-semibold">Carlos Cue</span>
            , Ingeniero Industrial transformado en Desarrollador Web Full Stack.
            Mi travesía tecnológica comenzó con una simple pregunta: ¿Cómo puedo
            construir herramientas que realmente impacten a las personas? Esta
            curiosidad me llevó a sumergirme en el mundo del desarrollo web,
            primero de forma autodidacta y luego consolidando mis conocimientos
            en el bootcamp de Hack a Boss.
          </p>
          <p className="mb-4">
            Lo que verdaderamente me apasiona del desarrollo es el poder para
            <span className="text-cianGreen font-semibold">
              {" "}
              resolver problemas complejos{" "}
            </span>
            y crear soluciones que simplifiquen la vida de las personas. Para
            mí, cada línea de código es una oportunidad para transformar ideas
            en aplicaciones funcionales que aportan valor tangible.
          </p>
          <p className="mb-4">
            Mi formación como Ingeniero Industrial me ha proporcionado una
            perspectiva única para abordar los desafíos tecnológicos: combino
            pensamiento analítico con creatividad para desarrollar interfaces
            intuitivas y arquitecturas eficientes.
          </p>
          <p className="mb-4">
            Actualmente busco colaborar en proyectos donde pueda aplicar mis
            habilidades técnicas en React, JavaScript y Node.js para crear
            productos digitales con propósito. ¿Tienes un problema que resolver
            o una idea que materializar? Estoy convencido de que la tecnología
            bien aplicada puede marcar la diferencia.
          </p>
          <p className="text-cianGreen font-semibold mb-8">
            ¡Conversemos sobre cómo podemos construir algo extraordinario
            juntos!
          </p>
        </div>
      </div>

      {/* Technologies & Skills Section - Two Column Layout on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Technologies Column */}
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-brightSlate mb-6 flex items-center">
            <span className="text-cianGreen mr-2">🛠️</span> Tecnologías
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-cianGreen mb-2">
              Frontend
            </h3>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Librerías de componentes (MUI)</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-cianGreen mb-2">
              Backend
            </h3>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>SQL (MySQL)</li>
              <li>API REST</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-cianGreen mb-2">
              Herramientas & DevOps
            </h3>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Git & GitHub</li>
              <li>Netlify</li>
              <li>Postman</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cianGreen mb-2">
              Otros Lenguajes & Herramientas
            </h3>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Python</li>
              <li>Metodologías Ágiles</li>
            </ul>
          </div>
        </div>

        {/* Soft Skills Column */}
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-brightSlate mb-6 flex items-center">
            <span className="text-cianGreen mr-2">🤝</span> Habilidades Blandas
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cianGreen mb-2">
                Resolución de Problemas
              </h3>
              <p>
                Enfoco los desafíos técnicos como oportunidades para crear
                soluciones innovadoras, descomponiendo problemas complejos en
                partes manejables.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cianGreen mb-2">
                Aprendizaje Continuo
              </h3>
              <p>
                Mi transición de la ingeniería industrial al desarrollo web
                demuestra mi capacidad para adquirir nuevos conocimientos y
                adaptarme rápidamente a nuevas tecnologías.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cianGreen mb-2">
                Trabajo Colaborativo
              </h3>
              <p>
                Experiencia trabajando en equipos multidisciplinarios,
                contribuyendo activamente en proyectos colaborativos a través de
                GitHub y otras plataformas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cianGreen mb-2">
                Comunicación Efectiva
              </h3>
              <p>
                Capacidad para explicar conceptos técnicos complejos de manera
                clara y accesible, facilitando la comunicación entre equipos
                técnicos y no técnicos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cianGreen mb-2">
                Pensamiento Analítico
              </h3>
              <p>
                Mi formación como Ingeniero Industrial me ha proporcionado una
                metodología estructurada para abordar problemas y diseñar
                soluciones eficientes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cianGreen mb-2">
                Gestión del Tiempo
              </h3>
              <p>
                Habilidad para priorizar tareas, cumplir plazos y manejar
                múltiples proyectos simultáneamente sin comprometer la calidad
                del trabajo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
