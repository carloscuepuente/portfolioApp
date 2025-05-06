import { Link } from "react-router-dom";
import {
  CodeIcon,
  AppWindow,
  DownloadIcon,
  Server,
  Wrench,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import curriculum from "../assets/CVCarlosCue.pdf";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      {/* Sección Hero */}
      <div className="max-w-6xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-lightSlate">
          Hola, soy <span className="text-cianGreen">Carlos Cue</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-brightSlate mb-6">
          Desarrollador Web Full Stack
        </h2>

        <p className="text-lg text-lightSlate mb-8 max-w-4xl mx-auto">
          Soy un desarrollador web con experiencia en JavaScript, especializado
          en crear interfaces modernas y responsivas utilizando tecnologías como
          React, Tailwind CSS y Vite. Me apasiona transformar ideas en productos
          digitales funcionales y atractivos, cuidando tanto la experiencia de
          usuario como la calidad del código. He trabajado en diversos
          proyectos, desde aplicaciones web hasta sitios estáticos, siempre
          enfocado en ofrecer soluciones eficientes y escalables. Mi objetivo es
          seguir creciendo profesionalmente, aportando valor a equipos dinámicos
          y proyectos desafiantes
        </p>

        {/* Botones de acción */}
        <div className="flex justify-center space-x-4 mb-12">
          <Link
            to="/projects"
            className="bg-[#64ffda] text-[#0a192f] px-6 py-3 rounded-lg 
                      hover:bg-[#52e6c5] transition flex items-center font-semibold"
          >
            <AppWindow className="mr-2" /> Ver Proyectos
          </Link>

          <a
            href={curriculum}
            download
            className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-lg 
                    hover:bg-[#0a192f] hover:text-white transition flex items-center font-semibold"
          >
            <DownloadIcon className="mr-2" /> Descargar CV
          </a>
        </div>

        {/* Sección de Habilidades Principales */}
        <div className="grid md:grid-cols-3 gap-6 max-w-18xl mx-auto">
          <div className="bg-brightSlate p-6 rounded-lg shadow-md">
            <CodeIcon className="mx-auto text-darkBlue mb-4" size={48} />
            <h3 className="text-xl text-darkBlue font-semibold mb-2">
              Desarrollo Frontend
            </h3>
            <p className="text-darkBlue">
              Construyo interfaces modernas con React, usando Tailwind CSS, MUI
              y Bootstrap para lograr diseños responsivos, accesibles y
              reutilizables centrados en la experiencia del usuario.
            </p>
          </div>

          <div className="bg-brightSlate p-6 rounded-lg shadow-md">
            <Server className="mx-auto text-darkBlue mb-4" size={48} />
            <h3 className="text-xl text-darkBlue font-semibold mb-2">
              Desarrollo Backend
            </h3>
            <p className="text-darkBlue">
              Desarrollo APIs con Node.js y Express, integrando bases de datos
              relacionales y autenticación JWT, siguiendo buenas prácticas para
              escalabilidad, seguridad y mantenimiento del código.
            </p>
          </div>

          <div className="bg-brightSlate p-6 rounded-lg shadow-md">
            <Wrench className="mx-auto text-darkBlue mb-4" size={48} />
            <h3 className="text-xl text-darkBlue font-semibold mb-2">
              Integración y Despliegue
            </h3>
            <p className="text-darkBlue">
              Experiencia integrando APIs externas con herramientas como
              Postman, y desplegando aplicaciones en Railway y Netlify,
              gestionando entornos y variables según las necesidades del
              proyecto.
            </p>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="https://github.com/carloscuepuente"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <GithubIcon size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/carlosalbertocuepuente/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition"
          >
            <LinkedinIcon size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
