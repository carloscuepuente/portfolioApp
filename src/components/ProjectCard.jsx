import { GithubIcon, ExternalLinkIcon } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  tools,
  githubUrl,
  demoUrl,
  gif,
}) => {
  return (
    <div className="bg-gray-800 text-gray-200 rounded-lg overflow-hidden shadow-lg">
      <div
        className="h-52 bg-cover bg-center"
        style={{ backgroundImage: `url(${gif})` }}
      ></div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-400 px-2 py-1 rounded-md text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="text-gray-400 hover:text-gray-300 transition" />
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="text-gray-400 hover:text-gray-300 transition" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
