import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ title, description, link }: ProjectProps) {
  return (
    <div
      className="
        border rounded-lg p-6
        bg-blue-900
        shadow-md hover:shadow-xl transition
        text-white
        hover:bg-gradient-to-r hover:from-blue-700 hover:via-indigo-800 hover:to-purple-800
        duration-500
      "
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="mb-6 text-blue-300">{description}</p>
      <Link 
        href={link} 
        className="inline-block text-indigo-300 font-semibold hover:text-white underline transition"
      >
        Ver projeto →
      </Link>
    </div>
  );
}
