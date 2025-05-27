import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex gap-4">
        <li><Link href="/">Início</Link></li>
        <li><Link href="/about">Sobre</Link></li>
      </ul>
    </nav>
  );
}