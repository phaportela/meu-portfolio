import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Em breve",
    description: "Em breve",
    link: "https://github.com/seu-usuario/landing-page",
  },
  {
    title: "Em breve",
    description: "Em breve",
    link: "https://github.com/seu-usuario/youtube-clone",
  },
  {
    title: "Em breve",
    description: "Em breve",
    link: "https://github.com/seu-usuario/jogo-da-velha",
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
