import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ title, description, link }: ProjectProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link href={link} className="text-blue-600 hover:underline">
        Ver projeto →
      </Link>
    </div>
  );
}
