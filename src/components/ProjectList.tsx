type Project = {
  title: string;
  description: string;
  url: string;
};

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="border p-4 rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="mb-2">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Ver projeto
          </a>
        </div>
      ))}
    </div>
  );
}
