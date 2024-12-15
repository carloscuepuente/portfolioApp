import ProjectCard from "../components/ProjectCard";
import wonderFlyGif from "../assets/wonderFlyGif.gif";
import turnosApp from "../assets/turnosApp.gif";
import erpMaker from "../assets/erpmaker.gif";
import matterJsMaze from "../assets/matterJsMaze.gif";
import hackaColor from "../assets/hackaColor.gif";
import todoList from "../assets/todoList.gif";
const projects = [
  {
    title: "WonderFly",
    description:
      "Aplicación full stack integrada con la API de Amadeus para búsqueda de vuelos. Incluye un servidor en Express, base de datos MySQL, autenticación y autorización de usuarios, con una interfaz responsiva moderna e intuitiva",
    tools: ["Node.js", "Express", "MySQL", "React", "Amadeus Api", "Tailwinds"],
    githubUrl: "https://github.com/your-username/halcyon-theme",
    // demoUrl:
    //   "https://marketplace.visualstudio.com/items?itemName=your-username.halcyon-theme",
    gif: wonderFlyGif,
  },
  {
    title: "TurnosApp",
    description:
      "Aplicación React con MUI que utiliza la biblioteca FullCalendar para gestionar horarios laborales y calcular variables contractuales del acuerdo de V handling en España. Incluye persistencia de datos mediante Local Storage para mantener la información de los usuarios.",
    tools: ["React", "MUI", "MomentJs", "FullCalendar", "Netlify"],
    githubUrl: "https://github.com/carloscuepuente/turnosApp",
    demoUrl: "https://turnosapp.netlify.app/",
    gif: turnosApp,
  },
  {
    title: "ErpMaker",
    description:
      "Aplicación de React con MUI para generar y descargar un documento de Word con docxtemplater, mediante un formulario",
    tools: ["React", "MUI", "MomentJs", "Docxtemplater", "Netlify"],
    githubUrl: "https://github.com/carloscuepuente/erpmaker",
    demoUrl: "https://erpmaker.netlify.app/",
    gif: erpMaker,
  },
  {
    title: "MatterJs Maze",
    description:
      "Creación de un laberinto utilizando el algoritmo de backtracking con javascript y el motor de física Matter Js.",
    tools: ["Javascript", "Matter Js", "backtracking", "Netlify"],
    githubUrl: "https://github.com/carloscuepuente/Matter-JS-Maze-Game",
    demoUrl: "https://matter-js-maze-game.netlify.app/",
    gif: matterJsMaze,
  },
  {
    title: "Hack a Color Game",
    description:
      "Una aplicación interactiva que desafía a los usuarios a identificar el color correcto basado en un código RGB proporcionado. Construida con HTML, CSS y JavaScript",
    tools: ["Javascript", "HTML", "CSS"],
    githubUrl: "https://github.com/carloscuepuente/colorGameApp",
    demoUrl: "https://hackacolorgame.netlify.app/",
    gif: hackaColor,
  },
  {
    title: "Todo List",
    description:
      "Aplicación de lista de tareas con persistencia de datos con localStorage",
    tools: ["React", "MUI"],
    githubUrl: "https://github.com/carloscuepuente/todoList",
    demoUrl: "https://todo-list-proyect.netlify.app/",
    gif: todoList,
  },
];

export default function Projects() {
  return (
    <div className="">
      <h2 className="text-5xl md:text-6xl font-bold mb-4 text-lightSlate">
        Mis Proyectos
      </h2>
      <p className="text-lg text-brightSlate mb-8 max-w-xl mx-auto">
        Estos son algunos de los proyectos en los que he participado y algunas
        de las tecnologías con las que estoy familiarizado.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tools={project.tools}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            gif={project.gif}
          />
        ))}
      </div>
    </div>
  );
}
