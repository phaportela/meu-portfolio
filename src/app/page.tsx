'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <motion.main
      className="flex flex-col justify-center items-center text-center p-6 min-h-[80vh]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Olá, sou Pedro Portela
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
        Desenvolvedor Front-End em formação com foco em criar interfaces modernas, acessíveis e com alto desempenho.
        Atualmente estudando <span className="font-semibold text-blue-600">React</span>, <span className="font-semibold text-blue-600">Next.js</span> e princípios de UI/UX.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300"
        >
          Ver Projetos
        </Link>
        <Link
          href="/contact"
          className="border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-medium px-6 py-3 rounded-lg transition-all duration-300"
        >
          Entrar em Contato
        </Link>
      </div>
      <div className="mt-6 flex gap-6 text-2xl text-gray-700 dark:text-gray-300">
  <a href="https://github.com/phaportela" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
    <FaGithub />
  </a>
  <a href="https://www.linkedin.com/in/pedro-portela-dev/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
    <FaLinkedin />
  </a>
  <a href="mailto:phaporte@gmail.com" className="hover:text-blue-600">
    <FaEnvelope />
  </a>
</div>

    </motion.main>
  );
}
