'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/about', label: 'Sobre' },
    { href: '/projects', label: 'Projetos' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo substituindo o texto */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png" // Caminho da sua imagem na pasta /public
          alt="Logo"
          width={40}
          height={40}
          className="hover:opacity-80 transition-opacity"
          priority
        />
      </Link>

      {/* Botão hamburguer para telas pequenas */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu desktop */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-gray-400">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu mobile com animação */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col gap-4 px-6 py-4 md:hidden z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
