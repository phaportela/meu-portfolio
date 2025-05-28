import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Landing Page Responsiva",
    description: "Uma landing page simples feita com HTML, CSS e JS puro.",
    link: "https://github.com/seu-usuario/landing-page",
  },
  {
    title: "Clone do YouTube",
    description: "Clone da interface do YouTube usando Tailwind CSS.",
    link: "https://github.com/seu-usuario/youtube-clone",
  },
  {
    title: "Jogo da Velha",
    description: "Feito em JavaScript puro. Simples e divertido!",
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
