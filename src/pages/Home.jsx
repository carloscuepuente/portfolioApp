import { Link } from "react-router-dom";
import {
  CodeIcon,
  RocketIcon,
  HeartIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      {/* Sección Hero */}
      <div className="max-w-4xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-lightSlate">
          Hola, soy <span className="text-cianGreen">Carlos Cue</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-brightSlate mb-6">
          Desarrollador Web Full Stack
        </h2>

        <p className="text-lg text-lightSlate mb-8 max-w-xl mx-auto">
          Apasionado por crear soluciones digitales innovadoras y eficientes. Me
          especializo en desarrollo web moderno con tecnologías como React,
          Node.js y aplicaciones escalables.
        </p>

        {/* Botones de acción */}
        <div className="flex justify-center space-x-4 mb-12">
          <Link
            to="/projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg 
            hover:bg-blue-600 transition flex items-center"
          >
            <RocketIcon className="mr-2" /> Ver Proyectos
          </Link>

          <a
            href="/CV-TuNombre.pdf"
            download
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg 
            hover:bg-gray-300 transition flex items-center"
          >
            <DownloadIcon className="mr-2" /> Descargar CV
          </a>
        </div>

        {/* Sección de Habilidades Principales */}
        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CodeIcon className="mx-auto text-blue-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Desarrollo Frontend</h3>
            <p className="text-gray-600">
              Especialista en React, Vue y tecnologías modernas de frontend
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <RocketIcon className="mx-auto text-green-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Desarrollo Backend</h3>
            <p className="text-gray-600">
              Experiencia en Node.js, Express y bases de datos relacionales
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <HeartIcon className="mx-auto text-red-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Diseño UX/UI</h3>
            <p className="text-gray-600">
              Creación de interfaces intuitivas y experiencias de usuario
              fluidas
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
