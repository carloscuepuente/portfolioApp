import ProjectCard from "../components/ProjectCard";
import wonderFlyGif from "../assets/wonderFlyGif.gif";
import turnosApp from "../assets/turnosApp.gif";
const projects = [
  {
    title: "WonderFly",
    description:
      "Aplicación de buscador de Vuelos integrada con la API de Amadeus",
    tools: ["Node.js", "React", "Amadeus Api", "Tailwinds"],
    githubUrl: "https://github.com/your-username/halcyon-theme",
    demoUrl:
      "https://marketplace.visualstudio.com/items?itemName=your-username.halcyon-theme",
    gif: wonderFlyGif,
  },
  {
    title: "TurnosApp",
    description:
      "Aplicación React con MUI que utiliza la biblioteca FullCalendar para gestionar horarios laborales y calcular variables contractuales del acuerdo de V handling en España. Incluye persistencia de datos mediante Local Storage para mantener la información de los usuarios.",
    tools: ["React", "MUI", "MomentJs", "FullCalendar"],
    githubUrl: "https://github.com/carloscuepuente/turnosApp",
    demoUrl: "https://turnosapp.netlify.app/",
    gif: turnosApp,
  },
  {
    title: "WonderFly",
    description:
      "Aplicación de buscador de Vuelos integrada con la API de Amadeus",
    tools: ["Node.js", "React", "Amadeus Api", "Tailwinds"],
    githubUrl: "https://github.com/your-username/halcyon-theme",
    // demoUrl:
    //   "https://marketplace.visualstudio.com/items?itemName=your-username.halcyon-theme",
    gif: wonderFlyGif,
  },
  {
    title: "WonderFly",
    description:
      "Aplicación de buscador de Vuelos integrada con la API de Amadeus",
    tools: ["Node.js", "React", "Amadeus Api", "Tailwinds"],
    githubUrl: "https://github.com/your-username/halcyon-theme",
    demoUrl:
      "https://marketplace.visualstudio.com/items?itemName=your-username.halcyon-theme",
    gif: wonderFlyGif,
  },
  {
    title: "WonderFly",
    description:
      "Aplicación de buscador de Vuelos integrada con la API de Amadeus",
    tools: ["Node.js", "React", "Amadeus Api", "Tailwinds"],
    githubUrl: "https://github.com/your-username/halcyon-theme",
    demoUrl:
      "https://marketplace.visualstudio.com/items?itemName=your-username.halcyon-theme",
    gif: wonderFlyGif,
  },
  {
    title: "WonderFly",
    description:
      "Aplicación de buscador de Vuelos integrada con la API de Amadeus",
    tools: ["Node.js", "React", "Amadeus Api", "Tailwinds"],
    githubUrl: "https://github.com/your-username/halcyon-theme",
    demoUrl:
      "https://marketplace.visualstudio.com/items?itemName=your-username.halcyon-theme",
    gif: wonderFlyGif,
  },
];

export default function Projects() {
  return (
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
  );
}
