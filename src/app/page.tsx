'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <motion.main
      className="flex flex-col justify-center items-center text-center px-6 min-h-[80vh] bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src="/Perfil.jpg"
        alt="Foto de Pedro Portela"
        width={200}
        height={200}
        className="rounded-full border-4 border-blue-600 shadow-lg mb-6"
      />

      <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
        Pedro Portela
      </h1>

      <p className="max-w-xl text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        Desenvolvedor Front-end apaixonado por criar interfaces elegantes e funcionais. Atualmente aprimorando habilidades em React e Next.js para construir projetos modernos e responsivos.
      </p>

      <div className="flex gap-6 text-3xl text-gray-700 dark:text-gray-300">
        <a
          href="https://github.com/phaportela"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/pedro-portela-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:phaporte@gmail.com"
          className="hover:text-blue-600"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.main>
  )
}
